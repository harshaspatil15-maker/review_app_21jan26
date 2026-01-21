const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());


app.post("/save",(req,res) =>{
                            const url = "mongodb+srv://harshaspatil15_db_user:bRJYLdwVCKpQ5e1a@cluster0.c7ogshs.mongodb.net/?appName=Cluster0";
                            const con = new MongoClient(url);
                            const db = con.db("review6jan26");
                            const coll = db.collection("review");
                            const doc = {"name":req.body.name,"phone":req.body.phone,"review":req.body.text};
                            coll.insertOne(doc)
                           .then(response =>{
                                         res.send(response);
                           })
                           .catch(error =>{
                                        res.send(error);
                          });
      });



app.listen(9000, () =>{
              console.log("ready @ 9000");
});


 

                            
