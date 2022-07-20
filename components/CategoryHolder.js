import React from 'react'

const CategoryHolder = ({data}) => {
    /* 
let x= [
    {name:"hello"},{name:"Punctuation"},{name:"route"},{name:"hall"}
]
x.map(e=>data.push(e)) */
    return (
        
        <div className='text-white  w-md mt-2  flex flex-wrap items-center justify-center text-center'>
            {data.map(dt=>(
                <>
                <p className='pr-2 pl-2  rounded-2xl mb-2 mr-1 h-6 whitespace-nowrap text-center bg-slate-600' >
                     {dt.name}</p>
                
                </>
            ))}
        </div>
    )
}

export default CategoryHolder