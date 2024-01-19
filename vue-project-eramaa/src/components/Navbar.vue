<template>
    <div :class="{ 'nav-main-container' : true, 'sticky'  : isSticky}">
        <ul>
            <div class="nav-image-container">
                <img src="/Images/Eramaa_logo_dark-green_without-safezone_RGB.svg" width="234" height="36">
            </div>
            <div class="nav-list-container">
                <li><router-link to="/services">Teenused</router-link></li>
                <li><a>Meist</a></li>
                <li><a>Tule tööle</a></li>
                <li><a>Tööprotsessid</a></li>
                <li><a>Maaomanikule</a></li>
                <li><a>Kontakt</a></li>
                <li><a id="offer">Küsi pakkumist</a></li>
                <li><a id="lang">Eng</a></li>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
    isSticky: Boolean
  },
};

</script>

<style lang="scss">
@import './Navbar.scss';
</style>