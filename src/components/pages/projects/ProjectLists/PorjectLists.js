"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import toast, { Toaster } from "react-hot-toast";

const ProjectLists = ({ data }) => {
  return (
    <>
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>No</th>
            <th>Project</th>
            <th>Project Title</th>
            <th>Project Value</th>
            <th>Minimum Investment</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((project, index) => (
            <tr key={project._id}>
              <td>{index + 1}</td>
              <td>
                <div className="list-thumb">
                  <Image
                    width={100}
                    height={70}
                    src={`https://investment-server-a1qr.onrender.com/${project.projectPicture[0]}`}
                    alt="Poroject Picture"
                  />
                </div>
              </td>
              <td>{project?.projectTitle}</td>

              <td> Tk {project?.totalProjectValue}</td>

              <td>Tk {project?.minimumInvestmentValue}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ProjectLists;
