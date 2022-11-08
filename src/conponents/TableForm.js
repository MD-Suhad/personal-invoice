import React, {useState, useEffect } from "react";
import {RiChatDeleteLine} from "react-icons/ri"
import {CiEdit} from "react-icons/ci"
import { v4 as uuidv4 } from "uuid";

export default function TableForm({
  items,
  setItems,
  quantity,
  setQuantity,
  amount,
  setAmount,
  rate,
  setRate,
  list,
  setList,
  total,
  setTotal
}) {
  console.log(total);


   const [isEditing,setIsEditing] = useState(false);





  const handleSubmit = (e) => {
    e.preventDefault();

    if(!items || !quantity || !rate){
        alert("please fill in all inputs");
    }
    else{
      const newItems = {
        id: uuidv4(),
        items: items,
        quantity: quantity,
        rate: rate,
        amount: amount,
      };
      setItems("");
      setQuantity("");
      setRate("");
      setAmount("");
      setList([...list, newItems]);
      setIsEditing(false);
      //console.log(list);
    };

    }

    

   // calculate the items amount function

  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * rate);
    };
    calculateAmount(amount);
  }, [amount, rate, quantity, setAmount]);


  //calculate the total amount of items is table

  useEffect(()=>{
    let rows = document.querySelectorAll(".amount")
  let sum = 0;

  for( let i = 0; i <rows.length; i++ ) {

      if(rows[i].className === "amount"){
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotal(sum);
      }
      
  }

  },)




  


//   edit function

  const editRow = (id) =>{
      const editingRow = list.find((row) => row.id ===id)
      setList(list.filter((row) => row.id !== id))
      setIsEditing(true);
      setItems(editingRow.items);
      setQuantity(editingRow.quantity);
      setRate(editingRow.Rate);
      
      setAmount(editingRow.amount);
  }



    //delete function

  const deleteRow =   (id) =>{
   setList(list.filter((row) => row.id !== id))
  }              








  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col  mt:16">
          <label htmlFor="items">Items</label>
          <input
            type="text"
            id="items"
            name="items"
            value={items}
            onChange={(e) => setItems(e.target.value)}
            placeholder="Description of service of product"
          />
        </div>

        <div className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="quantity"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="rate">Rate</label>
            <input
              type="text"
              id="rate"
              name="rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder=""
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <p>{amount}</p>
          </div>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-5 mb-5  font-mono bg-blue-900 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500
            hover:bg-transparent
            hover:text-blue-900 transition-all duration-300
            "
        >
          {isEditing ?  "Edit Item" : "Add Item"}
        </button>
      </form>
      {/* table item in show */}

      <table width="100%" className="mb-5">
      <thead>
        <tr  className="bg-gray-500 p-1 text-white">
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
              <td className="font-mono pl-7">{items}</td>
              <td className="font-mono pl-7">{quantity}</td>
              <td className="font-mono pl-7">{rate}</td>
              <td className="amount">{amount}</td>
              <td><button  onClick={() =>deleteRow(id)}><RiChatDeleteLine
              className="font-bold text-red-500 text-xl"
              /></button></td>
              <td><button  onClick={() =>editRow(id)}><CiEdit
              className="font-bold text-blue-500 text-xl"
              /></button></td>
            </tr>
          </tbody>
          </React.Fragment>



           ))}

     </table>

     <div>
      <h3 className="mr-7 text-gray-900 font-bold font-mono flex items-end justify-end text-xl py-2">BDT:{total.toLocaleString()}</h3>
     </div>
    










      {/* <ul className="flex gap-10">
        {list.map(({ id, items, quantity, rate, amount }) => (
          <React.Fragment key={id}>
            <li key={id}>{items}</li>
            <li key={id}>{quantity}</li>
            <li key={id}>{rate}</li>
            <li key={id}>{amount}</li>
          </React.Fragment>
     
      </ul> */}
    </>
  );
}
