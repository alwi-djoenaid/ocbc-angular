const laptop = {
    cpu: 'Intel I9 9900K',
    ram: 16,
    display: 'FHD',
    storageType: 'SSD',
    storageSize: 1024,
    powerState: true,
    files: [],
    states: {}
}

console.log(laptop);
let key = 'display';

console.log(laptop[key]);
console.log(laptop.display);

laptop.display = '2K';