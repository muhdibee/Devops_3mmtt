import express from "express";

const app = express();
const port = 3000;

const Devops = [
  { classId: 1, name: "Celestine Ugwu", gender: "male" },
  { classId: 2, name: "Abel", gender: "male" },
  { classId: 3, name: "Fred Kanwai", gender: "male" },
  { classId: 4, name: "Abdulqoyum Adeola Ilori", gender: "male" },
];

app.get("/devops", async (req, res) => {
  res.json(Devops);
});

app.listen(port, () => {
  console.log(`DevOps Class API is running at http://localhost:${port}`);
});
