import React from 'react'
import { Rodape, PrinciPalPanel } from './Default.styles';
import ChangeStatus from '../../Components/Buttons/ChangeStatus';
import DiscPhone from '../../Components/Buttons/DiscPhone';
import { Dialer } from '../../Components/Buttons/Dialer';



const Default = () => {
  return (
    <div>
      <PrinciPalPanel>
      </PrinciPalPanel>
      <Rodape>
        <DiscPhone />
        <div>|</div>
        <ChangeStatus />
      </Rodape>
    </div>
  )
}

export default Default