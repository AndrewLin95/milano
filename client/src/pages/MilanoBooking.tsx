import React, { useState } from 'react';
import Appointments from '../components/Appointments/Appointments';
import Guests from '../components/Guests/Guests';
import Services from '../components/Services/Services';
import Staffs from '../components/Staffs/Staffs';
import AddPopup from '../components/Popup/AddPopup';
import './style.css';

const MilanoBooking = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddBtnClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // const testAPI = async () => {
  //   // test api
  //   console.log('test click');

  //   const url = '/api/guests';
  //   const requestOptions = {
  //     method: 'POST'
  //   };

  //   const response = await fetch(url, requestOptions);
  //   const data = await response.json();

  //   console.log(data);
  // };

  // const getInitalizationData = () => {
  //   // call to mongo to add guest to DB
  // };

  return (
    <div className="milanoBookingMain">
      {showPopup && <AddPopup closePopup={closePopup} />}
      <Guests handleAddBtnClick={handleAddBtnClick} />
      <Staffs />
      <Services />
      <Appointments />
    </div>
  );
};

export default MilanoBooking;
