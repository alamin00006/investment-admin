"use client";

import { AuthContext } from "@/app/contexts/UserProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const router = useRouter();
  const [loginError, setLoginError] = useState("");
  const { loginUser, user } = useContext(AuthContext);

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      await loginUser(email, password);

      if (user?.role === "admin") {
        router.push("/dashboard-my-properties");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message === "User not found"
      ) {
        router.push("/");
      } else {
        setLoginError("Invalid email or password");
      }
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <form className="form-style1" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb25">
        <label className="form-label fw600 dark-color">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
          {...register("email", {
            required: true,
          })}
          required
        />
      </div>
      {/* End email */}

      <div className="mb15">
        <label className="form-label fw600 dark-color">Password</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be 6 characters long",
            },
            pattern: {
              value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
              message:
                "Password must have uppercase, number and special characters",
            },
          })}
          required
        />
      </div>
      {/* End Password */}

      <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
        <label className="custom_checkbox fz14 ff-heading">
          Remember me
          <input type="checkbox" defaultChecked="checked" />
          <span className="checkmark" />
        </label>
        {/* <a className="fz14 ff-heading" href="#">
          Lost your password?
        </a> */}
      </div>
      {/* End  Lost your password? */}

      <div className="d-grid mb20">
        <button className="ud-btn btn-thm" type="submit">
          Sign in <i className="fal fa-arrow-right-long" />
        </button>
      </div>
    </form>
  );
};

export default SignIn;
