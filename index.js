const audioPlayer = document.getElementById('audioPlayer');
const source = document.getElementById('song');

document.getElementById("song1").addEventListener('click', (e) => {
    e.preventDefault();
    source.src = 'Skyfall - Adele (8D Audio).mp3';
    audioPlayer.load();
    audioPlayer.play();
});

document.getElementById("song2").addEventListener('click', (e) => {
    e.preventDefault();
    source.src = 'morgan-wallen-last-night.mp3';
    audioPlayer.load();
    audioPlayer.play();
});

document.getElementById("song3").addEventListener('click', (e) => {
    e.preventDefault();
    source.src = 'Finding Her - InstaSong.In.mp3';
    audioPlayer.load();
    audioPlayer.play();
});

document.getElementById("song4").addEventListener('click', (e) => {
    e.preventDefault();
    source.src = 'Maand - PagalWorld.mp3';
    audioPlayer.load();
    audioPlayer.play();
});

document.getElementById("song5").addEventListener('click', (e) => {
    e.preventDefault();
    source.src = 'Main Ishq Likhu Tujhe Ho Jaye - PagalWorld.mp3';
    audioPlayer.load();
    audioPlayer.play();
});

document.getElementById("song6").addEventListener('click', (e) => {
    e.preventDefault();
    source.src = 'Ahista Ahista - PagalWorld.mp3';
    audioPlayer.load();
    audioPlayer.play();
});

document.getElementById("song7").addEventListener('click', (e) => {
    e.preventDefault();
    source.src = 'Ek Jaisa Haal Tera Mera - PagalWorld.mp3';
    audioPlayer.load();
    audioPlayer.play();
});

document.getElementById("song8").addEventListener('click', (e) => {
    e.preventDefault();
    source.src = 'Jhol - PagalWorld.mp3';
    audioPlayer.load();
    audioPlayer.play();
});

document.getElementById("song9").addEventListener('click', (e) => {
    e.preventDefault();
    source.src = "Tu Hai To Mai Hu - PagalWorld.mp3";
    audioPlayer.load();
    audioPlayer.play();
});

document.getElementById("song10").addEventListener('click', (e) => {
    e.preventDefault();
    source.src = "Tum - PagalWorld.mp3";
    audioPlayer.load();
    audioPlayer.play();
});