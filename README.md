# A tool used to suggest stickers for skins in Counter-Strike.

## The way this application works, is that the user will choose a skin.
## Once a skin is chosen, the backend will receive a request to reference that chosen skin
## The backend will read the color data of this chosen skin using PIL
## The backend will (using a repository of all the stickers in the game) find the stickers that best fit with the chosen skin's colors.
