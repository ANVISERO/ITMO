import beans.Processor;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.Test;
import utils.Hit;

import java.sql.SQLException;


public class HitTest {

    @Test
    @DisplayName("Should return \"Hit\" on valid data to hit")
    public void testHitOnCorrectData() {
        Processor processor;
        try {
            processor = new Processor();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        Hit hit = new Hit(2, 1, 3);
        processor.setHit(hit);

        processor.addTestHit();
        Assertions.assertEquals("Hit", hit.getHit());

    }

    @Test
    @DisplayName("Should return \"Miss\" on invalid data to hit")
    public void testHitOnIncorrectData() {
        Processor processor;
        try {
            processor = new Processor();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        Hit hit = new Hit(30, 1, 3);
        processor.setHit(hit);

        processor.addTestHit();
        Assertions.assertEquals("Miss", hit.getHit());
    }

    @Test
    @DisplayName("Should return \"Hit\" on data hit limits")
    public void testHitOnCorrectLimitData() {
        Processor processor;
        try {
            processor = new Processor();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        Hit hit = new Hit(0, 2.999999999, 3);
        processor.setHit(hit);

        processor.addTestHit();
        Assertions.assertEquals("Hit", hit.getHit());

    }
}
