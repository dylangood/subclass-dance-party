var lineUpDancers = function() {

 var allDancers = document.getElementsByClassName('dancer');
 var separation = (400 * 4 * Math.PI) / 180 / allDancers.length;
 var center = [$('body').width() / 2, $('body').height() / 2];

 for (var i = 0; i < allDancers.length; i++) {
   $('span').addClass('moving');
   var t = i * separation;
   var R = Math.pow (i * separation, 2);
   var x = R * Math.cos (t) + center[0];
   var y = R * Math.sin (t) + center[1];
   $(allDancers[i]).animate( { top: y.toString() + 'px',
                               left: x.toString() + 'px'
    }, 2000);
  }
}
