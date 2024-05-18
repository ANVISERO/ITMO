package task3;

import com.anvisero.task3.BattleFleet;
import com.anvisero.task3.Cruiser;
import com.anvisero.task3.exception.CruiserJoinException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class BattleFleetTest {
    Cruiser cruiser1;
    Cruiser cruiser2;
    Cruiser cruiser3;
    List<Cruiser> cruisers = new ArrayList<>();
    BattleFleet battleFleet;

    @BeforeEach
    void init() {
        cruiser1 = new Cruiser("cruiser1", 100, 100, 100, 35);
        cruiser2 = new Cruiser("cruiser2", 100, 100, 100, 10);
        cruiser3 = new Cruiser("cruiser3", 100, 100, 100, 10);
        cruisers.add(cruiser1);
        cruisers.add(cruiser2);
        battleFleet = new BattleFleet();
        battleFleet.setCruisers(cruisers);
    }

    @Test
    @DisplayName("Check join fleet")
    public void checkJoinFleet() {
        battleFleet.joinFleet(cruiser3);

        assertEquals(3, battleFleet.getCruisers().size());
        assertEquals(cruiser3, battleFleet.getCruisers().get(2));
    }

    @Test
    @DisplayName("Check join fleet")
    public void checkJoinFleetWithZeroHealth() {
        cruiser3.setHealth(0);
        CruiserJoinException exception = assertThrows(CruiserJoinException.class, () -> battleFleet.joinFleet(cruiser3));

        assertEquals("Can't add cruiser to the fleet, because it is dead", exception.getMessage());
    }
}
