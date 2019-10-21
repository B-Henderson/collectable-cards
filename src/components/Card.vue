<template>
  <div class="card-container">
    <div class="card">
      <div class="card__image">
        <img
          src="https://picsum.photos/300/250"
          alt="image"
          class="card__image_src"
        />
      </div>
      <h1 class="card__name">Card name</h1>
      <p class="card__description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad id officiis
        voluptatibus quidem aliquid obcaecati doloremque impedit adipisci vero
        cumque deleniti omnis eos architecto incidunt, quos sit inventore
        expedita fuga!
      </p>
      <p class="card__rarity">uncommon</p>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      cardContainer: null,
      innerCard: null,
      counter: 0,
      updateRate: 1,
      mouse: {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0
      },
      parentEl: null
    };
  },

  mounted: function() {
    this.cardContainer = this.$el;
    this.innerCard = this.cardContainer.querySelector('.card');
    this.cardContainer.onmouseenter = this.onEnter;
    this.cardContainer.onmouseleave = this.onLeave;
    this.cardContainer.onmousemove = this.onMove;
    this.setMouseOrigin(this.cardContainer);
    console.log(this.innerCard);
  },
  methods: {
    onEnter: function() {
      this.updatePerspective(event);
    },
    onLeave: function() {
      this.innerCard.style = '';
    },

    onMove: function(event) {
      if (this.timeUpdate()) {
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
      let style = `rotateX(${x * 2}deg) rotateY(${y * 2}deg)`;
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
}
.card {
  display: grid;
  transition: transform 0.5s;
  height: 450px;
  width: 350px;
  grid-template-columns: 100%;
  grid-template-rows: [image] auto [name] 1fr [description] 2fr [rarity] 1fr;
  border: 1px solid black;
  background: rgb(119, 115, 193);
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.2);
  background: linear-gradient(
    0deg,
    rgba(119, 115, 193, 1) 0%,
    rgba(9, 36, 121, 1) 12%,
    rgba(255, 255, 255, 0.87156869583771) 100%
  );
  &__image {
    grid-column: 1;
    grid-row: image;
    display: flex;
    justify-content: center;

    &_src {
      object-fit: contain;
      margin: 5px;
      clip-path: ellipse(39% 49% at 50% 50%);
    }
  }
  &__name {
    grid-column: 1;
    grid-row: name;
    text-align: center;
    color: #eee;
  }
  &__rarity {
    text-align: center;
  }
  &__description {
    margin: 5px 15px;
    padding: 5px 15px;
    background-color: #eee;
  }
}
</style>
