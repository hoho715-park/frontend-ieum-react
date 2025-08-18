import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import QsccLanding from './pages/QsccLanding'
import WhatIsQscc from './pages/WhatIsQscc'
import Test from './pages/Test'

export default function App() {
  return (
    <Routes>
      <Route path="/qscc" element={<QsccLanding />} />
      <Route path="/qscc/whatisqscc" element={<WhatIsQscc />} />
      <Route path="/qscc/test" element={<Test />} />
      
      <Route path="/" element={<Navigate to="/qscc" replace />} />
    </Routes>
  )
}
