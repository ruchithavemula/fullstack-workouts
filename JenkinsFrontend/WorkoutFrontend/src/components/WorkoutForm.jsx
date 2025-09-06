import { useState } from 'react'

function WorkoutForm({ onAdd }) {
  const [name, setName] = useState('')
  const [duration, setDuration] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !duration) return
    onAdd({ name, duration })
    setName('')
    setDuration('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Workout name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="number"
        placeholder="Duration (minutes)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default WorkoutForm
