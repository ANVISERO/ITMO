package com.ANVISERO.function.trigonometry;

import com.ANVISERO.MathFunction;

import java.math.BigDecimal;
import java.math.RoundingMode;

import static java.lang.Double.NaN;
import static java.lang.Math.PI;

public class Cot implements MathFunction {
    private final Cos cos;
    private final Sin sin;

    public Cot(Cos cos, Sin sin) {
        this.cos = cos;
        this.sin = sin;
    }

    @Override
    public double compute(Double x, double accuracy) {
        if (x.equals(NaN)) {
            return NaN;
        }
        BigDecimal bdX = new BigDecimal(Double.toString(x)).setScale(4, RoundingMode.HALF_UP);
        BigDecimal bdPI = new BigDecimal(Double.toString(PI)).setScale(4, RoundingMode.HALF_UP);

        BigDecimal remainder = bdX.remainder(bdPI);

        if (remainder.compareTo(BigDecimal.ZERO) == 0) {
            return NaN;
        }
        double cosValue = cos.compute(x, accuracy);
        double sinValue = sin.compute(x, accuracy);
        return cosValue / sinValue;
    }
}
