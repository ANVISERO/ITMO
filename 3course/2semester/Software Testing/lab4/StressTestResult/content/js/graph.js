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
        data: {"result": {"minY": 608.0, "minX": 0.0, "maxY": 3862.0, "series": [{"data": [[0.0, 608.0], [0.1, 608.0], [0.2, 608.0], [0.3, 608.0], [0.4, 848.0], [0.5, 848.0], [0.6, 848.0], [0.7, 848.0], [0.8, 856.0], [0.9, 856.0], [1.0, 856.0], [1.1, 856.0], [1.2, 856.0], [1.3, 862.0], [1.4, 862.0], [1.5, 862.0], [1.6, 869.0], [1.7, 869.0], [1.8, 869.0], [1.9, 869.0], [2.0, 878.0], [2.1, 878.0], [2.2, 878.0], [2.3, 878.0], [2.4, 885.0], [2.5, 885.0], [2.6, 885.0], [2.7, 885.0], [2.8, 892.0], [2.9, 892.0], [3.0, 892.0], [3.1, 892.0], [3.2, 903.0], [3.3, 903.0], [3.4, 903.0], [3.5, 903.0], [3.6, 912.0], [3.7, 912.0], [3.8, 912.0], [3.9, 912.0], [4.0, 917.0], [4.1, 917.0], [4.2, 917.0], [4.3, 917.0], [4.4, 927.0], [4.5, 927.0], [4.6, 927.0], [4.7, 927.0], [4.8, 930.0], [4.9, 930.0], [5.0, 930.0], [5.1, 930.0], [5.2, 938.0], [5.3, 938.0], [5.4, 938.0], [5.5, 938.0], [5.6, 938.0], [5.7, 947.0], [5.8, 947.0], [5.9, 947.0], [6.0, 947.0], [6.1, 955.0], [6.2, 955.0], [6.3, 955.0], [6.4, 955.0], [6.5, 966.0], [6.6, 966.0], [6.7, 966.0], [6.8, 966.0], [6.9, 968.0], [7.0, 968.0], [7.1, 968.0], [7.2, 968.0], [7.3, 973.0], [7.4, 973.0], [7.5, 973.0], [7.6, 973.0], [7.7, 979.0], [7.8, 979.0], [7.9, 979.0], [8.0, 979.0], [8.1, 987.0], [8.2, 987.0], [8.3, 987.0], [8.4, 987.0], [8.5, 996.0], [8.6, 996.0], [8.7, 996.0], [8.8, 996.0], [8.9, 1004.0], [9.0, 1004.0], [9.1, 1004.0], [9.2, 1004.0], [9.3, 1011.0], [9.4, 1011.0], [9.5, 1011.0], [9.6, 1011.0], [9.7, 1019.0], [9.8, 1019.0], [9.9, 1019.0], [10.0, 1019.0], [10.1, 1028.0], [10.2, 1028.0], [10.3, 1028.0], [10.4, 1028.0], [10.5, 1039.0], [10.6, 1039.0], [10.7, 1039.0], [10.8, 1039.0], [10.9, 1044.0], [11.0, 1044.0], [11.1, 1044.0], [11.2, 1044.0], [11.3, 1051.0], [11.4, 1051.0], [11.5, 1051.0], [11.6, 1051.0], [11.7, 1062.0], [11.8, 1062.0], [11.9, 1062.0], [12.0, 1062.0], [12.1, 1066.0], [12.2, 1066.0], [12.3, 1066.0], [12.4, 1066.0], [12.5, 1075.0], [12.6, 1075.0], [12.7, 1075.0], [12.8, 1075.0], [12.9, 1081.0], [13.0, 1081.0], [13.1, 1081.0], [13.2, 1081.0], [13.3, 1090.0], [13.4, 1090.0], [13.5, 1090.0], [13.6, 1090.0], [13.7, 1099.0], [13.8, 1099.0], [13.9, 1099.0], [14.0, 1099.0], [14.1, 1106.0], [14.2, 1106.0], [14.3, 1106.0], [14.4, 1106.0], [14.5, 1115.0], [14.6, 1115.0], [14.7, 1115.0], [14.8, 1115.0], [14.9, 1122.0], [15.0, 1122.0], [15.1, 1122.0], [15.2, 1122.0], [15.3, 1133.0], [15.4, 1133.0], [15.5, 1133.0], [15.6, 1133.0], [15.7, 1133.0], [15.8, 1133.0], [15.9, 1133.0], [16.0, 1133.0], [16.1, 1135.0], [16.2, 1135.0], [16.3, 1135.0], [16.4, 1135.0], [16.5, 1135.0], [16.6, 1135.0], [16.7, 1135.0], [16.8, 1135.0], [16.9, 1136.0], [17.0, 1136.0], [17.1, 1136.0], [17.2, 1136.0], [17.3, 1136.0], [17.4, 1136.0], [17.5, 1136.0], [17.6, 1136.0], [17.7, 1136.0], [17.8, 1136.0], [17.9, 1136.0], [18.0, 1136.0], [18.1, 1140.0], [18.2, 1140.0], [18.3, 1140.0], [18.4, 1140.0], [18.5, 1140.0], [18.6, 1140.0], [18.7, 1140.0], [18.8, 1140.0], [18.9, 1140.0], [19.0, 1140.0], [19.1, 1140.0], [19.2, 1140.0], [19.3, 1140.0], [19.4, 1140.0], [19.5, 1140.0], [19.6, 1140.0], [19.7, 1141.0], [19.8, 1141.0], [19.9, 1141.0], [20.0, 1141.0], [20.1, 1553.0], [20.2, 1553.0], [20.3, 1553.0], [20.4, 1553.0], [20.5, 1562.0], [20.6, 1562.0], [20.7, 1562.0], [20.8, 1562.0], [20.9, 1570.0], [21.0, 1570.0], [21.1, 1570.0], [21.2, 1570.0], [21.3, 1578.0], [21.4, 1578.0], [21.5, 1578.0], [21.6, 1587.0], [21.7, 1587.0], [21.8, 1587.0], [21.9, 1587.0], [22.0, 1593.0], [22.1, 1593.0], [22.2, 1593.0], [22.3, 1593.0], [22.4, 1601.0], [22.5, 1601.0], [22.6, 1601.0], [22.7, 1601.0], [22.8, 1612.0], [22.9, 1612.0], [23.0, 1612.0], [23.1, 1612.0], [23.2, 1618.0], [23.3, 1618.0], [23.4, 1618.0], [23.5, 1618.0], [23.6, 1628.0], [23.7, 1628.0], [23.8, 1628.0], [23.9, 1628.0], [24.0, 1633.0], [24.1, 1633.0], [24.2, 1633.0], [24.3, 1633.0], [24.4, 1645.0], [24.5, 1645.0], [24.6, 1645.0], [24.7, 1645.0], [24.8, 1653.0], [24.9, 1653.0], [25.0, 1653.0], [25.1, 1653.0], [25.2, 1661.0], [25.3, 1661.0], [25.4, 1661.0], [25.5, 1661.0], [25.6, 1669.0], [25.7, 1669.0], [25.8, 1669.0], [25.9, 1669.0], [26.0, 1673.0], [26.1, 1673.0], [26.2, 1673.0], [26.3, 1673.0], [26.4, 1681.0], [26.5, 1681.0], [26.6, 1681.0], [26.7, 1681.0], [26.8, 1688.0], [26.9, 1688.0], [27.0, 1688.0], [27.1, 1688.0], [27.2, 1696.0], [27.3, 1696.0], [27.4, 1696.0], [27.5, 1696.0], [27.6, 1706.0], [27.7, 1706.0], [27.8, 1706.0], [27.9, 1706.0], [28.0, 1712.0], [28.1, 1712.0], [28.2, 1712.0], [28.3, 1712.0], [28.4, 1721.0], [28.5, 1721.0], [28.6, 1721.0], [28.7, 1721.0], [28.8, 1728.0], [28.9, 1728.0], [29.0, 1728.0], [29.1, 1728.0], [29.2, 1735.0], [29.3, 1735.0], [29.4, 1735.0], [29.5, 1735.0], [29.6, 1744.0], [29.7, 1744.0], [29.8, 1744.0], [29.9, 1744.0], [30.0, 1750.0], [30.1, 1750.0], [30.2, 1750.0], [30.3, 1750.0], [30.4, 1759.0], [30.5, 1759.0], [30.6, 1759.0], [30.7, 1759.0], [30.8, 1766.0], [30.9, 1766.0], [31.0, 1766.0], [31.1, 1766.0], [31.2, 1774.0], [31.3, 1774.0], [31.4, 1774.0], [31.5, 1774.0], [31.6, 1781.0], [31.7, 1781.0], [31.8, 1781.0], [31.9, 1781.0], [32.0, 1782.0], [32.1, 1782.0], [32.2, 1782.0], [32.3, 1782.0], [32.4, 1798.0], [32.5, 1798.0], [32.6, 1798.0], [32.7, 1798.0], [32.8, 1806.0], [32.9, 1806.0], [33.0, 1806.0], [33.1, 1806.0], [33.2, 1814.0], [33.3, 1814.0], [33.4, 1814.0], [33.5, 1814.0], [33.6, 1822.0], [33.7, 1822.0], [33.8, 1822.0], [33.9, 1822.0], [34.0, 1829.0], [34.1, 1829.0], [34.2, 1829.0], [34.3, 1829.0], [34.4, 1837.0], [34.5, 1837.0], [34.6, 1837.0], [34.7, 1837.0], [34.8, 1845.0], [34.9, 1845.0], [35.0, 1845.0], [35.1, 1845.0], [35.2, 1854.0], [35.3, 1854.0], [35.4, 1854.0], [35.5, 1854.0], [35.6, 1861.0], [35.7, 1861.0], [35.8, 1861.0], [35.9, 1861.0], [36.0, 1869.0], [36.1, 1869.0], [36.2, 1869.0], [36.3, 1869.0], [36.4, 1879.0], [36.5, 1879.0], [36.6, 1879.0], [36.7, 1879.0], [36.8, 1884.0], [36.9, 1884.0], [37.0, 1884.0], [37.1, 1884.0], [37.2, 1897.0], [37.3, 1897.0], [37.4, 1897.0], [37.5, 1897.0], [37.6, 1900.0], [37.7, 1900.0], [37.8, 1900.0], [37.9, 1900.0], [38.0, 1908.0], [38.1, 1908.0], [38.2, 1908.0], [38.3, 1908.0], [38.4, 1914.0], [38.5, 1914.0], [38.6, 1914.0], [38.7, 1914.0], [38.8, 1924.0], [38.9, 1924.0], [39.0, 1924.0], [39.1, 1924.0], [39.2, 1930.0], [39.3, 1930.0], [39.4, 1930.0], [39.5, 1930.0], [39.6, 1937.0], [39.7, 1937.0], [39.8, 1937.0], [39.9, 1937.0], [40.0, 1945.0], [40.1, 1945.0], [40.2, 1945.0], [40.3, 1945.0], [40.4, 1953.0], [40.5, 1953.0], [40.6, 1953.0], [40.7, 1953.0], [40.8, 1960.0], [40.9, 1960.0], [41.0, 1960.0], [41.1, 1960.0], [41.2, 1968.0], [41.3, 1968.0], [41.4, 1968.0], [41.5, 1968.0], [41.6, 1974.0], [41.7, 1974.0], [41.8, 1974.0], [41.9, 1974.0], [42.0, 1983.0], [42.1, 1983.0], [42.2, 1983.0], [42.3, 1983.0], [42.4, 1999.0], [42.5, 1999.0], [42.6, 1999.0], [42.7, 1999.0], [42.8, 2001.0], [42.9, 2001.0], [43.0, 2001.0], [43.1, 2001.0], [43.2, 2007.0], [43.3, 2007.0], [43.4, 2007.0], [43.5, 2007.0], [43.6, 2014.0], [43.7, 2014.0], [43.8, 2014.0], [43.9, 2014.0], [44.0, 2020.0], [44.1, 2020.0], [44.2, 2020.0], [44.3, 2020.0], [44.4, 2024.0], [44.5, 2024.0], [44.6, 2024.0], [44.7, 2024.0], [44.8, 2033.0], [44.9, 2033.0], [45.0, 2033.0], [45.1, 2033.0], [45.2, 2041.0], [45.3, 2041.0], [45.4, 2041.0], [45.5, 2041.0], [45.6, 2047.0], [45.7, 2047.0], [45.8, 2047.0], [45.9, 2047.0], [46.0, 2056.0], [46.1, 2056.0], [46.2, 2056.0], [46.3, 2056.0], [46.4, 2064.0], [46.5, 2064.0], [46.6, 2064.0], [46.7, 2064.0], [46.8, 2071.0], [46.9, 2071.0], [47.0, 2071.0], [47.1, 2071.0], [47.2, 2079.0], [47.3, 2079.0], [47.4, 2079.0], [47.5, 2079.0], [47.6, 2088.0], [47.7, 2088.0], [47.8, 2088.0], [47.9, 2088.0], [48.0, 2096.0], [48.1, 2096.0], [48.2, 2096.0], [48.3, 2096.0], [48.4, 3085.0], [48.5, 3085.0], [48.6, 3085.0], [48.7, 3085.0], [48.8, 3091.0], [48.9, 3091.0], [49.0, 3091.0], [49.1, 3091.0], [49.2, 3095.0], [49.3, 3095.0], [49.4, 3095.0], [49.5, 3095.0], [49.6, 3101.0], [49.7, 3101.0], [49.8, 3101.0], [49.9, 3101.0], [50.0, 3103.0], [50.1, 3103.0], [50.2, 3103.0], [50.3, 3103.0], [50.4, 3108.0], [50.5, 3108.0], [50.6, 3108.0], [50.7, 3108.0], [50.8, 3114.0], [50.9, 3114.0], [51.0, 3114.0], [51.1, 3114.0], [51.2, 3124.0], [51.3, 3124.0], [51.4, 3124.0], [51.5, 3124.0], [51.6, 3128.0], [51.7, 3128.0], [51.8, 3128.0], [51.9, 3128.0], [52.0, 3130.0], [52.1, 3130.0], [52.2, 3130.0], [52.3, 3130.0], [52.4, 3136.0], [52.5, 3136.0], [52.6, 3136.0], [52.7, 3136.0], [52.8, 3139.0], [52.9, 3139.0], [53.0, 3139.0], [53.1, 3139.0], [53.2, 3144.0], [53.3, 3144.0], [53.4, 3144.0], [53.5, 3144.0], [53.6, 3155.0], [53.7, 3155.0], [53.8, 3155.0], [53.9, 3155.0], [54.0, 3160.0], [54.1, 3160.0], [54.2, 3160.0], [54.3, 3160.0], [54.4, 3171.0], [54.5, 3171.0], [54.6, 3171.0], [54.7, 3171.0], [54.8, 3176.0], [54.9, 3176.0], [55.0, 3176.0], [55.1, 3176.0], [55.2, 3187.0], [55.3, 3187.0], [55.4, 3187.0], [55.5, 3187.0], [55.6, 3199.0], [55.7, 3199.0], [55.8, 3199.0], [55.9, 3199.0], [56.0, 3201.0], [56.1, 3201.0], [56.2, 3201.0], [56.3, 3201.0], [56.4, 3208.0], [56.5, 3208.0], [56.6, 3208.0], [56.7, 3208.0], [56.8, 3216.0], [56.9, 3216.0], [57.0, 3216.0], [57.1, 3216.0], [57.2, 3229.0], [57.3, 3229.0], [57.4, 3229.0], [57.5, 3229.0], [57.6, 3233.0], [57.7, 3233.0], [57.8, 3233.0], [57.9, 3233.0], [58.0, 3240.0], [58.1, 3240.0], [58.2, 3240.0], [58.3, 3240.0], [58.4, 3246.0], [58.5, 3246.0], [58.6, 3246.0], [58.7, 3246.0], [58.8, 3254.0], [58.9, 3254.0], [59.0, 3254.0], [59.1, 3254.0], [59.2, 3263.0], [59.3, 3263.0], [59.4, 3263.0], [59.5, 3263.0], [59.6, 3271.0], [59.7, 3271.0], [59.8, 3271.0], [59.9, 3271.0], [60.0, 3279.0], [60.1, 3279.0], [60.2, 3279.0], [60.3, 3279.0], [60.4, 3283.0], [60.5, 3283.0], [60.6, 3283.0], [60.7, 3283.0], [60.8, 3287.0], [60.9, 3287.0], [61.0, 3287.0], [61.1, 3287.0], [61.2, 3302.0], [61.3, 3302.0], [61.4, 3302.0], [61.5, 3302.0], [61.6, 3311.0], [61.7, 3311.0], [61.8, 3311.0], [61.9, 3311.0], [62.0, 3319.0], [62.1, 3319.0], [62.2, 3319.0], [62.3, 3319.0], [62.4, 3327.0], [62.5, 3327.0], [62.6, 3327.0], [62.7, 3327.0], [62.8, 3334.0], [62.9, 3334.0], [63.0, 3334.0], [63.1, 3334.0], [63.2, 3342.0], [63.3, 3342.0], [63.4, 3342.0], [63.5, 3342.0], [63.6, 3356.0], [63.7, 3356.0], [63.8, 3356.0], [63.9, 3356.0], [64.0, 3362.0], [64.1, 3362.0], [64.2, 3362.0], [64.3, 3362.0], [64.4, 3370.0], [64.5, 3370.0], [64.6, 3370.0], [64.7, 3370.0], [64.8, 3374.0], [64.9, 3374.0], [65.0, 3374.0], [65.1, 3374.0], [65.2, 3386.0], [65.3, 3386.0], [65.4, 3386.0], [65.5, 3386.0], [65.6, 3390.0], [65.7, 3390.0], [65.8, 3390.0], [65.9, 3390.0], [66.0, 3399.0], [66.1, 3399.0], [66.2, 3399.0], [66.3, 3399.0], [66.4, 3407.0], [66.5, 3407.0], [66.6, 3407.0], [66.7, 3407.0], [66.8, 3416.0], [66.9, 3416.0], [67.0, 3416.0], [67.1, 3416.0], [67.2, 3424.0], [67.3, 3424.0], [67.4, 3424.0], [67.5, 3424.0], [67.6, 3430.0], [67.7, 3430.0], [67.8, 3430.0], [67.9, 3430.0], [68.0, 3441.0], [68.1, 3441.0], [68.2, 3441.0], [68.3, 3441.0], [68.4, 3447.0], [68.5, 3447.0], [68.6, 3447.0], [68.7, 3447.0], [68.8, 3454.0], [68.9, 3454.0], [69.0, 3454.0], [69.1, 3454.0], [69.2, 3461.0], [69.3, 3461.0], [69.4, 3461.0], [69.5, 3461.0], [69.6, 3469.0], [69.7, 3469.0], [69.8, 3469.0], [69.9, 3469.0], [70.0, 3477.0], [70.1, 3477.0], [70.2, 3477.0], [70.3, 3477.0], [70.4, 3484.0], [70.5, 3484.0], [70.6, 3484.0], [70.7, 3484.0], [70.8, 3492.0], [70.9, 3492.0], [71.0, 3492.0], [71.1, 3492.0], [71.2, 3501.0], [71.3, 3501.0], [71.4, 3501.0], [71.5, 3501.0], [71.6, 3512.0], [71.7, 3512.0], [71.8, 3512.0], [71.9, 3512.0], [72.0, 3517.0], [72.1, 3517.0], [72.2, 3517.0], [72.3, 3517.0], [72.4, 3521.0], [72.5, 3521.0], [72.6, 3521.0], [72.7, 3521.0], [72.8, 3526.0], [72.9, 3526.0], [73.0, 3526.0], [73.1, 3526.0], [73.2, 3531.0], [73.3, 3531.0], [73.4, 3531.0], [73.5, 3531.0], [73.6, 3534.0], [73.7, 3534.0], [73.8, 3534.0], [73.9, 3534.0], [74.0, 3535.0], [74.1, 3535.0], [74.2, 3535.0], [74.3, 3535.0], [74.4, 3540.0], [74.5, 3540.0], [74.6, 3540.0], [74.7, 3540.0], [74.8, 3542.0], [74.9, 3542.0], [75.0, 3542.0], [75.1, 3542.0], [75.2, 3546.0], [75.3, 3546.0], [75.4, 3546.0], [75.5, 3546.0], [75.6, 3546.0], [75.7, 3550.0], [75.8, 3550.0], [75.9, 3550.0], [76.0, 3550.0], [76.1, 3553.0], [76.2, 3553.0], [76.3, 3553.0], [76.4, 3553.0], [76.5, 3554.0], [76.6, 3554.0], [76.7, 3554.0], [76.8, 3554.0], [76.9, 3560.0], [77.0, 3560.0], [77.1, 3560.0], [77.2, 3560.0], [77.3, 3564.0], [77.4, 3564.0], [77.5, 3564.0], [77.6, 3564.0], [77.7, 3568.0], [77.8, 3568.0], [77.9, 3568.0], [78.0, 3568.0], [78.1, 3571.0], [78.2, 3571.0], [78.3, 3571.0], [78.4, 3571.0], [78.5, 3572.0], [78.6, 3572.0], [78.7, 3572.0], [78.8, 3572.0], [78.9, 3576.0], [79.0, 3576.0], [79.1, 3576.0], [79.2, 3576.0], [79.3, 3578.0], [79.4, 3578.0], [79.5, 3578.0], [79.6, 3578.0], [79.7, 3588.0], [79.8, 3588.0], [79.9, 3588.0], [80.0, 3588.0], [80.1, 3591.0], [80.2, 3591.0], [80.3, 3591.0], [80.4, 3591.0], [80.5, 3596.0], [80.6, 3596.0], [80.7, 3596.0], [80.8, 3596.0], [80.9, 3602.0], [81.0, 3602.0], [81.1, 3602.0], [81.2, 3602.0], [81.3, 3602.0], [81.4, 3602.0], [81.5, 3602.0], [81.6, 3602.0], [81.7, 3602.0], [81.8, 3602.0], [81.9, 3602.0], [82.0, 3602.0], [82.1, 3609.0], [82.2, 3609.0], [82.3, 3609.0], [82.4, 3609.0], [82.5, 3609.0], [82.6, 3609.0], [82.7, 3609.0], [82.8, 3609.0], [82.9, 3612.0], [83.0, 3612.0], [83.1, 3612.0], [83.2, 3612.0], [83.3, 3612.0], [83.4, 3612.0], [83.5, 3612.0], [83.6, 3612.0], [83.7, 3617.0], [83.8, 3617.0], [83.9, 3617.0], [84.0, 3617.0], [84.1, 3620.0], [84.2, 3620.0], [84.3, 3620.0], [84.4, 3620.0], [84.5, 3623.0], [84.6, 3623.0], [84.7, 3623.0], [84.8, 3623.0], [84.9, 3624.0], [85.0, 3624.0], [85.1, 3624.0], [85.2, 3624.0], [85.3, 3624.0], [85.4, 3624.0], [85.5, 3624.0], [85.6, 3624.0], [85.7, 3630.0], [85.8, 3630.0], [85.9, 3630.0], [86.0, 3630.0], [86.1, 3632.0], [86.2, 3632.0], [86.3, 3632.0], [86.4, 3632.0], [86.5, 3633.0], [86.6, 3633.0], [86.7, 3633.0], [86.8, 3633.0], [86.9, 3634.0], [87.0, 3634.0], [87.1, 3634.0], [87.2, 3634.0], [87.3, 3640.0], [87.4, 3640.0], [87.5, 3640.0], [87.6, 3640.0], [87.7, 3641.0], [87.8, 3641.0], [87.9, 3641.0], [88.0, 3641.0], [88.1, 3643.0], [88.2, 3643.0], [88.3, 3643.0], [88.4, 3643.0], [88.5, 3648.0], [88.6, 3648.0], [88.7, 3648.0], [88.8, 3648.0], [88.9, 3648.0], [89.0, 3648.0], [89.1, 3648.0], [89.2, 3648.0], [89.3, 3654.0], [89.4, 3654.0], [89.5, 3654.0], [89.6, 3654.0], [89.7, 3661.0], [89.8, 3661.0], [89.9, 3661.0], [90.0, 3661.0], [90.1, 3673.0], [90.2, 3673.0], [90.3, 3673.0], [90.4, 3673.0], [90.5, 3686.0], [90.6, 3686.0], [90.7, 3686.0], [90.8, 3686.0], [90.9, 3691.0], [91.0, 3691.0], [91.1, 3691.0], [91.2, 3691.0], [91.3, 3692.0], [91.4, 3692.0], [91.5, 3692.0], [91.6, 3692.0], [91.7, 3704.0], [91.8, 3704.0], [91.9, 3704.0], [92.0, 3704.0], [92.1, 3706.0], [92.2, 3706.0], [92.3, 3706.0], [92.4, 3706.0], [92.5, 3722.0], [92.6, 3722.0], [92.7, 3722.0], [92.8, 3722.0], [92.9, 3723.0], [93.0, 3723.0], [93.1, 3723.0], [93.2, 3723.0], [93.3, 3736.0], [93.4, 3736.0], [93.5, 3736.0], [93.6, 3736.0], [93.7, 3747.0], [93.8, 3747.0], [93.9, 3747.0], [94.0, 3747.0], [94.1, 3754.0], [94.2, 3754.0], [94.3, 3754.0], [94.4, 3754.0], [94.5, 3754.0], [94.6, 3754.0], [94.7, 3754.0], [94.8, 3754.0], [94.9, 3773.0], [95.0, 3773.0], [95.1, 3773.0], [95.2, 3773.0], [95.3, 3775.0], [95.4, 3775.0], [95.5, 3775.0], [95.6, 3775.0], [95.7, 3785.0], [95.8, 3785.0], [95.9, 3785.0], [96.0, 3785.0], [96.1, 3787.0], [96.2, 3787.0], [96.3, 3787.0], [96.4, 3787.0], [96.5, 3800.0], [96.6, 3800.0], [96.7, 3800.0], [96.8, 3800.0], [96.9, 3807.0], [97.0, 3807.0], [97.1, 3807.0], [97.2, 3807.0], [97.3, 3816.0], [97.4, 3816.0], [97.5, 3816.0], [97.6, 3816.0], [97.7, 3817.0], [97.8, 3817.0], [97.9, 3817.0], [98.0, 3817.0], [98.1, 3826.0], [98.2, 3826.0], [98.3, 3826.0], [98.4, 3826.0], [98.5, 3841.0], [98.6, 3841.0], [98.7, 3841.0], [98.8, 3841.0], [98.9, 3847.0], [99.0, 3847.0], [99.1, 3847.0], [99.2, 3847.0], [99.3, 3853.0], [99.4, 3853.0], [99.5, 3853.0], [99.6, 3853.0], [99.7, 3862.0], [99.8, 3862.0], [99.9, 3862.0], [100.0, 3862.0]], "isOverall": false, "label": "Configuration №2 HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 27.0, "series": [{"data": [[600.0, 1.0], [3000.0, 3.0], [3100.0, 16.0], [800.0, 7.0], [3300.0, 13.0], [3200.0, 13.0], [3400.0, 12.0], [3500.0, 24.0], [900.0, 14.0], [3600.0, 27.0], [3700.0, 12.0], [3800.0, 9.0], [1000.0, 13.0], [1100.0, 15.0], [1500.0, 6.0], [1600.0, 13.0], [1700.0, 13.0], [1800.0, 12.0], [1900.0, 13.0], [2000.0, 14.0]], "isOverall": false, "label": "Configuration №2 HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 194.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 50.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 194.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 6.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 131.87999999999997, "minX": 1.71597282E12, "maxY": 131.87999999999997, "series": [{"data": [[1.71597282E12, 131.87999999999997]], "isOverall": false, "label": "Configuration №2 Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71597282E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 608.0, "minX": 2.0, "maxY": 3648.0, "series": [{"data": [[2.0, 3627.0], [6.0, 3619.5], [7.0, 3648.0], [8.0, 3643.0], [9.0, 3632.0], [10.0, 3634.0], [11.0, 3623.0], [12.0, 3617.0], [13.0, 3609.0], [14.0, 3602.0], [15.0, 3591.0], [16.0, 3588.0], [17.0, 3571.0], [18.0, 3568.0], [19.0, 3576.0], [20.0, 3554.0], [21.0, 3553.0], [22.0, 3540.0], [23.0, 3542.0], [24.0, 3534.0], [25.0, 3526.0], [26.0, 3517.0], [27.0, 3136.0], [28.0, 3128.0], [29.0, 3108.0], [30.0, 3095.0], [87.0, 608.0], [122.0, 973.0], [127.0, 862.5], [125.0, 848.0], [135.0, 923.5], [133.0, 902.0], [129.0, 3421.9306930693065], [130.0, 878.0], [128.0, 882.5], [143.0, 1081.0], [141.0, 1024.25], [139.0, 983.3333333333333], [138.0, 951.0], [136.0, 932.5], [147.0, 1127.6], [146.0, 1090.0], [145.0, 1066.0], [144.0, 1062.6666666666667], [152.0, 1135.1666666666667], [158.0, 1553.0], [166.0, 1692.2500000000002], [164.0, 1633.0], [163.0, 1638.3333333333333], [162.0, 1599.142857142857], [161.0, 1562.0], [160.0, 1645.0], [175.0, 1758.6], [174.0, 1735.0], [172.0, 1728.0], [169.0, 2003.0], [183.0, 1861.3333333333333], [181.0, 1841.0], [180.0, 1829.0], [179.0, 1818.0], [178.0, 1806.0], [177.0, 1790.0], [191.0, 1949.0], [189.0, 1933.5], [188.0, 1919.0], [186.0, 1908.0], [185.0, 1890.0], [198.0, 1900.5], [196.0, 2014.0], [195.0, 1978.5], [193.0, 1964.0], [200.0, 2054.5454545454545]], "isOverall": false, "label": "Configuration №2 HTTP Request", "isController": false}, {"data": [[131.87599999999998, 2519.9839999999995]], "isOverall": false, "label": "Configuration №2 HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 658.3333333333334, "minX": 1.71597282E12, "maxY": 962.7, "series": [{"data": [[1.71597282E12, 962.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71597282E12, 658.3333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71597282E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2519.9839999999995, "minX": 1.71597282E12, "maxY": 2519.9839999999995, "series": [{"data": [[1.71597282E12, 2519.9839999999995]], "isOverall": false, "label": "Configuration №2 HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71597282E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2519.8879999999995, "minX": 1.71597282E12, "maxY": 2519.8879999999995, "series": [{"data": [[1.71597282E12, 2519.8879999999995]], "isOverall": false, "label": "Configuration №2 HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71597282E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.9000000000000009, "minX": 1.71597282E12, "maxY": 0.9000000000000009, "series": [{"data": [[1.71597282E12, 0.9000000000000009]], "isOverall": false, "label": "Configuration №2 HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71597282E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 608.0, "minX": 1.71597282E12, "maxY": 3862.0, "series": [{"data": [[1.71597282E12, 3862.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71597282E12, 608.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71597282E12, 3679.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71597282E12, 3850.3]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71597282E12, 3088.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71597282E12, 3774.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71597282E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1023.5, "minX": 50.0, "maxY": 3624.0, "series": [{"data": [[129.0, 3526.0], [71.0, 1829.0], [50.0, 1023.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[129.0, 3624.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 129.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1023.5, "minX": 50.0, "maxY": 3624.0, "series": [{"data": [[129.0, 3526.0], [71.0, 1829.0], [50.0, 1023.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[129.0, 3624.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 129.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.166666666666667, "minX": 1.71597282E12, "maxY": 4.166666666666667, "series": [{"data": [[1.71597282E12, 4.166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71597282E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.71597282E12, "maxY": 4.066666666666666, "series": [{"data": [[1.71597282E12, 4.066666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71597282E12, 0.1]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71597282E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.71597282E12, "maxY": 4.066666666666666, "series": [{"data": [[1.71597282E12, 4.066666666666666]], "isOverall": false, "label": "Configuration №2 HTTP Request-success", "isController": false}, {"data": [[1.71597282E12, 0.1]], "isOverall": false, "label": "Configuration №2 HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71597282E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.71597282E12, "maxY": 4.066666666666666, "series": [{"data": [[1.71597282E12, 4.066666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71597282E12, 0.1]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71597282E12, "title": "Total Transactions Per Second"}},
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

