const vueApp = new Vue({
    el: '#wrapper',
    data: { 
        googleSearch: '',
        cities: window.cities
    },
    computed: {
        filteredCities: function () {
            if (this.googleSearch.length) {
                const filtered = this.cities.filter((city) => city.name.toLowerCase().includes(this.googleSearch.toLowerCase()));
                return filtered.slice(0, 10);
            } else {
                return []
            }
        }
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
  