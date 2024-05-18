package com.ANVISERO.trigonometry;

import com.ANVISERO.function.trigonometry.*;
import com.ANVISERO.util.CsvWriter;
import lombok.SneakyThrows;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;

import static java.lang.Math.PI;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyDouble;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class TrigonometryEquationTest {
    private static final String FILE_PATH_COS_SIN_COT_TAN_SEC_CSC =
            "src/test/resources/trigonometry/cos_sin_cot_tan_sec_csc.csv";
    private static final String FILE_PATH_CSV_COS_SIN_COT_TAN_SEC_CSC = "/trigonometry/cos_sin_cot_tan_sec_csc.csv";
    private static final String FILE_PATH_EQUATION = "src/test/resources/trigonometry/equation.csv";
    private static final String FILE_PATH_CSV_EQUATION = "/trigonometry/equation.csv";
    private static double accuracy;

    @BeforeAll
    @SneakyThrows
    static void setUp() {
        accuracy = 0.00001;
        CsvWriter.writeCosSinCotTanSecCsc(FILE_PATH_COS_SIN_COT_TAN_SEC_CSC, -2 * PI, 2 * PI, PI / 12);
        CsvWriter.writeEquation(FILE_PATH_EQUATION, -2 * PI, 2 * PI, PI / 12);
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_COS_SIN_COT_TAN_SEC_CSC, numLinesToSkip = 1)
    @DisplayName("equation(x) unit test")
    void computeTest_whenCasualInput_thenComputedValueReturned(double x, double cosX, double sinX, double cotX,
                                                               double tanX, double secX, double cscX, double equation) {
        Cos cos = mock(Cos.class);
        Sin sin = mock(Sin.class);
        Cot cot = mock(Cot.class);
        Tan tan = mock(Tan.class);
        Sec sec = mock(Sec.class);
        Csc csc = mock(Csc.class);
        TrigonometryEquation trigonometryEquation = new TrigonometryEquation(cos, sin, cot, tan, sec, csc);
        when(cos.compute(anyDouble(), anyDouble())).thenReturn(cosX);
        when(sin.compute(anyDouble(), anyDouble())).thenReturn(sinX);
        when(cot.compute(anyDouble(), anyDouble())).thenReturn(cotX);
        when(tan.compute(anyDouble(), anyDouble())).thenReturn(tanX);
        when(sec.compute(anyDouble(), anyDouble())).thenReturn(secX);
        when(csc.compute(anyDouble(), anyDouble())).thenReturn(cscX);

        double result = trigonometryEquation.compute(x, accuracy);

        assertEquals(equation, result, accuracy * 1000);
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_EQUATION, numLinesToSkip = 1)
    @DisplayName("equation(x) integration test")
    void computeIntegrationTest_whenCasualInput_thenComputedValueReturned(double x, double equation) {
        Cos cos = new Cos();
        Sin sin = new Sin(cos);
        Tan tan = new Tan(cos, sin);
        Cot cot = new Cot(cos, sin);
        Sec sec = new Sec(cos);
        Csc csc = new Csc(sin);
        TrigonometryEquation trigonometryEquation = new TrigonometryEquation(cos, sin, cot, tan, sec, csc);

        double result = trigonometryEquation.compute(x, accuracy);

        assertEquals(equation, result, accuracy * 1000);
    }
}
