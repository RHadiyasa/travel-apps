"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginUser } from "@/service/user.service";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/store/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Email or password are required");
      return;
    }

    // Do something with the email and password
    const loginData = { email, password };

    try {
      const loginUserData = await loginUser(loginData);
      // console.log("Data User: ", loginUserData);

      if (!loginUserData) {
        alert("Login Failed");
        return;
      } else {
        // Masukin data LoginUserData ke dalam Store (redux)
        // Logic redux
        dispatch(
          login({
            user: loginUserData.data,
            token: loginUserData.token,
          })
        );

        // Redirect to home page
        // cek admin atau user
        if (loginUserData.data.role === "admin") {
          router.push("/dashboard");
        } else {
          router.push("/home");
        }
      }
    } catch (error) {
      console.error("Login Failed", error);
    }
  };

  const handleKeyPress = () => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="grid items-center justify-center">
        <div className="text-center font-bold mb-5">Login</div>
        <div className="grid gap-3">
          <div>
            <label className="text-sm">Email</label>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm">Password</label>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button onClick={handleLogin} onKeyPress={handleKeyPress}>
            Login
          </Button>
          <p>
            Dont have an account? Register{" "}
            <Link href="/register" className="font-semibold text-blue-600">
              here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
