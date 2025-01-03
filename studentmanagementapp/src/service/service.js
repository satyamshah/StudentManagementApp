import axios from 'axios';

const BASE_URL = 'http://localhost:8081'; 


export const getallStudents = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/getStudent`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Student:', error);
    }
};


export const addstudent = async (student) => {
    try {
        const response = await axios.post(`${BASE_URL}/addstudents`, student);
        return response.data;
    } catch (error) {
        console.error('Error adding student:', error);
    }
};



export const editstudent = async (student) => {
    try {
        const response = await axios.put(`${BASE_URL}/editstudents`, student);
        return response.data;
    } catch (error) {
        console.error('Error adding student', error);
        throw error;
    }
};


export const deleteStudent = async (studentId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/students/${studentId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting student:', error);
        throw error;
    }
};
