import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useGojjoStore = defineStore('gojjoStore', () => {
    const loading = ref(false);
    const name = ref("sheriff");
    const posts = ref([]);

    const getPosts = async () => {
        try {
            loading.value = true;
            const res = await axios.get("https://sample-api.gojjoapps.com/api/posts/categories", {
                params: {
                    'api_token': 'Token 0a9a4277361b4a69da24211bfd76d853c696019e'
                }
            });
            posts.value = res.data;
            loading.value = false
        }
        catch (err) {
            console.log("ERROR")
        }
    }

    return {loading, name, posts, getPosts}
})