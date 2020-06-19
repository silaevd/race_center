<template>
    <section class="authorization">
        <div class="authorization-form form" :class="{ backside: isBackside }">

            <div class="login">
                <div class="input-wrap">
                    <input type="text" placeholder="e-mail">
                </div>
                <div class="input-wrap">
                    <input type="password" placeholder="password">
                </div>
                <button>Войти</button>
                <span v-on:click = "setClassBackside">регистрация</span>
            </div>

            <div class="register">
                <div class="input-wrap">
                    <input type="text" placeholder="login">
                </div>
                <div class="input-wrap">
                    <input type="email" placeholder="email">
                </div>
                <div class="input-wrap">
                    <input type="password" placeholder="password">
                </div>
                <div class="input-wrap">
                    <input type="password" placeholder="password">
                </div>
                <button>Отправить</button>
                <span v-on:click = "setClassBackside">вход</span>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        name: 'News',
        data() {
            return {
                isBackside: false,
            }
        },
        methods: {
            setClassBackside: function(){
                // When a model is changed, the view will be automatically updated.
                this.isBackside = !this.isBackside;
            }
        },
        props: {
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../assets/styles/variables.scss';
    .authorization {
        padding: 0 15px;
        &-form {
            max-width: 450px;
            min-height: 300px;
            margin: 0 auto;
            padding: 15px;
            position: relative;
            perspective: 1000px;
        }
    }
    .login, .register {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transition: 1s;
        backface-visibility: hidden;
        border: 2px solid $card_chips;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
    .register {
        transform: rotateY(180deg);
    }
    .backside {
        .login {
            transform: rotateY(180deg);
        }
        .register {
            transform: rotateY(360deg);
        }
    }

    .form {
        .input-wrap {
            width: 250px;
            height: 30px;
            position: relative;
            background: rgba(73, 80, 87, 0.20);
            margin-bottom: 10px;
            &:after {
                content: "";
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 30px 30px 0 0;
                border-color: rgba(73, 80, 87, 0.20) transparent transparent transparent;
                position: absolute;
                top: 0;
                right: -30px;
            }
        }
        input {
            font-size: 16px;
            border: none;
            outline: none;
            background: transparent;
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left:0;
            padding: 5px 10px;
        }
    }
</style>
