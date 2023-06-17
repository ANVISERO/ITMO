package anvisero.prog.lab3.beans;

import anvisero.prog.lab3.markDTO.MarkDTO;
import anvisero.prog.lab3.service.MarkService;
import anvisero.prog.lab3.model.Mark;
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
