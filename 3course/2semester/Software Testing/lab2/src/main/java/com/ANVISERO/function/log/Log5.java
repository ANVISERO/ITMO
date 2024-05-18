package com.ANVISERO.function.log;

import com.ANVISERO.MathFunction;

public class Log5 implements MathFunction {
    private static final Double ln5 = 1.60943791243;
    private final Ln ln;

    public Log5(Ln ln) {
        this.ln = ln;
    }

    @Override
    public double compute(Double x, double accuracy) {
        return ln.compute(x, accuracy) / ln5;
    }
}
