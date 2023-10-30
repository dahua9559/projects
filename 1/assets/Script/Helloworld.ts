const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.Sprite)
    sp: cc.Sprite = null;
    protected onLoad(): void {
        window['Helloworld'] = this;
    }

    start() {
        // init logic
        this.label.string = this.text;
    }

    onClick() {
        if (cc.sys.isNative) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "onFacebook", "()V");
            }
        }
    }

    public getJson(str: string) {
        console.log("str====" + str);
        let json = JSON.parse(str);
        console.log("json" + json['avatar']);
        console.log("json" + json['name']);
        let self = this;
        //加载操作
        cc.assetManager.loadRemote(json['avatar'], { ext: '.png' }, (error: Error, texture: cc.Texture2D) => {
            if (error) {
                return;
            }
            self.sp.spriteFrame = new cc.SpriteFrame(texture);
        })

        self.label.string = json['name'];
    }
}
