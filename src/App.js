var App = Backbone.Model.extend({

  initialize: function(params){

    this.set('currentSong', new Song());
    this.set('playlist', new Playlist());
    this.set('visualization', new Visualization());
    this.set('beatDetector', new BeatDetector());

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){
      this.get('playlist').enqueue(song);
    }, this);
  }

});
