import Ember from 'ember';

export function isEql(params) {
  return params[0] === params[1];
}

export default Ember.Helper.helper(isEql);
