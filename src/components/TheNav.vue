<template>
	<header class="p-4">
		<div class="container flex justify-between h-16 mx-auto text-psicoletos">
			<img src="../assets/logo_psicoletos.png" alt="Logo Psicoletos" class="object-scale-down max-h-full">
			<ul class="items-stretch space-x-3 md:flex text-xl" :class="{ 'hidden': !isMenuOpen, 'absolute top-20 left-0 right-0 bg-white rounded-lg mx-4 sm:bg-transparent p-4 space-y-4 shadow-lg md:shadow-none md:p-0 md:relative md:top-0 md:space-y-0': true }">
				<li class="flex">
					<a rel="noopener noreferrer" href="#services" class="flex items-center ml-3 px-4 -mb-1 border-b-2 border-transparent">Servicios</a>
				</li>
				<li class="flex">
					<a rel="noopener noreferrer" href="#about" class="flex items-center px-4 -mb-1 border-b-2 border-transparent">Sobre Mí</a>
				</li>
				<li class="flex">
					<a rel="noopener noreferrer" href="#contact" class="flex items-center px-4 -mb-1 border-b-2 border-transparent">Contacto</a>
				</li>
			</ul>
			<button class="flex justify-end p-4 md:hidden" @click="toggleMenu">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>
		</div>
	</header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
}
</script>