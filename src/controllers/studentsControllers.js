import createHttpError from 'http-errors';
import { Student } from '../models/student';

export const getStudents = async (req, res) => {
  const students = await Student.find();
  res.status(200).json(students);
};
export const getStudentId = async (req, res) => {
  const { studentId } = req.params;
  const student = await Student.findById(studentId);
  if (!student) {
    throw createHttpError(404, 'Student not found');
  }
  res.status(200).json(student);
};
