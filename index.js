var Alexa = require('alexa-sdk')

var handlers = {
  'devMountainCharacterIntent': function() {

    var character = this.event.request.intents.slots[0].name;

    this.emit(':tell', character)
  }
 }

 exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
}
