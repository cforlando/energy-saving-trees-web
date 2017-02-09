/*jslint browser: true*/
/*global $*/

/** @type { Object }  */
var TREES = {
  'Live Oak': { image: 'img/trees/Live-Oak.png' },
  'Nuttall Oak': { image: 'img/trees/Nuttall-Oak.png' },
  'Magnolia': { image: 'img/trees/Magnolia.png' },
  'Winged Elm': { image: 'img/trees/Winged-Elm.png' },
  'Tabebuia Ipe (Trumpet Tree)': { image: 'img/trees/Tabebuia-Ipe.png' },
  'Eagleston Holly': { image: 'img/trees/Eagleston-Holly.png' },
  'Yaupon Holly': { image: 'img/trees/Yaupon-Holly.png' },
  'Crape Myrtle': { image: 'img/trees/Crape-Myrtle.png' },
  'Yellow Tabebuia (Trumpet Tree)': { image: 'img/trees/Yellow-Tabebuia.png' },
  'Elaeocarpus (Japanese Blueberry)': { image: 'img/trees/Elaeocarpus.png' }
};

/**
 * @function
 * @description Callback function for change event on tree selection
 * @returns { Void }
 */
function treeSelectionHandler() {
  var selectedText = $(this).find("option:selected").text().trim();
  var oldImgSrc = $("#tree-image img").attr("src");
  var newImgSrc = TREES[selectedText].image;
  var imageSelector = 'img[src="' + oldImgSrc + '"]';

  $(imageSelector).attr("src", newImgSrc);
}

/**
 * @function
 * @description Callback function for when the document loads. Registers events on the DOM
 * @returns { Void }
 */
function onReadyHandler() {
  $("#choose-tree").change(treeSelectionHandler);
}

/** Bootstrap the application on document load */
$(document).ready(onReadyHandler);
