
import React from 'react';

function MsgError({ msg }){

  return(
    <div className="alert alert-danger" role="alert">
      {msg}
    </div>
  );
}

export default MsgError;