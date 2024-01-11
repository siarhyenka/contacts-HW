import { Contacts } from "../../models/Contacts"
import './ContactsItem.css'


type ContactsItemProps = {
    contacts: Contacts,
}


export const ContactsItem = ({contacts}: ContactsItemProps) => {
    const {address, firstName, surName, phone} = contacts
    return  <ul className="contacts__item">
                
                <li>{firstName}</li>
                <li>{surName}</li>
                <li>{address}</li>
                <li>{phone}</li>
            </ul>
    
}