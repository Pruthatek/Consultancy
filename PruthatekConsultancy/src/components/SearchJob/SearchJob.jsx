import React, { useState } from 'react'
import { X} from "lucide-react"

const SearchJob = () => {

  const [expandContent, setExpandContent] = useState()
  const [toggle, setToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [formValues, setFormValues] = useState({
      location: '',
      companyName: '',
      jobType: '',
      radius: '',
      km: ''
  });
 

    const jobList = [
        {   
            id: 1,
            img: "/images/jobImg.png",
            companyName: "ABC",
            jobTitle: "Senior Java Developer",
            jobType: "Permanent",
            timeline: "14 Days to go",
            location: "United Arab Emirates",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur adipiscing elit.",
            task: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
            skills: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
        },
        {
            id: 2,
            img: "/images/jobImg.png",
            companyName: "DEF",
            jobTitle: "Junior React Developer",
            jobType: "Contract",
            timeline: "10 Days to go",
            location: "Dubai",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur adipiscing elit.",
            task: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
            skills: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
        },
        {
            id: 3,
            img: "/images/jobImg.png",
            companyName: "GHI",
            jobTitle: "Junior Python Developer",
            jobType: "Permanent",
            timeline: "8 Days to go",
            location: "Dubai",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur adipiscing elit.",
            task: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
            skills: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
        },
        {
            id: 4,
            img: "/images/jobImg.png",
            companyName: "JKL",
            jobTitle: "Senior Nextjs Developer",
            jobType: "Permanent",
            timeline: "18 Days to go",
            location: "United Arab Emirates",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur adipiscing elit.",
            task: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
            skills: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
        },
        {
            id: 5,
            img: "/images/jobImg.png",
            companyName: "MNO",
            jobTitle: "Senior Python Developer",
            jobType: "Permanent",
            timeline: "12 Days to go",
            location: "Dubai",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur adipiscing elit.",
            task: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
            skills: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
        },
    ]

    
    const changeContent = (id) => {
        if (expandContent === id) {
            setToggle(!toggle);
        } else {
            setExpandContent(id);
            setToggle(true);
        }
    };

    const [filteredJobs, setFilteredJobs] = useState(jobList);
    const [visibleJobs, setVisibleJobs] = useState(4);
    const [openForm, setOpenForm] = useState(false)
    const [companyName,setCompanyName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [formId, setFormId] = useState()
    
    const openApplyForm = (e, id, companyName, jobTitle) =>{
      e.stopPropagation();
          setFormId(id);
          setOpenForm(true)
          setCompanyName(companyName)
          setJobTitle(jobTitle)  
    }

   
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(JSON.stringify(formValues))
        const filtered = jobList.filter(job => {
            const matchesFormValues = (
                (!formValues.location || job.location.toLowerCase().includes(formValues.location.toLowerCase())) &&
                (!formValues.companyName || job.companyName.toLowerCase().includes(formValues.companyName.toLowerCase())) &&
                (!formValues.jobType || job.jobType.toLowerCase().includes(formValues.jobType.toLowerCase()))
            );
            return matchesFormValues;
        });
        setFilteredJobs(filtered);
    };

    const handleSubmit1 = (e) => {
        e.preventDefault();
        const filtered = jobList.filter(job => {
            const matchesSearchQuery = job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) || job.companyName.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesSearchQuery;
        });
        setFilteredJobs(filtered);
    };
    // const handleShowMore = () => {
    //     setVisibleJobs(prevVisibleJobs => prevVisibleJobs + 4);
    //     setFilteredJobs(jobList.slice(0, visibleJobs + 4));
    // };

    const [result, setResult] =useState("");

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

  return (
    <>
    <div className='relative z-40 font-euclid'>
      <div className='w-full lg:h-full md:h-[600px] h-[500px] relative '>
        <div className='w-full absolute bg-gradient-to-b top-0 left-0 right-0 bottom-0 from-black to-transparent flex flex-col justify-start items-center'>
          <div className='w-full absolute bottom-20   flex flex-col items-center'>
            <div className='searchBar lg:w-[60%] md:w-[80%] w-[90%] flex md:h-[66px] h-[44px] items-center bg-white rounded-full '>
               <input value={searchQuery} onChange={handleSearch} placeholder='Search job titles, company name....' className=' w-[70%] h-full rounded-full px-8 outline-none focus:outline md:placeholder:text-[20px] placeholder:text-[16px] placeholder:font-[400]  placeholder:text-[#B3B3B3]  '/>
               <button onClick={handleSubmit1} className='w-[29.7%] md:h-[62px] h-[40px] relative bg-black rounded-full border 
          border-transparent md:text-[20px] text-[16px]  text-white font-medium flex justify-center
          items-center transition-colors overflow-hidden before:absolute before:left-0 before:top-0  before:w-full 
          before:h-full before:hover:border-black before:origin-left before:scale-x-0 before:bg-white before:rounded-full 
          before:transition-transform before:duration-500 before:text-black hover:text-black before:-z-10 z-10 before:hover:rounded-full 
          before:hover:scale-x-100  '>Search</button>
            </div>
          </div>    
        </div>
       <img src='/images/searchBg.png' className='w-full h-full  '/>
      </div>       
    </div>

    <div className='w-full flex justify-center my-14 '>
       <form onSubmit={handleSubmit} className='lg:w-[75%] w-[90%] h-fit rounded-[30px] md:px-12 px-8 md:py-10 py-8 border border-[#B3B3B3] shadow-lg '>

          <div className='w-full flex md:flex-row flex-col gap-y-6 gap-x-6'>
            <div className='flex flex-col md:w-[50%] w-full'>
              <label className='font-semibold md:text-[20px] text-[18px] font-lexend text-black '>Job Location</label>
              <input name='location' value={formValues.location} onChange={handleFormChange} placeholder='Location' className=' w-full h-[40px] placeholder:text-[14px] placeholder:font-normal placeholder:text-[#B3B3B3] px-4 mt-2  rounded-[5px] border border-[#B3B3B3] '/>
            </div>

          <div className='flex gap-x-6 md:w-[50%] w-[100%] '>
            <div className='flex flex-col  w-[50%]'>
              <label className='font-semibold md:text-[20px] text-[18px]  font-lexend text-black '>Radius</label>
              <input name='radius' value={formValues.radius} onChange={handleFormChange} placeholder='Radius' className=' w-full h-[40px] placeholder:text-[14px] placeholder:font-normal placeholder:text-[#B3B3B3] px-4 mt-2  rounded-[5px] border border-[#B3B3B3] '/>
            </div>
            <div className='flex flex-col  w-[50%]'>
              <label className='font-semibold md:text-[20px] text-[18px]  font-lexend text-black '>KM</label>
              <input name='km' value={formValues.km} onChange={handleFormChange} placeholder='KM' className=' w-full h-[40px] placeholder:text-[14px] placeholder:font-normal placeholder:text-[#B3B3B3] px-4 mt-2  rounded-[5px] border border-[#B3B3B3] '/>
            </div> 
         </div>

          </div>

          <div className='w-full flex md:flex-row flex-col items-center gap-x-6 md:mt-12 mt-6'>
            <div className='flex flex-col md:w-[50%] w-[100%]'>
              <label className='font-semibold md:text-[20px] text-[18px]  font-lexend text-black '>Company Name</label>
              <input name='companyName' value={formValues.companyName} onChange={handleFormChange} placeholder='Company Name' className=' w-full h-[40px] placeholder:text-[14px] placeholder:font-normal placeholder:text-[#B3B3B3] px-4 mt-2  rounded-[5px] border border-[#B3B3B3] '/>
            </div>

            <div className=' md:w-[25%] w-full mt-6 md:mt-0 '>
              <p className='font-semibold md:text-[20px] text-[18px]  font-lexend text-black '>Job Type</p>
              <div className='flex gap-x-4'>
               <div className='flex items-center mt-2'>
                <input type='radio' name='jobType' value='Permanent' onChange={handleFormChange} className=' w-[20px]  h-[20px] accent-black rounded-full border border-[#B3B3B3] '/> 
                <label className='text-[1rem] font-normal ml-2 font-euclid text-black '>Permanent</label>
               </div>
             <div className='flex items-center mt-2'>
              <input type='radio' name='jobType' value='Contract' onChange={handleFormChange} className=' w-[20px]  h-[20px] accent-black rounded-full border border-[#B3B3B3] '/> 
              <label className='text-[1rem] font-normal ml-2 font-euclid text-black '>Contract</label>
             </div>
             </div>
            </div>

            <div className='lg:flex hidden w-[25%]'>
              <button className='w-full md:h-[57px] mt-3 h-[40px] relative bg-black rounded-[8px] border 
          border-transparent md:text-[20px] text-[16px]  text-white md:font-[600] font-[500] flex justify-center
          items-center transition-colors overflow-hidden before:absolute before:left-0 before:top-0  before:w-full 
          before:h-full before:hover:border-black before:origin-left before:scale-x-0 before:bg-white before:rounded-[8px] 
          before:transition-transform before:duration-500 before:text-black hover:text-black before:-z-10 z-10 before:hover:rounded-[8px] 
          before:hover:scale-x-100  '>Search</button>
            </div>    
          </div>
          <div className='flex lg:hidden mx-auto mt-5 w-[50%] md:w-[25%]'>
              <button className='w-full md:h-[57px] mt-3 h-[40px] relative bg-black rounded-[8px] border 
          border-transparent md:text-[20px] text-[16px]  text-white md:font-[600] font-[500] flex justify-center
          items-center transition-colors overflow-hidden before:absolute before:left-0 before:top-0  before:w-full 
          before:h-full before:hover:border-black before:origin-left before:scale-x-0 before:bg-white before:rounded-[8px] 
          before:transition-transform before:duration-500 before:text-black hover:text-black before:-z-10 z-10 before:hover:rounded-[8px] 
          before:hover:scale-x-100  '>Search</button>
            </div>   

       </form>
    </div>

    <div className='JOBS lg:w-[80%] w-[90%] mx-auto'>
        <p className='font-medium text-[30px] text-black font-euclid '>{filteredJobs.length} {filteredJobs.length > 1 ? "Jobs Available" : "Job Available"} </p> 

       <div className='flex flex-col gap-y-5 my-6'>
       {filteredJobs.map((job, index)=>{
            return (
                <div onClick={()=>changeContent(job.id)} key={job.id} className='w-full cursor-pointer h-fit py-6 border  border-[#B3B3B3] px-6 flex flex-col  rounded-[20px] shadow-md '>
                   
                  <div className='flex md:flex-row flex-col gap-x-4'> 
                   <div className='flex-shrink-0 w-[222px] rounded-[14px] h-[222px] mx-auto md:mx-0 mb-4 md:mb-0 '>
                     <img src={job.img} className='w-full h-full rounded-[14px] object-cover '/>
                   </div>
                   
                   <div className='flex flex-col gap-y-2 flex-grow'>
                      <h2 className='font-medium text-[24px] text-black font-euclid '>{job.companyName}</h2>
                      <h2 className='font-medium text-[24px] text-black font-euclid '>{job.jobTitle}</h2>
                      <p className='font-medium text-[18px] text-black font-euclid '> <b className='font-semibold text-[18px] text-black font-euclid '>Job type:</b>&nbsp; {job.jobType}</p>
                      <div className='flex gap-x-2'> 
                        <img src='/images/Calendar.svg'/>
                        <p className='font-normal text-[18px] text-black font-euclid ' >{job.timeline}</p>
                      </div>
                      <div className='flex gap-x-2'> 
                        <img src='/images/location2.svg'/>
                        <p className='font-normal text-[18px] text-black font-euclid '>{job.location}</p>
                      </div>
                      <p className='font-normal text-[18px] text-black font-euclid '>{job.desc}</p>
                     
                   </div>
                  </div>

                  {toggle && expandContent === job.id && <>
                  <p className='font-semibold mt-4 mb-2 text-[20px] text-black font-euclid '>Task and Responsibilities</p>
                  {job.task.map((list,index)=>{
                    return(
                        <li className='font-normal text-[18px] text-black font-euclid '>{list}</li>
                    )
                  })}
                  <p className='font-semibold mt-4 mb-2 text-[20px] text-black font-euclid '>Skills and Experience Required</p>
                  {job.skills.map((list,index)=>{
                    return(
                        <li className='font-normal text-[18px] text-black font-euclid '>{list}</li>
                    )
                  })}
                <div className='flex  mx-auto mt-5'>
              <button onClick={(e)=>openApplyForm(e, job.id, job.companyName, job.jobTitle)} className='w-[210px] h-[49px] mt-3  relative bg-black rounded-[37px] border 
          border-transparent md:text-[18px] text-[16px]  text-white md:font-[600] font-[500] flex justify-center
          items-center transition-colors overflow-hidden before:absolute before:left-0 before:top-0  before:w-full 
          before:h-full before:hover:border-black before:origin-left before:scale-x-0 before:bg-white before:rounded-[37px] 
          before:transition-transform before:duration-500 before:text-black hover:text-black before:-z-10 z-10 before:hover:rounded-[37px] 
          before:hover:scale-x-100  '>Apply for Job</button>
            </div>   

            {openForm && formId === job.id && <div className=' fixed z-40  top-0 left-0 right-0 bottom-0 bg-transparent  flex justify-center items-start py-5'>
              <div className='bg-white lg:w-[40%] md:w-[80%] relative w-[90%] h-fit py-8 rounded-[30px]  border border-[#B3B3B3]'>
              <X className="absolute right-5 " onClick={() => setOpenForm(false)}/>
              <form onSubmit={onSubmit} onClick={(e) => e.stopPropagation()} className='w-full gap-y-5 flex flex-col justify-center items-center'>
                 <p className='lg:text-[46px] text-[32px] text-black font-bold font-euclid mb-5'>Job Application</p>
                 <div className='flex flex-col md:w-[80%] w-[90%] gap-y-2'>
                   <label className='text-[20px] font-medium font-euclid text-black '>Full Name</label>
                   <input placeholder='Full Name' name='fullname' id='fullname' type='text' className='w-full h-[45px] border px-2 border-[#B3B3B3] rounded-[5px] 
                  placeholder:text-[#B3B3B3] placeholder:text-[14px] placeholder:font-euclid placeholder:font-normal '/>
                 </div>
                 <div className='flex flex-col md:w-[80%] w-[90%] gap-y-2'>
                   <label className='text-[20px] font-medium font-euclid text-black '>Email</label>
                   <input placeholder='Email' name='email' id='email' type='email' className='w-full h-[45px] border px-2 border-[#B3B3B3] rounded-[5px] 
                  placeholder:text-[#B3B3B3] placeholder:text-[14px] placeholder:font-euclid placeholder:font-normal '/>
                 </div>
                 <div className='flex flex-col md:w-[80%] w-[90%] gap-y-2'>
                   <label className='text-[20px] font-medium font-euclid text-black '>Location</label>
                   <input placeholder='Location' name='location' id='location' type='text' className='w-full h-[45px] border px-2 border-[#B3B3B3] rounded-[5px] 
                  placeholder:text-[#B3B3B3] placeholder:text-[14px] placeholder:font-euclid placeholder:font-normal '/>
                 </div>
                 <div className='flex flex-col md:w-[80%] w-[90%] gap-y-2'>
                   <label className='text-[20px] font-medium font-euclid text-black '>Message</label>
                   <input placeholder='Message' name='message' id='message' type='text' className='w-full h-[45px] border px-2 border-[#B3B3B3] rounded-[5px] 
                  placeholder:text-[#B3B3B3] placeholder:text-[14px] placeholder:font-euclid placeholder:font-normal '/>
                 </div>
                 {/* <div className='flex flex-col md:w-[80%] w-[90%] gap-y-2'>
                   <label className='text-[20px] font-medium font-euclid text-black '>Upload Your CV</label>
                   <input placeholder='Choose File' name='file' id='file' type='file' className=''/>
                 </div> */}
                 <input type="hidden" name="companyName" value={job.companyName} />
                 <input type="hidden" name="jobTitle" value={job.jobTitle} />
                 <button className='md:w-[80%] w-[90%] rounded-[8px] mt-2 text-[20px] font-medium bg-black h-[57px] text-white '>Apply Now</button>
                 
              </form>
              
              </div>
              </div>}

                  
                  </>}

                </div>
            )
        })}

       </div>
         {/* {visibleJobs < jobList.length && (
                        <div className='w-full my-10 flex justify-center'>
                            <button
                                onClick={handleShowMore}
                                className='w-[174px] h-[41px] rounded-[44px] border-[2px] text-[18px] font-semibold text-black border-black'>
                                Show More
                            </button>
                        </div>
                    )} */}
    </div>
    </>
  )
}

export default SearchJob
