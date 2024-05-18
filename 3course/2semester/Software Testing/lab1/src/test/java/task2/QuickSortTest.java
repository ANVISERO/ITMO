package task2;

import com.anvisero.task2.QuickSort;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.params.provider.Arguments.arguments;

public class QuickSortTest {

    @ParameterizedTest
    @DisplayName("Check sorting all array")
    @MethodSource("provideAllArray")
    <T extends Comparable<T>> void testQuickSortWithSortingAllArrayThenReturnSortedArray(T[] array, T[] sortedArray) {

        QuickSort.sort(array, 0, array.length - 1);

        assertArrayEquals(sortedArray, array);
    }

    @ParameterizedTest
    @DisplayName("Check sorting part of array")
    @MethodSource("providePartOfArray")
    <T extends Comparable<T>> void testQuickSortWithSortingPartOfArrayThenReturnArrayWithSortedPart(T[] array,
                                                                                                    T[] sortedArray) {

        QuickSort.sort(array, 3, array.length - 3);

        assertArrayEquals(sortedArray, array);
    }

    @ParameterizedTest
    @DisplayName("Check sorting of empty array")
    @MethodSource("provideEmptyArray")
    <T extends Comparable<T>> void testQuickSortWithEmptyArrayThenReturnEmptyArray(T[] array, T[] sortedArray) {

        QuickSort.sort(array, 0, 0);

        assertArrayEquals(sortedArray, array);
    }

    @ParameterizedTest
    @DisplayName("Check sorting of array with incorrect boundaries")
    @MethodSource("provideAllArrayWithIncorrectBoundaries")
    <T extends Comparable<T>> void testQuickSortWithArrayWithIncorrectBoundariesThenThrowIllegalArgumentException(T[] array) {

        assertThrows(IllegalArgumentException.class, () -> QuickSort.sort(array, 5, 4));
        assertThrows(IllegalArgumentException.class, () -> QuickSort.sort(array, array.length, array.length + 1));
        assertThrows(IllegalArgumentException.class, () -> QuickSort.sort(array, -1, -2));
        assertThrows(IllegalArgumentException.class, () -> QuickSort.sort(array, -1, -5));
        assertThrows(IllegalArgumentException.class, () -> QuickSort.sort(array, 0, -5));
    }

    @Test
    @DisplayName("Check null input")
    void testQuickSortWithNullThenThrowIllegalArgumentException() {

        assertThrows(IllegalArgumentException.class, () -> QuickSort.sort(null, 0, 0));
    }


    private static Stream<Arguments> provideAllArray() {
        return Stream.of(
                arguments(new Byte[]{17, 14, 15, 28, 6, 8, -6, 1, 3, 18},
                        new Byte[]{-6, 1, 3, 6, 8, 14, 15, 17, 18, 28}),
                arguments(new Short[]{17, 14, 15, 28, 6, 8, -6, 1, 3, 18},
                        new Short[]{-6, 1, 3, 6, 8, 14, 15, 17, 18, 28}),
                arguments(new Integer[]{17, 14, 15, 28, 6, 8, -6, 1, 3, 18},
                        new Integer[]{-6, 1, 3, 6, 8, 14, 15, 17, 18, 28}),
                arguments(new Long[]{17L, 14L, 15L, 28L, 6L, 8L, -6L, 1L, 3L, 18L},
                        new Long[]{-6L, 1L, 3L, 6L, 8L, 14L, 15L, 17L, 18L, 28L}),
                arguments(new Double[]{17.0, 14.0, 15.0, 28.0, 6.0, 8.0, -6.0, 1.0, 3.0, 18.0},
                        new Double[]{-6.0, 1.0, 3.0, 6.0, 8.0, 14.0, 15.0, 17.0, 18.0, 28.0}),
                arguments(new Float[]{17.0F, 14.0F, 15.0F, 28.0F, 6.0F, 8.0F, -6.0F, 1.0F, 3.0F, 18.0F},
                        new Float[]{-6.0F, 1.0F, 3.0F, 6.0F, 8.0F, 14.0F, 15.0F, 17.0F, 18.0F, 28.0F}),
                arguments(new Byte[]{17, 28, 6, 8, -6, 1, 3, 18},
                        new Byte[]{-6, 1, 3, 6, 8, 17, 18, 28}),
                arguments(new Short[]{17, 28, 6, 8, -6, 1, 3, 18},
                        new Short[]{-6, 1, 3, 6, 8, 17, 18, 28}),
                arguments(new Integer[]{17, 28, 6, 8, -6, 1, 3, 18},
                        new Integer[]{-6, 1, 3, 6, 8, 17, 18, 28}),
                arguments(new Long[]{17L, 28L, 6L, 8L, -6L, 1L, 3L, 18L},
                        new Long[]{-6L, 1L, 3L, 6L, 8L, 17L, 18L, 28L}),
                arguments(new Double[]{17.0, 28.0, 6.0, 8.0, -6.0, 1.0, 3.0, 18.0},
                        new Double[]{-6.0, 1.0, 3.0, 6.0, 8.0, 17.0, 18.0, 28.0}),
                arguments(new Float[]{17.0F, 28.0F, 6.0F, 8.0F, -6.0F, 1.0F, 3.0F, 18.0F},
                        new Float[]{-6.0F, 1.0F, 3.0F, 6.0F, 8.0F, 17.0F, 18.0F, 28.0F}),
                arguments(new Byte[]{17, 14, 15, 28, 6, 8, -6, -6, 1, 1, 0, 3, 18},
                        new Byte[]{-6, -6, 0, 1, 1, 3, 6, 8, 14, 15, 17, 18, 28}),
                arguments(new Short[]{17, 14, 15, 28, 6, 8, -6, -6, 1, 1, 0, 3, 18},
                        new Short[]{-6, -6, 0, 1, 1, 3, 6, 8, 14, 15, 17, 18, 28}),
                arguments(new Integer[]{17, 14, 15, 28, 6, 8, -6, -6, 1, 1, 0, 3, 18},
                        new Integer[]{-6, -6, 0, 1, 1, 3, 6, 8, 14, 15, 17, 18, 28}),
                arguments(new Long[]{17L, 14L, 15L, 28L, 6L, 8L, -6L, -6L, 1L, 1L, 0L, 3L, 18L},
                        new Long[]{-6L, -6L, 0L, 1L, 1L, 3L, 6L, 8L, 14L, 15L, 17L, 18L, 28L}),
                arguments(new Double[]{17.0, 14.0, 15.0, 28.0, 6.0, 8.0, -6.0, -6.0, 1.0, 1.0, 0.0, 3.0, 18.0},
                        new Double[]{-6.0, -6.0, 0.0, 1.0, 1.0, 3.0, 6.0, 8.0, 14.0, 15.0, 17.0, 18.0, 28.0}),
                arguments(new Float[]{17.0F, 14.0F, 15.0F, 28.0F, 6.0F, 8.0F, -6.0F, -6.0F, 1.0F, 1.0F, 0.0F, 3.0F,
                                18.0F},
                        new Float[]{-6.0F, -6.0F, 0.0F, 1.0F, 1.0F, 3.0F, 6.0F, 8.0F, 14.0F, 15.0F, 17.0F, 18.0F,
                                28.0F})
        );
    }

    private static Stream<Arguments> providePartOfArray() {
        return Stream.of(
                arguments(new Byte[]{17, 14, 15, 28, 6, 8, -6, 1, 3, 18},
                        new Byte[]{17, 14, 15, -6, 1, 6, 8, 28, 3, 18}),
                arguments(new Short[]{17, 14, 15, 28, 6, 8, -6, 1, 3, 18},
                        new Short[]{17, 14, 15, -6, 1, 6, 8, 28, 3, 18}),
                arguments(new Integer[]{17, 14, 15, 28, 6, 8, -6, 1, 3, 18},
                        new Integer[]{17, 14, 15, -6, 1, 6, 8, 28, 3, 18}),
                arguments(new Long[]{17L, 14L, 15L, 28L, 6L, 8L, -6L, 1L, 3L, 18L},
                        new Long[]{17L, 14L, 15L, -6L, 1L, 6L, 8L, 28L, 3L, 18L}),
                arguments(new Double[]{17.0, 14.0, 15.0, 28.0, 6.0, 8.0, -6.0, 1.0, 3.0, 18.0},
                        new Double[]{17.0, 14.0, 15.0, -6.0, 1.0, 6.0, 8.0, 28.0, 3.0, 18.0}),
                arguments(new Float[]{17.0F, 14.0F, 15.0F, 28.0F, 6.0F, 8.0F, -6.0F, 1.0F, 3.0F, 18.0F},
                        new Float[]{17.0F, 14.0F, 15.0F, -6.0F, 1.0F, 6.0F, 8.0F, 28.0F, 3.0F, 18.0F}),
                arguments(new Byte[]{17, 28, 6, 8, -6, 1, 3, 18},
                        new Byte[]{17, 28, 6, -6, 1, 8, 3, 18}),
                arguments(new Short[]{17, 28, 6, 8, -6, 1, 3, 18},
                        new Short[]{17, 28, 6, -6, 1, 8, 3, 18}),
                arguments(new Integer[]{17, 28, 6, 8, -6, 1, 3, 18},
                        new Integer[]{17, 28, 6, -6, 1, 8, 3, 18}),
                arguments(new Long[]{17L, 28L, 6L, 8L, -6L, 1L, 3L, 18L},
                        new Long[]{17L, 28L, 6L, -6L, 1L, 8L, 3L, 18L}),
                arguments(new Double[]{17.0, 28.0, 6.0, 8.0, -6.0, 1.0, 3.0, 18.0},
                        new Double[]{17.0, 28.0, 6.0, -6.0, 1.0, 8.0, 3.0, 18.0}),
                arguments(new Float[]{17.0F, 28.0F, 6.0F, 8.0F, -6.0F, 1.0F, 3.0F, 18.0F},
                        new Float[]{17.0F, 28.0F, 6.0F, -6.0F, 1.0F, 8.0F, 3.0F, 18.0F}),
                arguments(new Byte[]{17, 14, 15, 28, 6, 8, -6, -6, 1, 1, 0, 3, 18},
                        new Byte[]{17, 14, 15, -6, -6, 0, 1, 1, 6, 8, 28, 3, 18}),
                arguments(new Short[]{17, 14, 15, 28, 6, 8, -6, -6, 1, 1, 0, 3, 18},
                        new Short[]{17, 14, 15, -6, -6, 0, 1, 1, 6, 8, 28, 3, 18}),
                arguments(new Integer[]{17, 14, 15, 28, 6, 8, -6, -6, 1, 1, 0, 3, 18},
                        new Integer[]{17, 14, 15, -6, -6, 0, 1, 1, 6, 8, 28, 3, 18}),
                arguments(new Long[]{17L, 14L, 15L, 28L, 6L, 8L, -6L, -6L, 1L, 1L, 0L, 3L, 18L},
                        new Long[]{17L, 14L, 15L, -6L, -6L, 0L, 1L, 1L, 6L, 8L, 28L, 3L, 18L}),
                arguments(new Double[]{17.0, 14.0, 15.0, 28.0, 6.0, 8.0, -6.0, -6.0, 1.0, 1.0, 0.0, 3.0, 18.0},
                        new Double[]{17.0, 14.0, 15.0, -6.0, -6.0, 0.0, 1.0, 1.0, 6.0, 8.0, 28.0, 3.0, 18.0}),
                arguments(new Float[]{17.0F, 14.0F, 15.0F, 28.0F, 6.0F, 8.0F, -6.0F, -6.0F, 1.0F, 1.0F, 0.0F, 3.0F,
                                18.0F},
                        new Float[]{17.0F, 14.0F, 15.0F, -6.0F, -6.0F, 0.0F, 1.0F, 1.0F, 6.0F, 8.0F, 28.0F, 3.0F,
                                18.0F})
        );
    }

    private static Stream<Arguments> provideEmptyArray() {
        return Stream.of(
                arguments(new Byte[]{}, new Byte[]{}),
                arguments(new Short[]{}, new Short[]{}),
                arguments(new Integer[]{}, new Integer[]{}),
                arguments(new Long[]{}, new Long[]{}),
                arguments(new Double[]{}, new Double[]{}),
                arguments(new Float[]{}, new Float[]{})
        );
    }

    private static Stream<Arguments> provideAllArrayWithIncorrectBoundaries() {
        return Stream.of(
                arguments((Object) new Byte[]{17, 14, 15, 28, 6, 8, -6, 1, 3, 18}),
                arguments((Object) new Short[]{17, 14, 15, 28, 6, 8, -6, 1, 3, 18}),
                arguments((Object) new Integer[]{17, 14, 15, 28, 6, 8, -6, 1, 3, 18}),
                arguments((Object) new Long[]{17L, 14L, 15L, 28L, 6L, 8L, -6L, 1L, 3L, 18L}),
                arguments((Object) new Double[]{17.0, 14.0, 15.0, 28.0, 6.0, 8.0, -6.0, 1.0, 3.0, 18.0}),
                arguments((Object) new Float[]{17.0F, 14.0F, 15.0F, 28.0F, 6.0F, 8.0F, -6.0F, 1.0F, 3.0F, 18.0F})
        );
    }
}
