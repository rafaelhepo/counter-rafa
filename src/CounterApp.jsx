
import { useState } from 'react';
import PropTypes from 'prop-types';



export const CounterRafa = ( { value } ) => {

    const [ counter, setCounter ] = useState( value )

    const Add = () => { 
       setCounter(counter + 1);
     }

     const Substract = () => setCounter(counter - 1);

     const Reset = () => setCounter(value);



  return (
    <>
      <h1>Rafael Counter</h1>
      <h2> { counter } </h2>
      {/* <div className='container-numbers'> */}
        <button className='plus-one' onClick={ Add }> +1 </button>
        <button className='minus-one' onClick={ Substract }> -1 </button>
        <button className='reset' onClick={Reset}> Reset </button>
      {/* </div> */}
    </>
  )
}


CounterRafa.propTypes = {
    value: PropTypes.number.isRequired,
}