<template>
    <div class="main-container">
        <div class="banner-wrapper">
            <Navbar/>
            <div class="filter-overlay"></div>
                <video ref="videoPlayer" style="height: 1920; width: 1080;">
                    <source :src="videoSource" type="video/mp4" />
                </video>
            <div class="banner-container">
                <div class="grid-wrapper">
                    <div class="banner-item-left">
                        <h2><span>Sinu partner </span>põllu- ja metsamajandamisel</h2>
                        <p>Majandame Eesti metsi vastutustundlikult ning lisame kasutamata põldudele väärtust.
                        Järeltulevatele põlvedele jätame jätkusuutlikudmetsad ja põllumaad.
                        </p>
                    </div>
                    <div class="banner-item-right">
                    </div>
                </div>
                <div class="banner-footer-layout">
                    <div class="layout-item">
                        <h3>Personaalne ja paindlik</h3>
                        <p>Tagame maaomanikule maksimaalse tulu. Majanduskavade ja raieplaanide koostamine on kohandatav vastavalt kliendi soovidele.</p>
                    </div>
                    <div class="layout-item">
                        <h3>Kvaliteet ja tipptapsemel tehnika</h3>
                        <p>Eramaas töötavad kogenud spetsialistid ja meil on kaasaegne masinapark. Hindame oma töös kõrgelt korrektsust ja läbipaistvust.</p>
                    </div>
                    <div class="layout-item">
                        <h3>Maaomanike harimine</h3>
                        <p>Metsade ja põllumaade teadlik ja majanduslikult tõhusmajandamine. Räägime läbi oma kogemuse, miks on oluline metsa majandada ning kuidas seda teha.</p>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
    name: 'Home',
    components: {
        Navbar
    },
    data() {
        return {
            videoSource: '/Videos/-baa4-41f9-8812-4d63432e65f9.mp4'
        };
    },

    mounted() {
        this.$refs.videoPlayer.addEventListener('loadedmetadata', this.playVideo);
    },
    methods: {
        playVideo() {
            this.$refs.videoPlayer.play();
        },
    }
}

</script>

<style lang="scss">
@import './Home.scss';
</style>