package com.ANVISERO.log;

import com.ANVISERO.function.log.Ln;
import com.ANVISERO.function.log.Log10;
import com.ANVISERO.util.CsvWriter;
import lombok.SneakyThrows;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyDouble;
import static org.mockito.Mockito.*;

public class Log10Test {
    private static final String FILE_PATH_LN_LOG10 = "src/test/resources/log/ln_log10.csv";
    private static final String FILE_PATH_CSV_LN_LOG10 = "/log/ln_log10.csv";
    private static final String FILE_PATH_LOG10 = "src/test/resources/log/log10.csv";
    private static final String FILE_PATH_CSV_LOG10 = "/log/log10.csv";
    private static double accuracy;

    @BeforeAll
    @SneakyThrows
    static void setUp() {
        accuracy = 0.001;
        CsvWriter.writeLnLog10(FILE_PATH_LN_LOG10, 0.1, 5, 0.1);
        CsvWriter.writeLog10(FILE_PATH_LOG10, 0.1, 5, 0.1);
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_LN_LOG10, numLinesToSkip = 1)
    @DisplayName("log10(x) unit test")
    void computeTest_whenCasualInput_thenComputedValueReturned(double x, double lnX, double log10X) {
        Ln ln = mock(Ln.class);
        Log10 log10 = new Log10(ln);
        when(ln.compute(anyDouble(), anyDouble())).thenReturn(lnX);

        double result = log10.compute(x, accuracy);

        assertEquals(log10X, result, accuracy * 10);
        verify(ln, times(1)).compute(anyDouble(), anyDouble());
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_LOG10, numLinesToSkip = 1)
    @DisplayName("log5(x) integration test")
    void computeIntegrationTest_whenCasualInput_thenComputedValueReturned(double x, double log10X) {
        Ln ln = new Ln();
        Log10 log10 = new Log10(ln);

        double result = log10.compute(x, accuracy);

        assertEquals(log10X, result, accuracy * 10);
    }
}
