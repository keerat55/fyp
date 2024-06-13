import { useState, useEffect } from "react";
import { ethers } from "ethers";
const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const memosMessage = async () => {
      try {
        if (!contract) {
          console.error("Contract is not defined.");
          return;
        }
        
        // Validate ABI and Contract Address
        console.log("Contract ABI:", contract.interface);
        console.log("Contract Address:", contract.address);

        // Call getMemos
        const memos = await contract.getMemos();
        console.log("Fetched Memos:", memos);

        setMemos(memos);
      } catch (error) {
        console.error("Error fetching memos:", error);

        // Check if the error is due to call revert
        if (error.code === ethers.errors.CALL_EXCEPTION) {
          console.error("Call exception reason:", error.reason);
          // Additional logic for handling call revert can be added here
        }
      }
    };

    if (contract) {
      memosMessage();
    }
  }, [contract]);

  // Render memos or error message
  return (
    <div>
      {memos.length > 0 ? (
        memos.map((memo, index) => <div key={index}>{memo}</div>)
      ) : (
        <p>No memos found or unable to fetch memos.</p>
      )}
    </div>
  );
};

export default Memos;