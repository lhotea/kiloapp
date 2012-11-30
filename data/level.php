<?php
class image64 
{
 function base64_encode_image ($filename=string,$filetype=string) {
    if ($filename) {
        $imgbinary = fread(fopen($filename, "r"), filesize($filename));
        return 'data:image/' . $filetype . ';base64,' . base64_encode($imgbinary);
    }
 }
}

$img= new image64();

header('Content-type: text/xml');

echo <<<EOXML
<levels version='3'>
<level id='1'>
 <word id='1' word='ampel'>{$img->base64_encode_image('../images/ampel.jpg','jpg')}</word>
 <word id='2' word='ente'>{$img->base64_encode_image('../images/ente.jpg','jpg')}</word>
 <word id='3' word='lama'>{$img->base64_encode_image('../images/lama.jpg','jpg')}</word>
 <word id='4' word='lila'>{$img->base64_encode_image('../images/lila.jpg','jpg')}</word>
 <word id='5' word='limo'>{$img->base64_encode_image('../images/limo.jpg','jpg')}</word>
 <word id='6' word='lippe'>{$img->base64_encode_image('../images/lippe.jpg','jpg')}</word>
 <word id='7' word='mantel'>{$img->base64_encode_image('../images/mantel.jpg','jpg')}</word>
 <word id='8' word='melone'>{$img->base64_encode_image('../images/melone.jpg','jpg')}</word>
 <word id='9' word='palme'>{$img->base64_encode_image('../images/palme.jpg','jpg')}</word>
 <word id='10' word='tinte'>{$img->base64_encode_image('../images/tinte.jpg','jpg')}</word>
 <word id='11' word='tomate'>{$img->base64_encode_image('../images/tomate.jpg','jpg')}</word>
 <word id='12' word='plouf'>{$img->base64_encode_image('../images/kilo-icon.png','png')}</word>
</level>
</levels>
EOXML;

?>