//

var SongQueueView = Backbone.View.extend({

  tagName: 'ul',

  initialize: function() {
    this.collection.on('add remove', function(){ this.render(); }, this);
  },

  render: function() {
    return this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
