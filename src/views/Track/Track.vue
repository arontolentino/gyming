<template>
  <ion-content class="ion-padding">
    <WorkoutList />
  </ion-content>
</template>

<script>
import WorkoutCard from '@/components/WorkoutCard';
import WorkoutList from '@/components/WorkoutList';

export default {
  name: 'Home',
  data: function() {
    return {};
  },
  components: {
    WorkoutCard,
    WorkoutList
  }
};
</script>

<style scoped>
</style>