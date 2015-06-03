(function(){
Template.__checkName("receivedMessages");
Template["receivedMessages"] = new Template("Template.receivedMessages", (function() {
  var view = this;
  return [ HTML.Raw("<h1> Received Messages! </h1>\n  "), HTML.UL({
    "class": "list-group"
  }, "\n    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("messages"));
  }, function() {
    return [ "\n      ", HTML.LI({
      "class": "list-group-item",
      id: function() {
        return Spacebars.mustache(view.lookup("message"));
      }
    }, Blaze.View("lookup:user.username", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));
    }), " sent you a song"), "\n    " ];
  }), "\n  ") ];
}));

})();
