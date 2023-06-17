package controller;

import model.MarkStorage;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "ClearTableServlet", value = "/ClearTableServlet")
public class ClearTableServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        MarkStorage storage = (MarkStorage) getServletContext().getAttribute("storage");
        String id = request.getRequestedSessionId();
        if (storage.containsId(id)) {
            storage.clearStorageById(id);
        }
        getServletContext().setAttribute("storage", storage);
    }

}
