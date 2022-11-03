import React from 'react'

export default function ClientDetails({clientName,clientAddress}) {
  return (
    <>
       <section className="mt-5">
        <h2 className="text-xl uppercase  ">Client's Name:{clientName}</h2>
        <p>Client's Address:{clientAddress}</p>
      </section>
    </>
  )
}
