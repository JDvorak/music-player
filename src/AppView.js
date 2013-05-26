var AppView = Backbone.View.extend({

  className: "row-fluid app",

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.visualizationView =  new VisualizationView({model: this.model.get('visualization')});

    this.model.on('change:currentSong', function(model){
      this.model.get('beatDetector').stopEverything();
      this.playerView.setSong(model.get('currentSong'));

      //sync beat to playerView
      this.model.get('beatDetector').setDancer(this.playerView.el);
      this.visualizationView.setBeat(this.model.get('beatDetector'))

    }, this);

  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.visualizationView.$el,
      new LibraryView({collection: this.model.get('library')}).render(),
      new PlaylistView({collection: this.model.get('playlist')}).render()
    ]);
  }

});