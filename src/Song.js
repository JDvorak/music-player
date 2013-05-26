var Song = Backbone.Model.extend({

  defaults: {
    'queued'  : false,
    'playing' : false
  },

  play: function(e){
    this.set('playing', true);
    this.trigger('play', this);
  },

  enqueue: function(e){
    this.set('queued', true);
    this.trigger('enqueue', this);
  },

  dequeue: function(e){
    this.set('playing', false);
    this.set('queued', false);
    this.trigger('dequeue', this);
  },

  drop: function(e){
    this.set('playing', false);
    this.set('queued', false);
    this.trigger('drop', this);
  }

});
