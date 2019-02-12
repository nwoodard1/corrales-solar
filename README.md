# corrales-solar
this is my pwp

## Milestone 1 Feedback
Nice job on your Milestone 1! Your goals, persona and HTML all look good.

With your HTML, watch the placement of the tags and your indentation and spacing. The more exact you are with your HTML indentation the easier it will be the read and understand. I think I see a p tag that is opened but never closed, and those things are easier to notice when it all lines up. You also dont need the extra line spaces between the tags and the content. Here is an example: https://github.com/mjbovee/mjbovee-pwp/blob/master/public_html/documentation/milestone-1.html

Also watch your scope creep on this project, meaning the amount of features you hope to implement by the time the program is over. Refer to past PWPs for guidance on how big the site should or shouldn't be - you can still make the website for this company, but things like complex reviews and long lists of prices and details may be best saved for a later iteration of the site. For now I would focus on the design of the information/images (without getting hung up on creating content), and a really strong contact form.

In your .gitignore: You don't need a slash before .DS_Store because it's a file, not a directory. :)

All that said, you definitely hit the mark for the assignment and overall did a great job on putting together a persona that matches your goals. Edit: Since your submission was early as well, your milestone passes at a Tier IV!

*Milestone 1: Tier IV*

## Milestone 2a Feedback
Nice work on the wireframes and the content strategy. You have some good ideas of how you want to create your PWP. Overall, these are good but there are some concerns in regards to design & parts of development.

I see what your intention is with the toolbar but may I suggest taking those parts from the toolbar and putting them to their own sections on the site. As this is only a one page site, you would be able to utilize a navbar and have a link that will take the user to the specific section on the site. Be aware of how everything stacks on mobile. I noticed how the logo is by the toolbar on Desktop but it shifts next to the company name on mobile. This is a flaw in your design due to the way the bootstrap grid system and flexbox works. I also noticed how you have "Renewable Facts" on the side next to your "Welcome" & "Mission Statement" section on desktop. This doesn't translate to your mobile wireframe properly. You might want to reconsider your approach on these items as they will affect the upcoming development stage. See us for suggestions on how you achieve this.

Bootstrap photo carousel will work but for an interactive gallery I would suggest checking out something like FancyBox3. I have provided a link to the JavaScript library that will help you create this animation.
https://fancyapps.com/fancybox/3/

Here is some documentation on getting a Google map onto your site.
https://developers.google.com/maps/documentation/javascript/adding-a-google-map

Additional Recommendations for you:

Google Fonts - has ~1000 free fonts & easy to integrate https://fonts.google.com/

FontAwesome - quality library with free iconography for use.
https://fontawesome.com/

We'll be building PWP in a file named index.php inside of /public_html. Please note that no frontend-facing site files should live outside of the /public_html directory. Remember use an organized and standards-compliant directory structure to house all images, JavaScript, CSS, etc. We are done with the /documentation directory for now!

#### Grade Tier IV
