
const PORT = process.env.PORT || 80


  const TelegramBot = require("node-telegram-bot-api");
  const Token ='1337356141:AAF29ZbidJbRabn-UWEeI94K8v_VQ8dZRUw';
  const bot = new TelegramBot(Token , { 
    polling : {
        interval : 300,
        autostart : true,
        Params: {
            timeout: 10
        },
        
    }});
    let chatid;
    console.log('Bot has been started ....');
    bot.on('message', function (msg) {
            chatid = msg.chat.id;
             bot.sendMessage(chatid,"hi"
            if (msg.new_chat_member != null || msg.left_chat_member != null){
                bot.sendMessage(chatid, JSON.stringify(msg, null, 4));
                bot.deleteMessage(chatid, msg.message_id);
                bot.sendMessage(chatid,'Assalomu alaykum'+msg.new_chat_member.first_name,{
                    MessageEntity:{
                       
                    }
                }) ;
            }
            
            if ( msg.left_chat_member != null){
                bot.sendMessage(chatid, JSON.stringify(msg, null, 4));
                bot.deleteMessage(chatid, msg.message_id);
            
            }
    


        });
    


