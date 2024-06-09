<template>
	<section class="py-44">
		<div class="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x divide-black">
			<div class="py-6 md:py-0 md:px-6 my-auto">
				<h1 class="text-4xl font-bold">Ponte en contacto con nosotros</h1>
				<p class="pt-2 pb-4 text-lg text-psicoletos">Si estás buscando apoyo psicológico te animo a que te pongas en contacto con nosotros para explorar cómo podemos trabajar juntos hacia tu bienestar mental y emocional.</p>
			</div>
			<form class="flex flex-col py-6 space-y-6 md:py-0 md:px-6 text-left">
				<label class="block">
					<span class="mb-1 text-left">Nombre completo:</span>
					<input type="text" placeholder="Introduce tu nombre..." class="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri">
				</label>
				<label class="block">
					<span class="mb-1">Email:</span>
					<input type="email" placeholder="Introduce tu email..." class="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri">
				</label>
				<label class="block">
					<span class="mb-1">Teléfono:</span>
					<input type="text" placeholder="Introduce tu número de teléfono..." class="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri">
				</label>
				<label class="block">
					<span class="mb-1">¿Qué servicio necesitas?</span>
					<input type="text" placeholder="Coméntanos..." class="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri">
				</label>
				<label class="block">
					<span class="mb-1">Cuéntanos más a detalle:</span>
					<textarea rows="3" class="block w-full rounded-md focus:ring focus:ri focus:ri"></textarea>
				</label>
				<button type="button" class="self-center px-8 py-3 text-lg text-white rounded focus:ring hover:ring focus:ri focus:ri hover:ri">Enviar</button>
			</form>
		</div>
	</section>
</template>