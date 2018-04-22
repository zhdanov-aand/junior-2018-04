'use strict';

class StrategyYellowTeam1 extends MageStrategy {
    constructor(myTeam, myId) {
        super(myTeam, myId);
    }
    init(level, state) {}

    turn(state) {
        // TODO: implement throwing a Fireball spell from time to time
        
        /// Стратегия (М* это положение *-ого мага, + это направление стрельбы)
        ///      +
        ///      M2
        ///  + M1  M3 +
        ///      M4
        ///       +

        
        //Ищу своих магов
        
        let mage1friend = getItemById(state.mages,'yellow1');
        let mage2friend = getItemById(state.mages,'yellow2');
        let mage3friend = getItemById(state.mages,'yellow3');
        let mage4friend = getItemById(state.mages,'yellow4');
        
        //Ищем центр нашей фигуры ("танк - плюс")
        let xPlus = Math.floor((mage1friend.xy.x+mage2friend.xy.x+mage3friend.xy.x+mage4friend.xy.x)/4);
        let yPlus = Math.floor((mage1friend.xy.y+mage2friend.xy.y+mage3friend.xy.y+mage4friend.xy.y)/4);
        
        let action = { id: this.id };
        
        let manaAllFriends=mage1friend.mana+mage2friend.mana+mage3friend.mana+mage4friend.mana;
        //mage1
        //не маны на каст, такн поехал вверх
        //пока что если уперся вверх и нет маны - остановка
        if(manaAllFriends<FIREBALL_COST){
            action.type = ActionType.MOVE;
            action.dir = new Direction(0, -1);
        } else {       
            //если на своей позиции - стреляй, иначе иди на позицию
            if((mage1friend.xy.x==(xPlus-1))&&((mage1friend.xy.y==yPlus))){
                action.type = ActionType.CAST;
                action.spell = new FireballSpell();
                action.spell.dir = new Direction(-1, 0);
            } else { if(mage1friend.xy.x!=(xPlus-1)){
                    if (mage1friend.xy.x>xPlus) {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(-1, 0);
                    } else {
                            action.type = ActionType.MOVE;
                            action.dir = new Direction(1, 0);
                    }}
                    if(mage1friend.xy.y!=yPlus){
                    if (mage1friend.xy.y>yPlus) {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(0, -1);
                    } else {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(0, 1);    
                    }}            
            }
        }
        return action;
    }
}


class StrategyYellowTeam2 extends MageStrategy {
    constructor(myTeam, myId) {
        super(myTeam, myId);
    }
    init(level, state) {}

    turn(state) {
        // TODO: implement throwing a Fireball spell from time to time
    
        /// Стратегия (М* это положение *-ого мага, + это направление стрельбы)
        ///      +
        ///      M2
        ///  + M1  M3 +
        ///      M4
        ///       +

        
        //Ищу своих магов
        
        let mage1friend = getItemById(state.mages,'yellow1');
        let mage2friend = getItemById(state.mages,'yellow2');
        let mage3friend = getItemById(state.mages,'yellow3');
        let mage4friend = getItemById(state.mages,'yellow4');
        
        //Ищем центр нашей фигуры ("танк - плюс")
        let xPlus = Math.floor((mage1friend.xy.x+mage2friend.xy.x+mage3friend.xy.x+mage4friend.xy.x)/4);
        let yPlus = Math.floor((mage1friend.xy.y+mage2friend.xy.y+mage3friend.xy.y+mage4friend.xy.y)/4);
        
        let action = { id: this.id };
        
        let manaAllFriends=mage1friend.mana+mage2friend.mana+mage3friend.mana+mage4friend.mana;
        //mage2
        //не маны на каст, такн поехал вверх
        //пока что если уперся вверх и нет маны - капут
        if(manaAllFriends<FIREBALL_COST){
            action.type = ActionType.MOVE;
            action.dir = new Direction(0, -1);
        } else {       
            //если на своей позиции - стреляй, иначе иди на позицию
            if((mage2friend.xy.x==(xPlus))&&((mage2friend.xy.y==(yPlus-1)))){
                action.type = ActionType.CAST;
                action.spell = new FireballSpell();
                action.spell.dir = new Direction(0, -1);
            } else { if(mage2friend.xy.x!=(xPlus)){
                    if (mage2friend.xy.x>xPlus) {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(-1, 0);
                    } else {
                            action.type = ActionType.MOVE;
                            action.dir = new Direction(1, 0);
                    }}
                    if(mage2friend.xy.y!=(yPlus-1)){
                    if (mage2friend.xy.y>yPlus) {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(0, -1);
                    } else {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(0, 1);    
                    }}            
            }
        }
        return action;
    }
}

class StrategyYellowTeam3 extends MageStrategy {
    constructor(myTeam, myId) {
        super(myTeam, myId);
    }
    init(level, state) {}

    turn(state) {
        // TODO: implement throwing a Fireball spell from time to time

        /// Стратегия (М* это положение *-ого мага, + это направление стрельбы)
        ///      +
        ///      M2
        ///  + M1  M3 +
        ///      M4
        ///       +

        
        let mage1friend = getItemById(state.mages,'yellow1');
        let mage2friend = getItemById(state.mages,'yellow2');
        let mage3friend = getItemById(state.mages,'yellow3');
        let mage4friend = getItemById(state.mages,'yellow4');
        
        //Ищем центр нашей фигуры ("танк - плюс")
        let xPlus = Math.floor((mage1friend.xy.x+mage2friend.xy.x+mage3friend.xy.x+mage4friend.xy.x)/4);
        let yPlus = Math.floor((mage1friend.xy.y+mage2friend.xy.y+mage3friend.xy.y+mage4friend.xy.y)/4);
        
        let action = { id: this.id };
        
        let manaAllFriends=mage1friend.mana+mage2friend.mana+mage3friend.mana+mage4friend.mana;
        //mage3
        //не маны на каст, такн поехал вверх
        //пока что если уперся вверх и нет маны - капут
        if(manaAllFriends<FIREBALL_COST){
            action.type = ActionType.MOVE;
            action.dir = new Direction(0, -1);
        } else {       
            //если на своей позиции - стреляй, иначе иди на позицию
            if((mage3friend.xy.x==(xPlus+1))&&((mage3friend.xy.y==(yPlus)))){
                action.type = ActionType.CAST;
                action.spell = new FireballSpell();
                action.spell.dir = new Direction(1, 0);
            } else { if(mage3friend.xy.x!=(xPlus+1)){
                    if (mage3friend.xy.x>xPlus) {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(-1, 0);
                    } else {
                            action.type = ActionType.MOVE;
                            action.dir = new Direction(1, 0);
                    }}
                    if(mage3friend.xy.y!=(yPlus)){
                    if (mage3friend.xy.y>yPlus) {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(0, -1);
                    } else {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(0, 1);    
                    }}            
            }
        }
        return action;
    }
}


class StrategyYellowTeam4 extends MageStrategy {
    constructor(myTeam, myId) {
        super(myTeam, myId);
    }
    init(level, state) {}

    turn(state) {
        // TODO: implement throwing a Fireball spell from time to time

        //mage1,mage2,mage3,mage4 - маги желтой команды

        /// Стратегия (М* это положение *-ого мага, + это направление стрельбы)
        ///      +
        ///      M2
        ///  + M1  M3 +
        ///      M4
        ///       +

        
        //Ищу своих магов
        let mage1friend = getItemById(state.mages,'yellow1');
        let mage2friend = getItemById(state.mages,'yellow2');
        let mage3friend = getItemById(state.mages,'yellow3');
        let mage4friend = getItemById(state.mages,'yellow4');
        
        //Ищем центр нашей фигуры ("танк - плюс")
        let xPlus = Math.floor((mage1friend.xy.x+mage2friend.xy.x+mage3friend.xy.x+mage4friend.xy.x)/4);
        let yPlus = Math.floor((mage1friend.xy.y+mage2friend.xy.y+mage3friend.xy.y+mage4friend.xy.y)/4);
       
        let action = { id: this.id };
        
        let manaAllFriends=mage1friend.mana+mage2friend.mana+mage3friend.mana+mage4friend.mana;
        //mage4
        //не маны на каст, такн поехал вверх
        //пока что если уперся вверх и нет маны - капут
        if(manaAllFriends<FIREBALL_COST){
            action.type = ActionType.MOVE;
            action.dir = new Direction(0, -1);
        } else {       
            //если на своей позиции - стреляй, иначе иди на позицию
            if((mage4friend.xy.x==(xPlus))&&((mage4friend.xy.y==(yPlus+1)))){
                action.type = ActionType.CAST;
                action.spell = new FireballSpell();
                action.spell.dir = new Direction(0, 1);
            } else { if(mage4friend.xy.x!=(xPlus)){
                    if (mage4friend.xy.x>xPlus) {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(-1, 0);
                    } else {
                            action.type = ActionType.MOVE;
                            action.dir = new Direction(1, 0);
                    }}
                    if(mage4friend.xy.y!=(yPlus+1)){
                    if (mage4friend.xy.y>yPlus) {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(0, -1);
                    } else {
                        action.type = ActionType.MOVE;
                        action.dir = new Direction(0, 1);    
                    }}            
            }
        }
        return action;
    }
}
