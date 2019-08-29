<template>
  <ion-content>
    <ion-card>
      <ion-card-header>
        <ion-card-title>
          INCLINE DB
          BENCH PRESS
        </ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <div>
          <ion-grid>
            <ion-row class="stat-heading">
              <ion-col>
                <div>Set</div>
              </ion-col>
              <ion-col>
                <div>Weight</div>
              </ion-col>
              <ion-col>
                <div>Reps</div>
              </ion-col>
            </ion-row>

            <ion-row class="stat-entry">
              <ion-col>
                <div>1</div>
              </ion-col>
              <ion-col>
                <div>225</div>
              </ion-col>
              <ion-col>
                <div>12</div>
              </ion-col>
            </ion-row>
            <ion-row class="stat-entry">
              <ion-col>
                <div>2</div>
              </ion-col>
              <ion-col>
                <div>225</div>
              </ion-col>
              <ion-col>
                <div>12</div>
              </ion-col>
            </ion-row>
            <ion-row class="stat-entry">
              <ion-col>
                <div>3</div>
              </ion-col>
              <ion-col>
                <div>225</div>
              </ion-col>
              <ion-col>
                <div>12</div>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </ion-card-content>
    </ion-card>
  </ion-content>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
    return {};
  }
};
</script>

<style scoped>
ion-card {
  display: block;
}

ion-card-title {
  font-size: 17px;
  text-align: center;
  color: #ffa700;
}

ion-card-header {
  padding-bottom: 0px;
}

ion-card-content {
  padding: 2px;
}

.stat-heading {
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #2699fb;
}

.stat-entry {
  font-size: 15px;
  text-align: center;
}
</style>