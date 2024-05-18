/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 608.0, "minX": 0.0, "maxY": 3860.0, "series": [{"data": [[0.0, 608.0], [0.1, 608.0], [0.2, 608.0], [0.3, 608.0], [0.4, 614.0], [0.5, 614.0], [0.6, 614.0], [0.7, 614.0], [0.8, 842.0], [0.9, 842.0], [1.0, 842.0], [1.1, 842.0], [1.2, 842.0], [1.3, 855.0], [1.4, 855.0], [1.5, 855.0], [1.6, 855.0], [1.7, 855.0], [1.8, 855.0], [1.9, 855.0], [2.0, 861.0], [2.1, 861.0], [2.2, 861.0], [2.3, 861.0], [2.4, 873.0], [2.5, 873.0], [2.6, 873.0], [2.7, 873.0], [2.8, 878.0], [2.9, 878.0], [3.0, 878.0], [3.1, 878.0], [3.2, 890.0], [3.3, 890.0], [3.4, 890.0], [3.5, 890.0], [3.6, 894.0], [3.7, 894.0], [3.8, 894.0], [3.9, 894.0], [4.0, 902.0], [4.1, 902.0], [4.2, 902.0], [4.3, 902.0], [4.4, 914.0], [4.5, 914.0], [4.6, 914.0], [4.7, 914.0], [4.8, 917.0], [4.9, 917.0], [5.0, 917.0], [5.1, 917.0], [5.2, 926.0], [5.3, 926.0], [5.4, 926.0], [5.5, 926.0], [5.6, 926.0], [5.7, 934.0], [5.8, 934.0], [5.9, 934.0], [6.0, 934.0], [6.1, 941.0], [6.2, 941.0], [6.3, 941.0], [6.4, 941.0], [6.5, 952.0], [6.6, 952.0], [6.7, 952.0], [6.8, 952.0], [6.9, 957.0], [7.0, 957.0], [7.1, 957.0], [7.2, 957.0], [7.3, 966.0], [7.4, 966.0], [7.5, 966.0], [7.6, 966.0], [7.7, 978.0], [7.8, 978.0], [7.9, 978.0], [8.0, 978.0], [8.1, 978.0], [8.2, 978.0], [8.3, 978.0], [8.4, 978.0], [8.5, 986.0], [8.6, 986.0], [8.7, 986.0], [8.8, 986.0], [8.9, 997.0], [9.0, 997.0], [9.1, 997.0], [9.2, 997.0], [9.3, 1004.0], [9.4, 1004.0], [9.5, 1004.0], [9.6, 1004.0], [9.7, 1009.0], [9.8, 1009.0], [9.9, 1009.0], [10.0, 1009.0], [10.1, 1017.0], [10.2, 1017.0], [10.3, 1017.0], [10.4, 1017.0], [10.5, 1025.0], [10.6, 1025.0], [10.7, 1025.0], [10.8, 1025.0], [10.9, 1033.0], [11.0, 1033.0], [11.1, 1033.0], [11.2, 1033.0], [11.3, 1041.0], [11.4, 1041.0], [11.5, 1041.0], [11.6, 1041.0], [11.7, 1049.0], [11.8, 1049.0], [11.9, 1049.0], [12.0, 1049.0], [12.1, 1057.0], [12.2, 1057.0], [12.3, 1057.0], [12.4, 1057.0], [12.5, 1065.0], [12.6, 1065.0], [12.7, 1065.0], [12.8, 1065.0], [12.9, 1073.0], [13.0, 1073.0], [13.1, 1073.0], [13.2, 1073.0], [13.3, 1081.0], [13.4, 1081.0], [13.5, 1081.0], [13.6, 1081.0], [13.7, 1089.0], [13.8, 1089.0], [13.9, 1089.0], [14.0, 1089.0], [14.1, 1095.0], [14.2, 1095.0], [14.3, 1095.0], [14.4, 1095.0], [14.5, 1104.0], [14.6, 1104.0], [14.7, 1104.0], [14.8, 1104.0], [14.9, 1112.0], [15.0, 1112.0], [15.1, 1112.0], [15.2, 1112.0], [15.3, 1120.0], [15.4, 1120.0], [15.5, 1120.0], [15.6, 1120.0], [15.7, 1129.0], [15.8, 1129.0], [15.9, 1129.0], [16.0, 1129.0], [16.1, 1135.0], [16.2, 1135.0], [16.3, 1135.0], [16.4, 1135.0], [16.5, 1144.0], [16.6, 1144.0], [16.7, 1144.0], [16.8, 1144.0], [16.9, 1144.0], [17.0, 1144.0], [17.1, 1144.0], [17.2, 1144.0], [17.3, 1144.0], [17.4, 1144.0], [17.5, 1144.0], [17.6, 1144.0], [17.7, 1144.0], [17.8, 1144.0], [17.9, 1144.0], [18.0, 1144.0], [18.1, 1144.0], [18.2, 1144.0], [18.3, 1144.0], [18.4, 1144.0], [18.5, 1144.0], [18.6, 1144.0], [18.7, 1144.0], [18.8, 1144.0], [18.9, 1144.0], [19.0, 1144.0], [19.1, 1144.0], [19.2, 1144.0], [19.3, 1144.0], [19.4, 1144.0], [19.5, 1144.0], [19.6, 1144.0], [19.7, 1144.0], [19.8, 1144.0], [19.9, 1144.0], [20.0, 1144.0], [20.1, 1548.0], [20.2, 1548.0], [20.3, 1548.0], [20.4, 1548.0], [20.5, 1555.0], [20.6, 1555.0], [20.7, 1555.0], [20.8, 1555.0], [20.9, 1564.0], [21.0, 1564.0], [21.1, 1564.0], [21.2, 1564.0], [21.3, 1572.0], [21.4, 1572.0], [21.5, 1572.0], [21.6, 1573.0], [21.7, 1573.0], [21.8, 1573.0], [21.9, 1573.0], [22.0, 1582.0], [22.1, 1582.0], [22.2, 1582.0], [22.3, 1582.0], [22.4, 1589.0], [22.5, 1589.0], [22.6, 1589.0], [22.7, 1589.0], [22.8, 1597.0], [22.9, 1597.0], [23.0, 1597.0], [23.1, 1597.0], [23.2, 1605.0], [23.3, 1605.0], [23.4, 1605.0], [23.5, 1605.0], [23.6, 1619.0], [23.7, 1619.0], [23.8, 1619.0], [23.9, 1619.0], [24.0, 1626.0], [24.1, 1626.0], [24.2, 1626.0], [24.3, 1626.0], [24.4, 1629.0], [24.5, 1629.0], [24.6, 1629.0], [24.7, 1629.0], [24.8, 1637.0], [24.9, 1637.0], [25.0, 1637.0], [25.1, 1637.0], [25.2, 1647.0], [25.3, 1647.0], [25.4, 1647.0], [25.5, 1647.0], [25.6, 1654.0], [25.7, 1654.0], [25.8, 1654.0], [25.9, 1654.0], [26.0, 1662.0], [26.1, 1662.0], [26.2, 1662.0], [26.3, 1662.0], [26.4, 1670.0], [26.5, 1670.0], [26.6, 1670.0], [26.7, 1670.0], [26.8, 1680.0], [26.9, 1680.0], [27.0, 1680.0], [27.1, 1680.0], [27.2, 1685.0], [27.3, 1685.0], [27.4, 1685.0], [27.5, 1685.0], [27.6, 1694.0], [27.7, 1694.0], [27.8, 1694.0], [27.9, 1694.0], [28.0, 1706.0], [28.1, 1706.0], [28.2, 1706.0], [28.3, 1706.0], [28.4, 1709.0], [28.5, 1709.0], [28.6, 1709.0], [28.7, 1709.0], [28.8, 1716.0], [28.9, 1716.0], [29.0, 1716.0], [29.1, 1716.0], [29.2, 1724.0], [29.3, 1724.0], [29.4, 1724.0], [29.5, 1724.0], [29.6, 1732.0], [29.7, 1732.0], [29.8, 1732.0], [29.9, 1732.0], [30.0, 1741.0], [30.1, 1741.0], [30.2, 1741.0], [30.3, 1741.0], [30.4, 1752.0], [30.5, 1752.0], [30.6, 1752.0], [30.7, 1752.0], [30.8, 1756.0], [30.9, 1756.0], [31.0, 1756.0], [31.1, 1756.0], [31.2, 1767.0], [31.3, 1767.0], [31.4, 1767.0], [31.5, 1767.0], [31.6, 1775.0], [31.7, 1775.0], [31.8, 1775.0], [31.9, 1775.0], [32.0, 1780.0], [32.1, 1780.0], [32.2, 1780.0], [32.3, 1780.0], [32.4, 1791.0], [32.5, 1791.0], [32.6, 1791.0], [32.7, 1791.0], [32.8, 1796.0], [32.9, 1796.0], [33.0, 1796.0], [33.1, 1796.0], [33.2, 1804.0], [33.3, 1804.0], [33.4, 1804.0], [33.5, 1804.0], [33.6, 1813.0], [33.7, 1813.0], [33.8, 1813.0], [33.9, 1813.0], [34.0, 1820.0], [34.1, 1820.0], [34.2, 1820.0], [34.3, 1820.0], [34.4, 1828.0], [34.5, 1828.0], [34.6, 1828.0], [34.7, 1828.0], [34.8, 1835.0], [34.9, 1835.0], [35.0, 1835.0], [35.1, 1835.0], [35.2, 1843.0], [35.3, 1843.0], [35.4, 1843.0], [35.5, 1843.0], [35.6, 1855.0], [35.7, 1855.0], [35.8, 1855.0], [35.9, 1855.0], [36.0, 1861.0], [36.1, 1861.0], [36.2, 1861.0], [36.3, 1861.0], [36.4, 1868.0], [36.5, 1868.0], [36.6, 1868.0], [36.7, 1868.0], [36.8, 1875.0], [36.9, 1875.0], [37.0, 1875.0], [37.1, 1875.0], [37.2, 1883.0], [37.3, 1883.0], [37.4, 1883.0], [37.5, 1883.0], [37.6, 1891.0], [37.7, 1891.0], [37.8, 1891.0], [37.9, 1891.0], [38.0, 1899.0], [38.1, 1899.0], [38.2, 1899.0], [38.3, 1899.0], [38.4, 1906.0], [38.5, 1906.0], [38.6, 1906.0], [38.7, 1906.0], [38.8, 1913.0], [38.9, 1913.0], [39.0, 1913.0], [39.1, 1913.0], [39.2, 1922.0], [39.3, 1922.0], [39.4, 1922.0], [39.5, 1922.0], [39.6, 1929.0], [39.7, 1929.0], [39.8, 1929.0], [39.9, 1929.0], [40.0, 1938.0], [40.1, 1938.0], [40.2, 1938.0], [40.3, 1938.0], [40.4, 1946.0], [40.5, 1946.0], [40.6, 1946.0], [40.7, 1946.0], [40.8, 1954.0], [40.9, 1954.0], [41.0, 1954.0], [41.1, 1954.0], [41.2, 1962.0], [41.3, 1962.0], [41.4, 1962.0], [41.5, 1962.0], [41.6, 1969.0], [41.7, 1969.0], [41.8, 1969.0], [41.9, 1969.0], [42.0, 1976.0], [42.1, 1976.0], [42.2, 1976.0], [42.3, 1976.0], [42.4, 1987.0], [42.5, 1987.0], [42.6, 1987.0], [42.7, 1987.0], [42.8, 1992.0], [42.9, 1992.0], [43.0, 1992.0], [43.1, 1992.0], [43.2, 1993.0], [43.3, 1993.0], [43.4, 1993.0], [43.5, 1993.0], [43.6, 1999.0], [43.7, 1999.0], [43.8, 1999.0], [43.9, 1999.0], [44.0, 2007.0], [44.1, 2007.0], [44.2, 2007.0], [44.3, 2007.0], [44.4, 2016.0], [44.5, 2016.0], [44.6, 2016.0], [44.7, 2016.0], [44.8, 2021.0], [44.9, 2021.0], [45.0, 2021.0], [45.1, 2021.0], [45.2, 2029.0], [45.3, 2029.0], [45.4, 2029.0], [45.5, 2029.0], [45.6, 2036.0], [45.7, 2036.0], [45.8, 2036.0], [45.9, 2036.0], [46.0, 2051.0], [46.1, 2051.0], [46.2, 2051.0], [46.3, 2051.0], [46.4, 2055.0], [46.5, 2055.0], [46.6, 2055.0], [46.7, 2055.0], [46.8, 2065.0], [46.9, 2065.0], [47.0, 2065.0], [47.1, 2065.0], [47.2, 2072.0], [47.3, 2072.0], [47.4, 2072.0], [47.5, 2072.0], [47.6, 3078.0], [47.7, 3078.0], [47.8, 3078.0], [47.9, 3078.0], [48.0, 3086.0], [48.1, 3086.0], [48.2, 3086.0], [48.3, 3086.0], [48.4, 3087.0], [48.5, 3087.0], [48.6, 3087.0], [48.7, 3087.0], [48.8, 3089.0], [48.9, 3089.0], [49.0, 3089.0], [49.1, 3089.0], [49.2, 3090.0], [49.3, 3090.0], [49.4, 3090.0], [49.5, 3090.0], [49.6, 3095.0], [49.7, 3095.0], [49.8, 3095.0], [49.9, 3095.0], [50.0, 3102.0], [50.1, 3102.0], [50.2, 3102.0], [50.3, 3102.0], [50.4, 3111.0], [50.5, 3111.0], [50.6, 3111.0], [50.7, 3111.0], [50.8, 3115.0], [50.9, 3115.0], [51.0, 3115.0], [51.1, 3115.0], [51.2, 3115.0], [51.3, 3115.0], [51.4, 3115.0], [51.5, 3115.0], [51.6, 3119.0], [51.7, 3119.0], [51.8, 3119.0], [51.9, 3119.0], [52.0, 3127.0], [52.1, 3127.0], [52.2, 3127.0], [52.3, 3127.0], [52.4, 3138.0], [52.5, 3138.0], [52.6, 3138.0], [52.7, 3138.0], [52.8, 3144.0], [52.9, 3144.0], [53.0, 3144.0], [53.1, 3144.0], [53.2, 3152.0], [53.3, 3152.0], [53.4, 3152.0], [53.5, 3152.0], [53.6, 3157.0], [53.7, 3157.0], [53.8, 3157.0], [53.9, 3157.0], [54.0, 3166.0], [54.1, 3166.0], [54.2, 3166.0], [54.3, 3166.0], [54.4, 3178.0], [54.5, 3178.0], [54.6, 3178.0], [54.7, 3178.0], [54.8, 3182.0], [54.9, 3182.0], [55.0, 3182.0], [55.1, 3182.0], [55.2, 3190.0], [55.3, 3190.0], [55.4, 3190.0], [55.5, 3190.0], [55.6, 3198.0], [55.7, 3198.0], [55.8, 3198.0], [55.9, 3198.0], [56.0, 3206.0], [56.1, 3206.0], [56.2, 3206.0], [56.3, 3206.0], [56.4, 3214.0], [56.5, 3214.0], [56.6, 3214.0], [56.7, 3214.0], [56.8, 3224.0], [56.9, 3224.0], [57.0, 3224.0], [57.1, 3224.0], [57.2, 3231.0], [57.3, 3231.0], [57.4, 3231.0], [57.5, 3231.0], [57.6, 3240.0], [57.7, 3240.0], [57.8, 3240.0], [57.9, 3240.0], [58.0, 3246.0], [58.1, 3246.0], [58.2, 3246.0], [58.3, 3246.0], [58.4, 3254.0], [58.5, 3254.0], [58.6, 3254.0], [58.7, 3254.0], [58.8, 3262.0], [58.9, 3262.0], [59.0, 3262.0], [59.1, 3262.0], [59.2, 3270.0], [59.3, 3270.0], [59.4, 3270.0], [59.5, 3270.0], [59.6, 3278.0], [59.7, 3278.0], [59.8, 3278.0], [59.9, 3278.0], [60.0, 3289.0], [60.1, 3289.0], [60.2, 3289.0], [60.3, 3289.0], [60.4, 3294.0], [60.5, 3294.0], [60.6, 3294.0], [60.7, 3294.0], [60.8, 3303.0], [60.9, 3303.0], [61.0, 3303.0], [61.1, 3303.0], [61.2, 3309.0], [61.3, 3309.0], [61.4, 3309.0], [61.5, 3309.0], [61.6, 3317.0], [61.7, 3317.0], [61.8, 3317.0], [61.9, 3317.0], [62.0, 3325.0], [62.1, 3325.0], [62.2, 3325.0], [62.3, 3325.0], [62.4, 3331.0], [62.5, 3331.0], [62.6, 3331.0], [62.7, 3331.0], [62.8, 3341.0], [62.9, 3341.0], [63.0, 3341.0], [63.1, 3341.0], [63.2, 3349.0], [63.3, 3349.0], [63.4, 3349.0], [63.5, 3349.0], [63.6, 3357.0], [63.7, 3357.0], [63.8, 3357.0], [63.9, 3357.0], [64.0, 3365.0], [64.1, 3365.0], [64.2, 3365.0], [64.3, 3365.0], [64.4, 3373.0], [64.5, 3373.0], [64.6, 3373.0], [64.7, 3373.0], [64.8, 3382.0], [64.9, 3382.0], [65.0, 3382.0], [65.1, 3382.0], [65.2, 3389.0], [65.3, 3389.0], [65.4, 3389.0], [65.5, 3389.0], [65.6, 3397.0], [65.7, 3397.0], [65.8, 3397.0], [65.9, 3397.0], [66.0, 3406.0], [66.1, 3406.0], [66.2, 3406.0], [66.3, 3406.0], [66.4, 3415.0], [66.5, 3415.0], [66.6, 3415.0], [66.7, 3415.0], [66.8, 3419.0], [66.9, 3419.0], [67.0, 3419.0], [67.1, 3419.0], [67.2, 3427.0], [67.3, 3427.0], [67.4, 3427.0], [67.5, 3427.0], [67.6, 3437.0], [67.7, 3437.0], [67.8, 3437.0], [67.9, 3437.0], [68.0, 3445.0], [68.1, 3445.0], [68.2, 3445.0], [68.3, 3445.0], [68.4, 3451.0], [68.5, 3451.0], [68.6, 3451.0], [68.7, 3451.0], [68.8, 3464.0], [68.9, 3464.0], [69.0, 3464.0], [69.1, 3464.0], [69.2, 3470.0], [69.3, 3470.0], [69.4, 3470.0], [69.5, 3470.0], [69.6, 3474.0], [69.7, 3474.0], [69.8, 3474.0], [69.9, 3474.0], [70.0, 3482.0], [70.1, 3482.0], [70.2, 3482.0], [70.3, 3482.0], [70.4, 3490.0], [70.5, 3490.0], [70.6, 3490.0], [70.7, 3490.0], [70.8, 3499.0], [70.9, 3499.0], [71.0, 3499.0], [71.1, 3499.0], [71.2, 3511.0], [71.3, 3511.0], [71.4, 3511.0], [71.5, 3511.0], [71.6, 3518.0], [71.7, 3518.0], [71.8, 3518.0], [71.9, 3518.0], [72.0, 3519.0], [72.1, 3519.0], [72.2, 3519.0], [72.3, 3519.0], [72.4, 3522.0], [72.5, 3522.0], [72.6, 3522.0], [72.7, 3522.0], [72.8, 3527.0], [72.9, 3527.0], [73.0, 3527.0], [73.1, 3527.0], [73.2, 3528.0], [73.3, 3528.0], [73.4, 3528.0], [73.5, 3528.0], [73.6, 3531.0], [73.7, 3531.0], [73.8, 3531.0], [73.9, 3531.0], [74.0, 3535.0], [74.1, 3535.0], [74.2, 3535.0], [74.3, 3535.0], [74.4, 3535.0], [74.5, 3535.0], [74.6, 3535.0], [74.7, 3535.0], [74.8, 3540.0], [74.9, 3540.0], [75.0, 3540.0], [75.1, 3540.0], [75.2, 3547.0], [75.3, 3547.0], [75.4, 3547.0], [75.5, 3547.0], [75.6, 3552.0], [75.7, 3552.0], [75.8, 3552.0], [75.9, 3552.0], [76.0, 3555.0], [76.1, 3555.0], [76.2, 3555.0], [76.3, 3555.0], [76.4, 3556.0], [76.5, 3556.0], [76.6, 3556.0], [76.7, 3556.0], [76.8, 3556.0], [76.9, 3559.0], [77.0, 3559.0], [77.1, 3559.0], [77.2, 3559.0], [77.3, 3562.0], [77.4, 3562.0], [77.5, 3562.0], [77.6, 3562.0], [77.7, 3563.0], [77.8, 3563.0], [77.9, 3563.0], [78.0, 3563.0], [78.1, 3566.0], [78.2, 3566.0], [78.3, 3566.0], [78.4, 3566.0], [78.5, 3573.0], [78.6, 3573.0], [78.7, 3573.0], [78.8, 3573.0], [78.9, 3574.0], [79.0, 3574.0], [79.1, 3574.0], [79.2, 3574.0], [79.3, 3578.0], [79.4, 3578.0], [79.5, 3578.0], [79.6, 3578.0], [79.7, 3585.0], [79.8, 3585.0], [79.9, 3585.0], [80.0, 3585.0], [80.1, 3586.0], [80.2, 3586.0], [80.3, 3586.0], [80.4, 3586.0], [80.5, 3587.0], [80.6, 3587.0], [80.7, 3587.0], [80.8, 3587.0], [80.9, 3591.0], [81.0, 3591.0], [81.1, 3591.0], [81.2, 3591.0], [81.3, 3591.0], [81.4, 3591.0], [81.5, 3591.0], [81.6, 3591.0], [81.7, 3596.0], [81.8, 3596.0], [81.9, 3596.0], [82.0, 3596.0], [82.1, 3602.0], [82.2, 3602.0], [82.3, 3602.0], [82.4, 3602.0], [82.5, 3602.0], [82.6, 3602.0], [82.7, 3602.0], [82.8, 3602.0], [82.9, 3603.0], [83.0, 3603.0], [83.1, 3603.0], [83.2, 3603.0], [83.3, 3608.0], [83.4, 3608.0], [83.5, 3608.0], [83.6, 3608.0], [83.7, 3608.0], [83.8, 3608.0], [83.9, 3608.0], [84.0, 3608.0], [84.1, 3609.0], [84.2, 3609.0], [84.3, 3609.0], [84.4, 3609.0], [84.5, 3610.0], [84.6, 3610.0], [84.7, 3610.0], [84.8, 3610.0], [84.9, 3610.0], [85.0, 3610.0], [85.1, 3610.0], [85.2, 3610.0], [85.3, 3615.0], [85.4, 3615.0], [85.5, 3615.0], [85.6, 3615.0], [85.7, 3615.0], [85.8, 3615.0], [85.9, 3615.0], [86.0, 3615.0], [86.1, 3620.0], [86.2, 3620.0], [86.3, 3620.0], [86.4, 3620.0], [86.5, 3624.0], [86.6, 3624.0], [86.7, 3624.0], [86.8, 3624.0], [86.9, 3624.0], [87.0, 3624.0], [87.1, 3624.0], [87.2, 3624.0], [87.3, 3626.0], [87.4, 3626.0], [87.5, 3626.0], [87.6, 3626.0], [87.7, 3631.0], [87.8, 3631.0], [87.9, 3631.0], [88.0, 3631.0], [88.1, 3634.0], [88.2, 3634.0], [88.3, 3634.0], [88.4, 3634.0], [88.5, 3638.0], [88.6, 3638.0], [88.7, 3638.0], [88.8, 3638.0], [88.9, 3647.0], [89.0, 3647.0], [89.1, 3647.0], [89.2, 3647.0], [89.3, 3654.0], [89.4, 3654.0], [89.5, 3654.0], [89.6, 3654.0], [89.7, 3662.0], [89.8, 3662.0], [89.9, 3662.0], [90.0, 3662.0], [90.1, 3671.0], [90.2, 3671.0], [90.3, 3671.0], [90.4, 3671.0], [90.5, 3678.0], [90.6, 3678.0], [90.7, 3678.0], [90.8, 3678.0], [90.9, 3685.0], [91.0, 3685.0], [91.1, 3685.0], [91.2, 3685.0], [91.3, 3693.0], [91.4, 3693.0], [91.5, 3693.0], [91.6, 3693.0], [91.7, 3700.0], [91.8, 3700.0], [91.9, 3700.0], [92.0, 3700.0], [92.1, 3707.0], [92.2, 3707.0], [92.3, 3707.0], [92.4, 3707.0], [92.5, 3714.0], [92.6, 3714.0], [92.7, 3714.0], [92.8, 3714.0], [92.9, 3717.0], [93.0, 3717.0], [93.1, 3717.0], [93.2, 3717.0], [93.3, 3725.0], [93.4, 3725.0], [93.5, 3725.0], [93.6, 3725.0], [93.7, 3733.0], [93.8, 3733.0], [93.9, 3733.0], [94.0, 3733.0], [94.1, 3741.0], [94.2, 3741.0], [94.3, 3741.0], [94.4, 3741.0], [94.5, 3748.0], [94.6, 3748.0], [94.7, 3748.0], [94.8, 3748.0], [94.9, 3755.0], [95.0, 3755.0], [95.1, 3755.0], [95.2, 3755.0], [95.3, 3765.0], [95.4, 3765.0], [95.5, 3765.0], [95.6, 3765.0], [95.7, 3777.0], [95.8, 3777.0], [95.9, 3777.0], [96.0, 3777.0], [96.1, 3784.0], [96.2, 3784.0], [96.3, 3784.0], [96.4, 3784.0], [96.5, 3788.0], [96.6, 3788.0], [96.7, 3788.0], [96.8, 3788.0], [96.9, 3794.0], [97.0, 3794.0], [97.1, 3794.0], [97.2, 3794.0], [97.3, 3806.0], [97.4, 3806.0], [97.5, 3806.0], [97.6, 3806.0], [97.7, 3811.0], [97.8, 3811.0], [97.9, 3811.0], [98.0, 3811.0], [98.1, 3819.0], [98.2, 3819.0], [98.3, 3819.0], [98.4, 3819.0], [98.5, 3826.0], [98.6, 3826.0], [98.7, 3826.0], [98.8, 3826.0], [98.9, 3834.0], [99.0, 3834.0], [99.1, 3834.0], [99.2, 3834.0], [99.3, 3848.0], [99.4, 3848.0], [99.5, 3848.0], [99.6, 3848.0], [99.7, 3860.0], [99.8, 3860.0], [99.9, 3860.0], [100.0, 3860.0]], "isOverall": false, "label": "Configuration №2 HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 600.0, "maxY": 27.0, "series": [{"data": [[600.0, 2.0], [3000.0, 6.0], [3100.0, 15.0], [800.0, 8.0], [3300.0, 13.0], [3200.0, 12.0], [3400.0, 13.0], [3500.0, 27.0], [900.0, 13.0], [3700.0, 14.0], [3600.0, 24.0], [3800.0, 7.0], [1000.0, 13.0], [1100.0, 14.0], [1500.0, 8.0], [1600.0, 12.0], [1700.0, 13.0], [1800.0, 13.0], [1900.0, 14.0], [2000.0, 9.0]], "isOverall": false, "label": "Configuration №2 HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 6.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 244.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 6.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 244.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 123.09200000000001, "minX": 1.71597336E12, "maxY": 123.09200000000001, "series": [{"data": [[1.71597336E12, 123.09200000000001]], "isOverall": false, "label": "Configuration №2 Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71597336E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 895.2, "minX": 4.0, "maxY": 3776.5, "series": [{"data": [[4.0, 3599.75], [8.0, 3618.0], [9.0, 3624.0], [10.0, 3615.0], [11.0, 3608.0], [12.0, 3608.0], [13.0, 3609.0], [14.0, 3591.0], [15.0, 3587.0], [16.0, 3574.0], [17.0, 3573.0], [18.0, 3566.0], [19.0, 3562.0], [20.0, 3559.0], [21.0, 3547.0], [22.0, 3535.0], [23.0, 3535.0], [24.0, 3528.0], [25.0, 3527.0], [26.0, 3519.0], [27.0, 3115.0], [28.0, 3115.0], [29.0, 3090.0], [30.0, 3089.0], [32.0, 3082.0], [76.0, 3552.0], [82.0, 3116.2], [81.0, 3099.0], [87.0, 1938.5], [86.0, 3267.0], [84.0, 3144.0], [90.0, 3181.1666666666665], [89.0, 3224.0], [88.0, 3225.3333333333335], [95.0, 3319.0], [93.0, 3279.0], [92.0, 3214.6666666666665], [98.0, 3362.6666666666665], [97.0, 3369.0], [96.0, 3333.0], [103.0, 3560.6666666666665], [100.0, 3447.0], [107.0, 1714.0], [106.0, 3490.0], [110.0, 3521.0], [108.0, 3461.6666666666665], [112.0, 3510.5], [119.0, 3511.3333333333335], [118.0, 3575.0], [123.0, 3666.5], [122.0, 3646.0], [121.0, 3639.0], [120.0, 3607.4], [127.0, 3776.5], [124.0, 3681.5], [134.0, 896.0], [130.0, 2246.5], [135.0, 1559.75], [131.0, 3763.235294117647], [129.0, 3700.0], [138.0, 946.0], [139.0, 978.0], [136.0, 895.2], [152.0, 1083.166666666667], [166.0, 1654.5], [164.0, 1670.0], [163.0, 1694.0], [175.0, 1605.0], [174.0, 1586.3333333333333], [173.0, 1771.0], [171.0, 1600.5], [182.0, 1799.4736842105265], [183.0, 1887.0], [179.0, 1700.0], [178.0, 1680.0], [177.0, 1640.0], [176.0, 1626.0], [189.0, 1977.2], [188.0, 1954.0], [187.0, 1942.0], [185.0, 1929.0], [184.0, 1910.0], [198.0, 2059.3333333333335], [197.0, 2065.0], [200.0, 2014.4285714285713]], "isOverall": false, "label": "Configuration №2 HTTP Request", "isController": false}, {"data": [[123.09200000000001, 2522.2000000000003]], "isOverall": false, "label": "Configuration №2 HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 658.3333333333334, "minX": 1.71597336E12, "maxY": 962.7666666666667, "series": [{"data": [[1.71597336E12, 962.7666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71597336E12, 658.3333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71597336E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2522.2000000000003, "minX": 1.71597336E12, "maxY": 2522.2000000000003, "series": [{"data": [[1.71597336E12, 2522.2000000000003]], "isOverall": false, "label": "Configuration №2 HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71597336E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 2522.1160000000013, "minX": 1.71597336E12, "maxY": 2522.1160000000013, "series": [{"data": [[1.71597336E12, 2522.1160000000013]], "isOverall": false, "label": "Configuration №2 HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71597336E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.9039999999999994, "minX": 1.71597336E12, "maxY": 0.9039999999999994, "series": [{"data": [[1.71597336E12, 0.9039999999999994]], "isOverall": false, "label": "Configuration №2 HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71597336E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 608.0, "minX": 1.71597336E12, "maxY": 861.0, "series": [{"data": [[1.71597336E12, 861.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71597336E12, 608.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71597336E12, 861.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71597336E12, 861.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71597336E12, 848.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71597336E12, 861.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71597336E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 611.0, "minX": 2.0, "maxY": 3589.0, "series": [{"data": [[2.0, 611.0], [48.0, 855.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[69.0, 1813.0], [48.0, 1037.0], [105.0, 3451.0], [26.0, 3589.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 105.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 608.0, "minX": 2.0, "maxY": 3589.0, "series": [{"data": [[2.0, 608.0], [48.0, 855.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[69.0, 1813.0], [48.0, 1037.0], [105.0, 3451.0], [26.0, 3589.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 105.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 4.166666666666667, "minX": 1.71597336E12, "maxY": 4.166666666666667, "series": [{"data": [[1.71597336E12, 4.166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71597336E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.71597336E12, "maxY": 4.033333333333333, "series": [{"data": [[1.71597336E12, 4.033333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71597336E12, 0.13333333333333333]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71597336E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.71597336E12, "maxY": 4.066666666666666, "series": [{"data": [[1.71597336E12, 0.1]], "isOverall": false, "label": "Configuration №2 HTTP Request-success", "isController": false}, {"data": [[1.71597336E12, 4.066666666666666]], "isOverall": false, "label": "Configuration №2 HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71597336E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.71597336E12, "maxY": 4.066666666666666, "series": [{"data": [[1.71597336E12, 0.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71597336E12, 4.066666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71597336E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}
