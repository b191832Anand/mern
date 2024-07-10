import React from 'react'

function Access(props) {
  return (
    <div>
        <p
            className={`text-2xl h-screen flex justify-center items-center py-4 ${props.mode ? "text-gray-200" : "text-gray-900"
            }`}
          >
           login to access
          </p>
    </div>
  )
}

export default Access