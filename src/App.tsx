import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useSyncExternalStore } from 'react';
import { Route, Router, Switch } from 'wouter'
import { BaseLocationHook } from "wouter/use-location";
import { CHATBOT_URL } from './const/urls'
import Home from './pages/Home'
import Lisa from './pages/Lisa'
import Ruby from './pages/Ruby'
import Translate from './pages/Translate'

const App: React.FC = () => {
  const queryClient = new QueryClient();

  const currentLocation = () => window.location.hash.replace(/^#/, "") || "/";

const navigate = (to: any) => {
  window.location.hash = to;
};

const useHashLocation = () => {
  // `useSyncExternalStore` is available in React 18, or you can use a shim for older versions
  const location = useSyncExternalStore(
    // first argument is a value subscriber: it gives us a callback that we should call
    // whenever the value is changed
    (onChange) => {
      window.addEventListener("hashchange", onChange);
      return () => window.removeEventListener("hashchange", onChange);
    },

    // the second argument is function to get the current value
    () => currentLocation()
  );

  return [location, navigate];
};

  return (
    <QueryClientProvider client={queryClient}>
      <Router hook={useHashLocation as BaseLocationHook}>
        <Route path="" component={Home} />
        <Route path={CHATBOT_URL} />
        <Route path="lisa" component={Lisa} />
        <Route path="ruby" component={Ruby} />
      </Router>
    </QueryClientProvider>
  )
}

export default App
