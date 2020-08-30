namespace SpriteKind {
    export const TreasureChest2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (TreasureChestA_Open == false) {
        TreasureChestA.setImage(img`
            . b b b b b b b b b b b b b b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b b b b b b b d d b b b b b b b 
            . b b b b b b c c b b b b b b . 
            b c c c c c b c c b c c c c c b 
            b c c c c c c b b c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b b b b b b b b b b b b b b b b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `)
        TreasureChestA_Open = true
        info.changeScoreBy(100)
        tiles.placeOnRandomTile(TreasureChestB, myTiles.tile1)
        TreasureChestB.setImage(img`
            . . b b b b b b b b b b b b . . 
            . b e 4 4 4 4 4 4 4 4 4 4 e b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `)
        TreasureChestB_Open = false
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.TreasureChest2, function (sprite, otherSprite) {
    if (TreasureChestB_Open == false) {
        TreasureChestB.setImage(img`
            . b b b b b b b b b b b b b b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b b b b b b b d d b b b b b b b 
            . b b b b b b c c b b b b b b . 
            b c c c c c b c c b c c c c c b 
            b c c c c c c b b c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b b b b b b b b b b b b b b b b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `)
        TreasureChestB_Open = true
        info.changeScoreBy(100)
        tiles.placeOnRandomTile(TreasureChestA, myTiles.tile1)
        TreasureChestA.setImage(img`
            . . b b b b b b b b b b b b . . 
            . b e 4 4 4 4 4 4 4 4 4 4 e b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `)
        TreasureChestA_Open = false
        pause(1000)
    }
})
let TreasureChestB_Open = false
let TreasureChestA_Open = false
let TreasureChestB: Sprite = null
let TreasureChestA: Sprite = null
info.setScore(0)
tiles.setTilemap(tiles.createTilemap(hex`32003200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000161714000000000000000015171400000000000000000000000000000000000000000000000000000000000000000000000002010500000000000000000301040000000000000000000000000000000000000000000000000000000000000000000000000301040000000000000000020105000000000000000000000000000000000000000000000000000000000000000000000000020105000000000000000003010400000000000000000000000000000000000000000000000000000000000000000000000003010400000000000000000201050000000000000000000000000000000000000000000000000000000000000000000000000201050000000000000000030104000000000000000000000000000000000000000000000000000000000000000000000000030106080707070707070d0e01050000000000000000000000000000000000000000000000000000000000000000000000001101010101010101010101010104000000000000000000000000000000000000000000000000000000000000000000000000090b0b0c0a0a0a0a0a0a0a0f010500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001001120000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030113000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002010500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000301040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020105000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003010400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000901050000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile12,myTiles.tile13,myTiles.tile11,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile26], TileScale.Sixteen))
let mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, myTiles.tile13)
TreasureChestA = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(TreasureChestA, myTiles.tile1)
TreasureChestB = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.TreasureChest2)
game.onUpdate(function () {
    if (info.score() == 10000) {
        tiles.setTilemap(tiles.createTilemap(hex`32003200000000000000000000000000000000000000000001010101010101010101010101010101010101010101010100000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000100000000000000000001010101010101010000000000000000001e000000000000000000000000000000000000000000000100000000000000000000000000000000010000000000000000001e000000000000000000000000000000000000000000000100000000000000000000000000000000010000000000000000001e000000000000000000000000000000000000000000000100000000000000000000000000000000010000000000000000001e000000000001010101010101010000000000010101010100000000000000000000000000000000010000000000000000001e000000000001000000000000010000000001010101010100000000000000000000000000000000010000000000000000001d000000000001000000000000010000000000000000000100000000000001010101010101000000010000000000000000001d000000000001000000010000010000000000000000000100000000000001000000000001000000010000000000000000001d000000000001000000010000010000000000000000000100000000000001000000000001000000010000000000000000001d000000000001000000010101010000000000000000000100000000000001000000000001000000010000000000000000001c000000000001000000000100000000000000000000010100000000000001000000000001000000010000000000000000001c000000000001000000000100000000010101010101010100000000000001000000000001000000010000000000000000001c000000000001000000000100000000000000000101010100000000000001000000000001000000010000000000000000001a000000000001000000000100000000000000000000010100000000000001000000000001000000010000000000000000001a000000000001000000000000000000000000000000000100000000000001000000000001000000010000000000000000001b00000000000100000000000000000000000000000000010000000000000100000000000100000001000000000000000000190000000000010101010101010101010100000101010101000000000000010000000000010000000100000000000000000019000000000000000000000000000000010100000100000100000000000001000000000001000000010000000000000000161814000000000000000015171400000000010000010000010000000000000100000000000100000001000000000000000002010500000000000000000301040000000001000001000001000000000000010000000000010000000100000000000000000301040000000000000000020105000000000100000100000100000000000001000000000001000000010000000000000000020105000000000000000003010400000000010000010000010000000000000100000000000100000001000000000000000003010400000000000000000201050000000001000001000001000000000000010000000000010000000100000000000000000201050000000000000000030104000000000100000100000100000000000001000000000001000000010000000000000000030106080707070707070d0e01050000000001000001000001000000000000010000000000010000000100000000000000001101010101010101010101010104000000000100000100000100000000000001000000000001000000010101010100000000090b010c0a0a0a0a0a0a0a0f010500000000010000010000010000000000000100000000000100000000000000010101000000000000000000000000001001120000000001000001000001000000000000010000000000010000000000000000000100000000000000000000000000030113000000000100000100000100000000000001000000000001000000000000000000010000000000000000000000000002010500000000010000010000010000000000000100000000000100000000000000000001000000000000000000000000000301040000000001000001000001000000000000010000000000010000000000000000000100000000000000000000000000020105000000000100000100000100000000000001000000000001000000000000000000010000000000000000000000000003010400000000010000010000010000000000000100000000000100000000000000000001000000000000000000000000000901050000000001000001000001000000000000010000000000010101010101010101010100000000000000000000000000000000000000000100000100000100000000000001000000000000000000000000000000000000000000000000000000000000000000000000010000010000010000000000000100000000000000000000000000000000000000000000000000000000000000010101010101000001000001000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000100000100000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000010000010000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000001000001000000000000010000000000000000000000000000010101010101010101010101010000000001000000000000000100000100000000000001000000000000000000000000000001000000000000000000000001000000000100000001010101010000010000000000000100000000000000000000000000000100010101010101010100000100000000010000000000000000000001000000000000010101010101010101010100000000010001000000000000010000010000000001000000000000000000000100000000000001000000000000000000010000000001000101010101000001000001000000000100000000000000000000010000000000000101010101010101010101000000000100000000000100000100000100000000010000000000000000000001000000000000010000000000000000000000000000010101010101010000010000010101010101010101010101010101010100000000000001000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010100000000000000000000000000000000000000000000000000`, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
            2 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 . . . . . . . . 2 2 2 2 2 . . . . . 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 2 2 2 . 2 2 2 2 . . . . . . 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
            . . . . . . . 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 . 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 . 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 . . . . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . . . . . . . . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 . . . . . . . . . . . 2 2 . . . . . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 . . . 2 2 2 2 . 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 . . . 2 2 2 2 . 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 . . . 2 2 2 2 . 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 . . . 2 2 2 2 . 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 . . . 2 2 2 2 . 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 . . . 2 2 2 2 . 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 2 2 2 2 . 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 2 2 2 2 . 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 . . . . . 2 2 2 2 . . . . . . . . . . . . . . 2 2 2 2 . 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 . 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 . 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 . 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 . 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 . 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 . 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 . 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . 2 2 2 2 . 2 2 2 2 2 2 2 . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 2 2 2 . . . . . 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 . . . . . . . . 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
            . . . . . . . . . . . 2 2 2 2 . 2 . 2 2 2 2 2 2 . 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 2 . . . . . 2 2 . 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
            . . . . . . . . . . . 2 2 2 2 . 2 2 2 2 2 . 2 2 . 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 . 2 2 . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile12,myTiles.tile13,myTiles.tile11,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile26,myTiles.tile27,myTiles.tile30,myTiles.tile31,myTiles.tile32,myTiles.tile33,myTiles.tile34,myTiles.tile35], TileScale.Sixteen))
    }
})
