import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://s3.eu-central-1.amazonaws.com',
  namespace: 'ecosia-frontend-developer',
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  buildURL: function() {
    return this._super(...arguments) + '.json';
  }
});
