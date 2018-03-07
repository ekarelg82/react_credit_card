import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

function CreditCard({data}){
  const {namebank, number, cv2, date, ownername} = data;
  return(
<div className="credit-card">
<div className="image"></div>
<div className="logo"></div>
 <div className="bank-name">{namebank} </div>
 <div className="card-number">{number}</div>
 <div className="cv2-code">{cv2}</div>
 <div className="valid">Valid Thru
  <span className="expiration-date"> {date}</span>
 </div>
 <div className="owner-name">{ownername} </div>
 <div className="visa"></div>
</div>
);
}

CreditCard.PropTypes = {
data: PropTypes.shape({
namebank:PropTypes.string.isRequired,
number:PropTypes.number.isRequired,
cv2:PropTypes.number.isRequired,
date:PropTypes.string.isRequired,
ownername:PropTypes.string.isRequired
}).isRequired
}
const Card={
  namebank : 'Chase Bank, JP Morgan.',
  number: '1234   5678   9101   1121',
  cv2 : '314',
  date : '11/20',
  ownername : 'Karel E. Guerra Perez'
}

ReactDOM.render(<CreditCard data={Card}/>, document.getElementById('root'));
