'use client'
import React, { useState, useEffect } from 'react';
import { Table, Pagination, Form, InputGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { FaRegEdit } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const AddCategories = () => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(10);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/category');
        if (response.data.status === 'success') {
          setCategories(response.data.data);
        } else {
          toast.error('Failed to fetch categories');
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        toast.error('Failed to fetch categories');
      }
    };

    fetchCategories();
  }, []);

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = filteredCategories.slice(indexOfFirstCategory, indexOfLastCategory);
  const totalPages = Math.ceil(filteredCategories.length / categoriesPerPage);

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const handleEditClick = id => {
    toast.success(`Opening edit view for category id ${id}`);
    // Implement edit logic here
  };

  const handleViewClick = id => {
    toast.success(`Opening detailed view for category id ${id}`);
    // Implement view details logic here
  };

  return (
    <>
      <div className="mb-3 d-flex justify-content-end align-items-center">
        <InputGroup style={{ width: '300px' }}>
          <Form.Control
            type="text"
            placeholder="Search by Category Name"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button style={{ backgroundColor: '#00bab3', color: 'white' }}>Search</Button>
        </InputGroup>
      </div>

      <Table striped bordered responsive hover size="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>Category Name</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentCategories.map((category, index) => (
            <tr key={category._id}>
              <td>{indexOfFirstCategory + index + 1}</td>
              <td>{category.name}</td>
              <td>{category.createdAt}</td>
              <td>{category.updatedAt}</td>
              <td>
                <Button variant="info" size="sm" onClick={() => handleEditClick(category._id)} style={{ backgroundColor: 'transparent', border: 'none' }}>
                  <FaRegEdit style={{ fontSize: '16px' }} /> 
                </Button>{' '}
                <Button variant="primary" size="sm" onClick={() => handleViewClick(category._id)} style={{ backgroundColor: 'transparent', border: 'none' }}>
                  <FaRegEye style={{ fontSize: '16px' }} /> 
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-end">
        <Pagination>
          <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
          <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
          <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default AddCategories;
