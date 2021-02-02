# Shrimp Royale #
*Beginner's guide to freshwater shrimps.*

![Shrimp Royal](/wireframes/hero-image.png)


# Table of contents

 **_UX:_**
 - Project Goals
- User Goals
- User Stories
- Site Owner Goals
- User Requirements and Expectations
 
**_Design Choices:_**
- Fonts
- Icons
- Colours

**_Technologies:_**
- HTML
- CSS
- Bootstrap 
- Java Script


 **_Features:_**
- Features that have been developed
- Features that will be implemented in the future

**_Deployment:_**

**_Credit:_**

---
## UX (User Experience) ##
---
### Project Goals ### 
The goal of this project is to provide **a beginner guide on how one can successfully keep and care for cherry shrimps.** . 

### User Goals ###
Find information about how to keep and care for cherry shrimps
1. Cherry shrimp general information
2. What equipment is needed 
3. substrate
4. Water parameters 
5. Live plants
6. AquaScaping  
7. Be able to contact the site owner either via email or a contact form


### User Stories ###
- As a user, I quickly want to find the information I am searching for.
- As a user, I want an attractive responsive UI that is easily navigated.
- As a user, I want to be able to access the information on my desktop, laptop or mobile device.
- As a user, I want to be able to contact the site owner in case of questions or if I have suggestions on additional content.

### Site Owner Goals ###
- As a site owner, I want users to succeed in the aquatic hobby by informing and educating them.
- As a site owner, I want users to get the stress-relieving joy of watching cherry shrimp thrive in a beautifully well balanced aqua-scaped aquarium.
- As a site owner, I want to be able to answer questions my users might have

### User Requirements and Expectations ###

**Requirements**

- Easy navigate the website via navbar.
- Be provided with useful information throughout the website.
- Content is visually appealing and easily comprehensible.
- Be able to contact the site owner.

**Expectations**
- Navigation steers users to the definite sections of the website.
- Content is visually delightful displayed and informative.
- A functional contact form.

## Design Choices ##
---
Cherry shrimps originate from the freshwater streams of Taiwan, so the Logo (Shrimp Royale), is loosely inspired by East Asian Kawaii and Taiwanese calligraphy. 

**Fonts**

For Shrimp royals logo I used [Black Bird](https://www.dafont.com/blackbird.font) to have a feeling of calligraphy but still get a readable result.
For headers, I used Googles [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) and for the body, I used [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro?query=Source+Sans+Pro)

**Colors**

I am rooted in Scandinavian design traditions so I kept my colours the same way, minimal. 

![Colors](/wireframes/colors.png)
## Wireframes ##
---
I used [Figma](https://www.figma.com/). To produced **lo-fi** wireframes just to get a guideline and so I could get a better **feeling** for what would go where and how things would look on different screen sizes.

Wireframes in order:\
Mobile view  
Tablet view  
Desktop view  

![Wireframe](/wireframes/wireframes.png)

## Features that have been implemented: ##
---
- Responsive and easy  to use navigation
- Picture set webp images for supporting browsers and png images as a fallback for unsupporting browsers
- Native lazy-loading for supporting browsers (global 72.72%)
- a small video clip that starts if it is in the viewport and stops ven outside the viewport
- Responsive gallery

## Features Left to Implement ##
---
-contact form functionality


## Deployment ##
---
 The project was deployed to GitHub Pages using the following steps:

-  Log in to GitHub and locate the [GitHub Repository](https://github.com/kristianAndersen/ShrimpRoyal)
-  At the top of the Repository (not top of page), locate the "Settings" button on the menu.
-  Scroll down the Settings page until you locate the "GitHub Pages" Section.
-  Under "Source", click the dropdown called "None" and select "Master Branch".
-  The page will automatically refresh.
-  Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.
 

## Technologies used: ##
---
**_Markup and style:_**
* [HTML5](https://en.wikipedia.org/wiki/HTML5/)
* [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets/)
* [Bootstrap5](https://getbootstrap.com)

**_Languages:_**  
* [JavaScript](https://javascript.com)

**_Tools:_**
- [Git](https://git-scm.com/)
- [GitHub](https://github.com)
- [VS code](https://code.visualstudio.com/) for coding
- [Gitpod](https://gitpod.io/) for copy/pasting from VS code and commiting to Github
- [Uncss](https://uncss-online.com/) / [Uncss Nodejs](https://github.com/uncss/uncss) to create a slimmed-down version of bootstrap5
- [Figma](https://www.figma.com/) for wireframing
- [Illustrator](https://www.adobe.com/dk/products/illustrator.html) for SVG Logo creation

**_Libraries:_**
- [Bootstrap 5](https://getbootstrap.com/)
- [Google Fonts](https://fonts.google.com/)

## Testing: ##
---

With Lambdatest I tested that ShrimpRoyale worked in different browsers on windows.

I tested Chrom, Edge Firefox Opera on windows 10 and Ie on windows 8.
On Apple Mac, I tested in Chrome, Safari, and Brave. + all devises that chrome dev tools can emulate.
[lambdatest](https://app.lambdatest.com/)

**Google lighthouse**

An overall score of 95%. It could have been better if I dropped support for inferior browsers
![Google Lighthouse](/wireframes/lighthouse-test.png)

**The W3C Markup Validation Service**

I get a few warnings and errors

-  Warning: Section lacks heading.
-  Error: Bad value 100% for attribute width on element video: 

Fixes

- I let the warnings pass because I got headings in all article tags.
- I removed width="100%" from video tag and set it in main.css

**The W3C CSS Validation Service**

I get warnings for 

_Property font-display doesn't exist : swap._

- I keep it well knowing that it is not yet a living standard but it has (91.97%) global browser support

**Bugs**

- I use a slimmed-down version of bootstrap with no-js because I do not use all the Features beside the responsiveness/grids
so I had to fix the nav-bar not collapsing on click. 

## Credits ##
---

**Media**
- Big thanks to my Shrimps for looking nice 
- Thanks to the nice users @ r/shrimptank/ for letting me use a few of their images
- Thanks to Google images  

**Content**

Content on the site was adapted from
- https://aquamania.co.id/news-detail/5
- https://www.liveaquaria.com/
- https://aquariumstoredepot.com/blogs/news/freshwater-shrimp-tank
- https://www.fishkeepingtoday.com/set-up-shrimp-tank/
- https://habitart.id/13-dreamy-ways-to-use-string-lights-in-your-backyard/

**Code**
-  Bootstrap5 used in the project to make the site responsive utilising the Grid System. 
-  Bootstrap was also used for the site's navbar 

**Acknowledgements** 
- Thanks to Code Institutes Student Care for helping out when I ran out of GitPod time