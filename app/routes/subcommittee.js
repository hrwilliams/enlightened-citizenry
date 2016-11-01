import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
 model: function(params) {
   var key = config.myApiKey;
  //  var url = 'congress.api.sunlightfoundation.com/committees?subcommittee=true&parent_committee_id='+params.committee_id+'&apikey='+ key;
   var url = 'http://congress.api.sunlightfoundation.com/committees?subcommittee=true&parent_committee_id=' + params.committee_id + '&apikey=' + key;
  //  console.log(params.committee_id)
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  }
});
