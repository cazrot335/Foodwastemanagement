import React from "react";
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css';

import Loginn from "./screens/Loginn";

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route path="/login" element={<Loginn/>}/>
 
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
