<template>
    <section class="event-info">
        <div  class="event">
            <div class="event-header">
                <div class="event-track">
                    <span class="event-track-name">Silverstone</span>
                    <div class="event-track-duration">
                        <span class="material-icons">av_timer</span>
                        <span>1h</span>
                    </div>
                </div>
                <div class="event-date">
                    <span class="material-icons">today</span>
                    <span>25.05.2020</span>
                </div>
                <div class="event-time">
                    <span class="material-icons">timer</span>
                    <span>21:00</span>
                </div>
            </div>
            <div class="event-body">
                <p class="game-time">
                    <span>Игровое время:</span>
                    <span>15:00</span>
                </p>
                <p class="game-qualy">
                    <span>Квалификация:</span>
                    <span>20 мин</span>
                </p>
                <p class="game-fuel">
                    <span>Дозапрвка:</span>
                    <span>разрешена</span>
                </p>
                <p class="game-pit">
                    <span>Обязательный пит-стоп:</span>
                    <span>да</span>
                </p>
                <p class="game-tyres">
                    <span>Смена шин:</span>
                    <span>обязательна</span>
                </p>
            </div>
            <div class="event-footer">
                <span class="event-name">First Cup</span>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Event',
        props: {
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles/variables.scss';

    .event-info {
        padding: 15px;
    }
    .event {
        /*width: 300px;*/
        /*height: 400px;*/
        margin-bottom: 30px;
        border: 4px solid $panel_bcgd;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /*background: url("https://p16.muscdn.com/img/tos-maliva-p-0068/dbf44108d79642e9879899d09fa5723a~c5_300x400.jpeg");*/
        &:hover {
            text-decoration: none;
        }
        &-header {
            margin-bottom: 30px;
        }

        &-track {
            color: $text_white;
            font-size: 25px;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
            padding: 7px;
            background: black;
            display: flex;
            width: 100%;
            text-decoration: none;
            display: flex;
            justify-content: space-between;
            &-name {
                word-break: break-all;
            }
            &-duration {
                display: flex;
                align-items: center;
                .material-icons {
                    font-size: 26px;
                    margin-right: 3px;
                }
            }
        }
        &-date {
            color: $text_white;
            font-size: 20px;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
            padding: 5px;
            background: darkred;
            /*display: inline-block;*/
            position: relative;
            width: 50%;
            display: flex;
            align-items: center;
            &:after {
                content: "";
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 34px 34px 0 0;
                border-color: #8b0000 transparent transparent transparent;
                position: absolute;
                top: 0;
                right: -34px;
            }
            .material-icons {
                font-size: 22px;
                margin-right: 5px;
            }
        }
        &-time {
            color: $text_white;
            font-size: 20px;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
            padding: 5px;
            background: $panel_bcgd;
            /*display: inline-block;*/
            position: relative;
            width: 25%;
            display: flex;
            /*justify-content: space-between;*/
            align-items: center;
            &:after {
                content: "";
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 34px 34px 0 0;
                border-color: $panel_bcgd transparent transparent transparent;
                position: absolute;
                top: 0;
                right: -34px;
            }
            .material-icons {
                font-size: 22px;
                margin-right: 5px;
            }
        }
        &-body {
            padding: 7px;
            p {
                display: inline-block;
            }
        }
        &-footer {
            height: 60px;
            border-top: 3px solid $panel_bcgd;
            display: flex;
            padding: 5px;
            justify-content: center;
            align-items: center;
            background: white;
            span {
                font-family: 'Play', sans-serif;
                color: $text;
                font-size: 20px;
                font-weight: 700;
                letter-spacing: 3px;
                text-transform: uppercase;
                text-shadow: 0px 0px 0px #FFFFFF, 1px 0px 0px #FFFFFF, -1px 0px 0px #FFFFFF, 0px 1px 0px #FFFFFF, 0px -1px 0px #FFFFFF;
            }
        }
    }
</style>
