<template>
    <div class=" border-green-400">
        <div class="border border-red-400 my-2">
          <p class="font-bold text-thin">October 1, 2024</p>
          <div v-for="post in posts" :key="post.id" class="border border-purple-400 h-22 my-2 p-1 relative">         
            <p class="font-medium text-md">{{ post.title }}</p>
            <Dialog>
                <DialogTrigger as-child>
                <Button variant="link" class="absolute right-1 top-0" size="icon">
                    <FilePenLine class="w-3 h-3" />
                </Button>
                </DialogTrigger>
                <DialogContent class="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Post</DialogTitle>
                    <DialogDescription>
                    Make changes to your POST TITLE here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div class="grid gap-4 py-4">
                    <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="name" class="">
                        POST
                    </Label>
                    <Input id="name" v-model="newPost" :placeholder="post.description" class="col-span-3" />
                    </div>
                </div>
                    <DialogFooter>
                        <Button @click="updatePost(post.id)">
                            Save changes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <p class="text-xs my-1">{{ post.description }}</p>
            <div class="border border-red-400 flex flex-row justify-between bottom-0 w-[100%] mt-2 h-[30px]">
                <div class="border border-blue-400 flex flex-row items-center h-[30px]">
                    <div class="border w-[50px] h-[28px] rounded-lg"></div>
                    <p class="text-xs ml-2">{{ post.handle }}</p>
                </div>
                <div class="border border-green-400 h-[30px] flex items-center">
                    <p class="text-xs">Posts at: {{ post.time }}</p>
                </div>
            </div>
          </div>
          
        </div>
        <div class="border border-red-400 my-2">
          <p class="font-bold text-thin">October 3, 2024</p>
          
        </div>
        <div class="border border-red-400 my-2">
          <p class="font-bold text-thin">October 5, 2024</p>
          
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { FilePenLine } from 'lucide-vue-next';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const newPost = ref("");
const posts = ref([
    {
        id: 1,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, veritatis? lorem",
        title: "Egypt's ancient pyramid",
        handle: "@historychannel",
        time: "03:00PM"
    },
    {
        id: 2,
        description: "Lorem2222, ipsum dolor sit amet consectetur adipisicing elit. Ullam, veritatis? lorem",
        title: "Egypt's2222 ancient pyramid",
        handle: "@his222torychannel",
        time: "05:00PM"
    },
    {
        id: 3,
        description: "Lorem,3333 ipsum dolor sit amet consectetur adipisicing elit. Ullam, veritatis? lorem",
        title: "Egypt's3333 ancient pyramid",
        handle: "@hist333orychannel",
        time: "06:00PM"
    },
]);

const updatePost = (id) => {
    console.log("Here is the ID of the post to edit " + id)
}
</script>

<style>

</style>