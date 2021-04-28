import mongoose from 'mongoose';

// Criação do modelo
const gradeSchema = mongoose.Schema({
  name: {
    type: String,
  },
  subject: {
    type:String,
  },
  type: {
    type: String,
  },
  value: {
    type: String,
  },
  lastModified: {
    type: String,
  }
});

// Definindo o modelo da coleção
const gradeModel = mongoose.model('grade', gradeSchema, 'grades');

export {gradeModel};