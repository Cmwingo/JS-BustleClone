import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(story, params) {
      this.sendAction('update', story, params);
    },
    
    delete(story) {
      if(confirm('Are you sure you would like to delete this story?')) {
        this.sendAction('destroyStory', story);
      }
    }
  }
});
