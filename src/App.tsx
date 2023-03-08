import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from "./routes"
import './App.scss';


const App: React.FC = () => {
  const element = useRoutes(routes)
  return element
}

export default App;
