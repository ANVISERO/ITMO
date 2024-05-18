package com.anvisero.task3;

import com.anvisero.task3.emum.Mood;
import com.anvisero.task3.exception.StartingBattleException;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
public class Commander extends Creature {
    private Set<Cruiser> cruisers = new HashSet<>();
    private List<Creature> angryFor = new ArrayList<>();

    public Commander(String name, Integer height, Integer weight, Mood mood, Integer age, Galaxy galaxy) {
        super(name, height, weight, mood, age, galaxy, false);
    }

    public Commander startBattle(Commander commander) {
        Set<Cruiser> enemies = commander.getCruisers();
        if (this.cruisers.isEmpty()) {
            throw new StartingBattleException("No cruisers for attack!");
        }
        if (enemies.isEmpty()) {
            throw new StartingBattleException("No cruisers to attack!");
        }
        List<Cruiser> enemiesList = enemies.stream().toList();
        List<Cruiser> cruisersList = cruisers.stream().toList();
        boolean enemiesAlive = enemiesList.stream().anyMatch(i -> i.getHealth() > 0);
        boolean cruisersAlive = cruisersList.stream().anyMatch(i -> i.getHealth() > 0);
        int i = 0;
        int j = 0;
        while (enemiesAlive && cruisersAlive) {
            while (cruisersList.get(i).getHealth() <= 0) {
                i++;
                i = i >= cruisersList.size() ? 0 : i;
            }
            while (enemiesList.get(j).getHealth() <= 0) {
                j++;
                j = j >= enemiesList.size() ? 0 : j;
            }
            cruisersList.get(i).attackEnemy(enemiesList.get(j));
            if (enemiesList.get(j).getHealth() > 0) {
                enemiesList.get(j).attackEnemy(cruisersList.get(i));
            }
            i++;
            j++;
            i = i >= cruisersList.size() ? 0 : i;
            j = j >= enemiesList.size() ? 0 : j;
            enemiesAlive = enemiesList.stream().anyMatch(cr -> cr.getHealth() > 0);
            cruisersAlive = cruisersList.stream().anyMatch(cr -> cr.getHealth() > 0);
        }
        if (cruisersList.stream().anyMatch(cr -> cr.getHealth() > 0)) {
            return commander;
        }
        return this;
    }
}
