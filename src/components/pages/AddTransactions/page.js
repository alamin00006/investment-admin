'use client'
import React, { useState, useEffect } from 'react';
import { Table, Pagination, Form, InputGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const AddTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(10);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const mockTransactions = response.data.map((item, index) => ({
          id: index + 1,
          transactionId: `TX${index + 1}`,
          transactionDate: new Date().toLocaleDateString(),
          sender: `Sender ${index + 1}`,
          recipient: `Recipient ${index + 1}`,
          transactionAmount: Math.floor(Math.random() * 10000),
          currency: 'BDT',
          description: `Transaction description ${index + 1}`,
          status: index % 2 === 0 ? 'Completed' : 'Pending',
          transactionType: index % 2 === 0 ? 'Credit' : 'Debit',
          transactionFee: Math.floor(Math.random() * 100),
          referenceId: `REF${index + 1}`,
        }));
        setTransactions(mockTransactions);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        toast.error('Failed to fetch transactions');
      }
    };

    fetchTransactions();
  }, []);

  const filteredTransactions = transactions.filter(transaction =>
    transaction.transactionId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
  const totalPages = Math.ceil(filteredTransactions.length / transactionsPerPage);

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const handleActionClick = (id, action) => {
    toast.success(`Performing ${action} action for transaction id ${id}`);
    // Implement action logic here (e.g., edit or delete transaction)
  };

  return (
    <>
      <div className="mb-3 d-flex justify-content-end align-items-center">
        <InputGroup style={{ width: '300px' }}>
          <Form.Control
            type="text"
            placeholder="Search by transaction ID"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button style={{ backgroundColor: '#00bab3', color: 'white' }}>Search</Button>
        </InputGroup>
      </div>

      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>No</th>
            <th>Transaction ID</th>
            <th>Transaction Date</th>
            <th>Sender</th>
            <th>Recipient</th>
            <th>Transaction Amount</th>
            <th>Currency</th>
            <th>Description</th>
            <th>Status</th>
            <th>Transaction Type</th>
            <th>Transaction Fee</th>
            <th>Reference ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map((transaction, index) => (
            <tr key={transaction.id}>
              <td>{indexOfFirstTransaction + index + 1}</td>
              <td>{transaction.transactionId}</td>
              <td>{transaction.transactionDate}</td>
              <td>{transaction.sender}</td>
              <td>{transaction.recipient}</td>
              <td>{transaction.transactionAmount}</td>
              <td>{transaction.currency}</td>
              <td>{transaction.description}</td>
              <td>{transaction.status}</td>
              <td>{transaction.transactionType}</td>
              <td>{transaction.transactionFee}</td>
              <td>{transaction.referenceId}</td>
              <td>
                <Button variant="info" size="sm" onClick={() => handleActionClick(transaction.id, 'edit')}>
                  Edit
                </Button>{' '}
                <Button variant="danger" size="sm" onClick={() => handleActionClick(transaction.id, 'delete')}>
                  Delete
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

export default AddTransactions;


