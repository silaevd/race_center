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
                        <input type="checkbox" id='theme-switch' class='theme-switch' v-model="darkMode"/>
                        <label for='theme-switch' class="label-theme-switch">
                            <span v-if="darkMode === true">
                                <img alt="logo"
                                     src="https://lh3.googleusercontent.com/1K4S9qgX3XipV8e9hzxs7QoF1spHm4vddNR0q2EqPqUN0FPCOc0rLLSbsUZjSwSfNSI=w115" width="50">
                            </span>
                                <span v-else>
                                <img alt="logo"
                                     src="https://lh3.ggpht.com/zKxCMk0WEukPPgE9kBDhoDebAWxniEZey4XuGeQQHh-G8aW-JflSP3vYz2S8bMh9jo-C=w300" width="50">
                            </span>
                        </label>
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
        data() {
            return {
                darkMode: false,
            }
        },
        props: {
        },
        mounted() {
            let bodyElement = document.body;
            bodyElement.classList.add("app-background");
            let htmlElement = document.documentElement;
            let theme = localStorage.getItem("theme");
            if (theme === 'dark') {
                htmlElement.setAttribute('theme', 'dark');
                this.darkMode = true
            } else {
                htmlElement.setAttribute('theme', 'light');
                this.darkMode = false
            }
        },
        watch: {
            darkMode: function () {
                let htmlElement = document.documentElement;
                if (this.darkMode) {
                    localStorage.setItem("theme", 'dark');
                    htmlElement.setAttribute('theme', 'dark');
                } else {
                    localStorage.setItem("theme", 'light');
                    htmlElement.setAttribute('theme', 'light');
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../assets/styles/variables.scss';
    .nav-wrapper {
        background: var(--card-background);
        border-bottom: 3px solid var(--border-color);
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        margin-bottom: 100px;
    }
    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
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
            color: var(--text-color);
            font-weight: 500;
            font-size: 18px;
            margin-left: 15px;
        }
    }
    .profile-link {
        &-img {
            width: 50px;
            height: 50px;
            border: 3px solid var(--border-color);
            border-radius: 50%;
            margin-left: 30px;
        }
    }
    .label-theme-switch {
        margin-left: 30px;
        &:hover {
            cursor: pointer;
        }
    }
    .theme-switch {
        display: none;
    }
</style>
