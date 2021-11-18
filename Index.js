// creating mute button for music functionality
function mute(){
    const music = document.getElementById('background_music');
    document.getElementById('mute_option').innerHTML = music.muted ? 'mute' : 'unmute';
    music.muted = !music.muted;
}
var JSON = JSON || {};
class Room {
    constructor(roomAtt){
        this.roomId = roomAtt.roomId
        this.option1Text = roomAtt.option1Text
        this.option2Text = roomAtt.option2Text
        this.option3Text = roomAtt.option3Text
        this.option4Text = roomAtt.option4Text
        this.roomNorth = roomAtt.roomNorth
        this.roomEast = roomAtt.roomEast
        this.roomWest = roomAtt.roomWest
        this.roomSouth = roomAtt.roomSouth
        this.treasurePresent = roomAtt.treasurePresent
        this.explored = false
        this.enemyPresent = roomAtt.enemyPresent
        this.mapId = roomAtt.mapId
        this.nextFloor = roomAtt.nextFloor
        this.previousFloor = roomAtt.previousFloor
    }
    
    optionOne(){
       if(this.roomNorth != null){
        document.getElementById(roomArr[player.room].mapId).style.border = null
           player.room = this.roomNorth
           roomText()
        }
        document.getElementById("roomIdTester").innerHTML = `${player.room}`
        this.explored = true
        if(roomArr[player.room].enemyPresent != null){
            combatStart()
       }
    }
    optionTwo(){
        if(this.roomSouth != null){
        document.getElementById(roomArr[player.room].mapId).style.border = null
        player.room = this.roomSouth
        roomText()
        }
         this.explored = true
         document.getElementById("roomIdTester").innerHTML = `${player.room}`
         if(roomArr[player.room].enemyPresent != null){
            combatStart()
       }
     }
     
     
     optionThree(){
        if(this.roomEast != null){
        document.getElementById(roomArr[player.room].mapId).style.border = null
        player.room = this.roomEast
        roomText()
        } 
        this.explored = true
        document.getElementById("roomIdTester").innerHTML = `${player.room}`
        if(roomArr[player.room].enemyPresent != null){
           combatStart()
      }
    }
    optionFour(){
        if(this.roomWest != null){
            document.getElementById(roomArr[player.room].mapId).style.border = null
            player.room = this.roomWest
            roomText()
            }
             this.explored = true
             document.getElementById("roomIdTester").innerHTML = `${player.room}`
             if(roomArr[player.room].enemyPresent != null){
                combatStart()
           }
    } 
    roomInteract(){
        if(this.treasurePresent != null){
            itemArr[this.treasurePresent].loot()
            this.treasurePresent = null
            roomText()
        } else if(this.nextFloor != null){
            player.room = this.nextFloor
            nextFloor()
            roomText()
            this.explored = true
             document.getElementById("roomIdTester").innerHTML = `${player.room}`
        }  else if(this.previousFloor != null){
            player.room = this.previousFloor
            nextFloor()
            roomText()
            this.explored = true
             document.getElementById("roomIdTester").innerHTML = `${player.room}`
        }     
    }
}
function nextFloor(){
    roomArr.forEach((room)=>{
        document.getElementById(room.mapId).style.backgroundColor = ''
        document.getElementById(room.mapId).style.border = ''
    });
    document.getElementById(roomArr[player.room].mapId).style.border = '1px solid white'
    document.getElementById(roomArr[player.room].mapId).style.backgroundColor = 'black'
    }


function roomText(){
    document.getElementById(roomArr[player.room].mapId).style.border = '1px solid white'
    document.getElementById(roomArr[player.room].mapId).style.backgroundColor = 'black'
    if(roomArr[player.room].roomNorth != null){
        document.getElementById("roomOption1").innerHTML = `Go North!`
     } else {
         document.getElementById("roomOption1").innerHTML = ''
     }
     if(roomArr[player.room].roomSouth != null){
         document.getElementById("roomOption2").innerHTML = `Go South!`
      } else {
         document.getElementById("roomOption2").innerHTML = ''
     }
      if(roomArr[player.room].roomEast != null){
         document.getElementById("roomOption3").innerHTML = `Go East!`
      } else {
         document.getElementById("roomOption3").innerHTML = ''
     }
      if(roomArr[player.room].roomWest != null){
         document.getElementById("roomOption4").innerHTML = `Go West!`
      } else {
         document.getElementById("roomOption4").innerHTML = ''
     }
    if(roomArr[player.room].treasurePresent != null){
        document.getElementById("roomOption5").innerHTML = 'Loot the Chest!'
    }else if(roomArr[player.room].nextFloor != null){
        document.getElementById("roomOption5").innerHTML = 'Advance to the next floor!'
    }else if(roomArr[player.room].previousFloor != null){
        document.getElementById("roomOption5").innerHTML = 'Return to the last floor!'
    }else {
        document.getElementById("roomOption5").innerHTML = ''
  }
}
startingRoom = new Room({
    roomId: 0,
    roomNorth: 1, 
    roomWest: null,
    roomEast: null, 
    roomSouth: null,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 'rm68',
    nextFloor: null,
})
startingRoom.explored = true
let room1 = new Room({
    roomId: 1, 
    roomNorth: 2, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 0,
    treasurePresent: 1,
    enemyPresent: 0,
    mapId: 'rm58',
    nextFloor: null,
})
let room2 = new Room({
    roomId: 2, 
    roomNorth: 3, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 1,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm48',
    nextFloor: null,
})
let room3 = new Room({
    roomId:3,  
    roomNorth: null, 
    roomWest: 4,
    roomEast: null, 
    roomSouth: 2,
    treasurePresent: 0,
    enemyPresent: null,
    mapId: 'rm38',
    nextFloor: 10,
})
let room4 = new Room({
    roomId: 4,  
    roomNorth: null, 
    roomWest: 5, 
    roomEast: 3, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm37',
    nextFloor: null,
})
let room5 = new Room({
    roomId: 5, 
    roomNorth: null, 
    roomWest: null, 
    roomEast: 4, 
    roomSouth: 6,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm36',
    nextFloor: null,
})
let room6 = new Room({
    roomId: 6, 
    roomNorth: 5, 
    roomWest: 7, 
    roomEast: null, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm46',
    nextFloor: null,
})
let room7 = new Room({
    roomId: 7, 
    roomNorth: null, 
    roomWest: null, 
    roomEast: 6, 
    roomSouth: 8,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm45',
    nextFloor: null,
})
let room8 = new Room({
    roomId: 8, 
    roomNorth: 7, 
    roomWest: 9, 
    roomEast: null, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm55',
    nextFloor: null,
})
let room9 = new Room({
    roomId: 9, 
    roomNorth: null, 
    roomWest: null, 
    roomEast: 8, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm54',
    nextFloor: 10,
})
let room10 = new Room({
    roomId: 10, 
    roomNorth: 11, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm65',
    previousFloor: 9,
})
let room11 = new Room({
    roomId: 11, 
    roomNorth: 12, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 10,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm55',
    nextFloor: 25
})
let room12 = new Room({
    roomId: 12, 
    roomNorth: null, 
    roomWest: 19, 
    roomEast: 13, 
    roomSouth: 11,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm45'
})
let room13 = new Room({
    roomId: 13, 
    roomNorth: null, 
    roomWest: 12, 
    roomEast: 14, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm46'
})
let room14 = new Room({
    roomId: 14, 
    roomNorth: null, 
    roomWest: 13, 
    roomEast: 15, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm47'
})
let room15 = new Room({
    roomId: 15, 
    roomNorth: 16, 
    roomWest: 14, 
    roomEast: null, 
    roomSouth: 18,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm48'
})
let room16 = new Room({
    roomId: 16, 
    roomNorth: 17, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 15,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm38'
})
let room17 = new Room({
    roomId: 17, 
    roomNorth: null, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 16,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm28',
    nextFloor: 25,
})
let room18 = new Room({
    roomId: 18, 
    roomNorth: 15, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm58'
})
let room19 = new Room({
    roomId: 19, 
    roomNorth: 20, 
    roomWest: null, 
    roomEast: 12, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm44'
})
let room20 = new Room({
    roomId: 20, 
    roomNorth: 21, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 19,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm34'
})
let room21 = new Room({
    roomId: 21, 
    roomNorth: 22, 
    roomWest: 23, 
    roomEast: 24, 
    roomSouth: 20,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm24'
})
let room22 = new Room({
    roomId: 22, 
    roomNorth: null, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 21,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm14'
})
let room23 = new Room({
    roomId: 23, 
    roomNorth: null, 
    roomWest: null, 
    roomEast: 21, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm23'
})
let room24 = new Room({
    roomId: 24, 
    roomNorth: null, 
    roomWest: 21, 
    roomEast: null, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm25'
})
let room25 = new Room({
    roomId: 25, 
    roomNorth: 26, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm65',
    previousFloor: 17, 
})
let room26 = new Room({
    roomId: 26, 
    roomNorth: 27, 
    roomWest: 30, 
    roomEast: 35, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm55'
})
let room27 = new Room({
    roomId: 27, 
    roomNorth: 28, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 26,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm45'
})
let room28 = new Room({
    roomId: 28, 
    roomNorth: 29, 
    roomWest: 34, 
    roomEast: 39, 
    roomSouth: 27,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm35'
})
let room29 = new Room({
    roomId: 29, 
    roomNorth: null, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 28,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm25'
})
let room30 = new Room({
    roomId: 30, 
    roomNorth: null, 
    roomWest: 31, 
    roomEast: 26, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm54'
})
let room31 = new Room({
    roomId: 31, 
    roomNorth: 32, 
    roomWest: null, 
    roomEast: 30, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm53'
})
let room32 = new Room({
    roomId: 32, 
    roomNorth: 33, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 31,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm43'
})
let room33 = new Room({
    roomId: 33, 
    roomNorth: null, 
    roomWest: null, 
    roomEast: 34, 
    roomSouth: 32,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm33'
})
let room34 = new Room({
    roomId: 34, 
    roomNorth: null, 
    roomWest: 33, 
    roomEast: 28, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm34'
})
let room35 = new Room({
    roomId: 35, 
    roomNorth: null, 
    roomWest: 26, 
    roomEast: 36, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm56'
})
let room36 = new Room({
    roomId: 36, 
    roomNorth: 37, 
    roomWest: 35, 
    roomEast: null, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm57'
})
let room37 = new Room({
    roomId: 37, 
    roomNorth: 38, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 36,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm47'
})
let room38 = new Room({
    roomId: 38, 
    roomNorth: 40, 
    roomWest: 39, 
    roomEast: null, 
    roomSouth: 37,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm37'
})
let room39 = new Room({
    roomId: 39, 
    roomNorth: null, 
    roomWest: 28, 
    roomEast: 38, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm36'
})
let room40 = new Room({
    roomId: 40, 
    roomNorth: 41, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 38,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm27'
})
let room41 = new Room({
    roomId: 41, 
    roomNorth: 42, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 40,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm17'
})
let room42 = new Room({
    roomId: 42, 
    roomNorth: null, 
    roomWest: null, 
    roomEast: 43, 
    roomSouth: 41,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm7'
})
let room43 = new Room({
    roomId: 43, 
    roomNorth: null, 
    roomWest: 42, 
    roomEast: 44, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm8'
})
let room44 = new Room({
    roomId: 44, 
    roomNorth: null, 
    roomWest: 43, 
    roomEast: null, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm9'
})
roomArr= [startingRoom, room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15, room16, room17, room18, room19, room20, room21, room22, room23, room24,room25, room26, room27, room28, room29, room30, room31, room32, room33, room34, room35, room36, room37, room38, room39, room40, room41, room42, room43, room44]
// roomArr= [startingRoom]
// for(let i = 0; i<24; i++){
//     roomArr.push(room`${i}`)
// }
//             Item class code
class Item{
    constructor(att){
        this.itemId = att.itemId
        this.imgSrc = att.imgSrc
    }
    loot(){
        let invSpot = `item${player.inventory.length +1}`;
        player.inventory.push(this)
        document.getElementById(invSpot).src = this.imgSrc
        roomArr[player.room].treasurePresent = null
    }
}
let key = new Item({
    itemId: 0,
    imgSrc: 'assets/Key.png'
})
let potion = new Item({
    itemId: 1,
    imgSrc: 'assets/Potion.png'
})
let itemArr = [key, potion]

//          Enemy class init
class Enemy{
    constructor(att){
        this.enemyId = att.enemyId
        this.name = att.name
        this.hpCurrent = att.hp
        this.hpTotal = att.hp
        this.dmg = att.dmg
        this.armor = att.armor
        this.enemyImg = att.enemyImg
        this.strength = att.strength
        this.dexterity = att.dexterity
        this.constitution = att.constitution
        this.tempArmor = 0
    }

    
}
let slime = new Enemy({
   enemyId: 0,
   name: 'Slime',
   strength: 2,
   dexterity: 3,
   constitution: 5,
   hp: 14,
   dmg: 6,
   armor: 13,
   enemyImg: 'assets/purple_blob.png'
})
const enemyArr = [slime]
//          Combat Functions
let turnCount = 0
function combatStart(){
    let newEnemy = JSON.parse(JSON.stringify(enemyArr[roomArr[player.room].enemyPresent]))
    enemy.push(newEnemy)
    document.getElementById("roomOption1").onclick = attack
    document.getElementById("roomOption1").innerHTML = `Attack!`
    document.getElementById("roomOption2").onclick = defend
    document.getElementById("roomOption2").innerHTML = `Defend!`
    document.getElementById("roomOption3").onclick = powerAttack
    document.getElementById("roomOption3").innerHTML = `Power Attack!`
    document.getElementById("roomOption4").onclick = ''
    document.getElementById("roomOption4").innerHTML = ``
    document.getElementById("enemyHealth").innerHTML = `${enemy[0].hpCurrent}/${enemy[0].hpTotal} `
    document.getElementById("enemyDefense").innerHTML = `${enemy[0].armor}`
    document.getElementById("enemyAttack").innerHTML = `${enemy[0].dmg}`
    document.getElementById("enemyName").innerHTML = `${enemy[0].name}`
    document.getElementById('enemyImg').src = `${enemy[0].enemyImg}`
    document.getElementById('enemyHealthImg').src = "assets/heart pixel art.png"
    document.getElementById('enemyDefenseImg').src = 'assets/Shield1.png'
    document.getElementById('enemyAttackImg').src = 'assets/sword_small (1).png'
}
function combatEnd(){
    roomText()
    enemy.pop
    turnCount = 0;
     document.getElementById("combatLog").innerHTML = ''
     document.getElementById("playerLog").innerHTML = ''
     document.getElementById('enemyImg').src = ''
     document.getElementById("enemyHealth").innerHTML = ''
     document.getElementById("enemyDefense").innerHTML = ''
     document.getElementById("enemyAttack").innerHTML = ''
     document.getElementById("enemyName").innerHTML = ''
     document.getElementById('enemyHealthImg').src = ''
     roomArr[player.room].enemyPresent = null;
     document.getElementById("roomOption1").onclick = option1
     document.getElementById("roomOption2").onclick = option2
     document.getElementById("roomOption3").onclick = option3
     document.getElementById("roomOption4").onclick = option4
     document.getElementById('enemyHealthImg').src = ''
     document.getElementById('enemyDefenseImg').src = ''
     document.getElementById('enemyAttackImg').src = ''
    player.tempArmor = 0 

}
function attack(){
    let roll = Math.floor(Math.random()* 21)+player.dexterity
    if(roll >= enemy[0].armor){
        let hit =  Math.floor(Math.random()* player.dmg)+player.strength
        enemy[0].hpCurrent -= hit
        document.getElementById("playerLog").innerHTML = `You hit, dealing ${hit} damage!`
    }else {
        document.getElementById("playerLog").innerHTML = `You missed!`
    }
    document.getElementById("enemyHealth").innerHTML = `${enemy[0].hpCurrent}/${enemy[0].hpTotal} `
    if(enemy[0].hpCurrent <= 0){
        combatEnd()
    }else{
        turnCount++
        enemyTurn()
    }
   
}
function defend(){
    if(player.tempArmor<4){
    player.tempArmor += 1
    document.getElementById("playerLog").innerHTML = `You build up power!`
    document.getElementById("cSheetArmor").innerHTML = `${player.armor+player.tempArmor}`
    } else if(player.tempArmor === 4){
        player.tempArmor += 1
        document.getElementById("playerLog").innerHTML = `You've built up as much power as you can!`
        document.getElementById("cSheetArmor").innerHTML = `${player.armor+player.tempArmor}`
    } else{
        document.getElementById("playerLog").innerHTML = `You try to build up more power, but fail!`
    }
    turnCount++
    enemyTurn()
    
}
function powerAttack(){
    let roll = Math.floor(Math.random()* 21)+player.dexterity
    if(roll >= enemy[0].armor){
        let hit =  Math.floor(Math.random()* player.dmg)+player.strength+player.tempArmor
        enemy[0].hpCurrent -= hit
        document.getElementById("playerLog").innerHTML = `You unleash your power, dealing ${hit} damage!`
        document.getElementById("enemyHealth").innerHTML = `${enemy[0].hpCurrent}/${enemy[0].hpTotal}`
    }else {
        document.getElementById("playerLog").innerHTML = `You missed, expending your stored power harmlessly!`
    }
    player.tempArmor = 0
    document.getElementById("cSheetArmor").innerHTML = `${player.armor+player.tempArmor}`
    document.getElementById("enemyHealth").innerHTML = `${enemy[0].hpCurrent}/${enemy[0].hpTotal} `
    if(enemy[0].hpCurrent <= 0){
        combatEnd()
    }else{
        turnCount++
        enemyTurn()
    }
}
let enemy = []
function enemyTurn(){
    let action = Math.floor(Math.random()* 3)
    if(action === 0){
        let roll = Math.floor(Math.random()* 21)+enemy[0].dexterity
        if(roll >= player.armor){
            let hit =  Math.floor(Math.random()* enemy[0].dmg)+enemy[0].strength
            player.hpCurrent -= hit
            document.getElementById("combatLog").innerHTML = `${enemy[0].name} hit, dealing ${hit} damage!`
            document.getElementById("cSheetHealth").innerHTML = `${player.hpCurrent}/${player.hpTotal}`
        }else {
            document.getElementById("combatLog").innerHTML = `${enemy[0].name} missed!`
        }
    }else if(action === 1 && enemy[0].tempArmor<5){
        if(enemy[0].tempArmor<4){
            enemy[0].tempArmor += 1
            document.getElementById("combatLog").innerHTML = `${enemy[0].name} builds up power!`
            document.getElementById("enemyDefense").innerHTML = `${enemy[0].armor+enemy[0].tempArmor}`
            } else if(enemy[0].tempArmor === 4){
                player.tempArmor += 1
                document.getElementById("combatLog").innerHTML = `${enemy[0].name} has built up as much power as they can!`
                document.getElementById("enemyDefense").innerHTML = `${enemy[0].armor+enemy[0].tempArmor}`
            }
    }else if(action === 2 && enemy[0].tempArmor>0){
    let roll = Math.floor(Math.random()* 21)+enemy[0].dexterity
    if(roll >= player.armor){
        let hit =  Math.floor(Math.random()* enemy[0].dmg)+enemy[0].strength+enemy[0].tempArmor
        player.hpCurrent -= hit
        document.getElementById("combatLog").innerHTML = `${enemy[0].name} unleashes its power, dealing ${hit} damage!`
    }else {
        document.getElementById("combatLog").innerHTML = `${enemy[0].name} missed, expending its stored power harmlessly!`
    }
    enemy[0].tempArmor = 0
    document.getElementById("enemyDefense").innerHTML = `${enemy[0].armor+enemy[0].tempArmor}`
    document.getElementById("cSheetHealth").innerHTML = `${player.hpCurrent}/${player.hpTotal} `
    } else{
        let roll = Math.floor(Math.random()* 21)+enemy[0].dexterity
        if(roll >= player.armor){
            let hit =  Math.floor(Math.random()* enemy[0].dmg)+enemy[0].strength
            player.hpCurrent -= hit
            document.getElementById("combatLog").innerHTML = `${enemy[0].name} hit, dealing ${hit} damage!`
            document.getElementById("cSheetHealth").innerHTML = `${player.hpCurrent}/${player.hpTotal}`
        }else {
            document.getElementById("combatLog").innerHTML = `${enemy[0].name} missed!`
        }
    }
}
//          Player init
let player = {
    playerName: 'Bill the Barbarian',
    strength: 5,
    dexterity: 4,
    constitution: 3,
    hpCurrent: 10,
    hpTotal: 10,
    armor: 15,
    tempArmor: 0,
    dmg: 4,
    room: 0,
    inventory: []
}
// Button Functionality
function option1(){
    roomArr[player.room].optionOne()
}
function option2(){
    roomArr[player.room].optionTwo()
}
function option3(){
    roomArr[player.room].optionThree()
}
function option4(){
    roomArr[player.room].optionFour()
}
function saveGame(){
    localStorage.setItem('user', JSON.stringify(player))
    let exploredRooms = []
    let combatRooms = []
    let lootedRooms = []
    let inventory = []
    player.inventory.forEach((item) =>{
        inventory.push(item.itemId)
    })
    roomArr.forEach((room) => {
        if(room.explored === true){
            exploredRooms.push(room.roomId)
            combatRooms.push(room.roomId)
            if(room.treasurePresent === null){
            lootedRooms.push(room.roomId)
            }
        } 
    });
    localStorage.setItem('exploredRooms', exploredRooms.toString(','))
    localStorage.setItem('combatRooms', combatRooms.toString(','))
    localStorage.setItem('lootedRooms', lootedRooms.toString(','))
    localStorage.setItem('items', inventory.toString(','))
}
function loadGame(){
    document.getElementById(roomArr[player.room].mapId).style.border = null
    player = JSON.parse(localStorage.getItem('user'))
    let exploredRooms = localStorage.getItem('exploredRooms').split(',')
    let combatRooms = localStorage.getItem('combatRooms').split(',')
    let lootedRooms = localStorage.getItem('lootedRooms').split(',')
    let items = localStorage.getItem('items').split(',')
    roomText()
    document.getElementById("cSheetHealth").innerHTML = `${player.hpCurrent}/${player.hpTotal}`;
    document.getElementById(roomArr[player.room].mapId).style.border = '1px solid white';
    document.getElementById(roomArr[player.room].mapId).style.backgroundColor = 'black';
    document.getElementById("cSheetStatField1").innerHTML = `${player.strength}`;
    document.getElementById("cSheetStatField2").innerHTML = `${player.dexterity}`;
    document.getElementById("cSheetStatField3").innerHTML = `${player.constitution}`;
    document.getElementById("cSheetArmor").innerHTML = `${player.armor}`;
    document.getElementById("cSheetWeapon").innerHTML = `${player.dmg}`;
    document.getElementById("playerName").innerHTML = `${player.playerName}`;
    document.getElementById("roomIdTester").innerHTML = `${player.room}`
    exploredRooms.forEach((id) => {
            document.getElementById(roomArr[id].mapId).style.backgroundColor = 'black'
            roomArr[id].explored = true
    });
    combatRooms.forEach((id) => {
        roomArr[id].enemyPresent = null
    });
    lootedRooms.forEach((id) => {
        roomArr[id].treasurePresent = null
    });
    player.inventory = []
    items.forEach((item) =>{
        itemArr[item].loot()
    });

        
}
        
function Button ()  {
    
        // document.querySelectorAll("video, audio").forEach( elem => muteMe(elem) );

    // document.getElementById("roomOption2").onclick = stat1Increment
    // document.getElementById("combatLog").innerHTML = `${enemy[0].name} Attacks!}`
    combatEnd()
    // nextFloor()
    // let img = slime.enemyImg
    // document.getElementById('enemyImg').src = `${img}`
    // itemArr[0].loot()
    // itemArr[0].loot()
    // let one = 1
    // let test = `item${one}`
    // document.getElementById(test).src = itemArr[0].imgSrc
//     if(toggle === false){
//     document.getElementById("tester").innerHTML = "New text!";
//     toggle = true
// } else {
//     document.getElementById("tester").innerHTML = null;
//     toggle = false
// }
// document.getElementById("testTest").innerHTML = toggle;
}
//  console.log('test')
