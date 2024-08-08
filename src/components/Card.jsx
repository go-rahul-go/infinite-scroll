import React from 'react'

const Card = ({item}) => {
  return (
    <div className='w-[97%] h-[75vw] md:h-[35vh] lg:h-[400px] rounded-[20px] prod-card  grid place-items-center relative overflow-hidden'>
        <h2 className='text-[5.5rem] font-bold card-text'>{item}</h2>
    </div>
  )
}

export default Card