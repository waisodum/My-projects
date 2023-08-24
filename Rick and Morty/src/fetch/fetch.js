let base_url="https://rickandmortyapi.com/api/character?page=1";
var chars=[]

async function getchars(base_url) {
    while (base_url!== null) {
        await fetch(base_url) 
        .then((y)=>{
            return y.json();
        })
        .then((x)=>{
chars.push(...x.results) ;
            base_url=x.info.next
        })
    }
}
async function fetchdata() {
await getchars(base_url);
console.log(chars);  
}
fetchdata(); 
export default chars;