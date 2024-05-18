package task1;


import com.anvisero.task1.ArcTg;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class ArcTgTest {

    @ParameterizedTest
    @DisplayName("Check obvious cases")
    @ValueSource(doubles = {-0.99999, -0.75, -0.66, -0.5, -0.35, -0.25, -0.1, 0.1, 0.25, 0.35, 0.5, 0.66, 0.75, 0.99})
    void testCalculateWithObviousCasesThenReturnResult(double param) {
        assertAll(() -> assertEquals(Math.atan(param), ArcTg.calculate(param), 0.00001,
                "Error occurred while checking argument: " + param));
    }

    @ParameterizedTest
    @DisplayName("Check edge cases")
    @ValueSource(doubles = {-1, 0, 1})
    void testCalculateWithEdgeCasesThenReturnResult(double param) {
        assertAll(() -> assertEquals(Math.atan(param), ArcTg.calculate(param), 0.00001,
                "Error occurred while checking argument: " + param));
    }

    @ParameterizedTest
    @DisplayName("Check error cases")
    @ValueSource(doubles = {Double.NaN, -1.01, -100, 50, 1.01})
    void testCalculateWithErrorCasesThenReturnResult(double param) {
        assertAll(() -> assertEquals(Double.NaN, ArcTg.calculate(param),
                "Error occurred while checking argument: " + param));
    }
}
