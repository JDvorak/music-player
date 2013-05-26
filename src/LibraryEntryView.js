var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><% if (playing) { %> <i class="icon-arrow-left"></i> <% } %><% if (queued && !playing) { %> <i class="icon-ok"></i><% } %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
