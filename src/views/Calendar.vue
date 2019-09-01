<template>
  <ion-content class="ion-padding">
    <v-date-picker v-model="date1" :events="arrayEvents" event-color="green lighten-1" full-width></v-date-picker>
  </ion-content>
</template>

<script>
export default {
  name: 'Calendar',
  data: () => ({
    arrayEvents: ['2019-09-02', '2019-09-15'],
    date1: new Date().toISOString().substr(0, 10)
  })
};
</script>
