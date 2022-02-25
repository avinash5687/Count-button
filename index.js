  document.getElementById("container").innerText = data;


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

function reset() {
    let votes = document.getElementById('votes');
    let count = parseInt(votes.innerHTML);
    value = 0;
    votes.innerHTML = value;
  }