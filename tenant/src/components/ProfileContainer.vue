<template>
  <div class="fr-container fr-container-full-size">
    <TopEditMenu :step="step"></TopEditMenu>
    <div class="bg--grey full-height fr-grid-row">
      <LeftEditMenu :step="step" class="fr-col-md-4 fr-col-xl-3"></LeftEditMenu>
      <div
        class="fr-col-xl-9 fr-col-md-8 fr-col-xs-12 fr-pt-md-4w fr-pt-2w fr-grid-row fr-pb-10w fr-m-2w fr-m-md-0"
        id="step-content"
      >
        <div class="fr-col-12 max-600 ml">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import LeftEditMenu from "./LeftEditMenu.vue";
import TopEditMenu from "./TopEditMenu.vue";
import { UtilsService } from "../services/UtilsService";

@Component({
  components: {
    LeftEditMenu,
    TopEditMenu
  }
})
export default class ProfileContainer extends Vue {
  @Prop() step!: number;

  isMobile() {
    return UtilsService.isMobile();
  }
}
</script>

<style lang="scss" scoped>
@import "df-shared/src/scss/_variables.scss";

.ml {
  @media all and (min-width: 768px) {
    margin-left: 10%;
  }
}
</style>
