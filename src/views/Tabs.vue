<template>
  <!-- Listen to before and after tab change events -->
  <ion-tabs>
    <ion-tab tab="home" :routes="'home'">
      <Home />
    </ion-tab>

    <ion-tab tab="history" :routes="'history'">
      <History />
    </ion-tab>

    <ion-tab tab="progress" :routes="'progress'">
      <Progress />
    </ion-tab>

    <ion-tab tab="calendar" :routes="'calendar'">
      <Calendar />
    </ion-tab>

    <!-- Use v-slot:bottom with Vue ^2.6.0 -->
    <template slot="bottom">
      <ion-tab-bar>
        <ion-tab-button tab="home" :to="{ name: 'home' }">
          <ion-label>Home</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="history" :to="{ name: 'history' }">
          <ion-label>History</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="progress" :to="{ name: 'progress' }">
          <ion-label>Progress</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="calendar" :to="{ name: 'calendar' }">
          <ion-label>Calendar</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </template>
  </ion-tabs>
</template>

<script>
import Home from './Home';
import History from './History';
import Progress from './Progress';
import Calendar from './Calendar';

export default {
  name: 'tabs',
  components: {
    Home,
    History,
    Progress,
    Calendar
  }
};
</script>

<style scoped>
ion-label {
  height: 16px;
}
</style>