// DropdownForm.tsx
import React from 'react';

interface DropdownFormProps {
  data: { label: string; value: string }[];
  onSave: () => void;
  onClose: () => void;
}

const DropdownForm: React.FC<DropdownFormProps> = ({ data, onSave, onClose }) => {
  return (
    <div className="dropdown-form">
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <p>{item.label}</p>
            <p>{item.value}</p>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default DropdownForm;
