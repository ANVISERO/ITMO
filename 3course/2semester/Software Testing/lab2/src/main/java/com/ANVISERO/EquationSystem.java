package com.ANVISERO;

import com.ANVISERO.function.log.LogarithmEquation;
import com.ANVISERO.function.trigonometry.TrigonometryEquation;
import lombok.RequiredArgsConstructor;

import static java.lang.Double.NaN;

@RequiredArgsConstructor
public class EquationSystem implements MathFunction {
    private final TrigonometryEquation trigonometryEquation;
    private final LogarithmEquation logarithmEquation;

    @Override
    public double compute(Double x, double accuracy) {
        if (x.equals(NaN)) {
            return NaN;
        }
        if (x > 0) {
            return logarithmEquation.compute(x, accuracy);
        } else {
            return trigonometryEquation.compute(x, accuracy);
        }
    }
}
