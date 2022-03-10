<template>
<div id="carouselExampleCrossfade" class="carousel slide carousel-fade relative w-full m-0" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button
      type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active float-left w-full">
      <img src="https://media.istockphoto.com/photos/young-man-shopping-shoes-picture-id1292261872?b=1&k=20&m=1292261872&s=170667a&w=0&h=AA5F-5LPlJJjqpUqB5UjCuYhk5YnNEEcEAqa5Ya4lEA=" class="block w-full" alt="Wild Landscape"/>
    </div>
    <div class="carousel-item float-left w-full">
      <img src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" class="block w-full" alt="Camera"/>
    </div>
    <div class="carousel-item float-left w-full">
      <img src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60" class="block w-full" alt="Exotic Fruits"/>
    </div>
  </div>
  <button class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide="next">
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>
    import 'tw-elements';
    export default {
        name: 'ProductCarousel',
    }
</script>