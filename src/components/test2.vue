<template>
  <div class="bg-white">
    <header class=" bg-white shadow-md font-poppins">
      <p class="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">Get free delivery on orders over $100</p>
      <!-- Desktop -->
      <nav  class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="h-16 flex items-center">
            <!-- Button -->
            <button type="button" class="bg-white p-2 rounded-md text-gray-400 lg:hidden" @click="open = true">
              <span class="sr-only">Open menu</span>
              <MenuIcon class="h-7 w-7" aria-hidden="true" />
            </button>

            <!-- Logo -->
            <div class="ml-4 flex lg:ml-0">
              <a href="#">
                <p class="text-2xl font-normal">Kmar</p>
                <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="" /> -->
              </a>
            </div>

            <!-- Menus -->
            <div class="ml-auto flex items-center">
              <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-10">
                <a href="#" class="text-base font-light text-gray-700 hover:text-gray-800">Home</a>
                <a href="#" class="text-base font-light text-gray-700 hover:text-gray-800">Shop</a>
                <!-- Flyout collection menus -->
                <PopoverGroup class="hidden lg:flex lg:ml-8  lg:self-stretch">
                <div class="h-full flex space-x-8">
                <Popover v-for="category in navigation.categories" :key="category.name" class="flex" v-slot="{ open }">
                  <div class="relative flex">
                    <PopoverButton :class="[open ? 'border-black-600 text-black-600' : 'border-transparent text-gray-700 hover:text-gray-800', 'relative z-10 flex items-center transition-colors ease-out duration-200 text-base font-light border-b-2 -mb-px pt-px']">
                      {{ navigation.categories[0].name }}
                    </PopoverButton>
                  </div>

                  <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <PopoverPanel class="absolute top-44 inset-x-0 text-sm text-gray-500 ">
                      <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                      <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"/>
                      <div class="relative bg-white">
                        <div class="max-w-7xl mx-auto px-8 mt-px">
                          <!-- แท็คgrid -->
                          <div class="grid grid-cols-2 gap-y-10 gap-x-8 py-9">
                            <div class="grid grid-cols-2 gap-x-8 col-start-2">
                              <div v-for="item in category.featured" :key="item.name" class="group relative text-base sm:text-sm">
                                <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                  <img :src="item.imageSrc" :alt="item.imageAlt" class="object-center object-cover" />
                                </div>
                                <a
                                 :href="item.href" class="mt-6 block font-medium text-gray-900">
                                  <span class="absolute z-10 inset-0" aria-hidden="true" />

                                  {{ item.name }}
                                </a>
                                <p aria-hidden="true" class="mt-1">Shop now</p>
                              </div>
                            </div>
                            <div class="grid grid-cols-3 gap-y-10 gap-x-8 row-start-1 text-sm">
                              <div v-for="section in category.sections" :key="section.name">
                                <p :id="`${section.name}-heading`" class="font-medium text-gray-900">
                                  {{ section.name }}
                                </p>
                                <ul role="list" :aria-labelledby="`${section.name}-heading`" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                  <li v-for="item in section.items" :key="item.name" class="flex">
                                    <a :href="item.href" class="hover:text-gray-800">
                                      {{ item.name }}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <!-- แท็คgrid -->
                          </div>
                          <!-- แท็คใหญ่ -->
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>

                <!-- <a v-for="page in navigation.pages" :key="page.name" :href="page.href" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">{{ page.name }}</a> -->
              </div>
                </PopoverGroup>
                <a href="#" class="text-base font-light text-gray-700 hover:text-gray-800">About us</a>
                <a href="#" class="text-base font-light text-gray-700 hover:text-gray-800">Contact</a>
                 <span class="h-6 w-px bg-gray-200" aria-hidden="true" />
              </div>

              <!-- Search -->
              <div class="flex lg:ml-6">
                <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Search</span>
                  <SearchIcon class="w-6 h-6" aria-hidden="true" />
                </a>
              </div>

              <!-- Account -->
              <div class="flex lg:ml-6">
                <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Search</span>
                  <UserIcon class="w-6 h-6" aria-hidden="true" />
                </a>
              </div>

              <!-- Cart -->
              <div class="ml-4 flow-root lg:ml-6">
                <a href="#" class="group -m-2 p-2 flex items-center">
                  <ShoppingBagIcon class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                  <span class="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
             <!-- ทำให้จอสีดำๆเทาๆ -->
            <TransitionChild as="template"
              enter="transition-opacity ease-linear duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0">
              <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>
             <!-- side bar -->
            <div class="fixed inset-0 flex z-40 overflow-auto">
              <TransitionChild as="template"
                enter="transition transform duration-300 ease-in-out"
                enter-from="-translate-x-full"
                enter-to="translate-x-0"
                leave="transition transform duration-300 ease-in-out"
                leave-from="translate-x-0"
                leave-to="-translate-x-full">
                <DialogPanel class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                  <div class="px-4 pt-5 pb-2 flex">
                    <button type="button" class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400" @click="open = false">
                      <span class="sr-only">Close menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <!-- Links -->
                  <TabGroup as="div" class="mt-2 px-4">
                    <div class="border-b border-gray-200 px-4">
                      <TabList class="-mb-px flex px-4 space-x-8">
                        <Tab as="template" v-for="category in navigation.categories" :key="category.name" v-slot="{ selected }">
                          <button :class="[selected ? 'text-gray-600 border-gray-600' : 'text-gray-900 border-transparent', 'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium']">
                            {{ category.name }}
                          </button>
                        </Tab>
                      </TabList>
                    </div>
                     <TabPanels as="template">
                       <TabPanel v-for="category in navigation.categories" :key="category.name" class="pt-10 pb-8 px-4 space-y-10">
                          <div class="grid grid-cols-2 gap-x-4">
                            <div v-for="item in category.featured" :key="item.name" class="group relative text-sm">
                              <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                <img :src="item.imageSrc" :alt="item.imageAlt" class="object-center object-cover" />
                              </div>
                              <a :href="item.href" class="mt-6 block font-medium text-gray-900">
                                <span class="absolute z-10 inset-0" aria-hidden="true" />
                                {{ item.name }}
                              </a>
                              <p aria-hidden="true" class="mt-1">Shop now</p>
                            </div>
                          </div>
                          <div v-for="section in category.sections" :key="section.name">
                            <p :id="`${category.id}-${section.id}-heading-mobile`" class="font-medium text-gray-900">
                            {{ section.name }}
                            </p>
                            <ul role="list" :aria-labelledby="`${category.id}-${section.id}-heading-mobile`" class="mt-6 flex flex-col space-y-6">
                              <li v-for="item in section.items" :key="item.name" class="flow-root">
                                <a :href="item.href" class="-m-2 p-2 block text-gray-500">
                                  {{ item.name }}
                                </a>
                              </li>
                            </ul>
                          </div>
                       </TabPanel>
                     </TabPanels>
                  </TabGroup>

                <div class="border-t border-gray-200 py-6 px-4 space-y-6">
                  <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                    <a :href="page.href" class="-m-2 p-2 block font-medium text-gray-900">{{ page.name }}</a>
                  </div>
                </div>
                </DialogPanel>
              </TransitionChild>
            </div>
        </Dialog>
      </TransitionRoot>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  Dialog,
  TabList,
  TabGroup,
  TransitionRoot
} from '@headlessui/vue'
import { MenuIcon, SearchIcon, ShoppingBagIcon, UserIcon, XIcon } from '@heroicons/vue/outline'

const navigation = {
  categories: [
    {
      id: 'collection',
      name: 'Collection',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.'
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.'
        }
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' }
          ]
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' }
          ]
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' }
          ]
        }
      ]
    }
  ],
  pages: [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'About us', href: '#' },
    { name: 'Contact', href: '#' }
  ]
}

const open = ref(false)
</script>
