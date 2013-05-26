var Playlist = Songs.extend({

  initialize: function(params) {
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.dequeue, this);
    this.on('drop', this.drop, this);
  },

  enqueue: function(song){
    this.push(song);
    if (this.length === 1) {
      this.playFirst();
    }
  },

  playFirst: function(){
    this.at(0) && this.at(0).play();
  },

  dequeue: function(){
    this.shift();
    if (this.length >= 1) {
      this.playFirst();
    }
  },

  drop: function(song) {
    if (_.indexOf(this.models, song) === 0) {
      this.at(1) && this.at(1).play();
    }
    this.remove(song);
  }

});
