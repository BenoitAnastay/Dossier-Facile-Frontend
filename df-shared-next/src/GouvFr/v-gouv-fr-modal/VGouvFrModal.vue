<template>
  <div class="v-gouv-fr-modal">
    <div @click="isOpened = true">
      <slot name="button"> </slot>
    </div>
    <dialog
      aria-labelledby="fr-modal-title-modal-1"
      role="dialog"
      class="fr-modal"
      :class="{ 'fr-modal--opened': isOpened }"
    >
      <div class="fr-container--fluid fr-container-md">
        <div class="fr-grid-row fr-grid-row--center">
          <div class="fr-col-12">
            <div class="fr-modal__body">
              <div class="fr-modal__header">
                <button
                  class="fr-btn--close fr-btn"
                  title="Fermer la fenêtre modale"
                  @click="isOpened = false"
                  target="_self"
                  type="button"
                >
                  Fermer
                </button>
              </div>
              <div class="fr-modal__content">
                <h1 id="fr-modal-title-modal-1" class="fr-modal__title">
                  <span class="fr-fi-arrow-right-line fr-fi--lg"></span>
                  <slot name="title"> </slot>
                </h1>
                <slot name="content"> </slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const isOpened = ref(false);
</script>

<style scoped>
.fr-container-md {
  margin: auto;
}
</style>
