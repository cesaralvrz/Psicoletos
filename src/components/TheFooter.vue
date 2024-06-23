<template>
	<footer class="px-4 py-8 bg-pinky text-gray-800">
		<div class="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
			<div class="flex flex-row pr-3 space-x-4 sm:space-x-8">
				<img src="../assets/logo_psicoletos.png" alt="Logo Psicoletos" class="object-scale-down max-h-full">
			</div>
            <ul class="flex flex-wrap items-center space-x-4 sm:space-x-8 text-sm">
                <li>
                    Creado por <a rel="noopener noreferrer" target="_blank" href="https://acadeller.com/">acadeller.</a>
                </li>
            </ul>
			<ul class="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                <li>
					<a rel="noopener noreferrer" href="#services">Servicios</a>
				</li>
                <li>
					<a rel="noopener noreferrer" href="#about">Sobre Mí</a>
				</li>
                <li>
					<a rel="noopener noreferrer" href="#contact">Contacto</a>
				</li>
				<li>
					<a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/psicoletos/">Instagram</a>
				</li>
			</ul>
		</div>
	</footer>
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