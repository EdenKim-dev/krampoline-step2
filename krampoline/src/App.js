import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Main from './Main';

function App() {
  return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App