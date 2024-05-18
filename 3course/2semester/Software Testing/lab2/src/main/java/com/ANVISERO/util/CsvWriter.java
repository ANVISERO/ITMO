package com.ANVISERO.util;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.nio.file.Path;
import java.nio.file.Paths;

import static java.lang.Double.NaN;
import static java.lang.Math.PI;
import static java.lang.Math.pow;

public class CsvWriter {

    public static void writeCos(final String filename, final double from, final double to,
                                final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,cos(x)");
        for (double x = from; x <= to; x += step) {
            fileWriter.write("\n");
            fileWriter.write(String.format("%f,%f", x, Math.cos(x)));
        }
        fileWriter.close();
    }

    public static void writeSin(final String filename, final double from, final double to,
                                final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,sin(x)");
        for (double x = from; x <= to; x += step) {
            fileWriter.write("\n");
            fileWriter.write(String.format("%f,%f", x, Math.sin(x)));
        }
        fileWriter.close();
    }

    public static void writeCosAndSin(final String filename, final double from, final double to,
                                      final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,cos(x),sin(x)");
        for (double x = from; x <= to; x += step) {
            BigDecimal bdX = new BigDecimal(Double.toString(x)).setScale(3, RoundingMode.HALF_UP);
            BigDecimal bdPI = new BigDecimal(Double.toString(PI)).setScale(3, RoundingMode.HALF_UP);

            BigDecimal remainder = bdX.remainder(bdPI);

            if (remainder.compareTo(BigDecimal.ZERO) != 0) {
                fileWriter.write("\n");
                fileWriter.write(String.format("%f,%f,%f", x, Math.cos(x), Math.sin(x)));
            }
        }
        fileWriter.close();
    }

    public static void writeCosSinCot(final String filename, final double from, final double to,
                                      final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,cos(x),sin(x),cot(x)");
        for (double x = from; x <= to; x += step) {
            BigDecimal bdX = new BigDecimal(Double.toString(x)).setScale(4, RoundingMode.HALF_UP);
            BigDecimal bdPI = new BigDecimal(Double.toString(PI)).setScale(4, RoundingMode.HALF_UP);

            BigDecimal remainder = bdX.remainder(bdPI);

            if (remainder.compareTo(BigDecimal.ZERO) != 0) {
                fileWriter.write("\n");
                fileWriter.write(String.format("%f,%f,%f,%f", x, Math.cos(x), Math.sin(x), 1 / Math.tan(x)));
            }
        }
        fileWriter.close();
    }

    public static void writeCot(final String filename, final double from, final double to,
                                final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,cot(x)");
        for (double x = from; x <= to; x += step) {
            BigDecimal bdX = new BigDecimal(Double.toString(x)).setScale(4, RoundingMode.HALF_UP);
            BigDecimal bdPI = new BigDecimal(Double.toString(PI)).setScale(4, RoundingMode.HALF_UP);

            BigDecimal remainder = bdX.remainder(bdPI);

            if (remainder.compareTo(BigDecimal.ZERO) != 0) {
                fileWriter.write("\n");
                fileWriter.write(String.format("%f,%f", x, 1 / Math.tan(x)));
            }
        }
        fileWriter.close();
    }

    public static void writeCosSinTan(final String filename, final double from, final double to,
                                      final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,cos(x),sin(x),tan(x)");
        for (double x = from; x <= to; x += step) {
            BigDecimal bdX = new BigDecimal(Double.toString(x)).setScale(4, RoundingMode.HALF_UP);
            BigDecimal bdPI = new BigDecimal(Double.toString(PI / 2)).setScale(4, RoundingMode.HALF_UP);

            BigDecimal remainder = bdX.remainder(bdPI);

            if (remainder.compareTo(BigDecimal.ZERO) != 0) {
                fileWriter.write("\n");
                fileWriter.write(String.format("%f,%f,%f,%f", x, Math.cos(x), Math.sin(x), Math.tan(x)));
            }
        }
        fileWriter.close();
    }

    public static void writeTan(final String filename, final double from, final double to,
                                final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,tan(x)");
        for (double x = from; x <= to; x += step) {
            BigDecimal bdX = new BigDecimal(Double.toString(x)).setScale(4, RoundingMode.HALF_UP);
            BigDecimal bdPI = new BigDecimal(Double.toString(PI / 2)).setScale(4, RoundingMode.HALF_UP);

            BigDecimal remainder = bdX.remainder(bdPI);

            if (remainder.compareTo(BigDecimal.ZERO) != 0) {
                fileWriter.write("\n");
                fileWriter.write(String.format("%f,%f", x, Math.tan(x)));
            }
        }
        fileWriter.close();
    }

    public static void writeCosSec(final String filename, final double from, final double to,
                                   final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,cos(x),sec(x)");
        for (double x = from; x <= to; x += step) {
            BigDecimal bdX = new BigDecimal(Double.toString(x)).setScale(4, RoundingMode.HALF_UP);
            BigDecimal bdPI = new BigDecimal(Double.toString(PI / 2)).setScale(4, RoundingMode.HALF_UP);

            BigDecimal remainder = bdX.remainder(bdPI);

            if (remainder.compareTo(BigDecimal.ZERO) != 0) {
                fileWriter.write("\n");
                fileWriter.write(String.format("%f,%f,%f", x, Math.cos(x), 1 / Math.cos(x)));
            }
        }
        fileWriter.close();
    }

    public static void writeSec(final String filename, final double from, final double to,
                                final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,sec(x)");
        for (double x = from; x <= to; x += step) {
            BigDecimal bdX = new BigDecimal(Double.toString(x)).setScale(4, RoundingMode.HALF_UP);
            BigDecimal bdPI = new BigDecimal(Double.toString(PI / 2)).setScale(4, RoundingMode.HALF_UP);

            BigDecimal remainder = bdX.remainder(bdPI);

            if (remainder.compareTo(BigDecimal.ZERO) != 0) {
                fileWriter.write("\n");
                fileWriter.write(String.format("%f,%f", x, 1 / Math.cos(x)));
            }
        }
        fileWriter.close();
    }

    public static void writeCosCsc(final String filename, final double from, final double to,
                                   final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,sin(x),csc(x)");
        for (double x = from; x <= to; x += step) {
            BigDecimal bdX = new BigDecimal(Double.toString(x)).setScale(4, RoundingMode.HALF_UP);
            BigDecimal bdPI = new BigDecimal(Double.toString(PI)).setScale(4, RoundingMode.HALF_UP);

            BigDecimal remainder = bdX.remainder(bdPI);

            if (remainder.compareTo(BigDecimal.ZERO) != 0) {
                fileWriter.write("\n");
                fileWriter.write(String.format("%f,%f,%f", x, Math.sin(x), 1 / Math.sin(x)));
            }
        }
        fileWriter.close();
    }

    public static void writeCsc(final String filename, final double from, final double to,
                                final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,csc(x)");
        for (double x = from; x <= to; x += step) {
            BigDecimal bdX = new BigDecimal(Double.toString(x)).setScale(4, RoundingMode.HALF_UP);
            BigDecimal bdPI = new BigDecimal(Double.toString(PI)).setScale(4, RoundingMode.HALF_UP);

            BigDecimal remainder = bdX.remainder(bdPI);

            if (remainder.compareTo(BigDecimal.ZERO) != 0) {
                fileWriter.write("\n");
                fileWriter.write(String.format("%f,%f", x, 1 / Math.sin(x)));
            }
        }
        fileWriter.close();
    }

    public static void writeCosSinCotTanSecCsc(final String filename, final double from, final double to,
                                               final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,cos(x),sin(x),cot(x),tan(x),sec(x),csc(x),equation");
        for (double x = from; x <= 0; x += step) {
            BigDecimal bdX = new BigDecimal(Double.toString(x)).setScale(2, RoundingMode.HALF_UP);
            BigDecimal bdPI = new BigDecimal(Double.toString(PI)).setScale(2, RoundingMode.HALF_UP);
            BigDecimal bdPI2 = new BigDecimal(Double.toString(PI / 2)).setScale(2, RoundingMode.HALF_UP);

            BigDecimal remainder = bdX.remainder(bdPI);
            BigDecimal remainder2 = bdX.remainder(bdPI2);

            double cosValue = Math.cos(x);
            double sinValue = Math.sin(x);
            double cotValue = 1 / Math.tan(x);
            double tanValue = Math.tan(x);
            double secValue = 1 / Math.cos(x);
            double cscValue = 1 / Math.sin(x);
            if (remainder.compareTo(BigDecimal.ZERO) != 0 && remainder2.compareTo(BigDecimal.ZERO) != 0) {
                fileWriter.write("\n");
                fileWriter.write(String.format("%f,%f,%f,%f,%f,%f,%f,%f", x, Math.cos(x), Math.sin(x), 1 / Math.tan(x),
                        Math.tan(x), 1 / Math.cos(x), 1 / Math.sin(x),
                        (((((cscValue - tanValue) + cotValue) / cotValue) + (secValue - sinValue))
                                / pow((sinValue + cosValue) + cotValue, 3))));
            }
        }
        fileWriter.close();
    }

    public static void writeEquation(final String filename, final double from, final double to,
                                     final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,equation");
        for (double x = from; x <= to; x += step) {
            BigDecimal bdX = new BigDecimal(Double.toString(x)).setScale(2, RoundingMode.HALF_UP);
            BigDecimal bdPI = new BigDecimal(Double.toString(PI)).setScale(2, RoundingMode.HALF_UP);
            BigDecimal bdPI2 = new BigDecimal(Double.toString(PI / 2)).setScale(2, RoundingMode.HALF_UP);

            BigDecimal remainder = bdX.remainder(bdPI);
            BigDecimal remainder2 = bdX.remainder(bdPI2);

            double cosValue = Math.cos(x);
            double sinValue = Math.sin(x);
            double cotValue = 1 / Math.tan(x);
            double tanValue = Math.tan(x);
            double secValue = 1 / Math.cos(x);
            double cscValue = 1 / Math.sin(x);
            if (remainder.compareTo(BigDecimal.ZERO) != 0 && remainder2.compareTo(BigDecimal.ZERO) != 0) {
                fileWriter.write("\n");
                fileWriter.write(String.format("%f,%f", x,
                        (((((cscValue - tanValue) + cotValue) / cotValue) + (secValue - sinValue))
                                / pow((sinValue + cosValue) + cotValue, 3))));
            }
        }
        fileWriter.close();
    }

    public static void writeLn(final String filename, final double from, final double to,
                                final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,ln(x)");
        for (double x = from; x <= to; x += step) {
            fileWriter.write("\n");
            fileWriter.write(String.format("%f,%f", x, Math.log(x)));
        }
        fileWriter.close();
    }

    public static void writeLog5(final String filename, final double from, final double to,
                               final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,log5(x)");
        for (double x = from; x <= to; x += step) {
            fileWriter.write("\n");
            fileWriter.write(String.format("%f,%f", x, Math.log(x) / Math.log(5)));
        }
        fileWriter.close();
    }

    public static void writeLnLog5(final String filename, final double from, final double to,
                                 final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,ln,log5(x)");
        for (double x = from; x <= to; x += step) {
            fileWriter.write("\n");
            fileWriter.write(String.format("%f,%f,%f", x, Math.log(x), Math.log(x) / Math.log(5)));
        }
        fileWriter.close();
    }

    public static void writeLog2(final String filename, final double from, final double to,
                                 final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,log2(x)");
        for (double x = from; x <= to; x += step) {
            fileWriter.write("\n");
            fileWriter.write(String.format("%f,%f", x, Math.log(x) / Math.log(2)));
        }
        fileWriter.close();
    }

    public static void writeLnLog2(final String filename, final double from, final double to,
                                   final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,ln,log2(x)");
        for (double x = from; x <= to; x += step) {
            fileWriter.write("\n");
            fileWriter.write(String.format("%f,%f,%f", x, Math.log(x), Math.log(x) / Math.log(2)));
        }
        fileWriter.close();
    }

    public static void writeLog10(final String filename, final double from, final double to,
                                 final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,log10(x)");
        for (double x = from; x <= to; x += step) {
            fileWriter.write("\n");
            fileWriter.write(String.format("%f,%f", x, Math.log10(x)));
        }
        fileWriter.close();
    }

    public static void writeLnLog10(final String filename, final double from, final double to,
                                   final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,ln,log10(x)");
        for (double x = from; x <= to; x += step) {
            fileWriter.write("\n");
            fileWriter.write(String.format("%f,%f,%f", x, Math.log(x), Math.log10(x)));
        }
        fileWriter.close();
    }

    public static void writeLogEquation(final String filename, final double from, final double to,
                                  final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,equation(x)");
        for (double x = from; x <= to; x += step) {
            fileWriter.write("\n");
            double log2Value =  Math.log(x) / Math.log(2);
            double log5Value = Math.log(x) / Math.log(5);
            double log10Value = Math.log10(x);
            BigDecimal bdX = new BigDecimal(Double.toString(x)).setScale(2, RoundingMode.HALF_UP);
            BigDecimal bdZero = new BigDecimal(Double.toString(1)).setScale(2, RoundingMode.HALF_UP);

            if (bdX.compareTo(bdZero) == 0) {
                fileWriter.write(String.format("%f,%f", x, NaN));
            } else {
                fileWriter.write(String.format("%f,%f", x, Math.pow((((log5Value * log5Value) / log5Value)
                        - log10Value) * log2Value, 2)));
            }
        }
        fileWriter.close();
    }

    public static void writeLog2Log5Log10(final String filename, final double from, final double to,
                                    final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,log2(x),log5(x),log10(x),equation");
        for (double x = from; x <= to; x += step) {
            fileWriter.write("\n");
            double log2Value =  Math.log(x) / Math.log(2);
            double log5Value = Math.log(x) / Math.log(5);
            double log10Value = Math.log10(x);
            BigDecimal bdX = new BigDecimal(Double.toString(x)).setScale(2, RoundingMode.HALF_UP);
            BigDecimal bdZero = new BigDecimal(Double.toString(1)).setScale(2, RoundingMode.HALF_UP);

            if (bdX.compareTo(bdZero) == 0) {
                fileWriter.write(String.format("%f,%f,%f,%f,%f", x, log2Value, log5Value, log10Value, NaN));
            } else {
                fileWriter.write(String.format("%f,%f,%f,%f,%f", x, log2Value, log5Value, log10Value,
                        Math.pow((((log5Value * log5Value) / log5Value) - log10Value) * log2Value, 2)));
            }
        }
        fileWriter.close();
    }

    public static void writeEquationSystem(final String filename, final double from, final double to,
                                        final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,equationSys");
        for (double x = from; x <= to; x += step) {
            if (x > 0) {
                BigDecimal bdX = new BigDecimal(Double.toString(x)).setScale(2, RoundingMode.HALF_UP);
                BigDecimal bdPI = new BigDecimal(Double.toString(PI)).setScale(2, RoundingMode.HALF_UP);
                BigDecimal bdPI2 = new BigDecimal(Double.toString(PI / 2)).setScale(2, RoundingMode.HALF_UP);
                BigDecimal bdZero = new BigDecimal(Double.toString(1)).setScale(2, RoundingMode.HALF_UP);

                BigDecimal remainder = bdX.remainder(bdPI);
                BigDecimal remainder2 = bdX.remainder(bdPI2);


                double log2Value = Math.log(x) / Math.log(2);
                double log5Value = Math.log(x) / Math.log(5);
                double log10Value = Math.log10(x);
                double equation = Math.pow((((log5Value * log5Value) / log5Value) - log10Value) * log2Value, 2);
                if (remainder.compareTo(BigDecimal.ZERO) != 0 && remainder2.compareTo(BigDecimal.ZERO) != 0
                        && bdX.compareTo(bdZero) != 0) {
                    fileWriter.write("\n");
                    fileWriter.write(String.format("%f,%f", x, equation));
                }
            } else {
                BigDecimal bdX = new BigDecimal(Double.toString(x)).setScale(2, RoundingMode.HALF_UP);
                BigDecimal bdPI = new BigDecimal(Double.toString(PI)).setScale(2, RoundingMode.HALF_UP);
                BigDecimal bdPI2 = new BigDecimal(Double.toString(PI / 2)).setScale(2, RoundingMode.HALF_UP);
                BigDecimal bdZero = new BigDecimal(Double.toString(1)).setScale(2, RoundingMode.HALF_UP);

                BigDecimal remainder = bdX.remainder(bdPI);
                BigDecimal remainder2 = bdX.remainder(bdPI2);


                double cosValue = Math.cos(x);
                double sinValue = Math.sin(x);
                double cotValue = 1 / Math.tan(x);
                double tanValue = Math.tan(x);
                double secValue = 1 / Math.cos(x);
                double cscValue = 1 / Math.sin(x);
                double equation = (((((cscValue - tanValue) + cotValue) / cotValue) + (secValue - sinValue))
                        / pow((sinValue + cosValue) + cotValue, 3));
                if (remainder.compareTo(BigDecimal.ZERO) != 0 && remainder2.compareTo(BigDecimal.ZERO) != 0
                        && bdX.compareTo(bdZero) != 0) {
                    fileWriter.write("\n");
                    fileWriter.write(String.format("%f,%f", x, equation));
                }
            }
        }
        fileWriter.close();
    }

    public static void writeEquationSystemUnit(final String filename, final double from, final double to,
                                          final double step) throws IOException {
        final Path path = Paths.get(filename);
        final File file = new File(path.toUri());
        final FileWriter fileWriter = new FileWriter(file);
        fileWriter.write("x,trigonometryEquation(x),logarithmEquation(x),equationSys");
        for (double x = from; x <= to; x += step) {
            if  (x > 0) {
                BigDecimal bdX = new BigDecimal(Double.toString(x)).setScale(2, RoundingMode.HALF_UP);
                BigDecimal bdPI = new BigDecimal(Double.toString(PI)).setScale(2, RoundingMode.HALF_UP);
                BigDecimal bdPI2 = new BigDecimal(Double.toString(PI / 2)).setScale(2, RoundingMode.HALF_UP);
                BigDecimal bdZero = new BigDecimal(Double.toString(1)).setScale(2, RoundingMode.HALF_UP);

                BigDecimal remainder = bdX.remainder(bdPI);
                BigDecimal remainder2 = bdX.remainder(bdPI2);


                double log2Value =  Math.log(x) / Math.log(2);
                double log5Value = Math.log(x) / Math.log(5);
                double log10Value = Math.log10(x);
                double equation = Math.pow((((log5Value * log5Value) / log5Value) - log10Value) * log2Value, 2);
                if (remainder.compareTo(BigDecimal.ZERO) != 0 && remainder2.compareTo(BigDecimal.ZERO) != 0
                && bdX.compareTo(bdZero) != 0) {
                    fileWriter.write("\n");
                    fileWriter.write(String.format("%f,%f,%f,%f", x, NaN, equation, equation));
                }
            } else {
                BigDecimal bdX = new BigDecimal(Double.toString(x)).setScale(2, RoundingMode.HALF_UP);
                BigDecimal bdPI = new BigDecimal(Double.toString(PI)).setScale(2, RoundingMode.HALF_UP);
                BigDecimal bdPI2 = new BigDecimal(Double.toString(PI / 2)).setScale(2, RoundingMode.HALF_UP);
                BigDecimal bdZero = new BigDecimal(Double.toString(1)).setScale(2, RoundingMode.HALF_UP);

                BigDecimal remainder = bdX.remainder(bdPI);
                BigDecimal remainder2 = bdX.remainder(bdPI2);


                double cosValue = Math.cos(x);
                double sinValue = Math.sin(x);
                double cotValue = 1 / Math.tan(x);
                double tanValue = Math.tan(x);
                double secValue = 1 / Math.cos(x);
                double cscValue = 1 / Math.sin(x);
                double equation = (((((cscValue - tanValue) + cotValue) / cotValue) + (secValue - sinValue))
                        / pow((sinValue + cosValue) + cotValue, 3));
                if (remainder.compareTo(BigDecimal.ZERO) != 0 && remainder2.compareTo(BigDecimal.ZERO) != 0
                        && bdX.compareTo(bdZero) != 0) {
                    fileWriter.write("\n");
                    fileWriter.write(String.format("%f,%f,%f,%f", x, equation, NaN, equation));
                }
            }
        }
        fileWriter.close();
    }
}
