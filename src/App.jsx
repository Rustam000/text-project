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
        <div className="flex flex-col lg:flex-row w-full">
          {/* Профиль в левой части */}
          <div className="w-full lg:w-1/3">
            <Profile />
          </div>
        
          <div className="w-full lg:w-2/3 flex flex-col mt-10 mb-10 lg:ml-10">
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
        
        <div className="flex flex-col items-center gap-6 mt-4 lg:ml-4 mb-4 lg:mb-10">
          <h3 className="font-bold mb-2">Dates of birth info</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-auto">
            {initialData.map((data, index) => (
              <div key={data.name} className="w-full">
                <button className="p-5 flex flex-col gap-4" onClick={() => handleButtonClick(index)}>
                  <div className='flex items-center'>
                    <FacebookFilled style={{ fontSize: '24px' }} />
                    <div className='flex flex-col ml-2'>
                      <p>Facebook</p>
                      <p>RustamMusin</p>
                    </div>
                  </div>
                  {openDropdowns[index] && (
                    <div>
                      <DropdownForm data={[data]} onSave={handleSaveClick} onClose={() => handleCloseDropdown(index)} />
                    </div>
                  )}
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
