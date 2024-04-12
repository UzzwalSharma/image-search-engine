const access_key="9lR3w1H9gurziMXBUIp4aso9nBK12PlxrKdtEfIx960";
const input=document.getElementById("input");
const btn=document.getElementById("btn")
let pg=1;


async function image() {
    const url = `https://api.unsplash.com/search/photos?page=${pg}&query=${input.value}&client_id=${access_key}`;

    const response=await fetch(url);
    const data =await response.json()
    const imageResults = document.querySelector('.imageresults');

        // Clear previous search results
        imageResults.innerHTML = '';

        // Iterate through the images and display them
        data.results.forEach(result => {
            const imgElement = document.createElement('img');
            imgElement.src = result.urls.small; // You can use different sizes as per your requirement
            imgElement.alt = result.alt_description;
            imageResults.appendChild(imgElement);
console.log(data)

        })
}

btn.addEventListener("click",()=>{
    image()

})