package com.ANVISERO.function.log;

import com.ANVISERO.MathFunction;

public class Log10 implements MathFunction {
    private static final double ln10 = 2.30258509299;
    private final Ln ln;

    public Log10(Ln ln) {
        this.ln = ln;
    }

    @Override
    public double compute(Double x, double accuracy) {
        return ln.compute(x, accuracy) / ln10;
    }
}
