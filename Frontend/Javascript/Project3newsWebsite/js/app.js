console.log("Welcome to new website");
// 1bfadaf2b82a4333a88ef99e79c88869
let newsTemplate = `<div class="card">
    <div class="card-header" id="headingOne">
        <h2 class="mb-0">
            <button
                class="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
            >
                Collapsible Group Item #1
              </button>
        </h2>
    </div>

    <div
        id="collapseOne"
        class="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
    >
        <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life
            accusamus terry richardson ad squid. 3 wolf moon officia aute, non
            cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
            laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
            on it squid single-origin coffee nulla assumenda shoreditch et.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
            nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
            lomo. Leggings occaecat craft beer farm-to-table, raw denim
            aesthetic synth nesciunt you probably haven't heard of them
            accusamus labore sustainable VHS.
            </div>
    </div>
</div>`

// Initialize parameters
api_key = "1bfadaf2b82a4333a88ef99e79c88869";
//Create a get request
const xhr = new XMLHttpRequest();

//Open the object
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let obj=JSON.parse(this.responseText);
        console.log(obj);
        let news="";
        let data=obj['articles'];
        let newsAccordion = document.getElementById('accordionExample');
        data.forEach(function(element,index){
            news+=`<div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                    <button
                        class="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        ${element.title}
                      </button>
                </h2>
            </div>
        
            <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="heading${index}"
                data-parent="#accordionExample"
            >
                <div class="card-body">
                    ${element.description}. 
                    <a href="${element.url}" target='_blank'>Read more at</a>
                    </div>
            </div>
        </div>`
        });
        newsAccordion.innerHTML=news;
    } else {
        console.log("Some error occured");
    }
}

xhr.send();