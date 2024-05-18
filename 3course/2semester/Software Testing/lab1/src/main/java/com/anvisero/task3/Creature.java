package com.anvisero.task3;

import com.anvisero.task3.emum.Mood;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Creature {
    private String name;
    private Integer height;
    private Integer weight;
    private Mood mood;
    private Integer age;
    private Galaxy galaxy;
    private Boolean isSpeaking = Boolean.FALSE;

    public Creature(String name, int height, int weight, Mood mood) {
        if (name == null || name.isEmpty() || height <= 0 || weight <= 0) {
            throw new IllegalArgumentException();
        }
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
    }

    public void changeMood(Mood mood) {
        this.mood = mood;
    }

    public void speak() {
        isSpeaking = Boolean.TRUE;
    }

    public void silent() {
        isSpeaking = Boolean.FALSE;
    }
}