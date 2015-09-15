var rewriteList=[
    "http://www.chicandbasic.com/portaptoff/","http://www.chicandbasic.com/barcelona-port-apartaments",
    "http://www.chicandbasic.com/portaptoff/","http://www.chicandbasic.com/barcelona-port-apartaments/",
    "http://www.chicandbasic.com/es/portaptoff/","http://www.chicandbasic.com/es/barcelona-port-apartaments/",
    "http://www.chicandbasic.com/en/portaptoff/","http://www.chicandbasic.com/en/barcelona-port-apartaments/",
    "http://www.chicandbasic.com/it/portaptoff/","http://www.chicandbasic.com/it/barcelona-port-apartaments/",
    "http://www.chicandbasic.com/ca/portaptoff/","http://www.chicandbasic.com/ca/barcelona-port-apartaments/",
    "http://www.chicandbasic.com/de/portaptoff/","http://www.chicandbasic.com/de/barcelona-port-apartaments/",
    "http://www.chicandbasic.com/fr/portaptoff/","http://www.chicandbasic.com/fr/barcelona-port-apartaments/",
    "http://www.chicandbasic.com/ru/portaptoff/","http://www.chicandbasic.com/ru/barcelona-port-apartaments/",
    "http://www.chicandbasic.com/pt/portaptoff/","http://www.chicandbasic.com/pt/barcelona-port-apartaments/",
    "http://www.chicandbasic.com/es/portaptoff/","http://www.chicandbasic.com/barcelona-port-apartaments/es/",
    "http://www.chicandbasic.com/en/portaptoff/","http://www.chicandbasic.com/barcelona-port-apartaments/en/",
    "http://www.chicandbasic.com/it/portaptoff/","http://www.chicandbasic.com/barcelona-port-apartaments/it/",
    "http://www.chicandbasic.com/ca/portaptoff/","http://www.chicandbasic.com/barcelona-port-apartaments/ca/",
    "http://www.chicandbasic.com/de/portaptoff/","http://www.chicandbasic.com/barcelona-port-apartaments/de/",
    "http://www.chicandbasic.com/fr/portaptoff/","http://www.chicandbasic.com/barcelona-port-apartaments/fr/",
    "http://www.chicandbasic.com/ru/portaptoff/","http://www.chicandbasic.com/barcelona-port-apartaments/ru/",
    "http://www.chicandbasic.com/pt/portaptoff/","http://www.chicandbasic.com/barcelona-port-apartaments/pt/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/ca/apartaments","http://www.chicandbasic.com/barcelona-port-apartaments/ca/apartaments/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/ca/contacte","http://www.chicandbasic.com/barcelona-port-apartaments/ca/contact/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/ca/galeria","http://www.chicandbasic.com/barcelona-port-apartaments/ca/galeria/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/ca/localitzacio","http://www.chicandbasic.com/barcelona-port-apartaments/ca/localitzacio/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/de/apartments","http://www.chicandbasic.com/barcelona-port-apartaments/de/apartments/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/de/galerie","http://www.chicandbasic.com/barcelona-port-apartaments/de/galerie/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/de/kontakt","http://www.chicandbasic.com/barcelona-port-apartaments/de/kontakt/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/de/lage","http://www.chicandbasic.com/barcelona-port-apartaments/de/lage/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/en/contact","http://www.chicandbasic.com/barcelona-port-apartaments/en/contact/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/en/gallery","http://www.chicandbasic.com/barcelona-port-apartaments/en/gallery/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/en/location","http://www.chicandbasic.com/barcelona-port-apartaments/en/location/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/en/apartments","http://www.chicandbasic.com/barcelona-port-apartaments/en/rooms/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/es/contacto","http://www.chicandbasic.com/barcelona-port-apartaments/es/contacto/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/es/galeria","http://www.chicandbasic.com/barcelona-port-apartaments/es/galeria/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/es/apartamentos","http://www.chicandbasic.com/barcelona-port-apartaments/es/habitaciones/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/es/localizacion","http://www.chicandbasic.com/barcelona-port-apartaments/es/localizacion/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/fr/appartements","http://www.chicandbasic.com/barcelona-port-apartaments/fr/appartements/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/fr/contact","http://www.chicandbasic.com/barcelona-port-apartaments/fr/contact/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/fr/emplacement","http://www.chicandbasic.com/barcelona-port-apartaments/fr/emplacement/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/fr/galerie","http://www.chicandbasic.com/barcelona-port-apartaments/fr/galerie/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/it/appartamenti","http://www.chicandbasic.com/barcelona-port-apartaments/it/appartamenti/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/it/contatto","http://www.chicandbasic.com/barcelona-port-apartaments/it/contatto/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/it/galleria","http://www.chicandbasic.com/barcelona-port-apartaments/it/galleria/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/it/posizione","http://www.chicandbasic.com/barcelona-port-apartaments/it/posizione/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/pt/apartamentos","http://www.chicandbasic.com/barcelona-port-apartaments/pt/apartamentos/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/pt/contato","http://www.chicandbasic.com/barcelona-port-apartaments/pt/contato/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/pt/galeria","http://www.chicandbasic.com/barcelona-port-apartaments/pt/galeria/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/pt/localizacao","http://www.chicandbasic.com/barcelona-port-apartaments/pt/localizacao/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/ru/apartments","http://www.chicandbasic.com/barcelona-port-apartaments/ru/apartments/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/ru/%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82","http://www.chicandbasic.com/barcelona-port-apartaments/ru/contact/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/ru/gallery","http://www.chicandbasic.com/barcelona-port-apartaments/ru/gallery/",
    "http://www.chicandbasic.com/barcelona-born-apartamentos/ru/location","http://www.chicandbasic.com/barcelona-port-apartaments/ru/location/"
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

