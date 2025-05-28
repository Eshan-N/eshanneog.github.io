```markdown
# Random Guessing Game Flowchart

## Flowchart

```mermaid
flowchart TD
    Start((Start)) --> Generate[Generate random number]
    Generate --> Prompt[Prompt user to guess a number]
    Prompt --> Check{Is guess correct?}
    Check -- Yes --> End((End))
    Check -- No --> Feedback[Provide feedback (too high/low)]
    Feedback --> Prompt

# Explanation
I created a new Markdown File called Guessing.md,
Then I actually wrote the header for the file
Then another subheading
Fuinally I wrote the process
8- Starting point of the game, the arrow indicates the flow
9- Prompt user to guess a number, flows to the next
10- Check if the users guess is correct or incorrect, the check flows to two options
11- Flows to yes, which it then ends the game
12- switches to no which it then gives the user feedback to see if it were too high or too low
13- Prompts the user one last time and restarts the process
