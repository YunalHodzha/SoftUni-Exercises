function songs(arr) {
    let numberOfSongs = arr.shift();
    let type = arr.pop();
    let songList = [];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (let line of arr) {
        let [type, name, time] = line.split("_");
        let newSong = new Song(type, name, time);
        songList.push(newSong);
    }

    for (let song of songList) {
        if (song.typeList === type) {
            console.log(song.name);
        } else if (type === "all") {
            console.log(song.name);
        }
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])
console.log("--------------");
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])
console.log("----------");
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])