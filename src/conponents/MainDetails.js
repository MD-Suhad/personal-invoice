import React from 'react'

export default function MainDetails({name,address}) {
  //console.log(name,address);
  return (
    <>
      <section className="flex flex-col items-end justify-end">
        <h2 className="text-2xl uppercase font-bold font-serif ">{name}</h2>
        <p className="text-zinc-900 font-serif">{address}</p>
      </section>
    </>
  )
}
