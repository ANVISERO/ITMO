package com.anvisero.task3;

import com.anvisero.task3.exception.AttackException;
import com.anvisero.task3.exception.FlyException;
import lombok.Data;

import java.util.Set;

@Data
public class Cruiser {
    private String name;
    private Integer health;
    private Integer speed;
    private Integer fuel;
    private Integer damage;

    public Cruiser(String name, Integer health, Integer speed, Integer fuel, Integer damage) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.fuel = fuel;
        this.damage = damage;
    }

    public void attackEnemy(Cruiser enemyCruiser) {
        if (this.health <= 0) {
            throw new AttackException("Cruiser is dead!");
        }
        if (this.damage <= 0 || this.damage > 100) {
            throw new AttackException("Illegal damage value");
        }
        enemyCruiser.setHealth(enemyCruiser.getHealth() - this.getDamage());
    }

    public void attackSetEnemies(Set<Cruiser> enemies) {
        if (this.health <= 0) {
            throw new AttackException("Cruiser is dead!");
        }
        if (enemies.isEmpty()) {
            throw new AttackException("No enemy cruisers to attack!");
        }
        for (Cruiser enemyCruiser : enemies) {
            enemyCruiser.setHealth(enemyCruiser.getHealth() - this.getDamage());
        }
    }

    public void fly(int distance) {
        if (distance <= 0) {
            throw new FlyException("Can't fly negative distance!");
        }
        if (this.fuel - distance < 0) {
            throw new FlyException("Not enough fuel for the flight!");
        }
        this.increaseSpeed();
        this.fuel -= distance;
        this.decreaseSpeed();
    }

    private void increaseSpeed() {
        this.speed += 100;
    }

    private void decreaseSpeed() {
        this.speed -= 100;
    }
}
