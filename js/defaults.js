/* 
Created by: Johanna Shaw
Date: June 1st, 2023
Description: Procedurally incluses the css pages. To be included, each dependant page
             needs to have the same base name as it's html counterpart.

*/

let sites = ["About Me", "Contact Me", "Projects"];
let darkTheme = false;


//on load stuff
$(() => {

  getTheme();

  AddIncludes();


  AddHeader();
  AddFooter();


  // $("h1").click(  () => { console.log($("title").html())})
})


// adds stylesheets and links that are consistent from page to page
// also adds stylesheet that is specific to current page (must be in css folder and have the same name as the current page)
function AddIncludes()
{
  // Adds the link for bootstrap and the link to the bootstrap javascript
  bootstrap = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
  integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">`;
  head = $('head').append(bootstrap);

  // Adds the default stylesheet
  // styleSh = $(CreateEl("link")).attr("rel", "stylesheet").attr("href", "css/main_style.css");
  styleSh = CreateEl("link", [["rel", "stylesheet"], ["href", "css/main_style.css"]]);
  head.append(styleSh);


  // Adds the stylesheet that's specific to the current page
  styleSh = $(CreateEl("link")).attr("rel", "stylesheet").attr("href", "css/" + pagename + ".css");
  head.append(styleSh);
}



function AddHeader()
{
  heading = $("#heading")
  // Add content to the header
  h1 = $(CreateEl("h1")).html($("title").html());
  heading.append($(CreateEl("header")).append(h1));


  // add the navigation bar
  // nav = $("nav");
  nav = $(CreateEl("nav"));
  navClasses = ["navbar", "navbar-expand-sm"];
  if (darkTheme)
    navClasses.push("navbar-dark");
  else
    navClasses.push("navbar-light");
  nav.addClass(navClasses);


  // first div in nav
  div_contain = $(CreateEl("div")).addClass("container-fluid");
  
  // Site logo
  div_contain.append($(CreateEl("a")).addClass("navbar-brand").attr("href", "index.html").html("JS"));
  
  // Collapsable navbar button
  navbutt = $(CreateEl("button")).addClass("navbar-toggler").attr("type", "button").attr("data-bs-toggle", "collapse").attr("data-bs-target", "#collapsibleNavbar")
  navbutt.append($(CreateEl("span")).addClass("navbar-toggler-icon"))
  div_contain.append(navbutt);

  // List of links:
  div_links = $(CreateEl("div")).addClass(["collapse", "navbar-collapse"]).attr("id", "collapsibleNavbar");
  ulist = $(CreateEl("ul")).addClass("navbar-nav");
  // Add link for each page
  sites.forEach(page_str => {
    li = $(CreateEl("li")).addClass("nav-item");
    li.append($(CreateEl("a")).addClass("nav-link").attr("href", page_str.replaceAll(" ", "") + ".html").html(page_str) )
    ulist.append(li);
  });
  div_links.append(ulist);



  div_contain.append(div_links);
  nav.append(div_contain);
  heading.append(nav)
}




function AddFooter()
{

}


// Sets darkTheme to true if a dark theme is used, otherwise uses light theme
function getTheme()
{
  darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

}


// Component changes with different 
//  Source: https://medium.com/hypersphere-codes/detecting-system-theme-in-javascript-css-react-f6b961916d48
function ThemeChanges()
{
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  darkThemeMq.addListener();
  if (e.matches) {
    // Theme set to dark.
  } else {
      // Theme set to light.
    }
}

// // Returns a new element of a given type with any properties listed in props
// // 'props' is a 2D array, first layer is the different properties to be added,
// // second layer contains the property name[0] and the property value[1]
// function CreateEl(type, props){
//   elem = $(document.createElement(type));

//   // Set properties to the element if any were passed
//   if (Array.isArray(props))
//   {
//     props.forEach(propPair => {    
//       // set the properties if given a valid pair
//       if (Array.isArray(propPair) && propPair.length >= 2)
//         elem.prop(propPair[0], propPair[1]);    
//     });
//   }

//   return elem;
// }

