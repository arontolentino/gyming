<template>
  <!-- Listen to before and after tab change events -->
  <ion-tabs>
    <ion-tab tab="learn" :routes="'learn'">
      <Learn />
    </ion-tab>

    <ion-tab tab="thoughts" :routes="'thoughts'">
      <Thoughts />
    </ion-tab>

    <ion-tab tab="setting" :routes="'settings'">
      <Settings />
    </ion-tab>

    <!-- Use v-slot:bottom with Vue ^2.6.0 -->
    <template slot="bottom">
      <ion-tab-bar>
        <ion-tab-button tab="learn" :to="{ name: 'learn' }">
          <ion-label>Home</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="thoughts" :to="{ name: 'thoughts' }">
          <ion-label>Progress</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="settings" :to="{ name: 'settings' }">
          <ion-label>Settings</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </template>
  </ion-tabs>
</template>

<script>
export default {
  name: 'tabs',
  components: {}
};
</script>

<style scoped>
ion-label {
  height: 16px;
}
</style>