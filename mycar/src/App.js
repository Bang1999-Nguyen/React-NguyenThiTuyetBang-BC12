import logo from './logo.svg';
import './App.css';
import Glasses from './glasses/glasses';
import Model from './model/model';
import {Car} from './Car/Car';


function App() {
  return (
    <div className="App">
      <div className="sectionOne">
        <Model/>
        <Glasses/>
        </div>
        <Car/>
        {/* <ContinuousSlider/> */}
        {/* <ContinuousSlider/> */}
    </div>
  );
}

export default App;
