const request = require("request");

exports.subscribeUser = (req, res, next) => {
  // console.log('hooked up');
  const { firstname, lastname, email } = req.body;
  //make sure fields are valid
  if (!firstname || !lastname || !email) {
    return res.redirect("/fail.html");
  }

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstname,
          LNAME: lastname
        }
      }
    ]
  };

  const postData = JSON.stringify(data);
  const options = {
    url: "https://us17.api.mailchimp.com/3.0/lists/fdd2c93c10",
    method: "POST",
    headers: {
      Authorization: `auth 65f577ab4a98a3725e4002579049dd8d-us17`
    },
    body: postData
  };
  request(options, (err, response, body) => {
    if (err) {
      return res.redirect("/fail.html");
    } else {
      if (response.statusCode === 200) {
        return res.redirect("/success.html");
      } else {
        return res.redirect("/fail.html");
      }
    }
  });
};
