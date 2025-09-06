import { useState } from 'react'

function WorkoutList({ workouts, onUpdate, onDelete }) {
  const [editId, setEditId] = useState(null)
  const [editName, setEditName] = useState('')
  const [editDuration, setEditDuration] = useState('')

  const startEdit = (workout) => {
    setEditId(workout.id)
    setEditName(workout.name)
    setEditDuration(workout.duration)
  }

  const saveEdit = () => {
    onUpdate(editId, { name: editName, duration: editDuration })
    setEditId(null)
  }

  return (
    <ul>
      {workouts.map((w) => (
        <li key={w.id} style={{ marginBottom: '10px' }}>
          {editId === w.id ? (
            <>
              <input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                style={{ marginRight: '10px' }}
              />
              <input
                type="number"
                value={editDuration}
                onChange={(e) => setEditDuration(e.target.value)}
                style={{ marginRight: '10px' }}
              />
              <button onClick={saveEdit}>Save</button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <>
              {w.name} - {w.duration} mins
              <button onClick={() => startEdit(w)} style={{ marginLeft: '10px' }}>Edit</button>
              <button onClick={() => onDelete(w.id)} style={{ marginLeft: '10px' }}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export default WorkoutList
