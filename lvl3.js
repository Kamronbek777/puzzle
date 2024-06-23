let userInput = document.querySelector('input');
let userWrapper = document.querySelector('.wrapper');
let userButton = document.querySelector('button');
let userForm = document.querySelector('form');
let userLink = document.querySelector('a');

userLink.disabled = true;
userButton.disabled = true;

userInput.addEventListener('input', (said) => {
  said.preventDefault()
  switch (userInput.value) {
    case 'justify-content: space-between':
      userWrapper.style.justifyContent ='space-between';
      break;
    case 'justify-content: space-around':
      userWrapper.style.justifyContent ='space-around';
      break;
    case 'justify-content: space-evenly':
      userWrapper.style.justifyContent ='space-evenly';
      break;
    case 'justify-content: flex-start':
      userWrapper.style.justifyContent ='flex-start';
      break;
    case 'justify-content: flex-end':
      userWrapper.style.justifyContent ='flex-end';
      break;
    case 'justify-content: center':
      userWrapper.style.justifyContent ='center';
      break;

    // end of Justify Content

    case 'flex-wrap: wrap':
      userWrapper.style.flexWrap ='wrap';
      break;
    case 'flex-wrap: nowrap':
      userWrapper.style.flexWrap ='nowrap';
      break;
    case 'flex-wrap: wrap-reverse':
      userWrapper.style.flexWrap ='wrap-reverse';
      break;

      // end of Flex Wrap

    case 'flex-direction: row':
      userWrapper.style.flexDirection ='row';
      break;
    case 'flex-direction: row-reverse':
      userWrapper.style.flexDirection ='row-reverse';
      break;
    case 'flex-direction: column':
      userWrapper.style.flexDirection ='column';
      break;
    case 'flex-direction: column-reverse':
      userWrapper.style.flexDirection ='column-reverse';
      break;

      // end of Flex Direction

    case 'align-items: flex-start':
      userWrapper.style.alignItems ='flex-start';
      break;
    case 'align-items: flex-end':
      userWrapper.style.alignItems ='flex-end';
      userLink.disabled = false;
      userButton.disabled = false;  
      break;
    case 'align-items: center':
      userWrapper.style.alignItems ='center';
      break;
    case 'align-items: baseline':
      userWrapper.style.alignItems ='baseline';
      break;
    case 'align-items: stretch':
      userWrapper.style.alignItems ='stretch';
      break;
  }
})