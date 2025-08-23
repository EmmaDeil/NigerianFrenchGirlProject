import React, { useState } from 'react';

const Toast = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <button className="btn btn-primary mb-3" onClick={handleShow}>Show Toast</button>
      <div aria-live="polite" aria-atomic="true" className="position-relative">
        <div className="toast-container top-0 end-0 p-3">
          <div className={`toast${show ? ' show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true" style={{opacity: show ? 1 : 0, transition: 'opacity 0.5s'}}>
            <div className="toast-header">
              <img src="vite.svg" className="rounded me-2" alt="..." style={{width: 20, height: 20}}/>
              <strong className="me-auto">Bootstrap</strong>
              <small className="text-body-secondary">just now</small>
              <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
            </div>
            <div className="toast-body">
              See? Just like this.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toast;