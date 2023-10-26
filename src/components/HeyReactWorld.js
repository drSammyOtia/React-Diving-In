import React from 'react'

function HeyReactWorld() {

    const greeting = "Hey ReactWorld";
    const briefings = "My Name Is Sammy Otia"
    const link = "https://www.sammyotia.pythonanywhere.com/"



  return (
    <div>
        <div>{greeting}</div>
        <div>{briefings}</div>
        <a href={link}> visit my website for my recent pojects and portfolio </a>
    </div>
  )
}

export default HeyReactWorld