(function(){
Template.__checkName("sendMessage");
Template["sendMessage"] = new Template("Template.sendMessage", (function() {
  var view = this;
  return HTML.Raw('<h1> Send Message! </h1>\n    <form>\n        <input class="form-control" type="text" id="trackId" placeholder="Track Id">\n        <input class="form-control" type="text" id="toUser" placeholder="Username">\n        <input class="btn btn-default form-control" type="submit" value="Submit">\n    </form>');
}));

})();
