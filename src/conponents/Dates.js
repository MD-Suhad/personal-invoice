import React from 'react'

export default function Dates({invoiceNumber,invoiceDate,dueDate}) {
  return (
    <>

<article className="mt-5 mb-5 flex flex-col items-end justify-end">
  <ul>
    <li><span className="font-bold text-xl font-mono">Invoice Number:</span>{invoiceNumber}</li>
    <li><span className="font-bold text-xl font-mono">Invoice Date:</span>{invoiceDate}</li>
    <li><span className="font-bold font-mono text-xl">Due Date: </span>{dueDate}</li>
  </ul>
</article>
      
    </>
  )
}
