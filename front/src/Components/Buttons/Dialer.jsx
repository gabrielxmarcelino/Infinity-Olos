import React from 'react'
import { Transition } from '@headlessui/react';
import { DialerPhone, Field, FieldDialer, FieldDialer0, Buttons } from './Dialer.styles';
export const Dialer = ({isOpen, setIsOpen}) => {
  return (
    <div>
        <Transition appear show={isOpen}>
            <DialerPhone>
                <Field>
                    <input type="text" id='discadorInputNumber' className='input'  /> 
                </Field>
                <FieldDialer>
                    <input type="submit" value={1} />
                    <input type="submit" value={2} />
                    <input type="submit" value={3} />
                </FieldDialer>
                <FieldDialer>
                    <input type="submit" value={4} />
                    <input type="submit" value={5} />
                    <input type="submit" value={6} />
                </FieldDialer>
                <FieldDialer>
                    <input type="submit" value={7} />
                    <input type="submit" value={8} />
                    <input type="submit" value={9} />
                </FieldDialer>
                <FieldDialer0>
                    <input type="submit" value={0} />                
                </FieldDialer0>
                
                <Buttons>
                    <button id='discarButton' value="Discar" name=''>Discar</button>
                    <button id='limparButton' value="limpar" name=''>Limpar</button>
                </Buttons>
            </DialerPhone>
        </Transition>
    </div>
  )
}
