import { useState } from "react";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";
import messageSound from "../assets/sendmessage.wav";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  // Define the audio element
  const sound = new Audio(messageSound);

  const sendMessage = async (messageContent) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `/api/message/send/${selectedConversation._id}`,
        { message: messageContent }
      );

      const data = response.data;
      console.log(data);
      setMessages([...messages, data]);
      if (data.error) throw new Error(data.error);

      // Play the sound upon successful message sending
      sound.play();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
