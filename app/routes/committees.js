import config from '../config/environment';
import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var key = config.myApiKey;
   var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=' +key+ '&per_page=50&page=1';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  }

 // model: function(params) {
 //     var key = config.myApiKey;
 //   return new Ember.RSVP.hash({
 //     page1: Ember.$.getJSON({ url: 'http://congress.api.sunlightfoundation.com/committees?apikey=' +key+ '&per_page=50&page=1'}),
 //     page2: Ember.$.getJSON({ url: 'http://congress.api.sunlightfoundation.com/committees?apikey=' +key+ '&per_page=50&page=2'}),
 //     page3: Ember.$.getJSON({ url: 'http://congress.api.sunlightfoundation.com/committees?apikey=' +key+ '&per_page=50&page=3'})
 //   }).then(function(responseJSON) {
 //     console.log(responseJSON.results);
 //       return responseJSON.results
 //   });
 // }
});
