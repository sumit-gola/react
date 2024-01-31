import React from 'react'


export const githubInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
 }
export default githubInfoLoader