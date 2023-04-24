<template>
  <div class="page-container">
    <div class="container">
      <div class="img-div">
        <img src="../assets/logo.svg" alt="" />
      </div>
      <div class="buttons-div">
        <button class="play-button make-it-border" @click="startGame">
          <span>Play vs player</span>
          <span><img src="../assets/two-smily-faces.svg" alt="" /></span>
        </button>
        <button class="make-it-border" @click="toggleShowGameRulesModal">
          Game rules
        </button>
        <BaseModal
          :showModalIsActive="showGameRules"
          @closeModal="toggleShowGameRulesModal"
        >
          <GameRulesModalContent></GameRulesModalContent>
        </BaseModal>
      </div>
    </div>
  </div>
</template>

<script>
import GameRulesModalContent from "../components/GameRulesModalContent.vue";
import BaseModal from "../components/base/BaseModal.vue";
export default {
  data() {
    return {
      showGameRules: false,
    };
  },
  methods: {
    toggleShowGameRulesModal() {
      this.showGameRules = !this.showGameRules;
    },
    startGame() {
      this.$router.push("/game");
    },
  },
  components: {
    BaseModal,
    GameRulesModalContent,
  },
};
</script>

<style scoped>
.page-container {
  /* background-color: red; */
  height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
}
.container {
  /* background-color: var(--purple-color); */
  text-align: center;
  width: 100%;
}
.container .buttons-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
}
.container .buttons-div button {
  text-transform: uppercase;
  padding: 1rem;
  margin: 10px 0;
  outline: none;
  border: none;
  width: 35rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  cursor: pointer;
  transition: 0.3s;
}
.container .buttons-div button:hover {
  transform: translateY(-2px);
}
.container .buttons-div button.play-button {
  background-color: var(--yellowish-color);
}
.container .buttons-div button span {
  display: flex;
}
@media (max-width: 767px) {
  .container .buttons-div button {
    width: 80%;
  }
  .container .buttons-div img {
    width: 4rem;
  }
}
</style>
