<template>
  <div id="app" class="container">
    <Header
      @edit-start="edit(editTogle)"
      @edit-save="edit(editTogle)"
      @add-new-text="create($event)"
      v-bind:editStatus="editTogle"
      v-bind:addStatus="add.addStatus"
      @del="del"
    />
    <Main
      v-bind:editStatus="editTogle"
      v-bind:addNewText="add.text"
      v-bind:del="del"
    />
    <div class="wrap-json-info">
      <b-button @click="getJSON" id="btn-json-info" title="get JSON "
        >get JSON <b-icon-info-square></b-icon-info-square
      ></b-button>
      <p v-if="spanJSON.length">{{ JSON.stringify(this.spanJSON) }}</p>
    </div>
  </div>
</template>

<script>
import Main from "./components/main";
import Header from "./components/header";

export default {
  name: "App",
  data() {
    return {
      editTogle: false,
      add: { addStatus: false, text: '' },
      spanJSON: [],
    };
  },
  components: {
    Main,
    Header,
  },
  methods: {
    create(text) {
      if (!this.add.addStatus) {
        //
      } else {
        // this.editTogle = !this.editTogle;
        this.add.addStatus = !this.add.addStatus;
      }
      this.add.text = text;
    },
    del() {
      let spanAr = document.getElementsByTagName("span");
      spanAr[spanAr.length - 1].remove();
    },
    edit(editTogle) {
      this.editTogle = !editTogle;
      if (this.add.addStatus) {
        this.add.addStatus = false;
      } else {
        this.add.addStatus = true;
      }
    },
    getJSON() {
      this.spanJSON = [];
      let spanAr = document.getElementsByTagName("span");
      for (let i = 0; i < spanAr.length; i++) {
        let newObj = {
          title: spanAr[i].innerText,
          color:
            spanAr[i].style.color ||
            spanAr[i].parentElement.style.color ||
            null,
          fontSize:
            spanAr[i].style.fontSize ||
            spanAr[i].parentElement.style.fontSize ||
            null,
          backgroundColor:
            spanAr[i].style.backgroundColor ||
            spanAr[i].parentElement.style.backgroundColor ||
            null,
        };
        if (this.spanJSON.length === 0) {
          this.spanJSON.push(newObj);
        } else {
          if (this.spanJSON[this.spanJSON.length - 1].color === newObj.color) {
            this.spanJSON[this.spanJSON.length - 1].title += ` ${newObj.title}`;
            delete newObj.color;
          }
          if (
            this.spanJSON[this.spanJSON.length - 1].fontSize === newObj.fontSize
          ) {
            if (
              this.spanJSON[this.spanJSON.length - 1].title.indexOf(
                newObj.title
              ) === -1
            ) {
              this.spanJSON[
                this.spanJSON.length - 1
              ].title += ` ${newObj.title}`;
              delete newObj.fontSize;
            } else {
              delete newObj.fontSize;
            }
          }
          if (
            this.spanJSON[this.spanJSON.length - 1].backgroundColor ===
            newObj.backgroundColor
          ) {
            if (
              this.spanJSON[this.spanJSON.length - 1].title.indexOf(
                newObj.title
              ) === -1
            ) {
              this.spanJSON[
                this.spanJSON.length - 1
              ].title += ` ${newObj.title}`;
              delete newObj.backgroundColor;
            } else {
              delete newObj.backgroundColor;
            }
          }
          if (Object.getOwnPropertyNames(newObj).length > 2) {
            this.spanJSON.push(newObj);
          }
        }
      }
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.wrap-json-info {
  position: relative;
}
#btn-json-info {
  // position: absolute;
  margin-right: 0.5rem;
  float: left;
  opacity: 0.5;
  transition: 0.2s;
  &:hover {
    opacity: 1;
  }
}
</style>
