package com.anvisero.task2;

public class QuickSort<T extends Comparable<T>> {

    public static <T extends Comparable<T>> void sort(T[] array, int low, int high) {
        if (array == null || low < 0 || high < 0 || low > high || (low >= array.length || high >= array.length)
                && array.length != 0) {
            throw new IllegalArgumentException();
        }

        quickSort(array, low, high);
    }

    private static <T extends Comparable<T>> void quickSort(T[] array, int low, int high) {
        if (array.length == 0) {
            return;
        }

        if (low < high) {
            int pivot = partition(array, low, high);

            quickSort(array, low, pivot - 1);
            quickSort(array, pivot + 1, high);
        }
    }

    private static <T extends Comparable<T>> int partition(T[] array, int low, int high) {
        int middle = low + (high - low) / 2;
        T pivot = array[middle];

        T temp = array[middle];
        array[middle] = array[high];
        array[high] = temp;

        int i = (low - 1);
        for (int j = low; j < high; j++) {
            if (array[j].compareTo(pivot) < 0) {
                i++;

                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }

        temp = array[i + 1];
        array[i + 1] = array[high];
        array[high] = temp;

        return i + 1;
    }
}
