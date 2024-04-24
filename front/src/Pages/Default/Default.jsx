import React from 'react'
import { Rodape, PrinciPalPanel } from './Default.styles';
import ChangeStatus from '../../Components/Buttons/ChangeStatus';
import DiscPhone from '../../Components/Buttons/DiscPhone';
import { Dialer } from '../../Components/Buttons/Dialer';



const Default = () => {
  return (
    <>
      <PrinciPalPanel>
        passcode: 18283;
      </PrinciPalPanel>
      {/* <div className='w-11/12 border bg-slate-50 h-lvh top-2/4 left-2/4 flex'>
a
      </div> */}
      <Rodape>
        <DiscPhone />
        <div>|</div>
        <ChangeStatus />
      </Rodape>
    </>
  )
}

export default Default