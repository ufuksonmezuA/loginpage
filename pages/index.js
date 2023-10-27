import banner from "@/public/banner.png";
import facebook from "@/public/facebook-box-fill.svg";
import google from "@/public/google-fill.svg";
import Image from "next/image";
import Button from "@mui/material/Button";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Divider } from "@mui/material";
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
    <div className="flex justify-between p-12 gap-10 box-border">
      <div className=" w-1/2 flex flex-col items-center gap-6 mt-20">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-bold text-8xl">Welcome</h1>
          <p className=" text-lg ">We are glad to see you back with us</p>
        </div>
        {/* {JSON.stringify(form)}  */}
        <TextField
          id="filled-basic"
          variant="outlined"
          placeholder="username"
          required
          type="text"
          name="username"
          value={form.username}
          onChange={(event) => handleOnChange(event)}       
          sx={{
            width: "50%",
          }}
          InputProps={{
            style: {
              borderRadius: "1rem",
              background: "#F2F2F2",
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
          sx={{
            width: "50%",
          }}
          InputProps={{
            style: {
              borderRadius: "1rem",
              background: "#F2F2F2",
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
          className="bg-black rounded-xl font-bold"
          onClick={() => handleSubmit()}
          sx={{
            width: "50%",
            padding: "1rem",
            "&:hover": {
              backgroundColor: "bg-blue-500",
            },
          }}
        >
          NEXT
        </Button>
        <Divider>
          <span className="font-bold">Login</span> with others
        </Divider>

        <Button
          className="rounded-xl"
          sx={{
            width: "50%",
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
          <p>
            {" "}
            Login with<span className="font-bold"> google</span>
          </p>
        </Button>

        <Button
          className="rounded-xl"
          sx={{
            width: "50%",
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
          <p>
            {" "}
            Login with<span className="font-bold"> Facebook</span>
          </p>
        </Button>
      </div>
      <div className="w-1/2">
        <Image src={banner} width={810} className="rounded-xl" />
      </div>
    </div>
  );
}