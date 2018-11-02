 class LoadingUI extends egret.Sprite {
	private loadingBG: egret.Bitmap;
    private loadingBar: egret.Bitmap;
    private textField: egret.TextField;
    private loadingIcon: egret.Bitmap;

	public constructor() {
        super();
        this.createView();
	}

    private createView(): void {
       this.loadingBG = new egret.Bitmap();
        this.loadingBG.texture = RES.getRes('5p_bg_jpg');
        this.loadingBG.width = 1920;
        this.loadingBG.height = 1260;
        this.addChild(this.loadingBG);
        this.loadingIcon = new egret.Bitmap();
        this.loadingIcon.texture = RES.getRes('5p_loadingbar_zero_png');
        this.loadingIcon.width = 1575;
        this.loadingIcon.y = 1050;
        this.loadingIcon.x = 165;
        this.addChild(this.loadingIcon);

        this.loadingBar = new egret.Bitmap();
        this.loadingBar.texture = RES.getRes('5p_loadingbar_full_png');
        this.loadingBar.y = 1050;
        this.loadingBar.x = 165;
        this.loadingBar.width = 1575;
        this.addChild(this.loadingBar);

        this.textField = new egret.TextField();
        this.textField.width = 675;
        this.textField.y = 1135;
        this.textField.x = 1425;
        this.textField.size = 35;
        this.textField.textAlign = "center";
        this.addChild(this.textField);
    }
    
	public setProgress(current: number, total: number): void {
        this.loadingBar.width = current / total * 1575;
        this.textField.text = `${(current / total * 100).toFixed(1)}%`;
    }
}