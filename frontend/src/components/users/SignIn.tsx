import React, {useState} from 'react'
import instalogo from '../../images/insta.webp'

interface UserDetails {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [details, setDetails] = useState<UserDetails>({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

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

    if(isValid) {
      setDetails({
        email: "",
        password: ""
      })
    }
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center mt-5 mb-20'>
        <div className='w-2/7 p-10 border-1 border-[#d1cbcb] bg-[#f9f9f9] flex flex-col items-center gap-3'>
          <div className='w-3/5 mb-4'>
            <img src={instalogo} alt="" className='w-full h-full object-contain'/>
          </div>
          <div>
            <input className='text-sm border-1 border-[#d1cbcb] p-2 w-full mb-2 rounded-sm outline-none focus:border-gray-500'
             type="email" name='email' value={details.email === undefined ? '' : details.email} placeholder='Email or User name' onChange={emailHandler}/>
            {/* {emailError && <div className="text-red-700 -mt-2 mb-1 text-xs">Enter valid Email</div>} */}

            <input className='text-sm border-1 border-[#d1cbcb] p-2 w-full mb-2 rounded-sm outline-none focus:border-gray-500'
             type="password" name='password' value={details.password === undefined ? '' : details.password}  placeholder='Password' onChange={passwordHandler}/>
            {passwordError && <div className="text-red-700 -mt-2 mb-1 text-xs">Password is too short</div>}

          </div>
           <button className='cursor-pointer bg-[#4cb5f9] w-full text-sm font-bold text-white rounded-md py-2 mt-1'
          onClick={submitHandler}>Log in</button>

          <div className='font-bold opacity-60 text-sm my-1'>OR</div>
          <div>
            <img src="" alt="" />
            <div className=' text-blue-600'>Login with Google</div>
          </div>
          <div className='mt-3 text-sm'>forgot password?</div>
        </div>
        <div className='w-2/7 mt-4 border-1 border-[#d1cbcb] bg-[#f9f9f9] text-center p-4'>
            <div className='text-sm'>Don't have an account? Sign up</div>
        </div>
        <div className='text-xs text-gray-400 mt-3'>© 2024 Instagram from Meta</div>
      </div>
    </>
  )
}

export default SignIn