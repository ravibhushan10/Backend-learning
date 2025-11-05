const express=require("express");
const app=express();
const main=require("./aiChatting");

app.use(express.json());

// we will put the user history here
// key:value
// id    arry content

// Here you can use database(mongoDB/redis)
const chathistory={};



app.post("/chat",async(req,res)=>{

    const {id,msg}=req.body;
    if(!chathistory[id])
    {
        chathistory[id]=[];
    }

    const history=chathistory[id];

    // History+current prompt :array
    const promptmessage=[...history,{
        role:'user',
        parts:[{text:msg}]
    }]


    const ans = await main(promptmessage);

    history.push({role:'user',parts:[{text:msg}]});
    history.push({role:'user',parts:[{text:ans}]});
    res.send(ans);

})
    

app.listen(3000,()=>{
    console.log("Listining at port 3000");
})