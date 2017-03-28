var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
}
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
// BlinkyDancer.prototype.step = function(){
//   Dancer.prototype.step();
//   this.$node.toggle();
// };

BlinkyDancer.prototype.step = function(){
  //debugger;
  this.$node.toggle();
  this.step.bind(this);
};
