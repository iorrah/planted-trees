import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  primaryKey: 'name',
  normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { ticketStats: payload };
    return this.normalizeArrayResponse(store, primaryModelClass, payload, id, requestType);
  }
});
