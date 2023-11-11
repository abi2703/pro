// import React, { useState, useEffect } from 'react';
// import {
//   Button,
//   Modal,
//   Form,
//   Table,
//   Badge,
//   OverlayTrigger,
//   Tooltip,
// } from 'react-bootstrap';
// import {
//   BsFillEyeFill,
//   BsTrash,
//   BsPencil,
//   BsDownload,
// } from 'react-icons/bs';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// // import * as Icon from 'react-bootstrap-icons'
// import '../styles/Navbar.css'
// import AddIcon from '@mui/icons-material/Add';
// import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
// const InvoicePopup = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [selectedCourses, setSelectedCourses] = useState([]);
//   const [amountPaid, setAmountPaid] = useState(0);
//   const [invoiceId, setInvoiceId] = useState('');
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [invoiceData, setInvoiceData] = useState([]);
//   // const [invoiceData, setInvoiceData] = useState(() => {
//   //   // Initialize with data from localStorage
//   //   const storedData = localStorage.getItem('invoiceData');
//   //   return storedData ? JSON.parse(storedData) : [];
//   // });

//   const courses = [
//     { id: 1, name: 'FULL STACK', amount: 5000 },
//     { id: 2, name: 'JAVASCRIPT', amount: 3000 },
//     { id: 3, name: 'FRONTEND', amount: 2000 },
//   ];

//   const handleClose = () => setShowModal(false);
//   const handleShow = () => {
//     generateInvoiceId();
//     setShowModal(true);
//   }
//   const handleDropdownChange = (e) => {
//     const courseId = parseInt(e.target.value, 10);
//     const selectedCourse = courses.find((course) => course.id === courseId);

//     if (selectedCourse) {
//       setSelectedCourses((prevSelected) => [...prevSelected, selectedCourse]);
//     }
//   };

//   const handleDeleteCourse = (courseId) => {
//     setSelectedCourses((prevSelected) =>
//       prevSelected.filter((course) => course.id !== courseId)
//     );
//   };

//   const calculateTotalAmount = () => {
//     return selectedCourses.reduce((total, course) => total + course.amount, 0);
//   };

//   const calculateRemainingAmount = () => {
//     return calculateTotalAmount() - amountPaid;
//   };

//   const handlePaymentStatus = () => {
//     const remainingAmount = calculateRemainingAmount();

//     if (amountPaid === 0) {
//       return <Badge bg="danger">Unpaid</Badge>;
//     } else if (remainingAmount === 0) {
//       return <Badge bg="success">Paid</Badge>;
//     } else {
//       return (
//         <Badge bg="warning">
//           Partially Paid (Remaining: Rs: {remainingAmount})
//         </Badge>
//       );
//     }
//   };

//   const handlePaymentSubmit = () => {
//     const newInvoice = {
//       name,
//       email,
//       address,
//       invoiceId,
//       date: selectedDate.toLocaleDateString(),
//       selectedCourses,
//       amountPaid,
//       totalAmount: calculateTotalAmount(),
//       paymentStatus: handlePaymentStatus(),
//     };
//     const handleClose = () => {
//       resetForm();
//       setShowModal(false);
//     };
  
//     const resetForm = () => {
//       setName('');
//       setEmail('');
//       setAddress('');
//       setSelectedCourses([]);
//       setAmountPaid(0);
//     };

//   //   setInvoiceData((prevData) => [...prevData, newInvoice]);
//   //   // Add logic for further processing or submission
//   //   // Reset state and close modal if needed
//   //   resetForm();
//   //   handleClose();
//   // };
//   setInvoiceData((prevData) => [...prevData, newInvoice]);
//   localStorage.setItem('invoiceData', JSON.stringify([...invoiceData, newInvoice]));

//   resetForm();
//   handleClose();
// };



//   const generateInvoiceId = () => {
//     const currentDate = new Date();
//     const year = currentDate.getFullYear().toString().slice(-2);
//     const month = (`0${currentDate.getMonth() + 1}`).slice(-2);
//     const day = (`0${currentDate.getDate()}`).slice(-2);

//     // Incrementing the 4-digit number for each invoice
//     const lastInvoiceNumber = parseInt(localStorage.getItem('lastInvoiceNumber'), 10) || 0;
//     const newInvoiceNumber = (lastInvoiceNumber + 1).toString().padStart(3, '0');
//     localStorage.setItem('lastInvoiceNumber', newInvoiceNumber);

//     setInvoiceId(`${year}CBINV${month}${day}${newInvoiceNumber}`);
//   };

//   useEffect(() => {
//     // You can perform any additional logic here when the component mounts
//     // const storedInvoiceData = JSON.parse(localStorage.getItem('invoiceData')) || [];
//     // setInvoiceData(storedInvoiceData);
//   }, []);

//   const handleView = (invoiceId) => {
//     // Add logic to handle the view action
//     console.log('View Invoice:', invoiceId);
//   };

//   const handleEdit = (invoiceId) => {
//     // Add logic to handle the edit action
//     console.log('Edit Invoice:', invoiceId);
//   };

//   const handleDelete = (invoiceId) => {
//     // Add logic to handle the delete action
//     setInvoiceData((prevData) =>
//       prevData.filter((invoice) => invoice.id !== invoiceId)
//     );
//     localStorage.setItem('invoiceData', JSON.stringify(
//       invoiceData.filter((invoice) => invoice.id !== invoiceId)
//     ));
//     // console.log('Delete Invoice:', invoiceId);
//   };

//   const handleDownload = (invoiceId) => {
//     // Add logic to handle the download action
//     console.log('Download Invoice:', invoiceId);
//   };

//   return (
    
//       <div className='topic'>
//   <h1>
//     Invoices
//   </h1>
//    <hr className='line'></hr>
//      <Button className='btn1' variant="primary" onClick={handleShow}>
//      <AddIcon/>
//         Create Invoice
//        </Button>
//  {/* <button className='btn1'><AddIcon/>Create Invoice</button> */}
//       <Button className='btn2'variant="primary" onClick={handleShow}>
//       <SpeakerNotesIcon/>
//         View Invoice
//       </Button>

//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Invoice Information</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="name">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group controlId="invoiceId">
//               <Form.Label>Invoice ID</Form.Label>
//               <Form.Control type="text" value={invoiceId} readOnly />
//             </Form.Group>
//             <Form.Group controlId="address">
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder="Enter your address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group controlId="date">
//               <Form.Label>Select Date</Form.Label>
//               <DatePicker
//                 selected={selectedDate}
//                 onChange={(date) => setSelectedDate(date)}
//                 dateFormat="dd/MM/yyyy"
//               />
//             </Form.Group>

//             <Form.Group controlId="courseDropdown">
//               <Form.Label>Select Courses:</Form.Label>
//               <Form.Select onChange={handleDropdownChange} multiple>
//                 {courses.map((course) => (
//                   <option key={course.id} value={course.id}>
//                     {course.name} - Rs: {course.amount}
//                   </option>
//                 ))}
//               </Form.Select>
//             </Form.Group>

//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>Course</th>
//                   <th>Amount</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {selectedCourses.map((course) => (
//                   <tr key={course.id}>
//                     <td>{course.name}</td>
//                     <td>Rs: {course.amount}</td>
//                     <td>
//                       <Button
//                         variant="danger"
//                         onClick={() => handleDeleteCourse(course.id)}
//                       >
//                         Delete
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>

//             <strong>Total Amount: Rs: {calculateTotalAmount()}</strong>
//             <Form>
//               <Form.Group controlId="amountPaid">
//                 <Form.Label>Amount Paid:</Form.Label>
//                 <Form.Control
//                   type="number"
//                   value={amountPaid}
//                   onChange={(e) => setAmountPaid(e.target.value)}
//                 />
//               </Form.Group>
//               <div>{handlePaymentStatus()}</div>
//             </Form>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handlePaymentSubmit}>
//             Submit Payment
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#Invoice Number</th>
//             <th>Invoice Date</th>
//             <th>Customer Name</th>
//             {/* <th>Email</th> */}
            
//             {/* <th>Address</th> */}
//             {/* <th>Total Amount</th> */}
//             <th>Payment Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {invoiceData.map((invoice) => (
//             <tr key={invoice.id}>
//               <td>{invoice.invoiceId}</td>
//               <td>{invoice.date}</td>
//               <td>{invoice.name}</td>
//               <td>{invoice.paymentStatus}</td>
//               {/* <td>{invoice.email}</td> */}
//               {/* <td>{invoice.address}</td> */}
//               {/* <td>Rs: {invoice.totalAmount}</td> */}
              
//               <td>
//                 <OverlayTrigger
//                   overlay={<Tooltip id={`view-tooltip-${invoice.id}`}>View</Tooltip>}
//                 >
//                   <Button variant="info" onClick={() => handleView(invoice.id)}>
//                     <BsFillEyeFill />
//                   </Button>
//                 </OverlayTrigger>

//                 <OverlayTrigger
//                   overlay={<Tooltip id={`edit-tooltip-${invoice.id}`}>Edit</Tooltip>}
//                 >
//                   <Button
//                     variant="warning"
//                     onClick={() => handleEdit(invoice.id)}
//                   >
//                     <BsPencil />
//                   </Button>
//                 </OverlayTrigger>

//                 <OverlayTrigger
//                   overlay={<Tooltip id={`delete-tooltip-${invoice.id}`}>Delete</Tooltip>}
//                 >
//                   <Button
//                     variant="danger"
//                     onClick={() => handleDelete(invoice.id)}
//                   >
//                     <BsTrash />
//                   </Button>
//                 </OverlayTrigger>

//                 <OverlayTrigger
//                   overlay={<Tooltip id={`download-tooltip-${invoice.id}`}>Download</Tooltip>}
//                 >
//                   <Button
//                     variant="success"
//                     onClick={() => handleDownload(invoice.id)}
//                   >
//                     <BsDownload />
//                   </Button>
//                 </OverlayTrigger>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default InvoicePopup;
import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  Form,
  Table,
  Badge,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import {
  BsFillEyeFill,
  BsTrash,
  BsPencil,
  BsDownload,
} from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import * as Icon from 'react-bootstrap-icons'
import '../styles/Navbar.css'
import AddIcon from '@mui/icons-material/Add';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
const InvoicePopup = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [amountPaid, setAmountPaid] = useState(0);
  const [invoiceId, setInvoiceId] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [invoiceData, setInvoiceData] = useState([]);
  // const [invoiceData, setInvoiceData] = useState(() => {
  //   // Initialize with data from localStorage
  //   const storedData = localStorage.getItem('invoiceData');
  //   return storedData ? JSON.parse(storedData) : [];
  // });

  const courses = [
    { id: 1, name: 'FULL STACK', amount: 5000 },
    { id: 2, name: 'JAVASCRIPT', amount: 3000 },
    { id: 3, name: 'FRONTEND', amount: 2000 },
  ];

  const handleClose = () => setShowModal(false);
  const handleShow = () => {
    generateInvoiceId();
    setShowModal(true);
  }
  const handleDropdownChange = (e) => {
    const courseId = parseInt(e.target.value, 10);
    const selectedCourse = courses.find((course) => course.id === courseId);

    if (selectedCourse) {
      setSelectedCourses((prevSelected) => [...prevSelected, selectedCourse]);
    }
  };

  const handleDeleteCourse = (courseId) => {
    setSelectedCourses((prevSelected) =>
      prevSelected.filter((course) => course.id !== courseId)
    );
  };

  const calculateTotalAmount = () => {
    return selectedCourses.reduce((total, course) => total + course.amount, 0);
  };

  const calculateRemainingAmount = () => {
    return calculateTotalAmount() - amountPaid;
  };

  const handlePaymentStatus = () => {
    const remainingAmount = calculateRemainingAmount();

    if (amountPaid === 0) {
      return <Badge bg="danger">Unpaid</Badge>;
    } else if (remainingAmount === 0) {
      return <Badge bg="success">Paid</Badge>;
    } else {
      return (
        <Badge bg="warning">
          Partially Paid (Remaining: Rs: {remainingAmount})
        </Badge>
      );
    }
  };

  const handlePaymentSubmit = () => {
    if (!name || !email || !address || selectedCourses.length ===0){
      alert('Please fill in all details before submitting.' );
      return;
    }
    const newInvoice = {
      name,
      email,
      address,
      invoiceId,
      date: selectedDate.toLocaleDateString(),
      selectedCourses,
      amountPaid,
      totalAmount: calculateTotalAmount(),
      paymentStatus: handlePaymentStatus(),
    };
    const handleClose = () => {
      resetForm();
      setShowModal(false);
    };
  
    const resetForm = () => {
      setName('');
      setEmail('');
      setAddress('');
      setSelectedCourses([]);
      setAmountPaid(0);
    };

  //   setInvoiceData((prevData) => [...prevData, newInvoice]);
  //   // Add logic for further processing or submission
  //   // Reset state and close modal if needed
  //   resetForm();
  //   handleClose();
  // };
  setInvoiceData((prevData) => [...prevData, newInvoice]);
  localStorage.setItem('invoiceData', JSON.stringify([...invoiceData, newInvoice]));

  resetForm();
  handleClose();
};



  const generateInvoiceId = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString().slice(-2);
    const month = (`0${currentDate.getMonth() + 1}`).slice(-2);
    const day = (`0${currentDate.getDate()}`).slice(-2);

    // Incrementing the 4-digit number for each invoice
    const lastInvoiceNumber = parseInt(localStorage.getItem('lastInvoiceNumber'), 10) || 0;
    const newInvoiceNumber = (lastInvoiceNumber + 1).toString().padStart(3, '0');
    localStorage.setItem('lastInvoiceNumber', newInvoiceNumber);

    setInvoiceId(`${year}CBINV${month}${day}${newInvoiceNumber}`);
  };

  useEffect(() => {
    // You can perform any additional logic here when the component mounts
    // const storedInvoiceData = JSON.parse(localStorage.getItem('invoiceData')) || [];
    // setInvoiceData(storedInvoiceData);
  }, []);

  const handleView = (invoiceId) => {
    // Add logic to handle the view action
    console.log('View Invoice:', invoiceId);
  };

  const handleEdit = (invoiceId) => {
    // Add logic to handle the edit action
    console.log('Edit Invoice:', invoiceId);
  };

  const handleDelete = (invoiceId) => {
    // Add logic to handle the delete action
    setInvoiceData((prevData) =>
      prevData.filter((invoice) => invoice.id !== invoiceId)
    );
    localStorage.setItem('invoiceData', JSON.stringify(
      invoiceData.filter((invoice) => invoice.id !== invoiceId)
    ));
    // console.log('Delete Invoice:', invoiceId);
  };

  const handleDownload = (invoiceId) => {
    // Add logic to handle the download action
    console.log('Download Invoice:', invoiceId);
  };

  return (
    
      <div className='topic'>
  <h1>
    Invoices
  </h1>
   <hr className='line'></hr>
     <Button className='btn1' variant="primary" onClick={handleShow}>
     <AddIcon/>
        Create Invoice
       </Button>
 {/* <button className='btn1'><AddIcon/>Create Invoice</button> */}
      <Button className='btn2'variant="primary" onClick={handleShow}>
      <SpeakerNotesIcon/>
        View Invoice
      </Button>
<br></br>
<br></br>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Invoice Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="invoiceId">
              <Form.Label>Invoice ID</Form.Label>
              <Form.Control type="text" value={invoiceId} readOnly />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="date">
              <Form.Label>Select Date</Form.Label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
              />
            </Form.Group>

            <Form.Group controlId="courseDropdown">
              <Form.Label>Select Courses:</Form.Label>
              <Form.Select onChange={handleDropdownChange} multiple>
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name} - Rs: {course.amount}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {selectedCourses.map((course) => (
                  <tr key={course.id}>
                    <td>{course.name}</td>
                    <td>Rs: {course.amount}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteCourse(course.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <strong>Total Amount: Rs: {calculateTotalAmount()}</strong>
            <Form>
              <Form.Group controlId="amountPaid">
                <Form.Label>Amount Paid:</Form.Label>
                <Form.Control
                  type="number"
                  value={amountPaid}
                  onChange={(e) => setAmountPaid(e.target.value)}
                />
              </Form.Group>
              <div>{handlePaymentStatus()}</div>
            </Form>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePaymentSubmit}>
            Submit Payment
          </Button>
        </Modal.Footer>
      </Modal>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#Invoice Number</th>
            <th>Invoice Date</th>
            <th>Customer Name</th>
            {/* <th>Email</th> */}
            
            {/* <th>Address</th> */}
            {/* <th>Total Amount</th> */}
            <th>Payment Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.invoiceId}</td>
              <td>{invoice.date}</td>
              <td>{invoice.name}</td>
              <td>{invoice.paymentStatus}</td>
              {/* <td>{invoice.email}</td> */}
              {/* <td>{invoice.address}</td> */}
              {/* <td>Rs: {invoice.totalAmount}</td> */}
              
              <td>
                <OverlayTrigger
                  overlay={<Tooltip id={`view-tooltip-${invoice.id}`}>View</Tooltip>}
                >
                  <Button variant="info" onClick={() => handleView(invoice.id)}>
                    <BsFillEyeFill />
                  </Button>
                </OverlayTrigger>

                <OverlayTrigger
                  overlay={<Tooltip id={`edit-tooltip-${invoice.id}`}>Edit</Tooltip>}
                >
                  <Button
                    variant="warning"
                    onClick={() => handleEdit(invoice.id)}
                  >
                    <BsPencil />
                  </Button>
                </OverlayTrigger>

                <OverlayTrigger
                  overlay={<Tooltip id={`delete-tooltip-${invoice.id}`}>Delete</Tooltip>}
                >
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(invoice.id)}
                  >
                    <BsTrash />
                  </Button>
                </OverlayTrigger>

                <OverlayTrigger
                  overlay={<Tooltip id={`download-tooltip-${invoice.id}`}>Download</Tooltip>}
                >
                  <Button
                    variant="success"
                    onClick={() => handleDownload(invoice.id)}
                  >
                    <BsDownload />
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default InvoicePopup;