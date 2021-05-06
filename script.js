
function init() {
    new Vue({
        el:"#app",

        data:{
            array: [],
            generi:[],
            selectedGenre: "Tutti",
        },

        methods:{
            getApi: function () {

                axios.get('data.php', {
                        params: {
                            'genre': this.selectedGenre
                        }
                    })
                    .then(r => {
                        let data = r.data;
                        console.log(data);
                        this.array = data;

                    })
                    .catch(e => {
                        console.log(e);
                    })
            }
        },

        mounted(){
            this.getApi();
        }

    });
}


document.addEventListener("DOMContentLoaded",init);
