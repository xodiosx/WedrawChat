
const currentuser = JSON.parse(localStorage.getItem("user"));
var draww = document.querySelector(".float");
if (currentuser !== null){
var user = currentuser.email;
draww.style.display = "block";
} else {
var user = "يرجى تسجيل الدخول أولاً";
//alert ("not logged in");

draww.style.display = "none";
//window.location=("Login/")
}

(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{16:function(e,t,a){e.exports=a(30)},21:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),o=a.n(c),i=(a(21),a(9)),l=a.n(i),s=a(12),u=a(7),m=(a(23),a(5)),p=a.n(m),d=(a(24),a(28),a(31),a(14)),h=a(15);p.a.initializeApp({apiKey: "AIzaSyBFgBSNiBJPNM37S2AoG-vaCaAjiK1e9QU",
    authDomain: "p2paly.firebaseapp.com",
    databaseURL: "https://p2paly-default-rtdb.firebaseio.com",
    projectId: "p2paly",
    storageBucket: "p2paly.appspot.com",
    messagingSenderId: "561961092765",
    appId: "1:561961092765:web:6bff5b88e25e3d68e3b674",
    measurementId: "G-0WS6LNPJZW"}); 
var f=p.a.auth(),g=p.a.firestore();

p.a.analytics();function b(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"sign-in",onClick:function(){location=("login/arlog.html");}},"اضغط هنا لتسجيل الدخول"),setTimeout(() => {
  if (currentuser !== null){
f.currentUser = user;
}
//alert("ويدروشات");
}, 1000),r.a.createElement("p",null," مرحبا "+ user),r.a.createElement("p",null,"by xodmods Aleiwi©2023"))}function v(){return f.currentUser&&r.a.createElement("button",{className:"sign-out",onClick:function(){

//alert("logged out");


f.signOut()
location=("lout.html");
 
return
}},"تسجيل خروج")}function E(){var e=Object(n.useRef)(),t=g.collection("messages"),a=t.orderBy("createdAt").limitToLast(25),c=Object(h.a)(a,{idField:"id"}),o=Object(u.a)(c,1)[0],i=Object(n.useState)(""),m=Object(u.a)(i,2),d=m[0],b=m[1],v=function(){var e=Object(s.a)(l.a.mark((function e(a){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=f.currentUser,r=n.uid,c=n.photoURL,e.next=4,t.add({text:d,createdAt:p.a.firestore.FieldValue.serverTimestamp(),uid:r,photoURL:c});case 4:b("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){e.current.scrollIntoView({behavior:"smooth"})}),[o]),r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,o&&o.map((function(e){return r.a.createElement(w,{key:e.id,message:e})})),r.a.createElement("span",{ref:e})),r.a.createElement("form",{onSubmit:v},r.a.createElement("input",{value:d,onChange:function(e){return b(e.target.value)},placeholder:"أكتب شيء جميل",id:"inp"}),r.a.createElement("button",{type:"submit",disabled:!d,id:"inpb"},"\ud83d\udd4a\ufe0f")))}function w(e){var t=e.message,a=t.text,n=t.uid,c=t.photoURL,o=n===f.currentUser.uid?"sent":"received";
r.a.value="";
return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"message ".concat(o)},r.a.createElement("img",{src:c||"profile.png"}),r.a.createElement("p",null,a)))}var y=function(){var e=Object(d.a)(f),t=Object(u.a)(e,1)[0];return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"ويدروشات"),r.a.createElement("img",{src:"app.png"}),r.a.createElement(v,null)),r.a.createElement("section",null,t?r.a.createElement(E,null):r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.448b3b5a.chunk.js.map

var singbtn = document.querySelector(".sign-in");
if (currentuser !== null){
var user = currentuser.email;
singbtn.style.display = "none";
draww.style.display = "block";
} else {
singbtn.style.display = "block";


draww.style.display = "none";
//window.location=("Login/")
}
