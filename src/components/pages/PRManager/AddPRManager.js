"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import useUser from "@/app/hooks/useUser";

const AddPRManager = ({ projects }) => {
  const MySwal = withReactContent(Swal);
  const [showPassword, setShowPassword] = useState(false);

  const { user } = useUser();
  console.log(user);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      phone: formData.get("phone"),
      projectId: formData.get("projectId"),
      address: formData.get("address"),
      role: formData.get("role"),
      gender: formData.get("gender"),
    };

    try {
      await axios.post(
        "https://investment-server-a1qr.onrender.com/api/v1/admin-users/create-admin-user",
        userData
      );
      MySwal.fire("Good job!", "Successfully added", "success");
    } catch (err) {
      console.error("Error:", err);
      MySwal.fire("Something went wrong.", "Please try again later.", "error");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
          <h4 className="title fz17 mb30 bg-orange">New User Form</h4>
          <div className="form-style1">
            <div className="row">
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw600 mb10">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add User Name"
                    name="name"
                    required
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="mb30">
                  <label className="heading-color ff-heading fw600 mb10">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    name="email"
                    required
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="mb30">
                  <label className="heading-color ff-heading fw600 mb10">
                    Password
                  </label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      placeholder="Enter Password"
                      name="password"
                      required
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={toggleShowPassword}
                    >
                      {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="mb30">
                  <label className="heading-color ff-heading fw600 mb10">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile Number"
                    name="phone"
                    required
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="mb30">
                  <label className="heading-color ff-heading fw600 mb10">
                    Property Name
                  </label>
                  <select className="form-select" name="projectId" required>
                    {projects?.data.map((project) => (
                      <option key={project?._id} value={project?._id}>
                        {project?.projectTitle}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="mb30">
                  <label className="heading-color ff-heading fw600 mb10">
                    Role
                  </label>
                  <select className="form-select" name="role" required>
                    <option value="superAdmin">Super Admin</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="prManager">PR Manager</option>
                  </select>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="mb30">
                  <label className="heading-color ff-heading fw600 mb10">
                    Gender
                  </label>
                  <select className="form-select" name="gender" required>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="mb30">
                  <label className="heading-color ff-heading fw600 mb10">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="New User Address"
                    name="address"
                    required
                  />
                </div>
              </div>

              <div className="d-flex justify-content-end p-2">
                <button
                  type="submit"
                  className="ud-btn btn-dark"
                  style={{ width: 175 }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddPRManager;
