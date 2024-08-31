<template>
        <div class="app">
            <div class="tag-list">
                <div class="loop-slider">
                <div class="inner">
                    <div class="tag">   <img src="./icons/nest js.svg" alt=""> <p>Nest JS</p></div>
                    <div class="tag">   <img src="./icons/typescript.png" alt=""> <p>Typescript</p></div>
                    <div class="tag">   <img src="./icons/js.png" alt=""> <p>Javascript</p></div>
                    <div class="tag">   <img src="./icons/node.png" alt=""> <p>Node JS</p></div>
                    <div class="tag">   <img src="./icons/mysql.png" alt=""> <p>MySQL</p></div>
                    <div class="tag">   <img src="./icons/postgre.png" alt=""> <p>Postgres</p></div>
                    <div class="tag">   <img src="./icons/react.png" alt=""> <p> React JS </p></div>
                    <div class="tag">   <img src="./icons/vue.png" alt=""> <p>Vue JS</p></div>
                    <div class="tag">   <img src="./icons/social.png" alt=""> <p>CSS</p></div>
                    <div class="tag">   <img src="./icons/elementor.png" alt=""> <p>Elementor</p> </div>
                    <div class="tag">   <img src="./icons/wordpress.png" alt=""> <p> Wordpress</p> </div>
                </div>
                </div>
                <div class="loop-slider">
                <div class="inner">
                    <div class="tag">   <img src="./icons/postgre.png" alt=""> <p>Postgres</p></div>
                    <div class="tag">   <img src="./icons/react.png" alt=""> <p> React JS </p></div>
                    <div class="tag">   <img src="./icons/vue.png" alt=""> <p>Vue JS</p></div>
                    <div class="tag">   <img src="./icons/social.png" alt=""> <p>CSS</p></div>
                    <div class="tag">   <img src="./icons/elementor.png" alt=""> <p>Elementor</p> </div>
                    <div class="tag">   <img src="./icons/wordpress.png" alt=""> <p> Wordpress</p> </div>
                    <div class="tag">   <img src="./icons/nest js.svg" alt=""> <p>Nest JS</p></div>
                    <div class="tag">   <img src="./icons/typescript.png" alt=""> <p>Typescript</p></div>
                    <div class="tag">   <img src="./icons/js.png" alt=""> <p>Javascript</p></div>
                    <div class="tag">   <img src="./icons/node.png" alt=""> <p>Node JS</p></div>
                    <div class="tag">   <img src="./icons/mysql.png" alt=""> <p>MySQL</p></div> 
                </div>
                </div>
                <div class="loop-slider">
                <div class="inner">
                    <div class="tag">   <img src="./icons/elementor.png" alt=""> <p>Elementor</p> </div>
                    <div class="tag">   <img src="./icons/wordpress.png" alt=""> <p> Wordpress</p> </div>
                    <div class="tag">   <img src="./icons/nest js.svg" alt=""> <p>Nest JS</p></div>
                    <div class="tag">   <img src="./icons/typescript.png" alt=""> <p>Typescript</p></div>
                    <div class="tag">   <img src="./icons/node.png" alt=""> <p>Node JS</p></div>
                    <div class="tag">   <img src="./icons/mysql.png" alt=""> <p>MySQL</p></div> 
                    <div class="tag">   <img src="./icons/postgre.png" alt=""> <p>Postgres</p></div>
                    <div class="tag">   <img src="./icons/react.png" alt=""> <p> React JS </p></div>
                    <div class="tag">   <img src="./icons/vue.png" alt=""> <p>Vue JS</p></div>
                    <div class="tag">   <img src="./icons/social.png" alt=""> <p>CSS</p></div>
                    <div class="tag">   <img src="./icons/js.png" alt=""> <p>Javascript</p></div>
                </div>
                </div>
                <div class="fade"></div>
            </div>
        </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss">
    @import '@/assets/variables.scss';

    .app {
        min-width: 100vw;
        min-height: 70vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: $secondary-color;
    }

    header { 
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    text-align: center;
    
    h1 {
        font-weight: 600;
        font-size: 2rem;
        margin-bottom: 0.5rem;
        
        @media (min-width: 768px) {
        font-size: 3rem;
        }
    }
    
    p {
        color: #94a3b8;
        margin-bottom: 0.5rem;
    }
    
    a {
        color: #7393c1;
    }
    }

    .tag-list {
        width: 60%;
        display: flex;
        flex-shrink: 0;
        flex-direction: column;
        gap: 1rem 0;
        position: relative;
        padding: 1.5rem 0;
        border: 1px solid;
        border-image: linear-gradient(to top, transparent, rgb(255, 255, 255), transparent) 10;
        overflow: hidden;
    }

    .loop-slider {
    .inner {
        display: flex;
        width: fit-content;
        animation-name: loop;
        animation-timing-function: ease-in;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-duration: 10s;
    }
    }

    .tag {
        display: flex;
        width: 14rem;
        align-items: center;
        justify-content: space-around;
        gap: 0 0.2rem;
        color: #e2e8f0;
        font-size: 0.9rem;
        background-color: #334155;
        border-radius: 0.4rem;
        padding: 0.7rem 1rem;
        margin-right: 1rem;
        box-shadow: 
            0 0.1rem 0.2rem rgb(0 0 0 / 20%),
            0 0.1rem 0.5rem rgb(0 0 0 / 30%),
            0 0.2rem 1.5rem rgb(0 0 0 / 40%);

    p {
        font-weight: 1000;
        font-size: 20px;
    }
    
    img {
        width: 70px;
        color: 70px;
    }
    }

    .fade {
        pointer-events: none;
        background: linear-gradient(90deg, #1e293b, transparent 30%, transparent 70%, #1e293b);
        position: absolute;
        inset: 0;
    }

    @keyframes loop {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-8%);
    }
    }
</style>