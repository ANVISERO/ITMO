package com.ANVISERO.trigonometry;

import com.ANVISERO.function.trigonometry.Cos;
import com.ANVISERO.function.trigonometry.Csc;
import com.ANVISERO.function.trigonometry.Sin;
import com.ANVISERO.util.CsvWriter;
import lombok.SneakyThrows;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;

import static java.lang.Math.PI;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyDouble;
import static org.mockito.Mockito.*;

public class CscTest {
    private static final String FILE_PATH_SIN_CSC = "src/test/resources/trigonometry/sin_csc.csv";
    private static final String FILE_PATH_CSV_SIN_CSC = "/trigonometry/sin_csc.csv";
    private static final String FILE_PATH_CSC = "src/test/resources/trigonometry/csc.csv";
    private static final String FILE_PATH_CSV_CSC = "/trigonometry/csc.csv";
    private static double accuracy;

    @BeforeAll
    @SneakyThrows
    static void setUp() {
        accuracy = 0.00001;
        CsvWriter.writeCosCsc(FILE_PATH_SIN_CSC, -2 * PI, 2 * PI, PI / 12);
        CsvWriter.writeCsc(FILE_PATH_CSC, -2 * PI, 2 * PI, PI / 12);
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_SIN_CSC, numLinesToSkip = 1)
    @DisplayName("scs(x) unit test")
    void computeTest_whenCasualInput_thenComputedValueReturned(double x, double sinX, double scsX) {
        Sin sin = mock(Sin.class);
        Csc csc = new Csc(sin);
        when(sin.compute(anyDouble(), anyDouble())).thenReturn(sinX);

        double result = csc.compute(x, accuracy);

        assertEquals(scsX, result, accuracy * 10);
        verify(sin, times(1)).compute(anyDouble(), anyDouble());
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_CSC, numLinesToSkip = 1)
    @DisplayName("scs(x) integration test")
    void computeIntegrationTest_whenCasualInput_thenComputedValueReturned(double x, double scsX) {
        Cos cos = new Cos();
        Sin sin = new Sin(cos);
        Csc csc = new Csc(sin);

        double result = csc.compute(x, accuracy);

        assertEquals(scsX, result, accuracy * 10);
    }
}
