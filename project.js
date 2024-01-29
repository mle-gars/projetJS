const liste1 = [1, 2, 3, 4, 5];
const liste2 = [3, 4, 5, 6, 7];

function findIntersection(liste1, liste2) {
    const intersection = [];
    
    for (const element of liste1) {
        if (liste2.includes(element)) {
            intersection.push(element);
        }
    }
    
    return intersection;
}

const intersection = findIntersection(liste1, liste2);

console.log("Liste 1:", liste1);
console.log("Liste 2:", liste2);
console.log("Intersection:", intersection);