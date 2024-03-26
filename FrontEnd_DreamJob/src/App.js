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
import CreateProvider from "./components/Pages/CreateProvider";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";


function App() {
  return (
      <>
      <Router>
          <Layout>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <PublicRoute exact path='/signup' component={Signup} />
                  <PublicRoute exact path='/login' component={Login} />
                  <PrivateRoute exact path='/dashbord/:skill' component={Dashboard} />
                  <PrivateRoute exact path='/masterAgrement' component={CreateMasterAgreementForm}/>
                  <PrivateRoute exact path='/marterialGroup' component={MaterialGroupForm} />
                  <PrivateRoute exact path='/postDetails/:id' component={PostDetails} />
                  <PrivateRoute exact path='/createprovider' component={CreateProvider} />
                  <Route exact path='/aboutus' component={AboutUs} />
              </Switch>
          </Layout>
      </Router>
      </>
  );
}

export default App;
