# Wording

## Source code

Source code should not use tenses (when possible), for example, a flippable/double-sided card is named `card double`, both words are "tenseless", the class to make the card flipped is named `flip`, NOT "flipped", the english language has a lot of odd and irregular tense conjugations for different words, so its simplier to juse use them like this, at least in the source code. In the actual website content, you should always use correct grammar.

### Center vs middle

In designsys's source code `center` should refer to centered alignment, like text-align, which way content floats, etc.

`middle` should be used when there are many options like left right and middle. Like in a grid layout, lets say there is three grid areas, one would be left right and middle, NOT center.

## UX/UI

The actual UI, unlike the source code, should always use correct grammar and should use correct tenses.

### Remove vs delete

"Remove" should mean that you are taking something out of somewhere, but the something you are removing still exists somewhere else. For example, if there is a list and there is a button to take something out of the list, that button would say "remove". You are re-*move*-ing something, that something still exists, but is just somewhere else.

"Delete" should mean that the something is being gone-ed. For example, if there is a textbox, and you are deleteing the textbox, and any content inside it (the textbox would be gone, not moved somewhere else, just gone completly) that button would be labeled "delete". 

It doesn't matter if the action is undo-able, if it is gone-ed it is "delete"-ed, if it is moved out of something it is "remove"-ed. 
