import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className='w-full lg:h-[300px] h-fit py-4 lg:py-0 bg-custom-gradient lg:px-10 flex lg:flex-row flex-col justify-between items-center'>
       <div>
         <img src='/images/Logo.svg'/>
         <p className='text-[19px] text-white font-euclid font-[500] mt-2 '>Follow On</p>

         <div className='flex gap-x-5 mt-2'>
            <a href='https://www.facebook.com/pruthatek' target='_blank' className='w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center '>
               <img src='/images/fb.svg'/>
            </a>
            <a href='' target='_blank' className='w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center '>
            <img src='/images/ig.svg'/>
            </a>
            <a href='https://www.linkedin.com/company/pruthatek/mycompany/' target='_blank' className='w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center '>
              <img src='/images/in.svg'/>
            </a>
            <a href='https://x.com/pruthatek' target='_blank' className='w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center '>
              <img src='/images/X.svg'/>
            </a>
         </div>
       </div>
          <div className='md:hidden lg:block'>
            <p className='font-euclid font-[700] text-white text-[20px] mt-4 lg:mt-0'>Contacts</p>
          
           <div className='flex gap-x-2 mt-6'>
            <img src='/images/Location.svg'/>
            <address className='font-[400] text-[15px] text-white font-euclid not-italic '>Ontario, Toronto</address>
            </div> 
            <div className='flex gap-x-2 mt-4'>
            <img src='/images/Message.svg'/>
            <a href='mailto:Ca_sales@pruthatek.com' className='font-[400] text-[15px] text-white font-euclid not-italic '>Ca_sales@pruthatek.com</a>
            </div> 
            <div className='flex gap-x-2 mt-4'>
            <img src='/images/Message.svg'/>
            <a  href='tel:+1 (705) 772-2734' className='font-[400] text-[15px] text-white font-euclid not-italic '>+1 (705) 772-2734</a>
            </div> 

         </div>

         <div className='md:hidden lg:block'>
         <div className='flex gap-x-2 md:mt-14 mt-10'>
            <img src='/images/Location.svg'/>
            <address className='font-[400] text-[15px] text-white font-euclid not-italic '>SEA, South East Asia</address>
            </div> 
            <div className='flex gap-x-2 mt-4'>
            <img src='/images/Message.svg'/>
            <a href='mailto:Sea_sales@pruthatek.com' className='font-[400] text-[15px] text-white font-euclid not-italic '>Sea_sales@pruthatek.com</a>
            </div> 
            <div className='flex gap-x-2 mt-4'>
            <img src='/images/Message.svg'/>
            <a  href='tel:+1 (705) 772-2734' className='font-[400] text-[15px] text-white font-euclid not-italic '>+1 (705) 772-2734</a>
            </div> 
         </div>

         <div className='md:hidden lg:block'>
         <div className='flex gap-x-2 md:mt-14 mt-10'>
            <img src='/images/Location.svg'/>
            <address className='font-[400] text-[15px] text-white font-euclid not-italic '>Australia</address>
            </div> 
            <div className='flex gap-x-2 mt-4'>
            <img src='/images/Message.svg'/>
            <a href='mailto:Au_sales@pruthatek.com' className='font-[400] text-[15px] text-white font-euclid not-italic '>Au_sales@pruthatek.com</a>
            </div> 
            <div className='flex gap-x-2 mt-4'>
            <img src='/images/Message.svg'/>
            <a  href='tel:+1 (705) 772-2734' className='font-[400] text-[15px] text-white font-euclid not-italic '>+1 (705) 772-2734</a>
            </div> 
         </div>
    

     <div className='md:flex-row md:flex gap-x-8 lg:hidden hidden justify-between'>
     <div>
            <p className='font-euclid font-[700] text-white text-[20px] mt-4 lg:mt-0'>Contacts</p>
          
           <div className='flex gap-x-2 mt-6'>
            <img src='/images/Location.svg'/>
            <address className='font-[400] text-[15px] text-white font-euclid not-italic '>Ontario, Toronto</address>
            </div> 
            <div className='flex gap-x-2 mt-4'>
            <img src='/images/Message.svg'/>
            <a href='mailto:Ca_sales@pruthatek.com' className='font-[400] text-[15px] text-white font-euclid not-italic '>Ca_sales@pruthatek.com</a>
            </div> 
            <div className='flex gap-x-2 mt-4'>
            <img src='/images/Message.svg'/>
            <a  href='tel:+1 (705) 772-2734' className='font-[400] text-[15px] text-white font-euclid not-italic '>+1 (705) 772-2734</a>
            </div> 

         </div>

         <div>
         <div className='flex gap-x-2 md:mt-[70px] mt-10'>
            <img src='/images/Location.svg'/>
            <address className='font-[400] text-[15px] text-white font-euclid not-italic '>SEA, South East Asia</address>
            </div> 
            <div className='flex gap-x-2 mt-4'>
            <img src='/images/Message.svg'/>
            <a href='mailto:Sea_sales@pruthatek.com' className='font-[400] text-[15px] text-white font-euclid not-italic '>Sea_sales@pruthatek.com</a>
            </div> 
            <div className='flex gap-x-2 mt-4'>
            <img src='/images/Message.svg'/>
            <a  href='tel:+1 (705) 772-2734' className='font-[400] text-[15px] text-white font-euclid not-italic '>+1 (705) 772-2734</a>
            </div> 
         </div>

         <div>
         <div className='flex gap-x-2 md:mt-[70px] mt-10'>
            <img src='/images/Location.svg'/>
            <address className='font-[400] text-[15px] text-white font-euclid not-italic '>Australia</address>
            </div> 
            <div className='flex gap-x-2 mt-4'>
            <img src='/images/Message.svg'/>
            <a href='mailto:Au_sales@pruthatek.com' className='font-[400] text-[15px] text-white font-euclid not-italic '>Au_sales@pruthatek.com</a>
            </div> 
            <div className='flex gap-x-2 mt-4'>
            <img src='/images/Message.svg'/>
            <a  href='tel:+1 (705) 772-2734' className='font-[400] text-[15px] text-white font-euclid not-italic '>+1 (705) 772-2734</a>
            </div> 
         </div>
    </div>
    </footer>
  )
}

export default Footer
