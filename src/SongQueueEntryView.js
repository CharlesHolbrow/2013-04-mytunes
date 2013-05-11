var SongQueueEntryView = Backbone.View.extend({

  tagName: 'ul',

  template: _.template('<li>(<%= artist %>)</li><li><%= title %></li>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function() {
    return "<div>SongQueueEntryView render method returned this div</div>";
  }

});
