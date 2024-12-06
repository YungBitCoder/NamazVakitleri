fetch('data.json')
.then(response => {
    if(!response.ok) {
        throw new Error('Failed to load data.json');
    }
    return response.json();
})
.then(data => {
    console.log('Fetched data:', data);
    document.getElementById('brawl_stars').innerHTML = `Imsak: ${data[0].Imsak}`;
    //document.getElementById('ogle').textContent = `Ogle: ${data[0].Ogle}`;
    //document.getElementById('yatsi').textContent = `Yatsi: ${data[0].Yatsi}`;
})
.catch(error => {
    console.error("Failed to fetch data", error);
});
