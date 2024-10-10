<template>
    <div class="border-4 border-red-400">
        <h1 class="text-red-400 text-5xl text-center font-bold my-8">PAGE FOR SHADCN</h1>

        <div class="border-2 border-blue-500 p-4">            
            <Button>Button</Button>
        </div>

        <div class="border-2 border-purple-500 w-[600px] rounded-xl mx-auto p-4 my-4">
            <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
                <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
                <AccordionTrigger class="text-blue-800">{{ item.title }}</AccordionTrigger>
                <AccordionContent class="text-red-800">
                    {{ item.content }}
                </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const defaultValue = 'item-1'

const accordionItems = [
  { value: 'item-1', title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
  { value: 'item-2', title: 'Is it unstyled?', content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.' },
  { value: 'item-3', title: 'Can it be animated?', content: 'Yes! You can use the transition prop to configure the animation.' },
]

</script>

<style>

</style>