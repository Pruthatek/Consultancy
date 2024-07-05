import React, {useState} from 'react'

const GetInTouch = () => {
    const [result, setResult] =useState("");
    const [result2, setResult2] =useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "e96d8bc1-810e-4624-a292-c0d31c263aa7");
        
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
        setTimeout(() => {
          setResult("");
      }, 2000);
    };

    const onSubmit2 = async (event) => {
      event.preventDefault();
      setResult2("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "e96d8bc1-810e-4624-a292-c0d31c263aa7");
      
      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
      });

      const data = await response.json();

      if (data.success) {
          setResult2("Form Submitted Successfully");
          event.target.reset();
      } else {
          console.log("Error", data);
          setResult2(data.message);
      }
      setTimeout(() => {
        setResult2("");
    }, 2000);
  };
  return (
    <>
      <div className='relative z-40 font-euclid bg-black'>
       <div className='w-full lg:h-[700px] md:h-[600px] h-[500px] relative '>
        <div className='absolute bg-gradient-to-b top-0 left-0 right-0 bottom-0 from-black to-transparent flex flex-col justify-start items-center'>
          <div className='md:mt-40 mt-[100px]   flex flex-col items-center'>
          <p className='font-semibold lg:text-[50px] md:text-[30px] text-[20px] text-[#B3B3B3] text-center px-4 md:px-10 lg:px-20 '>
          Whether you have questions about our services or need assistance with a specific hiring need, our team is ready to provide the support you need. </p>
          <p className='md:text-[22px] text-[18px] font-medium font-euclid text-[#B3B3B3] text-center px-4 md:px-10 lg:px-20 md:mt-20 mt-14 '> Reach out to us through our contact form, email, or phone, and we'll respond promptly. Your success is our priority, and we're committed to making your recruitment process seamless and efficient.</p>
          </div>    
        </div>
       <img src='/images/circles.png' className='w-full lg:h-[700px] md:h-[600px] h-[500px] lg:object-cover object-contain object-top '/>
      </div>       
    </div>

    <div className='mt-10'>
    <p className='lg:text-[44px] md:text-[32px] text-[24px]  lg:px-[86px] md:px-10 px-5 text-black font-semibold font-euclid '>Contact Ontario Office </p>
       <div className='flex lg:flex-row flex-col  lg:justify-center gap-x-10 md:px-10 px-5  w-full  h-fit lg:items-start items-center '>
           <div className='lg:w-[60%] md:w-[90%] w-[100%]  h-fit mt-10'>
              
              <form action="" onSubmit={onSubmit} className='w-full  flex flex-col gap-y-12 py-12 items-center bg-[#F5F5F5] rounded-[12px]  '>
                 <input type="text" name="name" id="name" placeholder='Your Name*' className='md:w-[70%] w-[85%] h-[40px] border-b  border-b-[#505050] bg-transparent placeholder:text-[#505050] placeholder:text-[20px] '/>
                 <input type="email" name="email" id="email" placeholder='Email*' className='md:w-[70%] w-[85%] h-[40px] border-b border-b-[#505050] bg-transparent placeholder:text-[#505050] placeholder:text-[20px] '/>
                 <input type="number" name="number" id="number" placeholder='Mobile No*' className='md:w-[70%] w-[85%] h-[40px] border-b border-b-[#505050] bg-transparent placeholder:text-[#505050] placeholder:text-[20px] '/>
                 <input type="subject" name="subject" id="subject" placeholder='Subject*' className='md:w-[70%] w-[85%] h-[40px] border-b border-b-[#505050] bg-transparent placeholder:text-[#505050] placeholder:text-[20px] '/>
                 <input type="message" name="message" id="message" placeholder='Message*' className='md:w-[70%] w-[85%] h-[40px] border-b border-b-[#505050] bg-transparent placeholder:text-[#505050] placeholder:text-[20px] '/>
                 <div className='flex  mx-auto '>
              <button type='submit' className='w-[180px] h-[49px]   relative bg-black rounded-[37px] border 
          border-transparent md:text-[18px] text-[16px]  text-[#F5F5F5] md:font-[600] font-[500] flex justify-center
          items-center transition-colors overflow-hidden before:absolute before:left-0 before:top-0  before:w-full 
          before:h-full before:hover:border-black before:origin-left before:scale-x-0 before:bg-[#F5F5F5] before:rounded-[37px] 
          before:transition-transform before:duration-500 before:text-black hover:text-black before:-z-10 z-10 before:hover:rounded-[37px] 
          before:hover:scale-x-100  '>Submit</button>
            </div>   
          {result !== "" && <p>{result}</p>}  
              </form>
           </div>

           <div className='lg:w-[30%] md:w-[50%] w-[100%] h-fit mt-10  border-[2px] border-[#505050] rounded-[12px] px-10 py-8'>
              <p className='text-[28px] font-semibold text-black font-euclid '>Contact Details</p>
              <address className='not-italic text-[24px] font-normal font-euclid mt-8 '>G-10 Arasmant flat, nr.<br></br>
Karmachari Nagar,<br></br>
Rannapark, Ahmedabad<br></br>
380061</address>
           <div className='flex flex-col'>
           <a href='mailto:info@Pruthatek.com' className=' text-[24px]  font-euclid mt-8 '>Info@Pruthatek.com</a>
           <a href='tel:9734213467' className=' text-[24px] font-euclid mt-2 '>9734213467</a>
           </div>
           </div>
       </div>   
    </div>

    <div className='mt-14 lg:mt-24 mb-10'>
    <p className='lg:text-[44px] md:text-[32px] text-[24px]  lg:px-[86px] md:px-10 px-5 text-black font-semibold font-euclid '>Contact Dubai Office </p>
       <div className='flex lg:flex-row-reverse flex-col  lg:justify-center gap-x-10 md:px-10 px-5  w-full  h-fit lg:items-start items-center '>
           <div className='lg:w-[60%] md:w-[90%] w-[100%]  h-fit mt-10'>
              
              <form action="" onSubmit={onSubmit2} className='w-full  flex flex-col gap-y-12 py-12 items-center bg-[#F5F5F5] rounded-[12px]  '>
                 <input type="text" name="name" id="name" placeholder='Your Name*' className='md:w-[70%] w-[85%] h-[40px] border-b  border-b-[#505050] bg-transparent placeholder:text-[#505050] placeholder:text-[20px] '/>
                 <input type="email" name="email" id="email" placeholder='Email*' className='md:w-[70%] w-[85%] h-[40px] border-b border-b-[#505050] bg-transparent placeholder:text-[#505050] placeholder:text-[20px] '/>
                 <input type="number" name="number" id="number" placeholder='Mobile No*' className='md:w-[70%] w-[85%] h-[40px] border-b border-b-[#505050] bg-transparent placeholder:text-[#505050] placeholder:text-[20px] '/>
                 <input type="subject" name="subject" id="subject" placeholder='Subject*' className='md:w-[70%] w-[85%] h-[40px] border-b border-b-[#505050] bg-transparent placeholder:text-[#505050] placeholder:text-[20px] '/>
                 <input type="message" name="message" id="message" placeholder='Message*' className='md:w-[70%] w-[85%] h-[40px] border-b border-b-[#505050] bg-transparent placeholder:text-[#505050] placeholder:text-[20px] '/>
                 <div className='flex  mx-auto '>
              <button type='submit' className='w-[180px] h-[49px]   relative bg-black rounded-[37px] border 
          border-transparent md:text-[18px] text-[16px]  text-[#F5F5F5] md:font-[600] font-[500] flex justify-center
          items-center transition-colors overflow-hidden before:absolute before:left-0 before:top-0  before:w-full 
          before:h-full before:hover:border-black before:origin-left before:scale-x-0 before:bg-[#F5F5F5] before:rounded-[37px] 
          before:transition-transform before:duration-500 before:text-black hover:text-black before:-z-10 z-10 before:hover:rounded-[37px] 
          before:hover:scale-x-100  '>Submit</button>
            </div>   
          {result2 !== "" && <p>{result2}</p>}  
              </form>
           </div>

           <div className='lg:w-[30%] md:w-[50%] w-[100%] h-fit mt-10  border-[2px] border-[#505050] rounded-[12px] px-10 py-8'>
              <p className='text-[28px] font-semibold text-black font-euclid '>Contact Details</p>
              <address className='not-italic text-[24px] font-normal font-euclid mt-8 '>G-10 Arasmant flat, nr.<br></br>
Karmachari Nagar,<br></br>
Rannapark, Ahmedabad<br></br>
380061</address>
           <div className='flex flex-col'>
           <a href='mailto:info@Pruthatek.com' className=' text-[24px]  font-euclid mt-8 '>Info@Pruthatek.com</a>
           <a href='tel:9734213467' className=' text-[24px] font-euclid mt-2 '>9734213467</a>
           </div>
           </div>
       </div>   
    </div>
    </>
  )
}

export default GetInTouch
