import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Slice/counterSlice'

const MainCompo = () => {
    const sliceData = useSelector((state)=>state.storeData.value)
    const dispatch = useDispatch()

    const handleAdd =()=>{
        dispatch(increment())
    }
    const handleRemove =()=>{
        dispatch(decrement())
    }
  
  return (
    <>
        <div className='text-7xl font-semibold text-[blue]'>{sliceData}</div>
        <button onClick={handleAdd} className="px-6 py-2 text-2xl bg-[gray] text-[white] mr-3 rounded-md" > Add </button>
        <button onClick={handleRemove} className="px-6 py-2 text-2xl bg-[gray] text-[white] mr-3 rounded-md" > Remove </button>
      
    </>
  )
}

export default MainCompo