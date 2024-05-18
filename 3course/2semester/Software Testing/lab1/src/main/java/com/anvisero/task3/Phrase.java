package com.anvisero.task3;

import com.anvisero.task3.emum.Mood;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class Phrase {
    private Mood mood;
}
