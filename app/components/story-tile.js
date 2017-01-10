import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(story) {
      if(confirm('Are you sure you would like to delete this story?')) {
        this.sendAction('destroyStory', story);
      }
    }
  }
});
