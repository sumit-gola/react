import {React, useEffect,useState } from 'react'
// import {useLoaderData} from 'react-router-dom'

const Github = () => {
    // const data = useLoaderData();
    const [data, setData] = useState('')
    useEffect(() => {
      fetch('https://api.github.com/users/hiteshchoudhary')
      .then(response=>response.json())
      .then(data=>{
         console.log(data);
         setData(data);
 
      })
    }, [])
    
  return (
    <>
  
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src={data.avatar_url}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500"></h2>
            <h1 className="my-4 text-3xl font-semibold text-black">{data.name}</h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                
                <span className="ml-3 inline-block text-xs font-semibold">{data.followers} Followers</span>
              </span>
            </div>
            <p className="leading-relaxed">
              {data.bio}
            </p>
           
          </div>
        </div>
      </div>
    </section>

    </>
  )
}
// export  const githubInfoLoader = async() =>{
//     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//     return response.json()
//  }
export default Github
