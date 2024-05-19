"use client";

import { serverBaseUrl } from "@/dataFetching/baseUrl";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const AddPRManager = ({ projects }) => {
  const MySwal = withReactContent(Swal);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const prManagerData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      phone: formData.get("phone"),
      projectId: formData.get("projectId"),
      address: formData.get("address"),
      role: formData.get("role"),
    };
    try {
      await axios.post(`${serverBaseUrl}/admin-users`, prManagerData);
      MySwal.fire("Good job!", "successfully added", "success");
    } catch (err) {
      MySwal.fire("Something Error Found.", "warning");
    }
  };

  return (
    <>
      {/* End nav tabs */}
      <form onSubmit={handleSubmit}>
        <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
          <h4 className="title fz17 mb30">PR Manager</h4>
          <div className="form-style1">
            <div className="row">
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw600 mb10">
                    PR Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="PR Manager Name"
                    name="name"
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="mb30">
                  <label className="heading-color ff-heading fw600 mb10">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                    name="email"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb30">
                  <label className="heading-color ff-heading fw600 mb10">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    name="password"
                  />
                </div>
              </div>
              {/* End .col-6 */}

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
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="mb30">
                  <label className="heading-color ff-heading fw600 mb10">
                    Property Name
                  </label>

                  <select
                    className=""
                    style={{
                      width: "100%",
                      height: "50px",
                      borderRadius: "5px",
                    }}
                    name="projectId"
                  >
                    {projects?.data.map((project) => (
                      <option
                        key={project?._id}
                        style={{
                          borderRadius: 0,
                        }}
                        value={project?._id}
                      >
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

                  <select
                    className=""
                    style={{
                      width: "100%",
                      height: "50px",
                      borderRadius: "5px",
                    }}
                    name="role"
                  >
                    <option>Super Admin</option>
                    <option>Admin</option>
                    <option>PR Manager</option>
                  </select>
                </div>
              </div>
              {/* End .col-6 */}

              <div className="col-sm-6">
                <div className="mb30">
                  <label className="heading-color ff-heading fw600 mb10">
                    PR Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="PR Address"
                    name="address"
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
