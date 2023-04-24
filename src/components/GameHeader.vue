<template>
  <div class="container">
    <button @click="toggleMenu">Menu</button>
    <div class="img-div">
      <img src="../assets/logo.svg" alt="" />
    </div>
    <button @click="restartClickHandler">Restart</button>
    <BaseModal
      :showModalIsActive="isMenuActive"
      @closeModal="toggleMenu"
      :purpleBackgroundClass="true"
    >
      <MenuModalContent :closeModalProp="toggleMenu"></MenuModalContent>
    </BaseModal>
  </div>
</template>

<script>
import MenuModalContent from "./MenuModalContent.vue";
import BaseModal from "./base/BaseModal.vue";

export default {
  components: { BaseModal, MenuModalContent },
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
      this.$store.commit("toggleIsMenuModalActive");
    },
    restartClickHandler() {
      this.$store.commit("restartGame");
    },
  },
};
</script>

<style scoped>
.container {
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container button {
  outline: none;
  border: none;
  padding: 1rem 2rem;
  background-color: var(--less-purple-color);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}
.container button:hover {
  box-shadow: 0 0 5px #ccc;
}
</style>
