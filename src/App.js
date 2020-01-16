import React, { useState, useEffect } from 'react';
import Grid from './components/grid'
import Selector from './components/selector'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const App = () => {
  const [suppliers, setSuppliers] = useState([])
  const [products, setProducts] = useState([])
  const [results, setResults] = useState([])
  const [hasError, setHasError] = useState(false)
  useEffect(() => {
    try {
      setHasError(false)
      fetch('/data.json')
        .then(response => {
          return response.json()
        }).then(json => {
          setSuppliers(json.suppliers)
          setProducts(json.products)
          setResults(json.products)
        })
    } catch (e) {
      setHasError(true)
      console.log(e)
    }
  }, [])

  const filterResultsBySupplierId = (supplierId) => new Promise((resolve, reject) => {
    const r = products.filter(product => {
      return product.supplierId == supplierId
    })
    resolve(r)
  })

  const replaceSupplierIdWithName = (supplierId, results) => new Promise((resolve, reject) => {
    console.log('results')
    console.log(results)
    let supplier = suppliers.find(s => { return s.supplierId == supplierId })
    let tResults = results
    tResults.forEach(i => { i.supplierName = supplier.name })
    console.log(tResults)
    resolve(tResults)
  })

  const handleSelect = async (eventKey) => {
    await filterResultsBySupplierId(eventKey)
      .then((res) => {
        replaceSupplierIdWithName(eventKey, res)
          .then((res => {
            setResults(res)
          }))
      })
  }
  return (
    <div className='page-grid'>
      <h1 style={{ textAlign: 'center' }}>Data Table filter from Json file</h1>
      <div className="panel">
        <Selector suppliers={suppliers} products={products} handleSelect={handleSelect}></Selector>
      </div>

      <Grid hasError={hasError} results={results}></Grid>
    </div>
  )
}

export default App;
