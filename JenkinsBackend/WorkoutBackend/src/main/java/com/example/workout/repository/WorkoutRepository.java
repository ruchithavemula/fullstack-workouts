package com.example.workout.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.workout.model.Workout;

public interface WorkoutRepository extends JpaRepository<Workout, Long> {
}
