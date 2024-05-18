package com.ANVISERO.function.log;

import com.ANVISERO.MathFunction;

public class Log2 implements MathFunction {
    private static final double ln10 = 0.69314718055;
    private final Ln ln;

    public Log2(Ln ln) {
        this.ln = ln;
    }

    @Override
    public double compute(Double x, double accuracy) {
        return ln.compute(x, accuracy) / ln10;
    }
}
