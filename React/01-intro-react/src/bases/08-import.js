import { heroes } from "../data/heroes";

/*const getHeroeById=(id)=>{
    return heroes.find((heroe)=>{
        if (heroe.id===id){
            return true;
        } else{
            return false;
        }
    });
}*/

//resumido
const getHeroeById=(id)=> heroes.find((heroe)=>heroe.id===id);

console.log(getHeroeById(2));

//con filter
const getHeroeByOwner=(owner)=> heroes.filter((heroe)=>heroe.owner===owner);

console.log(getHeroeByOwner("DC"));