package com.ANVISERO.function.trigonometry;

import com.ANVISERO.MathFunction;

import static java.lang.Double.NaN;

public class Cos implements MathFunction {
    @Override
    public double compute(Double x, double accuracy) {
        if (x.equals(NaN)) {
            return NaN;
        }
        int sign = 1;
        double numerator = 1;
        double denominator = 1;
        double xSquared = x * x;
        int n = 1;
        double summand = 1;
        double cos = 1;
        while (Math.abs(summand) >= accuracy) {
            sign = -sign;
            numerator *= xSquared;
            denominator *= (2 * n) * (2 * n - 1);
            summand = sign * numerator / denominator;
            cos += summand;
            n++;
        }
        return cos;
    }
}
