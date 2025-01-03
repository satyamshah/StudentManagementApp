import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TextField, Button, Box } from "@mui/material";
import { editstudent } from "../../../service/service";

const ModifyStudent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { studentData } = location.state || {};


  const [formData, setFormData] = useState(studentData || {});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async() => {
    const response = await editstudent(formData);
    navigate("/");
  };

  if (!studentData) {
    return <p>No student data available to modify.</p>;
  }

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        margin: "auto",
        marginTop: 4,
      }}
    >
      <h2>Modify Student</h2>
      <TextField
        label="Name"
        name="name"
        variant="outlined"
        value={formData.name || ""}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Age"
        name="age"
        variant="outlined"
        value={formData.age || ""}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Class"
        name="classname"
        variant="outlined"
        value={formData.classname || ""}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Phone Number"
        name="phonenumber"
        variant="outlined"
        value={formData.phonenumber || ""}
        onChange={handleChange}
        fullWidth
        required
        type="tel"
      />
      <Button variant="contained" onClick={handleSubmit} fullWidth>
        Save
      </Button>
    </Box>
  );
};

export default ModifyStudent;
