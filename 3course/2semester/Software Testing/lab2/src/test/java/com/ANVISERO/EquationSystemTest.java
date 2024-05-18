package com.ANVISERO;

import com.ANVISERO.function.log.*;
import com.ANVISERO.function.trigonometry.*;
import com.ANVISERO.util.CsvWriter;
import lombok.SneakyThrows;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyDouble;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class EquationSystemTest {
    private static final String FILE_PATH_EQUATION_SYSTEM_UNIT = "src/test/resources/log/equation_system_unit.csv";
    private static final String FILE_PATH_CSV_EQUATION_SYSTEM_UNIT = "/log/equation_system_unit.csv";
    private static final String FILE_PATH_EQUATION_SYSTEM = "src/test/resources/log/equation_system_int.csv";
    private static final String FILE_PATH_CSV_EQUATION_SYSTEM = "/log/equation_system_int.csv";
    private static double accuracy;

    @BeforeAll
    @SneakyThrows
    static void setUp() {
        accuracy = 0.000001;
        CsvWriter.writeEquationSystemUnit(FILE_PATH_EQUATION_SYSTEM_UNIT, -5, 5, 0.1);
        CsvWriter.writeEquationSystem(FILE_PATH_EQUATION_SYSTEM, -5, 5, 0.1);
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_EQUATION_SYSTEM_UNIT, numLinesToSkip = 1)
    @DisplayName("equation_system(x) unit test")
    void computeTest_whenCasualInput_thenComputedValueReturned(double x, double trigonometryEquationX,
                                                               double logarithmEquationX, double equationSys) {
        TrigonometryEquation trigonometryEquation = mock(TrigonometryEquation.class);
        LogarithmEquation logarithmEquation = mock(LogarithmEquation.class);
        EquationSystem equationSystem = new EquationSystem(trigonometryEquation, logarithmEquation);
        when(trigonometryEquation.compute(anyDouble(), anyDouble())).thenReturn(trigonometryEquationX);
        when(logarithmEquation.compute(anyDouble(), anyDouble())).thenReturn(logarithmEquationX);

        double result = equationSystem.compute(x, accuracy);

        assertEquals(equationSys, result, accuracy * 10);
    }

    @ParameterizedTest
    @CsvFileSource(resources = FILE_PATH_CSV_EQUATION_SYSTEM, numLinesToSkip = 1)
    @DisplayName("equation_system(x) integration test")
    void computeIntegrationTest_whenCasualInput_thenComputedValueReturned(double x, double equationSys) {
        Ln ln = new Ln();
        Log2 log2 = new Log2(ln);
        Log5 log5 = new Log5(ln);
        Log10 log10 = new Log10(ln);
        LogarithmEquation logarithmEquation = new LogarithmEquation(log2, log5, log10);
        Cos cos = new Cos();
        Sin sin = new Sin(cos);
        Tan tan = new Tan(cos, sin);
        Cot cot = new Cot(cos, sin);
        Sec sec = new Sec(cos);
        Csc csc = new Csc(sin);
        TrigonometryEquation trigonometryEquation = new TrigonometryEquation(cos, sin, cot, tan, sec, csc);
        EquationSystem equationSystem = new EquationSystem(trigonometryEquation, logarithmEquation);

        double result = equationSystem.compute(x, accuracy);

        assertEquals(equationSys, result, accuracy * 100000);
    }
}
