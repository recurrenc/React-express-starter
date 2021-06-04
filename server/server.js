const express = require("express");
const app = express();
const port = 5000;

app.get("/api/users", (req, res) => {
  // This Data will come from our Database but for now it is hard coded.
  const users = [
    { id: 1, name: "Sonu Kumar", email: "sonu.patna0808@gmail.com" },
    { id: 2, name: "Tannu Kumari", email: "tannu.patna0808@gmail.com" },
  ];
  res.json(users);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
