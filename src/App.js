import './styles/style.css';
import Headers from './components/header';
import Employee from './employee/view/index'
import EmployeeCreate from './employee/view/create'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Headers name="Employee Manager" />
        <Routes>
            <Route path="/employee/list" element={<Employee />} />
            <Route path="/" element={<Employee />} />
            <Route path="/employee/add" element={<EmployeeCreate />} />
            <Route path="/employee/edit/:id" element={<EmployeeCreate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
