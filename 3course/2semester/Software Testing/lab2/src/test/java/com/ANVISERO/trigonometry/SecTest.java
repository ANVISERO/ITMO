package com.ANVISERO.trigonometry;

import com.ANVISERO.function.trigonometry.Cos;
import com.ANVISERO.function.trigonometry.Sec;
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

public class SecTest {
    private static final String FILE_PATH_COS_SEC = "src/test/resources/trigonometry/cos_sec.csv";
    private static final String FILE_PATH_CSV_COS_SEC = "/trigonometry/cos_sec.csv";
    private static final String FILE_PATH_SEC = "src/test/resources/trigonometry/sec.csv";
    private static final String FILE_PATH_CSV_SEC = "/trigonometry/sec.csv";
    private static double accuracy;

    @BeforeAll
    @SneakyThrows
    static void setUp() {
        accuracy = 0.00001;
        CsvWriter.writeCosSec(FILE_PATH_COS_SEC, -2 * PI, 2 * PI, PI / 12);
        CsvWriter.writeSec(FILE_PATH_SEC, -2 * PI, 2 * PI, PI / 12);
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_COS_SEC, numLinesToSkip = 1)
    @DisplayName("sec(x) unit test")
    void computeTest_whenCasualInput_thenComputedValueReturned(double x, double cosX, double secX) {
        Cos cos = mock(Cos.class);
        Sec sec = new Sec(cos);
        when(cos.compute(anyDouble(), anyDouble())).thenReturn(cosX);

        double result = sec.compute(x, accuracy);

        assertEquals(secX, result, accuracy * 10);
        verify(cos, times(1)).compute(anyDouble(), anyDouble());
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_SEC, numLinesToSkip = 1)
    @DisplayName("sec(x) integration test")
    void computeIntegrationTest_whenCasualInput_thenComputedValueReturned(double x, double secX) {
        Cos cos = new Cos();
        Sec sec = new Sec(cos);

        double result = sec.compute(x, accuracy);

        assertEquals(secX, result, accuracy * 10);
    }
}
