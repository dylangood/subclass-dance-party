$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var yPosition = $("body").height() * Math.random();
    var xPosition = $("body").width() * Math.random();
    var halfPeriod = Math.random() * 700 + 300;

    // make a dancer with a random position
    if (dancerMakerFunctionName === 'makeBlinkyDancer') {
      var dancer = new BlinkyDancer(yPosition, xPosition, halfPeriod);
    }
    if (dancerMakerFunctionName === 'makeShapesDancer') {
      var dancer = new ShapesDancer(yPosition, xPosition, halfPeriod);
    }
    if (dancerMakerFunctionName === 'makeColorDancer') {
      var dancer = new ColorDancer(yPosition, xPosition, halfPeriod);
    }
    $('body').append(dancer.$node);
  });
});
