<script setup lang="ts">
const cardConfig = useAppConfig().directory?.grid?.card;

defineProps(['item']);
</script>

<template>

  <NuxtLink :to="item._path" v-if="cardConfig?.type !== 'bullet'"
    class="border col-span-1 border-gray-200 dark:border-gray-500 hover:border-primary-400 hover:border-solid dark:hover:border-primary-300 rounded relative group transition-all"
    :class="cardConfig?.type === 'shadow' ? 'shadow-sm' : cardConfig?.type === 'dashed' ? 'border-dashed' : ''">
    <DirectoryFeaturedTag class="ml-6" v-if="item.featured" />
      <div  v-if="item.card_image" class="w-full h-36 rounded-t flex items-center justify-center bg-gray-200 dark:bg-gray-600">
      <NuxtImg sizes="400px" :alt="`${item.title} banner`"
        class="w-full max-h-36 object-scale-down"
        :src="item.card_image ?? '/logo.png'"
        :class=" item.invert ? 'invert' : ''"
      />
      </div>
      <div v-else
        class="w-full h-0 rounded-t font-bold text-2xl bg-gray-200 dark:bg-gray-600 line-clamp-4 overflow-hidden">
        {{ item.title }}
      </div>
    <div class="p-6">
      <h3 class="m-0 font-semibold dark:text-gray-50">
        {{ item.title }}
      </h3>
      <p class="line-clamp-6 mt-2 text-sm">
        {{ item.description }}
      </p>
      <div class="p-0 mt-2 flex gap-2 flex-wrap">
        <UiTag v-for="tag in item.tags" :tag="tag" />
      </div>
    </div>
  </NuxtLink>
  <NuxtLink v-else :to="item._path">
    <div class="inline-flex gap-2 items-center">
      <img class="h-5 w-5" :src="item.cover ?? '/logo.png'" />
      <span class="font-semibold dark:text-gray-50">{{ item.title }}</span> -
      <span class="text-gray-600 dark:text-gray-300">{{ item.description }}</span>

    </div>
  </NuxtLink>

</template>