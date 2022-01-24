import React from 'react';
import './VerifySendMessage.css';

const VerifySendMessage = () => {
  return (
    <div className="send-email-verification">
      <p className="litle-message">
        Hemos enviado un correo de confirmación. Por favor revisa tu bandeja
        entrada o spam{' '}
      </p>
      <p className="welcome-message">Confirmar tu correo</p>
      <img
        src="/image/message.png"
        alt="welcome-repeco"
        className="verification-image"
      />
    </div>
  );
};

export default VerifySendMessage;
