<template>
    <div class="w-[1000px] mx-auto p-8">
        <h1 class="font-bold text-2xl my-4">Multi-Account Content Calendar</h1>
        <div class="h-[600px] mx-[auto] flex flex-row justify-between">
          <div class="border-green-400 border-2 w-[48%] p-4">
              <h2 class="font-bold text-lg">Calendar View</h2>
              <div class="border border-red-400 my-6 grid grid-cols-3 gap-4">
                  <div class="border border-blue-300">
                      <div class="border w-[40px] h-[40px]"></div>
                      <h6 class="font-bold my-2">YouTube</h6>
                      <div class="border h-8 rounded-md">
                          <Select>
                              <SelectTrigger class="w-[] h-8">
                              <SelectValue placeholder="00:00" />
                              </SelectTrigger>
                              <SelectContent>
                              <SelectGroup>
                                  <SelectLabel>time</SelectLabel>
                                  <SelectItem value="apple">
                                  01:00
                                  </SelectItem>
                                  <SelectItem value="banana">
                                  02:00
                                  </SelectItem>
                              </SelectGroup>
                              </SelectContent>
                          </Select>
                      </div>
                  </div>
                  <div class="border border-blue-300"></div>
                  <div class="border border-blue-300"></div>
              </div>
      
              <div class="border p-2">
                  <div class="w-[300px]">
                      <Calendar v-model="value" :weekday-format="'short'" class="rounded-md" />
                  </div>
              </div>
          </div>
      
      
          <div class="border-blue-400 border-2 w-[48%] p-4">
              <h2 class="font-bold text-lg">Monthly Content Overview</h2>
              <div class="border-2 h-[95%] mt-2 overflow-auto">
                  <Monthly />      
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
import Monthly from '@/components/Monthly.vue'

import { Calendar } from '@/components/ui/calendar'
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'
import { type Ref, ref } from 'vue'

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>
</script>

<style>

</style>