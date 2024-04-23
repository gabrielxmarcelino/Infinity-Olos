import React, {useState} from 'react'
import { Phone } from './DiscPhone.styles';
import { Dialer } from './Dialer';

export default function DiscPhone() {

  const [isOpen, setIsOpen] = useState(false)

  const OpenModal = () => {
    setIsOpen(!isOpen); // Inverte o valor de isOpen
  }


  return (
    <Phone>
      <Dialer isOpen={isOpen} setIsOpen={setIsOpen}></Dialer>
        <div className=''>
          <input type="button" className='phoneHover' value='Phone' onClick={OpenModal} />
        </div>
    </Phone>
  )
}
