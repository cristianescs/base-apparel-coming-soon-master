# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview



### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![Screenshot](./images/screenshot.png)

### Links

- Solution URL: [Github Repository](https://github.com/cristianescs/base-apparel-coming-soon-master)
- Live Site URL: [Base Apparel Coming Soon Master Website](https://cristianescs.github.io/base-apparel-coming-soon-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS3
- Flexbox
- Vanilla Javascript

### What I learned

How to check if the input field is empty or not and is the email address is formatted correctly using JavaScript.

```js
function checkInput() {
	// trim to remove the whitespaces
	const emailValue = email.value.trim();

	if(emailValue === '') {
		setErrorFor(email, 'Please enter your email address');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Please provide a valid email');
	} else {
		setSuccessFor(email);
	}

}
```

```js
function isEmail(email) {
	return /^\S+@\S+\.\S+$/.test(email);
}

```

### Continued development

I want to continue focusing on doing a better validation check using Javascript. I want to do a form that is really complete and could be really helpful.
### Useful resources

- [Youtube video: Email Validation Check Using Vanilla Javascript | How To Check Email Valid or Not](https://www.youtube.com/watch?v=HzJngc-Se9Q&t=257s) - This video helped me when I was trying to undestand the programming logic of how to do email validation check.

## Author

- Frontend Mentor - [@cristianescs](https://www.frontendmentor.io/profile/cristianescs)
- [LinkedIn](https://www.linkedin.com/in/cristianescs/)

