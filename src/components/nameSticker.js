import React from 'react';
import PropTypes from 'prop-types';

const NameSticker = props => {
  const { name } = props;
  return (
    <div>
      <h3>HELLO</h3>
      <p>My name is</p>
      <div>
        <p>{name}</p>
      </div>
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
