<template>
  <ion-content class="ion-padding">
    <v-card class="mx-auto mb-5" max-width="344" outlined>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">Add Workout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn text @click="$router.push('entries/add')">Add</v-btn>
      </v-card-actions>
    </v-card>
    <v-card
      class="mx-auto mb-5"
      max-width="344"
      outlined
      v-for="(workout, index) in workouts"
      :key="index"
    >
      <v-list-item two-line>
        <v-list-item-content>
          <div class="overline mb-1">{{ workout.date }}}</div>
          <v-list-item-title class="headline mb-1">{{ workout.name }}</v-list-item-title>
          <v-list-item-subtitle>{{workout.count}} excercises</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn text>View</v-btn>
        <v-btn text>Edit</v-btn>
      </v-card-actions>
    </v-card>
  </ion-content>
</template>

<script>
export default {
  name: 'Entries',
  data: function() {
    return {
      workouts: [
        {
          date: Date(),
          name: 'Back and Biceps',
          count: 10
        },
        {
          date: Date(),
          name: 'Chest and Triceps',
          count: 5
        },
        {
          date: Date(),
          name: 'Quads and Hamstrings',
          count: 12
        },
        {
          date: Date(),
          name: 'Cardio',
          count: 5
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>