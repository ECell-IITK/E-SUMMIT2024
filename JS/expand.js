function setID() {
    var element = document.getElementById('card');




    switch (activecomp) {
        case 'decrypt':
            element.innerHTML = '<h1>Decrypt</h1>';
            break;
        case 'MUN':
            element.innerHTML = '<h1>MUN</h1>';
            break;
        case 'SellUrSole':
            element.innerHTML = '<h1>SellUrSole</h1>';
            break;
        case 'beAnAngel':
            element.innerHTML = '<h1>beAnAngel</h1>';
            break;
        case 'crypto':
            element.innerHTML = '<h1>crypto</h1>';
            break;
        case 'Upstart':
            element.innerHTML = '<h1>Upstart</h1>';
            break;
        default:
            console.log('default');
    }
}


var activecomp = 'decrypt';


document.getElementById('decrypt').addEventListener('click', function () {
    activecomp = this.id;
    setID();
});

document.getElementById('beAnAngel').addEventListener('click', function () {
    activecomp = this.id;
    setID();
});
document.getElementById('crypto').addEventListener('click', function () {
    activecomp = this.id;
    setID();
});
document.getElementById('SellUrSole').addEventListener('click', function () {
    activecomp = this.id;
    setID();
});
document.getElementById('Upstart').addEventListener('click', function () {
    activecomp = this.id;
    setID();
});
document.getElementById('MUN').addEventListener('click', function () {
    activecomp = this.id;
    setID();
});
