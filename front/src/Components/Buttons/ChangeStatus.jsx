import React, {useState}  from 'react'
import { Phone } from './ChangeStatus.styles';
import { Status } from './Status';
export default function ChangeStatus() {

  const [isOpen, setIsOpen] = useState(false)

  const OpenModal = () => {
    setIsOpen(!isOpen); // Inverte o valor de isOpen
  }

  return (
    <Phone>
      <Status isOpen={isOpen} setIsOpen={setIsOpen}></Status>
      <input type="button" className='phoneHover' value='Status' onClick={OpenModal} />
    </Phone>
  )
}
