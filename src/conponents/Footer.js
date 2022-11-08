import React from 'react'

export default function Footer({name,address,bankName,bankAccount,phone,website,email}) {
  console.log(name,address);
  return (
   <>
    <footer className="footer border-t-2 border-gray-300 pt-5">
    <ul className="flex flex-wrap items-center justify-center">
      <li><span className="font-bold font-mono">Name:</span>{name}</li>
      <li><span className="font-bold font-mono"> Address:</span>{address}</li>
      <li><span className="font-bold font-mono">Email:</span>{email}</li>
      <li><span className="font-bold font-mono">P/N Number:</span>{phone}</li>
      <li><span className="font-bold font-mono">Bank:</span>{bankName}</li>
      <li><span className="font-bold font-mono">Account Holder:</span>{name}</li>
      <li><span className="font-bold font-mono">Account Number:</span>{bankAccount}</li>
      <li><span className="font-bold font-mono">Website</span>{website}
      </li>
    </ul>
  </footer>
      
    </>
  )
}
