package task3;

import com.anvisero.task3.Creature;
import com.anvisero.task3.emum.Mood;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CreatureTest {
    Creature creature;

    @BeforeEach
    void init() {
        creature = new Creature(
                "Creature",
                60, 60,
                Mood.HAPPY
        );
    }

    @Test
    @DisplayName("Check change mood")
    public void checkChangeMood() {
        creature.changeMood(Mood.ANGRY);

        assertEquals(Mood.ANGRY, creature.getMood());
    }

    @Test
    @DisplayName("Check speaking")
    public void checkSpeaking() {
        creature.speak();

        assertEquals(Boolean.TRUE, creature.getIsSpeaking());
    }

    @Test
    @DisplayName("Check silent")
    public void checkSilent() {
        creature.setIsSpeaking(Boolean.TRUE);

        creature.silent();

        assertEquals(Boolean.FALSE, creature.getIsSpeaking());
    }
}
