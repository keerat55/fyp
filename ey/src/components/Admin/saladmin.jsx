// App.js
import React, { useState, useEffect } from "react";


const SalAdmin = () => {
  const [contract, setContract] = useState(null);
  const [memos, setMemos] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const contractABI = [
    
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "message",
            "type": "string"
          }
        ],
        "name": "buyChai",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
      },
      {
        "inputs": [],
        "name": "getMemos",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "message",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "from",
                "type": "address"
              }
            ],
            "internalType": "struct SimpleStorage.Memo[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      }
    
  ];

  const contractAddress = '0x7FE07555B7A30F0b4792aD9582180f5d8145702B'; // Replace with your contract address

 // useEffect(() => {
    /* const initContract = async () => {
      try {
        const web3 = new Web3("http://localhost:7545");
        const instance = new web3.eth.Contract(contractABI, contractAddress);
        setContract(instance);
        refreshMemos(instance);
      } catch (error) {
        console.error("Error connecting to contract", error);
      }
    };
    initContract();
  }, []); */

  /* const refreshMemos = async (contractInstance) => {
    try {
      const memos = await contractInstance.methods.getMemos().call();
      console.log("Memos:", memos);
      setMemos(memos);
    } catch (error) {
      console.error("Error fetching memos:", error);
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  }; */

/*   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      await contract.methods.buyChai(name, message).send({ value: Web3.utils.toWei("0.1", "ether"), from: "0x4dD7741eBB56BEFA6EA7d040D0A347E0F2Bbce01", gas: 3000000 });
      refreshMemos(contract);
      setName("");
      setMessage("");
    } catch (error) {
      console.error("Error buying chai:", error);
    }
  }; */

  return (
    <div className="Assignmmetamask">
      <h1>Simple Storage Dapp</h1>
      <form >
        <input
          type="text"
          value={name}
          //onChange={handleChangeName}
          placeholder="Name"
        />
        <br />
        <input
          type="text"
          value={message}
         // onChange={handleChangeMessage}
          placeholder="Message"
        />
        <br />
        <button type="submit">Buy Chai</button>
      </form>
      <div>
        <h2>Memos</h2>
        <ul>
          {memos.map((memo, index) => (
            <li key={index}>
              <p>Name: {memo.name}</p>
              <p>Message: {memo.message}</p>
              {/* <p>Timestamp: {new Date(memo.timestamp * 1000).toString()}</p> */}
              <p>From: {memo.from}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SalAdmin;
