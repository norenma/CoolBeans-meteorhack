(function(){
Template.__checkName("index");
Template["index"] = new Template("Template.index", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("receivedMessages")), "\n\n    ", Spacebars.include(view.lookupTemplate("sendMessage")), "\n\n    ", Spacebars.include(view.lookupTemplate("loginButtons")) ];
}));

})();
