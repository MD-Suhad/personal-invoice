import React from 'react'

export default function Dates({invoiceNumber,invoiceDate,dueDate}) {
  return (
    <>

<article className="mt-5 flex flex-col items-end justify-end">
  <ul>
    <li><span className="font-bold">Invoice Number:</span>{invoiceNumber}</li>
    <li><span className="font-bold">Invoice Date:</span>{invoiceDate}</li>
    <li><span className="font-bold">Due Date: </span>{dueDate}</li>
  </ul>
</article>
      
    </>
  )
}
