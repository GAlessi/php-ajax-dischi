
function init() {
    new Vue({
        el:"#app",

        data:{
            array: [],
        },

        mounted(){
            axios.get('data.php')
                .then(r => {
                    let data = r.data;
                    console.log(data);
                    this.array = data;
                })
                .catch(e => {
                    console.log(e);
                })
        }

    });
}


document.addEventListener("DOMContentLoaded",init);
