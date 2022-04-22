import { BtnList, BtnItem, Btn} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({onGoodFeedbackBtn, onNeutralFeedbackBtn, onBadFeedbackBtn}) => {
    
    return (
        <BtnList className="btn-list">
           
           <BtnItem className="btn-item">
                <Btn className="btn good" type="button" onClick={() => {
                    onGoodFeedbackBtn()
                }}>Good</Btn> 
            </BtnItem> 
            <BtnItem className="btn-item">
                <Btn className="btn good" type="button" onClick={() => {
                    onNeutralFeedbackBtn()
                }}>Neutral</Btn> 
            </BtnItem> 
            <BtnItem className="btn-item">
                <Btn className="btn good" type="button" onClick={() => {
                    onBadFeedbackBtn()
                }}>Bad</Btn> 
            </BtnItem> 
        </BtnList>
        // <BtnList className="btn-list">
           
        //     {options.map(item => {
               
        //         return (
        //             <BtnItem key={item} className="btn-item">
        //                 <Btn key={item} className="btn" type="button" onClick={() => {
        //                     onLeaveFeedback(item);
        //                 }}>{item.replace(item[0], item[0].toUpperCase())}</Btn> 
        //             </BtnItem>  
        //         )
        //     })}
        // </BtnList>
        
    );
};
