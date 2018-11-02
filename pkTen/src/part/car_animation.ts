class car_animation extends eui.Component{
        private start:egret.tween.TweenGroup;   //开场动画
 
        public constructor() {
                super();
				this.skinName = "resource/custom_skin/car_animation.exml";
                this.percentWidth = 100;
                this.percentHeight = 100;
        }
 
        public childrenCreated(){
 
        }
 
        //播放
        public play(onComplete){
                this.start.addEventListener(egret.Event.COMPLETE, onComplete, this);
                this.start.addEventListener(egret.Event.COMPLETE, this.onTweenGroupComplete, this);
        		this.start.play();
        }
 
        //停止
        public stop(){
            this.start.stop();
        }
  
    //动画播放完成
    private onTweenGroupComplete(): void {
        if(this.parent != null){
            this.parent.removeChild(this);
        }
        this.start.removeEventListener(egret.Event.COMPLETE, this.onTweenGroupComplete, this);
        this.dispatchEvent(new egret.Event(egret.Event.COMPLETE));
    }
 
}