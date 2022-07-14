/**
 * Criador por Bendev Junior
 * Email: bendevoficial@gmail.com
 * Github: bendevjunior
 * Instagram/Facebook: bendevoficial
 * Twitter: bendevoficial
 */

 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
 import { getDatabase, ref, get, set } from "./base.js";
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCj3_LpOUrqqjNIAhKS6BmAmHPcgWNkWUY",
   authDomain: "bossanova-fd67b.firebaseapp.com",
   projectId: "bossanova-fd67b",
   storageBucket: "bossanova-fd67b.appspot.com",
   messagingSenderId: "901195801804",
   appId: "1:901195801804:web:e51f0583369f20a8c1ce69",
 };
 
 var userid = localStorage.getItem("userid");
 var app = initializeApp(firebaseConfig);
 const database = getDatabase(app);
 const agenteRef = ref(database, "agentes");
 let usernameemail = document.getElementsByClassName("user-name-email");
 let useremail = "";
 
 function populaEmail() {
   if (usernameemail.length > 0) {
     for (let user of usernameemail) {
       for (let name of user.childNodes) {
         if (name.outerText && name.outerText.toString().includes("@")) {
           useremail = name.outerText;
           // getUserId();
           console.log("email usuario ->", useremail);
         }
       }
     }
   } else {
     console.log("Não tem nada");
     setTimeout(() => {
       populaEmail();
     }, 4000);
   }
 }
 populaEmail();
 
 
 
 
 
 async function getUserId() {
   var agenteList = await get(agenteRef);
   agenteList.forEach(async function (childSnapshot) {
     var childKey = childSnapshot.key;
     var childData = await childSnapshot.val();
     console.log(childData);
     console.log("userid ->", childKey);
     if (childData.email == useremail) {
       userid = childKey;
       localStorage.setItem("userid", userid);
       console.log("userid ->", userid);
     }
   });
 }
 
 
 function handleVisibilityChange() {
   if (document[hidden]) {
     online = false;
     console.log("offline");
   } else {
     online = true;
     console.log("online");
   }
   set(ref(database, "agente/" + useremail.replaceAll("@", "_").replaceAll(".", "-")), {
     status: online,
     email: useremail,
     id: useremail.replaceAll("@", "_").replaceAll(".", "-"),
     validaAtualizacao: false,
   });
 }
 // Alerta se o navegador não suporta addEventListener ou a API de visibilidade da página
 if (
   typeof document.addEventListener === "undefined" ||
   typeof document[hidden] === "undefined"
 ) {
   alert("Esta aplicacao requer um navegador, como Google Chrome ou Firefox.");
 } else {
   // Manipula o evento de mudança da visibilidade da página
   document.addEventListener(visibilityChange, handleVisibilityChange, false);
 
   // Reverte para o favicon existente para o site quando a página é fechada;
   // caso contrário, o favicon continua como paused.png
   window.addEventListener(
     "unload",
     function () {
       favicon.change("/favicon.ico");
     },
     false
   );
 }
 