import React from 'react'

export default function ClientDetails({clientName,clientAddress}) {
  return (
    <>
       <section className="mt-5">
        <h2 className="text-xl uppercase mb-1 text-gray-900 font-bold font-serif">{clientName}</h2>
        <p className="text-zinc-900 text-lg font-serif">{clientAddress}</p>
      </section>
    </>
  )
}
