
function init() {
    new Vue({
        el:"#app",

        data:{
            array: [],
            generi:[],
            selectedGenre: "Tutti",
        },

        methods:{

            //richiama l'API
            getApi: function (flag) {

                axios.get('data.php', {
                        params: {
                            'genre': this.selectedGenre
                        }
                    })
                    .then(r => {
                        let data = r.data;
                        this.array = data;

                        //verifica se si tratta del primo caricamento e riempie l'array dei generi
                        if (!this.generi) {
                            for (let i = 0; i < this.array.length; i++) {
                                const album = this.array[i];

                                if (!this.generi.includes(album.genre)) {
                                    this.generi.push(album.genre)
                                }
                            }
                        }
                    })
                    .catch(e => {
                        console.log(e);
                    })
            }
        },

        //richiama la funzione per caricare l'API passando la flag "primo caricamento"
        mounted(){
            this.getApi();
        }

    });
}


document.addEventListener("DOMContentLoaded",init);
