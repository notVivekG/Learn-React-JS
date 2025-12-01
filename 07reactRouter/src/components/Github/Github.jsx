import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/notVivekG')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    
    return (
    <div className='flex flex-col items-center text-center m-4 bg-gray-600 text-white p-5 text-3xl'>
        <img className='p-4' src={data.avatar_url} alt="profilepic" width={300} />
        Github followers: {data.followers}
    </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/notVivekG')
    return response.json()
}