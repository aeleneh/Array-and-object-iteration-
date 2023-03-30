var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (var items of dairy) {
        console.log(items);
    }
}
logDairy();


const animal = {canJump: true};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
function birdCan() {
    for (var items of Object.keys(bird)) {
        console.log(`${items}: ${bird[items]}`);
    }
}
birdCan();


function animalCan() {
    for (var items in bird) {
        console.log(`${items}: ${bird[items]}`);
    }
}
animalCan();
