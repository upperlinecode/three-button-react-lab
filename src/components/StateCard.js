import React from 'react';

const StateCard = () => {
  const component = new React.Component();
  component.state = {
    button1: "On!",
    button2: 0,
    button3: "You",
  }
  component.handleButton1 = () => {
    if (component.state.button1 === "On!") {
      component.setState({button1: "Off..."})
    } else {
      component.setState({button1: "On!"})
    }
  }
  component.handleButton2 = () => {
    let count = component.state.button2
    count += 1
    component.setState({button2: count})
  }
  component.handleButton3 = () => {
    if (component.state.button3 === "You") {
      component.setState({button3: "are"})
    } else if (component.state.button3 === "are") {
      component.setState({button3: "Cool!"})
    } else {
      component.setState({button3: "You"})
    }
  }
  component.render = () => {
    return(
      <div className="StateCard">
        <h2>Press some buttons!</h2>
        <div className="card-content">
          <div className="item">
            <button onClick={()=>{component.handleButton1()}}>Button 1</button>
            <p>Current status: {component.state.button1}</p>
          </div>
          <div className="item">
            <button onClick={()=>{component.handleButton2()}}>Button 2</button>
            <p>Current count: {component.state.button2}</p>
          </div>
          <div className="item">
            <button onClick={()=>{component.handleButton3()}}>button 3</button>
            <p>Current word: {component.state.button3}</p>
          </div>
        </div>
      </div>
    )
  }
  return component
}

export default StateCard;
