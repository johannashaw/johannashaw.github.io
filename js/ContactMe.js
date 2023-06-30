/*  Created by: Johanna Shaw
*/


// on load code
$( () => {
  SetImgs();

  $("#email").on( "mouseenter", () => {
    //fade in email address
    if ($("#email-addr").css('display') == 'none')
      $("#email-addr").fadeIn(150);

  } ).on( "mouseleave", () => {
    //fade out email address
    if ($("#email-addr").css('display') != 'none')
      $("#email-addr").fadeOut(150);
  });
  
  $("#email").on("click", () => {
    //copy email address to clipboard 
    navigator.clipboard.writeText($("#email-addr").html()).then(DisplayCoppied, DisplayError);

  });
  

  // // Listener for closing the bootstrap alerts
  // $(".close").on("click", () => {
  //   $(".alert").alert('close');
  // });

});

// displays the copy success alert
function DisplayCoppied()
{
    alert("Copied");
  $('.alert-secondary').alert();
}

// displays the copy failure alert
function DisplayError()
{
  alert("Nope");
  $('.alert-warning').alert();
}

// sets the Image sources so that the colour corresponds with the current theme
function SetImgs()
{
  let theme = "light";
  if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    theme = "dark";

  
  // $("#email").css("background-image", "url(../images/email_" + theme +".png)");  

  // set the image source for the linkedin photo and the github photo
  $("#li-pic").prop("src", "images\\linkedin_" + theme +".png");  
  $("#gh-pic").prop("src", "images\\github_" + theme +".png");
  //images\github_light.png
}



// for copying to clipboard:
//  https://www.w3schools.com/howto/howto_js_copy_clipboard.asp