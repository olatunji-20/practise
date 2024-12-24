import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import { h } from 'vue'
import { useToast } from '@/components/ui/toast/use-toast'
import { ToastAction } from '@/components/ui/toast'

const { toast } = useToast()

export const useGojjoStore = defineStore('gojjoStore', () => {
    const loading = ref(false);
    const showError = ref(false);
    const errMsg = ref("");
    const posts = ref([]);

    const getPosts = async () => {
        try {
            loading.value = true;
            const res = await axios.get("https://my-json-server.typicode.com/olatunji-20/delog-api/blog-posts", {
            // const res = await axios.get("https://sample-api.gojjoapps.com/api/posts/categories", {
                params: {
                    'api_token': 'Token 0a9a4277361b4a69da24211bfd76d853c696019e'
                }
            });
            posts.value = res.data;
            loading.value = false
        }
        catch (err) {
            loading.value = false;
            showError.value = true;
            errMsg.value = err + " " + "Sorry!!! The API could not be fetched.";
            toast({
                title: 'Uh oh! Something went wrong.',
                description: 'There was a problem with your request.',
                action: h(ToastAction, {
                altText: 'Try again',
                }, {
                default: () => 'Try again',
                }),
            });
        }
    }

    const createPost = () => {

    }

    return {loading, name, posts, getPosts, showError, errMsg}
})