<template>
  <div class="w-[1000px] my-12 mx-[auto]">
    <h1 class="font-bold text-2xl my-4">Multi-Account Content Calendar</h1>
    <div class="h-[600px] flex flex-row justify-between">
        <div class="border border-gray-400 rounded-lg w-[48%] p-4">
            <h2 class="font-bold text-lg">Calendar View</h2>
            <div class="my-6 grid grid-cols-3 gap-3">
                <div class="">
                    <div class="border w-[40px] h-[40px]"></div>
                    <h6 class="font-bold my-1">YouTube</h6>
                    <div class="h-8 border rounded-md">
                        <Select>
                            <SelectTrigger class="h-8">
                            <SelectValue placeholder="time" />
                            </SelectTrigger>
                            <SelectContent>
                            <SelectGroup>
                                <SelectLabel>time</SelectLabel>
                                <SelectItem value="apple">
                                00:00
                                </SelectItem>
                                <SelectItem value="banana">
                                01:00
                                </SelectItem>
                                
                            </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div class="">
                    <div class="border w-[40px] h-[40px]"></div>
                    <h6 class="font-bold my-1">TikTok</h6>
                    <div class="h-8 border rounded-md">
                        <Select>
                            <SelectTrigger class="h-8">
                            <SelectValue placeholder="time" />
                            </SelectTrigger>
                            <SelectContent>
                            <SelectGroup>
                                <SelectLabel>time</SelectLabel>
                                <SelectItem value="apple">
                                00:00
                                </SelectItem>
                                <SelectItem value="banana">
                                01:00
                                </SelectItem>
                                
                            </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div class="">
                    <div class="border w-[40px] h-[40px]"></div>
                    <h6 class="font-bold my-1">Instagram</h6>
                    <div class="h-8 border rounded-md">
                        <Select>
                            <SelectTrigger class="h-8">
                            <SelectValue placeholder="time" />
                            </SelectTrigger>
                            <SelectContent>
                            <SelectGroup>
                                <SelectLabel>time</SelectLabel>
                                <SelectItem value="apple">
                                00:00
                                </SelectItem>
                                <SelectItem value="banana">
                                01:00
                                </SelectItem>
                                
                            </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            <div class="border rounded-md">
                <div class="w-[300px]">
                    <Calendar v-model="value" :weekday-format="'short'" class="rounded-md " />
                </div>                
            </div>
        </div>

        <div class="border border-gray-400 rounded-lg w-[48%] p-4 overflow-auto">
            <h2 class="font-bold text-lg">Monthly Content Overview</h2>
            <div class="mt-2">
                <Content />
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Content from '@/components/Content.vue'

import { Calendar } from '@/components/ui/calendar'
import { DateValue, getLocalTimeZone, today } from '@internationalized/date'
import { Ref, ref } from 'vue'

const value = ref(today(getLocalTimeZone()))

</script>

<style>

</style>