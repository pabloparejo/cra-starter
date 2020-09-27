import React from 'react';
import PropTypes from 'prop-types';

const NameSticker = props => {
  const { name } = props;
  return (
    <div
      style={{
        backgroundColor: 'red',
        borderRadius: 12,
        color: 'white',
        textAlign: 'center',
        paddingBottom: 1,
        maxWidth: 300
      }}
    >
      <h3 style={{ fontSize: 28, marginBottom: 0 }}>HELLO</h3>
      <p style={{ margin: 0 }}>My name is</p>
      <p
        style={{ margin: '15px 0', color: 'black', fontSize: 30, padding: '20px 0', backgroundColor: 'white' }}
      >
        {name}
      </p>
    </div>
  );
};

NameSticker.propTypes = {
  name: PropTypes.string,
};

NameSticker.defaultProps = {
  name: ''
};

export default NameSticker;
