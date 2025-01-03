import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "../../common/text/text";
import { Button, TextField } from "@mui/material";
import { DataTable } from "../../common/dataTable/dataTable";
import { headers, rows } from "../../../utils/constants";
import {getallStudents} from "../../../service/service"
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import "./managementApp.css";


export const ManagementApp = () => {
    const initialValue={
      griddata:[],
      searchparam:""
    };
    const [studentstate, setstudentstate] = useState(initialValue);
    const navigate = useNavigate();
    useEffect(()=>{
    getallStudent();
    },[])


    const getallStudent = async()=>{
    const studentdata= await getallStudents()
    setstudentstate((prevstate)=>({...prevstate,
      griddata:studentdata
    }))
    }

    const handlechange=(event)=>{
    setstudentstate((prevstate)=>({...prevstate,
      searchparam:event.target.value
    }))
    }

    const handleclick=()=>{
      navigate("/addstudent");
    }
    
  return (
    <>
      <Text
        align="center"
        color="primary"
        variant="h3"
        component="h3"
        title="Student Management Portal"
      />
      <section className="input-section">
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleclick}>
          Add
        </Button>
        <TextField
          id="outlined-basic"
          label="search by name"
          variant="outlined"
          sx={{ width: "100%" }}
          onChange={(e)=>handlechange(e)}
        />

      </section>
      <DataTable headers={headers} rows={studentstate} method={getallStudent} />
    </>
  );
};
