import './App.css';
import DropFile from './components/Drop-fileinput/DropFile';


function App() {

  const onFileChange = (files) => {
    console.log(files)
  }
  return (
    <div className="box">
      <h2 className='header'>
        React drop files input
      </h2>
    <DropFile onFileChange={(files) => onFileChange(files)} />
    </div>
  );
}

export default App;
