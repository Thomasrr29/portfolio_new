<template>
    <div class="container">

        <div class="icons">
            <a href="https://github.com/Thomasrr29">
                <img src="https://cdn.iconfinder.com/stored_data/1861322/128/png?token=1724973142-I8naoFzIFBBnDzw3jn8wEt6BqQ3m8aNcxbyyFPB3NRw%3D" alt="">
            </a>
            <a href="https://www.linkedin.com/in/thomas-restrepo-148a2a28b/">
                <img src="https://cdn.iconfinder.com/stored_data/1861326/128/png?token=1724973169-12bTXIf7tuUet9awpuakbZ3PRIBzNxfL4M8iLpz2fGs%3D" alt="">
            </a>
        </div>
    </div>

</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

    @import '@/assets/variables.scss';

    .container {
        width: 100%;
        display: flex;
        justify-content: start;
        height: 60px;
        background-color: $primary-color;

        .icons{ 

                display: flex;
                width: 50%;
                justify-content: flex-start;
                align-items: center;
                margin-left: 20px;
                gap: 10px;

                a {
                
                    img {
                        width: 30px;
                        border-radius: 20%;
                    }
                }
        }

        .sections{

            width: 50%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-right: 40px;
            gap: 5px;

            :hover {
                color: $secondary-color;
            }
            
        }
      
    }
</style>