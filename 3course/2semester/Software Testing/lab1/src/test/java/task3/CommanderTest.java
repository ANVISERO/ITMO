package task3;

import com.anvisero.task3.Commander;
import com.anvisero.task3.Cruiser;
import com.anvisero.task3.Galaxy;
import com.anvisero.task3.emum.Mood;
import com.anvisero.task3.exception.StartingBattleException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class CommanderTest {
    Commander commander1;
    Commander commander2;
    Set<Cruiser> enemies;

    @BeforeEach
    void init() {
        commander1 = new Commander(
                "Commander1",
                60, 60,
                Mood.ANGRY,
                70,
                new Galaxy("galaxy1")
        );
        commander2 = new Commander(
                "Commander2",
                60, 60,
                Mood.ANGRY,
                75,
                new Galaxy("galaxy2")
        );
        enemies = new HashSet<>();
        commander2.setCruisers(enemies);
    }

    @Test
    @DisplayName("Check starting battle without cruisers")
    public void checkStartingWithoutCruisers() {
        enemies.add(new Cruiser("1", 100, 90, 90, 55));
        Throwable exception = assertThrows(StartingBattleException.class, () -> commander1.startBattle(commander2));
        assertEquals("No cruisers for attack!", exception.getMessage());
    }

    @Test
    @DisplayName("Check starting battle without enemies")
    public void checkStartingWithoutEnemies() {
        commander1.getCruisers().add(new Cruiser("1", 100, 90, 90, 55));
        Throwable exception = assertThrows(StartingBattleException.class, () -> commander1.startBattle(commander2));
        assertEquals("No cruisers to attack!", exception.getMessage());
    }

    @Test
    @DisplayName("Check fight")
    public void checkFight() {
        Set<Cruiser> enemies = new HashSet<>();
        enemies.add(new Cruiser("1", 100, 90, 90, 55));
        enemies.add(new Cruiser("2", 100, 95, 60, 50));
        enemies.add(new Cruiser("3", 100, 100, 100, 45));
        commander1.setCruisers(enemies);
        Set<Cruiser> enemies1 = new HashSet<>();
        enemies1.add(new Cruiser("1", 100, 90, 90, 65));
        enemies1.add(new Cruiser("2", 100, 95, 60, 60));
        enemies1.add(new Cruiser("3", 100, 100, 100, 65));
        commander2.setCruisers(enemies1);

        assertEquals(commander2.startBattle(commander1), commander1);
    }
}