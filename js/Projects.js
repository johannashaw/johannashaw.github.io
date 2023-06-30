
// on load
$( () => {
  

  // // get request, need to fix problem with finding a proper web server host
  // AJAX_Call("https://johannashaw.github.io/php/Service.php", "GET", {"action":"projects"}, "JSON", test);


  // A Temperary function to convey project information until I can get a server running properly
  TempProj();
})


//  Assembles the information for the different projects that I have designed then Passes it to DisplayProj
//  This is a temperary function to replace a get request while I fix some server setup issues.
function TempProj(){
  var projs = [];

  projs.push({
    'title' : "liteCTRL -- an Automated Curtain Opener and Ambient Light Adjuster.",
    'img_link' : "#",
    'repo_link' : "https://github.com/johannashaw/liteCTRL",
    'desc' : `The device is designed to open and close the user's curtains and optionally adjust the colour and intensity of attached lights. 
      These can be controlled either directly by the user or adjusted by means of light sensors to a setting of the users choosing. I designed 
      and implemented the system and periperal software, mechanical elements, and system hardware.`,
    'type' : "Embedded Device",
    'languages' : "MicroPython"
  });

  projs.push({
    'title' : "Voltorb Game Embedded Device Recreation",
    'img_link' : "#",
    'repo_link' : "https://github.com/johannashaw/Voltorb_game/tree/main/Game_v3/Game_v3",
    'desc' : `Uses a 5x5 button matrix and an 64x128px OLED screen to recreate the Voltorb minigame from Pokemon Soul Silver. 
      For those who are unfamiliar with it, the gameplay is similar to that of minesweeper. The PCB was designed by me, and the 
      Code was designed and written by me unless otherwise specified.`,
    'type' : "Embedded Device, PCB Design",
    'languages': "C, Embedded C"
  });

  projs.push({
    'title' : "This WebSite!",
    'img_link' : "#",
    'repo_link' : "https://github.com/johannashaw/johannashaw.github.io",
    'desc' : "Designed to showcase me and my respective projects and website design capabilities.",
    'type' : "Website",
    'languages' : "HTML, CSS, JavaScript"
  });

  DisplayProj(projs);
}


// takes 2D array holding the project data and structures it for the html page
// First layer contains a different project, second layer contains the details of the respective project
function DisplayProj(data){

  // //just to check we got the right data
  console.log(data);

  // All to be placed into element with id proj-container
  var container = $("#projs-container");

  // Displays an error message if the data passed isn't good
  if (!Array.isArray(data))
  {
    console.log(data);
    container.append($(CreateEl("h2")).html("Something went wrong! get request received bad data"));
    
  }

  // Constructs all the html project elements
  data.forEach(proj_dets => {
    // something messed up and we didn't get a dictionary
    if (!(typeof proj_dets === 'object') || proj_dets == null)
      return;

    // create a container for the given project
    var spec_proj = $(CreateEl("div", [])).addClass("cs-proj");

    // create the container for title and project type
    var titlecont = $(CreateEl("div")).addClass("proj-disp");
    // create the title h2
    if ('title' in proj_dets)
    {
      elem = $(CreateEl("h2")).html(proj_dets['title']);
      titlecont.append(elem);
    }
    // create projtype h3
    if ('type' in proj_dets)
    {
      elem = $(CreateEl("h3")).html(proj_dets['type']);
      titlecont.append(elem);
        
      // append to project div
      titlecont.append(CreateEl("hr"));
    }
    // append to project div
    spec_proj.append(titlecont);

    

    // create description p
    if ('desc' in proj_dets)
    {
      elem = $(CreateEl("p")).html(proj_dets['desc']).addClass("desc");

      // append description to project div
      spec_proj.append(elem);
    }


    // create languages ul
    if ('languages' in proj_dets)
    {
      langs = $(CreateEl("div", [])).addClass("prog-langs");
      langs.append($(CreateEl("h4")).html("Languages:"));

      // create unordered list
      ul = $(CreateEl("ul"));

      // split languages elem by commas
      // create a li for each language and append to ul
      console.log(proj_dets['languages'].split(", "));
      proj_dets['languages'].split(", ").forEach(element => {
        elem = $(CreateEl("li")).html(element);

        //append to ul
        ul.append(elem);
      });

      // append ul to project div
      langs.append(ul);
      spec_proj.append(langs);
    }

    // create code link button
    if ('repo_link' in proj_dets)
    {
      elem = $(CreateEl("button", [
        ['title', proj_dets['repo_link']]
      ])).html("View Code").addClass("code-butt");
      
      // append button to project div
      spec_proj.append(elem);

      // add a callback for that button push event
      elem.on("click", () => {
        //
        open(proj_dets['repo_link']);
      });
    }

    // Append project to the projects container
    container.append(spec_proj);
  });
    
  

}
// future considerations for structure:
  // - limiting the number of project results per page 
  // - adding the image link to the background of the title



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