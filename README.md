# faq-accordion-card

- Live website -(https://carlospwd-faq-accordion-card.netlify.app/)

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

## My process

### Screenshot

### End Result

![result](https://user-images.githubusercontent.com/85038929/126051502-46433f96-a7ba-4632-b3d8-9dfba57ea9b5.JPG)

### Active image

![active](https://user-images.githubusercontent.com/85038929/126051510-7bc6b36f-7159-439a-9332-e87307fdbf97.JPG)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- JavaScript

### What I learned

In this project I learned how to use my background settings in css to move images in the correct places. I also learned how to use the transition tool so that I could create the accordion affect with the help of javascript. I thought this task would be alot more difficult but with the help of a few resources I was able to complete the task

Here is some code that I wrote in order to complete this task

```HTML
<button class="accordion">How many team members can I invite?</button>
          <div class="panel">
            <p>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>
          </div>

```

```Javascript
// Toggle between hiding and showing the active panel
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }

        //adding transition to panel
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
}
```

```CSS
.wrapper {
		max-width: 850px;
		display: grid;
		padding: 2rem 2rem 6rem 1.5rem;
		grid-template-areas: "image-Woman content";
		grid-template-columns: 1fr 1fr;
		background-image: url(../images/illustration-woman-online-desktop.svg),
			url(../images/bg-pattern-desktop.svg);
		background-position: top 40px left -67px, left -436px top -230px;
		background-size: 400px auto, auto 750px;
	}
```

### Questions

- How can I fix my animation so that I slides up aswell? I only got it to slide down.
- Is there another way to move the bottom border of the cards? I used javascript to make the title's bottom border to disappear and added a border in the panel that would then appear along with the panel

### Useful resources

- [CSS background-size Property](https://www.w3schools.com/cssref/css3_pr_background-size.asp) - This helped me when positioning my background images properly

- [Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) - this documentation about the .classList property helped my complete the task in javascript

- [How TO - Collapsibles/Accordion](https://www.w3schools.com/howto/howto_js_accordion.asp) - this documentation about the accordion collapsibles helped my know where to start and create the basic code needed for the project.

- [Debugging JavaScript in Visual Studio Code and Google Chrome](https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick) - this video taught me how to debug my javascript using the debugger tool in developer tools

## Author

- Website - [Carlos Perez](https://www.site.com)
- Frontend Mentor - [@Carlos-A-P](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@WDCarlosP](https://www.twitter.com/WDCarlosP)
