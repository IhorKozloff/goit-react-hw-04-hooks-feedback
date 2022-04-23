import React from 'react';
import PropTypes from 'prop-types';
import { FeedBackSection, Tittle } from 'components/Section/Section.styled';



export const Section = ({title, children}) => {
    return (
        <FeedBackSection>
            <Tittle>{title}</Tittle>
            {children}
        </FeedBackSection>  
    );
};


Section.propTypes = {
    title: PropTypes.string.isRequired,
};