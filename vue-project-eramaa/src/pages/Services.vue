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
    <div class="work-process-main-container">
        <div class="services-filter-overlay"></div>
            <video ref="videoPlayer4" muted style="height: 100vh; width: 100%; object-fit: cover;" loop>
                <source :src="videoSource4" type="video/mp4" />
            </video>
            <div class="work-process-image-container">
                <img src="/Images/CTA_Shape.png"> 
            </div>
            <div class="work-process-description-container">
                <h2>Tööprotsessid</h2>
                <p>Meie ettevõte Eramaa OÜ on Eestimaa metsa- ja põllumaid ostnud ning nende eest hoolitsenud juba ligemale kümme aastat. </p>
                <button>Loe lähemalt</button>
            </div>
        </div>
        <MainFooter />
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Data from '../data.json';
import MainFooter from '../components/Footer.vue';

export default {
    name: 'Services',
    components: {
        Navbar,
        MainFooter
    },
    data() { 
        return {
            serviceData: Data,
            videoSource4: '/Videos/-103b-4ba4-8dcc-65f0371dd0a8.mp4'
        }
    },
    mounted() {
        this.$refs.videoPlayer4.addEventListener('loadedmetadata', this.playVideo4);
    },
    methods: {
        playVideo4() {
            this.$refs.videoPlayer4.play();
        },
    }
}
</script>

<style lang="scss">
@import './Services.scss';
</style>