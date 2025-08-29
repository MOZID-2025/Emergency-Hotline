Q: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: --> getElementById("id")

        Selects 1 element by ID.
        Returns single element.

    --> getElementsByClassName("class")

      Selects all elements with a class.
      Returns live HTMLCollection (not a real array).

    --> querySelector("selector")

      Selects the first match of any CSS selector.
      Returns single element.

--> querySelectorAll("selector")

    Selects all matches of a CSS selector.
    Returns static NodeList (can use forEach).

Q: How do you create and insert a new element into the DOM?

Ans: Create element ===> document.createElement()
Add content/attributes ===> textContent, setAttribute, classList
Insert into DOM ===> appendChild() / append() / prepend() / insertBefore()

Q: What is Event Bubbling and how does it work?

Ans: Event Bubbling ==> Event bubbling means when an event happens on a child element, it “bubbles up” (moves upward) through its parent elements, all the way up to the document.

How it works ===> 1. Event starts at the target element (child button). 2. Then it bubbles up → parent → body → document. 3. Unless I stop it using:

Q: What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation ==> Event delegation is a technique where I add an event listener to a parent element, instead of adding it to multiple child elements.
The event then bubbles up from the child to the parent, and I check which child triggered it.

Why is it Useful ===> 1. Performance → Instead of adding 1000 listeners to 1000 <li>, I just add 1 listener to the parent. 2. Dynamic Elements → Works for elements added later (via JS), since the parent is always there. 3. Cleaner Code → Easier to manage one listener than many.

Q: What is the difference between preventDefault() and stopPropagation() methods?

Ans: event.preventDefault() ===> 1. Stops the default browser behavior for that event. 2. Does not stop the event from bubbling up.

event.stopPropagation() ===> 1. Stops the event from bubbling (or capturing) to parent elements. 2. Does not stop the default browser behavior.
