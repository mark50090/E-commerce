<template>
  <div class="bg-white sticky top-0 ">
    <header class="relative bg-white shadow-md font-poppins">
       <p class="bg-zinc-800  px-4 sm:px-10 lg:px-8 text-center text-white ">Get free delivery on orders over $100</p>
       <!-- TooBar Desktop -->
       <nav class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="manu">
          <div class="h-16 flex items-center">
            <button type="button" class="bg-white p-2 rounded-md text-gray-400 lg:hidden" @click="open = true">
              <span class="sr-only">Open menu</span>
              <MenuIcon class="h-7 w-7" aria-hidden="true" />
            </button>

            <!-- Logo -->
            <div class="ml-4 flex lg:ml-0">
              <a href="/">
                <p class="text-2xl font-normal">Kmar</p>
              </a>
            </div>

            <!-- Menus -->
            <div class="ml-auto flex items-center">
              <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-10">
                <a href="#" class="text-base font-light text-gray-700 hover:border-gray-700 border-transparent border-b-2">Home</a>
                <a href="#" class="text-base font-light text-gray-700 hover:border-gray-700 border-transparent border-b-2">Shop</a>
                <!-- Flyout menus -->
                <PopoverGroup class="hidden lg:ml-8 lg:block lg:self-stretch">
                </PopoverGroup>
                <a href="/about" class="text-base font-light text-gray-700 hover:border-gray-700 border-transparent border-b-2">About us</a>
                <a href="#" class="text-base font-light text-gray-700 hover:border-gray-700 border-transparent border-b-2">Contact</a>
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
                  <span class="sr-only">usericon</span>
                  <UserIcon class="w-6 h-6" aria-hidden="true" />
                </a>
              </div>
              <!-- Cart -->
              <div class="ml-4 flow-root lg:ml-6">
                <a href="#" class="group -m-2 p-2 flex items-center">
                  <ShoppingBagIcon class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  <span class="w-7 h-7 flex justify-center items-center ml-2 text-sm font-light text-white border-red-600 rounded-full bg-red-600">{{ countcart }}</span>
                  <span class="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
       </nav>
    </header>
  </div>
</template>
<script>
import { PopoverGroup } from '@headlessui/vue'
import { MenuIcon, SearchIcon, ShoppingBagIcon, UserIcon } from '@heroicons/vue/outline'
// import { ref } from 'vue'
export default {
  components: { MenuIcon, SearchIcon, ShoppingBagIcon, UserIcon, PopoverGroup },
  // setup () {
  //   const open = ref(true)
  //   return {
  //     open
  //   }
  // },
  data () {
    return {
      navigation: {
        categories: [
          {
            id: 'women',
            name: 'Women',
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
          },
          {
            id: 'men',
            name: 'Men',
            featured: [
              {
                name: 'New Arrivals',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.'
              },
              {
                name: 'Artwork Tees',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                imageAlt:
                  'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.'
              }
            ],
            sections: [
              {
                id: 'clothing',
                name: 'Clothing',
                items: [
                  { name: 'Tops', href: '#' },
                  { name: 'Pants', href: '#' },
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
                  { name: 'Re-Arranged', href: '#' },
                  { name: 'Counterfeit', href: '#' },
                  { name: 'Full Nelson', href: '#' },
                  { name: 'My Way', href: '#' }
                ]
              }
            ]
          }
        ],
        pages: [
          { name: 'Company', href: '#' },
          { name: 'Stores', href: '#' }
        ]
      },
      open: true,
      countcart: 150
    }
  },
  methods: {
    show: function () {
      console.log(this.open)
    }
  }
}
</script>
<style >
</style>
