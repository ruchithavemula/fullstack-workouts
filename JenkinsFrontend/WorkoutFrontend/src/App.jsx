import { useEffect, useState } from 'react'
import WorkoutForm from './components/WorkoutForm'
import WorkoutList from './components/WorkoutList'
import './index.css'

function App() {
  const [workouts, setWorkouts] = useState([])

  const API_URL = 'http://localhost:2030/Spring-Boot-Workout/api/workouts'

  const fetchWorkouts = async () => {
    const res = await fetch(API_URL)
    const data = await res.json()
    setWorkouts(data)
  }

  useEffect(() => {
    fetchWorkouts()
  }, [])

  const addWorkout = async (workout) => {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(workout)
    })
    fetchWorkouts()
  }

  const updateWorkout = async (id, workout) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(workout)
    })
    fetchWorkouts()
  }

  const deleteWorkout = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    })
    fetchWorkouts()
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Workout Tracker</h1>
      <WorkoutForm onAdd={addWorkout} />
      <WorkoutList workouts={workouts} onUpdate={updateWorkout} onDelete={deleteWorkout} />
    </div>
  )
}

export default App
