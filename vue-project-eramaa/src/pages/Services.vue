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
    <div class="services-detail-container">
        <div class="detail-grid-container" v-for="(data, index) in serviceData" :key="index">
            <div class="detail-grid-item" v-if="index < serviceData.length - 1" :class="{ 'order-reverse' : index % 2 !== 0 }">
                <img :src="data.image">
            </div>
            <div class="detail-grid-item" v-if="index < serviceData.length - 1">
                <h3>{{ data.title }}</h3>
                <p>{{ data.text }}</p>
                <p>{{ data.text2 }}</p>
                <p>{{ data.text3 }}</p>
                <button>Loe lähemalt</button>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Data from '../data.json';

export default {
    name: 'Services',
    components: {
        Navbar,
    },
    data() { 
        return {
            serviceData: Data,
        }
    }
}
</script>

<style lang="scss">
@import './Services.scss';
</style>