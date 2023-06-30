/* 
Created by: Johanna Shaw
Date: May 25, 2023
Description: Procedurally incluses the JavaScript files and css pages. To be included, 
             each dependant page needs to have the same base name as it's html counterpart.

*/



// *************************************************************************************
// ************         Functions that can be used in multiple files         ***********
// *************************************************************************************




// set pagename to the name of the html page (excluding ".html"), to be used for future includes
let pagename = document.URL.split("/");
pagename = pagename[pagename.length -1].replace(".html", "").replace("#","");
// console.log("page name : " + pagename);
if (pagename == "")
{
  pagename = "index";
}


// inclused jQuery, bootstrap's js
requirejs(["https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js", "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"], function ($) {

  // adds all of the elements that are consistent from page to page
  // requirejs(["defaults"]);
  requirejs(["defaults", pagename]);


  // // inclused the JavaScript file for each specific page
  // requirejs([pagename]);


});

// Returns a new element of a given type with any properties listed in props
// 'props' is a 2D array, first layer is the different properties to be added,
// second layer contains the property name[0] and the property value[1]
function CreateEl(type, props){
  elem = $(document.createElement(type));

  // Set properties to the element if any were passed
  if (Array.isArray(props))
  {
    props.forEach(propPair => {    
      // set the properties if given a valid pair
      if (Array.isArray(propPair) && propPair.length >= 2)
        elem.prop(propPair[0], propPair[1]);    
    });
  }

  return elem;
}


// easy ajax call function
function AJAX_Call(url, method, data, dataType, succ)
{
    var options = {};
    options['url'] = url;
    options['method'] = method;
    options['data'] = data;
    options['dataType'] = dataType;
    options['success'] = succ;
    options['error'] = errorz;

    $.ajax(options);
}

//basic ajax error function
function errorz(request, status, errMessage){
    console.log(request);
    console.log(status);
    console.log(errMessage);
}