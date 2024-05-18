package com.anvisero.task3;

import com.anvisero.task3.exception.CruiserJoinException;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class BattleFleet {
    List<Cruiser> cruisers = new ArrayList<>();

    public boolean joinFleet(Cruiser cruiser) {
        if (cruiser.getHealth() > 0) {
            cruisers.add(cruiser);
        } else {
            throw new CruiserJoinException("Can't add cruiser to the fleet, because it is dead");
        }
        return true;
    }
}
