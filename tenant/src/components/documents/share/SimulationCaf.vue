<template>
  <div class="caf-box fr-px-md-5w fr-pb-md-2w fr-mb-3w bg-purple">
    <div class="header fr-h6">
      <div class="header-title">{{ $t("simulation-caf-title") }}</div>
      <img alt="logo caf" class="logo-caf" src="../../../assets/caf.svg" />
    </div>
    <div>
      <div>{{ $t("simulation-caf-text") }}</div>
      <div class="body-btn-container">
        <button
          type="button"
          :aria-label="$t('btn-caf')"
          :title="$t('btn-caf')"
          class="fr-btn fr-btn--secondary"
          @click="openSimulationCAF()"
        >
          {{ $t("btn-caf") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AnalyticsService } from "../../../services/AnalyticsService";

@Component
export default class SimulationCaf extends Vue {
  openSimulationCAF() {
    AnalyticsService.openSimulationCAF();
    window.open(
      "https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/estimervosdroits/lelogement#/stateaccueil",
      "_blank"
    );
  }
}
</script>
<style lang="scss" scoped>
.header {
  display: inline-flex;
  width: 100%;
  .header-title {
    padding-top: 0.5rem;
  }
  .logo-caf {
    margin-left: auto;
  }
}

.body-btn-container {
  display: inline-flex;
  width: 100%;
  button {
    margin-top: 1rem;
    margin-left: auto;
  }
}
</style>
<i18n>
{
"en": {
  "btn-caf": "Do a simulation",
  "simulation-caft-title": "Are you eligible?",
  "simulation-caf-text": "Go to caf website to know if you can get a rental subvention."
},
"fr": {
  "btn-caf": "Faire une simulation",
  "simulation-caf-title": "Êtes-vous éligible ?",
  "simulation-caf-text": "Découvrez l'estimation de l'aide au logement à laquelle vous pourriez être éligible."
}
}
</i18n>
