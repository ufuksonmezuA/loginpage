import banner from "@/public/banner.png";
import facebook from "@/public/facebook-box-fill.svg";
import google from "@/public/google-fill.svg";
import Image from "next/image";
import Button from "@mui/material/Button";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Divider from '@mui/material/Divider';
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });
  
  const handleOnChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const createAccountService = async () => {
    const requestBody = {
      username: form.username,
      password: form.password,
    };
    axios.post("http://localhost:3000/auth/register", requestBody);
    // axios.post("http://localhost:3000/auth/register", requestBody);
  };

  const handleSubmit = async () => {
      await createAccountService();
      alert("İşlem tamamlandı");
  };  

  return (
    <div className="w-screen h-screen flex items-center justify-center p-12 ">
      <div className="w-1/2 flex flex-col items-center gap-6">
        <div className="w-[24rem] flex flex-col items-center gap-4">
          <h1 className="font-bold text-7xl">Welcome</h1>
          <p className="text-base">We are glad to see you back with us</p>
        </div>
        {/* {JSON.stringify(form)}  */}

        <div className="w-[24rem] flex flex-col gap-6">
          <TextField
            id="filled-basic"
            variant="outlined"
            placeholder="username"
            required
            type="text"
            name="username"
            value={form.username}
            onChange={(event) => handleOnChange(event)}
            className="border-[0.0625rem] rounded-[.75rem] bg-[#F2F2F2]"
            InputProps={{
              style: {
                borderRadius: ".75rem"
              },
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id="filled-basic"
            variant="outlined"
            placeholder="password"
            required
            maxLength={12}
            type="password"
            name="password"
            value={form.password}
            onChange={(event) => handleOnChange(event)}
            className="border-[0.0625rem] rounded-[.75rem] bg-[#F2F2F2]"
            InputProps={{
              style: {
                borderRadius: ".75rem",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            className="bg-black rounded-[0.75rem] font-bold"
            onClick={() => handleSubmit()}
            sx={{
              padding: "1rem",
              "&:hover": {
                backgroundColor: "bg-blue-500",
              },
            }}
          >
            NEXT
          </Button>
        </div>


        <Divider textAlign="center">
          <span className="font-bold">Login</span> with others
        </Divider>



        <div className="w-[24rem] flex flex-col gap-6">
          <Button 
            className="rounded-[.75rem]"
            sx={{
              padding: "1rem",
              color: "black",
              textTransform: "lowercase",
              border: "1px solid #1C1C1C",
              "&:hover": {
                border: "1px solid #1C1C1C",
              },
            }}
            variant="outlined"
            startIcon={<Image src={google} />}
            >
            Login with <span className="font-bold ml-2">Google</span>
          </Button>

          <Button 
            className="rounded-[.75rem]"
            sx={{
              padding: "1rem",
              color: "black",
              textTransform: "lowercase",
              border: "1px solid #1C1C1C",
              "&:hover": {
                border: "1px solid #1C1C1C",
              },
            }}
            variant="outlined"
            startIcon={<Image src={facebook} />}
            >
            Login with <span className="font-bold ml-2">Facebook</span>
          </Button>
        </div>
      </div>












      <div className="w-1/2 flex items-center justify-center">
        <Image src={banner} width={720} />
      </div>
    </div>
  );
}