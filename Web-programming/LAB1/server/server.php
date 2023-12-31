<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header("Access-Control-Allow-Headers: X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == "GET") {
    // print_r(parse_url($_SERVER['REQUEST_URI'], PHP_URL_SCHEME));
    $path =  parse_url($_SERVER['REQUEST_URI'])['path'];
        $script_start = microtime(true);
        if (isset($_GET['r']) && isset($_GET['x']) && isset($_GET['y'])) {
            header('Content-Type: text/html');
            $xValue = floatval($_GET['x']);
            $yValue = floatval($_GET['y']);
            $rValue = floatval($_GET['r']);
            $timeZone = floatval($_GET['timezone']);
            $hit = hit($xValue, $yValue, $rValue);
            $hitted = $hit ? 'hitted' : 'miss';
            $currentTime = date_format(new DateTime(), microtime(true));
            $currentTime = gmDate("H:i:s", time() - $timeZone*60);
            $execution_time = ceil((microtime(true) - $script_start) * 100000000) / 100;
            echo "
                <tr style='text-align: center;'>
                    <td>$xValue</td>
                    <td>$yValue</td>
                    <td>$rValue</td>
                    <td>$hitted</td>
                    <td>$currentTime</td>
                    <td>$execution_time ms</td>
                </tr>";
        } else {
            http_response_code(400);
            echo 'Bad request';
            exit(400);
        }
    }


function hit($x, $y, $r)
{
    if (($x >= 0 && $y >= 0 && ($y <= -2*$x + $r)) || ($x <= 0 && $y >= 0 && ($x ** 2 + $y ** 2) <= $r ** 2) || ($x <= 0 && $y <= 0 && $x >= -$r && $y >= -$r)){
        return true;
    } else 
        return false;
} 
