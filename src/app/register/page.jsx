"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";
import Select from "react-select";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const optionsRole = [
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" },
  ];

  let bgStyle =
    "hidden lg:flex bg-[url('https://images.unsplash.com/photo-1465101162946-4377e57745c3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNwYWNlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')] bg-cover h-screen rounded-lg w-full";

  return (
    <div className="grid lg:flex gap-3 min-h-screen items-center justify-center p-5">
      <div className="w-full">
        <p className="text-xl font-bold text-center">Register Your Account</p>
        <div className="flex items-center justify-center">
          <div className="flex flex-col w-[400px] gap-3 mt-5">
            <Input type="name" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="passwordRepeat" placeholder="Confirm Password" />
            <Select options={optionsRole} />
            <Input type="profilePictureUrl" placeholder="Profile Pict URL" />
            <Input type="phoneNumber" placeholder="Phone Number" />
            <Button>Register</Button>
            <p className="text-sm">
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-blue-700 text-sm">
                Login
              </Link>
            </p>
            {/* gua mute bentar yak */}
          </div>
        </div>
      </div>
      <div className={bgStyle}></div>
    </div>
  );
};

export default Register;
