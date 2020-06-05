<template>
    <div class="wrpapper">

        <div class="nav-wrapper">
            <div class="container">
                <nav class="nav">
                    <div class="nav-logo">
                        <router-link :to="{ name: 'News'}" class="">
<!--                            <span>LOGO</span>-->
                            <img src="https://www.chiptuningede.nl/wp-content/uploads/2019/11/Edit.png" alt="">
                        </router-link>
                    </div>
                    <div class="nav-links">
                        <router-link :to="{ name: 'News'}" class="link nav-link">Новости</router-link>
                        <router-link :to="{ name: 'Events'}" class="link nav-link">Эвенты</router-link>
                        <router-link :to="{ name: 'Login'}" class="profile-link">
                            <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/9d/9df1cc05f8f7e3e67ab1f1f649f96dbdcd0f1e71_full.jpg" alt="" class="profile-link-img">
                        </router-link>
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
    @import '../assets/styles/variables.scss';
    .nav-wrapper {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        margin-bottom: 100px;
        &-logo {
            font-size: 20px;
            img {
                max-width: 100px;
                height: auto;
            }
        }
        &-links {
            display: flex;
            align-items: center;
        }
        &-link {
            color: $text;
            font-weight: 500;
            font-size: 18px;
            margin-left: 15px;
        }
    }
    .profile-link {
        &-img {
            width: 50px;
            height: 50px;
            border: 3px solid $panel_bcgd;
            border-radius: 50%;
            margin-left: 30px;
        }
    }
</style>
