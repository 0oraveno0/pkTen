class resultAnimation extends eui.Component{
        private start:egret.tween.TweenGroup;   //开场动画
        public p3_rank_1:eui.Image;
        public p3_rank_2:eui.Image;
        public p3_rank_3:eui.Image;
        public image:eui.Image;
        public image0:eui.Image;
        public image1:eui.Image;
        public p3_rank:eui.Group;
        public p3_up_id:eui.Label;
        public p3_up_timer:eui.Label;
        public record_btn:eui.Button;
        public mute_toggle:eui.Image;

        public constructor() {
                super();
				this.skinName = "resource/custom_skin/result_animation.exml";
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