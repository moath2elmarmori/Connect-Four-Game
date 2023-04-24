<template>
  <Teleport to="body">
    <div
      class="dismis-modal-div"
      v-if="showModalIsActive"
      @click="dismisDivClickHanlder"
    ></div>
    <Transition name="dialog">
      <dialog
        open
        v-if="showModalIsActive"
        :class="{ 'purple-background': purpleBackgroundClass }"
      >
        <button class="close" @click="$emit('closeModal')">X</button>
        <slot></slot>
      </dialog>
    </Transition>
  </Teleport>
</template>

<script>
export default {
  props: ["showModalIsActive", "purpleBackgroundClass"],
  emits: ["closeModal"],
  methods: {
    dismisDivClickHanlder() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped>
.dismis-modal-div {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000;
}
dialog {
  position: fixed;
  top: 50%;
  width: 40rem;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 4rem 4rem 4rem;
  border-radius: 10px;
  z-index: 1100;
}
dialog.purple-background {
  background-color: var(--less-purple-color);
}
dialog button.close {
  padding: 10px;
  background: red;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  background: rgb(253, 102, 135);
  border-radius: 50%;
  width: 75px;
  height: 75px;
  font-size: 2rem;
  font-weight: bold;
  outline: none;
  border: 5px solid black;
  cursor: pointer;
}
@media (max-width: 767px) {
  dialog {
    width: 90%;
  }
}

/* transition stuff */
.dialog-enter-active {
  animation: dialog-animation 0.3s;
}
.dialog-leave-active {
  animation: dialog-animation 0.3s ease-in-out reverse;
}

@keyframes dialog-animation {
  from {
    opacity: 0;
    transform: translate(-50%, -80%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
</style>
