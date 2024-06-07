import { useState } from 'react'; // Import useState for state management

const Head = () => {
  const [selectedValue, setSelectedValue] = useState(''); // State for selected dropdown value

  const handleClick = (event:any) => {
    setSelectedValue(event.target.textContent); // Update state on click
  };

  return (
    <div className="header-section">
      {/* Menu Left Section (assuming no functionality needed here) */}
      <div className="top_menu">
        <div className="profile_details_left">
          <ul className="nofitications-dropdown">
            <li className="dropdown note dra-down">
              {/* Display selected value */}
              <span>{selectedValue}</span>
              <ul className="dropdown-menu"> {/* Use dropdown-menu class */}
                <li onClick={handleClick}>Option 1</li>
                <li onClick={handleClick}>Option 2</li>
                {/* Add more options as needed */}
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <p style={{ paddingTop: '10px', color: 'white', textAlign: 'center' }}>
        Attendance Management System
      </p>
    </div>
  );
};

export default Head;
