<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
        <script src="https://cdn.jsdelivr.net/npm/vue"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js"></script>
        <title></title>
        <link rel="stylesheet" href="css/style.css">
        <script src="script.js" charset="utf-8"></script>
    </head>
    <body>
        <div id="app" class="container">
            <select v-model="selectedGenre" @change="getApi()">
                <option>Tutti</option>
                <option v-for="genere in generi">{{genere}}</option>
            </select>
            
            <div class="row">
                <div v-for="album in array" class="album">
                    <h2>{{album.title}}</h2>
                    <div class="poster">
                        <img :src="album.poster">
                    </div>
                    <h3>{{album.author}}</h3>
                    <h3>{{album.genre}}</h3>
                    <h3>({{album.year}})</h3>
                </div>
            </div>
        </div>
    </body>
</html>
