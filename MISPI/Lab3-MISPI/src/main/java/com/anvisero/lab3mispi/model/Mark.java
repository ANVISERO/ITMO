package com.anvisero.lab3mispi.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
public class Mark {
    private double xValue;
    private double yValue;
    private double rValue;
    private String hit;
    private LocalDateTime time;
    private long leadTime;

}
