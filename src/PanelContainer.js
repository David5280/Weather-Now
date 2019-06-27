import React from 'react';

const PanelContainer = (props) => {
  console.log(props.forecast)
  return (
    <main>
      <h4>Container</h4>
      <div className='weather-panel-area'>
        {/* {fiveDayForcast} */}
      </div>
    </main>
  )
}

export default PanelContainer;