<template>
  <div class="card-container">
    <div class="card" v-bind:class="{ flipped: this.flipped }">
      <div class="card__front">
        <button class="card__front_flip" @click="flipCard">Flip</button>
        <div class="card__front_image">
          <img
            src="https://picsum.photos/350/375"
            alt="image"
            class="card__front_image_src"
          />
        </div>
        <div class="card__front_footer">
          <div class="card__front_footer_rarity">
            <span>rare</span>
          </div>
          <div class="card__front_footer_name">Robert the Bruce(front)</div>
        </div>
      </div>
      <div class="card__back">
        <button class="card__back_flip" @click="flipCard">Flip</button>
        <div class="card__back_info">
          <h1>Robert the Bruce</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            atque quae enim, accusamus recusandae pariatur. Sint dolore dicta
            quod veniam nemo maiores, reiciendis fuga ratione. Sequi deleniti
            maxime ex cum!
          </p>
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
      card: null,

      counter: 0,
      updateRate: 1,
      mouse: {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0
      },
      parentEl: null,
      flipped: false,
      canTilt: true
    };
  },

  mounted: function() {
    this.cardContainer = this.$el;
    this.innerCard = this.cardContainer.querySelector('.card');
    this.card = document.querySelector('.card');
    this.cardContainer.onmouseenter = this.onEnter;
    this.cardContainer.onmouseleave = this.onLeave;
    this.cardContainer.onmousemove = this.onMove;
    this.setMouseOrigin(this.cardContainer);
  },
  methods: {
    onEnter: function() {
      this.updatePerspective(event);
    },
    onLeave: function() {
      if (this.canTilt) {
        this.innerCard.style = '';
      }
    },
    flipCard: function() {
      this.flipped = !this.flipped;
      this.canTilt = false;
      let style = `rotateX(0deg) rotateY(${this.flipped ? '-180' : '0'}deg)`;
      this.flipped
        ? (this.cardContainer.style.perspective = '800px')
        : setTimeout(() => {
            this.canTilt = true;
            this.cardContainer.style.perspective = '30px';
          }, 500);

      this.card.style.transform = style;
    },

    onMove: function(event) {
      if (this.timeUpdate() && this.canTilt) {
        this.updatePerspective(event);
      }
    },
    updatePerspective: function(event) {
      this.updateMousePosition(event);
      this.updateTransform(
        (this.mouse.y / this.innerCard.offsetHeight / 2).toFixed(2),
        (this.mouse.x / this.innerCard.offsetWidth / 2).toFixed(2)
      );
    },
    timeUpdate() {
      return this.counter++ % this.updateRate === 0;
    },
    updateMousePosition(event) {
      let e = event || window.event;
      this.mouse.x = e.clientX - this._x;
      this.mouse.y = (e.clientY - this._y) * -1;
    },
    setMouseOrigin(event) {
      this._x = event.offsetLeft + Math.floor(event.offsetWidth / 2);
      this._y = event.offsetTop + Math.floor(event.offsetHeight / 2);
    },
    updateTransform(x, y) {
      if (this.flipped) return;
      let style = `rotateX(${x}deg) rotateY(${y}deg)`;
      this.innerCard.style.transform = style;
      this.innerCard.style.webkitTransform = style;
      this.innerCard.style.mozTransform = style;
      this.innerCard.style.msTransform = style;
      this.innerCard.style.oTransform = style;
    }
  }
};
</script>

<style lang="scss">
.card-container {
  perspective: 30px;
  margin: 25px;
}
.card {
  transition: transform 0.5s;
  height: 450px;
  width: 350px;

  transform-style: preserve-3d;
  border: 1px solid black;
  background: rgb(119, 115, 193);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(
    0deg,
    rgba(119, 115, 193, 1) 0%,
    rgba(9, 36, 121, 1) 12%,
    rgba(255, 255, 255, 0.87156869583771) 100%
  );

  &__front,
  &__back {
    backface-visibility: hidden;
    background-color: #eee;
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
      grid-column: 1;
      grid-row: image;
      display: flex;
      justify-content: center;

      &_src {
        object-fit: contain;

        // clip-path: ellipse(39% 49% at 50% 50%);
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
    padding: 1rem;
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
    &_info {
    }
  }
}
</style>
