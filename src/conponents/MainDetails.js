import React from 'react'

export default function MainDetails({name,address}) {
  console.log(name,address);
  return (
    <>
      <section className="flex flex-col items-end justify-end">
        <h2 className="text-xl uppercase fond-bold ">{name}</h2>
        <p>{address}</p>
      </section>
    </>
  )
}
