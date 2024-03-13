import mongoose from 'mongoose';
const { Schema } = mongoose;

const dataSchema = new Schema({
  patientId: String, // String is shorthand for {type: String}
  doctorId: String,
  name: String,
  illness:String,
  medicine:String,
});

export default mongoose.model('Data', dataSchema)