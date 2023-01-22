import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import Ruby from './pages/Ruby'
import Translate from './pages/Translate'

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/translate" component={Translate} />
      <Route path="/ruby" component={Ruby} />
    </Switch>
  )
}

export default App
