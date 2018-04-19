'use strict';

class MageStrategy {
    constructor(myTeam, myId) {
        this.team = myTeam;
        this.id = myId;
    }

    init(state) {}
    turn(state) {}
}

class KeyboardMageStrategy extends MageStrategy {
    turn(state) {
        let com = prompt('Mage ' + this.id + ': ');
        let action = { id: this.id };
        switch (com) {
            case 'a':
                action.type = ActionType.MOVE;
                action.dir = new Direction(-1, 0);
                break;
            case 's':
                action.type = ActionType.MOVE;
                action.dir = new Direction(0, 1);
                break;
            case 'd':
                action.type = ActionType.MOVE;
                action.dir = new Direction(1, 0);
                break;
            case 'w':
                action.type = ActionType.MOVE;
                action.dir = new Direction(0, -1);
                break;
            case 'j':
                action.type = ActionType.CAST;
                action.spell = new FireballSpell();
                action.spell.dir = new Direction(-1, 0);
                break;
            case 'k':
                action.type = ActionType.CAST;
                action.spell = new FireballSpell();
                action.spell.dir = new Direction(0, 1);
                break;
            case 'l':
                action.type = ActionType.CAST;
                action.spell = new FireballSpell();
                action.spell.dir = new Direction(1, 0);
                break;
            case 'i':
                action.type = ActionType.CAST;
                action.spell = new FireballSpell();
                action.spell.dir = new Direction(0, -1);
                break;
            case 'q':
                throw 'Stop the game';
        }
        return action;
    }
}

class RandomMageStrategy extends MageStrategy {
    turn(state) {
        // TODO: implement throwing a Fireball spell from time to time
        let action = { id: this.id };
        let dir = [new Direction(-1, 0), new Direction(1, 0), new Direction(0, -1), new Direction(0, 1)];
        let n = Math.floor(Math.random() * dir.length);
        let chance = Math.floor(Math.random() * 100);
        if (chance < 80) {
            action.type = ActionType.MOVE;
            action.dir = dir[n];
        } else {            
            action.type = ActionType.CAST;
            action.spell = new FireballSpell();            
            action.spell.dir = dir[n];
        }        
        return action;
    }
}

class YellowMage1Strategy extends MageStrategy {
    turn(state) {
        // TODO: implement throwing a Fireball spell from time to time

        //mage1,mage2,mage3,mage4 - маги желтой команды

        /// Стратегия (М* это положение *-ого мага, + это направление стрельбы)
        ///      +
        ///      M2
        ///  + M1  M3 +
        ///      M4
        ///       +

        //Ищем центр нашей фигуры ("танк - плюс")
        let xPlus = Math.floor((mage1.xy.x+mage2.xy.x+mage3.xy.x+mage4.xy.x)/4);
        let yPlus = Math.floor((mage1.xy.y+mage2.xy.y+mage3.xy.y+mage4.xy.y)/4);

        let action = { id: this.id };
        
        let manaAll=mage1.mana+mage2.mana+mage3.mana+mage4.mana;
        //mage1
        //не маны на каст, такн поехал вверх
        //пока что если уперся вверх и нет маны - капут
        if(manaAll<FIREBALL_COST){
            action.type = ActionType.MOVE;
            action.dir = new Direction(0, -1);
        } else {       
            //если на своей позиции - стреляй, иначе иди на позицию
            if((mage1.xy.x==(xPlus-1))&&((mage1.xy.y==yPlus))){
                action.type = ActionType.CAST;
                action.spell = new FireballSpell();
                action.spell.dir = new Direction(-1, 0);
            } else {
                while (mage1.xy.x!=(xPlus-1)){
                    if (mage1.xy.x>xPlus) {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(-1, 0);
                        break;
                    } else {
                            action.type = ActionType.MOVE;
                            action.dir = new Direction(1, 0);
                    }
                }
                while (mage1.xy.y!=(yPlus)){
                    if (mage1.xy.y>yPlus) {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(0, -1);
                    } else {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(0, 1);    
                    }
                }
            }
        }
        return action;
    }
}


class YellowMage2Strategy extends MageStrategy {
    turn(state) {
        // TODO: implement throwing a Fireball spell from time to time

        //mage1,mage2,mage3,mage4 - маги желтой команды

        //Ищем центр нашей фигуры ("танк - плюс")
        let xPlus = Math.floor((mage1.xy.x+mage2.xy.x+mage3.xy.x+mage4.xy.x)/4);
        let yPlus = Math.floor((mage1.xy.y+mage2.xy.y+mage3.xy.y+mage4.xy.y)/4);

        let action = { id: this.id };

        //mage2
        let manaAll=mage1.mana+mage2.mana+mage3.mana+mage4.mana;
        //не маны на каст, такн поехал вверх
        if(manaAll<FIREBALL_COST){
            action.type = ActionType.MOVE;
            action.dir = new Direction(0, -1);
        } else {  
            if((mage2.xy.x==xPlus)&&(mage2.xy.y==(yPlus-1))){
                action.type = ActionType.CAST;
                action.spell = new FireballSpell();
                action.spell.dir = new Direction(0, -1);
            } else {
                while (mage2.xy.x!=xPlus){
                    if (mage2.xy.x>xPlus) {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(-1, 0);
                        break;
                    } else {
                            action.type = ActionType.MOVE;
                            action.dir = new Direction(1, 0);
                    }
                }
                while (mage2.xy.y!=(yPlus-1)){
                    if (mage2.xy.y>yPlus) {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(0, -1);
                    } else {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(0, 1);    
                    }
                }
            }
        }
        return action;
    }
}

class YellowMage3Strategy extends MageStrategy {
    turn(state) {
        // TODO: implement throwing a Fireball spell from time to time

        //mage1,mage2,mage3,mage4 - маги желтой команды

        //Ищем центр нашей фигуры ("танк - плюс")
        let xPlus = Math.floor((mage1.xy.x+mage2.xy.x+mage3.xy.x+mage4.xy.x)/4);
        let yPlus = Math.floor((mage1.xy.y+mage2.xy.y+mage3.xy.y+mage4.xy.y)/4);

        let action = { id: this.id };

        //mage3
        let manaAll=mage1.mana+mage2.mana+mage3.mana+mage4.mana;
        //не маны на каст, такн поехал вверх
        if(manaAll<FIREBALL_COST){
            action.type = ActionType.MOVE;
            action.dir = new Direction(0, -1);
        } else {       
            if((mage3.xy.x==(xPlus+1))&&((mage3.xy.y==yPlus))){
                action.type = ActionType.CAST;
                action.spell = new FireballSpell();
                action.spell.dir = new Direction(1, 0);
            } else {
                while (mage3.xy.x!=(xPlus+1)){
                    if (mage3.xy.x>xPlus) {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(-1, 0);
                        break;
                    } else {
                            action.type = ActionType.MOVE;
                            action.dir = new Direction(1, 0);
                    }
                }
                while (mage3.xy.y!=(yPlus)){
                    if (mage3.xy.y>yPlus) {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(0, -1);
                    } else {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(0, 1);    
                    }
                }
            }
        }
        return action;
    }
}

class YellowMage4Strategy extends MageStrategy {
    turn(state) {
        // TODO: implement throwing a Fireball spell from time to time

        //mage1,mage2,mage3,mage4 - маги желтой команды

        //Ищем центр нашей фигуры ("танк - плюс")
        let xPlus = Math.floor((mage1.xy.x+mage2.xy.x+mage3.xy.x+mage4.xy.x)/4);
        let yPlus = Math.floor((mage1.xy.y+mage2.xy.y+mage3.xy.y+mage4.xy.y)/4);

        let action = { id: this.id };

        //mage4
        let manaAll=mage1.mana+mage2.mana+mage3.mana+mage4.mana;
        //не маны на каст, такн поехал вверх
        if(manaAll<FIREBALL_COST){
            action.type = ActionType.MOVE;
            action.dir = new Direction(0, -1);
        } else {       
            if((mage4.xy.x==xPlus)&&(mage4.xy.y==(yPlus+1))){
                action.type = ActionType.CAST;
                action.spell = new FireballSpell();
                action.spell.dir = new Direction(0, 1);
            } else {
                while (mage4.xy.x!=xPlus){
                    if (mage4.xy.x>xPlus) {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(-1, 0);
                        break;
                    } else {
                            action.type = ActionType.MOVE;
                            action.dir = new Direction(1, 0);
                    }
                }
                while (mage4.xy.y!=(yPlus+1)){
                    if (mage4.xy.y>yPlus) {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(0, -1);
                    } else {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(0, 1);    
                    }
                }
            }
        }
        return action;
    }
}


// class YellowMageStrategy extends MageStrategy {
//     turn(state) {
//         // TODO: implement throwing a Fireball spell from time to time

//         //mage1,mage2,mage3,mage4 - маги желтой команды

//         //Ищем центр нашей фигуры ("танк - плюс")
//         let xPlus = Math.floor((mage1.xy.x+mage2.xy.x+mage3.xy.x+mage4.xy.x)/4);
//         let yPlus = Math.floor((mage1.xy.y+mage2.xy.y+mage3.xy.y+mage4.xy.y)/4);

//         //mage1
//         while (mage1.xy.x!=(xPlus-1)){
//             if (mage1.xy.x>xPlus) {mage1.move(-1,0)}
//                 else {mage1.move(1,0)}
//         }
//         while (mage1.xy.y!=(yPlus)){
//             if (mage1.xy.y>yPlus) {mage1.move(0,-1)}
//                 else {mage1.move(0,1)}
//         }

//         //mage2
//         while (mage2.xy.x!=(xPlus)){
//             if (mage2.xy.x>xPlus) {mage2.move(-1,0)}
//                 else {mage2.move(1,0)}
//         }
//         while (mage2.xy.y!=(yPlus-1)){
//             if (mage2.xy.y>yPlus) {mage2.move(0,-1)}
//                 else {mage2.move(0,1)}
//         }

//         //mage3
//         while (mage3.xy.x!=(xPlus+1)){
//             if (mage3.xy.x>xPlus) {mage3.move(-1,0)}
//                 else {mage3.move(1,0)}
//         }
//         while (mage3.xy.y!=(yPlus)){
//             if (mage3.xy.y>yPlus) {mage3.move(0,-1)}
//                 else {mage3.move(0,1)}
//         }

//         //mage4
//         while (mage4.xy.x!=(xPlus)){
//             if (mage4.xy.x>xPlus) {mage4.move(-1,0)}
//                 else {mage4.move(1,0)}
//         }
//         while (mage4.xy.y!=(yPlus+1)){
//             if (mage4.xy.y>yPlus) {mage4.move(0,-1)}
//                 else {mage4.move(0,1)}
//         }
//         //все пришли на позиции

//         //стреляем каждый в свою сторону
//         let action = { id: this.id };
//         action.type = ActionType.CAST;
//         action.spell = new FireballSpell();
//         action.spell.dir = new Direction(-1, 0);

//         return action;
//     }
// }