import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

const Devops = [
  { classId: 1, name: "Celestine Ugwu", gender: "male" },
  { classId: 2, name: "Abel", gender: "male" },
  { classId: 3, name: "Fred Kanwai", gender: "male" },
  { classId: 4, name: "Abdulqoyum Adeola Ilori", gender: "male" }
];

app.get("/devops", async (req, res) => {
  res.json(Devops);
});

app.get("/devops-count", async (req, res) => {
  res.send(Devops.lenght);
});

app.post("/students", async (req, res) => {
  const newStudent = req.body;
  Devops.push(newStudent);
  res.json(Devops);
});

app.get("/students/:id", async (req, res) => {
  const student = Devops.find(
    (student) => student.classId === parseInt(req.params.id)
  );
  res.json(student);
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`DevOps Class API is running at http://localhost:${port}`);
  });
}

export default app;
