package com.ANVISERO.log;

import com.ANVISERO.function.log.Ln;
import com.ANVISERO.function.log.Log2;
import com.ANVISERO.function.log.Log5;
import com.ANVISERO.util.CsvWriter;
import lombok.SneakyThrows;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyDouble;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.times;

public class Log2Test {
    private static final String FILE_PATH_LN_LOG2 = "src/test/resources/log/ln_log2.csv";
    private static final String FILE_PATH_CSV_LN_LOG2 = "/log/ln_log2.csv";
    private static final String FILE_PATH_LOG2 = "src/test/resources/log/log2.csv";
    private static final String FILE_PATH_CSV_LOG2 = "/log/log2.csv";
    private static double accuracy;

    @BeforeAll
    @SneakyThrows
    static void setUp() {
        accuracy = 0.001;
        CsvWriter.writeLnLog2(FILE_PATH_LN_LOG2, 0.1, 5, 0.1);
        CsvWriter.writeLog2(FILE_PATH_LOG2, 0.1, 5, 0.1);
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_LN_LOG2, numLinesToSkip = 1)
    @DisplayName("log2(x) unit test")
    void computeTest_whenCasualInput_thenComputedValueReturned(double x, double lnX, double log2X) {
        Ln ln = mock(Ln.class);
        Log2 log2 = new Log2(ln);
        when(ln.compute(anyDouble(), anyDouble())).thenReturn(lnX);

        double result = log2.compute(x, accuracy);

        assertEquals(log2X, result, accuracy * 10);
        verify(ln, times(1)).compute(anyDouble(), anyDouble());
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_LOG2, numLinesToSkip = 1)
    @DisplayName("log2(x) integration test")
    void computeIntegrationTest_whenCasualInput_thenComputedValueReturned(double x, double log2X) {
        Ln ln = new Ln();
        Log2 log2 = new Log2(ln);

        double result = log2.compute(x, accuracy);

        assertEquals(log2X, result, accuracy * 10);
    }
}
