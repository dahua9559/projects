// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import uitls from "../toop/uitls";
import ConstMgr from "./ConstMgr";


const { ccclass, property } = cc._decorator;

//状态的数据
enum State {
    Disconnected = 0,
    Connecting = 1,
    Connected = 2,
}

@ccclass
export default class NetMgr extends cc.Component {
    //单例模式
    public static Intance: NetMgr = null as unknown as NetMgr;
    //url
    private url: string = ConstMgr.serverUrl;
    //初始化状态
    private state: number = State.Disconnected;
    //websocket对象
    private sock: WebSocket = null;

    onLoad() {
        //单例模式
        if (NetMgr.Intance == null) {
            NetMgr.Intance = this;
        } else {
            this.destroy();
            return;
        }
        this.state = State.Disconnected;
    }

    /**
     * 初始化
     * @param url 对应的url
     */
    public Init(url: string): void {
        this.url = url;
        this.state = State.Disconnected;
    }

    /**
     * 发送数据
     * @param data_arraybuf 数据的封装 
     */
    public send_data(data_arraybuf: string) {
        if (this.state === State.Connected && this.sock) {
            this.sock.send(data_arraybuf);
        }
    }

    //链接
    private connect_to_server(): void {
        //是否已经链接到了	
        if (this.state !== State.Disconnected) {
            return;
        }
        console.log("connect_to_server" + this.state);

        this.state = State.Connecting;//正在做链接
        this.sock = new WebSocket(this.url);
        this.sock.binaryType = "arraybuffer";

        //事件波分
        this.sock.onopen = this._on_opened.bind(this);
        this.sock.onmessage = this.on_recv_data.bind(this);
        this.sock.onclose = this._on_socket_close.bind(this);
        this.sock.onerror = this._on_socket_err.bind(this);
    }

    //进入链接的时候
    private _on_opened() {
        this.state = State.Connected;//链接成功
        console.log("链接服务器成功");

        let data = {
            username: "sanzhixiong",
            age: 22
        }
        const plainText = 'Hello World';
        const secretKey = 'sQPoC/1do9BZMkg8I5c09A==';
        const cipherText = uitls.encryptByAES(plainText, secretKey);
        console.log(`加密后的密文为：${cipherText}`);
        this.send_data(cipherText);
    }

    //收到数据
    private on_recv_data(res: any) {
        console.log("获得数据" + res.data);
        const secretKey = 'sQPoC/1do9BZMkg8I5c09A==';
        let datas = uitls.decryptByAES(res.data, secretKey);
        puremvc.Facade.getInstance("gameRoot").sendNotification("Reg_StartDataCommand", { data: datas });
    }

    //服务器关闭的时候调用
    private _on_socket_close() {
        this.close_socket();
    }

    private _on_socket_err() {
        this.close_socket();
    }

    public close_socket() {
        if (this.state === State.Connected) {
            if (this.sock != null) {
                this.sock.close();
                this.sock = null;
            }
        }
        this.state = State.Disconnected;
    }

    protected update(dt: number): void {
        if (this.state !== State.Disconnected) {
            return;
        }
        console.log("链接");
        this.connect_to_server();
    }
}
