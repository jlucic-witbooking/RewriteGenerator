//To process the excel files given by sekuenz sort the columns in this order
//NEW URL - OLD URL
//THen dump it to an editor which supports regex (geany), and uses this replace expression
//(.*?)\s(.*?)\n => "\1","\2",\n
// enclose the result in brackets if needed.
// Rewrites must be placed in the file /var/www/vhosts/chicandbasic.com/httpdocs/.htaccess in the web
var rewriteList=[
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/fr/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/fr/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/fr/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/fr/galerie/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/fr/","http://www.chicandbasic.com/fr/photos-hd/cb-bruc-apartments/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/fr/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/fr/emplacement/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/fr/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/fr",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/fr/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/fr/appartements/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/fr/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/fr/contact/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/it/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/it",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/it/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/it/posizione/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/it/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/it/contatto/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/it/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/it/galleria/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/it/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/it/appartamenti/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/it/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/it/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/it/","http://www.chicandbasic.com/it/immagini-ad-alta-risoluzione/cb-bruc-apartments/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/pt/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/pt/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/pt/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/pt/apartamentos/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/pt/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/pt/contato/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/pt/","http://www.chicandbasic.com/pt/imagens-em-alta-resolucao/cb-bruc-apartments/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/pt/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/pt/localizacao/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/pt/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/pt",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/pt/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/pt/galeria/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ru/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/ru/location/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ru/","http://www.chicandbasic.com/ru/hq-images/cb-bruc-apartments/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ru/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/ru/gallery/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ru/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/ru/contact/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ru/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/ru/apartments/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ru/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/ru/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ru/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/ru",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/en/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/en/contact/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/en/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/en/location/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/en/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/en/rooms/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/en/","http://www.chicandbasic.com/en/hq-images/cb-bruc-apartments/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/en/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/en/gallery/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/en/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/en",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/en/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/en/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ca/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/ca/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ca/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/ca/galeria/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ca/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/ca/contacte/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ca/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/ca/localitzacio/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ca/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/ca",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ca/","http://www.chicandbasic.com/ca/imatges-en-hq/cb-bruc-apartments/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ca/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/ca/apartaments/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/es/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/es",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/es/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/es/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/es/","http://www.chicandbasic.com/es/imagenes-hq/cb-bruc-apartments/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/es/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/es/habitaciones/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/es/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/es/galeria/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/es/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/es/localizacion/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/es/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/es/contacto/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/de/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/de/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/de/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/de/apartments/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/de/","http://www.chicandbasic.com/de/bilder-mit-hoher-auflosung/cb-bruc-apartments/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/de/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/de/lage/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/de/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/de/galerie/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/de/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/de",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/de/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/de/kontakt/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/es/","http://www.chicandbasic.com/barcelona-bruc-apartamentos/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/en/","http://www.chicandbasic.com/en/hq-images/cb-urquinaona/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/en/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/en/gallery/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/en/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/en/location/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/en/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/en",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/en/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/en/rooms/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/en/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/en/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/en/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/en/contact/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/es/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/es/localizacion/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/es/","http://www.chicandbasic.com/es/imagenes-hq/cb-urquinaona/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/es/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/es/habitaciones/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/es/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/es",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/es/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/es/galeria/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/es/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/es/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/es/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/es/contacto/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/it/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/it",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/it/","http://www.chicandbasic.com/it/immagini-ad-alta-risoluzione/cb-urquinaona/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/it/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/it/posizione/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/it/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/it/appartamenti/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/it/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/it/galleria/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/it/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/it/contatto/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/it/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/it/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ru/","http://www.chicandbasic.com/ru/hq-images/cb-urquinaona/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ru/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/ru/gallery/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ru/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/ru/location/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ru/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/ru/contact/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ru/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/ru/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ru/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/ru/apartments/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ru/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/ru",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/pt/","http://www.chicandbasic.com/pt/imagens-em-alta-resolucao/cb-urquinaona/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/pt/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/pt/contato/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/pt/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/pt/localizacao/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/pt/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/pt/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/pt/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/pt/apartamentos/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/pt/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/pt/galeria/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/pt/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/pt",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ca/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/ca",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ca/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/ca/contacte/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ca/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/ca/galeria/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ca/","http://www.chicandbasic.com/ca/imatges-en-hq/cb-urquinaona-apartments/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ca/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/ca/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ca/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/ca/apartaments/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/ca/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/ca/localitzacio/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/de/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/de",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/de/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/de/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/de/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/de/kontakt/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/de/","http://www.chicandbasic.com/de/bilder-mit-hoher-auflosung/cb-urquinaona/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/de/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/de/galerie/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/de/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/de/lage/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/de/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/de/apartments/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/fr/","http://www.chicandbasic.com/fr/photos-hd/cb-urquinaona/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/fr/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/fr",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/fr/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/fr/emplacement/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/fr/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/fr/galerie/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/fr/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/fr/contact/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/fr/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/fr/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/fr/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/fr/appartements/",
    "http://www.chicandbasic.com/alquiler-apartamentos-barcelona-centro/es/","http://www.chicandbasic.com/barcelona-urquinaona-apartamentos/"
];

    var url = require("url");

    function escapeRegExp(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }

    //var rewritesRaw=[].concat(rewriteList1,rewriteList2,rewriteList3);
    var rewritesRaw = rewriteList;
    var rewritesPairs=[];
    var mainDomain="www.chicandbasic.com";
    var fs = require('fs');

    var c=0;
    for (c=0;c<rewritesRaw.length;c=c+2){
        var newURL=rewritesRaw[c];
        var oldURL=rewritesRaw[c+1];
        newURL= url.parse(newURL,true,true);
        oldURL= url.parse(oldURL,true,true);
        if(oldURL.hostname!=mainDomain){
            rewritesPairs.push("RewriteCond %{HTTP_HOST} ^"+escapeRegExp(oldURL.hostname)+"$");
        }
        var oldURLRegex="^"+escapeRegExp(oldURL.pathname.substring(1))+"\/?$ ";
        var newURLRegex=escapeRegExp(newURL.pathname)+" [R=301,L] ";
        var rewriteRule="RewriteRule "+oldURLRegex+" "+newURLRegex;
        rewritesPairs.push(rewriteRule);
    }

    fs.writeFile('rewrites.txt', rewritesPairs.join("\n"), function (err) {
        if (err) return console.log(err);
    });

