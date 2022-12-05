let main = document.querySelector('.main');
let userInput = document.querySelector('input');
let qcontainer = document.querySelector('#questionContainer');
let questionHolder = document.querySelector('#questionnaire');


function createQuestion() 
{
  let array = document.createElement('li');
  let span = document.createElement('span');
  span.textContent = userInput.value;
  let editBtn = document.createElement('button');
  editBtn.textContent = 'edit';
  let removeBtn = document.createElement('button');
  removeBtn.textContent = 'remove';
  array.appendChild(span);
  array.appendChild(editBtn);
  array.appendChild(removeBtn);
  return array;
}

qcontainer.addEventListener('submit', (event) => 
{
  event.preventDefault();
  let array = createQuestion();
  if(userInput.value === '') {
    alert('Enter the question');
  } else {
    questionHolder.appendChild(array);
  }
}
); 


questionHolder.addEventListener('click', (event) => 
{
  if(event.target.tagName === 'BUTTON') 
  {
    let button = event.target;
    let array = button.parentNode;
    let questionHolder = array.parentNode;
    if(button.textContent === 'remove') 
    {
      questionHolder.removeChild(array);
    } 
    else if(button.textContent === 'edit') 
    {
      let span = array.firstElementChild;
      let userInput = document.createElement('input');
      userInput.type = 'text';
      userInput.value = span.textContent;
      array.insertBefore(userInput, span);
      array.removeChild(span);
      button.textContent = 'save';
    } 
    else if(button.textContent === 'save') 
    {
      let userInput = array.firstElementChild;
      let span = document.createElement('span');
      span.textContent = userInput.value;
      array.insertBefore(span, userInput);
      array.removeChild(userInput);
      button.textContent = 'edit';
    }
  }
}
);
