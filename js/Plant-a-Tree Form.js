/*jslint browser: true*/
/*global $*/

$("#choose-tree").change(function () {
  "use strict";
  
  var selected_text = $(this).find("option:selected").text(),
    old_img_src = "",
    new_img_src = "";
  
  if (selected_text === "Live Oak") {
    
    new_img_src = "img/Live-Oak.png";
    
  } else if (selected_text === "Nuttall Oak") {
    
    new_img_src = "img/Nuttall-Oak.png";
    
  } else if (selected_text === "Magnolia") {
    
    new_img_src = "img/Magnolia.png";
    
  } else if (selected_text === "Winged Elm") {
    
    new_img_src = "img/Winged-Elm.png";
    
  } else if (selected_text === "Tabebuia Ipe (Pink Trumpet Tree)") {
    
    new_img_src = "img/Tabebuia-Ipe.png";
    
  } else if (selected_text === "Eagleston Holly") {
    
    new_img_src = "img/Eagleston-Holly.png";
    
  } else if (selected_text === "Yaupon Holly") {
    
    new_img_src = "img/Yaupon-Holly.png";
    
  } else if (selected_text === "Crape Myrtle") {
    
    new_img_src = "img/Crape-Myrtle.png";
    
  } else if (selected_text === "Yellow Tabebuia (Trumpet Tree)") {
    
    new_img_src = "img/Yellow-Tabebuia.png";
    
  } else if (selected_text === "Elaeocarpus (Japanese Blueberry)") {
    
    new_img_src = "img/Elaeocarpus.png";
    
  }
  
  old_img_src = $("#tree-image img").attr("src");
  $('img[src="' + old_img_src + '"]').attr("src", new_img_src);
});
