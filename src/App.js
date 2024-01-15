import "./styles/App.css";
import {BrowserRouter as Router , Switch , Route  } from 'react-router-dom';
import Home from "./components/Pages/Home";
import Layout from "./components/Layout";
import Signup from "./components/Signup";
import Login from "./components/Login";
import '@smastrom/react-rating/style.css';
import Dashboard from "./components/Dashboard";
import PostDetails from "./components/Pages/PostDetails";
import AboutUs from "./components/Pages/AboutUs";
import CreateMasterAgreementForm from "./components/Pages/CreateMasterAgreementForm";
import MaterialGroupForm from "./components/Pages/MaterialGroupForm";
import {AuthProvider} from "./AuthContex/AuthContex";
import CreateProvider from "./components/Pages/CreateProvider";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";


function App() {
  return (
      <>
      <Router>
          <AuthProvider>
          <Layout>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route  exact path='/signup' component={Signup} />
                  <Route  exact path='/login' component={Login} />
                  <Route exact path='/dashbord/:skill' component={Dashboard} />
                  <Route exact path='/masterAgrement' component={CreateMasterAgreementForm}/>
                  <Route exact path='/marterialGroup' component={MaterialGroupForm} />
                  <Route exact path='/postDetails/:id' component={PostDetails} />
                  <Route exact path='/createprovider' component={CreateProvider} />
                  <Route exact path='/aboutus' component={AboutUs} />
              </Switch>
          </Layout>
          </AuthProvider>
      </Router>
      </>
  );
}

export default App;
