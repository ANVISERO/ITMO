package com.ANVISERO.trigonometry;

import com.ANVISERO.function.trigonometry.Cos;
import com.ANVISERO.util.CsvWriter;
import lombok.SneakyThrows;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;

import static java.lang.Math.PI;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CosTest {
    private static final String FILE_PATH = "src/test/resources/trigonometry/cos.csv";
    private static final String FILE_PATH_CSV = "/trigonometry/cos.csv";
    private static double accuracy;
    private static Cos cos;

    @BeforeAll
    @SneakyThrows
    static void setUp() {
        accuracy = 0.001;
        CsvWriter.writeCos(FILE_PATH, -2 * PI, 2 * PI, PI/12);
        cos = new Cos();
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV, numLinesToSkip = 1)
    @DisplayName("cos(x) test")
    void computeTest_whenCasualInput_thenComputedValueReturned(double x, double y) {
        double result = cos.compute(x, accuracy);
        assertEquals(y, result, accuracy);
    }
}
