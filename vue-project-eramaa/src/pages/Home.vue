<template>
    <div class="main-container">
        <div class="banner-wrapper">
            <Navbar :isSticky="isSticky"/>
            <div class="filter-overlay"></div>
                <video ref="videoPlayer" muted style="height: 100vh; width: 100%; object-fit: cover;" loop>
                    <source :src="videoSource1" type="video/mp4" />
                </video>
            <div class="banner-container">
                <div class="grid-wrapper">
                    <div class="banner-item-left">s
                        <h2><span>Sinu partner </span>põllu- ja metsamajandamisel</h2>
                        <div class="paragraph-wrapper">
                            <p>Majandame Eesti metsi vastutustundlikult ning lisame kasutamata põldudele väärtust.
                            Järeltulevatele põlvedele jätame jätkusuutlikudmetsad ja põllumaad.
                            </p>
                        </div>
                    </div>
                    <div class="banner-item-right">
                        <img src="/Images/gif.gif">
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
        <div class="services-main-container" ref="servicesMainContainer">
            <div class="grid-container">
                <div class="services-grid-item" v-for="data in serviceData" :key="data.title">
                    <div class="services-filter-overlay"></div>
                    <img :src="data.image" />
                    <div class="services-heading">
                        <h4>
                            {{ data.title }}
                        </h4>
                    </div>
                    <div class="service-hover-container">
                        <img src="/Images/Group 51154.svg">
                    </div>
                </div>
            </div>
        </div>
        <Stats/>
        <div class="about-main-container">
            <div class="about-grid-container">
                <div class="about-grid-item">
                    <div class="about-description-container">
                        <h2>Meie lugu</h2>
                        <p>
                            Meie ettevõte on Eesti metsa- ja põllumaid ostnud ning nende eest hoolitsenud juba ligemale kümme aastat.
                        </p>
                        <p>
                            Varem perefirmana teise äriühingute all tegutsenud ja alates 2010 Relsiit Metsad ning 2014 Relsiit 
                            Haldus nime alla koondununa oleme kasvanud kogu Eestit katvaks metsa- ja põllukinnistuid haldavaks ettevõtteks. 
                        </p>
                        <button>Loe meie kohta</button>
                    </div>
                </div>
                <div class="about-grid-item">
                    <video ref="videoPlayer2" muted style="height: 788px; width: 845px; object-fit: cover;" loop>
                        <source :src="videoSource2" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
        <div class="join-main-container">
            <video ref="videoPlayer3" muted style="height: 100vh; width: 100%; object-fit: cover;" loop>
                <source :src="videoSource3" type="video/mp4" />
            </video>
            <div class="join-image-container">
                <img src="/Images/CTA_Shape.png"> 
            </div>
            <div class="join-description-container">
                <h2>Liitu meie tiimiga</h2>
                <p>Ootame oma kogenud meeskonda hakkajat uut liiget, kes väärtustab Eesti metsi ja tunneb huvi heast metsamajandamisest.</p>
                <p>Kiire areng, huvitavad väljakutsed ja tugev kogukong on märksõnad, mis iseloomustavad Eramaa tänast päeva.</p>
                <button>Vaata tööpakkumisi</button>
            </div>
        </div>
       <MainFooter/>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Stats from '../components/Stats.vue';
import MainFooter from '../components/Footer.vue';
import Data from '../data.json';

export default {
    name: 'Home',
    components: {
        Navbar,
        Stats,
        MainFooter
    },
    data() {
        return {
            videoSource1: '/Videos/-baa4-41f9-8812-4d63432e65f9.mp4',
            videoSource2: '/Videos/-fda1-488f-a0ef-57e82335a397.mp4',
            videoSource3: '/Videos/-bc85-4273-9abf-c2327b7790c8.mp4',
            isSticky: false,
            serviceData: Data,
        };
    },

    mounted() {
        window.addEventListener('scroll', this.handleScrollIntoView);

        this.$refs.videoPlayer.addEventListener('loadedmetadata', this.playVideo);
        this.$refs.videoPlayer2.addEventListener('loadedmetadata', this.playVideo2);
        this.$refs.videoPlayer3.addEventListener('loadedmetadata', this.playVideo3);
    },
    methods: {
        playVideo() {
            this.$refs.videoPlayer.play();
        },
        playVideo2() {
            this.$refs.videoPlayer2.play();
        },
        playVideo3() {
            this.$refs.videoPlayer3.play();
        },
        handleScrollIntoView() {
           const targetElement = this.$refs.servicesMainContainer; 

            if (targetElement) {
                const rect = targetElement.getBoundingClientRect();

                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    this.isSticky = false;
                    this.$emit('scroll-into-view');
                } else {
                    this.isSticky = true;
                }
            }
        }
    }
}

</script>

<style lang="scss">
@import './Home.scss';
</style>