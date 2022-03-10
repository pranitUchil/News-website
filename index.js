console.log("This is good");
newAccordion = document.getElementById('newAccordion')

source = "e5d227ee97c34442969b2842b32e80d8"

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/everything?q=india&from=2022-02-09&sortBy=publishedAt&apiKey=${source}`)

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        let articles = json.articles
        let newsHtml = "";
   
        articles.forEach(function(element){
     
                                let news = `<div class="card my-3 px-3 container" style="width: 58rem;"><h1 class="card-title m-3">${element.title}</h1>
                                <img src="${element.urlToImage ?element.urlToImage:"Image_not_available.png" }" class="card-img-top " alt="">
                                <div class="card-body">
                                  
                                  <p class="card-text">${element.description}</p>
                                  <a href="${element.url}" target="black" class="btn btn-primary">Read more</a>
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

