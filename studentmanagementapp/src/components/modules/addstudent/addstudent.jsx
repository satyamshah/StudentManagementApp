import React, { useState } from "react";
import { TextField, Button, Container, Grid, Typography } from "@mui/material";
import { addstudent } from "../../../service/service";
import { useNavigate } from "react-router-dom";

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    classname: "",
    phonenumber: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (student.name && student.age && student.classname && student.phonenumber) {
      const response = await addstudent(student);
     
      navigate("/");
      setStudent({
        name: "",
        age: "",
        classname: "",
        phonenumber: "",
      });
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Add New Student
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
              name="name"
              value={student.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Age"
              variant="outlined"
              fullWidth
              required
              name="age"
              value={student.age}
              onChange={handleChange}
              type="number" 
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Class"
              variant="outlined"
              fullWidth
              required
              name="classname"
              value={student.classname}
              onChange={handleChange}
              type="text"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              required
              name="phonenumber"
              value={student.phonenumber}
              onChange={handleChange}
              type="number" // type is 'text' to control input manually
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Add Student
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default StudentForm;
