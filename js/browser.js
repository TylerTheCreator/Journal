function Journal(body) {
  this.body = body;

}

Journal.prototype.wordCounter = function() {
  console.log(body);
  var output = this.body.split(' ').length;
  return output;
}


$(document).ready(function(){
  $("#journal-body").submit(function(event){
    event.preventDefault();
    var body = $('#body').val();
    var newJournal = new Journal(body);
    $("#solution").text(newJournal.wordCounter());
  });
});
