import "./App.css";
import Profile from "./components/Profile";
import ProfileInfo from "./components/ProfileInfo";
import Tags from "./components/Tags";
import { useState } from "react";
import {FacebookFilled} from '@ant-design/icons';
function App() {

  const initialData = [
    { label: 'Страна', value: 'Киргизия' },
    { label: 'Область', value: 'Чуйская' },
    { label: 'Район области', value: 'Панфиловский' },
    { label: 'Город', value: 'Бишкек' },
    { label: 'Село', value: 'Карабуу' },
    { label: 'Улица', value: 'Ленина' },
    { label: 'Район города', value: 'Свердловский' },
  ];
  

  const [addressData, setAddressData] = useState(initialData);

  const handleInputChange = (index, e) => {
    const updatedData = [...addressData];
    updatedData[index].value = e.target.value;
    setAddressData(updatedData);
  };

  const handleSaveClick = () => {
    
  };

  const [data, setData] = useState([])

  return (
    <>
      <div className="bg-gray-100 flex flex-wrap grow relative">
        <div className="flex grow">
          <div className="flex ">
            <Profile />
          </div>
          <div className="flex flex-col grow bg-white mt-10  mb-10">
            <ProfileInfo
              profileInfo={{
                title: "Official Information",
                firstItem: "Email",
                firstSubitem: "rus@gmail.com",
                secondTitle: "Phone Number",
                secondSubTitle: "+996 555 343434",
                thirdItem: "Address",
                thirdSubTitle: "Chuy 23 B Street",
              }}
            />
            <ProfileInfo
              profileInfo={{
                title: "Personal Information",
                firstItem: "Facebook",
                firstSubitem: "rus@gmail.com",
                secondTitle: "Phone Number",
                secondSubTitle: "+996 555 343434",
              }}
            />
            <Tags />
          </div>

      
        </div>

        <div className="flex flex-col grow mt-10 ml-10 mb-10">
              <h3 className="font-bold mb-4">Dates of birth info</h3>
              <div className="flex grow gap-40">
                <div className="flex-1 bg-white">
                  <ul className="p-5 flax gap-10">
                    <div>
                      <FacebookFilled style={{fontSize: '24px'}} />
                    </div>
                    <div className="flex flex-col grow ">
                    <p>Facebook</p>
                    <p>RustamMusin</p>
                    </div>
                     
                  </ul>
                </div>
                
                <div className="flex-1 bg-white">
                <ul className="p-5 flax gap-10">
                   <div>
                      <FacebookFilled style={{fontSize: '24px'}} />
                    </div>
                    <div className="flex flex-col grow ">
                    <p>Facebook</p>
                    <p>RustamMusin</p>
                    </div>
                  </ul>
                </div>
                <div className="flex-1 bg-white">  
                <ul className="p-5 flax gap-10">
                    <div>
                      <FacebookFilled style={{fontSize: '24px'}} />
                    </div>
                    <div className="flex flex-col grow ">
                    <p>Facebook</p>
                    <p>RustamMusin</p>
                    
                    </div>
                  </ul></div>
              </div>
        </div>
        
      </div>
    </>
  );
}

export default App;