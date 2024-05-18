package com.anvisero.task1;

public class ArcTg {
    public static double calculate(double x) {
        if (x < -1 || x > 1) {
            return Double.NaN;
        }
        double result = 0;
        double numerator = x;
        int substitute = 1;
        int n = 0;
        double accuracy = 1;
        while (Math.abs(accuracy) >= 1.0E-5) {
            result += Math.pow(-1, n) * numerator / substitute;
            n++;
            numerator = numerator * x * x;
            substitute += 2;
            accuracy = numerator / substitute;
        }
        return result;
    }
}
