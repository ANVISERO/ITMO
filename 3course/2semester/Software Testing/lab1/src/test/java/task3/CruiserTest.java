package task3;

import com.anvisero.task3.Cruiser;
import com.anvisero.task3.exception.AttackException;
import com.anvisero.task3.exception.FlyException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

class CruiserTest {
    Cruiser cruiser;
    Cruiser enemy;

    @BeforeEach
    void init() {
        cruiser = new Cruiser("main", 100, 100, 100, 35);
        enemy = new Cruiser("enemy", 100, 100, 100, 10);
    }

    @Test
    @DisplayName("Check a really long flight")
    void checkTooBigValueToFly() {
        FlyException exception = assertThrows(FlyException.class, () -> cruiser.fly(101));
        assertEquals("Not enough fuel for the flight!", exception.getMessage());
    }

    @Test
    @DisplayName("Check negative value of flight")
    void checkNegativeValueOfFlight() {
        FlyException exception = assertThrows(FlyException.class, () -> cruiser.fly(-1));
        assertEquals("Can't fly negative distance!", exception.getMessage());
    }

    @Test
    @DisplayName("Check zero value of flight")
    void checkZeroValueOfFlight() {
        FlyException exception = assertThrows(FlyException.class, () -> cruiser.fly(0));
        assertEquals("Can't fly negative distance!", exception.getMessage());
    }

    @Test
    @DisplayName("Check normal values of flight")
    void checkNormalFlight() {
        assertAll(
                () -> {
                    cruiser.fly(7);
                    assertEquals(93, cruiser.getFuel());
                },
                () -> {
                    cruiser.fly(23);
                    assertEquals(70, cruiser.getFuel());
                },
                () -> {
                    cruiser.fly(70);
                    assertEquals(0, cruiser.getFuel());
                }
        );
    }

    @Test
    @DisplayName("Check attack without health")
    public void checkNoHealth() {
        cruiser.setHealth(0);
        assertThrows(AttackException.class, () -> cruiser.attackEnemy(enemy));
    }

    @Test
    @DisplayName("Check illegal damage value")
    public void checkWrongDamage() {
        cruiser.setDamage(-100);
        assertThrows(AttackException.class, () -> cruiser.attackEnemy(enemy));

        cruiser.setDamage(101);
        assertThrows(AttackException.class, () -> cruiser.attackEnemy(enemy));
    }

    @Test
    @DisplayName("Check attack")
    public void checkNormalAttack() {
        cruiser.attackEnemy(enemy);
        assertEquals(65, enemy.getHealth());

        enemy.attackEnemy(cruiser);
        assertEquals(90, cruiser.getHealth());
    }

    @Test
    @DisplayName("Check attackSetEnemies without health")
    public void checkAttackSetEnemiesNoHealth() {
        cruiser.setHealth(0);
        Set<Cruiser> enemies = new HashSet<>();
        enemies.add(new Cruiser("1", 100, 90, 90, 55));
        AttackException exception = assertThrows(AttackException.class, () -> cruiser.attackSetEnemies(enemies));
        assertEquals("Cruiser is dead!", exception.getMessage());
    }

    @Test
    @DisplayName("Check attackSetEnemies without enemies")
    public void checkAttackSetEnemiesNoEnemies() {
        AttackException exception = assertThrows(AttackException.class, () ->
                cruiser.attackSetEnemies(new HashSet<>()));
        assertEquals("No enemy cruisers to attack!", exception.getMessage());
    }

    @Test
    @DisplayName("Check eruptIntoElectricalDeath")
    public void checkAttackSetEnemies() {
        Set<Cruiser> enemies = new HashSet<>();
        enemies.add(new Cruiser("1", 100, 90, 90, 55));
        enemies.add(new Cruiser("2", 100, 95, 60, 50));
        enemies.add(new Cruiser("3", 100, 100, 100, 45));
        cruiser.attackSetEnemies(enemies);
        for (Cruiser enemyCruiser : enemies) {
            assertEquals(65, enemyCruiser.getHealth());
        }
        assertEquals(100, cruiser.getHealth());
    }
}
