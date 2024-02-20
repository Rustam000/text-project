// App.tsx
import React, { useState } from 'react';
import { FacebookFilled } from '@ant-design/icons';
import Profile from './components/Profile';
import ProfileInfo from './components/ProfileInfo';
import Tags from './components/Tags';
import DropdownForm from './components/DropdownForm';

function App() {
  const initialData = [
    { name: 'rus1', label: 'Дата Рождение', value: '12.12.2023' },
    { name: 'rus2', label: 'Дата Рождение', value: '13.10.2022' },
    { name: 'rus3', label: 'Дата Рождение', value: '03.09.2021' },
  ];

  const [openDropdowns, setOpenDropdowns] = useState(initialData.map(() => false));

  const handleButtonClick = (index) => {
    const newDropdowns = [...openDropdowns];
    newDropdowns[index] = !newDropdowns[index];
    setOpenDropdowns(newDropdowns);
  };

  const handleSaveClick = () => {
    // Добавьте логику сохранения данных
    console.log('Save clicked');
  };

  const handleCloseDropdown = (index) => {
    const newDropdowns = [...openDropdowns];
    newDropdowns[index] = false;
    setOpenDropdowns(newDropdowns);
  };

  const handleCloseBlock = () => {
    setOpenDropdowns(initialData.map(() => false));
  };

  return (
    <>
      <div className="bg-gray-100 flex flex-wrap grow relative">
        <div className="flex grow">
          <div className="flex ">
            <Profile />
          </div>
          <div className="flex flex-col grow bg-white mt-10 mb-10">
            <ProfileInfo
              profileInfo={{
                title: 'Official Information',
                firstItem: 'Email',
                firstSubitem: 'rus@gmail.com',
                secondTitle: 'Phone Number',
                secondSubTitle: '+996 555 343434',
                thirdItem: 'Address',
                thirdSubTitle: 'Chuy 23 B Street',
              }}
            />
            <ProfileInfo
              profileInfo={{
                title: 'Personal Information',
                firstItem: 'Facebook',
                firstSubitem: 'rus@gmail.com',
                secondTitle: 'Phone Number',
                secondSubTitle: '+996 555 343434',
              }}
            />
            <Tags />
          </div>
        </div>

        <div className="flex flex-col grow mt-10 ml-10 mb-10">
          <h3 className="font-bold mb-4">Dates of birth info</h3>
          <div className="flex grow gap-40">
            {initialData.map((data, index) => (
              <div key={data.name} className="flex-1 bg-white flex justify-center">
                <button className="p-5 flex flex-col gap-10" onClick={() => handleButtonClick(index)}>
                  <div className='flax '>
                  <div>
                    <FacebookFilled style={{ fontSize: '24px' }} />
                    
                  </div>
                 
                    <div className='flex flex-col grow'>
                  <p>Facebook </p>
                  <p>RustamMusin</p>
                  </div>
                  
                    {openDropdowns[index] && (
                      <div>
                        <DropdownForm data={[data]} onSave={handleSaveClick} onClose={() => handleCloseDropdown(index)} />
                      </div>
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        

      </div>
    </>
  );
}

export default App;
