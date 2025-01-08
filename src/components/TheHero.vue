<template>
	<section class="">
		<div class="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
			<h1 class="text-6xl font-bold sm:text-7xl">Conecta con tu 
				<span class="text-psicoletos">bienestar</span>
			</h1>
			<p class="px-8 mt-8 mb-12 text-xl text-psicoletos">Un espacio seguro y personalizado para explorar y mejorar tu bienestar personal</p>
			<div class="flex flex-wrap justify-center">
				<button class="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-gray-700">
					<a rel="noopener noreferrer" href="#contact" class="flex items-center px-4 -mb-1 border-b-2 border-transparent">Ponte en contacto</a>
				</button>
			</div>
		</div>
	</section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Add smooth scrolling behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth',
        })
      }
    })
  })
})
</script>