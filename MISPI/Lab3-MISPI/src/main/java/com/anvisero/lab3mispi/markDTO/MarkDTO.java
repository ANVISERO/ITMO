package com.anvisero.lab3mispi.markDTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MarkDTO {
    private double xValue;
    private double yValue;
    private double rValue;
    private String hit;
    private String time;
    private long leadTime;

    public String getRvalue1() {
        System.out.println(rValue);
        System.out.println(String.valueOf(rValue));
        return String.valueOf(rValue);
    }
}
