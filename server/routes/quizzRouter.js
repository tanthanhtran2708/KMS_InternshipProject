const express = require('express');
const quizzSchema=require('../models/quizzSchema');

let router = express.Router();
let questionNumber=1;
let totalAns="";
const bodyParser=require('body-parser');
const urlencoded=bodyParser.urlencoded({ extended: false });
let myArr=[];

const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/myDB");


let IDUser="10";
let IDMatching="20";



router.use(urlencoded);
router.use(bodyParser.json());

router.post("/ans",urlencoded,(req,res,next)=>{
    if (questionNumber<=5){ 
        //if question number <= 5 -> do quizz until finished (load paged everytime)
        totalAns+=req.body.ans;

        res.json({
            Yourans: req.body.ans,
            Total:totalAns
        })
        questionNumber++;  
    }
    else{
        //create an schema
        //checking wheather the partner send their data.
        //grading.
        //send respone.  
        let ansSchema=new quizzSchema({
            userID: IDUser,
            userAns: totalAns
        });

        //insert to the db
        quizzSchema.collection.insert(ansSchema);
        res.status(200).json({
            mess:"Inserted finished"
        })

        //check if the partner has sent their ans
        quizzSchema.find({userID:IDMatching}).then((data)=>{
           if(data)
           {
               //console.log(data);
             let partnerAns=(data[0].userAns);
               let grade=0;
               for (let i=0;i<partnerAns.length;i++)
               {
                   if(partnerAns[i]==totalAns[i])
                   {
                       grade++;
                   }
               }
               //respone the grade
              // console.log(grade)
              res.status(200).json({
                  mess:"YOUR GRADE",
                  yourgrade:grade
              })
               
           }
           else{//handling err
            ;
               //handling and throw err.
               //waiting or leave room.
          

           }
        })
    }

   
   
   
   
    // console.log("Here is your ans: "+req.body.ans);
    
    //console.log("Total ans: "+totalAns);
   
})

module.exports = router;