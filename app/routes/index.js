import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log(this.store.findAll('story'));
    return this.store.findAll('story');
  }
});
