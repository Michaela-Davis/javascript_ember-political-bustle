import DS from 'ember-data';

export default DS.Model.extend({
  "EventID": DS.attr(),
  "Year": DS.attr(),
  "Month": DS.attr(),
  "Day": DS.attr(),
  "SourceActorEntity": DS.attr(),
  "SourceActorRole": DS.attr(),
  "TargetActorEntity": DS.attr(),
  "TargetActorRole": DS.attr(),
  "EventCode": DS.attr(),
  "EventRootCode": DS.attr(),
  "PentaClass": DS.attr(),
  "GoldsteinScore": DS.attr(),
  "Issues": DS.attr(),
  "Lat": DS.attr(),
  "Lon": DS.attr(),
  "LocationName": DS.attr(),
  "StateName": DS.attr(),
  "CountryCode": DS.attr(),
  "URLs": DS.attr(),
  "NewsSources": DS.attr()
});
