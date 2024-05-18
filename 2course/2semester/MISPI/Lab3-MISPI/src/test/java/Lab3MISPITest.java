import com.example.lab3mispi.model.Mark;
import com.example.lab3mispi.utils.HitMark;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.time.Clock;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class Lab3MISPITest {
    private Mark mark;
    private DataBaseStub dataBaseStub;

    @Before
    public void create() {
        mark = new Mark();
        ArrayList<Mark> marks = new ArrayList<>();
        marks.add(new Mark(-1.2, -2.1, 2.0, "miss", LocalDateTime.now(Clock.systemUTC()), 142));
        marks.add(new Mark(0.3, 0.3, 1.0, "hit", LocalDateTime.now(Clock.systemUTC()), 1424));
        marks.add(new Mark(-0.3, 0.5, 1.0, "hit", LocalDateTime.now(Clock.systemUTC()), 817));
        dataBaseStub = new DataBaseStub(marks);
    }

    @After
    public void resetPoint() {
        mark = null;
    }

    @Test
    public void testMarkCreating() {
        Mark newMark = new Mark(-1.2, -2.1, 2.0, "miss", LocalDateTime.now(Clock.systemUTC()), 142);
        mark.setXValue(-1.2);
        mark.setYValue(-2.1);
        mark.setRValue(2.0);
        mark.setHit("miss");
        mark.setTime(LocalDateTime.now(Clock.systemUTC()));
        mark.setLeadTime(142);

        Assert.assertEquals(newMark.getXValue(), mark.getXValue());
        Assert.assertEquals(newMark.getYValue(), mark.getYValue());
        Assert.assertEquals(newMark.getRValue(), mark.getRValue());
        Assert.assertEquals(newMark.getHit(), mark.getHit());
        Assert.assertEquals(newMark.getLeadTime(), mark.getLeadTime());
    }

    @Test
    public void testFirstQuarter() {
        for (int r = 1; r <= 5; r++) {
            mark.setRValue((double) r);
            for (double x = 0.01; x <= 10; x += 0.01) {
                for (double y = 0.01; y <= 10; y += 0.01) {
                    mark.setXValue(x);
                    mark.setYValue(y);
                    mark.setHit(HitMark.hitMark(x, y, (double) r) ? "hit" : "miss");
                    if (Math.ceil(x * Math.pow(10, 2)) / Math.pow(10, 2) <= r && Math.ceil(y * Math.pow(10, 2)) / Math.pow(10, 2) <= (double) r/2) {
                        Assert.assertEquals("hit", mark.getHit());
                    } else {
                        Assert.assertEquals("miss", mark.getHit());
                    }
                }
            }
        }
    }

    @Test
    public void testSecondQuarter() {
        for (int r = 1; r <= 5; r++) {
            mark.setRValue((double) r);
            for (double x = -10; x < 0; x += 0.01) {
                for (double y = 0.01; y <= 10; y += 0.01) {
                    mark.setXValue(x);
                    mark.setYValue(y);
                    mark.setHit(HitMark.hitMark(x, y, (double) r) ? "hit" : "miss");
                    if (Math.ceil((x*x + y*y) * Math.pow(10, 3)) / Math.pow(10, 3) <= Math.ceil(r * r * Math.pow(10, 3)) / Math.pow(10, 3)) {
                        Assert.assertEquals("hit", mark.getHit());
                    } else {
                        Assert.assertEquals("miss", mark.getHit());
                    }
                }
            }
        }
    }

    @Test
    public void testThirdQuarter() {
        for (int r = 1; r <= 5; r++) {
            mark.setRValue((double) r);
            for (double x = -10; x < 0; x += 0.01) {
                for (double y = -10; y < 0; y += 0.01) {
                    mark.setXValue(x);
                    mark.setYValue(y);
                    mark.setHit(HitMark.hitMark(x, y, (double) r) ? "hit" : "miss");
                    Assert.assertEquals("miss", mark.getHit());
                }
            }
        }
    }

    @Test
    public void testFourthQuarter() {
        for (int r = 1; r <= 5; r++) {
            mark.setRValue((double) r);
            for (double x = 0.01; x <= 10; x += 0.01) {
                for (double y = -10; y < 0; y += 0.01) {
                    mark.setXValue(x);
                    mark.setYValue(y);
                    mark.setHit(HitMark.hitMark(x, y, (double) r) ? "hit" : "miss");
                    if (y >= x-r) {
                        Assert.assertEquals("hit", mark.getHit());
                    } else {
                        Assert.assertEquals("miss", mark.getHit());
                    }
                }
            }
        }
    }

    @Test
    public void testAxis() {
        double[] xValues = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7};
        double[] yValues = {2, 1.5, 1, 0.75, 0.5, 0.25, 0, -0.25, -0.5, -1, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
        double[] rValues = {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5};

        boolean[] expected = {false, false, true, true, true, true, true, true, true, true, false, false, false, true, true, true, true, true, true, true, true, true, true, false, false};
        boolean[] result = new boolean[25];

        for (int i = 0; i < xValues.length; i++) {
            result[i] = HitMark.hitMark(xValues[i], yValues[i], rValues[i]);
        }
        Assert.assertArrayEquals(expected, result);
    }

    @Test
    public void randomPoint() {
        String hit;
        double x, y, r;
        for (int i = 0; i < 1000; i++) {
            x =  (Math.random() * 50);
            y =  (Math.random() * 50);
            r = (Math.random() * 50 + 1);
            mark.setXValue(x);
            mark.setYValue(y);
            mark.setRValue(r);
            if ((x >= 0 && y <= 0 && y >= x-r) || (x <= 0 && y >= 0 && x*x + y*y <= r*r) || (x >= 0 && x <= r && y >= 0 && y <= r/2)) {
                hit = "hit";
            } else {
                hit = "miss";
            }
            mark.setHit(HitMark.hitMark(mark.getXValue(), mark.getYValue(), mark.getRValue()) ? "hit" : "miss");
            Assert.assertEquals(hit, mark.getHit());
        }
    }

    @Test()
    public void nullPointFields() {
        Assert.assertNull(mark.getXValue());
        Assert.assertNull(mark.getYValue());
        Assert.assertNull(mark.getRValue());
        Assert.assertNull(mark.getHit());
        Assert.assertNull(mark.getTime());
    }

    static class DataBaseStub {
        private final ArrayList<Mark> list;

        DataBaseStub(ArrayList<Mark> marks) {
            this.list = marks;
        }

        public List<Mark> getMarks() {
            return list;
        }

        public void addMark(Mark mark) {
            list.add(mark);
        }
    }

    @Test
    public void getPoints() {
        List<Mark> newMarks = new ArrayList<>();
        newMarks.add(new Mark(-1.2, -2.1, 2.0, "miss", LocalDateTime.now(Clock.systemUTC()), 142));
        newMarks.add(new Mark(0.3, 0.3, 1.0, "hit", LocalDateTime.now(Clock.systemUTC()), 1424));
        newMarks.add(new Mark(-0.3, 0.5, 1.0, "hit", LocalDateTime.now(Clock.systemUTC()), 817));
        dataBaseStub.getMarks();
        for (int i = 0; i < newMarks.size(); i++) {
            Assert.assertEquals(newMarks.get(i).getXValue(), dataBaseStub.getMarks().get(i).getXValue());
            Assert.assertEquals(newMarks.get(i).getYValue(), dataBaseStub.getMarks().get(i).getYValue());
            Assert.assertEquals(newMarks.get(i).getRValue(), dataBaseStub.getMarks().get(i).getRValue());
            Assert.assertEquals(newMarks.get(i).getLeadTime(), dataBaseStub.getMarks().get(i).getLeadTime());
            Assert.assertEquals(newMarks.get(i).getHit(), dataBaseStub.getMarks().get(i).getHit());
        }
    }

    @Test
    public void addPoint() {
        List<Mark> newMarks = new ArrayList<>();
        Mark markToAdd = new Mark(0.9, -0.7, 1.0, "miss", LocalDateTime.now(Clock.systemUTC()), 22);

        newMarks.add(new Mark(-1.2, -2.1, 2.0, "miss", LocalDateTime.now(Clock.systemUTC()), 142));
        newMarks.add(new Mark(0.3, 0.3, 1.0, "hit", LocalDateTime.now(Clock.systemUTC()), 1424));
        newMarks.add(new Mark(-0.3, 0.5, 1.0, "hit", LocalDateTime.now(Clock.systemUTC()), 817));
        newMarks.add(new Mark(0.9, -0.7, 1.0, "miss", LocalDateTime.now(Clock.systemUTC()), 22));

        dataBaseStub.addMark(markToAdd);
        for (int i = 0; i < newMarks.size(); i++) {
            Assert.assertEquals(newMarks.get(i).getXValue(), dataBaseStub.getMarks().get(i).getXValue());
            Assert.assertEquals(newMarks.get(i).getYValue(), dataBaseStub.getMarks().get(i).getYValue());
            Assert.assertEquals(newMarks.get(i).getRValue(), dataBaseStub.getMarks().get(i).getRValue());
            Assert.assertEquals(newMarks.get(i).getLeadTime(), dataBaseStub.getMarks().get(i).getLeadTime());
            Assert.assertEquals(newMarks.get(i).getHit(), dataBaseStub.getMarks().get(i).getHit());
        }
    }
}
