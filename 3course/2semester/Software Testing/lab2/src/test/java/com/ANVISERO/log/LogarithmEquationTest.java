package com.ANVISERO.log;

import com.ANVISERO.function.log.*;
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

public class LogarithmEquationTest {
    private static final String FILE_PATH_LN_LOG2_LOG5_LOG10 = "src/test/resources/log/ln_log2_log5_log10.csv";
    private static final String FILE_PATH_CSV_LN_LOG2_LOG5_LOG10 = "/log/ln_log2_log5_log10.csv";
    private static final String FILE_PATH_EQUATION = "src/test/resources/log/equation.csv";
    private static final String FILE_PATH_CSV_EQUATION = "/log/equation.csv";
    private static double accuracy;

    @BeforeAll
    @SneakyThrows
    static void setUp() {
        accuracy = 0.001;
        CsvWriter.writeLog2Log5Log10(FILE_PATH_LN_LOG2_LOG5_LOG10, 0.1, 5, 0.1);
        CsvWriter.writeLogEquation(FILE_PATH_EQUATION, 0.1, 5, 0.1);
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_LN_LOG2_LOG5_LOG10, numLinesToSkip = 1)
    @DisplayName("equation(x) unit test")
    void computeTest_whenCasualInput_thenComputedValueReturned(double x, double log2X, double log5X, double log10X,
                                                               double equation) {
        Log2 log2 = mock(Log2.class);
        Log5 log5 = mock(Log5.class);
        Log10 log10 = mock(Log10.class);
        LogarithmEquation logarithmEquation = new LogarithmEquation(log2, log5, log10);
        when(log2.compute(anyDouble(), anyDouble())).thenReturn(log2X);
        when(log5.compute(anyDouble(), anyDouble())).thenReturn(log5X);
        when(log10.compute(anyDouble(), anyDouble())).thenReturn(log10X);

        double result = logarithmEquation.compute(x, accuracy);

        assertEquals(equation, result, accuracy * 10);
        verify(log2, times(1)).compute(anyDouble(), anyDouble());
        verify(log5, times(1)).compute(anyDouble(), anyDouble());
        verify(log10, times(1)).compute(anyDouble(), anyDouble());
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_EQUATION, numLinesToSkip = 1)
    @DisplayName("equation(x) integration test")
    void computeIntegrationTest_whenCasualInput_thenComputedValueReturned(double x, double equation) {
        Ln ln = new Ln();
        Log2 log2 = new Log2(ln);
        Log5 log5 = new Log5(ln);
        Log10 log10 = new Log10(ln);
        LogarithmEquation logarithmEquation = new LogarithmEquation(log2, log5, log10);

        double result = logarithmEquation.compute(x, accuracy);

        assertEquals(equation, result, accuracy * 10);
    }
}
