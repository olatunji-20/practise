<template>
    <div class="p-16">
        <h1 class="text-blue-600 text-6xl font-bold mb-8">{{ 'Gojjo Test' }}</h1>
        <div v-if="storeItems.loading" class="p-16 border border-red-400">
            <p class="text-green-800 text-2xl">{{ 'Loading...' }}</p>
        </div>
        <div v-else v-for="post in storeItems.posts" :key="post.id" class="my-4 p-16 border border-red-600 rounded-lg">
            <p class="text-4xl text-green-600">{{ post.authorName }}</p>
            <p class="leading-10 text-blue-800 text-lg">{{ post.topic }}</p>
            <p class="text-yellow-600 text-xs">{{ post.sneakPeak }}</p>
        </div>
        <div v-if="storeItems.showError" class="border-2 p-6">
            <p class="">{{ storeItems.errMsg }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineComponent } from 'vue';
import { useGojjoStore } from '@/stores/gojjo';

defineComponent({
    name: "Gojjo"
});

const gojjoStore = useGojjoStore();
gojjoStore.getPosts();

const storeItems = gojjoStore;

</script>