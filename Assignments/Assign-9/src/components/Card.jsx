import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className="parent">
        <div className="upwards bg-gray-50 p-3 shadow-2xl w-60 h-70 rounded-xl m-5">
        <div className="container-1 flex items-center justify-between m-2">
        <div className="photo border border-gray-400 p-1 rounded-2xl"><img className=' rounded-full h-5 w-5 bg-cover bg-center' src={props.image} alt="image" /></div>
        <div className="saveBtn text-xs border border-gray-300 p-1 rounded-sm text-[0.6rem] text-gray-500">Save <i class="ri-bookmark-line"></i></div>
        </div>
        <div className="companyName m-1 text-sm">{props.company} <sub className='text-[0.5rem] text-gray-500'>5 days ago</sub></div>
        <div className="jobTitle mx-1 text-xl">{props.job}</div>
        <div className='buttons-require flex items-start justify-start gap-1'>
            <div className="button-1 text-[0.5rem] bg-gray-200 w-fit p-1 rounded-sm m-1">{props.button_1}</div>
            <div className="button-1 text-[0.5rem] bg-gray-200 w-fit p-1 rounded-sm m-1">{props.button_2}</div>
        </div>
        <hr className='w-50 text-center text-gray-400 mt-18'/>
        <div className="container-2 flex items-center justify-between mt-4">
        <div className="salary text-sm">{props.salary}</div>
        <div className="button-apply text-[0.6rem] font-bold bg-black text-white px-2 py-1 rounded-sm">Apply Now</div>
        </div>
        <div className="city text-gray-400 text-[0.5rem]">{props.city}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
