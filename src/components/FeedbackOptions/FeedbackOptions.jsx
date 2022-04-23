import React from 'react';
import PropTypes from 'prop-types';
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
    );
};


FeedbackOptions.propTypes = {
    onGoodFeedbackBtn: PropTypes.func.isRequired,
    onNeutralFeedbackBtn: PropTypes.func.isRequired,
    onBadFeedbackBtn: PropTypes.func.isRequired
};