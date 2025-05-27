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
