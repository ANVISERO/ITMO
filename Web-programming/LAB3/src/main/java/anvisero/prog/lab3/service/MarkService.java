package anvisero.prog.lab3.service;

import anvisero.prog.lab3.markDAO.MarkDAO;
import anvisero.prog.lab3.markDTO.MarkDTO;
import anvisero.prog.lab3.model.Mark;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MarkService {
    private final MarkDAO markDAO;
    public MarkService() {
        this.markDAO = new MarkDAO();
    }

    public void addMark(Mark mark) {
        long leadTime = mark.getLeadTime();
        mark.setLeadTime((System.nanoTime() - leadTime)/1000);
        markDAO.addMark(mark);
    }

    public List<MarkDTO> getALLMarks(String timezone){
        List<Mark> marks = markDAO.getAllMarks(timezone);
        List<MarkDTO> marksEnd = new ArrayList<>();
        for(Mark markItem : marks) {
            LocalDateTime time = markItem.getTime();
            ZonedDateTime zonedUTC = time.atZone(ZoneId.of("UTC"));
            ZonedDateTime zoned = zonedUTC.withZoneSameInstant(ZoneId.of(timezone));
            MarkDTO mark = new MarkDTO(markItem.getXValue(), markItem.getYValue(),
                    markItem.getRValue(), markItem.getHit(),
                    zoned.toLocalDateTime().format(DateTimeFormatter.ofPattern("HH:mm:ss")),
                    markItem.getLeadTime());
            marksEnd.add(mark);
        }
        Collections.reverse(marksEnd);
        return marksEnd;
    }
}
