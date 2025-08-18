import React from 'react'
import Header from '../components/layouts/Header'

export default function Test() {
  return (
    <>
      <Header />
      <main className="has-fixed-header">
        <section className="page qscc-test">
          <div className="q-card">
            <h2 className="q-title">QSCC 테스트</h2>
            <p className="q-text">여기에 설문 컴포넌트를 붙이면 된다.</p>
          </div>
        </section>
      </main>
    </>
  )
}
