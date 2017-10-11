import DS from 'ember-data';
import ENV from 'planted-trees/config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.APP.host,
  namespace: ENV.APP.namespace,
  headers: ENV.APP.headers,
  buildURL: function() {
    return this._super(...arguments) + ENV.APP.namespace_extension;
  }
});
