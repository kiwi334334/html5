function createHuman(){
    const rand = Math.floor(Math.random() * 100)
    const human = document.createElement("img");
    const humanclass = document.createAttribute('class')
    human.src = 'https://media4.giphy.com/media/CTaMxpaVnlwhBkHQ9c/giphy.gif?cid=6c09b952nosknv61rb6qkkfn3f3tr1xdh5zex37d1lh1q4mu&rid=giphy.gif&ct=s';
    human.width = rand;
    human.height = rand;
    humanclass = "human";
    human.setAttribute(humanclass)
    document.appendChild(human);
}