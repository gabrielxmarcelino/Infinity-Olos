import React from 'react'
import { Transition } from '@headlessui/react';
import { ChangeStatus, Pauses, PauseButton } from './Status.styles'

export const Status = ({isOpen, setIsOpen}) => {
  return (
    <div>
         <Transition appear show={isOpen}>
            <ChangeStatus>
                <Pauses>
                    <PauseButton type="submit" value="Disponível" name="Disponível" id="disponivelSubmit" />
                    <PauseButton type="submit" value="Ambulatório" id="ambulatorioSubmit" />
                    <PauseButton type="submit" value="Backoffice" id="backOfficeSubmit" />
                    <PauseButton type="submit" value="Descanso" id="descansoSubmit" />
                    <PauseButton type="submit" value="Feedback" id="feedbackSubmit" />
                    <PauseButton type="submit" value="Parada Sistêmica" id="paradaSubmit" />
                    <PauseButton type="submit" value="Particular" id="particularSubmit" />
                    <PauseButton type="submit" value="Refeição" id="refeicaoSubmit" />
                    <PauseButton type="submit" value="Suporte" id="suporteSubmit" />
                    <PauseButton type="submit" value="Treinamento" id="treinamentoSubmit" />       
                </Pauses>
            </ChangeStatus>
         </Transition>
    </div>
  )
}
