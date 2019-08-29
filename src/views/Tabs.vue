<template>
  <div>
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

    <!-- Listen to before and after tab change events -->
    <div>
      <ion-tabs>
        <ion-tab tab="goals" :routes="'goals'">
          <Goals />
        </ion-tab>

        <ion-tab tab="logs" :routes="'logs'">
          <Logs />
        </ion-tab>

        <ion-tab tab="progress" :routes="'progress'">
          <Progress />
        </ion-tab>

        <!-- Use v-slot:bottom with Vue ^2.6.0 -->
        <template slot="bottom">
          <ion-tab-bar>
            <ion-tab-button tab="goals" :to="{ name: 'goals' }">
              <ion-label>Goals</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="logs" :to="{ name: 'logs' }">
              <ion-label>Logs</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="progress" :to="{ name: 'progress' }">
              <ion-label>Progress</ion-label>
            </ion-tab-button>
          </ion-tab-bar>
        </template>
      </ion-tabs>
    </div>
  </div>
</template>

<script>
import Goals from './Goals';
import Logs from './Logs';
import Progress from './Progress';

export default {
  name: 'tabs',
  components: {
    Goals,
    Logs,
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