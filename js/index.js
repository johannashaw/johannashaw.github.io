
console.log(pagename + " in index.js")

$( () => {

  //hide the heading
  $("#heading").prop("hidden", true);
  $("#heading").remove();

  
  // document.addEventListener("load", MakeThemASquare);
  // $(window).on("load", MakeThemASquare);

  document.addEventListener('readystatechange', event => {
    switch (document.readyState) {
      case "loading":
        console.log("document.readyState: ", document.readyState,
         `- The document is still loading.`
         );
        break;
      case "interactive":
        console.log("document.readyState: ", document.readyState, 
          `- The document has finished loading DOM. `,
          `- "DOMContentLoaded" event`
          );
        break;
      case "complete":
        console.log("document.readyState: ", document.readyState, 
          `- The page DOM with Sub-resources are now fully loaded. `,
          `- "load" event`
          );
        break;
    }
  });

  $(window).on("resize", () => {

    MakeThemASquare();
  });


});
// Make the buttons Square

// window.onload = MakeThemASquare();


function MakeThemASquare(){
  $(".square").each( (indev, elem) => {
    $(elem).css("padding-bottom", "0px");
    max = Math.max($(elem).height(), $(elem).width() );

    $(elem).height( max ).width( max);
  });
  
}