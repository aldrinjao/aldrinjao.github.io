<?php

$url = "https://api.mapbox.com/tokens/v2/conflictalert?access_token=sk.eyJ1IjoiY29uZmxpY3RhbGVydCIsImEiOiJja3Fra3Ezd2MwZDd3Mnduc2M2c2Y3bW02In0.q53YHXf0QoDx-dJEOcCHQg";

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$headers = array(
   "Accept: application/json",
   "Content-Type: application/json",
);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

$data = <<<DATA
{
"expires": "2021-07-01T08:17:36.430Z","scopes": ["styles:read", "fonts:read"]
}
DATA;

curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

//for debug only!
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

$resp = curl_exec($curl);
curl_close($curl);
var_dump($resp);

?>

