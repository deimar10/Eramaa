<template>
    <div class="services-banner-wrapper">
        <Navbar />
        <div class="services-filter-overlay"></div>
            <img src="/Images/close-up-park-rangers-woods.png">
            <div class="services-banner-img-container">
                <img src="/Images/variant 2.png"> 
            </div>
        <div class="services-banner-container">
            <div class="services-banner-text">
                <h2>Teenused</h2>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
    name: 'Services',
    components: {
        Navbar,
    }
}
</script>

<style lang="scss">
@import './Services.scss';
</style>