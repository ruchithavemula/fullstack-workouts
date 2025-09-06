package com.example.workout.controller;

import com.example.workout.model.Workout;
import com.example.workout.repository.WorkoutRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/workouts")
@CrossOrigin(origins = "http://localhost:5173")
public class WorkoutController {

    private final WorkoutRepository repository;

    public WorkoutController(WorkoutRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Workout> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Workout create(@RequestBody Workout workout) {
        return repository.save(workout);
    }

    @PutMapping("/{id}")
    public Workout update(@PathVariable Long id, @RequestBody Workout workout) {
        Workout existing = repository.findById(id).orElseThrow();
        existing.setName(workout.getName());
        existing.setDuration(workout.getDuration());
        return repository.save(existing);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
