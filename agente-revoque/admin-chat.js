
page = 1;
max = 0;
var pagination = document.getElementsByClassName("table-page");
function gettablePage(email) {
  pagination = document.getElementsByClassName("table-page");
  var nextButton = document.getElementsByClassName("next")[1];
  if (nextButton == null) {
    gettablePage(email);
    return;
  }
  nextButton.click();
  page = pagination[0].children[0].innerHTML.toString().split(" ")[1];
  max = pagination[0].children[0].innerHTML.toString().split(" ")[3];
}

function nextTable() {
  pagination = document.getElementsByClassName("table-page");
  if (pagination.length == 0) {
    setTimeout(() => {
      nextTable();
    }, 5000);
    nextTable();
    return;
  }
  gettablePage();
  setTimeout(() => {
    pegaEmailsTable();
  }, 5000);
}

function pegaEmailsTable() {
  let encontrou = false;
  var table = document.getElementById("zero-config");
  if (encontrou) {
    return;
  }
  if (table == null) {
    setTimeout(() => {
      pegaEmailsTable();
    }, 5000);
    return;
  }
  for (let childrenTable of table.children) {
    for (let tbody of childrenTable.children) {
      for (let td of tbody.children) {
        if (td.localName != "th") {
          if (td.innerHTML.toString().includes("@")) {
            console.log("email ->", td.innerHTML, window.emails);
            for (let email of window.emails) {
              if (td.innerHTML.toString() == email) {
                console.log("encontrou", email, td.innerHTML.toString());
                let indexArr = window.emails.findIndex((email) => email == td.innerHTML.toString());
                window.emails.slice(indexArr, 1);
                tbody.children[4].children[2].click();
                return;
              }
            }
          }
        }
      }
    }
  }
  console.log(window.emails.length, email);
  if (encontrou) {
    console.log("fim da table - pegaEmailsTable", window.emails);
    return;
  }
  nextTable(email);
}
