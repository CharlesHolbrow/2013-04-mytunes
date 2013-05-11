var SongQueueEntryView = Backbone.View.extend({

  tagName: 'ul',

  template: _.template('<li>(<%= artist %>) - <%= title %></li>'),

  events: {
    'click': function() {
      this.model.play();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
