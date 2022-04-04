import Collapse from 'bootstrap/js/dist/collapse'

export default {
  methods: {
    toggleNavHam () {
      this.collapse.toggle()
    },
    closeNavHam () {
      this.collapse.hide()
    }
  },
  mounted () {
    this.collapse = new Collapse(this.$refs.collapse, {
      toggle: false
    })
  }
}
