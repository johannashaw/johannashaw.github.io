

$( () => {
  SetImgs();

});


// sets the Image sources so that the colour corresponds with the current theme
function SetImgs()
{
  let theme = "light";
  if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    theme = "dark";

  // set the image source for the linkedin photo and the github photo
  $("#li-pic").prop("src", "images\\linkedin_" + theme +".png");  
  $("#gh-pic").prop("src", "images\\github_" + theme +".png");
  //images\github_light.png
}



// for copying to clipboard:
//  https://www.w3schools.com/howto/howto_js_copy_clipboard.asp