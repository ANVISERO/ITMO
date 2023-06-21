package com.example.lab3mispi.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Mark {
    private Double xValue;
    private Double yValue;
    private Double rValue;
    private String hit;
    private LocalDateTime time;
    private long leadTime;

}
