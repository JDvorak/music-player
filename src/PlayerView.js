var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  events: {
    'ended' : 'songEnded',
    'pause' : 'songPaused',
    'play'  : 'songPlayed'
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  songEnded: function(){
    this.model.dequeue();
  },

  songPaused: function(){
    this.model.set('playing', false);
  },

  songPlayed: function(){
    this.model.set('playing', true);
  },

  render: function(){
    return this.$el.attr('src', this.model.get('url'));
  }

});
