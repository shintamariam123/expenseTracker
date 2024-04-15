import React, {useState} from 'react'
// import Header from '../components/Header'
import { Navbar,Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { Form, FloatingLabel } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../services/allAPI'

function Auth({ insideRegister }) {
  const navigate = useNavigate()

    const [userInputs,setUserInputs] = useState({
        username:"", email:"", password:""
      })
      console.log(userInputs);


      const handleRegister = async (e)=>{
        e.preventDefault()
        if(userInputs.username && userInputs.email && userInputs.password){
          // api call
          try{
            const result = await registerAPI(userInputs)
            console.log(result);
            if(result.status==200){
              toast.success(`Welcome ${result.data.username}... Please login to explore our website!!! `)
              setUserInputs({username:"",email:"",password:""})
              setTimeout(()=>{
                navigate('/login')
              },2000);
            }else{
              toast.error(result.response.data)
              setTimeout(()=>{
                setUserInputs({username:"",email:"",password:""})
              })
            }
          }catch(err){
            console.log(err);
          }
        }else{
        toast.warning("Please fill the form completely!!!")
    
        }
      }


      const handleLogin = async (e)=>{
        e.preventDefault()
        if(userInputs.email && userInputs.password){
          // api call
          try{
            const result  = await loginAPI(userInputs)
            if(result.status==200){
              //store exinguisher and token
              sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
              sessionStorage.setItem("token",result.data.token)
    
              toast.success(`Welcome ${result.data.existingUser.username}... `)
              setUserInputs({username:"",email:"",password:""})
              setTimeout(()=>{
                navigate('/profile')
              },2000);
            }else{
              toast.error(result.response.data)
             
          }
        }
        catch(err){
            console.log(err);
          }
    
        }else{
          toast.warning("Please fill the form completely!!!")
    
        }
      }
    return (
        <div>
            {/* <Header /> */}
            <Navbar style={{backgroundColor:'black'}} className="d-flex align-items-center justify-content-between  w-100">
<Container>
    <Navbar.Brand>
        <Link to={'/'} style={{textDecoration:'none',color:'orange'}}>
        <i style={{color:'orange'}} className="fa-solid fa-comments-dollar me-3"></i>
       Spend Smartly
        </Link>
    </Navbar.Brand>
    <div>
    <button  style={{border:'1px solid orange',color:'white',fontSize:'14px'}} className='btn '><Link style={{color:'white',textDecoration:'none'}} to={'/login'}>Sign In</Link></button>
    <button  style={{border:'1px solid orange',color:'white',fontSize:'14px'}} className='btn ms-4'> <Link style={{color:'white',textDecoration:'none'}} to={'/register'}>Sign Up</Link></button>
    </div>
   
</Container>
</Navbar>
            <div style={{ height: '100vh',position:'relative' }} className=' row'>
                <div style={{ backgroundColor: 'black' }} className='col-lg-8  d-flex align-items-center justify-content-between'>

                    <p className='ms-5' style={{ fontSize: '60px', fontWeight: '600', color: 'white',marginBottom:'50px' }}>Keep Track of <br />
                        what you are <br /> spending!</p>
                   
                </div>
                <div style={{ backgroundColor: 'orange' }} className='col-lg-4'></div>
                <div  style={{width:'500px',height:'500px',position:'absolute',right:'350px',top:'50px'}} className=' d-flex flex-column '>
                        <Link to={'/'} style={{ textDecoration: 'none',color:'white' }} className='fw-bolder'>
                            <i className='fa-solid fa-arrow-left'></i> Back to Home</Link>
                        <div style={{backgroundColor:'white'}} className='card-shadow p-5'>
                            <h3 style={{color:'orange',fontSize:'40px'}}>
                                <i style={{ color: 'orange' }} className='fa-solid fa-comments-dollar me-2'></i>Spend Smartly
                            </h3>
                            <h6 style={{color:'grey'}} className=' mt-3 mb-2 text-center'>
                                 {insideRegister ? 'New user' : 'Sign in'} 
          
                            </h6>
                            <h5 style={{color:'black'}} className='fw-bolder mt-3 mb-2 text-center'>
                                 {insideRegister ? 'Register' : 'Login to your account'} 
          
                            </h5>
                            <Form>
                {/* forms are controlled by dom so they refresh on clicking button to prevent that control form by react for that  give button onclick function and 
                call that function and prevent default for that evevt */}
                {
                  insideRegister &&
                  <FloatingLabel
                    controlId="floatingInput"
                    label="username"
                    className="mb-3 "
                  >
                    <Form.Control value={userInputs.username} onChange={e=>setUserInputs({...userInputs,username:e.target.value})} type="text" placeholder="Username" />
                  </FloatingLabel>
                }

                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control value={userInputs.email} onChange={e=>setUserInputs({...userInputs,email:e.target.value})}  type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control value={userInputs.password} onChange={e=>setUserInputs({...userInputs,password:e.target.value})}  type="password" placeholder="Password" />
                </FloatingLabel>
                {
                  insideRegister ?
                    <div className='mt-3'>
                      <button style={{backgroundColor:'orange',color:'white',width:'345px',height:'45px'}} onClick={handleRegister} className='btn '>Register</button>
                      <p style={{color:'black'}} className='mt-2'>Already have an account? Click here to <Link style={{color:'orange'}}  to={'/login'}>Login</Link></p>
                    </div>
                    :
                    <div className='mt-3'>
                      <button style={{backgroundColor:'orange',color:'white',width:'345px',height:'45px'}} onClick={handleLogin} className='btn'>Login</button>
                      <p style={{color:'black'}} className='mt-2'>New user? Click here to <Link style={{color:'orange'}} to={'/register'}>Register</Link></p>

                    </div>
                }
              </Form>
                        </div>
                    </div>
            </div>
            <ToastContainer position='top-center' theme='colored' autoClose={3000}/>

        </div>
    )
}

export default Auth