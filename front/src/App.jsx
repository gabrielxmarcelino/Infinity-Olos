import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ResetStyles from './Components/Styles/ResetStyles';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Default from './Pages/Default/Default';


function App() {
  
  const  autenticacao = (lawson) => {
    // chamar a api passando o lawson para trazer o nome do ciclano, lembrar de adicionar um ponto ao final

  }

  return (
    <>
      <ResetStyles />
      <Routes>
        <Route path="/" element={<Login user2={{analystName: 'Gabriel.'}} />} />
        <Route path="/default" element={<Default/>}/>
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
   </>
  );
}

export default App;
