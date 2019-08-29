<template>
  <ion-content>
    <ion-list>
      <ion-item-sliding>
        <ion-item@click="buttonClick()">
          <ion-label>Chest/Triceps/Shoulders - August 29, 2019</ion-label>
        </ion-item>
        <ion-item-options side="end">
          <ion-item-option @click="unread(item)">Unread</ion-item-option>
        </ion-item-options>
      </ion-item-sliding>

      <ion-item-sliding>
        <ion-item @click="buttonClick()">
          <ion-label>Back/Biceps/Legs - August 28, 2019</ion-label>
        </ion-item>
        <ion-item-options side="end">
          <ion-item-option @click="unread(item)">Unread</ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </ion-list>
  </ion-content>
</template>

<script>

export default {
  name: 'LogsIndex',
  methods: {
    buttonClick() {
      this.$router.push({ name: 'log' });
    }
  }
};
</script>