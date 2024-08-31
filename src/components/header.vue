<template>
    <div class="header">
        <a href="" class="start-img">
            <img src="./icons/458_icons-02.png" alt="">
        </a>
        <div class="sections">
            <a href="https://github.com/Thomasrr29"> <img src="./icons/github.png" alt=""></a>
            <a href="https://www.linkedin.com/in/thomas-restrepo-148a2a28b/"> <img src="https://cdn.iconfinder.com/stored_data/1861326/128/png?token=1724973169-12bTXIf7tuUet9awpuakbZ3PRIBzNxfL4M8iLpz2fGs%3D" alt=""></a>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import '@/assets/variables.scss';

    .header {
        display: flex;
        align-items: center;
        width: 100%;
        height: 80px;
        background-color: $primary-color;

        .start-img {
            width: 20%;
            display: flex;
            justify-content: center;
            img {
                height: 80px;
                
            } 
        }

        .sections {
            display: flex;
            width: 80%;
            margin-right: 30px;
            justify-content: flex-end;
            gap: 10px;
            a {
                color: white;
                text-decoration: none;
                font-weight: 1000;

                img {
                    width: 40px;
                    height: 40px;
                }
            }
            

        }

    }
</style>

<script setup lang="ts">


</script>