package com.anvisero.lab3mispi.beans;


import com.anvisero.lab3mispi.markDTO.MarkDTO;
import com.anvisero.lab3mispi.model.Mark;
import com.anvisero.lab3mispi.service.MarkService;
import lombok.*;

import javax.annotation.ManagedBean;
import java.io.Serializable;
import java.util.List;


@ManagedBean
@Data
public class MarkManager implements Serializable {
    private MarkMaker markMaker;
    private String timezone = "UTC";
    @Getter(AccessLevel.NONE) @Setter(AccessLevel.NONE)
    private final MarkService markService;

    public MarkManager(){
        this.markService = new MarkService();
    }

    public void addMark(){
        Mark mark = markMaker.makeNewMark();
        markService.addMark(mark);
    }

    public List<MarkDTO> getMarks(){
        return markService.getALLMarks(timezone);
    }
}
