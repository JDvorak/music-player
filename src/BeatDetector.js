var BeatDetector = Backbone.Model.extend({

// Interface for Dancer.js Object

  initialize: function(){
    this.dancer = new Dancer();
  },

  setDancer: function(player){

    this.dancer.load(player);

    var _this = this;
    this.kick = this.dancer.createKick({
      onKick: function(mag) {
        _this.alertKick(mag);
      },
      offKick: function(mag) {
        _this.alertOffKick(mag);
      }
    }, .61);

    this.kick.on();
    this.dancer.play();
  },

  stopEverything: function(){
    this.dancer.pause();
  },

  alertKick: function (mag) {
    this.trigger('kick', mag);
  },

  alertOffKick: function (mag) {
    this.trigger('offKick', mag);
  },

  getWaveform: function() {
    return this.dancer.getWaveform();
  },

  getSpectrum: function() {
    return this.dancer.getSpectrum();
  }


});