import React from 'react'
import { Navbar, Container, Form, FloatingLabel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import chartImg from '../assets/chart.png'
function Profile() {
  return (
    <>
      <Navbar style={{ backgroundColor: 'black' }} className="d-flex align-items-center justify-content-between  w-100">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'orange' }}>
              <i style={{ color: 'orange' }} className="fa-solid fa-comments-dollar me-3"></i>
              Spend Smartly
            </Link>
          </Navbar.Brand>
          <div className='d-flex align-items-center'>
          <button style={{backgroundColor:'black'}} >
          {/* <img style={{width:'30px',height:'30px'}} className='img-fluid' src="https://tse2.mm.bing.net/th?id=OIP.1Gr2sARA6Zrmc5pxf3L21gAAAA&pid=Api&P=0&h=180"/> */}
          <i style={{color:'white'}} className="fa-regular fa-user me-2"></i>
            </button> 
            <h6 className='me-5' style={{color:'white'}}> User</h6>
             
            <button style={{ border: '1px solid orange', color: 'white', fontSize: '14px' }} className='btn '><Link style={{ color: 'white', textDecoration: 'none' }} to={'/'}>Logout</Link></button>
          </div>

        </Container>
      </Navbar>
      <div className='container  mt-5'>
        <Navbar className='card shadow' style={{ backgroundColor: 'orange' }}>
          <h3 style={{ color: 'white' }} className='text-center '>Expense Tracker</h3>
        </Navbar>
        <div  className='d-flex  card shadow w-100 '>
          <div className=''>
            <div className='d-flex flex-column align-items-center'>
              <img src={chartImg} alt="" srcset="" />
              <table>
                <tr>
                 <td>
                 <div className='me-1 border rounded' style={{ width: '10px', height: '25px', backgroundColor: '#cb2d9b' }}> </div>

                 </td>
                 <td>
                 <h5 className='me-5' style={{ color: 'black' }}>Expenses</h5>

                 </td>
                 <td>
                 <h5 className='ms-5' style={{ color: 'black' }}>27%</h5>

                 </td>
                 </tr>

                 <tr>
                  <td>
                  <div className='me-1 border rounded' style={{ width: '10px', height: '25px', backgroundColor: '#02305c' }}> </div>
                  </td>
                  <td>
                  <h5 className='me-5 ' style={{ color: 'black' }}>Savings</h5>
                  </td>
                  <td>
                  <h5 className='ms-5' style={{ color: 'black' }}>38%</h5>
                  </td>
                 </tr>
                 <tr>
                  <td>
                  <div className='me-1 border rounded' style={{ width: '10px', height: '25px', backgroundColor: '#ffc65f' }}> </div>
                  </td>
                  <td>
                  <h5 className='me-5 ' style={{ color: 'black' }}>Invetsment</h5>
                  </td>
                  <td>
                  <h5 className='ms-5' style={{ color: 'black' }}>35%</h5>
                  </td>
                 </tr>
              
               
              </table>
             
            </div>
          </div>
          <div className="row mt-5">
           <div className='col-lg-6'>
             <div className='d-flex align-items-center justify-content-center'>
             <Form>
              <h3>Transaction</h3>
            <FloatingLabel
                    controlId="floatingInput"
                    label="Salary, House, Rent, SIP"
                    className="mb-3"
                  >
                    <Form.Control   type="text" placeholder="Salary, House, Rent, SIP" />
                  </FloatingLabel>
                  <div class="form-floating">
      <select class="form-select mb-3" id="floatingSelectGrid">
        <option selected>Mode</option>
        <option value="1">Investment</option>
        <option value="2">Expense</option>
        <option value="3">Savings</option>
      </select>
      <label for="floatingSelectGrid"></label>
    </div>
                 
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Amount"
                    className="mb-3"
                  >
                    <Form.Control   type="text" placeholder="Amount" />
                  </FloatingLabel>
                  <button style={{backgroundColor:'orange',width:'300px',height:'50px',color:'white'}}>Make Transaction</button>
            </Form>
             </div>
           </div>
           <div className="col-lg-6">
           <div className='d-flex align-items-center justify-content-center'>
            <h3>History</h3>
             </div>
           </div>
          </div>
       
        </div>
      </div>


    </>
  )
}

export default Profile