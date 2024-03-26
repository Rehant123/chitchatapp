import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../../zustand/useConversation";
import notificationSound from "../assets/mixkit-confirmation-tone-2867.wav";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      try {
        const sound = new Audio(notificationSound);
        sound.play();
      } catch (error) {
        console.error("Error playing notification sound:", error);
      }
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
