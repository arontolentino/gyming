<template>
  <ion-content class="ion-padding">
    <WorkoutCard />
  </ion-content>
</template>

<script>
import WorkoutCard from './../components/WorkoutCard';

export default {
  name: 'Home',
  data: function() {
    return {};
  },
  components: {
    WorkoutCard
  }
};
</script>

<style scoped>
</style>