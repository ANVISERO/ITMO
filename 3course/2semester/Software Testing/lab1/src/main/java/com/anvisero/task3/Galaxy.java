package com.anvisero.task3;

import com.anvisero.task3.emum.Mood;
import lombok.Value;

import java.util.ArrayList;
import java.util.List;

@Value
public class Galaxy {
    String name;

    List<Creature> creatures = new ArrayList<>();

    public Phrase getPhrase() {
        if (creatures.stream().anyMatch(Creature::getIsSpeaking)) {
            return new Phrase(Mood.OFFENCIVE);
        }
        return new Phrase(Mood.DEAD);
    }

    public void enterGalaxy(Creature creature) {
        creature.setGalaxy(this);
        creatures.add(creature);
    }
}
