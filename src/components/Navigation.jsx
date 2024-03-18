import { ThemeConsumer } from '../context/ThemeContext';
import { FaMoon } from 'react-icons/fa';

function Navigation() {
 
  return (
    <nav>
      <h1>Where in the world?</h1>
      <div className='toggleTheme'>
        <ThemeConsumer>
          {({ theme, toggleTheme }) => {
            return <button onClick={toggleTheme}>{theme === 'light' ? <><FaMoon /><span>&nbsp;Dark Mode</span></> : <><FaMoon className="moon-icon" /><span>&nbsp;Light Mode</span></>}</button>;
          }}
        </ThemeConsumer>
      </div>
    </nav>
    

  )
}

export default Navigation;