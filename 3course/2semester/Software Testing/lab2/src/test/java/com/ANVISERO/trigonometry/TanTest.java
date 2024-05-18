package com.ANVISERO.trigonometry;

import com.ANVISERO.function.trigonometry.Cos;
import com.ANVISERO.function.trigonometry.Cot;
import com.ANVISERO.function.trigonometry.Sin;
import com.ANVISERO.function.trigonometry.Tan;
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

public class TanTest {
    private static final String FILE_PATH_COS_SIN_TAN = "src/test/resources/trigonometry/cos_sin_tan.csv";
    private static final String FILE_PATH_CSV_COS_SIN_TAN = "/trigonometry/cos_sin_tan.csv";
    private static final String FILE_PATH_TAN = "src/test/resources/trigonometry/tan.csv";
    private static final String FILE_PATH_CSV_TAN = "/trigonometry/tan.csv";
    private static double accuracy;

    @BeforeAll
    @SneakyThrows
    static void setUp() {
        accuracy = 0.00001;
        CsvWriter.writeCosSinTan(FILE_PATH_COS_SIN_TAN, -2 * PI, 2 * PI, PI / 12);
        CsvWriter.writeTan(FILE_PATH_TAN, -2 * PI, 2 * PI, PI / 12);
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_COS_SIN_TAN, numLinesToSkip = 1)
    @DisplayName("tan(x) unit test")
    void computeTest_whenCasualInput_thenComputedValueReturned(double x, double cosX, double sinX, double tanX) {
        Cos cos = mock(Cos.class);
        Sin sin = mock(Sin.class);
        Tan tan = new Tan(cos, sin);
        when(cos.compute(anyDouble(), anyDouble())).thenReturn(cosX);
        when(sin.compute(anyDouble(), anyDouble())).thenReturn(sinX);

        double result = tan.compute(x, accuracy);

        assertEquals(tanX, result, accuracy * 10);
        verify(cos, times(1)).compute(anyDouble(), anyDouble());
        verify(sin, times(1)).compute(anyDouble(), anyDouble());
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_TAN, numLinesToSkip = 1)
    @DisplayName("tan(x) integration test")
    void computeIntegrationTest_whenCasualInput_thenComputedValueReturned(double x, double tanX) {
        Cos cos = new Cos();
        Sin sin = new Sin(cos);
        Tan tan = new Tan(cos, sin);

        double result = tan.compute(x, accuracy);

        assertEquals(tanX, result, accuracy * 10);
    }
}
