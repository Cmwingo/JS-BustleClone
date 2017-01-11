import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
  actions: {
    storyFormShow() {
      this.set('addNewStory', true);
    },

    saveStory() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        headline: this.get('headline') ? this.get('headline') : "",
        image: this.get('image') ? this.get('image') : "",
        storyText: this.get('storyText') ? this.get('storyText') : "",
      };
      this.set('addNewStory', false);
      this.sendAction('saveStory', params);
    }
  }
});
