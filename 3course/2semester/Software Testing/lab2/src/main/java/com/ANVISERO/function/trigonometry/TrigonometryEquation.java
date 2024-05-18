package com.ANVISERO.function.trigonometry;

import com.ANVISERO.MathFunction;
import lombok.RequiredArgsConstructor;

import static java.lang.Math.pow;

@RequiredArgsConstructor
public class TrigonometryEquation implements MathFunction {
    private final Cos cos;
    private final Sin sin;
    private final Cot cot;
    private final Tan tan;
    private final Sec sec;
    private final Csc csc;

    @Override
    public double compute(Double x, double accuracy) {
        double cosValue = cos.compute(x, accuracy);
        double sinValue = sin.compute(x, accuracy);
        double cotValue = cot.compute(x, accuracy);
        double tanValue = tan.compute(x, accuracy);
        double secValue = sec.compute(x, accuracy);
        double cscValue = csc.compute(x, accuracy);
        return (((((cscValue - tanValue) + cotValue) / cotValue) + (secValue - sinValue))
                / pow((sinValue + cosValue) + cotValue, 3));
    }
}
