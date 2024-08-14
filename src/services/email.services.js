sgSendmail = require('sendgrid-mail')

sgSendmail({
  // Required SendGrid API key
  apikey: 'your sendgrid api key',

  // Optional to/cc/bcc fields.
  // Specify at least one email address in any of these fields.
  to: ['John Doe <john.doe@example.com>'],
  cc: [],
  bcc: [],

  // Optional from/replyTo fields.
  // The from address must be a verified sender in your SendGrid account.
  from: 'Jane Doe <jane.doe@example.com>',
  replyTo: 'noreply@example.com',

  // Optional subject of the email
  subject: 'test subject',

  // Optional body of the email
  body: 'plain text body',

  // Optional content type of email body.
  contentType: 'text/html',

  // Optionally avoid sending empty emails
  suppressEmpty: true,
})