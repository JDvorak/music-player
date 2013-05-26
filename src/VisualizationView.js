var VisualizationView = Backbone.View.extend({

	tagName: "div",
	className: "visualization",

  initialize: function(){
    this.model.setScene();
  },

  setBeat: function(beat){
    var _this = this

    this.beat = beat;
    this.beat.on('kick', function(mag){
      _this.model.renderFrame(mag, true);
      _this.render();
    });
    this.beat.on('offKick', function(mag){
      _this.model.renderFrame(mag, false);
      _this.render();
    });
  },

  render: function() {
    return this.$el.append(this.model.get('renderer').domElement);
  }

});