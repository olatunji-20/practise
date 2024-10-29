<template>
  <div class="">
    <div class="my-1">
        <p class="font-bold text-thin">October 1, 2024</p>
        <div v-for="post in posts1" :key="post.id" class="border my-2 p-1 rounded-md relative">
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
                        Make changes to your POST here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div class="grid gap-4 py-4">
                    <div class="grid grid-cols-4 items-center gap-4">
                        <Label for="name" class="">
                            Name
                        </Label>
                        <Input id="name" v-model="postUpdate" :placeholder="post.title" class="col-span-3" />
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
            <div class="h-8 bottom-0 flex flex-row justify-between">
                <div class="h-8 flex flex-row items-center">
                    <div class="border border-red-300 rounded-lg w-[50px] h-8"></div>
                    <p class="ml-1 text-xs">{{ post.handle }}</p>
                </div>
                <div class="w-[100px] h-8 flex items-center">
                    <p class="text-xs">Posts at: {{  post.time  }}</p>
                </div>
            </div>
        </div>
    </div>
    
    <div class="my-1">
        <p class="font-bold text-thin">October 3, 2024</p>
        <div v-for="post in posts2" :key="post.id" class="border my-2 p-1 rounded-md">
            <p class="font-medium text-md">{{ post.title }}</p>
            <p class="text-xs my-1">{{ post.description }}</p>
            <div class="h-8 bottom-0 flex flex-row justify-between">
                <div class="h-8 flex flex-row items-center">
                    <div class="border border-red-300 rounded-lg w-[50px] h-8"></div>
                    <p class="ml-1 text-xs">{{ post.handle }}</p>
                </div>
                <div class="w-[100px] h-8 flex items-center">
                    <p class="text-xs">Posts at: {{  post.time  }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="my-1">
        <p class="font-bold text-thin">October 5, 2024</p>
        <div v-for="post in posts3" :key="post.id" class="border-2 my-2 p-1 rounded-md">
            <p class="font-medium text-md">{{ post.title }}</p>
            <p class="text-xs my-1">{{ post.description }}</p>
            <div class="h-8 bottom-0 flex flex-row justify-between">
                <div class="h-8 flex flex-row items-center">
                    <div class="border border-red-300 rounded-lg w-[50px] h-8"></div>
                    <p class="ml-1 text-xs">{{ post.handle }}</p>
                </div>
                <div class="w-[100px] h-8 flex items-center">
                    <p class="text-xs">Posts at: {{  post.time  }}</p>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
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
import { FilePenLine } from 'lucide-vue-next'

const postUpdate = ref("");
const posts1 = ref([
    {
        id: 1,
        description: "Explore the great mysteries of the pyramid of Giza",
        title: "Ancient Egypt's Pyramid",
        handle: "HistoryChannel",
        time: "03:00PM"
    },
    {
        id: 2,
        description: "A quick look at the famous egyptian pharoahs",
        title: "Pharoahs of Egypt",
        handle: "@historybytes",
        time: "12:00PM"
    }
]);

const posts2 = ref([
    {
        id: 1,
        description: "Discover how ROme became the dominant power in the mediteranean",
        title: "The Roman Empire's Rise",
        handle: "TimeTravel101",
        time: "03:00PM"   
    },
    {
        id: 2,
        description: "Explore the great mysteries of the pyramid of Giza",
        title: "Ancient Egypt's Pyramid",
        handle: "HistoryChannel",
        time: "03:00PM"

    }
]);

const posts3 = ref([
    {
        id: 1,
        description: "A day in the life of medieval castle inhabitants",
        title: "Medieval Castle Life",
        handle: "@historygram",
        time: "03:00PM"   
    }
]);

const updatePost = (id) => {
    console.log("post for update " + id)
}

</script>

<style>

</style>