<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <Base v-if="creamer === 'None'" :name=beverage />
        <Creamer v-else :name=creamer />
      </template>
      <template v-slot:mid>
        <Base v-if="syrup === 'None'" :name=beverage />
        <Syrup v-else :name=syrup />
      </template>
      <template v-slot:bottom>
        <Base :name=beverage />
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

type Props = {
  isIced: boolean;
  creamer: string;
  syrup: string;
  beverage: string;
};
defineProps<Props>();
</script>
