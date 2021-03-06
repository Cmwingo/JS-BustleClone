import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('story');
  },

  actions: {
    saveStory(params) {
      var newStory = this.store.createRecord('story', params);
      debugger;
      newStory.save();
      this.transitionTo('admin');
    },

    destroyStory(story) {
      story.destroyRecord();
      this.transitionTo('admin');
    },
  }
});
