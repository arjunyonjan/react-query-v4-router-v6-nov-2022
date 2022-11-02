import './App.css';
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {Home} from './components/Home'
import {Codes} from './components/Codes'
import {Code} from './components/Code'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>

          <Link to='/'>Codes</Link>&nbsp;
          <Link to='/home'>Home</Link>

          <Routes>
            <Route path="/" element={<Codes/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/code/:id" element={<Code/>} />
          </Routes>
        </div>
      </Router>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
