package controller;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "ControllerServlet", value = "/ControllerServlet")
public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getServletContext().setAttribute("leadTime", System.nanoTime());
        if (request.getParameter("command").equals("hit")) {
            request.getRequestDispatcher("/AreaCheckServlet").forward(request, response);
        }
        else if (request.getParameter("command").equals("clear")) {
            request.getRequestDispatcher("/ClearTableServlet").forward(request, response);
        }
    }
}
