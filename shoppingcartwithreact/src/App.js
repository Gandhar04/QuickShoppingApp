import PageHeader from "./components/PageHeader";
import Products from "./components/Products";
import CardProvider from "./Context/CardProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <CardProvider>
      <div className="App">
        <ToastContainer />
        <PageHeader />
        <Products />
      </div>
    </CardProvider>
  );
}

export default App;
