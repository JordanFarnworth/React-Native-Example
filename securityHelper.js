// var Crypto = require('crypto') ?

var securityHelper = (() => {
  this.sortObject ((o) {
    var sorted = {},
    key, a = [];
    for (key in o) {
      if (o.hasOwnProperty(key)) {
        a.push(key);
      }
    }
    a.sort();
    for (key = 0; key < a.length; key++) {
      sorted[a[key]] = o[a[key]];
    }
    return sorted;
  });

  var generateSignature = ((nonce, developerKey, username, password) => {
    this.hash = {
      "nonce": nonce,
      "key": developerKey,
      "username": username,
      "password": password
    };
    this.digest = CryptoJS.SHA256("sha256");
    this.hmac = CryptoJS.HmacMD5(array[1], this.digest);
    this.string = this.compileArrayString(this.hash);
    this.hmac.update(this.string);
    this.hmac.update(this.digest);
    this.signature = this.hmac.finalize();
    this.frdSignature = this.signature.toString(CryptoJS.enc.Base64).trim();
  });

  this.compileArrayString = ((hash) => {
    var realString = "";
    var newHash = this.sortObject(hash);
    var string = newHash[0] + "=" + newHash[0][0] + "/n" + newHash[1] + "=" + newHash[1][0] + "/n" + newHash[2] + "=" + newHash[2][0] + "/n" + newHash[3] + "=" + newHash[3][0];
    return string;
  });

  return this.frdSignature();
});
