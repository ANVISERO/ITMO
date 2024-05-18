package com.ANVISERO.function.trigonometry;

import com.ANVISERO.MathFunction;

import java.math.BigDecimal;
import java.math.RoundingMode;

import static java.lang.Double.NaN;
import static java.lang.Math.*;

public class Sin implements MathFunction {
    private final Cos cos;

    public Sin(Cos cos) {
        this.cos = cos;
    }

    @Override
    public double compute(Double x, double accuracy) {
        if (x.equals(NaN)) {
            return NaN;
        }
        BigDecimal bdX = new BigDecimal(Double.toString(x)).setScale(5, RoundingMode.HALF_UP);
        BigDecimal bdPI = new BigDecimal(Double.toString(PI)).setScale(5, RoundingMode.HALF_UP);

        BigDecimal remainder = bdX.remainder(bdPI);

        if (remainder.compareTo(BigDecimal.ZERO) == 0) {
            return 0.0;
        }
        double cosValue = cos.compute(x, accuracy);
        double sinValue = sqrt(1 - pow(cosValue, 2));
        if (x < 0 && x > -PI || x > PI && x < 2 * PI) {
            sinValue *= -1;
        }
        return sinValue;
    }
}
