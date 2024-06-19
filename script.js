let form = document.getElementById("form");
let input = document.getElementById("input");
let resultBox = document.getElementById("resultBox");
let more = document.getElementById("showMoreBtn");

let keyword = "";
let page = 1;
let accesskey = '01fwtK_coVL-Ee7X17EtukuG80n4aMW0tR2VLFSwNek';
async function searchImages() {
    keyword = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    if(page == 1){
        resultBox.innerHTML = "";
    }
    const results = data.results;
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const link = document.createElement("a");
        link.href = result.links.html;
        link.target = "_blank";
        link.appendChild(image);
        resultBox.appendChild(link);
    })
    showMoreBtn.style.display = "block";
}
form.addEventListener('submit',(e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})
showMoreBtn.addEventListener("click",()=> {
    page++;
    searchImages();
})