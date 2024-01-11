import './Main.css'
import { v4 as uuidv4 } from 'uuid';
import { Contacts } from './models/Contacts'
import { ContactsItem } from './components/Contactsitem/ContactsItem';
import { useRef, useState } from 'react';

export const Main = () => {
   

    const [data, setData] = useState<Contacts[]>([])
    

    const firstNameRef = useRef<HTMLInputElement>(null);
    const surNameRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    
    

    const handleAddContact = () => {
       const firstNameItem = firstNameRef.current;
       const surNameItem = surNameRef.current;
       const addressItem = addressRef.current;
       const phoneItem = phoneRef.current;

       setData([...data ,{
        address: addressItem?.value ?? '',
        firstName: firstNameItem?.value ?? '',
        surName: surNameItem?.value ?? '',
        phone: phoneItem?.value ?? '',
        id: uuidv4()
       }])
        
       firstNameItem!.value = '';
       surNameItem!.value = '';
       addressItem!.value = '';
       phoneItem!.value = '';
       
    }
    
    return (<main className='main'>
                <div className="contacts__data">
                    <input ref={firstNameRef} type="text" name="firstname" placeholder="имя"/>
                    <input ref={surNameRef} type="text" name="surname" placeholder="фамилия"/>
                    <input ref={addressRef} type="text" name="address" placeholder="адрес"/>
                    <input ref={phoneRef} type="text" name="phone" placeholder="телефон"/>
                    <button className='contacts__button' onClick={handleAddContact}>Добавить контакт</button>
                </div>
                <div className="contacts__users">
                    {data.length !== 0 ?
                        <div className='contact__user'>
                            {data.map((contacts)=> <ContactsItem key={contacts.id} contacts={contacts}/>)}
                        </div>:
                        <h2>Контактная книга пуста</h2>
                    }
                </div>
            </main>)
}


