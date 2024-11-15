import request from "supertest";
import app from "./index";

describe("DevOps Class API", () => {
  it("should return the list of DevOps students", async () => {
    const response = await request(app).get("/devops");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      { classId: 1, name: "Celestine Ugwu", gender: "male" },
      { classId: 2, name: "Abel", gender: "male" },
      { classId: 3, name: "Fred Kanwai", gender: "male" },
      { classId: 4, name: "Abdulqoyum Adeola Ilori", gender: "male" }
    ]);
  });

  it("should add a new student to the list", async () => {
    const newStudent = { classId: 5, name: "New Student", gender: "female" };
    const response = await request(app).post("/students").send(newStudent);
    expect(response.status).toBe(200);
    expect(response.body).toContainEqual(newStudent);
  });

  it("should return a student by classId", async () => {
    const response = await request(app).get("/students/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      classId: 1,
      name: "Celestine Ugwu",
      gender: "male"
    });
  });
});
