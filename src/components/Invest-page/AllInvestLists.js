"use client";

import React, { useState } from "react";
import { Table, Pagination, Form, InputGroup, Button } from "react-bootstrap";

const AllInvestLists = ({ data }) => {
  console.log(data)
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [investmentsPerPage] = useState(10);
  
    //  ................................Ensure data is an array before using filter
   // ...................Ensure data is an array before using filter
   const filteredInvestments = Array.isArray(data) ? data.filter(investment =>
    investment.projectInfo && 
    investment.projectInfo.projectTitle &&
    investment.projectInfo.projectTitle.toLowerCase().startsWith(searchQuery.trim().toLowerCase())
  ) : [];
  

    // ........................................................Pagination logic (assuming the existing code follows)

    // .....................................Pagination logic
    const indexOfLastInvestment = currentPage * investmentsPerPage;
    const indexOfFirstInvestment = indexOfLastInvestment - investmentsPerPage;
    const currentInvestments = filteredInvestments.slice(indexOfFirstInvestment, indexOfLastInvestment);
    const totalPages = Math.ceil(filteredInvestments.length / investmentsPerPage);
  
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
      setCurrentPage(1); // ......................Reset to first page on new search
    };
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <>
        <div className="mb-3 d-flex justify-content-end align-items-center">
          <InputGroup style={{ width: '300px' }}>
            <Form.Control
              type="text"
              placeholder="Search by project title"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Button style={{backgroundColor:"#00bab3",color:"white"}}>Search</Button>
          </InputGroup>
        </div>
        
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>No</th>
              <th>Project Title</th>
              <th>Project Address</th>
              <th>Investment Value</th>
              <th>Minimum Investment Value</th>
              <th>Project Annual Capital Appreciation</th>
              <th>Investment Amount</th>
              <th>Total Investment Amount</th>
              <th>Payment Fee</th>
              <th>Return Type</th>
              <th>Duration of Invest</th>
              <th>Payment Method</th>
              <th>Status</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {currentInvestments.map((investment, index) => (
              <tr key={investment._id}>
                <td>{indexOfFirstInvestment + index + 1}</td>
                <td>{investment.projectInfo.projectTitle}</td>
                <td>{investment.projectInfo.projectAddress}</td>
                <td>{investment.projectInfo.investMentValue?.toLocaleString()}</td>
                <td>{investment.projectInfo.minimumInvestValue?.toLocaleString()}</td>
                <td>{investment.projectInfo.projectAnnualCapitalAppreciation}</td>
                <td>{investment.investAmount}</td>
                <td>{investment.totalInvestAmount?.toLocaleString()}</td>
                <td>{investment.paymentFee?.toLocaleString()}</td>
                <td>{investment.returnType}</td>
                <td>{investment.durationOfInvest}</td>
                <td>{investment.paymentMethod}</td>
                <td>{investment.status}</td>
                <td>{investment.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
  
        <div className="d-flex justify-content-end">
          <Pagination>
            <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
            {Array.from({ length: totalPages }, (_, index) => (
              <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
            <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
          </Pagination>
        </div>
      </>
    );
  };
  
  export default AllInvestLists;
  

