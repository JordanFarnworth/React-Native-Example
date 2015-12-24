var forumX = (() => {

  this.domain = "http://localhost:5000";
  this.apiScheme = "/api/v1";

  var parseOptions = ((options) => {
    optionParser(options);
  });

  var parseResponse = ((response) => {
    if(typeof(response) === "json"){
      responseParser().parseJson(response);
    } else if(typeof(response) === "array"){
      responseParser().parseArray(response);
    } else {
      alert('Invalid response. Check console for response given')
      console.log(response);
    };
  });

  var get = ((domain, apiScheme, options) => {
    $.ajax(domain + apiScheme + parseOptions(options) {
      type: 'get',
      dataType: 'json',
      success: ((_this) => {
        return ((data) => {
          return parseResponse(data);
        });
      });
    });
  });

  var post = ((domain, apiScheme, options) => {
    $.ajax(domain + apiScheme + splitOptions(options) {
      type: 'post',
      dataType: 'json',
      success: ((_this) => {
        return ((data) => {
          return parseResponse(data);
        });
      });
    });
  });

  var put = ((domain, apiScheme, options) => {
    $.ajax(domain + apiScheme + splitOptions(options) {
      type: 'put',
      dataType: 'json',
      success: ((_this) => {
        return ((data) => {
          return parseResponse(data);
        });
      });
    });
  });

  var delete = ((domain, apiScheme, options) => {
    $.ajax(domain + apiScheme + splitOptions(options) {
      type: 'delete',
      dataType: 'json',
      success: ((_this) => {
        return ((data) => {
          return parseResponse(data);
        });
      });
    });
  });

});
