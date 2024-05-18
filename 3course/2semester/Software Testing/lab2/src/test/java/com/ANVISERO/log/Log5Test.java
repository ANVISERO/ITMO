package com.ANVISERO.log;

import com.ANVISERO.function.log.Ln;
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

public class Log5Test {
    private static final String FILE_PATH_LN_LOG5 = "src/test/resources/log/ln_log5.csv";
    private static final String FILE_PATH_CSV_LN_LOG5 = "/log/ln_log5.csv";
    private static final String FILE_PATH_LOG5 = "src/test/resources/log/log5.csv";
    private static final String FILE_PATH_CSV_LOG5 = "/log/log5.csv";
    private static double accuracy;

    @BeforeAll
    @SneakyThrows
    static void setUp() {
        accuracy = 0.001;
        CsvWriter.writeLnLog5(FILE_PATH_LN_LOG5, 0.1, 5, 0.1);
        CsvWriter.writeLog5(FILE_PATH_LOG5, 0.1, 5, 0.1);
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_LN_LOG5, numLinesToSkip = 1)
    @DisplayName("log5(x) unit test")
    void computeTest_whenCasualInput_thenComputedValueReturned(double x, double lnX, double log5X) {
        Ln ln = mock(Ln.class);
        Log5 log5 = new Log5(ln);
        when(ln.compute(anyDouble(), anyDouble())).thenReturn(lnX);

        double result = log5.compute(x, accuracy);

        assertEquals(log5X, result, accuracy * 10);
        verify(ln, times(1)).compute(anyDouble(), anyDouble());
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_LOG5, numLinesToSkip = 1)
    @DisplayName("log5(x) integration test")
    void computeIntegrationTest_whenCasualInput_thenComputedValueReturned(double x, double log5X) {
        Ln ln = new Ln();
        Log5 log5 = new Log5(ln);

        double result = log5.compute(x, accuracy);

        assertEquals(log5X, result, accuracy * 10);
    }
}
