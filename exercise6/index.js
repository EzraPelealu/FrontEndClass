import ambilDataUser from "./ambilDataUser.js";
import ambilDataUserAsnyc from "./ambilDataUserAsnyc.js";
import helloWorld from "./helloworld.js";

async function messages() {
    try {
       const msg = await helloWorld();
        console.log(msg);
    }catch (error) {
        console.error('error:',error);
    }
}

messages();
ambilDataUser();
ambilDataUserAsnyc();