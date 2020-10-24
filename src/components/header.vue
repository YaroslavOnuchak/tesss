<template>
  <div>
    <div class="container-fluid row w-100">
      <b-button
        :disabled="addStatus"
        title="add text"
        v-b-modal.modal-prevent-closing
        ><b-icon-plus></b-icon-plus
      ></b-button>
      <b-button
        v-if="!editStatus"
        @click="$emit('edit-start', editStatus)"
        title="edit text"
        ><b-icon-pencil></b-icon-pencil
      ></b-button>
      <b-button
        v-else
        @click="$emit('edit-save', editStatus)"
        :class="{ 'save-edit': editStatus }"
        title="save edit"
        ><b-icon-check2-square></b-icon-check2-square
      ></b-button>
      <b-button @click="$emit('del')" title="delete last span"
        ><b-icon-x-circle></b-icon-x-circle
      ></b-button>
    </div>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="enter new text"
      @ok="handleOk"
      ><div class="modal_dody">
        <p
          class="modal_context"
          ref="modal_context"
          v-bind:contenteditable="!addStatus"
        ></p>
      </div>
    </b-modal>
  </div>
</template>


<script>
//
export default {
  name: "Header",
  props: {
    editStatus: Boolean,
    addStatus: Boolean,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      this.$emit("add-new-text", this.$refs.modal_context.innerText);
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  padding: 2rem 2rem 0;
  // width: 100%;
  justify-content: space-evenly;
}
.modal_dody {
  padding: 2%;
}
.modal_context {
  min-height: 2rem;
  width: 100%;
  background: aliceblue;
}
@keyframes move {
  0% {
    box-shadow: 0 0 5px red;
  }
  50% {
    box-shadow: 0 10 0px red;
  }
  100% {
    box-shadow: 0 0 20px red;
  }
}
.save-edit {
  position: relative;
  animation: move 2s infinite;
  transition: 0.5;
  animation-direction: alternate;
}
</style>
