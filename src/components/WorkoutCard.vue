<template>
  <div>
    <v-card max-width="344" class="mx-auto mb-5" v-for="(workout, index) in workouts" :key="index">
      <v-card-title>{{ workout.name }}</v-card-title>
      <v-divider></v-divider>
      <v-simple-table class="text-center">
        <thead>
          <tr>
            <th class="text-center">Set</th>
            <th class="text-center">Weight</th>
            <th class="text-center">Reps</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(set, index) in workout.sets" :key="index">
            <td>{{ set.set }}</td>
            <td>{{ set.weight }}</td>
            <td>{{ set.reps }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'WorkoutCard',
  data: function() {
    return {
      workouts: [
        {
          name: 'Flat Barbell Bench Press',
          sets: [
            {
              set: 1,
              weight: 225,
              reps: 10
            },
            {
              set: 2,
              weight: 225,
              reps: 10
            },
            {
              set: 3,
              weight: 225,
              reps: 10
            }
          ]
        },
        {
          name: 'Incline Bench Press',
          sets: [
            {
              set: 1,
              weight: 185,
              reps: 10
            },
            {
              set: 2,
              weight: 225,
              reps: 10
            },
            {
              set: 3,
              weight: 225,
              reps: 10
            }
          ]
        },
        {
          name: 'Dips',
          sets: [
            {
              set: 1,
              weight: 185,
              reps: 10
            },
            {
              set: 2,
              weight: 185,
              reps: 10
            },
            {
              set: 3,
              weight: 185,
              reps: 10
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
v-card {
  margin-bottom: 20px;
}
</style>