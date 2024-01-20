<template>
    <div class="stats-main-container">
        <div class="filter-overlay"></div>
            <img src="/Images/pexels-olena-bohovyk-5345032 1.png"  style="height: 100vh; width: 100%; object-fit: cover;" />
        <div class="stats-grid-container">
            <div class="stas-left-container">
                <div class="stats-left-item">
                    <h4>Hea naaber sinu eramaal</h4>
                </div>
                <div class="stats-left-item">
                    <div id="stats-detail-wrapper-left">
                        <img src="/Images/Nature (1).svg" style="width: 124px; height: 124px;">
                    </div>
                    <div id="stats-detail-wrapper-right">
                        <p>Istutatud puud</p>
                        <h4>7895+</h4>
                    </div>
                </div>
            </div>
            <div class="stats-right-container">
                <div class="stats-right-item">
                    <div id="stats-detail-wrapper">
                        <img src="/Images/Nature.svg" style="width: 85px; height: 120px;">
                        <p>Rahulolevat klienti</p>
                        <h4>2400+</h4>
                    </div>
                </div>
                <div class="stats-right-item">
                    <div id="stats-detail-wrapper">
                        <img src="/Images/Non-categorized.svg" style="width: 85px; height: 120px;">
                        <p>Hooldatud maad</p>
                        <h4>2400ha+</h4>
                    </div>
                </div>
                <div class="stats-right-item">
                    <div id="stats-detail-wrapper">
                        <img src="/Images/Map.svg" style="width: 85px; height: 120px;">
                        <p>Metsa tagasikasv</p>
                        <h4>80%</h4>
                    </div>
                </div>
                <div class="stats-right-item">
                    <div id="stats-detail-wrapper">
                        <img src="/Images/Vehicles.svg" style="width: 85px; height: 120px;">
                        <p>Tegevusaastat</p>
                        <h4>10+</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Stats',
    }
</script>

<style lang="scss">
@import './Stats.scss';
</style>