<template>
  <div>
    <div class="header">
      <ion-header>
        <ion-toolbar>
          <ion-title>GYMING</ion-title>
          <ion-buttons slot="primary">
            <ion-button>
              <i class="fas fa-plus"></i>
            </ion-button>
            <ion-button>
              <i class="fas fa-user"></i>
            </ion-button>
            <ion-button>
              <i class="fas fa-cog"></i>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
    </div>

    <div class="navigation">
      <ion-tabs>
        <ion-tab tab="/goals">
          <ion-vue-router name="goals"></ion-vue-router>
        </ion-tab>

        <ion-tab tab="/index">
          <ion-vue-router name="index"></ion-vue-router>
        </ion-tab>

        <ion-tab tab="/progress">
          <ion-vue-router name="progress"></ion-vue-router>
        </ion-tab>

        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="/goals">
            <ion-label>Goals</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="/index">
            <ion-label>Logs</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="/progress">
            <ion-label>Progress</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </div>
  </div>
</template>

<script>
import Goals from './Goals';
import LogsIndex from './LogsIndex';
import Progress from './Progress';

export default {
  name: 'tabs',
  components: {
    Goals,
    LogsIndex,
    Progress
  }
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

ion-tab {
  margin-top: 44px;
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