import React from 'react'

export default function Table({items,quantity,rate,amount,list,total}) {
  console.log(items)
  return (
    <>
         <table width="100%" className="mb-5">
      <thead>
        <tr  className="bg-gray-500 p-2 text-white">
          <td className="font-bold font-mono pl-7">Item</td>
          <td className="font-bold font-mono">Quantity</td>
          <td className="font-bold font-mono">Price</td>
          <td className="font-bold font-mono">Amount</td>

          </tr>

          </thead>
          {list.map(({ id, items, quantity, rate, amount }) => (
            <React.Fragment key={id}>
          <tbody>
            <tr>
              <td className="font-mono  pl-7">{items}</td>
              <td className="font-mono">{quantity}</td>
              <td className="font-mono">{rate}</td>
              <td className="font-mono">{amount}</td>
            </tr>
          </tbody>
          </React.Fragment>



           ))}

     </table>
     <div>
      <h3 className="flex items-end justify-end text-gray-900 font-bold text-xl py-2 mr-5 font-mono ">BDT:{total.toLocaleString()}</h3>
     </div>
    </>
  )
}
