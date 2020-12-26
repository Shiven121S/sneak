blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "PLAY") {
        blockMenu.setControlsEnabled(false)
        blockMenu.closeMenu()
        textSprite.destroy()
        color.FadeToWhite.startScreenEffect(1000)
        color.pauseUntilFadeDone()
        timer.after(500, function () {
            color.clearFadeEffect()
            tiles.setTilemap(tiles.createTilemap(hex`14001e0001010104120d0d0d0d0d0d0d0601010101010101010101020b0f0b0b0f08040d070101010101010101010101010101010101020d080101010101010101010101010101010104060d0406010101010101010101010101010101090d0d0d040e050e050601010101010101010101090d0d0d0d0d0d0d0d0701010101010101010101020a0f0a0a0f08040d0701010101010101040e0601010101010101090d0701010101010101030d0701010101010101100d0701010101010101100d0701010101010101020d0701010101010101030d1101010104050e05060d0701010101010101020d07010101020d0d0d0d0d0701010101010405060d08040e05060d06020f0b080101010101090d0d0d0d0d0d0d0d0d11010101010101010101100d0d0d0d0d0d0d0d0d07010101010101010101090d0d0d0d0d0d0d060208010101010101010101090d0d0d0d0d0d0d080101010101010101010101100d0d0d0d0d0d0d04050e050601010101010101090d0d0d0d0d0d0d0d0d0d0d0701010101010101020a0f0a0a0a0f0a0a08040d110101010101010101010101010101010101030d070101010101010101040505050e05050601100d070101010101010101100d0d0d0d0d0d0701030d070101010101010101030d0d0602080d1101030d070101010101010101030d0d0c01040d0701020d110101010101010101030d0d1101090d0804060d070101010101010101100d0d0c01090d0d0d0d0d070101010101010101030d0d0c01020f0a0a0f0a080101010101010101030d0d1101010101010101010101010101010101020d0b080101010101010101010101`, img`
                ...2........2.......
                ...22222222.2.......
                ..........2.2.......
                .........22.22......
                .........2...222222.
                .........2........2.
                .........22222222.2.
                ......222.......2.2.
                ......2.2.......2.2.
                ......2.2.......2.2.
                ......2.2...22222.2.
                ......2.2...2.....2.
                ....222.22222.22222.
                ....2.........2.....
                ....2.........2.....
                ....2.......222.....
                ....2.......2.......
                ....2.......22222...
                ....2...........2...
                ....22222222222.2...
                ..............2.2...
                .....22222222.2.2...
                .....2......2.2.2...
                .....2..222.2.2.2...
                .....2..2.2.2.2.2...
                .....2..2.2.222.2...
                .....2..2.2.....2...
                .....2..2.2222222...
                .....2..2...........
                .....2.22...........
                `, [myTiles.transparency16_1,sprites.builtin.forestTiles10,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterEast1,sprites.dungeon.floorLight2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterEast2,sprites.dungeon.doorOpenNorth], TileScale.Sixteen))
            mySprite = sprites.create(img`
                . . . . . f f f f f f . . . . . 
                . . . . . f 1 1 1 1 f . . . . . 
                . . . . . f 1 f f 1 f . . . . . 
                . . f f f f 1 f f 1 f f f f . . 
                . . f 1 1 1 1 f f 1 1 1 1 f . . 
                . . f 1 8 9 9 9 9 9 9 8 1 f . . 
                . . f 1 8 8 8 8 8 8 8 8 1 f . . 
                . . f 1 8 8 8 8 8 8 8 8 1 f . . 
                . . f 1 8 8 8 8 8 8 8 8 1 f . . 
                . . f 1 8 8 8 8 8 8 8 8 1 f . . 
                . . f 1 8 8 8 8 8 8 8 8 1 f . . 
                . . f 1 8 8 8 8 8 8 8 8 1 f . . 
                . . f 1 8 8 8 8 8 8 8 8 1 f . . 
                . . f 1 1 1 1 1 1 1 1 1 1 f . . 
                . . f f f f f f f f f f f f . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 29))
            scene.cameraFollowSprite(mySprite)
            controller.player1.moveSprite(mySprite, 85, 85)
            Game_Started = true
        })
    }
})
let mySprite: Sprite = null
let textSprite: TextSprite = null
let Game_Started = false
Game_Started = false
textSprite = textsprite.create("SNEAK")
textSprite.setMaxFontHeight(20)
textSprite.setPosition(69, 27)
blockMenu.showMenu(["PLAY"], MenuStyle.List, MenuLocation.BottomLeft)
blockMenu.setColors(1, 15)
