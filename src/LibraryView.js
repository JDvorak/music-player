var LibraryView = Backbone.View.extend({

  tagName: "table",
  className: "table library transparency",

  initialize: function(params) {
    this.collection.on('change', this.render, this);
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    return this.$el.html('<h2>Library</h2><th>Artist</th><th>Track</th><th><i class="icon-music"></i></th>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    ).prepend('');
  }

});
