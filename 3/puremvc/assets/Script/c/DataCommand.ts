import DataProxy from "../m/DataProxy";

//控制
export default class DataCommand extends puremvc.SimpleCommand{
    public execute(notification:puremvc.INotification){
        // //对数据进行操作
        // let dataPro = puremvc.Facade.getInstance("gameRoot").retrieveProxy(DataProxy.NAME) as DataProxy;
        // dataPro.addLevel(10)
        switch(notification.getName()){
            case "Reg_StartDataCommand":
                console.log("====="+notification.getBody());
                let jsonObject = notification.getBody();
                console.log("====="+jsonObject.data);
                break;
        }
    }
}