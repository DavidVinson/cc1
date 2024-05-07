//global count of generated div elements
let count = 0;

function generate(event) {
  //console.log('btn clicked!');

  //increment count
  count++;

  // select body element from DOM
  const body = document.querySelector('body');

  //make a div element
  //make a p element that displays the count
  //make two buttons, put them in the div element
  body.innerHTML += `
    <div>
        <button onclick="yellowDiv(event)">Yellow</button>
        <button onclick="deleteDiv(event)">Delete</button>
        <p>${count}</p>
    </div>
  `;
}

function yellowDiv(event) {
  //   console.log('turn div yellow');
  event.target.closest('div').classList.add('yellow');
}

function deleteDiv(event) {
  //   console.log('delete div');
  event.target.closest('div').remove();
}

function onReady() {
  //is the DOM ready?
  console.log('DOM is ready!');
  //not used currently as nothing happens when page loads
}

onReady();
