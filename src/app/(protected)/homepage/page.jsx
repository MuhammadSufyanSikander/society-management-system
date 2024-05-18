import assets from '@/app/assets/assets';
import Icon from '@/app/components/form/Icon';
import React from 'react';

function Page() {
  return (
    <div className='relative w-full h-[88.6vh] bg-cover bg-center' style={{backgroundImage: 'url("https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D")'}}>
      <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-[40px] font-noto-sans text-center'>
        Share your idea with us
        
      </div>
      <div className='absolute w-[60%]  bottom-1/2 left-1/4 text-[16px] text-center text-white'>
       Whether studyig for a big exam, learning something new, or brushing up on old skills, the right tutor can help you fell empowered, knowledgeable, and ready for anything
      </div>
      <div className='absolute bottom-10 left-1/2'>
      <Icon image={assets.icons.downarrow} imageHeight={'w-[30px] h-[30px]'}/>
      </div>
    </div>
  );
}

export default Page;
