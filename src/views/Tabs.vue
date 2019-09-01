<template>
  <div class="navigation">
    <ion-tabs>
      <ion-tab tab="/track">
        <ion-vue-router name="track"></ion-vue-router>
      </ion-tab>

      <ion-tab tab="/history">
        <ion-vue-router name="history"></ion-vue-router>
      </ion-tab>

      <ion-tab tab="/calendar">
        <ion-vue-router name="calendar"></ion-vue-router>
      </ion-tab>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="/track">
          <ion-label>Track</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="/history">
          <ion-label>History</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="/calendar">
          <ion-label>Calendar</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  components: {}
};
</script>

<style scoped>
ion-toolbar {
  color: #fff;
  --background: #2699fb;
  --min-height: 48px;
}

ion-title {
  padding: 0 16px;
  text-align: left;
  font-size: 30px;
  font-weight: 800;
}

ion-buttons {
  padding: 0 10px;
}

ion-toolbar ion-button {
  color: #fff;
}

ion-label {
  height: 16px;
}

ion-tab-button {
  background-color: #2699fb;
  color: #fff;
}

.tab-selected {
  background-color: #0089ff;
}

ion-label {
  text-transform: uppercase;
}

.tab-selected ion-label {
  font-weight: 700;
}
</style>