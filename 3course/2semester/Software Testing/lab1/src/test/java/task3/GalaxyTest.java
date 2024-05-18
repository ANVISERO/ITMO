package task3;

import com.anvisero.task3.Creature;
import com.anvisero.task3.Galaxy;
import com.anvisero.task3.Phrase;
import com.anvisero.task3.emum.Mood;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class GalaxyTest {
    Galaxy galaxy;
    Creature creature;
    Creature creature1;
    Phrase phraseOffencive;
    Phrase phraseDead;

    @BeforeEach
    void init() {
        galaxy = new Galaxy("galaxy");
        creature = new Creature(
                "Creature",
                60, 60,
                Mood.HAPPY
        );
        creature1 = new Creature(
                "Creature1",
                60, 60,
                Mood.HAPPY
        );
        phraseOffencive = new Phrase(Mood.OFFENCIVE);
        phraseDead = new Phrase(Mood.DEAD);
    }

    @Test
    @DisplayName("Check enter galaxy")
    void checkEnterGalaxy() {
        galaxy.enterGalaxy(creature);

        assertEquals(galaxy, creature.getGalaxy());
        assertEquals(creature, galaxy.getCreatures().get(galaxy.getCreatures().size() - 1));
    }

    @Test
    @DisplayName("Check phrase offencive")
    void checkPhraseOffencive() {
        creature.speak();
        galaxy.enterGalaxy(creature);

        assertEquals(phraseOffencive, galaxy.getPhrase());
    }

    @Test
    @DisplayName("Check phrase dead")
    void checkPhraseDead() {
        galaxy.enterGalaxy(creature);

        assertEquals(phraseDead, galaxy.getPhrase());
    }
}
