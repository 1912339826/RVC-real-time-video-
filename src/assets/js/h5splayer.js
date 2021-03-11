function createRTCSessionDescription(t) {
  return new RTCSessionDescription(t)
}
var gStrH5SPlayerVersion = "h5splayer r12.0.0807";

function H5sPlayerWS(t) {
  this.sourceBuffer, this.buffer = [], this.t, this.video, this.s, this.i, this.o, this.h = 0, this.l = 0, this.u = 0, this.S = !1, this.v = !1, this.C = !1, this.H, this.P = 1, this.p = !0, void 0 !== t.consolelog && "false" === t.consolelog && (this.p = !1), this.R = t, !0 === this.p && console.log("[WS] Websocket Conf:", t), this.k = t.videoid, this.T = t.pbconf, this.W = t.token, void 0 === this.k ? (this.m = t.videodom, !0 === this.p && console.log("[WS] use dom directly", t.token)) : (this.m = document.getElementById(this.k), !0 === this.p && console.log("[WS] use videoid", t.token)), this.video = this.m, this.A, void 0 != this.T && "false" == this.T.showposter ? (this.A = this.R.protocol + "//" + this.R.host + this.R.rootpath + "api/v1/GetLoadingImage?session=" + this.R.session, !0 === this.p && console.log("[WS] connect src", t.token), this.m.setAttribute("poster", this.A)) : (this.A = this.R.protocol + "//" + this.R.host + this.R.rootpath + "api/v1/GetImage?token=" + this.W + "&session=" + this.R.session, !0 === this.p && console.log("[WS] connect src", t.token), this.m.setAttribute("poster", this.A))
}

function H5sPlayerRTC(t) {
  this.s, this.o, this.S = !1, this.v = !1, this.p = !0, void 0 !== t.consolelog && "false" === t.consolelog && (this.p = !1), this.R = t, this.k = t.videoid, this.T = t.pbconf, this.W = t.token, this.P = 1, void 0 === this.k ? (this.m = t.videodom, !0 === this.p && console.log("[RTC] use dom directly", t.token)) : (this.m = document.getElementById(this.k), !0 === this.p && console.log("[RTC] use videoid", t.token)), this.video = this.m, this.I = null, this.U = {
    optional: [{
      DtlsSrtpKeyAgreement: !0
    }]
  }, this.O = {
    mandatory: {
      offerToReceiveAudio: !0,
      offerToReceiveVideo: !0
    }
  }, this.g = {
    iceServers: []
  }, this.M = [], this.A, void 0 != this.T && "false" == this.T.showposter ? (this.A = this.R.protocol + "//" + this.R.host + this.R.rootpath + "api/v1/GetLoadingImage?session=" + this.R.session, !0 === this.p && console.log("[WS] connect src", t.token), this.m.setAttribute("poster", this.A)) : (this.A = this.R.protocol + "//" + this.R.host + this.R.rootpath + "api/v1/GetImage?token=" + this.W + "&session=" + this.R.session, !0 === this.p && console.log("[WS] connect src", t.token), this.m.setAttribute("poster", this.A))
}

function H5sPlayerHls(t) {
  this.s, this.o, this.R = t, this.k = t.videoid, this.W = t.token, this.N, this.J = t.hlsver, this.p = !0, void 0 !== t.consolelog && "false" === t.consolelog && (this.p = !1), void 0 === this.k ? (this.m = t.videodom, !0 === this.p && console.log("[HLS] use dom directly", t.token)) : (this.m = document.getElementById(this.k), !0 === this.p && console.log("[HLS] use videoid", t.token)), this.F = this.m, this.F.type = "application/x-mpegURL", this.D = 0, this._ = 0;
  var s = this.R.protocol + "//" + window.location.host + "/api/v1/GetImage?token=" + this.W + "&session=" + this.R.session;
  this.m.setAttribute("poster", s)
}

function H5sPlayerAudio(t) {
  this.buffer = [], this.s, this.S = !1, this.v = !1, this.R = t, this.p = !0, void 0 !== t.consolelog && "false" === t.consolelog && (this.p = !1), !0 === this.p && console.log("[AUD] Aduio Player Conf:", t), this.W = t.token, this.L = new AudioContext
}

function H5sPlayerAudBack(t) {
  this.buffer = [], this.s, this.S = !1, this.v = !1, this.R = t, this.B = 0, this.K = 48e3, this.V = !1, this.p = !0, void 0 !== t.consolelog && "false" === t.consolelog && (this.p = !1), !0 === this.p && console.log("[AUDBACK] Aduio Back Conf:", t), this.W = t.token, this.L = new AudioContext, !0 === this.p && console.log("[AUDBACK] sampleRate", this.L.sampleRate), this.G()
}

function float32ToInt16(t) {
  for (var s = t.length, i = new Int16Array(s); s--;) i[s] = 32767 * Math.min(1, t[s]);
  return i
}

function H5sConference(t) {
  this.s, this.o, this.S = !1, this.v = !1, this.j = !1, this.q, this.X, this.Y = !1, this.Z = !1, this.$, this.tt, this.st = [], this.it = [], this.p = !0, void 0 !== t.consolelog && "false" === t.consolelog && (this.p = !1), void 0 !== t.et && "true" === t.et && (this.Y = !0), void 0 !== t.ot && "true" === t.ot && (this.Z = !0), this.R = t, void 0 === t.localvideoid ? (this.nt = t.localvideodom, !0 === this.p && console.log(t.token, "[CFE] local use dom directly")) : (this.nt = document.getElementById(t.localvideoid), !0 === this.p && console.log(t.token, "[CFE] local use videoid")), void 0 === t.remotevideoid ? (this.ht = t.remotevideodom, !0 === this.p && console.log(t.token, "[CFE] remote use dom directly")) : (this.ht = document.getElementById(t.remotevideoid), !0 === this.p && console.log(t.token, "[CFE] remote use videoid")), this.I = null, this.U = {
    optional: [{
      DtlsSrtpKeyAgreement: !0
    }]
  }, this.O = {
    mandatory: {
      offerToReceiveAudio: !0,
      offerToReceiveVideo: !0,
      ct: !1
    }
  }, this.g = {
    iceServers: []
  }, this.M = []
}

function makeLink(t, s, i) {
  const e = new Blob(t, {
      type: "video/webm"
    }),
    o = window.URL.createObjectURL(e),
    n = document.createElement("a");
  n.style.display = "none", n.href = o;
  const h = new Date;
  var c = s + "_" + h.getFullYear() + "-" + (h.getMonth() + 1) + "-" + h.getDate() + "-" + h.getHours() + "-" + h.getMinutes() + "-" + h.getSeconds() + i;
  n.download = c, document.body.appendChild(n), n.click(), setTimeout(() => {
    document.body.removeChild(n), window.URL.revokeObjectURL(o)
  }, 100)
}

function H5sRTCPush(t) {
  this.s, this.o, this.S = !1, this.v = !1, this.p = !0, void 0 !== t.consolelog && "false" === t.consolelog && (this.p = !1), this.R = t, this.k = t.localvideoid, this.rt = t.user, this.P = 1, void 0 === this.k ? (this.at = t.localvideodom, !0 === this.p && console.log("[PUSH] use dom directly", t.user)) : (this.at = document.getElementById(this.k), !0 === this.p && console.log("[PUSH] use videoid", t.user)), this.video = this.at, this.I = null, this.U = {
    optional: [{
      DtlsSrtpKeyAgreement: !0
    }]
  }, this.O = {
    mandatory: {
      offerToReceiveAudio: !1,
      offerToReceiveVideo: !1
    }
  }, this.g = {
    iceServers: []
  }, this.M = []
}

function H5sRTCGetCapability(t, s) {
  var i = {},
    o = [],
    n = [],
    h = [],
    c = [];
  if (navigator.mediaDevices.getUserMedia({
      audio: !0,
      video: !0
    }).then(function (t) {
      t && t.getTracks().forEach(t => {
        t.stop()
      })
    }).catch(function (t) {
      var s = "[PUSH] getUserMedia failed: " + t.name + " " + t.message;
      alert(s)
    }), window.RTCRtpTransceiver && "setCodecPreferences" in window.RTCRtpTransceiver.prototype) {
    const t = window.RTCRtpSender.getCapabilities("video").codecs;
    var r = !1,
      a = !1;
    for (let s = 0; s !== t.length; ++s) {
      const i = t[s];
      ["video/red", "video/ulpfec", "video/rtx"].includes(i.mimeType) || (["video/VP9"].includes(i.mimeType) ? r = !0 : ["video/H264"].includes(i.mimeType) && (a = !0))
    }
    1 == r && o.push("VP9"), 1 == a && o.push("H264")
  } else o.push("Default");
  navigator.mediaDevices.enumerateDevices().then(function (s) {
    for (let t = 0; t !== s.length; ++t) {
      const i = s[t];
      var e = {};
      e.id = i.deviceId, e.name = i.label, "audioinput" === i.kind ? n.push(e) : "audiooutput" === i.kind ? h.push(e) : "videoinput" === i.kind && c.push(e)
    }
    i.videocodec = o, i.videoin = c, i.audioin = n, i.audioout = h, t(i)
  }).catch(function (t) {
    alert("[PUSH] enumerateDevices failed", e)
  })
}
console.log("[h5s]", gStrH5SPlayerVersion), H5sPlayerWS.prototype.lt = function () {
  if (!0 === this.S) {
    !0 === this.p && console.log("[WS] Reconnect...");
    var t = this.A + "&update=" + this.P;
    this.m.setAttribute("poster", t), !0 === this.p && console.log("[WS] Reconnect image", t), this.P++, this.dt(this.W), this.S = !1
  }
}, H5sPlayerWS.prototype.ut = function (t) {
  var s;
  !0 === this.p && console.log("[WS] H5SWebSocketClient");
  try {
    "http:" == this.R.protocol && (s = "undefined" != typeof MozWebSocket ? new MozWebSocket("ws://" + this.R.host + t) : new WebSocket("ws://" + this.R.host + t)), "https:" == this.R.protocol && (!0 === this.p && console.log(this.R.host), s = "undefined" != typeof MozWebSocket ? new MozWebSocket("wss://" + this.R.host + t) : new WebSocket("wss://" + this.R.host + t)), !0 === this.p && console.log(this.R.host)
  } catch (t) {
    return void alert("error")
  }
  return s
}, H5sPlayerWS.prototype.ft = function () {
  if (null !== this.sourceBuffer && void 0 !== this.sourceBuffer) {
    if (0 !== this.buffer.length && !this.sourceBuffer.updating) try {
      var t = this.buffer.shift(),
        s = new Uint8Array(t);
      this.sourceBuffer.appendBuffer(s)
    } catch (t) {
      !0 === this.p && console.log(t), this.s.close()
    }
  } else !0 === this.p && console.log("[WS] is null or undefined", this.sourceBuffer)
}, H5sPlayerWS.prototype.St = function () {
  try {
    var t = {
      cmd: "H5_KEEPALIVE"
    };
    this.s.send(JSON.stringify(t))
  } catch (t) {
    !0 === this.p && console.log(t)
  }
}, H5sPlayerWS.prototype.vt = function (t) {
  return t.data, ArrayBuffer, "string" == typeof t.data ? (!0 === this.p && console.log("[WS] string"), void(void 0 != this.T && void 0 != this.T.callback && this.T.callback(t.data, this.T.userdata))) : !0 !== this.v ? !1 === this.C ? (this.H = String.fromCharCode.apply(null, new Uint8Array(t.data)), this.Ct(this), void(this.C = !0)) : (this.buffer.push(t.data), void this.ft()) : void 0
}, H5sPlayerWS.prototype.Ct = function (t) {
  try {
    window.MediaSource = window.MediaSource || window.WebKitMediaSource, window.MediaSource || !0 === t.p && console.log("[WS] MediaSource API is not available");
    var s = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
    "MediaSource" in window && MediaSource.isTypeSupported(s) ? !0 === t.p && console.log("[WS] MIME type or codec: ", s) : !0 === t.p && console.log("[WS] Unsupported MIME type or codec: ", s), t.t = new window.MediaSource, t.video.autoplay = !0, !0 === t.p && console.log(t.k);
    t.video.src = window.URL.createObjectURL(t.t), t.video.play(), t.t.addEventListener("sourceopen", t.Ht.bind(t), !1)
  } catch (s) {
    !0 === t.p && console.log(s)
  }
}, H5sPlayerWS.prototype.Ht = function () {
  !0 === this.p && console.log("[WS] Add SourceBuffer"), this.sourceBuffer = this.t.addSourceBuffer(this.H), this.t.duration = 1 / 0, this.t.removeEventListener("sourceopen", this.Ht, !1), this.sourceBuffer.addEventListener("updateend", this.ft.bind(this), !1)
}, H5sPlayerWS.prototype.dt = function (t) {
  if (this.video.autoplay = !0, window.MediaSource = window.MediaSource || window.WebKitMediaSource, window.MediaSource) {
    var s = "false",
      i = 'video/mp4; codecs="hev1.1.6.L93.B0, mp4a.40.2"';
    "MediaSource" in window && MediaSource.isTypeSupported(i) ? s = "true" : (!0 === this.p && console.log("[WS] Unsupported MIME type or codec: ", i), s = "false");
    var e = "api/v1/h5swsapi",
      o = "main";
    if (void 0 === this.R.streamprofile || (o = this.R.streamprofile), void 0 === this.T) e = this.R.rootpath + e + "?token=" + t + "&hevc=" + s + "&profile=" + o + "&session=" + this.R.session;
    else {
      var n = "false",
        h = "fake";
      void 0 === this.T.serverpb || (n = this.T.serverpb), void 0 === this.T.filename || (h = this.T.filename), e = this.R.rootpath + e + "?token=" + t + "&playback=true&profile=" + o + "&serverpb=" + n + "&begintime=" + encodeURIComponent(this.T.begintime) + "&endtime=" + encodeURIComponent(this.T.endtime) + "&filename=" + h + "&session=" + this.R.session
    }
    this.R.session, !0 === this.p && console.log(e), this.s = this.ut(e), !0 === this.p && console.log("[WS] setupWebSocket", this.s), this.s.binaryType = "arraybuffer", this.s.yt = this, this.s.onmessage = this.vt.bind(this), this.s.onopen = function () {
      !0 === this.yt.p && console.log("[WS] wsSocket.onopen", this.yt), this.yt.i = setInterval(this.yt.Pt.bind(this.yt), 1e4), this.yt.o = setInterval(this.yt.St.bind(this.yt), 1e3), void 0 != this.yt.T && "true" === this.yt.T.autoplay && this.yt.start()
    }, this.s.onclose = function () {
      !0 === this.yt.p && console.log("[WS] wsSocket.onclose", this.yt), !0 === this.yt.v ? !0 === this.yt.p && console.log("[WS] wsSocket.onclose disconnect") : this.yt.S = !0;
      try {
        this.yt.pt(this.yt)
      } catch (t) {}
      this.yt.wt(this.yt), this.yt.H = "", this.yt.C = !1
    }
  } else !0 === this.p && console.log("[WS] MediaSource API is not available")
}, H5sPlayerWS.prototype.pt = function (t) {
  !0 === t.p && console.log("[WS] Cleanup Source Buffer", t);
  try {
    t.sourceBuffer.removeEventListener("updateend", t.ft, !1), t.sourceBuffer.abort(), document.documentMode || /Edge/.test(navigator.userAgent) ? !0 === t.p && console.log("[WS] IE or EDGE!") : t.t.removeSourceBuffer(t.sourceBuffer), t.sourceBuffer = null, t.t = null, t.buffer = []
  } catch (s) {
    !0 === t.p && console.log(s)
  }
}, H5sPlayerWS.prototype.wt = function (t) {
  !0 === t.p && console.log("[WS] CleanupWebSocket", t), clearInterval(t.o), clearInterval(t.i), t.h = 0, t.l = 0, t.u = 0
}, H5sPlayerWS.prototype.Pt = function () {
  if (void 0 === this.T) {
    !0 === this.v && (!0 === this.p && console.log("[WS] CheckSourceBuffer has been disconnect", this), clearInterval(this.o), clearInterval(this.i), clearInterval(this.Rt));
    try {
      if (!0 === this.p && console.log("[WS] CheckSourceBuffer", this), this.sourceBuffer.buffered.length <= 0) {
        if (this.h++, this.h > 8) return !0 === this.p && console.log("[WS] CheckSourceBuffer Close 1"), void this.s.close()
      } else {
        this.h = 0;
        this.sourceBuffer.buffered.start(0);
        var t = this.sourceBuffer.buffered.end(0),
          s = t - this.video.currentTime;
        if (s > 5 || s < 0) return !0 === this.p && console.log("[WS] CheckSourceBuffer Close 2", s), void this.s.close();
        if (t == this.l) {
          if (this.u++, this.u > 3) return !0 === this.p && console.log("[WS] CheckSourceBuffer Close 3"), void this.s.close()
        } else this.u = 0;
        this.l = t
      }
    } catch (t) {
      !0 === this.p && console.log(t), this.s.close()
    }
  }
}, H5sPlayerWS.prototype.connect = function () {
  this.dt(this.W), this.Rt = setInterval(this.lt.bind(this), 800)
}, H5sPlayerWS.prototype.disconnect = function () {
  !0 === this.p && console.log("[WS] disconnect", this), this.v = !0, clearInterval(this.Rt);
  try {
    null != this.s && (this.s.close(), this.s = null)
  } catch (t) {}!0 === this.p && console.log("[WS] disconnect", this)
}, H5sPlayerWS.prototype.start = function () {
  try {
    var t = {
      cmd: "H5_START"
    };
    this.s.send(JSON.stringify(t))
  } catch (t) {
    !0 === this.p && console.log(t)
  }
}, H5sPlayerWS.prototype.pause = function () {
  try {
    var t = {
      cmd: "H5_PAUSE"
    };
    this.s.send(JSON.stringify(t))
  } catch (t) {
    !0 === this.p && console.log(t)
  }
}, H5sPlayerWS.prototype.resume = function () {
  try {
    var t = {
      cmd: "H5_RESUME"
    };
    this.s.send(JSON.stringify(t))
  } catch (t) {
    !0 === this.p && console.log(t)
  }
}, H5sPlayerWS.prototype.seek = function (t) {
  try {
    var s = {
      cmd: "H5_SEEK"
    };
    s.nSeekTime = t, this.s.send(JSON.stringify(s))
  } catch (t) {
    !0 === this.p && console.log(t)
  }
}, H5sPlayerWS.prototype.speed = function (t) {
  try {
    var s = {
      cmd: "H5_SPEED"
    };
    s.nSpeed = t, this.s.send(JSON.stringify(s))
  } catch (t) {
    !0 === this.p && console.log(t)
  }
}, H5sPlayerRTC.prototype.lt = function () {
  if (!0 === this.S) {
    !0 === this.p && console.log("[RTC] Reconnect...");
    var t = this.A + "&update=" + this.P;
    this.m.setAttribute("poster", t), !0 === this.p && console.log("[RTC] Reconnect image", t), this.P++, this.dt(this.W), this.S = !1
  }
}, H5sPlayerRTC.prototype.ut = function (t) {
  var s;
  !0 === this.p && console.log("[RTC] H5SWebSocketClient");
  try {
    "http:" == this.R.protocol && (s = "undefined" != typeof MozWebSocket ? new MozWebSocket("ws://" + this.R.host + t) : new WebSocket("ws://" + this.R.host + t)), "https:" == this.R.protocol && (!0 === this.p && console.log(this.R.host), s = "undefined" != typeof MozWebSocket ? new MozWebSocket("wss://" + this.R.host + t) : new WebSocket("wss://" + this.R.host + t)), !0 === this.p && console.log(this.R.host)
  } catch (t) {
    return void alert("error")
  }
  return s
}, H5sPlayerRTC.prototype.St = function () {
  try {
    var t = {
      type: "keepalive"
    };
    this.s.send(JSON.stringify(t))
  } catch (t) {
    !0 === this.p && console.log(t)
  }
}, H5sPlayerRTC.prototype.kt = function (t) {
  if (t.candidate) {
    var s;
    !0 === this.p && console.log("[RTC] onIceCandidate currentice", t.candidate), s = t.candidate, !0 === this.p && console.log("[RTC] onIceCandidate currentice", JSON.stringify(s));
    var i = JSON.parse(JSON.stringify(s));
    i.type = "remoteice", !0 === this.p && console.log("[RTC] onIceCandidate currentice new", JSON.stringify(i)), this.s.send(JSON.stringify(i))
  } else !0 === this.p && console.log("End of candidates.")
}, H5sPlayerRTC.prototype.Et = function (t) {
  var s;
  !0 === this.p && console.log("[RTC] Remote track added:" + JSON.stringify(t)), s = t.Tt ? t.Tt[0] : t.stream;
  var i = this.m;
  i.srcObject = s, i.play()
}, H5sPlayerRTC.prototype.Wt = function () {
  !0 === this.p && console.log("[RTC] createPeerConnection  config: " + JSON.stringify(this.g) + " option:" + JSON.stringify(this.U));
  var t = new RTCPeerConnection(this.g, this.U),
    s = this;
  return t.onicecandidate = function (t) {
    s.kt.call(s, t)
  }, void 0 !== t.At ? t.At = function (t) {
    s.Et.call(s, t)
  } : t.onaddstream = function (t) {
    s.Et.call(s, t)
  }, t.oniceconnectionstatechange = function (i) {
    !0 === s.p && console.log("[RTC] oniceconnectionstatechange  state: " + t.iceConnectionState)
  }, !0 === this.p && console.log("[RTC] Created RTCPeerConnnection with config: " + JSON.stringify(this.g) + "option:" + JSON.stringify(this.U)), t
}, H5sPlayerRTC.prototype.It = function (t) {
  !0 === this.p && console.log("[RTC] ProcessRTCOffer", t);
  try {
    this.I = this.Wt(), this.M.length = 0;
    var s = this;
    !0 === this.p && console.log("[RTC] createRTCSessionDescription "), this.I.setRemoteDescription(createRTCSessionDescription(t)), this.I.createAnswer(this.O).then(function (t) {
      !0 === s.p && console.log("[RTC] Create answer:" + JSON.stringify(t)), s.I.setLocalDescription(t, function () {
        !0 === s.p && console.log("[RTC] ProcessRTCOffer createAnswer", t), s.s.send(JSON.stringify(t))
      }, function () {})
    }, function (t) {
      alert("[RTC] Create awnser error:" + JSON.stringify(t))
    })
  } catch (t) {
    this.disconnect(), alert("[RTC] connect error: " + t)
  }
}, H5sPlayerRTC.prototype.bt = function (t) {
  !0 === this.p && console.log("[RTC] ProcessRemoteIce", t);
  try {
    var s = new RTCIceCandidate({
      sdpMLineIndex: t.sdpMLineIndex,
      candidate: t.candidate
    });
    !0 === this.p && console.log("[RTC] ProcessRemoteIce", s), !0 === this.p && console.log("[RTC] Adding ICE candidate :" + JSON.stringify(s)), this.I.addIceCandidate(s, function () {}, function (t) {
      console.log("[RTC] addIceCandidate error:" + JSON.stringify(t))
    })
  } catch (t) {
    alert("connect ProcessRemoteIce error: " + t)
  }
}, H5sPlayerRTC.prototype.vt = function (t) {
  t.data, ArrayBuffer, t.data, !0 === this.p && console.log("[RTC] RTC received ", t.data);
  var s = JSON.parse(t.data);
  return !0 === this.p && console.log("[RTC] Get Message type ", s.type), "offer" === s.type ? (!0 === this.p && console.log("[RTC] Process Message type ", s.type), void this.It(s)) : "iceserver" === s.type ? (!0 === this.p && console.log("[RTC] Process Message type ", s.type), this.g.iceServers = s.iceServers, this.g.iceTransportPolicy = s.iceTransportPolicy, void(!0 === this.p && console.log("[RTC] Iceserver:", this.g))) : "remoteice" === s.type ? (!0 === this.p && console.log("[RTC] Process Message type ", s.type), void this.bt(s)) : void(void 0 != this.T && void 0 != this.T.callback && this.T.callback(t.data, this.T.userdata))
}, H5sPlayerRTC.prototype.dt = function (t) {
  this.video.autoplay = !0;
  var s = "api/v1/h5srtcapi",
    i = "main";
  if (void 0 === this.R.streamprofile || (i = this.R.streamprofile), void 0 === this.T) s = this.R.rootpath + s + "?token=" + t + "&profile=" + i + "&session=" + this.R.session;
  else {
    var e = "false",
      o = "fake";
    void 0 === this.T.serverpb || (e = this.T.serverpb), void 0 === this.T.filename || (o = this.T.filename), s = this.R.rootpath + s + "?token=" + t + "&playback=true&profile=" + i + "&serverpb=" + e + "&begintime=" + encodeURIComponent(this.T.begintime) + "&endtime=" + encodeURIComponent(this.T.endtime) + "&filename=" + o + "&session=" + this.R.session
  }!0 === this.p && console.log(s), this.s = this.ut(s), !0 === this.p && console.log("[RTC] setupWebSocket", this.s), this.s.binaryType = "arraybuffer", this.s.yt = this, this.s.onmessage = this.vt.bind(this), this.s.onopen = function () {
    !0 === this.yt.p && console.log("[RTC] wsSocket.onopen", this.yt);
    var t = {
      type: "open"
    };
    this.yt.s.send(JSON.stringify(t)), this.yt.o = setInterval(this.yt.St.bind(this.yt), 1e3), void 0 != this.yt.T && "true" === this.yt.T.autoplay && this.yt.start()
  }, this.s.onclose = function () {
    !0 === this.p && console.log("[RTC] wsSocket.onclose", this.yt), !0 === this.yt.v ? !0 === this.yt.p && console.log("[RTC] wsSocket.onclose disconnect") : this.yt.S = !0, this.yt.wt(this.yt)
  }
}, H5sPlayerRTC.prototype.wt = function (t) {
  !0 === t.p && console.log("[RTC] CleanupWebSocket", t), clearInterval(t.o)
}, H5sPlayerRTC.prototype.connect = function () {
  this.dt(this.W), this.Rt = setInterval(this.lt.bind(this), 3e3)
}, H5sPlayerRTC.prototype.disconnect = function () {
  if (!0 === this.p && console.log("[RTC] disconnect", this), this.v = !0, clearInterval(this.Rt), null != this.s && (this.s.close(), this.s = null), this.m && (this.m.src = ""), this.I) {
    try {
      this.I.close()
    } catch (t) {
      !0 === this.p && console.log("[RTC] close peer connection failed:" + t)
    }
    this.I = null
  }!0 === this.p && console.log("[RTC] disconnect", this)
}, H5sPlayerRTC.prototype.start = function () {
  try {
    var t = {
      cmd: "H5_START"
    };
    this.s.send(JSON.stringify(t))
  } catch (t) {
    !0 === this.p && console.log(t)
  }
}, H5sPlayerRTC.prototype.pause = function () {
  try {
    var t = {
      cmd: "H5_PAUSE"
    };
    this.s.send(JSON.stringify(t))
  } catch (t) {
    !0 === this.p && console.log(t)
  }
}, H5sPlayerRTC.prototype.resume = function () {
  try {
    var t = {
      cmd: "H5_RESUME"
    };
    this.s.send(JSON.stringify(t))
  } catch (t) {
    !0 === this.p && console.log(t)
  }
}, H5sPlayerRTC.prototype.seek = function (t) {
  try {
    var s = {
      cmd: "H5_SEEK"
    };
    s.nSeekTime = t, this.s.send(JSON.stringify(s))
  } catch (t) {
    !0 === this.p && console.log(t)
  }
}, H5sPlayerRTC.prototype.speed = function (t) {
  try {
    var s = {
      cmd: "H5_SPEED"
    };
    s.nSpeed = t, this.s.send(JSON.stringify(s))
  } catch (t) {
    !0 === this.p && console.log(t)
  }
}, H5sPlayerHls.prototype.ut = function (t) {
  var s;
  !0 === this.p && console.log("[HLS] H5SWebSocketClient");
  try {
    "http:" == this.R.protocol && (s = "undefined" != typeof MozWebSocket ? new MozWebSocket("ws://" + this.R.host + t) : new WebSocket("ws://" + this.R.host + t)), "https:" == this.R.protocol && (!0 === this.p && console.log("[HLS] ", this.R.host), s = "undefined" != typeof MozWebSocket ? new MozWebSocket("wss://" + this.R.host + t) : new WebSocket("wss://" + this.R.host + t)), !0 === this.p && console.log(this.R.host)
  } catch (t) {
    return void alert("error")
  }
  return s
}, H5sPlayerHls.prototype.St = function () {
  try {
    var t = {
      type: "keepalive"
    };
    this.s.send(JSON.stringify(t))
  } catch (t) {
    !0 === this.p && console.log(t)
  }
}, H5sPlayerHls.prototype.vt = function (t) {
  !0 === this.p && console.log("[HLS] HLS received ", t.data)
}, H5sPlayerHls.prototype.dt = function (t) {
  var s = "api/v1/h5swscmnapi";
  s = this.R.rootpath + s + "?token=" + t + "&session=" + this.R.session, !0 === this.p && console.log(s), this.s = this.ut(s), !0 === this.p && console.log("[HLS] setupWebSocket", this.s), this.s.binaryType = "arraybuffer", this.s.yt = this, this.s.onmessage = this.vt.bind(this), this.s.onopen = function () {
    !0 === this.yt.p && console.log("[HLS] wsSocket.onopen", this.yt), this.yt.o = setInterval(this.yt.St.bind(this.yt), 1e3)
  }, this.s.onclose = function () {
    !0 === this.yt.p && console.log("[HLS] wsSocket.onclose", this.yt), this.yt.wt(this.yt)
  }
}, H5sPlayerHls.prototype.wt = function (t) {
  !0 === t.p && console.log("[HLS] H5sPlayerHls CleanupWebSocket", t), clearInterval(t.o)
}, H5sPlayerHls.prototype.Ut = function () {
  !0 === this.p && console.log("[HLS]  video.ended", this.F.ended), !0 === this.p && console.log("[HLS] video.currentTime", this.F.currentTime);
  var t = this.F.currentTime,
    s = t - this.D;
  !0 === this.p && console.log("[HLS]  diff", s), 0 === s && this._++, this.D = t, this._ > 3 && (null != this.s && (this.s.close(), this.s = null), this.dt(this.W), !0 === this.p && console.log("[HLS] reconnect"), this.F.src = "", this.D = 0, this._ = 0, this.F.src = this.R.protocol + "//" + this.R.host + this.R.rootpath + "hls/" + this.J + "/" + this.W + "/hls.m3u8", this.F.play())
}, H5sPlayerHls.prototype.connect = function () {
  this.dt(this.W), this.D = 0, this._ = 0, this.F.onended = function (t) {
    !0 === this.p && console.log("[HLS] The End")
  }, this.F.onpause = function (t) {
    !0 === this.p && console.log("[HLS] Pause")
  }, this.F.onplaying = function (t) {
    !0 === this.p && console.log("[HLS] Playing")
  }, this.F.onseeking = function (t) {
    !0 === this.p && console.log("[HLS] seeking")
  }, this.F.onvolumechange = function (t) {
    !0 === this.p && console.log("[HLS] volumechange")
  }, this.F.src = this.R.protocol + "//" + this.R.host + this.R.rootpath + "hls/" + this.J + "/" + this.W + "/hls.m3u8", this.F.play(), this.N = setInterval(this.Ut.bind(this), 3e3)
}, H5sPlayerHls.prototype.disconnect = function () {
  clearInterval(this.N), this.D = 0, this._ = 0, null != this.s && (this.s.close(), this.s = null), !0 === this.p && console.log("[HLS] disconnect", this)
}, H5sPlayerAudio.prototype.ut = function (t) {
  var s;
  !0 === this.p && console.log("[AUD] H5SWebSocketClient");
  try {
    "http:" == this.R.protocol && (s = "undefined" != typeof MozWebSocket ? new MozWebSocket("ws://" + this.R.host + t) : new WebSocket("ws://" + this.R.host + t)), "https:" == this.R.protocol && (!0 === this.p && console.log(this.R.host), s = "undefined" != typeof MozWebSocket ? new MozWebSocket("wss://" + this.R.host + t) : new WebSocket("wss://" + this.R.host + t)), !0 === this.p && console.log(this.R.host)
  } catch (t) {
    return void alert("error")
  }
  return s
}, H5sPlayerAudio.prototype.St = function () {
  try {
    this.s.send("keepalive")
  } catch (t) {
    !0 === this.p && console.log(t)
  }
}, H5sPlayerAudio.prototype.vt = function (t) {
  for (var s = new Int16Array(t.data), i = s.length, e = this.L.createBuffer(1, i, 8e3), o = 0; o < 1; o++)
    for (var n = e.getChannelData(o), h = 0; h < i; h++) n[h] = s[h] / 16383.5;
  var c = this.L.createBufferSource();
  c.buffer = e, c.connect(this.L.destination), c.start()
}, H5sPlayerAudio.prototype.wt = function (t) {
  !0 === t.p && console.log("[AUD] CleanupWebSocket", t), clearInterval(t.o)
}, H5sPlayerAudio.prototype.dt = function (t) {
  var s = "api/v1/h5saudapi";
  s = this.R.rootpath + s + "?token=" + t + "&session=" + this.R.session, !0 === this.p && console.log(s), this.s = this.ut(s), !0 === this.p && console.log("[AUD] setupWebSocket for audio", this.s), this.s.binaryType = "arraybuffer", this.s.yt = this, this.s.onmessage = this.vt.bind(this), this.s.onopen = function () {
    !0 === this.yt.p && console.log("[AUD] wsSocket.onopen", this.yt), this.yt.o = setInterval(this.yt.St.bind(this.yt), 1e3)
  }, this.s.onclose = function () {
    !0 === this.yt.p && console.log("[AUD] wsSocket.onclose", this.yt), this.yt.wt(this.yt)
  }
}, H5sPlayerAudio.prototype.connect = function () {
  this.dt(this.W)
}, H5sPlayerAudio.prototype.disconnect = function () {
  !0 === this.p && console.log("[AUD] disconnect", this), null != this.s && (this.s.close(), this.s = null), !0 === this.p && console.log("[AUD] disconnect", this)
}, H5sPlayerAudBack.prototype.ut = function (t) {
  var s;
  !0 === this.p && console.log("[AUDBACK] H5SWebSocketClient");
  try {
    "http:" == this.R.protocol && (s = "undefined" != typeof MozWebSocket ? new MozWebSocket("ws://" + this.R.host + t) : new WebSocket("ws://" + this.R.host + t)), "https:" == this.R.protocol && (!0 === this.p && console.log(this.R.host), s = "undefined" != typeof MozWebSocket ? new MozWebSocket("wss://" + this.R.host + t) : new WebSocket("wss://" + this.R.host + t)), !0 === this.p && console.log(this.R.host)
  } catch (t) {
    return void alert("error")
  }
  return s
}, H5sPlayerAudBack.prototype.St = function () {
  try {
    this.s.send("keepalive")
  } catch (t) {
    !0 === this.p && console.log(t)
  }
}, H5sPlayerAudBack.prototype.vt = function (t) {}, H5sPlayerAudBack.prototype.wt = function (t) {
  !0 === this.p && console.log("[AUDBACK] CleanupWebSocket", t), clearInterval(t.o)
}, H5sPlayerAudBack.prototype.G = function () {
  !0 === this.p && console.log("[AUDBACK] sampleRate", this.L.sampleRate), navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.Ot;
  try {
    navigator.getUserMedia({
      video: !1,
      audio: !0
    }, this.gt.bind(this))
  } catch (s) {
    var t = "[AUDBACK] Audio back getUserMedia failed: " + s.name + " " + s.message;
    return void alert(t)
  }
}, H5sPlayerAudBack.prototype.Mt = function () {
  this.V = !0
}, H5sPlayerAudBack.prototype.dt = function (t) {
  var s = "api/v1/h5saudbackapi";
  s = this.R.rootpath + s + "?token=" + t + "&samplerate=" + this.K + "&session=" + this.R.session, !0 === this.p && console.log(s), this.s = this.ut(s), !0 === this.p && console.log("[AUDBACK] setupWebSocket for audio back", this.s), this.s.binaryType = "arraybuffer", this.s.yt = this, this.s.onmessage = this.vt.bind(this), this.s.onopen = this.Mt.bind(this), this.s.onclose = function () {
    !0 === this.p && console.log("[AUDBACK] wsSocket.onclose", this.yt), this.yt.wt(this.yt)
  }
}, H5sPlayerAudBack.prototype.Nt = function (t) {
  var s = float32ToInt16(t.inputBuffer.getChannelData(0));
  !0 === this.V && this.s && this.s.send(s)
}, H5sPlayerAudBack.prototype.gt = function (t) {
  try {
    var s = this.L.createMediaStreamSource(t),
      i = this.L.createScriptProcessor(1024, 1, 1);
    s.connect(i), i.connect(this.L.destination), i.onaudioprocess = this.Nt.bind(this)
  } catch (t) {
    return void alert("Audio intecomm error", t)
  }
}, H5sPlayerAudBack.prototype.connect = function () {
  this.dt(this.W)
}, H5sPlayerAudBack.prototype.disconnect = function () {
  !0 === this.p && console.log("[AUDBACK] disconnect", this), null != this.s && (this.s.close(), this.s = null), !0 === this.p && console.log("[AUDBACK] disconnect", this)
}, H5sConference.prototype.lt = function () {
  !0 === this.S && (!0 === this.p && console.log("Reconnect..."), this.dt(this.W), this.S = !1)
}, H5sConference.prototype.ut = function (t) {
  var s;
  !0 === this.p && console.log("[CFE] H5SWebSocketClient");
  try {
    "http:" == this.R.protocol && (s = "undefined" != typeof MozWebSocket ? new MozWebSocket("ws://" + this.R.host + t) : new WebSocket("ws://" + this.R.host + t)), "https:" == this.R.protocol && (!0 === this.p && console.log(this.R.host), s = "undefined" != typeof MozWebSocket ? new MozWebSocket("wss://" + this.R.host + t) : new WebSocket("wss://" + this.R.host + t)), !0 === this.p && console.log(this.R.host)
  } catch (t) {
    return void alert("error")
  }
  return s
}, H5sConference.prototype.St = function () {
  try {
    var t = {
        type: "CFE_CMD_KEEPALIVE"
      },
      s = {};
    s.strId = this.q, t.keepalive = s, this.s.send(JSON.stringify(t))
  } catch (t) {
    !0 === this.p && console.log(t)
  }
}, H5sConference.prototype.kt = function (t) {
  if (t.candidate) {
    var s;
    !0 === this.p && console.log("[CFE] onIceCandidate currentice", t.candidate), s = t.candidate, !0 === this.p && console.log("[CFE] onIceCandidate currentice", JSON.stringify(s));
    var i = {
        type: "CFE_CMD_REMOTE_ICE"
      },
      e = {};
    console.log("[CFE] remote Ice to", this.X), e.strTo = this.X, e.msg = s, i.remoteIce = e, this.s.send(JSON.stringify(i))
  } else !0 === this.p && console.log("[CFE] End of candidates.")
}, H5sConference.prototype.Jt = function (t) {
  !0 === this.p && console.log("[CFE] ondataavailableLocal", t.data), this.st.push(t.data), "inactive" == this.$.state && makeLink(this.st, "local", ".webm")
}, H5sConference.prototype.Ft = function (t) {
  !0 === this.p && console.log("[CFE] ondataavailableRemote", t.data), this.it.push(t.data), "inactive" == this.tt.state && makeLink(this.it, "remote", ".webm")
}, H5sConference.prototype.Et = function (t) {
  var s;
  !0 === this.p && console.log("[CFE] Remote track added:" + JSON.stringify(t)), s = t.Tt ? t.Tt[0] : t.stream;
  var i = this.ht;
  if (i.srcObject !== s) {
    i.srcObject = s, i.play();
    try {
      1 == this.Y && (!0 === this.p && console.log("[CFE] Start local record..."), this.$ = new MediaRecorder(this.Dt), this.$.ondataavailable = this.Jt.bind(this), this.$.start()), 1 == this.Z && (!0 === this.p && console.log("[CFE] Start remote record..."), this.tt = new MediaRecorder(s), this.tt.ondataavailable = this.Ft.bind(this), this.tt.start())
    } catch (t) {
      alert("start record error: " + t)
    }
  }
}, H5sConference.prototype.Wt = function () {
  !0 === this.p && console.log("[CFE] createPeerConnection  config: " + JSON.stringify(this.g) + " option:" + JSON.stringify(this.U));
  var t = new RTCPeerConnection(this.g, this.U),
    s = this;
  return t.onicecandidate = function (t) {
    s.kt.call(s, t)
  }, void 0 !== t.At ? t.At = function (t) {
    s.Et.call(s, t)
  } : t.onaddstream = function (t) {
    s.Et.call(s, t)
  }, t.oniceconnectionstatechange = function (s) {
    !0 === this.p && console.log("[CFE] oniceconnectionstatechange  state: " + t.iceConnectionState)
  }, !0 === this.p && console.log("[CFE] Created RTCPeerConnnection with config: " + JSON.stringify(this.g) + "option:" + JSON.stringify(this.U)), t
}, H5sConference.prototype._t = function (t) {
  !0 === this.p && console.log("[CFE] ProcessOffer", t);
  try {
    this.I = this.Wt(), this.M.length = 0;
    var s = this;
    const i = this.Dt.getVideoTracks(),
      e = this.Dt.getAudioTracks();
    i.length > 0 && console.log("[CFE] Using video device:", i[0].label), e.length > 0 && console.log("[CFE] Using audio device:", e[0].label), this.Dt.getTracks().forEach(t => this.I.addTrack(t, this.Dt)), !0 === this.p && console.log("[CFE] createRTCSessionDescription "), this.I.setRemoteDescription(createRTCSessionDescription(t)), this.I.createAnswer(this.O).then(function (t) {
      !0 === s.p && console.log("[CFE] Create answer:" + JSON.stringify(t)), s.I.setLocalDescription(t, function () {
        !0 === s.p && console.log("[CFE] ProcessOffer createAnswer", t);
        var i = {
            type: "CFE_CMD_CALL_ANSWER"
          },
          e = {};
        console.log("[CFE] createAnswer to", s.X), e.strTo = s.X, e.msg = t, i.answer = e, s.s.send(JSON.stringify(i))
      }, function () {})
    }, function (t) {
      alert("[CFE ]Create awnser error:" + JSON.stringify(t))
    })
  } catch (t) {
    this.disconnect(), alert("connect error: " + t)
  }
}, H5sConference.prototype.Lt = function (t) {
  !0 === this.p && console.log("[CFE] ProcessAnswer", t);
  try {
    this.I.setRemoteDescription(createRTCSessionDescription(t))
  } catch (t) {
    this.disconnect(), alert("connect error: " + t)
  }
}, H5sConference.prototype.Bt = function () {
  !0 === this.p && console.log("[CFE] CreateOffer");
  try {
    this.I = this.Wt(), this.M.length = 0;
    var t = this;
    const s = this.Dt.getVideoTracks(),
      i = this.Dt.getAudioTracks();
    return s.length > 0 && console.log("[CFE] Using video device:", s[0].label), i.length > 0 && console.log("[CFE] Using audio device:", i[0].label), this.Dt.getTracks().forEach(t => this.I.addTrack(t, this.Dt)), void this.I.createOffer(this.O).then(function (s) {
      !0 === t.p && console.log("[CFE] Create answer:" + JSON.stringify(s)), t.I.setLocalDescription(s, function () {
        !0 === t.p && console.log("[CFE] ProcessOffer createAnswer", s);
        var i = s;
        !0 === t.p && console.log("[CFE] createOffer ", JSON.stringify(i));
        var e = {
            type: "CFE_CMD_CALL_OFFER"
          },
          o = {};
        !0 === t.p && console.log("[CFE] createOffer to", t.X), o.strTo = t.X, o.msg = i, e.offer = o, t.s.send(JSON.stringify(e))
      }, function () {})
    }, function (t) {
      alert("[CFE ]Create offer error:" + JSON.stringify(t))
    })
  } catch (t) {
    this.disconnect(), alert("connect error: " + t)
  }
}, H5sConference.prototype.bt = function (t) {
  !0 === this.p && console.log("[CFE] ProcessRemoteIce", t);
  try {
    var s = new RTCIceCandidate({
      sdpMLineIndex: t.sdpMLineIndex,
      candidate: t.candidate
    });
    !0 === this.p && console.log("[CFE] ProcessRemoteIce", s), !0 === this.p && console.log("[CFE] Adding ICE candidate :" + JSON.stringify(s)), this.I.addIceCandidate(s, function () {}, function (t) {
      console.log("[CFE] addIceCandidate error:" + JSON.stringify(t))
    })
  } catch (t) {
    alert("connect ProcessRemoteIce error: " + t)
  }
}, H5sConference.prototype.vt = function (t) {
  !0 === this.p && console.log("[CFE] received ", t.data);
  var s = JSON.parse(t.data);
  if (!0 === this.p && console.log("[CFE] Get Message type ", s.type), "CFE_CMD_INVITE_REQ" !== s.type) {
    if ("CFE_CMD_INVITE_RESP" === s.type) return this.X = s.inviteResp.strFrom, void this.Bt();
    if ("CFE_CMD_CALL_OFFER" !== s.type)
      if ("CFE_CMD_CALL_ANSWER" !== s.type)
        if ("CFE_CMD_REMOTE_ICE" !== s.type) {
          if ("CFE_EVENT_ID_ASSIGN" === s.type) {
            this.q = s.idAssign.strId, 1 == s.idAssign.bEnableRelay && (this.g.iceServers = s.idAssign.iceServers, this.g.iceTransportPolicy = s.idAssign.iceTransportPolicy, !0 === this.p && console.log("[CFE] Iceserver:", this.g));
            var i = {
              type: "CFE_EVENT_ID_ASSIGN",
              idAssign: {}
            };
            return i.idAssign.strId = s.idAssign.strId, void(void 0 != this.R.callback && this.R.callback(JSON.stringify(i), this.R.userdata))
          }
          void 0 != this.R.callback && this.R.callback(t.data, this.R.userdata)
        } else this.bt(s.remoteIce.msg);
    else this.Lt(s.answer.msg);
    else this._t(s.offer.msg)
  }
}, H5sConference.prototype.dt = function (t) {
  this.nt.autoplay = !0, this.ht.autoplay = !0;
  var s = "api/v1/h5sconference";
  s = void 0 === this.q ? this.R.rootpath + s + "?name=" + this.R.user + "&session=" + this.R.session : this.R.rootpath + s + "?name=" + this.R.user + "?id=" + this.q + "&session=" + this.R.session, !0 === this.p && console.log(s), this.s = this.ut(s), !0 === this.p && console.log("[CFE] setupWebSocket", this.s), this.s.binaryType = "arraybuffer", this.s.yt = this, this.s.onmessage = this.vt.bind(this), this.s.onopen = function () {
    !0 === this.yt.p && console.log("[CFE] wsSocket.onopen", this.yt), this.yt.o = setInterval(this.yt.St.bind(this.yt), 1e3), void 0 != this.yt.T && "true" === this.yt.T.autoplay && this.yt.start()
  }, this.s.onclose = function () {
    !0 === this.yt.p && console.log("[CFE] wsSocket.onclose", this.yt), !0 === this.yt.v ? !0 === this.yt.p && console.log("[CFE] wsSocket.onclose disconnect") : this.yt.S = !0, this.yt.wt(this.yt)
  }
}, H5sConference.prototype.wt = function (t) {
  !0 === t.p && console.log("[CFE] CleanupWebSocket", t), clearInterval(t.o)
}, H5sConference.prototype.connect = function () {
  this.dt(this.W), this.Rt = setInterval(this.lt.bind(this), 3e3)
}, H5sConference.prototype.call = function (t, s, i, e, o) {
  if (1 != this.j) {
    this.zt = i, this.xt = o, this.Kt = e;
    var n = 1280,
      h = 720;
    "QVGA" == e ? (n = 320, h = 240) : "VGA" == e ? (n = 640, h = 480) : "D1" == e ? (n = 720, h = 576) : "720P" == e ? (n = 1280, h = 720) : "1080P" == e ? (n = 1920, h = 1080) : "4K" == e ? (n = 4096, h = 2160) : "8K" == e && (n = 7680, h = 4320);
    try {
      try {
        var c;
        c = 0 != t && {
          deviceId: {
            exact: i
          },
          width: {
            exact: n
          },
          height: {
            exact: h
          }
        };
        var r = this;
        navigator.mediaDevices.getUserMedia({
          audio: {
            deviceId: {
              exact: o
            }
          },
          video: c
        }).then(function (i) {
          1 == t && (r.nt.srcObject = i), r.Dt = i;
          var e = {
              type: "CFE_CMD_INVITE_REQ"
            },
            o = {};
          o.strFrom = r.q, o.strTo = s, e.inviteReq = o, r.s.send(JSON.stringify(e))
        }).catch(function (t) {
          var s = "[CFE] getUserMedia failed: " + t.name + " " + t.message;
          alert(s)
        })
      } catch (t) {
        var a = "[CFE] getUserMedia failed: " + err.name + " " + err.message;
        alert(a)
      }
    } catch (t) {
      !0 === this.p && console.log(t)
    }
    this.j = !0
  }
}, H5sConference.prototype.answer = function (t, s, i, e, o) {
  if (1 != this.j) {
    this.zt = i, this.xt = o, this.Kt = e;
    var n = 1280,
      h = 720;
    "QVGA" == e ? (n = 320, h = 240) : "VGA" == e ? (n = 640, h = 480) : "D1" == e ? (n = 720, h = 576) : "720P" == e ? (n = 1280, h = 720) : "1080P" == e ? (n = 1920, h = 1080) : "4K" == e ? (n = 4096, h = 2160) : "8K" == e && (n = 7680, h = 4320);
    try {
      try {
        var c;
        c = 0 != t && {
          deviceId: {
            exact: i
          },
          width: {
            exact: n
          },
          height: {
            exact: h
          }
        };
        var r = this;
        navigator.mediaDevices.getUserMedia({
          audio: {
            deviceId: {
              exact: o
            }
          },
          video: c
        }).then(function (i) {
          1 == t && (r.nt.srcObject = i), r.Dt = i;
          var e = {
              type: "CFE_CMD_INVITE_RESP"
            },
            o = {};
          o.strFrom = r.q, o.strTo = s, r.X = s, e.inviteResp = o, r.s.send(JSON.stringify(e))
        }).catch(function (t) {
          var s = "[CFE] getUserMedia failed: " + t.name + " " + t.message;
          alert(s)
        })
      } catch (t) {
        var a = "[CFE] getUserMedia failed: " + err.name + " " + err.message;
        alert(a)
      }
    } catch (t) {
      !0 === this.p && console.log(t)
    }
    this.j = !0
  }
}, H5sConference.prototype.hangup = function () {
  if (0 != this.j) {
    try {
      1 == this.Y && this.$.stop(), 1 == this.Z && this.tt.stop()
    } catch (t) {
      alert("stop record error: " + t)
    }
    try {
      var t = {
        cmd: "H5_PAUSE"
      };
      this.s.send(JSON.stringify(t))
    } catch (t) {
      !0 === this.p && console.log(t)
    }
    if (this.nt && (this.nt.src = ""), this.ht && (this.ht.src = ""), this.Dt && (this.Dt = null), this.I) {
      try {
        this.I.close()
      } catch (t) {
        !0 === this.p && console.log("[CFE] close peer connection failed:" + t)
      }
      this.I = null
    }
    this.j = !1
  }
}, H5sConference.prototype.disconnect = function () {
  !0 === this.p && console.log("[CFE] disconnect", this), this.v = !0, clearInterval(this.Rt), this.hangup(), null != this.s && (this.s.close(), this.s = null), !0 === this.p && console.log("[CFE] disconnect", this)
}, H5sRTCPush.prototype.lt = function () {
  !0 === this.S && (!0 === this.p && console.log("[PUSH] Reconnect..."), this.dt(this.rt), this.S = !1)
}, H5sRTCPush.prototype.ut = function (t) {
  var s;
  !0 === this.p && console.log("[PUSH] H5SWebSocketClient");
  try {
    "http:" == this.R.protocol && (s = "undefined" != typeof MozWebSocket ? new MozWebSocket("ws://" + this.R.host + t) : new WebSocket("ws://" + this.R.host + t)), "https:" == this.R.protocol && (!0 === this.p && console.log(this.R.host), s = "undefined" != typeof MozWebSocket ? new MozWebSocket("wss://" + this.R.host + t) : new WebSocket("wss://" + this.R.host + t)), !0 === this.p && console.log(this.R.host)
  } catch (t) {
    return void alert("error")
  }
  return s
}, H5sRTCPush.prototype.St = function () {
  try {
    var t = {
      type: "keepalive"
    };
    this.s.send(JSON.stringify(t))
  } catch (t) {
    !0 === this.p && console.log(t)
  }
}, H5sRTCPush.prototype.kt = function (t) {
  if (t.candidate) {
    var s;
    !0 === this.p && console.log("[PUSH] onIceCandidate currentice", t.candidate), s = t.candidate, !0 === this.p && console.log("[PUSH] onIceCandidate currentice", JSON.stringify(s));
    var i = JSON.parse(JSON.stringify(s));
    i.type = "remoteice", !0 === this.p && console.log("[PUSH] onIceCandidate currentice new", JSON.stringify(i)), this.s.send(JSON.stringify(i))
  } else !0 === this.p && console.log("End of candidates.")
}, H5sRTCPush.prototype.Et = function (t) {
  !0 === this.p && console.log("[PUSH] Remote track added:" + JSON.stringify(t)), t.Tt ? t.Tt[0] : t.stream
}, H5sRTCPush.prototype.Wt = function () {
  !0 === this.p && console.log("[PUSH] createPeerConnection  config: " + JSON.stringify(this.g) + " option:" + JSON.stringify(this.U));
  var t = new RTCPeerConnection(this.g, this.U),
    s = this;
  return t.onicecandidate = function (t) {
    s.kt.call(s, t)
  }, void 0 !== t.At ? t.At = function (t) {
    s.Et.call(s, t)
  } : t.onaddstream = function (t) {
    s.Et.call(s, t)
  }, t.oniceconnectionstatechange = function (i) {
    !0 === s.p && console.log("[PUSH] oniceconnectionstatechange  state: " + t.iceConnectionState)
  }, !0 === this.p && console.log("[PUSH] Created RTCPeerConnnection with config: " + JSON.stringify(this.g) + "option:" + JSON.stringify(this.U)), t
}, H5sRTCPush.prototype.Vt = function (t, s) {
  if (("chrome" === adapter.browserDetails.browser || "safari" === adapter.browserDetails.browser || "firefox" === adapter.browserDetails.browser && adapter.browserDetails.version >= 64) && "RTCRtpSender" in window && "setParameters" in window.RTCRtpSender.prototype) {
    const i = t.getSenders();
    for (let t = 0; t !== i.length; ++t) {
      const e = i[t];
      if ("video" == e.track.kind) {
        const t = e.getParameters();
        t.encodings || (t.encodings = [{}]), t.encodings[0].maxBitrate = 1e3 * s, e.setParameters(t).then(() => {}).catch(t => console.error(t))
      }
    }
  }
}, H5sRTCPush.prototype.Bt = function () {
  !0 === this.p && console.log("[PUSH] CreateOffer");
  try {
    this.I = this.Wt(), this.M.length = 0;
    var t = this;
    const e = this.Dt.getVideoTracks(),
      o = this.Dt.getAudioTracks();
    if (e.length > 0 && console.log("[PUSH] Using video device:", e[0].label), o.length > 0 && console.log("[PUSH] Using audio device:", o[0].label), this.Dt.getTracks().forEach(t => this.I.addTrack(t, this.Dt)), window.RTCRtpTransceiver && "setCodecPreferences" in window.RTCRtpTransceiver.prototype) {
      var s = "video/H264";
      "VP9" == this.Gt ? s = "video/VP9" : "H264" == this.Gt && (s = "video/H264");
      const e = window.RTCRtpSender.getCapabilities("video").codecs;
      var i = [];
      for (let t = 0; t !== e.length; ++t) {
        const o = e[t];
        [s].includes(o.mimeType) && i.push(o)
      }!0 === t.p && console.log("[PUSH] Select codec:", i), this.I.getTransceivers().find(t => t.sender && t.sender.track === this.Dt.getVideoTracks()[0]).setCodecPreferences(i)
    }
    return void this.I.createOffer(this.O).then(function (s) {
      !0 === t.p && console.log("[PUSH] Create offer:" + JSON.stringify(s)), t.I.setLocalDescription(s, function () {
        var i = s;
        t.s.send(JSON.stringify(i))
      }, function () {})
    }, function (t) {
      alert("[PUSH ]Create offer error:" + JSON.stringify(t))
    })
  } catch (t) {
    this.disconnect(), alert("connect error: " + t)
  }
}, H5sRTCPush.prototype.Lt = function (t) {
  !0 === this.p && console.log("[PUSH] ProcessAnswer", t);
  try {
    this.I.setRemoteDescription(createRTCSessionDescription(t))
  } catch (t) {
    this.disconnect(), alert("connect error: " + t)
  }
  this.Vt(this.I, this.Qt)
}, H5sRTCPush.prototype.bt = function (t) {
  !0 === this.p && console.log("[PUSH] ProcessRemoteIce", t);
  try {
    var s = new RTCIceCandidate({
      sdpMid: t.sdpMid,
      sdpMLineIndex: t.sdpMLineIndex,
      candidate: t.candidate
    });
    !0 === this.p && console.log("[PUSH] ProcessRemoteIce", s), !0 === this.p && console.log("[PUSH] Adding ICE candidate :" + JSON.stringify(s)), this.I.addIceCandidate(s, function () {}, function (t) {
      console.log("[PUSH] addIceCandidate error:" + JSON.stringify(t)), console.log(t)
    })
  } catch (t) {
    alert("connect ProcessRemoteIce error: " + t)
  }
}, H5sRTCPush.prototype.vt = function (t) {
  t.data, ArrayBuffer, t.data, !0 === this.p && console.log("[PUSH] RTC received ", t.data);
  var s = JSON.parse(t.data);
  return !0 === this.p && console.log("[PUSH] Get Message type ", s.type), "iceserver" === s.type ? (!0 === this.p && console.log("[PUSH] Process Message type ", s.type), this.g.iceServers = s.iceServers, !0 === this.p && console.log("[PUSH] Iceserver:", this.g), void this.Bt()) : "answer" === s.type ? (!0 === this.p && console.log("[PUSH] Process Message type ", s.type), void this.Lt(s)) : "remoteice" === s.type ? (!0 === this.p && console.log("[PUSH] Process Message type ", s.type), void this.bt(s)) : void(void 0 != this.R.callback && this.R.callback(t.data, this.R.userdata))
}, H5sRTCPush.prototype.dt = function (t) {
  this.video.autoplay = !0;
  var s = "api/v1/h5srtcpushapi";
  s = this.R.rootpath + s + "?token=" + t + "&type=" + this.R.type + "&audio=" + this.R.audio + "&session=" + this.R.session, !0 === this.p && console.log(s), this.s = this.ut(s), !0 === this.p && console.log("[PUSH] setupWebSocket", this.s), this.s.binaryType = "arraybuffer", this.s.yt = this, this.s.onmessage = this.vt.bind(this), this.s.onopen = function () {
    !0 === this.yt.p && console.log("[PUSH] wsSocket.onopen", this.yt);
    var t = {
      type: "open"
    };
    this.yt.s.send(JSON.stringify(t)), this.yt.o = setInterval(this.yt.St.bind(this.yt), 1e3), void 0 != this.yt.T && "true" === this.yt.T.autoplay && this.yt.start()
  }, this.s.onclose = function () {
    !0 === this.p && console.log("[PUSH] wsSocket.onclose", this.yt), !0 === this.yt.v ? !0 === this.yt.p && console.log("[PUSH] wsSocket.onclose disconnect") : this.yt.S = !0, this.yt.wt(this.yt)
  }
}, H5sRTCPush.prototype.wt = function (t) {
  !0 === t.p && console.log("[PUSH] CleanupWebSocket", t), clearInterval(t.o)
}, H5sRTCPush.prototype.connect = function (t, s, i, e, o, n) {
  this.zt = t, this.Gt = s, this.Qt = i, this.Kt = e, this.xt = o, !0 === this.p && console.log("[PUSH] videoin:", t, "codec:", s, "bitrate:", i, "resolution:", e, "audioin:", o);
  var h, c = 1280,
    r = 720;
  "QVGA" == e ? (c = 320, r = 240) : "VGA" == e ? (c = 640, r = 480) : "D1" == e ? (c = 720, r = 576) : "720P" == e ? (c = 1280, r = 720) : "1080P" == e ? (c = 1920, r = 1080) : "4K" == e ? (c = 4096, r = 2160) : "8K" == e && (c = 7680, r = 4320);
  var a = "",
    l = !1;
  void 0 !== this.R.facingmode && (a = this.R.facingmode, !0 === this.p && console.log("[PUSH] facing mode:", a), l = !0), h = "true" == this.R.audio && {
    deviceId: {
      exact: o
    }
  };
  try {
    const s = {
      audio: h,
      video: l ? {
        facingMode: {
          exact: a
        },
        width: {
          exact: c
        },
        height: {
          exact: r
        }
      } : {
        deviceId: {
          exact: t
        },
        width: {
          exact: c
        },
        height: {
          exact: r
        }
      }
    };
    try {
      var d = this;
      0 == n ? navigator.mediaDevices.getUserMedia(s).then(function (t) {
        d.at.srcObject = t, d.Dt = t, d.dt(d.rt)
      }).catch(function (t) {
        var s = "[PUSH] getUserMedia failed: " + t.name + " " + t.message;
        alert(s)
      }) : navigator.mediaDevices.getDisplayMedia({
        video: !0
      }).then(function (t) {
        d.at.srcObject = t, d.Dt = t, d.dt(d.rt)
      }).catch(function (t) {
        alert("[PUSH] getUserMedia failed:", t.name + ": " + t.message)
      })
    } catch (t) {
      var u = "[PUSH] getUserMedia failed: " + err.name + " " + err.message;
      return void alert(u)
    }
  } catch (t) {
    return void(!0 === this.p && console.log(t))
  }
}, H5sRTCPush.prototype.send = function (t, s) {
  var i = {
    type: "message"
  };
  i.user = this.rt, i.token = t, i.msg = s, this.s.send(JSON.stringify(i))
}, H5sRTCPush.prototype.disconnect = function () {
  if (!0 === this.p && console.log("[PUSH] disconnect", this), this.v = !0, clearInterval(this.Rt), null != this.s && (this.s.close(), this.s = null), this.at && (this.at.src = ""), this.I) {
    try {
      this.I.close()
    } catch (t) {
      !0 === this.p && console.log("[PUSH] close peer connection failed:" + t)
    }
    this.I = null
  }!0 === this.p && console.log("[PUSH] disconnect", this)
};
export {
  H5sPlayerWS,
  H5sPlayerHls,
  H5sPlayerRTC,
  H5sPlayerAudBack,
  H5sConference,
  H5sRTCPush,
  H5sRTCGetCapability
}
