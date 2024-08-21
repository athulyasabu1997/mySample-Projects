import { useState } from 'react';

function FormProject() {
 
const [districts, setDistricts] = useState([]);
 
const [districtName, setDistrictName] = useState('');
 const handleInputChange = (event) => {
   setDistrictName(event.target.value);
 };
 const handleSubmit = (event) => {
   event.preventDefault();
   if (districtName.trim() !== '') {
     setDistricts([...districts, districtName]);
     setDistrictName('');
   }
 };
 return (
   <div>
     <form onSubmit={handleSubmit}>
       <input
         type="text"
         value={districtName}
         onChange={handleInputChange}
         placeholder="Enter district name"
       />
       <button type="submit">Add District</button>
     </form>
     <ul>
       {districts.map((district, index) => (
         <li key={index}>{district}</li>
       ))}
     </ul>
   </div>
 );

}

export default FormProject;
