import React, { useEffect, useState } from "react";
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistic } from 'components/Statistics/Statistics';
import { Notification } from "components/Notification/Notification";


export const App = () => {

    const [good, setGood] = useState(0);
    function handleSetGood(){
        setGood(prevState => prevState + 1);
    };

    const [neutral, setneutral] = useState(0);
    function handleSetNeutral(){
        setneutral(prevState => prevState + 1);
    };

    const [bad, setbad] = useState(0);
    function handleSetBad(){
        setbad(prevState => prevState + 1);
    };

    const [total, setTotal] = useState();
    const [percentage, setPercentage] = useState();


    useEffect(() => {
        setTotal(good + neutral + bad);

        setPercentage(() => {
            const percentResult = Math.round(good * 100 / total);
            return isNaN(percentResult) ? 0 : percentResult;
        });
    },[good, neutral, bad, total])



    

    const dataObj = {good:good ,neutral:neutral, bad:bad};
    // Некогда было секцию статистики переделывать.
    
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
                {total === 0 
                    ?   <Notification message="There is no feedback"/> 
                    :   <Statistic 
                            data={dataObj}
                            total={total}
                            positivePercentage={percentage}
                        />
                }
            </Section>    
        </>
    );
};