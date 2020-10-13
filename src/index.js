module.exports = function check(str, bracketsConfig) {
    let mass=[];
    for(let x = 0; x < bracketsConfig.length; x++){
        mass.push(bracketsConfig[x].join(''));
    }
    for (let x = 0; x < mass.length; x++) {
        if (str.includes(mass[x])) {
            str = str.replace(mass[x], '');
            x = -1;
        }
    }
    return (str) ? false : true;
}
