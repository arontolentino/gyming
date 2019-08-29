<template>
  <ion-content>
    <ion-grid>
      <ion-row>
        <ion-col>
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
                  <div class="stat-heading">
                    <ion-row>
                      <ion-col size="4">
                        <div>Set</div>
                      </ion-col>
                      <ion-col size="4">
                        <div>Lbs</div>
                      </ion-col>
                      <ion-col size="4">
                        <div>Reps</div>
                      </ion-col>
                    </ion-row>
                  </div>

                  <div class="stat-entry">
                    <ion-row>
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
                  </div>
                </ion-grid>
              </div>
            </ion-card-content>
          </ion-card>
        </ion-col>

        <ion-col size="6">
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
                  <div class="stat-heading">
                    <ion-row>
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
                  </div>

                  <div class="stat-entry">
                    <ion-row>
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
                  </div>
                </ion-grid>
              </div>
            </ion-card-content>
          </ion-card>
        </ion-col>

        <ion-col size="6">
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
                  <div class="stat-heading">
                    <ion-row>
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
                  </div>

                  <div class="stat-entry">
                    <ion-row>
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
                  </div>
                </ion-grid>
              </div>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>

    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button>
        <i class="fas fa-plus"></i>
      </ion-fab-button>
    </ion-fab>
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
  margin: 5px 5px;
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
  padding: 0px 5px 5px 5px;
}

.stat-heading {
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #2699fb;
}

.stat-heading ion-col {
  padding: 5px 0;
}

.stat-entry {
  font-size: 14px;
  text-align: center;
}
</style>