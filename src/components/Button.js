import React from 'react';

const Button = ({cssname, handleClick, children}) => <div className={cssname} onClick={handleClick}>{children}</div>
export default Button
