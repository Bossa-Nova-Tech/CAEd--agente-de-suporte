import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";
window.emails = []
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

const starCountRef = ref(database, "agente");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  for (let usuario of Object.keys(data)) {
    let user = data[usuario];
    if (user.validaAtualizacao != null && user.validaAtualizacao != undefined && user.validaAtualizacao == false) {
      console.log("atualizando", user.email);
      window.emails.push(user.email);
      set(ref(database,"agente/" + user.id), {
        ...user,
        validaAtualizacao: true,
      });
      console.log(user.validaAtualizacao )
      pegaEmailsTable(user.email);
    }
  }
  console.log(data)
});
