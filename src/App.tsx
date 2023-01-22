import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Switch } from 'wouter'
import { CHATBOT_URL } from './const/urls'
import Home from './pages/Home'
import Lisa from './pages/Lisa'
import Ruby from './pages/Ruby'

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path={CHATBOT_URL} />
        <Route path="/lisa" component={Lisa} />
        <Route path="/ruby" component={Ruby} />
      </Switch>
    </QueryClientProvider>
  )
}

export default App
