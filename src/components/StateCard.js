import React from 'react';

const StateCard = () => {
  const component = new React.Component();
  component.state = {
    button1: "On!",
    button2: 0,
    button3: "You",
  }
  component.handleButton1 = () => {
    alert("Button 1 pressed!")
  }
  component.handleButton2 = () => {}
  component.handleButton3 = () => {}
  component.render = () => {
    return(
      <div className="StateCard">
        <h2>Press some buttons!</h2>
        <div className="card-content">
          <div className="item">
            <button onClick={()=>{component.handleButton1()}}>
              Button 1
            </button>
            <p>Current status: {component.state.button1}</p>
          </div>
          <div className="item">
            <button onClick={}>
              Button 2
            </button>
            <p>Current count: ADD_STATE_HERE</p>
          </div>
          <div className="item">
            <button onClick={}>button 3</button>
            <p>Current word: ADD_STATE_HERE</p>
          </div>
        </div>
      </div>
    )
  }
  return component
}

export default StateCard;
