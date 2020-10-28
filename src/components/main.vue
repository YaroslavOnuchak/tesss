<template>
  <div class="wrap">
    <div class="container-fluid row m-0 justify-content-around text-center">
      <b-form name="setColor" @change="setColor" class="w-25">
        <b-form-group
          id="input-group-3"
          label="Color of Selected Text:"
          label-for="input-3"
        >
          <b-form-select
            ref="selectedTextColor"
            id="input-3"
            v-model="selectedTextColor"
            :options="colors"
            required
          ></b-form-select>
        </b-form-group>
      </b-form>
      <b-form name="setColorBg" @change="setColorBg" class="w-25">
        <b-form-group
          id="input-group-2"
          label="Color Bg of Selected Text :"
          label-for="input-2"
        >
          <b-form-select
            id="input-2"
            v-model="selectedTextBgColor"
            :options="colorsBg"
            required
          ></b-form-select>
        </b-form-group>
      </b-form>
      <b-form name="setFontSize" @change="setSize" class="w-25">
        <b-form-group id="input-group-1" label="Size of Selected Text :" label-for="input-1">
          <b-form-select
            id="input-1"
            v-model="selectedTextSize"
            :options="sizes"
            required
          ></b-form-select>
        </b-form-group>
      </b-form>
    </div>
    <div
      v-bind:contenteditable="editStatus"
      ref="divContent"
      class="relative-position cursor_normal none_outline"
      style="
        color: rgb(255, 255, 255);
        opacity: 1;
        border-radius: 6px;
        transform: rotate(0deg);
        border: 0px solid rgb(70, 144, 247);
        padding: 10px;
        text-align: center;
        letter-spacing: 0px;
        font-size: 32px;
        font-family: Aleo;
        font-weight: 300;
        text-decoration: none;
        box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
        text-transform: initial;
        font-style: normal;
        z-index: 2002;
        text-shadow: rgba(0, 0, 0, 0.2) 2px 2px 0px;
        line-height: 1.5em;
      "
      spellcheck="false"
    >
      <span
        style="
          background-color: rgb(248, 187, 208);
          padding-left: 3px;
          padding-right: 3px;
          border-radius: 4px;"
        >Hi</span
      >
      <br />
      <span
        style="
          background-color: rgb(248, 187, 208) ;
          padding-left: 3px;
          padding-right: 3px;
          border-radius: 4px;
        "
        >My lovely</span
      >
      <span style="color: rgb(136, 14, 79); font-size: 54px">little</span>
      <span
        style="color: rgb(186, 104, 200); background-color: rgb(248, 187, 0)"
        >Ponny</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    editStatus: Boolean,
    addNewText: String,
    del: Function,
  },
  data() {
    return {
      spans: [],
      // editTogle: false,
      selectedTextBgColor: null,
      selectedTextColor: null,
      selectedTextSize: null,

      colors: [
        { text: "Select Color", value: null, disabled: true },
        { text: "yellow", value: "yellow" },
        { text: "green", value: "green" },
        { text: "red", value: "red" },
      ],
      colorsBg: [
        { text: "Select Color", value: null, disabled: true },
        { text: "aliceblue", value: "aliceblue" },
        { text: "lavender", value: "lavender" },
        { text: "thistle", value: "thistle" },
        { text: "khaki", value: "khaki" },
        { text: "darkseagreen", value: "darkseagreen" },
      ],
      sizes: [
        { text: "Select Size", value: null, disabled: true },
        { text: "12px", value: "12px" },
        { text: "24px", value: "24px" },
        { text: "48px", value: "48px" },
        { text: "72px", value: "72px" },
      ],
    };
  },
  updated() {
    this.checkWhiteSpaces();
    // this.create();
  },
  
  mounted() {
    this.checkWhiteSpaces();
  },
  methods: {
    setCaret() {
      const lastSpan = this.$refs.divContent.lastChild;
      const range = document.createRange();
      range.selectNodeContents(lastSpan);
      range.collapse(false);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    },
    setColor() {
      let selection = document.getSelection();
      if (
        !selection.isCollapsed &&
        selection.anchorNode.parentElement.tagName === "SPAN" &&
        selection.focusNode.parentElement.tagName === "SPAN"
      ) {
        this.selectedTextColor = document.setColor.elements[0].value;
        selection.focusNode.parentElement.style.color = selection.anchorNode.parentElement.style.color = this.selectedTextColor;
        selection.removeAllRanges();
        this.selectedTextColor = null;
      }
    },
    setColorBg() {
      let selection = document.getSelection();
      if (
        !selection.isCollapsed &&
        selection.anchorNode.parentElement.tagName === "SPAN" &&
        selection.focusNode.parentElement.tagName === "SPAN"
      ) {
        this.selectedTextBgColor = document.setColorBg.elements[0].value;
        selection.focusNode.parentElement.style.backgroundColor = selection.anchorNode.parentElement.style.backgroundColor = this.selectedTextBgColor;
        selection.removeAllRanges();
        this.selectedTextBgColor = null;
      }
    },
    setSize() {
      let selection = document.getSelection();
      if (
        !selection.isCollapsed &&
        selection.anchorNode.parentElement.tagName === "SPAN" &&
        selection.focusNode.parentElement.tagName === "SPAN"
      ) {
        this.selectedTextSize = document.setFontSize.elements[0].value;
        selection.focusNode.parentElement.style.fontSize = selection.anchorNode.parentElement.style.fontSize = this.selectedTextSize;
        selection.removeAllRanges();
        this.selectedTextSize = null;
      }
    },
    checkWhiteSpaces() {
      this.spans = document.getElementsByTagName("span");
      // console.log("spans", this.spans);
      for (const child of this.spans) {
        if (child.textContent.indexOf(" ") > -1) {
          if (("object", /^\s*$/.test(`${child.textContent}`))) {
            child.remove();
          } else {
            let startHtml = `${child.outerHTML.slice(
              0,
              child.outerHTML.indexOf(">") + 1
            )}`;
            let spanWrapHtml = ` </span>${startHtml}`;
            let regWhiteSpace = /\s/gi;
            child.outerHTML = `${startHtml}${child.textContent
              .trim()
              .replace(regWhiteSpace, spanWrapHtml)} </span>`;
          }
        }
      }
    },
  },
  watch: {
    addNewText() {
      console.log("this.addNewText.text :>> ", this.addNewText);
      if (this.addNewText) {
        const lastSpan = this.$refs.divContent.lastChild;
        lastSpan.innerText += ` ${this.addNewText}`;
        this.setCaret();
        this.checkWhiteSpaces();
      }
    },
    
    editStatus() {
      if (this.editStatus) {
        this.setCaret();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrap > *[contenteditable="true"] {
  background-color: rgba(137, 160, 168, 0.134);
  border: none;
  outline: none;
  caret-color: rgb(255, 6, 6);
}
</style>
