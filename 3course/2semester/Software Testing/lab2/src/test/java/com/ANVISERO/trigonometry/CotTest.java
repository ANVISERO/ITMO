package com.ANVISERO.trigonometry;

import com.ANVISERO.function.trigonometry.Cos;
import com.ANVISERO.function.trigonometry.Cot;
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

public class CotTest {
    private static final String FILE_PATH_COS_SIN_COT = "src/test/resources/trigonometry/cos_sin_cot.csv";
    private static final String FILE_PATH_CSV_COS_SIN_COT = "/trigonometry/cos_sin_cot.csv";
    private static final String FILE_PATH_COT = "src/test/resources/trigonometry/cot.csv";
    private static final String FILE_PATH_CSV_COT = "/trigonometry/cot.csv";
    private static double accuracy;

    @BeforeAll
    @SneakyThrows
    static void setUp() {
        accuracy = 0.00001;
        CsvWriter.writeCosSinCot(FILE_PATH_COS_SIN_COT, -2 * PI, 2 * PI, PI / 12);
        CsvWriter.writeCot(FILE_PATH_COT, -2 * PI, 2 * PI, PI / 12);
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_COS_SIN_COT, numLinesToSkip = 1)
    @DisplayName("cot(x) unit test")
    void computeTest_whenCasualInput_thenComputedValueReturned(double x, double cosX, double sinX, double cotX) {
        Cos cos = mock(Cos.class);
        Sin sin = mock(Sin.class);
        Cot cot = new Cot(cos, sin);
        when(cos.compute(anyDouble(), anyDouble())).thenReturn(cosX);
        when(sin.compute(anyDouble(), anyDouble())).thenReturn(sinX);

        double result = cot.compute(x, accuracy);

        assertEquals(cotX, result, accuracy * 10);
        verify(cos, times(1)).compute(anyDouble(), anyDouble());
        verify(sin, times(1)).compute(anyDouble(), anyDouble());
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_COT, numLinesToSkip = 1)
    @DisplayName("cot(x) integration test")
    void computeIntegrationTest_whenCasualInput_thenComputedValueReturned(double x, double cotX) {
        Cos cos = new Cos();
        Sin sin = new Sin(cos);
        Cot cot = new Cot(cos, sin);

        double result = cot.compute(x, accuracy);

        assertEquals(cotX, result, accuracy * 10);
    }
}
