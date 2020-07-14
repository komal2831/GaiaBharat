import React from 'react';

const Validation = (props) =>{ 

   let Value ="Text too long";
   if(props.inputlength <= 5){
      Value = "Text too short";
   }

   return(
       <div>
          { Value }
      </div>
   );
};

export default Validation;