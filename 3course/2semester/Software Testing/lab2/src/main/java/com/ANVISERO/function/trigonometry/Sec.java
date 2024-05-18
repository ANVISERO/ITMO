package com.ANVISERO.function.trigonometry;

import com.ANVISERO.MathFunction;

import java.math.BigDecimal;
import java.math.RoundingMode;

import static java.lang.Double.NaN;
import static java.lang.Math.PI;

public class Sec implements MathFunction {
    private final Cos cos;

    public Sec(Cos cos) {
        this.cos = cos;
    }

    @Override
    public double compute(Double x, double accuracy) {
        if (x.equals(NaN)) {
            return NaN;
        }
        BigDecimal bdX = new BigDecimal(Double.toString(x)).setScale(4, RoundingMode.HALF_UP);
        BigDecimal bdPI = new BigDecimal(Double.toString(PI/2)).setScale(4, RoundingMode.HALF_UP);

        BigDecimal remainder = bdX.remainder(bdPI);

        if (remainder.compareTo(BigDecimal.ZERO) == 0) {
            return NaN;
        }
        double cosValue = cos.compute(x, accuracy);
        return 1 / cosValue;
    }
}
