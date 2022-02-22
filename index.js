var data = 0;
  
document.getElementById("counting").innerText = data;


function increment()
{
    let votes = document.getElementById('votes');
    let count = parseInt(votes.innerHTML);
    count++;
    votes.innerHTML = count;
}

function decrement()
{
    let votes = document.getElementById('votes');
    let count = parseInt(votes.innerHTML);
    count--;
    votes.innerHTML = count;
}