package com.anvisero.lab3mispi.beans;


import com.anvisero.lab3mispi.model.Mark;
import com.anvisero.lab3mispi.utils.HitMark;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.annotation.ManagedBean;
import java.io.Serializable;
import java.text.DecimalFormat;
import java.time.Clock;
import java.time.LocalDateTime;

@ManagedBean
@ToString
@EqualsAndHashCode
public class MarkMaker implements Serializable {

    @Setter
    private double xValue;
    @Getter @Setter
    private Double yValue;
    @Getter @Setter
    private double rValue = 1;
    @Getter @Setter
    private double step;
    @Getter @Setter
    private double percent;
    @Getter
    private int position;
    @Getter @Setter
    private int xMin;
    @Getter @Setter
    private int xMax;

    public MarkMaker() {
        this.position = 40;
        this.step = 0.1;
        this.percent = 100d/80;
        this.xMin = -4;
        this.xMax = 4;
    }
    public Mark makeNewMark() {
        long nanoTime = System.nanoTime();
        String hit = HitMark.hitMark(xValue, yValue, rValue) ? "hit" : "miss";
        LocalDateTime time = LocalDateTime.now(Clock.systemUTC());
        return new Mark(xValue, yValue, rValue, hit, time, nanoTime);
    }

    public void setPosition(int position) {
        this.position = position;
        this.xValue = getXValue();
    }

    public double getXValue() {
        DecimalFormat decimalFormat = new DecimalFormat( "#.#" );
        return Double.parseDouble(decimalFormat.format(position*step + xMin));
    }
}
