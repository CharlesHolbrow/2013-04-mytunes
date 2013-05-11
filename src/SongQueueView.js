var SongQueueView = Backbone.View.extend({

  initialize: function() {
  },

  render: function() {
    return this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
