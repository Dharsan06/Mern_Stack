const firstNames = ["Dharsan","Ramakrishna","Naveen","Divya","Arun","Deepa","Karthik","Priya","Suresh","Anitha","Ravi","Kavitha","Manoj","Shanthi","Vikram"];
const Randomnumber = (max) => Math.floor(Math.random() * max);
const getRandomName = () => firstNames[Randomnumber(firstNames.length)];
console.log(getRandomName());

const setRandomName = () => {
    const randomNameElement = document.getElementById('random-name');
    if (randomNameElement) {
        randomNameElement.innerText = getRandomName();
    }
}

document.getElementById("generate").addEventListener("click", setRandomName);
setRandomName();