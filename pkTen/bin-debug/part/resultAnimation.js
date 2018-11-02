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
var resultAnimation = (function (_super) {
    __extends(resultAnimation, _super);
    function resultAnimation() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/custom_skin/result_animation.exml";
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        return _this;
    }
    resultAnimation.prototype.childrenCreated = function () {
    };
    //播放
    resultAnimation.prototype.play = function (onComplete) {
        this.start.addEventListener(egret.Event.COMPLETE, onComplete, this);
        this.start.addEventListener(egret.Event.COMPLETE, this.onTweenGroupComplete, this);
        this.start.play();
    };
    //停止
    resultAnimation.prototype.stop = function () {
        this.start.stop();
    };
    //动画播放完成
    resultAnimation.prototype.onTweenGroupComplete = function () {
        if (this.parent != null) {
            this.parent.removeChild(this);
        }
        this.start.removeEventListener(egret.Event.COMPLETE, this.onTweenGroupComplete, this);
        this.dispatchEvent(new egret.Event(egret.Event.COMPLETE));
    };
    return resultAnimation;
}(eui.Component));
__reflect(resultAnimation.prototype, "resultAnimation");
//# sourceMappingURL=resultAnimation.js.map