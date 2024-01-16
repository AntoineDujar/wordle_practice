# Wordle clone as practice for react

  5 letters, 6 guesses

  Project To Do:

    ( ) - not done | (x) - done | (p) - in progress
 
    (x) repo init - Ant
    (x) project structure/outline - Dan
    ( ) title Bar -

    (p) function to fetch solutions -

    (p) game logic (useWordle hook) - Dan/Ant 
    (p)   -> track current guess
    (p)   -> submit and format guess (check for colours)
    (p)   -> add new guesses
    (p)   -> history tracking
    (p)   -> check win condition

    (p)  - components (individual files)
    (p)    -> wordle
    (p)     -> handleSubmit 
    (p)    -> grid
    (p)    -> row
    ( )    -> tile -Ant
    (p)    -> keyboard (add backspace, enter keys (submit current word)) -Ant
    ( )    -> modal (for win/lose condition)
    (p)    -> styles for all above (index.css)
    ( )    -> 


    ( )  - animations (index.css)
    ( )   -> tiles
    ( )   -> used keys
    ( )   -> game win/lose
    (p)   -> colours on keyboard match (gray, yellow, green)


    *** TO USE JSON SERVER ***
    open windows powershell as admin, run command "Set-ExecutionPolicy Unrestricted", after select y

    command to start json server (can be done in vs code terminal) 
    json-server ./data/db.json --port 3001 (or whatever port you want)

    I added a script "npm run server" as an easier alternative way to start the json-server on port 3001.
#