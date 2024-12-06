fetch('data.json')
.then(response => {
    if(!response.ok) {
        throw new Error('Failed to load data.json');
    }
    return response.json();
})
.then(data => {
    console.log('Fetched data:', data);  // This will log the data to see its structure.
    if (data && data[0]) {
        document.getElementById('brawl_stars').innerHTML = `Imsak: ${data[0].Imsak}`;
    } else {
        console.log('Data is missing or the structure is incorrect');
    }
})
.catch(error => {
    console.error("Failed to fetch data", error);
});
