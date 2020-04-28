<template>
    <div class="wrpapper">

        <div class="nav-wrapper">
            <div class="container">
                <nav class="nav">
                    <div class="nav-logo">
                        <router-link :to="{ name: 'News'}" class="">
                            <img src="../../public/img/acc_logo_header.png" alt="">
                        </router-link>
                    </div>
                    <div class="nav-links">
                        <router-link :to="{ name: 'News'}" class="link nav-link">Новости</router-link>
                        <router-link :to="{ name: 'Events'}" class="link nav-link">Эвенты</router-link>
                    </div>
                </nav>
            </div>
        </div>

        <main>
            <div class="container">
                <router-view></router-view>
            </div>

        </main>
    </div>


</template>

<script>
    export default {
        name: 'Home',
        props: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .nav-wrapper {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        margin-bottom: 100px;
        &-logo {
            font-size: 20px;
            img {
                max-width: 150px;
                height: auto;
            }
        }
        &-link {
            font-size: 18px;
            margin-left: 15px;
        }
    }
</style>
