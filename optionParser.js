var optionParser = ((options) => {
  if (options === {}){
  // do nothing
  }
  else {
    var string = "";
    var devKey = "";
    var catchAll = [];
    for (var key in options){
      if (options.length() > 0 && typeOf(key) === "string") {
        if (key === "string"){
          string = string + options[key]
        }else if(key === "developerKey"){
          devKey = options[key]
        }else {
          catchAll.push({key: value});
        };
      };
    };
    var url_end = string + devKey;
    return url_end;
  };
  return url_end;
});
