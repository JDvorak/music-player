var PlaylistView = Backbone.View.extend({

  tagName: "table",
  className: "playlist table transparency",

  initialize: function(){
    this.collection.on('add remove change', this.render, this);
  },

  render: function() {

    return this.$el.html('<h3>Playlist</h2><th>Artist</th><th>Track</th><th><i class="icon-music"></i></th>').append(
      this.collection.map(function(song) {
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }

});
