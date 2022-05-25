const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactPath = path.resolve("./db/contacts.json");

function listContacts() {
  fs.readFile(contactPath, "utf-8", (err, data) => {
    if (err) {
      console.error("err", err);
    }
    console.log("data", data);
  });
}
listContacts();
function getContactById(contactId) {
  fs.readFile(contactPath, "utf-8", (err, data) => {
    if (err) {
      console.error("err", err);
    }
    console.log(
      JSON.parse(data).find(({ id }) => String(id) === String(contactId))
    );
  });
}

function removeContact(contactId) {
  fs.readFile(contactPath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
    }

    const updateContacts = JSON.parse(data).filter(
      ({ id }) => String(id) !== String(contactId)
    );

    fs.writeFile(contactPath, JSON.stringify(updateContacts), (err) => {
      if (err) {
        console.error("ERROR", err);
      }
    });
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactPath, "utf-8", (err, data) => {
    if (err) {
      console.error("err", err);
    }
    let contactAll = JSON.parse(data);
    contactAll.push({
      id: uuidv4(),
      name,
      email,
      phone,
    });
    fs.writeFile(contactPath, JSON.stringify(contactAll), (err) => {
      if (err) {
        console.error(err);
      }
    });
  });
}

const methods = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

module.exports = methods;
