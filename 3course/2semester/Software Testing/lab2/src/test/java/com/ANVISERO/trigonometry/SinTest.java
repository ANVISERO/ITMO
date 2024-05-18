package com.ANVISERO.trigonometry;

import com.ANVISERO.function.trigonometry.Cos;
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

public class SinTest {
    private static final String FILE_PATH_COS_AND_SIN = "src/test/resources/trigonometry/cos_and_sin.csv";
    private static final String FILE_PATH_CSV_COS_AND_SIN = "/trigonometry/cos_and_sin.csv";
    private static final String FILE_PATH_SIN = "src/test/resources/trigonometry/sin.csv";
    private static final String FILE_PATH_CSV_SIN = "/trigonometry/sin.csv";
    private static double accuracy;

    @BeforeAll
    @SneakyThrows
    static void setUp() {
        accuracy = 0.001;
        CsvWriter.writeCosAndSin(FILE_PATH_COS_AND_SIN, -2 * PI, 2 * PI, PI / 12);
        CsvWriter.writeSin(FILE_PATH_SIN, -2 * PI, 2 * PI, PI / 12);
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_COS_AND_SIN, numLinesToSkip = 1)
    @DisplayName("sin(x) unit test")
    void computeTest_whenCasualInput_thenComputedValueReturned(double x, double cosX, double sinX) {
        Cos cos = mock(Cos.class);
        Sin sin = new Sin(cos);
        when(cos.compute(anyDouble(), anyDouble())).thenReturn(cosX);

        double result = sin.compute(x, accuracy);

        assertEquals(sinX, result, accuracy * 10);
        verify(cos, times(1)).compute(anyDouble(), anyDouble());
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_SIN, numLinesToSkip = 1)
    @DisplayName("sin(x) integration test")
    void computeIntegrationTest_whenCasualInput_thenComputedValueReturned(double x, double sinX) {
        Cos cos = new Cos();
        Sin sin = new Sin(cos);

        double result = sin.compute(x, accuracy);

        assertEquals(sinX, result, accuracy * 10);
    }
}
