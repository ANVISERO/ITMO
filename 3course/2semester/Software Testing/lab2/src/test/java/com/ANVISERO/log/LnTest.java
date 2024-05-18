package com.ANVISERO.log;

import com.ANVISERO.function.log.Ln;
import com.ANVISERO.util.CsvWriter;
import lombok.SneakyThrows;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class LnTest {
    private static final String FILE_PATH = "src/test/resources/log/ln.csv";
    private static final String FILE_PATH_CSV = "/log/ln.csv";
    private static double accuracy;

    @BeforeAll
    @SneakyThrows
    static void setUp() {
        accuracy = 0.00001;
        CsvWriter.writeLn(FILE_PATH, 0.1, 5, 0.1);
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV, numLinesToSkip = 1)
    @DisplayName("ln(x) test")
    void computeTest_whenCasualInput_thenComputedValueReturned(double x, double lnX) {
        Ln ln = new Ln();

        double result = ln.compute(x, accuracy);

        assertEquals(lnX, result, accuracy * 10);
    }
}
