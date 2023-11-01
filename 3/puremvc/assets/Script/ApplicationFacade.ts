import DataCommand from "./c/DataCommand";
import DataMediator from './v/DataMediator';
import DataProxy from "./m/DataProxy";
import NetMgr from "./mgr/NetMgr";
import ConstMgr from "./mgr/ConstMgr";
/**
 * 全局控制类
 */
export default class ApplicationFacade extends puremvc.Facade {
    public constructor(gameRoot: cc.Node) {
        super("gameRoot");
        
        //进行注册
        this.registerCommand("Reg_StartDataCommand", DataCommand);
        this.registerMediator(new DataMediator(gameRoot)); //显示类
        this.registerProxy(DataProxy.getInstance());
    }
}