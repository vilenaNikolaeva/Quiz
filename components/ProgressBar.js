import React from "react";

const ProgressBar = (props) => {
    const { bgcolor, completed, seconds } = props;

    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      marginBottom: 50
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 1s ease-in-out'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          {/* <span style={labelStyles}>{`${seconds}`}</span> */}
        </div>
      </div>
    );
  };
  
  export default ProgressBar;