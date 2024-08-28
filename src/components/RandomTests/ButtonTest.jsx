import { useState } from 'react';
const ButtonTest = () => {
  const [toggleOnOff, setToggleOnOff] = useState(false);
  const toggleDict = {
    true: 'ON',
    false: 'OFF',
  };

  const toggleBg = toggleOnOff ? 'green' : 'red';
  const handleClick = () => {
    setToggleOnOff((prevState) => !prevState);
  };
  return (
    <div>
      <button
        style={{
          background: toggleBg,
          border: 'none',
          padding: '4px 12px',
          borderRadius: '4PX',
          color: 'white',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        {toggleDict[toggleOnOff]}
      </button>
    </div>
  );
};

export default ButtonTest;
