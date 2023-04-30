import logo from './logo.svg';
import {motion} from 'framer-motion';
import './App.css';

function App() {
  const pVariants = {
    hidden: {
      x: -1000,
      opacity: 0
    },
    visible: {
      x: 0,
          opacity: 1
    }
  }
  const listVariants = {
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.5
      },
      y: 0
    }),
    hidden: {
      opacity: 0,
      y: 50
    }
  }
  const items = [
    'text 1', 'text 2', 'text 3'
  ]
  return (
    <div className="App">
      <header className="App-header">
        <motion.img src={logo} className="App-logo" alt="logo"
        // initial={{}} 
        animate={{rotate: 360}}
        transition={{
          delay: 3,
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          repeatType: 'reverse',
          type: 'tween',
          ease: 'easeInOut'
        }}
        />
        <motion.p
        initial={'hidden'}
        animate={'visible'}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        variants={pVariants}
        >
          Edit <code>src/App.js</code> and save to reload.
        </motion.p>
        <motion.a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.3,
            color: 'white'
          }}
        >
          Learn React
        </motion.a>
        {
          items.map((elem, index)=> (
            <motion.li key={elem} 
            variants={listVariants} 
            initial={'hidden'} 
            animate={'visible'}
            custom={index}
            >
              {elem}
            </motion.li>
          ))
        }
      </header>
    </div>
  );
}

export default App;
