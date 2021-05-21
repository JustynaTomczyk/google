const vueApp = new Vue({
    el: '#wrapper',
    data: { 
        googleSearch: ''
    },
    methods: {
        onChange: function() {
            if (this.googleSearch.length > 0) {
                this.$refs.szukajka1.focus()
            } else {
                this.$refs.szukajka.focus()
            }
        },
    },
  })
  