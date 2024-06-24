"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Table, Pagination, Form, InputGroup, Button } from "react-bootstrap";

import toast, { Toaster } from "react-hot-toast";

const ProjectLists = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(10);

  // Filtered projects based on search query
  const filteredProjects = data?.data.filter(
    (project) =>
      project.projectTitle &&
      project.projectTitle
        .toLowerCase()
        .startsWith(searchQuery.trim().toLowerCase())
  );

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="mb-3 d-flex justify-content-end align-items-center">
        <InputGroup style={{ width: "300px" }}>
          <Form.Control
            type="text"
            placeholder="Search by project title"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button style={{ backgroundColor: "#00bab3", color: "white" }}>
            Search
          </Button>
        </InputGroup>
      </div>

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
          {currentProjects.map((project, index) => (
            <tr key={project._id}>
              <td>{indexOfFirstProject + index + 1}</td>
              <td>
                  <div className="list-thumb">
                    <Image
                      width={80}
                      height={60}
                      src={project?.projectPicture?.[0]} 
                      className="cover"
                      style={{ backgroundPosition: "no-repeat" }}
                      alt="Project Picture"
                    />
                  </div>
                </td>

              <td>{project?.projectTitle}</td>
              <td> Tk {project?.totalProjectValue?.toLocaleString()}</td>
              <td>Tk {project?.minimumInvestmentValue?.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-end">
        <Pagination>
          <Pagination.First
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          />
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </>
  );
};

export default ProjectLists;
