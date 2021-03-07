import React from 'react';
import PropTypes from 'prop-types';

function PopUp({close}) {
  return (
    <div className="popup">
      <div className="popup-body">
        <div className="popup-title">Selamat Datang</div>
        <p className="popup-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button onClick={close} className="popup-close">Close</button>
      </div>
    </div>
  )
}

PopUp.propTypes = {
  close: PropTypes.func
}

export default PopUp;