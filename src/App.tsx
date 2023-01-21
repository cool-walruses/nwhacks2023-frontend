import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import Ruby from './pages/Ruby'

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/convert" />
      <Route path="/ruby" component={Ruby} />
    </Switch>
  )
}

export default App
