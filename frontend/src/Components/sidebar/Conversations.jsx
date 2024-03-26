import React from "react";
import Conversation from "./Conversation.jsx";
import useGetConversation from "../../hooks/useGetConversation.js";
import { getRandomEmoji } from "../../utils/emoji.js";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {console.log(conversations)}
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {/* Example placeholder Conversations */}
    </div>
  );
};

export default Conversations;
