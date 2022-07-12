import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj3_LpOUrqqjNIAhKS6BmAmHPcgWNkWUY",
  authDomain: "bossanova-fd67b.firebaseapp.com",
  projectId: "bossanova-fd67b",
  storageBucket: "bossanova-fd67b.appspot.com",
  messagingSenderId: "901195801804",
  appId: "1:901195801804:web:e51f0583369f20a8c1ce69",
};

var app = initializeApp(firebaseConfig);
const database = getDatabase(app);
let usernameemail = document.getElementsByClassName("user-name-email");
let useremail = "";

function populaEmail() {
  if (usernameemail.length > 0) {
    for (let user of usernameemail) {
      for (let name of user.childNodes) {
        if (name.outerText && name.outerText.toString().includes("@")) {
          useremail = name.outerText;
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

// Initialize Firebase
console.log("buttonContainer", buttonContainer);
buttonContainer.addEventListener("click", function () {
  if (useremail === "") {
    populaEmail();
  }
  if (online) {
    container.style = styleContainerOff;
    online = false;
    buttonContainer.innerHTML = "OFF";
    console.log("buttonclick", online);
   
  } else {
    container.style = styleContainerSucess;
    online = true;
    buttonContainer.innerHTML = "ON";
  }
  set(ref(database, "agente/" + useremail.replaceAll("@", "_").replaceAll(".", "-")), {
    status: online,
    email: useremail,
    validaAtualizacao: false,
  });
});
