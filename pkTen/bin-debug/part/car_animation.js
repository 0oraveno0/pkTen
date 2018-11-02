var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var car_animation = (function (_super) {
    __extends(car_animation, _super);
    function car_animation() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/custom_skin/car_animation.exml";
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        return _this;
    }
    car_animation.prototype.childrenCreated = function () {
    };
    //播放
    car_animation.prototype.play = function (onComplete) {
        this.start.addEventListener(egret.Event.COMPLETE, onComplete, this);
        this.start.addEventListener(egret.Event.COMPLETE, this.onTweenGroupComplete, this);
        this.start.play();
    };
    //停止
    car_animation.prototype.stop = function () {
        this.start.stop();
    };
    //动画播放完成
    car_animation.prototype.onTweenGroupComplete = function () {
        if (this.parent != null) {
            this.parent.removeChild(this);
        }
        this.start.removeEventListener(egret.Event.COMPLETE, this.onTweenGroupComplete, this);
        this.dispatchEvent(new egret.Event(egret.Event.COMPLETE));
    };
    return car_animation;
}(eui.Component));
__reflect(car_animation.prototype, "car_animation");
//# sourceMappingURL=car_animation.js.map