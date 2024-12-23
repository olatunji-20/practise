<template>
    <div class="p-32">
        <h1 class="text-blue-600">Gojjo</h1>
        <p>{{ gojjoStore.name }}</p>
        <div v-if="storeItems.loading" class="p-16 border border-red-400">
            <p class="text-green-800 text-2xl">{{ 'Loading...' }}</p>
        </div>
        <div v-else v-for="post in storeItems.posts" :key="post.id" class="my-4 p-16 border border-red-400">
            <p>{{ post.productName }}</p>
            <p>{{ post.price }}</p>
            <p>{{ post.rating }}</p>
            <p>{{ post.discount }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineComponent } from 'vue';
import { useGojjoStore } from '@/stores/gojjo';

const gojjoStore = useGojjoStore();
gojjoStore.getPosts()
const storeItems = gojjoStore

defineComponent({
    name: "Gojjo"
});
</script>