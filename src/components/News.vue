<template>
    <section class="news">
        <h1 class="section-title">Новости</h1>
        <div class="news-items">
            <div class="news-item">
                <div class="news-item-header">
                    <div class="news-item-logo">
                        <img src="../../public/img/acc_logo.jpg" alt="">
                    </div>
                    <div class="news-item-info">
                        <h2 class="news-item-title">Новая новость</h2>
                        <span class="news-item-date">23.04.2020</span>
                    </div>
                </div>
                <div class="news-item-body">
                    <p class="news-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fugit optio rem? Ab ad alias aliquam aperiam dolorem explicabo facilis incidunt ipsum iusto laboriosam laudantium minima nisi nostrum numquam officia optio perspiciatis quae quibusdam ut, vel, vero voluptatibus voluptatum! Assumenda autem consequuntur dolor, dolore dolorem doloribus eligendi esse est et excepturi explicabo fuga in ipsum laudantium magnam molestias necessitatibus obcaecati placeat quasi quis quo rem repellendus reprehenderit sequi similique sit veritatis. At enim explicabo, harum iure nihil optio quasi voluptatum. A aliquid consequatur consequuntur debitis doloremque, est excepturi harum hic ipsa libero maiores natus perferendis repudiandae sed tempore. Ab aspernatur at beatae cum labore magnam, modi neque officiis soluta vitae! At atque dicta earum illo necessitatibus nihil similique temporibus, veritatis. Architecto aspernatur culpa cupiditate, deleniti dolore eaque ex, facere iusto libero magni, maxime similique vitae. Asperiores autem consequatur, corporis ea incidunt, obcaecati pariatur porro rerum suscipit vel vero voluptate! Accusamus.</p>
                </div>
                <div class="news-item-footer"></div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'News',
        props: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../assets/styles/variables.scss';
    .news-item {
        border: 4px solid $panel_bcgd;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        &-header {
            display: flex;
            background: $panel_bcgd;
            padding: 10px;
        }
        &-logo {
            max-width: 100px;
            margin-right: 15px;
            img {
                width: 100%;
                height: auto;
            }
        }
        &-info {
            color: $text_white;
        }
        &-title {
            /*margin-bottom: 10px;*/
        }
        &-date {
            color: $text_sub;
            font-size: 14px;
            font-weight: 500;
        }
        &-body {
            padding: 10px;
        }
        &-text {
            text-align: justify;
        }
        &-footer {
            min-height: 50px;
            background-color: rgba(0,0,0,0.05);
        }
    }
</style>
