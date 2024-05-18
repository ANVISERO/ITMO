package com.example.lab3mispi.markDAO;


import java.util.List;

public interface BaseDAO<T> {

    void addMark(T value);
    List<T> getAllMarks(String timezone);
}
