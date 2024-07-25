<script setup>
import { ref, computed, watchEffect } from 'vue';
import IconTimer from '@/components/icons/IconTimer.vue';
import IconThermometer from '@/components/icons/IconThermometer.vue';
import ThemeController from '@/components/ThemeController.vue';

const tempFurnace = ref(null);
const timeFurnace = ref(null);
const tempAirFryer = ref(null);
const timeAirFryer = ref(null);

const convertToAirfryer = () => {
  const tempFour = Number(tempFurnace.value);
  const timeFour = Number(timeFurnace.value);

  if (isNaN(tempFour) || isNaN(timeFour)) {
    tempAirFryer.value = 'Erreur';
    timeAirFryer.value = 'Erreur';
    return;
  }

  let tempAirfryer, timeAirfryer;

  if (tempFour > 200) {
    tempAirfryer = 200;
    const adjustedTime = timeFour * ((tempFour - 200) / (220 - 200) + 1);
    timeAirfryer = adjustedTime * 0.8;
  } else {
    tempAirfryer = tempFour;
    timeAirfryer = timeFour * 0.8;
  }

  timeAirfryer = Math.round(timeAirfryer);

  tempAirFryer.value = tempAirfryer.toFixed(0);
  timeAirFryer.value = timeAirfryer;
};
</script>

<template>
  <header>
    <h1 class="text-2xl">AirFryer Converter</h1>
    <ThemeController />
  </header>

  <main class="flex items-center justify-center">
    <div class="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src="@/assets/airfryer.jpg" alt="Shoes" />
      </figure>
      <div class="card-body">
        <form
          @submit.prevent="convertToAirfryer"
          method="post"
          class="flex flex-col space-y-4"
        >
          <div class="flex flex-col items-center space-y-2">
            <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="label-text">{{ $t('tempFurn') }} ?</span>
              </div>
              <label class="input input-bordered flex items-center gap-2">
                <IconThermometer />
                <input
                  v-model="tempFurnace"
                  type="text"
                  inputmode="tel"
                  class="grow"
                  :placeholder="$t('temperature')"
                  required
                />
                °C
              </label>
            </label>

            <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="label-text">{{ $t('timeFurn') }} ?</span>
              </div>
              <label class="input input-bordered flex items-center gap-2">
                <IconTimer />
                <input
                  v-model="timeFurnace"
                  type="text"
                  inputmode="tel"
                  class="grow"
                  :placeholder="$t('time')"
                  required
                />
                Min
              </label>
            </label>
            <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="label-text">{{ $t('airFryerTemp') }}:</span>
              </div>
              <div class="input input-bordered flex items-center gap-2">
                <IconThermometer />
                <input
                  v-model="tempAirFryer"
                  type="text"
                  class="grow"
                  readonly
                />
                °C
              </div>
            </label>
            <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="label-text">{{ $t('airFryerTime') }}:</span>
              </div>
              <div class="input input-bordered flex items-center gap-2">
                <IconTimer /><input
                  v-model="timeAirFryer"
                  type="text"
                  class="grow"
                  readonly
                />
                Min
              </div>
            </label>
          </div>
          <div class="card-actions justify-end">
            <button class="btn btn-primary" type="submit">
              {{ $t('convert') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
