<template>
    <div class="heroContact">
        <carousel :items-to-show="1">
            <Slide v-for="slide in 2" :key="slide">
                <slide class="slider-element min-vh-60 min-vh-md-100 include-header" style="background-image: url('/demos/recipes/images/slider/1/bg.jpg');">
                    <div class="slider-inner">
                        <div class="rev_slider_wrapper fullscreen-container">
                            <div class="recipe-items p-0" style="overflow: visible;">
                                <div class="row align-items-stretch align-content-stretch g-0">
                                    <div class="col-lg-6 min-vh-60 min-vh-md-100 b-none">
                                        <h3 class="mb-0" style="z-index: 7; white-space: nowrap; font-size: 54px; letter-spacing: 0px; color:#FFF; line-height: 50vh;">Vanilla Latte Ice</h3>
        
                                        <p class="tp-caption Restaurant-Description mb-6" style="z-index: 5; min-width: 480px; max-width: 480px; white-space: normal; letter-spacing: 0px; display: block; margin: auto;">Appropriately provide access to front-end potentialities via synergistic experiences. Competently maximize open-source imperatives after corporate systems.</p>
        
                                        <a class="tp-caption rev-btn button button-large m-0 button-white fw-bold button-circle button-light"
                                            href="demos/recipes/recipe-single.html" target="_blank"
                                            style="z-index: 9; background-color: #FFF; padding: 4px 28px"><span>View Recipe</span> <i class="icon-angle-right"></i>
                                        </a>
                                    </div>
                                    <div class="col-lg-6 min-vh-60 min-vh-md-100">
                                        <div class="row g-0">
                                            <div class="col-sm-12 col-12 b-none">
                                                <div class="card" style="line-height: 100vh;">
                                                    <div class="card-body">
                                                        <img src="demos/recipes/images/popular/2.png" alt="image">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- SLIDE  -->
                        </div>
                    </div>
                </slide>
                <slide class="slider-element min-vh-60 min-vh-md-100 include-header" style="background-image: url('/demos/recipes/images/recipes-bg.jpg');">
                    <div class="slider-inner">
                        <div class="rev_slider_wrapper fullscreen-container">
                            <div class="recipe-items p-0" style="overflow: visible;">
                                <div class="row align-items-stretch align-content-stretch g-0">
                                    <div class="col-lg-6 min-vh-60 min-vh-md-100 b-none">
                                        <h3 class="mb-0" style="z-index: 7; white-space: nowrap; font-size: 54px; letter-spacing: 0px; color:#FFF; line-height: 50vh;">Hot Vietnam Drip</h3>
        
                                        <p class="tp-caption Restaurant-Description mb-6" style="z-index: 5; min-width: 480px; max-width: 480px; white-space: normal; letter-spacing: 0px; display: block; margin: auto;">Appropriately provide access to front-end potentialities via synergistic experiences. Competently maximize open-source imperatives after corporate systems.</p>
        
                                        <a class="tp-caption rev-btn button button-large m-0 button-white fw-bold button-circle button-light"
                                            href="demos/recipes/recipe-single.html" target="_blank"
                                            style="z-index: 9; background-color: #FFF; padding: 4px 28px"><span>View Recipe</span> <i class="icon-angle-right"></i>
                                        </a>
                                    </div>
                                    <div class="col-lg-6 min-vh-60 min-vh-md-100">
                                        <div class="row g-0">
                                            <div class="col-sm-12 col-12 b-none">
                                                <div class="card" style="line-height: 100vh;">
                                                    <div class="card-body">
                                                        <img src="demos/recipes/images/popular/2.png" alt="image">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- SLIDE  -->
                        </div>
                    </div>
                </slide>
                <slide class="slider-element min-vh-60 min-vh-md-100 include-header" style="background-image: url('/demos/recipes/images/recipes-bg.jpg');">
                    <div class="slider-inner">
                        <div class="rev_slider_wrapper fullscreen-container">
                            <div class="recipe-items p-0" style="overflow: visible;">
                                <div class="row align-items-stretch align-content-stretch g-0">
                                    <div class="col-lg-6 min-vh-60 min-vh-md-100 b-none">
                                        <h3 class="mb-0" style="z-index: 7; white-space: nowrap; font-size: 54px; letter-spacing: 0px; color:#FFF; line-height: 50vh;">Vanilla Latte Ice</h3>
        
                                        <p class="tp-caption Restaurant-Description mb-6" style="z-index: 5; min-width: 480px; max-width: 480px; white-space: normal; letter-spacing: 0px; display: block; margin: auto;">Appropriately provide access to front-end potentialities via synergistic experiences. Competently maximize open-source imperatives after corporate systems.</p>
        
                                        <a class="tp-caption rev-btn button button-large m-0 button-white fw-bold button-circle button-light"
                                            href="demos/recipes/recipe-single.html" target="_blank"
                                            style="z-index: 9; background-color: #FFF; padding: 4px 28px"><span>View Recipe</span> <i class="icon-angle-right"></i>
                                        </a>
                                    </div>
                                    <div class="col-lg-6 min-vh-60 min-vh-md-100">
                                        <div class="row g-0">
                                            <div class="col-sm-12 col-12 b-none">
                                                <div class="card" style="line-height: 100vh;">
                                                    <div class="card-body">
                                                        <img src="demos/recipes/images/popular/2.png" alt="image">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- SLIDE  -->
                        </div>
                    </div>
                </slide>
            </Slide>

            <template #addons></template>
        </carousel>
    </div>
</template>

<script>
	import 'vue3-carousel/dist/carousel.css'
	import { Carousel, Slide } from 'vue3-carousel'

    export default {
        name: 'HeroHome',
        components: {
			Carousel,
			Slide,
        }
    }
</script>

<style scoped>
    .b-none {
        border: none !important;
    }
    .heroContact {
        margin-top: -101.778px;
    }
</style>