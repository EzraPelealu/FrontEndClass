export let fullName = "John Doe";

let numbers = [1, 2, 3, 4, 5];

let john = {
    fullName: "John Doe",
    age: 33,
    address: "Manado",
};

let hello = () => {
    console.log("Hello Module");
};

export { fullName, numbers, john };
export default hello
