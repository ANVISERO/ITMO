package com.ANVISERO.function.log;

import com.ANVISERO.MathFunction;

import static java.lang.Double.NaN;

public class Ln implements MathFunction {
    @Override
    public double compute(Double x, double accuracy) {
        if (x.equals(NaN)) {
            return NaN;
        }
        double constant = ((x - 1) * (x - 1)) / ((x + 1) * (x + 1));

        double sum = 0;
        double currentValue = (x - 1) / (x + 1);
        int step = 1;
        while (Math.abs(currentValue) > accuracy / 2) {
            sum += currentValue;
            currentValue = (2 * step - 1) * currentValue * constant / (2 * step + 1);
            step++;
        }
        sum *= 2;
        return sum;
    }
}
