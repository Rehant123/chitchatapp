

import  Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: recieverId } = req.params;

        // Get sender id of the current user
        const senderId = req.user_id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, recieverId] }
        });

        if (!conversation) {
            // Start a new conversation
            conversation = await Conversation.create({
                participants: [senderId, recieverId]
            });
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            message
        });

        // Add message to the conversation
        conversation.message.push(newMessage._id);
        // Save conversation and message
        await Promise.all([conversation.save(), newMessage.save()]);

        // Send response with the new message
        res.status(200).json(newMessage);
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
 export const getMessages = async function(req,res){
    try{
        const {id:userToChatId  } = req.params;
        const senderId = req.user_id;
        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]}
            //remember we had    message:[
        //{type:mongoose.Schema.Types.ObjectId,
          //  ref:"Message",
         //default:[],
    //}

        }).populate("message");

        if(!conversation)
        return res.status(200).json([]);
    // const message = conversation.message;
    const message = conversation.message;
    res.status(200).json(message);
    }catch(e){
        res.status(500).json({error:'Internal Server Error'});
    }
 }