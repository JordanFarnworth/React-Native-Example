var loginHelper = (() => {
  this.developerKey = '750dd2f2c521050560606c7a8ab0af79';
  this.fx = new forumEx();
  $('#login').on('click', ((this) {
    this.login();
  }));
  this.nonceOptions = {
    "string": "login/new?key=",
    "developerKey": this.developerKey()
  };
  login = (() => {
    if($('#username').length === 1){
      this.username = $('#username').val();
    } else {
      var works = false;
    };
    if($('#password').length === 1){
      this.password = $('#password').val();
      if($('#username').length === 1){
        var works = true;
      }
    } else {
      var works = false;
    };
    if (works){
      this.done = false;
      // this is for some sort of ajax spinner to show that we are logging in while
      // all these ajax calls are made
      this.nonce = this.getNonce();
      var sh = new securityHelper;
      response = sendSignature(sh.generateSignature(this.nonce, this.developerKey, this.username, this.password), this.nonce, this.username, this.password, this.developerKey);
      if (response.code === '200'){
        alert(response.access_token)
      }
      else {
        alert('Wrong username or password')
      };
    } else {
      alert('cant have blank username/password');
    };
  });

  var getNonce = (() => {
    response = this.fx.get(fx.domain(), fx.apiScheme(), this.nonceOptions());
    var nonce = response['nonce'];
    console.log(nonce;);
    return nonce;
  });

  var sendSignature = ((signature, nonce, username, password, developerKey) => {
    this.signatureOptions = {
      "string": "?type='token'",
      "string": "&nonce='" + nonce + "'",
      "string": "&signature='" + signature + "'",
      "string": "&username='" + username + "'",
      "string": "&password='" + password + "'",
      "string": "&key='" + developerKey + "'"
    };
    var loggedInResponse = this.fx.post(this.domain, this.apiScheme, this.signatureOptions
  });
};

});
