import { Schema, model } from mongoose

const classSchema = new Schema({
  classId: Number,
  name: String,
  gender: String,
});

const Class = model("Class", classSchema);

export default Class;
