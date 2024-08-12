function submitForm() {
  var form = FormApp.openById('Here');  // Form ID
  var formResponses = form.getResponses();
  var lastResponse = formResponses.length;
  var formTitle = form.getTitle();

  var formResponse = formResponses[lastResponse - 1];
  var itemResponses = formResponse.getItemResponses();
  var fromEmail = formResponse.getRespondentEmail();

  var emailBody = "";

  for (var j = 0; j < itemResponses.length; j++) {
    var itemResponse = itemResponses[j];
    var title = itemResponse.getItem().getTitle();
    var answer = itemResponse.getResponse();

    emailBody += title + ": " + answer + "\n";
  }
  MailApp.sendEmail("Your E-mail Here",  // You'll get Notified If somone subimited a form 
                    "Response - " + formTitle,
                    emailBody,
                    {
                      replyTo: fromEmail
                    });
  var emailobody = `` ; // You HTML E-mail content goes Here
  var recp = itemResponses[1].getResponse() ; // i assume the e-amil field is the second field chnage as needed
  MailApp.sendEmail({to:recp,
  subject: "Cofirmation", // Chnage it to ur needs
  htmlBody: emailobody,
});






}
