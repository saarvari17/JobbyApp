import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import ProtectedRoute from './ProtectedRoute'
import Jobs from './Jobs'
import JobItemDetails from './JobItemDetails'
import NotFound from './NotFound'
import './App.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const App = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <ProtectedRoute
      exact
      path="/jobs"
      render={() => (
        <Jobs
          employmentTypesList={employmentTypesList}
          salaryRangesList={salaryRangesList}
        />
      )}
    />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
