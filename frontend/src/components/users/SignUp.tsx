import React, {useState} from 'react'
import instalogo from '../../images/insta.webp'

interface UserDetails {
  email: string;
  password: string;
  userName: string;
  fullName: string;
}

const SignUp: React.FC = () => {
  const [details, setDetails] = useState<UserDetails>({
    email: "",
    password: "",
    userName: "",
    fullName: "",
  });

  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [fullNameError, setFullNameError] = useState<boolean>(false);
  const [userNameError, setUserNameError] = useState<boolean>(false);

  const emailHandler = (e:any) => {
    setDetails((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
      if(e.target.value.length > 4) {
          setEmailError(false)
      }
  }

  const passwordHandler = (e:any) => {
    setDetails((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    if(e.target.value.length > 5 ) {
        setPasswordError(false)
    }
  }

  const fullNameHandler = (e:any) => {
    setDetails((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    if(e.target.value.length > 3) {
        setFullNameError(false)
    }
  }

  const userNameHandler = (e:any) => {
    setDetails((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    if(e.target.value.length > 0) {
        setUserNameError(false)
    }
  }

  const submitHandler = () => {
    let isValid = true

    if(details?.email?.length < 4) {
      setEmailError(true)
      isValid = false
    }
    if(details?.password?.length < 6) {
      setPasswordError(true)
      isValid = false
    }
    if(details?.fullName?.length < 3) {
      setFullNameError(true)
      isValid = false
    }
    if(details?.userName?.length === 0) {
      setUserNameError(true)
      isValid = false
    }

    if(isValid) {
      setDetails({
        email: "",
        password: "",
        userName: "",
        fullName: "",
      })
    }
  }
console.log(details)
  return (
    <>
      <div className='flex flex-col justify-center items-center mt-5 mb-20'>
        <div className='w-2/7 p-10 border-1 border-[#d1cbcb] bg-[#f9f9f9] flex flex-col items-center gap-3'>
          <div className='w-1/2'>
            <img src={instalogo} alt="" className='w-full h-full object-contain'/>
          </div>
          <div className='text-center font-bold opacity-60 leading-5'>Sign up to see photos and videos from your friends.</div>
          <div>
            <img src="" alt="" />
            <div className='bg-blue-400 text-white rounded-md px-10 py-1 mt-2'>Login with Google</div>
          </div>
          <div className='font-bold opacity-60 text-sm my-1'>OR</div>
          <div>
            <input className='text-sm border-1 border-[#d1cbcb] p-2 w-full mb-2 rounded-sm outline-none focus:border-gray-500'
             type="email" name='email' value={details.email === undefined ? '' : details.email} placeholder='Email' onChange={emailHandler}/>
            {/* {emailError && <div className="text-red-700 -mt-2 mb-1 text-xs">Enter valid Email</div>} */}

            <input className='text-sm border-1 border-[#d1cbcb] p-2 w-full mb-2 rounded-sm outline-none focus:border-gray-500'
             type="text" name='fullName' value={details.fullName === undefined ? '' : details.fullName}  placeholder='Full Name' onChange={fullNameHandler}/>
            {fullNameError && <div className="text-red-700 -mt-2 mb-1 text-xs">Enter valid Name</div>}

            <input className='text-sm border-1 border-[#d1cbcb] p-2 w-full mb-2 rounded-sm outline-none focus:border-gray-500'
             type="text" name='userName' value={details.userName === undefined ? '' : details.userName}  placeholder='Username' onChange={userNameHandler}/>
            {userNameError && <div className="text-red-700 -mt-2 mb-1 text-xs">Enter valid user name</div>}

            <input className='text-sm border-1 border-[#d1cbcb] p-2 w-full mb-2 rounded-sm outline-none focus:border-gray-500'
             type="password" name='password' value={details.password === undefined ? '' : details.password}  placeholder='Password' onChange={passwordHandler}/>
            {passwordError && <div className="text-red-700 -mt-2 mb-1 text-xs">Password is too short</div>}

          </div>
          <div className='text-xs text-center px-2'>People who use our service may have uploaded your contact information to Instagram. Learn More</div>
          <div className='text-xs text-center px-2 pt-1'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</div>
          <button className='cursor-pointer bg-[#4cb5f9] w-full text-sm font-bold text-white rounded-md py-2 mt-3'
          onClick={submitHandler}>Sign up</button>
        </div>
        <div className='w-2/7 mt-4 border-1 border-[#d1cbcb] bg-[#f9f9f9] text-center p-4'>
            <div className='text-sm'>Have an account? Log in</div>
        </div>
        <div className='text-xs text-gray-400 mt-3'>© 2024 Instagram from Meta</div>
      </div>
    </>
  )
}

export default SignUp