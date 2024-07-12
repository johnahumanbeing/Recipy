import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import ThemeContext from './context/theme';
import Header from './components/Header';
import './styles/app.scss';

function App() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`App-${dark ? 'dark' : 'light'}`}>
      <Header />
      <Outlet />
    </div>
  );
}
// theme for the app, dark or light
export default App;
