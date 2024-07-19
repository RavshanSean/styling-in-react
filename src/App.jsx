import './App.css';
import Button1 from './components/example-1-normal-css/Button'
import Button4 from './components/example-4-styled-components/Button'

const App = () => {
  return (
    <div className="App">
      <Button1 buttonText="Example 1" />
      <Button4 buttonText="Example 4" />
    </div>
  );
};
export default App;

