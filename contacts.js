const fs = require("fs");
const path = require("path");

const contactPath = path.resolve("./db/contacts.json");

console.log(contactPath);

function listContacts() {
  fs.readFile(contactPath, "utf-8", (err, data) => {
    if (err) {
      console.log("err", err);
    }
    console.log("data", data);
  });
}

// function getContactById(contactId) {
// ...твой код
// }

// function removeContact(contactId) {
// ...твой код
// }

// function addContact(name, email, phone) {
// ...твой код
// }
