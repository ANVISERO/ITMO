package anvisero.prog.lab3.markDAO;


import java.util.List;

public interface BaseDAO<T> {

    void addMark(T value);
    List<T> getAllMarks(String timezone);
}
