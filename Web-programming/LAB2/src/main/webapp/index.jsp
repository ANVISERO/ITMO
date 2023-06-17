<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="model.MarkStorage" %>
<%@ page import="model.Mark" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.Objects" %>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./css/style.css">
        <title>LAB 2</title>
    </head>
    <body>
        <div class="container">
            <div class="header_container icon">
                <span class="name">Ivanov Andrey Viacheslavovich</span>
                <span>Group: P32101</span>
                <span class="variant">Var: 10008</span>
            </div>
            <div class="main_container">
                <div class="form_and_graph">
                    <div class="graph icon">
                        <svg style="box-sizing: border-box" id="graph-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                            <!-- circle -->
                            <path class="graph-shape" d="M 250 150 A 100 100, 1, 0, 0, 150 50 L 150 150 Z"></path>

                            <!-- triangle -->
                            <polygon class="graph-shape" points="150,150 150,200 100,150"></polygon>

                            <!-- rectangle -->
                            <polygon class="graph-shape" points="150,150 250,150 250,250 150,250"></polygon>

                            <!-- axles -->
                            <text class="graph-axle-text" x="290" y="140">x</text>
                            <line class="graph-axle-line" x1="0" x2="295" y1="150" y2="150"></line>
                            <polygon class="graph-axle-arrow" points="299,150 290,155 290,145"></polygon>

                            <text class="graph-axle-text" x="160" y="10">y</text>
                            <line class="graph-axle-line" x1="150" x2="150" y1="5" y2="300"></line>
                            <polygon class="graph-axle-arrow" points="150,1 145,10 155,10"></polygon>

                            <!-- points -->
                            <line class="graph-point" x1="50" x2="50" y1="145" y2="155"></line>
                            <line class="graph-point" x1="100" x2="100" y1="145" y2="155"></line>
                            <line class="graph-point" x1="200" x2="200" y1="145" y2="155"></line>
                            <line class="graph-point" x1="250" x2="250" y1="145" y2="155"></line>

                            <line class="graph-point" x1="145" x2="155" y1="250" y2="250"></line>
                            <line class="graph-point" x1="145" x2="155" y1="200" y2="200"></line>
                            <line class="graph-point" x1="145" x2="155" y1="100" y2="100"></line>
                            <line class="graph-point" x1="145" x2="155" y1="50" y2="50"></line>

                            <!-- labels -->
                            <text
                                    class="graph-label r-whole-neg"
                                    text-anchor="middle"
                                    x="50"
                                    y="140"
                            >
                                -R
                            </text>
                            <text
                                    class="graph-label r-half-neg"
                                    text-anchor="middle"
                                    x="100"
                                    y="140"
                            >
                                -R/2
                            </text>
                            <text
                                    class="graph-label r-half-pos"
                                    text-anchor="middle"
                                    x="200"
                                    y="140"
                            >
                                R/2
                            </text>
                            <text
                                    class="graph-label r-whole-pos"
                                    text-anchor="middle"
                                    x="250"
                                    y="140"
                            >
                                R
                            </text>

                            <text
                                    class="graph-label r-whole-neg"
                                    text-anchor="start"
                                    x="160"
                                    y="255"
                            >
                                -R
                            </text>
                            <text
                                    class="graph-label r-half-neg"
                                    text-anchor="start"
                                    x="160"
                                    y="205"
                            >
                                -R/2
                            </text>
                            <text
                                    class="graph-label r-half-pos"
                                    text-anchor="start"
                                    x="160"
                                    y="105"
                            >
                                R/2
                            </text>
                            <text
                                    class="graph-label r-whole-pos"
                                    text-anchor="start"
                                    x="160"
                                    y="55"
                            >
                                R
                            </text>

                            <!-- y-line -->
                            <line
                                    x1="0"
                                    y1="150"
                                    x2="300"
                                    y2="150"
                                    stroke="transparent"
                                    stroke-dasharray="3,3"
                                    id="y-line"></line>

                            <!-- x-line -->
                            <line
                                    x1="150"
                                    y1="0"
                                    x2="150"
                                    y2="300"
                                    stroke="transparent"
                                    stroke-dasharray="3,3"
                                    id="x-line"></line>

                            <!-- pointer to dot -->
                            <line
                                    x1="250"
                                    y1="300"
                                    x2="150"
                                    y2="300"
                                    stroke-dasharray="3,3"
                                    class="line"
                                    id="x-pointer"></line>
                            <line
                                    x1="283.3"
                                    y1="300"
                                    x2="283.3"
                                    y2="150"
                                    stroke-dasharray="3,3"
                                    class="line"
                                    id="y-pointer"></line>
                            <% MarkStorage storage = (MarkStorage) application.getAttribute("storage");
                                if (storage != null){
                                    List<Mark> marks = storage.getListById(session.getId());
                                    if (marks != null){
                                        for (Mark mark: marks){
                                            double convX = (mark.getX() / mark.getR()) * 100 + 150;
                                            double convY = -((mark.getY() / mark.getR()) * 100) + 150;
                                            String hit =  mark.getHit();
                                            if (Objects.equals(hit, "miss")) {
                                            %>
                                            <circle cx="<%=convX%>" cy="<%=convY%>" r="2" class="dot-state" fill="#ff0038"></circle>
                                            <% } else { %>
                                            <circle cx="<%=convX%>" cy="<%=convY%>" r="2" class="dot-state" fill="#6667AB"></circle>
                                            <%}
                                        }}
                                }%>
                            <!-- dot -->
                            <circle cx="-30" cy="-30" r="2" class="dot dot-active"></circle>
                        </svg>
                    </div>
                    <div class="control_panel">
                        <form class="form" id="form" method="get">
                            <div class="field_wrapper">
                                <div class="label">X</div>
                                <div class="x-buttons">
                                    <label>
                                        <input type="button" class="x-btn icon" value="-5" name="x-btn" />
                                    </label>
                                    <label>
                                        <input type="button" class="x-btn icon" value="-4" name="x-btn" />
                                    </label>
                                    <label>
                                        <input type="button" class="x-btn icon" value="-3" name="x-btn" />
                                    </label>
                                    <label>
                                        <input type="button" class="x-btn icon" value="-2" name="x-btn" />
                                    </label>
                                    <label>
                                        <input type="button" class="x-btn icon" value="-1" name="x-btn"/>
                                    </label>
                                    <label>
                                        <input type="button" class="x-btn icon" value="0" name="x-btn" />
                                    </label>
                                    <label>
                                        <input type="button" class="x-btn icon" value="1" name="x-btn" />
                                    </label>
                                    <label>
                                        <input type="button" class="x-btn icon" value="2" name="x-btn" />
                                    </label>
                                    <label>
                                        <input type="button" class="x-btn icon" value="3" name="x-btn" />
                                    </label>
                                </div>
                            </div>
                            <div class="field_wrapper">
                                <div class="label">Y</div>
                                <input class="y-field field icon" type="text" id="y-input" placeholder="Input Y [-3; 5]" maxlength="6"></input>
                            </div>
                            <div class="field_wrapper">
                                <div class="label">R</div>
                                <select class="select field icon" id="r-value">
                                    <option disabled selected>Select R</option>
                                    <option>1</option>
                                    <option>1.5</option>
                                    <option>2</option>
                                    <option>2.5</option>
                                    <option>3</option>
                                </select>
                            </div>
                            <div class="field_control">
                                <button class="submit icon" type="submit" id="submit-btn">Submit</button>
                                <button class="clear icon" id="clear-btn">Clear</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="main_table icon">
                    <table class="table">
                        <thead>
                        <tr class="table_header">
                            <th>X value</th>
                            <th>Y value</th>
                            <th>R value</th>
                            <th>Area hit</th>
                            <th>Current time</th>
                            <th>Execution time</th>
                        </tr>
                        </thead>
                        <tbody id="result-table-body">
                        <%if (storage != null){
                            List<Mark> marks = storage.getListById(session.getId());
                            if (marks != null){
                                for (int i = marks.size()-1; i >=0; i--){
                                    if (Objects.equals(marks.get(i).getHit(), "miss")) {
                        %>
                        <tr class="no" style='text-align: center;'>
                            <td><%=marks.get(i).getX()%></td>
                            <td><%=marks.get(i).getY()%></td>
                            <td><%=marks.get(i).getR()%></td>
                            <td><%=marks.get(i).getHit()%></td>
                            <td><%=marks.get(i).getTime()%></td>
                            <td><%=String.format("%.3f", (marks.get(i).getLeadTime())/1000.0)%> mcs</td>
                        </tr>
                        <%} else { %>
                        <tr style='text-align: center;'>
                            <td><%=marks.get(i).getX()%></td>
                            <td><%=marks.get(i).getY()%></td>
                            <td><%=marks.get(i).getR()%></td>
                            <td><%=marks.get(i).getHit()%></td>
                            <td><%=marks.get(i).getTime()%></td>
                            <td><%=String.format("%.3f", (marks.get(i).getLeadTime())/1000.0)%> mcs</td>
                            </tr>
                        <%}}}}%>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="notify disabled">
                <h3 class="notify_message"></h3>
            </div>
        </div>
        <script src="./js/index.js"></script>
    </body>
</html>