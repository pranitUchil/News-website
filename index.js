console.log("This is good");
newAccordion = document.getElementById('newAccordion')

source = "e5d227ee97c34442969b2842b32e80d8"

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/everything?q=tesla&from=2022-02-09&sortBy=publishedAt&apiKey=${source}`)

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        let articles = json.articles
        let newsHtml = "";
   
        articles.forEach(function(element){
     
                                let news = `<div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                            aria-expanded="true" aria-controls="collapseOne">
                            ${element["title"]}
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            ${element["description"]} <a href="${element.url}" target="black" >Read more</a>
                        </div>
                        
                    </div>
                    </div>`;
                    newsHtml += news;
          });
          
        newAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send();

