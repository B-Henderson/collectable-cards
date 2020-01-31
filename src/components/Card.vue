<template>
    <div class="card-container">
        <header>
            <router-link to="/" class="navigation__back">
                Back
            </router-link>
            <h1 class="heading1">{{ cardContent.title }}</h1>
        </header>
        <div class="card" v-bind:class="{ flipped: this.flipped }">
            <div class="card__front">
                <button class="card__front_flip" @click="flipCard">Flip</button>
                <div class="card__front_image" v-if="cardContent.id">
                    <img
                        :src="getImgUrl(cardContent.imageFront)"
                        alt="card.title"
                        class="card__front_image_src"
                    />
                    <!-- <img
                        v-if="card"
                        :src="'../assets/' + card.imageFront"
                        alt="image"
                        class="card__front_image_src"
                    /> -->
                </div>
                <!-- <div class="card__front_footer">
                    <div class="card__front_footer_rarity">
                        <span>rare</span>
                    </div>
                    <div class="card__front_footer_name">
                        Robert the Bruce(front)
                    </div>
                </div> -->
            </div>
            <div class="card__back">
                <button class="card__back_flip" @click="flipCard">Flip</button>
                <div class="card__back_image" v-if="cardContent.id">
                    <img
                        :src="getImgUrl(cardContent.imageBack)"
                        alt="card.title"
                        class="card__back_image_src"
                    />
                    <!-- <h1>Robert the Bruce</h1> -->
                    <!-- <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Culpa atque quae enim, accusamus recusandae
                        pariatur. Sint dolore dicta quod veniam nemo maiores,
                        reiciendis fuga ratione. Sequi deleniti maxime ex cum!
                    </p> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            cardContainer: null,
            innerCard: null,
            // card: null,

            counter: 0,
            updateRate: 1,
            mouse: {
                _x: 0,
                _y: 0,
                x: 0,
                y: 0,
            },
            parentEl: null,
            flipped: false,
            canTilt: true,
            cardContent: {},
        }
    },
    props: {
        cardId: {
            type: String,
            required: true,
        },
    },
    mounted: function() {
        this.cardContent = this.$store.state.base.cards.find(
            card => card.id === parseInt(this.cardId)
        )

        this.cardContainer = document.querySelector('.card')
        this.innerCard = document.querySelector('.card')
        this.card = document.querySelector('.card')
        this.cardContainer.onmouseenter = this.onEnter
        this.cardContainer.onmouseleave = this.onLeave
        this.cardContainer.onmousemove = this.onMove
        this.setMouseOrigin(this.cardContainer)
    },
    methods: {
        getImgUrl(cardImage) {
            const images = require.context('../assets/', false, /\.png$/)
            return images(`./${cardImage}`)
        },
        onEnter: function() {
            // this.updatePerspective(event)
        },
        onLeave: function() {
            if (this.canTilt) {
                this.innerCard.style = ''
            }
        },
        flipCard: function() {
            this.flipped = !this.flipped
            this.canTilt = false
            let style = `rotateX(0deg) rotateY(${
                this.flipped ? '-180' : '0'
            }deg)`
            this.flipped
                ? (this.cardContainer.style.perspective = '600px')
                : setTimeout(() => {
                      this.canTilt = true
                      this.cardContainer.style.perspective = '600px'
                  }, 500)

            this.card.style.transform = style
        },

        onMove: function(event) {
            // if (this.timeUpdate() && this.canTilt) {
            //     this.updatePerspective(event)
            // }
        },
        updatePerspective: function(event) {
            this.updateMousePosition(event)
            this.updateTransform(
                (this.mouse.y / this.innerCard.offsetHeight / 2).toFixed(2),
                (this.mouse.x / this.innerCard.offsetWidth / 2).toFixed(2)
            )
        },
        timeUpdate() {
            return this.counter++ % this.updateRate === 0
        },
        updateMousePosition(event) {
            let e = event || window.event
            this.mouse.x = e.clientX - this._x
            this.mouse.y = (e.clientY - this._y) * -1
        },
        setMouseOrigin(event) {
            this._x = event.offsetLeft + Math.floor(event.offsetWidth / 2)
            this._y = event.offsetTop + Math.floor(event.offsetHeight / 2)
        },
        updateTransform(x, y) {
            if (this.flipped) return
            let style = `rotateX(${x}deg) rotateY(${y}deg)`
            this.innerCard.style.transform = style
            this.innerCard.style.webkitTransform = style
            this.innerCard.style.mozTransform = style
            this.innerCard.style.msTransform = style
            this.innerCard.style.oTransform = style
        },
    },
}
</script>

<style lang="scss">
.card-container {
    perspective: 800px;
    margin: 25px;
}
.card {
    transition: transform 0.5s;
    height: 600px;
    width: 365px;
    transform-style: preserve-3d;

    &__front,
    &__back {
        backface-visibility: hidden;
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: [image] auto [footer] 1fr;
        z-index: 2;
        position: absolute;

        &_flip {
            position: absolute;
            right: 0;
            top: 0;
            margin: 1rem;
            padding: 1rem;
            z-index: 10;
        }

        &_image {
            max-width: 365px;
            height: auto;
            grid-column: 1;
            grid-row: image;
            display: flex;
            justify-content: center;
            max-height: 600px;
            img {
                box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
                max-width: 365px;
            }
        }

        &_footer {
            grid-row: footer;
            grid-column: 1;
            display: grid;
            background-color: #eee;
            grid-template-rows: 100%;
            grid-template-columns: [rarity] 1fr [name] 3fr;
            &_name,
            &_rarity {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            &_rarity {
                margin: 1rem;
                height: 60%;
                background-color: lightblue;
            }
        }
    }
    &__back {
        transform: rotateY(180deg);
        display: flex;
        // align-items: center;
        justify-content: center;
        h1 {
            margin: 3rem 0 3rem 0;
            font-size: 3rem;
        }
        p {
            font-size: 1.2rem;
            line-height: 1.3rem;
        }
    }
}
</style>
