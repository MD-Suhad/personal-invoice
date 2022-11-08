import React from 'react'

export default function Table({items,quantity,rate,amount,list,total}) {
  console.log(items)
  return (
    <>
         <table width="100%" className="mb-5">
      <thead>
        <tr  className="bg-gray-200 p-1 ">
          <td className="font-bold">Item</td>
          <td className="font-bold">Quantity</td>
          <td className="font-bold">Price</td>
          <td className="font-bold">Amount</td>

          </tr>

          </thead>
          {list.map(({ id, items, quantity, rate, amount }) => (
            <React.Fragment key={id}>
          <tbody>
            <tr>
              <td>{items}</td>
              <td>{quantity}</td>
              <td>{rate}</td>
              <td>{amount}</td>
            </tr>
          </tbody>
          </React.Fragment>



           ))}

     </table>
     <div>
      <h3 className="flex items-end justify-end text-gray-400 font-bold text-2xl py-2">BDT:{total.toLocaleString()}</h3>
     </div>
    </>
  )
}
