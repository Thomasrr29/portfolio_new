<template>
        <div class="ag-format-container">
            <span class="text-title" filter-content="S">Proyectos</span>
            <div class="ag-courses_box">
                <div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div class="ag-courses-item_title">
                    Creación de Sitio web para marca deportiva Essential
                    </div>

                    <div class="ag-courses-item_date-box">
                    Start:
                    <span class="ag-courses-item_date">
                        02.20.2023
                    </span>
                    </div>
                </a>
                </div>

                <div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div class="ag-courses-item_title">
                    Sistema de agendamiento de citas virtuales
                    </div>

                    <div class="ag-courses-item_date-box">
                    Start:
                    <span class="ag-courses-item_date">
                        20.04.2024
                    </span>
                    </div>
                </a>
                </div>

                <div class="ag-courses_item">
                <a href="https://github.com/Thomasrr29/Inventary_project" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div class="ag-courses-item_title">
                        Sistema de control de inventario y movimientos
                    </div>

                    <div class="ag-courses-item_date-box">
                    Start:
                    <span class="ag-courses-item_date">
                        25.08.2024
                    </span>
                    </div>
                </a>
                </div>

                <div class="ag-courses_item">
                <a href="https://thomasrr29.github.io/HOMY/" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div class="ag-courses-item_title">
                        Frontend Homy sitio web arrendamiento de viviendas
                    </div>

                    <div class="ag-courses-item_date-box">
                    Start:
                    <span class="ag-courses-item_date">
                        20.11.2023
                    </span>
                    </div>
                </a>
                </div>

                <div class="ag-courses_item">
                <a href="https://github.com/Thomasrr29/Tournaments" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div class="ag-courses-item_title">
                        Backend bonificación torneo de videojuegos
                    </div>

                    <div class="ag-courses-item_date-box">
                    Start:
                    <span class="ag-courses-item_date">
                        30.05.2024
                    </span>
                    </div>
                </a>
                </div>

            </div>
        </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss">

    @import '@/assets/variables.scss'; 

    .ag-format-container {
    width: 1142px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

        .text-title {
            position: relative;
            font-family: "Avenir Next", sans-serif;
            font-weight: 900;
            font-size: 64px;
            text-transform: uppercase;
            font-style: italic;
            letter-spacing: 0.05em;
            display: inline-block;
            color: white;
        }
    }


    body {
    background-color: #000;
    }
    .ag-courses_box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;

    padding: 50px 0;
    }
    .ag-courses_item {
    -ms-flex-preferred-size: calc(33.33333% - 30px);
    flex-basis: calc(33.33333% - 30px);

    margin: 0 15px 30px;

    overflow: hidden;

    border-radius: 28px;
    }
    .ag-courses-item_link {
    display: block;
    padding: 30px 20px;
    background-color: #121212;

    overflow: hidden;

    position: relative;
    }
    .ag-courses-item_link:hover,
    .ag-courses-item_link:hover .ag-courses-item_date {
    text-decoration: none;
    color: #FFF;
    }
    .ag-courses-item_link:hover .ag-courses-item_bg {
    -webkit-transform: scale(10);
    -ms-transform: scale(10);
    transform: scale(10);
    }
    .ag-courses-item_title {
    min-height: 87px;
    margin: 0 0 25px;

    overflow: hidden;

    font-weight: bold;
    font-size: 30px;
    color: #FFF;

    z-index: 2;
    position: relative;
    }
    .ag-courses-item_date-box {
    font-size: 18px;
    color: #FFF;

    z-index: 2;
    position: relative;
    }
    .ag-courses-item_date {
    font-weight: bold;
    color: $primary-color;

    -webkit-transition: color .5s ease;
    -o-transition: color .5s ease;
    transition: color .5s ease
    }
    .ag-courses-item_bg {
    height: 128px;
    width: 128px;
    background-color: $primary-color;

    z-index: 1;
    position: absolute;
    top: -75px;
    right: -75px;

    border-radius: 50%;

    -webkit-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
    }
    .ag-courses_item:nth-child(2n) .ag-courses-item_bg {
    background-color: $secondary-color;
    }
    .ag-courses_item:nth-child(3n) .ag-courses-item_bg {
    background-color: $primary-color;
    }
    .ag-courses_item:nth-child(4n) .ag-courses-item_bg {
    background-color: $secondary-color;
    }
    .ag-courses_item:nth-child(5n) .ag-courses-item_bg {
    background-color: $primary-color;
    }
    .ag-courses_item:nth-child(6n) .ag-courses-item_bg {
    background-color: $secondary-color;
    }



    @media only screen and (max-width: 979px) {
    .ag-courses_item {
        -ms-flex-preferred-size: calc(50% - 30px);
        flex-basis: calc(50% - 30px);
    }
    .ag-courses-item_title {
        font-size: 24px;
    }
    }

    @media only screen and (max-width: 767px) {
    .ag-format-container {
        width: 96%;
    }

    }
    @media only screen and (max-width: 639px) {
    .ag-courses_item {
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
    }
    .ag-courses-item_title {
        min-height: 72px;
        line-height: 1;

        font-size: 24px;
    }
    .ag-courses-item_link {
        padding: 22px 40px;
    }
    .ag-courses-item_date-box {
        font-size: 16px;
    }
    }

</style>