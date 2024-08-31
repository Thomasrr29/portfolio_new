<template>
    <div class="container">
        <section class="presentation">

            <div class="text-presentation">
                <span> ¡Hola! Soy Thomas </span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing 
                    elit. Corporis nesciunt quae cupiditate soluta magnam 
                    vitae voluptates maiores ullam nisi ducimus, aspernatur 
                    minus officia nulla exercitationem id! Minus laborum pariatur accusantium.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nisi odio temporibus consequatur 
                    nobis facilis voluptatem. Voluptatum exercitationem soluta cupiditate omnis esse commodi voluptatibus
                    dolorum iure non perferendis, eos ab!
                </p>
            </div>
        </section>
        <div class="img">
            <img src="./icons/yo.jpeg" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss">

    @import '@/assets/variables.scss';

    .container {
        width: 100%;
        display: flex;
        margin: 50px 0;

        .presentation {
            width: 80%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .text-presentation {

                width: 70%;
            }

            span {
                font-weight: 1000;
                font-size: 3em;
                color: white;
                transform: translate(-50%,-50%);
                background-image: linear-gradient($primary-color, $primary-color);
                background-size: 100% 10px;
                background-repeat: no-repeat;
                background-position: 100% 0%;
                transition: background-size .7s, background-position .5s ease-in-out;
                }

                span:hover {
                background-size: 100% 100%;
                background-position: 0% 100%;
                transition: background-position .7s, background-size .5s ease-in-out;
            }

            p{ 
                font-size: 20px;
                color: white;

            }
        }

        .img {

            width: 50%;

            img {
                width: 400px;
                height: 500px;
                border-radius: 50%;
                margin-left: 200px;
            }
           
        }
    }
</style>