import React,{useState} from "react";

function Quizapp()
{

    const quizdata=[
        {
            question: "what is reactjs?",
            options:["library","framework","database","language"],
            answer: "library",
        },
        {
            question: "which hook is used for statemanagement?",
            options:["useeffect","usestate","usereducer","usememo"],
            answer: "usestate",
        },

         {
            question: "who was developed reactjs?",
            options:["google","facebook","microsoft","amazon"],
            answer: "facebook",
        },

          {
            question: "who is our deputy cm of andhrapradesh?",
            options:["pavankalyan","roja","chiranjeevi","kodali nani"],
            answer: "pavankalyan",
        },

          {
            question: "in which state is dhrmastala",
            options:["chennai","kerala","karnataka","delhi"],
            answer: "karnataka",
        },

          {
            question: "what is capital of india",
            options:["chennai","delhi","karnataka","hyd"],
            answer: "delhi",
        },

          {
            question: "who was taken highest national awards in india",
            options:["chiranjeevi","kamalhasan","amitabh bachan","rajanikanth"],
            answer: "kamalhasan",
        },
          {
            question: "who was first invented computer",
            options:["charlesbabbage","milton","mahindra","stevejacobs"],
            answer: "charlesbabbage",
        },

        {
            question: "who was ceo of microsoft",
            options:["manohar","ramurthy","satyanadella","jacob"],
            answer: "satyanadella",
        },

        {
            question: "who was achieved 100 centuries in cricket ",
            options:["dhoni","sehwag","ganguly","sachin"],
            answer: "sachin",
        },
        
    ];
    const[currentindex,setCurrentindex]=useState(0);
    const[score,setScore]=useState(0);
    const[isfinished,setIsfinished]=useState(false);

    const handleanswerclick=(option)=>{
        if(option=== quizdata[currentindex].answer)
        {
            setScore(score+1);
        }

        if(currentindex+1 < quizdata.length)
            {
            setCurrentindex(currentindex+1);
        }
        else{
            setIsfinished(true);
        }
    }

    const restartquiz=()=>
    {
        setCurrentindex(0);
        setScore(0);
        setIsfinished(false);
    }
    return(
    <div>
    <h2>quiz app</h2>
    {
        isfinished ? (
            <div>
            <h2>your score {score} /{quizdata.length}</h2>
            <button onClick={restartquiz}>restart quiz</button>
            </div>
        ) : (

        <div>
        <h2>question {currentindex+1} of {quizdata.length}</h2>
        <p>{quizdata[currentindex].question}</p>
        {quizdata[currentindex].options.map((option)=>(
            <button key={option} onClick={()=>handleanswerclick(option)}>{option}</button>
        ))}
        </div>
   ) }
    </div>
    )
    
}

export default Quizapp;