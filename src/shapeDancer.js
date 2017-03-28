var ShapesDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
}
ShapesDancer.prototype = Object.create(Dancer.prototype);
ShapesDancer.prototype.constructor = ShapesDancer;

ShapesDancer.prototype.step = function(){
  //debugger;
  this.$node.toggleClass('shape');
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
