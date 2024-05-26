import assets from '@/app/assets/assets'
import Icon from '@/app/components/form/Icon'
import React from 'react'

function page() {
  const values = ['Integrity', 'Pursuit of Excellence', 'Inspiring Partnerships', 'Diversity, Equity and Inclusion', 'Sustainability']
  return (
    <div>
      <div className='text-[14px] text-gray-50 p-5'>About Us</div>
      <div className=' flex w-full justify-between'>
        <div className='bg-blue-100 shadow-overlay px-[30px] pt-[30px] pb-[15px] w-[32%] min-h-[450px]'>
          <h1 className='text-white text-[40px] font-bold'>Vision</h1>
          <p className='text-[20px] text-white '>
            GCUF aspires to be a comprehensive university providing a higher education experience grounded in thought leadership, co-creation of knowledge, and sustainability.
          </p>
        </div>

        <div className='bg-blue-200 px-[30px] pt-[30px] pb-[15px] w-[32%] min-h-[450px]'>
          <h1 className='text-white text-[40px] font-bold'>MISSION</h1>
          <p className='text-[20px] text-white '>
            We are committed to being a university that stimulates intellectual curiosity, behavioral progression, and environmental stewardship. We nurture future leaders, job creators, and lifelong
            learners, with the ability to foster partnerships, and intercultural competence to impact their communities and beyond. Through adherence to our core values, we create an ecosystem that
            promotes research, innovation, and productivity.{' '}
          </p>
        </div>

        <div className='bg-blue-100 px-[30px] pt-[30px] pb-[15px] w-[32%] min-h-[450px]'>
          <h1 className='text-white text-[40px] font-bold'>CORE VALUES</h1>
          <ul className='text-white pl-7 list-disc space-y-3'>
            {values?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <section className='w-full bg-gray-10  justify-center px-32 py-10'>
        <div className='flex'>
          <div className='w-[80%]'>
            <div className='text-[25px] text-blue-200 font-bold '>RECTOR&apos;S MESSAGE</div>
            <div className='text-[12px] text-black-100'>Prof. Dr. Nasir Amin</div>
            <div className='text-[12px] mb-[20px]  text-black-100'>Rector GCUF</div>

            <div className=' w-[100%] italic'>
              Government College University Faisalabad is a dynamic seat of learning aspiring to provide highly stimulating and conducive academic environments for quality research, formal education
              and professional growth. In the recent years, the university has achieved phenomenal success in research contribution and in improving the quality of education which is reflected through
              the meteoric rise of the institution in HEC ranking from 59th to its 7th position, resulting in growing confidence of civil society and business community of the region. <br />
              <br />
              This university is striving for academic and cultural excellence by living up to the international standards of education. We offer innovative syllabi encompassing the latest trends and
              approaches in the field's higher education. Our curricula inculcate creativity, objectivity and critical thinking, impart values of commitment and singleness of purpose to learning and
              professionalism and promote confidence, adaptability and high level communication skills in students to ensure success of our graduates in this highly competitive and challenging global
              world order.
              <br />
              <br />
              We are for inter-disciplinary approach and social cohesion. We offer a wide range of courses in the fields of Natural and Physical Sciences, Information Technology, Engineering, Food and
              Home Sciences, Law, Pharmacy, Management and Business Sciences, Humanities, Social Sciences, Fine Arts, Bioinformatics & Biotechnology and Medical Sciences in addition to others to cater
              the diverse needs of social and industrial sectors of this region.
              <br />
              <br />
              Government College University Faisalabad is deeply engaged in the challenging task of developing well-equipped labs to produce quality research in every field and in establishing a
              proper liaison with market and industry to ensure job opportunities for skilled graduates and young professionals. Our academia and administration place special emphasis on building an
              inclusive community based on inter-cultural and inter-faith harmony to produce an environment that is safe and friendly by making education a way forward to social and communal harmony
              and tolerance. You will find highly qualified faculty in this University dedicated to provide you excellent opportunities for intellectual and social growth. The University comprises
              beautiful buildings and grounds which promise a variety of healthy, congenial and intellectually transformative opportunities necessary for nation building. This University ensures a
              successful and bright career for its students. It is hoped that this University will earn more laurels in future by responding to the needs of society and market. Furthermore, you are
              welcome to experience lively opportunities that Government College University Faisalabad offers. You are here to join a vibrant community of students, researchers, friends, teachers,
              mentors and intellectuals to discover your potential and abilities for creative learning
            </div>
          </div>
          <div className='  flex flex-col w-[40%] items-center text-center'>
            <Icon imageWidth={'w-[200px] h-[200px] '} image={assets.images.rector} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
