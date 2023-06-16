/* 
Created by: Johanna Shaw
Date: May 25, 2023
Description: Procedurally incluses the 

*/

// set pagename to the name of the html page (excluding ".html"), to be used for future includes
let pagename = document.URL.split("/");
pagename = pagename[pagename.length -1].replace(".html", "").replace("#","");


// inclused jQuery, bootstrap's js
requirejs(["https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js", "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"], function ($) {
  
  // adds all of the elements that are consistent from page to page
  requirejs(["defaults"]);

  // inclused the JavaScript file for each specific page
  requirejs([pagename]);

});