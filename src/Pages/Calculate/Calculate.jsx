import React, { useState } from 'react';
import './calculate.css';
import Navbar from '../../Components/NavBar/NavBar';

const IndividualCarbonCredit = () => {
  const [electricityUsage, setElectricityUsage] = useState(0);
  const [gasUsage, setGasUsage] = useState(0);
  const [carMileage, setCarMileage] = useState(0);
  const [carbonCredit, setCarbonCredit] = useState(0);

  const calculateCarbonCredit = () => {
    // Simplified calculations for individual carbon credit
    const electricityEmissions = electricityUsage * 0.5; // arbitrary factor
    const gasEmissions = gasUsage * 2; // arbitrary factor
    const carEmissions = carMileage * 0.3; // arbitrary factor

    const totalEmissions = electricityEmissions + gasEmissions + carEmissions;
    // Adjust the carbon credit calculation based on your specific criteria

    // Calculate carbon credit based on emissions
    const carbonCreditValue = 100 - totalEmissions;

    setCarbonCredit(carbonCreditValue);
  };

  return (
    <div className="carbon-credit-section">
      <h2>Calculate Your Carbon Credit</h2>
      <label>
        Electricity Usage (kWh):
        <input
          type="number"
          value={electricityUsage}
          onChange={(e) => setElectricityUsage(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <label>
        Gas Usage (therms):
        <input
          type="number"
          value={gasUsage}
          onChange={(e) => setGasUsage(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <label>
        Car Mileage (miles):
        <input
          type="number"
          value={carMileage}
          onChange={(e) => setCarMileage(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <button onClick={calculateCarbonCredit}>Calculate Carbon Credit</button>
      <br />
      <div className="carbon-credit-result">
        <h3>Your Carbon Credit: {carbonCredit.toFixed(2)}</h3>
      </div>
    </div>
  );
};

const CompanyCarbonFootprint = () => {
  const [employeeCount, setEmployeeCount] = useState(0);
  const [officeEmissions, setOfficeEmissions] = useState(0);
  const [manufacturingEmissions, setManufacturingEmissions] = useState(0);
  const [companyCarbonFootprint, setCompanyCarbonFootprint] = useState(0);

  const calculateCompanyCarbonFootprint = () => {
    // Simplified calculations for company carbon footprint
    const employeeEmissions = employeeCount * 2; // arbitrary factor
    const totalOfficeEmissions = officeEmissions * 1.5; // arbitrary factor
    const totalManufacturingEmissions = manufacturingEmissions * 3; // arbitrary factor

    const totalEmissions =
      employeeEmissions + totalOfficeEmissions + totalManufacturingEmissions;
    // Adjust the company carbon footprint calculation based on your specific criteria

    setCompanyCarbonFootprint(totalEmissions);
  };

  return (
    <div className="carbon-credit-section">
      <h2>Calculate Company Carbon Footprint</h2>
      <label>
        Number of Employees:
        <input
          type="number"
          value={employeeCount}
          onChange={(e) => setEmployeeCount(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <label>
        Office Emissions (tons CO2):
        <input
          type="number"
          value={officeEmissions}
          onChange={(e) => setOfficeEmissions(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <label>
        Manufacturing Emissions (tons CO2):
        <input
          type="number"
          value={manufacturingEmissions}
          onChange={(e) => setManufacturingEmissions(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <button onClick={calculateCompanyCarbonFootprint}>Calculate Company Carbon Footprint</button>
      <br />
      <div className="carbon-credit-result">
        <h3>Company Carbon Footprint: {companyCarbonFootprint.toFixed(2)}</h3>
      </div>
    </div>
  );
};

const TripCarbonFootprint = () => {
  const [distance, setDistance] = useState(0);
  const [fuelEfficiency, setFuelEfficiency] = useState(0);
  const [tripCarbonFootprint, setTripCarbonFootprint] = useState(0);

  const calculateTripCarbonFootprint = () => {
    // Simplified calculations for trip carbon footprint
    const tripEmissions = (distance / fuelEfficiency) * 2.5; // arbitrary factor

    // Adjust the trip carbon footprint calculation based on your specific criteria

    setTripCarbonFootprint(tripEmissions);
  };

  return (
    <div className="carbon-credit-section">
      <h2>Calculate Trip Carbon Footprint</h2>
      <label>
        Distance Traveled (miles):
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <label>
        Fuel Efficiency (mpg):
        <input
          type="number"
          value={fuelEfficiency}
          onChange={(e) => setFuelEfficiency(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <button onClick={calculateTripCarbonFootprint}>Calculate Trip Carbon Footprint</button>
      <br />
      <div className="carbon-credit-result">
        <h3>Trip Carbon Footprint: {tripCarbonFootprint.toFixed(2)}</h3>
      </div>
    </div>
  );
};

const Calculate = () => {
  return (
    <div className='total'>
        <Navbar />
    <div className="calculate-container">
         
      <IndividualCarbonCredit />
      <CompanyCarbonFootprint />
      <TripCarbonFootprint />
    </div>
    </div>
  );
};

export default Calculate;
