function gramophone(band,album,song){
    let result =   Number((album.length * band.length) * song.length  ) / 2;
    let rotations = result / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);


}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');