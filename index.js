const port = process.env.PORT || 80;


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
    
            
              
     if (msg.new_chat_members != null ){
              
      if (msg.new_chat_member.is_bot== false){
      for(let i=0;i<msg.new_chat_members.length;i++){
        let mark = Salom ,[${msg.new_chat_members[i].first_name}](tg://user?id=${msg.new_chat_members[i].id})Guruhimizga xush kelibsiz;
         bot.sendMessage(chatid,mark,{
           parse_mode:"Markdown"
         });
       }
      }
        bot.deleteMessage(chatid, msg.message_id);
        if (msg.new_chat_member.is_bot== true && msg.new_chat_member.username!='active_e_bot'){
          for(let i=0;i<msg.new_chat_members.length;i++)
          bot.kickChatMember(chatid,msg.new_chat_members[i].id)
        }
          
        }   
            
    
            if ( msg.left_chat_member != null){

               
                bot.deleteMessage(chatid, msg.message_id);
            
            }
    
             bot.onText(/\/betlash (.+)/,(mesg,[command,text])=>{
              
              
    let pagen = +text
    let input1='' ;
    let input2='' ;
    let mas =[];
    let mas2 =[];
    
    
    if(pagen%4===1){
         bot.sendMessage(mesg.chat.id,'Chiqarish uchun filening davomiga 3 bet qo`shing va qaytadan betlar sonini kiriting');
      
    }else if (pagen%4===2){
      bot.sendMessage(mesg.chat.id,'Chiqarish uchun filening davomiga 2 bet qo`shing va qaytadan betlar sonini kiriting');
       
    } else  if (pagen%4 === 3){
      bot.sendMessage(mesg.chat.id,'Chiqarish uchun filening davomiga 1 bet qo`shing va qaytadan betlar sonini kiriting');
       
       } else  if (pagen == null||pagen==""){
        bot.sendMessage(mesg.chat.id,' Betlar sonini kiriting');
       
       }else  if (pagen % 4 === 0){
        bot.sendMessage(mesg.chat.id,'Chiqarish uchun filening davomiga 1 bet qo`shing va qaytadan betlar sonini kiriting');
        function paging(number){
          for (let i= 0;i<number/4;i++){
              let right = number-2*i;
              let leftn = 1+2*i;
              
              mas[i]=right+','+leftn;
              
              
          }
          for (let i= 0;i<number/4;i++){
              let right = number/2-(2*i);
              let leftn = number/2+1+2*i;
              
              mas2[i]=right+','+leftn;
              console.log(mas2[i]);
              
          }
          }
  paging(pagen);
     for(let i = 0;i<mas.length;i++){
     input1 += mas[i]+',';
     input2 += mas2[i]+',';       
     }    

     
     bot.sendMessage(mesg.chat.id,Birinchi: ${input1})
     bot.sendMessage(mesg.chat.id,Ikkinchi: ${input2})
         }
      })

        });
