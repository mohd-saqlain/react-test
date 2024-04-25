import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { Lock, Mail } from "react-feather";
import { useNavigate } from "react-router-dom";
import bg from "../assets/login_bg.png";
import logo from "../assets/RSFP-logo.png";
import { url } from "../utils/api";
import DialogLoader from "../components/DialogLoader";

const Login = () => {
    const [formData,setFormData] = useState({username:"",password:""});
    const [isLoading,setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async () => {
        setIsLoading(true)
        try{
        const res = await fetch(`${url}/dashboard/login/`,{method:"POST",mode:'cors',headers:{'Content-Type': 'application/json'},body:JSON.stringify(formData)});
        if(res.ok){
            const data = await res.json();
            console.log(data);
            localStorage.setItem('@token',data?.token);
            navigate('/dashboard')
        }
    }catch(err){
        console.log(err);
    }
    setIsLoading(false);
    }
  return (
    <>
    <DialogLoader isLoading={isLoading}/>
    <Box
      sx={{
        backgroundColor: "#ECECEC",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "white",
          gap: 5,
          paddingX: 5,
          paddingY: 2,
          borderRadius: 5,
        }}
      >
        <Box mt={5}>
          <Box display="flex" alignItems="center">
            <img src={logo} style={{ width: "2rem" }} />
            <Typography variant="h4" color="#399057">
              RSFP
            </Typography>{" "}
          </Box>
          <Typography variant="body1" fontSize={25}>
            Log into your account
          </Typography>
          <Typography mb={2} color="#FDB92B" fontSize={12} variant="body2">
            Enter your username and password to login
          </Typography>
          <TextField
            sx={{ display: "block", mb: 2 }}
            size="small"
            placeholder="Username"
            variant="outlined"
            value={formData.username}
            onChange={(e)=>setFormData({...formData,username:e.target.value})}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Mail size={15} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ display: "block", mb: 2 }}
            size="small"
            placeholder="Password"
            variant="outlined"
            value={formData.password}
            onChange={(e)=>setFormData({...formData,password:e.target.value})}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock size={15} />
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            sx={{ display: "block", mb: 3 }}
            control={<Checkbox />}
            label="Remember me"
          />
          <Button variant="contained" onClick={handleLogin} fullWidth={true} sx={{ color: "white" }} >
            Log In
          </Button>
        </Box>
        <Box
          sx={{
            "@media (max-width:476px)": {
              display: "none",
            },
          }}
        >
          <Box component="img" height={430} src={bg} />
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default Login;
