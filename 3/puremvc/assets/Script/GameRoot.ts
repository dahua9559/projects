// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import ApplicationFacade from "./ApplicationFacade";
import NetMgr from "./mgr/NetMgr";
const { ccclass, property } = cc._decorator;

@ccclass
export default class GameRoot extends cc.Component {

    start() {
        console.log("游戏开始")
        new ApplicationFacade(this.node);
    }
}
