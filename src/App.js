// import logo from './logo.svg';
// import './App.css';
import NewCom from './NewCom';
import data from './data.json';

function App() {
  return (
    <div>
    {console.log(data)}
    <table>
  
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>IP Address</th>
  </tr>
  {data.map(rec =>(
    <tr>
      <td>{rec.first_name}</td>
      <td>{rec.last_name}</td>
      <td>{rec.email}</td>
      <td>{rec.ip_address}</td>
    </tr>
   
  )) }
</table>
  </div>
  );
}

export default App;
