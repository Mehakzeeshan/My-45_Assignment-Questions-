// Question 40: Album
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artistName: string, albumTitle: string, num_tracks?: number) {
    let album = { artist: artistName, title: albumTitle };
    if(num_tracks) {
        album['tracks'] = num_tracks;
    }
    return album;
};
console.log(make_album("Justin Bieber", "Heart Of Stone"));
console.log(make_album("Rahat Fateh Ali Khan", "Kali Kali Zulfon"));
console.log(make_album("Abida Parveen", "Mast Qalandar", 12));

