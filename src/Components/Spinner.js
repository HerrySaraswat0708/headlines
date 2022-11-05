import React from 'react'
import loading from "./loading.gif"
export default function Spinner() {
  return (
    <div key='spinnerdiv' className='text-center'>
      <img key='imgspinner' className='my-3' src={loading} alt="loading"/>
    </div>
  )
}
