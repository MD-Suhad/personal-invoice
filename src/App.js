import { useState } from "react";

import ClientDetails from "./conponents/ClientDetails";
import Dates from "./conponents/Dates";
import Footer from "./conponents/Footer";
import Header from "./conponents/Header";
import MainDetails from "./conponents/MainDetails";
import Notes from "./conponents/Notes";
import Table from "./conponents/Table";

function App() {
  const handlePrint = () => {
    window.print();
  };

  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [bankName, setBankName] = useState();
  const [bankAccount, setBankAccount] = useState();
  const [clientName, setClientName] = useState();
  const [clientAddress, setClientAddress] = useState();
  const [invoiceNumber, setInvoiceNumber] = useState();
  const [invoiceDate, setInvoiceDate] = useState();
  const [dueDate, setDueDate] = useState();
  const [notes, setNotes] = useState();
  const [website, setWebsite] = useState();

  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:max-auto lg:max-w-2xl xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />

            <MainDetails name={name} address={address} />

            <ClientDetails
              clientName={clientName}
              clientAddress={clientAddress}
            />

            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />

            <Table />

            <Notes notes={notes} />

            <Footer
              name={name}
              address={address}
              email={email}
              phone={phone}
              bankName={bankName}
              bankAccount={bankAccount}
              website={website}
            />

            <button
              onClick={() => setShowInvoice(false)}
              className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500
            hover:bg-transparent
            hover:text-blue-500 transition-all duration-300
            "
            >
              Edit Information
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-col  justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Your FullName</label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Enter your name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name">Enter Your Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10 mt-5 mb-5">
                <div className="flex flex-col">
                  <label htmlFor="name"> Your Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
        
                <div className="flex flex-col">
                  <label htmlFor="website"> Your Website link</label>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    placeholder="Enter your Website Url"
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone">Your Phone</label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter your Phone"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                <label htmlFor="bankName">Your BankName</label>
              <input
                type="text"
                name="bankName"
                id="bankName"
                placeholder="Enter your name"
                autoComplete="off"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
           </div>
           <div className="flex flex-col">
           <label htmlFor="bankAccount">Your AccountNumber</label>
              <input
                type="number"
                name="bankAccount"
                id="bankAccount"
                placeholder="Enter your bankAccount"
                autoComplete="off"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />
           </div>
              </article>
             <article className="md:grid grid-cols-2 gap-10 mt-16">
              <div className="flex flex-col">
              <label htmlFor="clientName">Enter Your ClientName</label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                placeholder="Enter your ClientName"
                autoComplete="off"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
              
              </div>
              <div className="flex flex-col">
              <label htmlFor="clientAddress">Enter Your ClientAddress</label>
              <input
                type="text"
                name="clientAddress"
                id="clientAddress"
                placeholder="Enter your ClientAddress"
                autoComplete="off"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />
              </div>
             </article>
             <article className="md:grid grid-cols-3 gap-10 mt-10 mb-5">
              <div className="flex flex-col">
              <label htmlFor="invoiceNumber">Your InvoiceNumber</label>
              <input
                type="number"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="Enter your InvoiceNumber"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
              
              
              </div>
              <div className="flex flex-col">
              <label htmlFor="invoiceDate">Your InvoiceDate</label>
              <input
                type="date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="Enter your InvoiceDate"
                autoComplete="off"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
              </div>
              <div className="flex flex-col">

              <label htmlFor="dueDate">Your Due Date</label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                placeholder="Enter your dueDate"
                autoComplete="off"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />  
              </div>
             </article>
              <label htmlFor="notes">Additional Notes</label>
              <textarea
                type="text"
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Additional Notes to the client"
                autoComplete="off"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />

              <button
                onClick={() => setShowInvoice(true)}
                className=" mt-4 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500
            hover:bg-transparent
            hover:text-blue-500 transition-all duration-300
            "
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
