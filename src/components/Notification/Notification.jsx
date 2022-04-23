import React from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'components/Notification/Notification.styled';


export const Notification = ({message}) => {
    return (
        <Notify className="notify">
            {message}
        </Notify>
    );
};


Notification.propTypes = {
    message: PropTypes.string.isRequired,
};