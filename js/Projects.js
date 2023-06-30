
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
    'function' : `The device is designed to open and close the user's curtains and optionally adjust the colour and intensity of attached lights. 
      These can be controlled either directly by the user or adjusted by means of light sensors to a setting of the users choosing. I designed 
      and implemented the system and periperal software, mechanical elements, and system hardware.`,
    'type' : "Embedded Device",
    'languages' : "microPython"
  });

  projs.push({
    'title' : "Voltorb Game Embedded Device Recreation",
    'img_link' : "#",
    'repo_link' : "https://github.com/johannashaw/Voltorb_game/tree/main/Game_v3/Game_v3",
    'function' : `Uses a 5x5 button matrix and an 64x128px OLED screen to recreate the Voltorb minigame from Pokemon Soul Silver. 
      For those who are unfamiliar with it, the gameplay is similar to that of minesweeper. The PCB was designed by me, and the 
      Code was designed and written by me unless otherwise specified.`,
    'type' : "Embedded Device, PCB Design",
    'languages': "C, Embedded C"
  });

  projs.push({
    'title' : "This WebSite!",
    'img_link' : "#",
    'repo_link' : "https://github.com/johannashaw/johannashaw.github.io",
    'function' : "Designed to showcase me and my respective projects.",
    'type' : "Website",
    'languages' : "HTML, CSS, JavaScript"
  });

  DisplayProj(projs);
}


// takes 2D array holding the project data and structures it for the html page
// First layer contains a different project, second layer contains the details of the respective project
function DisplayProj(data){

  // //just to check we got the right data
  // console.log(data);

  // All to be placed into element with id proj-container
  var container = $("#proj-container");

  if (!Array.isArray(data))
  {
    container.forEach(proj_dets => {
      // something messed up and we didn't get a dictionary
      if (!(typeof proj_dets==='object') || proj_dets==null)
        return;

      var spec_proj = CreateEl("div");

      // create the container for title and project type
      // create the title h1
      // create projtype h3

      // create description p

      // create languages ul

      // create code link button
      // add a callback for that button push event
    });
    
  }

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


// Cheating so that I have to write a little less code
// props is a 2D array,
function CreateEl(string, props){
  elem = $(document.createElement(string));

  // just return if props isn't an array 
  // ie no properties to set
  if (!Array.isArray(props))
    return elem; 

  props.forEach(propPair => {    
    
    if (Array.isArray(propPair) && propPair.length >= 2)
      elem.prop(propPair[0], propPair[1]);    
  });

  return elem;
}
