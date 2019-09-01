<template>
  <v-card max-width="344" class="mx-auto">
    <v-card-title>Flat Barbell Bench Press</v-card-title>
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
        <tr>
          <td>1</td>
          <td>225</td>
          <td>10</td>
        </tr>
        <tr>
          <td>2</td>
          <td>225</td>
          <td>10</td>
        </tr>
        <tr>
          <td>3</td>
          <td>225</td>
          <td>10</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  name: 'WorkoutCard'
};
</script>