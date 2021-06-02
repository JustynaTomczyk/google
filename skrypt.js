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
        getName: function(el) {
            let reg = new RegExp(this.googleSearch, "gi");
            const matches =  el.match(reg);
            napis  = '';

            matches.forEach(match => {
                napis = el.replace(reg, `<span class="normal">${el.match(reg)[0]}</span>`);
            })

            return napis;
        },
        goToResults: function() {
            this.$el.classList.add('results')
        },
        goToCity: function(el) {
            this.$el.classList.add('results')
            this.googleSearch = el + ' ';
            this.$refs.szukajka1.value = el;
            this.$refs.szukajka = el;
        }
    },
  })
  