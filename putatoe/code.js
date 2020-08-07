// FETCH API
let url = "http://node.uttarakhandtraveller.com/places/1";

const getData = () => {
    
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        document.getElementById('place-image').src = data.place.image;
        document.getElementById('description').innerText = data.place.detail;
        document.getElementById('place').textContent = data.place.name;
        document.getElementById('location-link').href = data.place.place_url;
    })
}

getData();