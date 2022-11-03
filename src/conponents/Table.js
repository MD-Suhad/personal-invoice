import React from 'react'

export default function Table() {
  return (
    <>
     <table width="100%">
      <thead>
        <tr  className="bg-gray-200">
          <td>Description</td>
          <td>Quantity</td>
          <td>Price</td>
          <td>Amount</td>

          </tr>

          </thead>
          <tbody>
            <tr>
              <td>Some really long description here</td>
              <td>20</td>
              <td>500</td>
              <td>10000</td>
            </tr>
          </tbody>

     </table>
    </>
  )
}
