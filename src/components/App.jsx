import React, { useState } from "react";
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistic } from 'components/Statistics/Statistics';
import { Notification } from "components/Notification/Notification";




export const App = () => {

const [good, setGood] = useState(0);
function handleSetGood(){
    setGood(prevState => prevState + 1);
}

const [neutral, setneutral] = useState(0);
function handleSetNeutral(){
    setneutral(prevState => prevState + 1);
}

const [bad, setbad] = useState(0);
function handleSetBad(){
    setbad(prevState => prevState + 1);
}




function countTotalFeedback () {
    return good + neutral + bad;
}

function countPositiveFeedbackPercentage () {
    const percentResult = Math.round(good * 100 / countTotalFeedback());
    return isNaN(percentResult) ? 0 : percentResult;  
}

  
    

const dataObj = {good:good ,neutral:neutral, bad:bad};
    
    return (
        <>
        <Section title="Please leave feedback">
            <FeedbackOptions 
                onGoodFeedbackBtn={handleSetGood} 
                onNeutralFeedbackBtn={handleSetNeutral} 
                onBadFeedbackBtn={handleSetBad} 
            /> 
        </Section>
            
              
        <Section title="Statistics">



            {countTotalFeedback() === 0 
                ?   <Notification message="There is no feedback"/> 
                :   <Statistic 
                        data={dataObj}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}
                    />
            }
            
        </Section>
            
              
        </>
    )
  
}