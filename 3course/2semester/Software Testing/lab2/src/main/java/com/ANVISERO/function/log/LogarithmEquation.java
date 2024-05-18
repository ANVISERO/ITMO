package com.ANVISERO.function.log;

import com.ANVISERO.MathFunction;
import lombok.RequiredArgsConstructor;

import static java.lang.Double.NaN;

@RequiredArgsConstructor
public class LogarithmEquation implements MathFunction {
    private final Log2 log2;
    private final Log5 log5;
    private final Log10 log10;

    @Override
    public double compute(Double x, double accuracy) {
        double log2Value = log2.compute(x, accuracy);
        double log5Value = log5.compute(x, accuracy);
        double log10Value = log10.compute(x, accuracy);
        if (x == 1) {
            return NaN;
        }
        return Math.pow((((log5Value * log5Value) / log5Value) - log10Value) * log2Value, 2);
    }
}
