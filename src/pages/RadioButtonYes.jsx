import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

function ThanksMessage() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <div>
      {show && (
        <Alert variant="success" onClose={handleClose} dismissible>
          <Alert.Heading>Merci!</Alert.Heading>
          <p>
            Nous vous remercions de votre visite sur notre site. N'hésitez pas à nous contacter si vous avez des questions ou des commentaires.
          </p>
        </Alert>
      )}
    </div>
  );
}

export default ThanksMessage;
