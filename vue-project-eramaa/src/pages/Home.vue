<template>
    <div class="main-container">
        <div class="banner-wrapper">
            <Navbar/>
            <div class="filter-overlay"></div>
                <video ref="videoPlayer" style="height: 100vh; width: 100%; object-fit: cover;" loop>
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
        <div class="services-main-container">
            <div class="grid-container">
                <div class="services-grid-item">
                    <img src="/Images/red-zeppelin-BPoCgY-I4gk-unsplash.png">
                    <div class="services-heading">
                        <h4>Metsamaa ost</h4>
                    </div>
                </div>
                <div class="services-grid-item">
                    <img src="/Images/red-zeppelin-wK8FotlDnrc-unsplash.png">
                    <div class="services-heading">
                        <h4>Põllumaa ost</h4>
                    </div>
                </div>
                <div class="services-grid-item">
                    <img src="/Images/pexels-karolina-grabowska-4206049.png">
                    <div class="services-heading">
                        <h4>Raieõiguse ost</h4>
                    </div>
                </div>  
                <div class="services-grid-item">
                    <img src="/Images/marina-reich-HYZLZYJfkIk-unsplash.png">
                    <div class="services-heading">
                        <h4>Metsa ülestöötamine ja hooldus</h4>
                    </div>
                </div>
                <div class="services-grid-item">
                    <img src="/Images/close-up-park-ranger-woods.png">
                    <div class="services-heading">
                        <h4>Metsamajanduse kavad</h4>
                    </div>
                </div>  
                <div class="services-grid-item">
                    <img src="/Images/image 202.png">
                    <div class="services-heading">
                        <h4>Tutvu tööprotsessidega</h4>
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
                    <video ref="videoPlayer2" style="height: 788px; width: 845px; object-fit: cover;" loop>
                        <source :src="videoSource2" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Stats from '../components/Stats.vue';

export default {
    name: 'Home',
    components: {
        Navbar,
        Stats
    },
    data() {
        return {
            videoSource1: '/Videos/-baa4-41f9-8812-4d63432e65f9.mp4',
            videoSource2: '/Videos/-fda1-488f-a0ef-57e82335a397.mp4'
        };
    },

    mounted() {
        this.$refs.videoPlayer.addEventListener('loadedmetadata', this.playVideo);
        this.$refs.videoPlayer2.addEventListener('loadedmetadata', this.playVideo2);
    },
    methods: {
        playVideo() {
            this.$refs.videoPlayer.play();
        },
        playVideo2() {
            this.$refs.videoPlayer2.play();
        },
    }
}

</script>

<style lang="scss">
@import './Home.scss';
</style>