package com.example.lab3mispi.markDAO;




import com.example.lab3mispi.model.Mark;

import java.sql.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static java.lang.Math.abs;

public class MarkDAO implements BaseDAO<Mark> {
    private Connection connection;

    public MarkDAO() {
        initScript();
    }

    // Add mark
    @Override
    public void addMark(Mark mark) {
        try {
            PreparedStatement ps = connection.prepareStatement("INSERT INTO marks" +
                    " (id, xValue, yValue, rValue, hit, time, leadTime) VALUES (?, ?, ?, ?, ?, ?, ?);");
            ps.setInt(1, abs(UUID.randomUUID().hashCode()));
            ps.setDouble(2, mark.getXValue());
            ps.setDouble(3, mark.getYValue());
            ps.setDouble(4, mark.getRValue());
            ps.setString(5, mark.getHit());
            ps.setTimestamp(6, Timestamp.valueOf(mark.getTime()));
            ps.setLong(7, mark.getLeadTime());
            ps.execute();
            ps.close();
        } catch (SQLException e) {
            System.err.println("DB Adding error");
        }
    }

    @Override
    public List<Mark> getAllMarks(String timezone) {
        List<Mark> marks = new ArrayList<>();
        try {
            Statement statement = connection.createStatement();
            ResultSet result = statement.executeQuery("SELECT * FROM marks;");
            while (result.next()) {
                double xValue = result.getDouble("xValue");
                double yValue = result.getDouble("yValue");
                double rValue = result.getDouble("rValue");
                String hit = result.getString("hit");
                LocalDateTime time = result.getTimestamp("time").toLocalDateTime();
                long leadTime = result.getLong("leadTime");
                Mark mark = new Mark(xValue, yValue, rValue, hit, time, leadTime);
                marks.add(mark);
            }
            statement.close();
            return marks;
        } catch (SQLException e) {
            System.err.println("DB Select error");
            return marks;
        }
    }

    private void initScript() {
        try {
            connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/anvisero", "anvisero", "123");
            String sql = "CREATE TABLE IF NOT EXISTS marks\n" +
                    "(\n" +
                    "    id                     SERIAL PRIMARY KEY UNIQUE,\n" +
                    "    xValue                 DOUBLE PRECISION                    NOT NULL,\n" +
                    "    yValue                 DOUBLE PRECISION                    NOT NULL,\n" +
                    "    rValue                 DOUBLE PRECISION                    NOT NULL,\n" +
                    "    hit                    VARCHAR(4)                          NOT NULL,\n" +
                    "    time                   timestamp                           NOT NULL,\n" +
                    "    leadTime               BIGINT                              NOT NULL \n" +
                    ");";
            Statement st = connection.createStatement();
            st.execute(sql);
        } catch (SQLException e) {
            System.err.println("Connection ERROR");
            e.printStackTrace();
            System.exit(1);
        }
    }
}


