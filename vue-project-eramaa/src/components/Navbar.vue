<template>
    <link rel="stylesheet" 
    href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
    integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
    crossorigin="anonymous">
    <div class="nav-main-container">
        <ul>
            <div class="nav-image-container">
                <img src="/Images/Eramaa_logo_dark-green_without-safezone_RGB.svg" width="234" height="36">
            </div>
            <div class="nav-list-container">
                <li><a>Teenused</a></li>
                <li><a>Meist</a></li>
                <li><a>Tule tööle</a></li>
                <li><a>Tööprotsessid</a></li>
                <li><a>Maaomanikule</a></li>
                <li><a>Kontakt</a></li>
                <li><a id="offer">Küsi pakkumist</a></li>
                <li><a id="lang">Eng <i class="fas fa-chevron-down"></i></a></li>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style lang="scss">
@import './Navbar.scss';
</style>