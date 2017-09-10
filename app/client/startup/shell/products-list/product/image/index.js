import React from 'react';

export default ({ image: { contentType, data }}) => (
  <div>
    <img src={`data:${contentType};base64,${data}`} />
  </div>
);