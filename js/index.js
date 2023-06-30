/* 
Created by: Johanna Shaw
Date: June 1st, 2023
Description: Removes the default heading and 

*/

$( () => {

  //hide the heading
  // $("#heading").prop("hidden", true);
  $("#heading").remove();

  
  // document.addEventListener("load", MakeThemASquare);
  // $(window).on("load", MakeThemASquare);

  // document.addEventListener('readystatechange', event => {
  //   switch (document.readyState) {
  //     case "loading":
  //       console.log("document.readyState: ", document.readyState,
  //        `- The document is still loading.`
  //        );
  //       break;
  //     case "interactive":
  //       console.log("document.readyState: ", document.readyState, 
  //         `- The document has finished loading DOM. `,
  //         `- "DOMContentLoaded" event`
  //         );
  //       break;
  //     case "complete":
  //       console.log("document.readyState: ", document.readyState, 
  //         `- The page DOM with Sub-resources are now fully loaded. `,
  //         `- "load" event`
  //         );
  //       break;
  //   }
  // });

  // $(window).on("resize", () => {

  //   MakeThemASquare();
  // });


});
// Make the buttons Square

// window.onload = MakeThemASquare();

// Adjusts the height of each element of the 'square' class
async function MakeThemASquare(){
  $(".square").each( (indev, elem) => {

    $(elem).height($(elem).width());
    $(elem).css("padding-bottom", "0px");

    //This callback is used to account for a bug that doubles the square height
    setTimeout(() => {
      $(elem).height($(elem).width());
      // Nested timeout so hopefullty the 
      setTimeout(() => {
        $(elem).height($(elem).width());
      }, 100);
      
      setTimeout(() => {
        $(elem).height($(elem).width());
      }, 175);
      setTimeout(() => {
        $(elem).height($(elem).width());
      }, 225);
    }, 50);
    

  });
  
}


// Used in asynchronous functions.
//  Source:   https://alvarotrigo.com/blog/wait-1-second-javascript/
function delay(milliseconds){
  return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
  });
}
