import React from 'react';
import LogoImg from '../img/logo.svg'
import NikeImg from '../img/nike.png'
// import framer hook
import { useMotionValue,useTransform,motion } from 'framer-motion';

const Card = () => {
  const y = useMotionValue(0);
  const x = useMotionValue(0);
  const rotateX = useTransform(y,[-100, 100],[30,-30]);
  const rotateY = useTransform(x,[-100, 100],[-30,30]);
  const colors = [
    {value: '#b6a179'},
    {value: '#272425'},
    {value: '#6389cb'},
    {value: '#f2c758'},
    {value: '#ffffff'},
  ];

  return <div style={{ perspective: 2000 }}>

   {/* Card */}
   <motion.div  style={{x, y, rotateX, rotateY, z: 100 }} 
   drag
   dragElastic={0.18}
   dragConstraints={{top:0,left:0 , right:0,bottom:0}}
   whileTap={{cursor:'grabbing'}}
   
   className='w-[426px] min-h-[600px] bg-[#ffffffdd] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab
    relative'
    >

 
   {/* Card logo */}
   <div className='mb-6'>
    <img src={LogoImg} alt=''></img>
   </div>

      {/* Card title */}
      <h1 className='text-5xl mb-6 font-extrabold'>Nike Air Max Pre-Day
      </h1>
      {/* suntitle */}
      <p className='max-w-[300px] mb-6 text-[#000000]'>Taking the clasic look of heritage
       Nike running into new realm , the Nike Air Max pre-Day brings you first-paced look thats ready for today a world</p>

      {/* btn & price wrapper */}
      <div className='flex items-center gap-x-[20px] mb-12'>
        <button className='bg-[#2d2d2c] text-white text-base rounded-lg font-medium py-[16px] px-[40px]'>Add to Bag</button>
        <div className='text-[24px] text-[#000] font-bold'>$495.00</div>
        </div>
          {/* colors */}
          <ul className=' flex gap-x-[10px]'>
            {colors.map((color, index) => {
              return ( 
              <li 
              key={index}
               style={{backgroundColor: color.value}}
              className='w-8 h-8 rounded-full cursor-pointer'>

              </li>
              );
            })}
          </ul>
          {/* card image */}
          <motion.div 
          style={{x, y, rotateX, rotateY, z: 100000 }} 
          
          className=' absolute animate-bounce delay-1000 top-12 -right-64 w-[620px]'>
            <img src={NikeImg} alt='' draggable="false"></img>
          </motion.div>
      
    
      </motion.div >

  </div>;
};

export default Card;
