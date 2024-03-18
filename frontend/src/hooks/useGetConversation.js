import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast"; // Assuming you are using react-hot-toast for notifications

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/users");
        const data = res.data; // Axios automatically parses response data
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations(); // Call getConversations function inside useEffect
  }, []); // Empty dependency array means the effect runs only once after the component mounts

  // Return loading state and conversation data to be used by the component
  return { loading, conversations };
};

export default useGetConversation;
