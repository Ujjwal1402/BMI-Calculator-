import { useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  const CalcBmi = (e) => {
    e.preventDefault()

    if (weight === '' || height === '') {
      alert('Please enter valid weight and height')
      return
    }

    const w = Number(weight)
    const h = Number(height)

    const bmiValue = (w / (h * h)) * 703
    setBmi(bmiValue.toFixed(1))

    if (bmiValue < 18.5) {
      setMessage('You are Underweight')
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setMessage('You have a Healthy Weight')
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setMessage('You are Overweight')
    } else {
      setMessage('You are Obese')
    }
  }

  const reload = () => {
    setWeight('')
    setHeight('')
    setBmi('')
    setMessage('')
  }

  return (
    <div className='App'>
      <div className='container'>
        <h2>BMI Calculator</h2>

        <form onSubmit={CalcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type='number'
              placeholder='Enter weight'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Height (inches)</label>
            <input
              type='number'
              placeholder='Enter height'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <button className='btn' type='submit'>Calculate</button>
            <button className='btn btn-outline' type='button' onClick={reload}>
              Reset
            </button>
          </div>

          <div className='center'>
            {bmi && (
              <>
                <h3>Your BMI is: {bmi}</h3>
                <p>{message}</p>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
