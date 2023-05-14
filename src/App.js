import './App.css';
import Header from './MyComponents/Header';
import Home from './MyComponents/Home';
import Allcourse from './MyComponents/Allcourses';
import AddCourse from './MyComponents/AddCourse';
// import { ToastContainer, toast } from 'react-toastify';

function App() {
  // const btnHandle = () => {
  //   toast("This is my first message");
  //   toast.success("This is my success message");
  //   toast.error("This is my error message");
  //   toast.warning("This is my error message");
  // }
  return (
    <div className='text-center'>
      {/* <ToastContainer /> */}
      <Header />
      <Home />
      <Allcourse />
      <AddCourse />
    </div>
  );
}

export default App;
