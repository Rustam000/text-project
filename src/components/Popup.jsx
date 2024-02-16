import {useState} from 'react'

const Popup = ({ isOpen, onClose }) => {

    const [formData, setFormData] = useState({
        // Your form fields here
        country: '',
        region: '',
        // ... other fields
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted with data:', formData);
        // Reset the form data if needed
        setFormData({
          country: '',
          region: '',
        });
        // Close the popup
        onClose();
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

  return (
    <form onSubmit={handleSubmit} className='flex'>
        <label htmlFor="country">
            Страна:
            <input type="text" id='country'/>
        </label>
        <label htmlFor="country">
            Область:
            <input type="text" id='country'/>
        </label>
        
        <label htmlFor="country">
            Районы областей:
            <input type="text" id='country'/>
        </label>
        
        <label htmlFor="country">
            Город:
            <input type="text" id='country'/>
        </label>
        
        <label htmlFor="country">
            Село:
            <input type="text" id='country'/>
        </label>
        <label htmlFor="country">
            Улица:
            <input type="text" id='country'/>
        </label>
        <label htmlFor="country">
            Районы города:
            <input type="text" id='country'/>
        </label>
    </form>
  )
}

export default Popup