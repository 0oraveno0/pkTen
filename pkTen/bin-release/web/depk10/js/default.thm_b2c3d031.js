window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","car_animation":"resource/eui_skins/car_animation.exml"};generateEUI.paths['resource/custom_skin/car_animation.exml'] = window.car_animationSkin = (function (_super) {
	__extends(car_animationSkin, _super);
	function car_animationSkin() {
		_super.call(this);
		this.skinParts = ["start","car_0","car_1","car_2","car_3","car_4","car_5","car_6","car_7","car_8","car_9"];
		
		this.height = 12650;
		this.width = 1920;
		this.start_i();
		this._TweenGroup1_i();
		this.elementsContent = [this._Group3_i()];
		
		eui.Binding.$bindProperties(this, ["car_0"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0.87],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [0.87],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [61.2],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [-40.5],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, [901],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [-270],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, ["car_1"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0.87],[],this._Object5,"scaleX");
		eui.Binding.$bindProperties(this, [0.87],[],this._Object5,"scaleY");
		eui.Binding.$bindProperties(this, [251.5],[],this._Object5,"x");
		eui.Binding.$bindProperties(this, [-40.5],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object6,"scaleX");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object6,"scaleY");
		eui.Binding.$bindProperties(this, [919],[],this._Object6,"x");
		eui.Binding.$bindProperties(this, [-270],[],this._Object6,"y");
		eui.Binding.$bindProperties(this, ["car_2"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0.87],[],this._Object7,"scaleX");
		eui.Binding.$bindProperties(this, [0.87],[],this._Object7,"scaleY");
		eui.Binding.$bindProperties(this, [440.75],[],this._Object7,"x");
		eui.Binding.$bindProperties(this, [-40.5],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object8,"scaleX");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object8,"scaleY");
		eui.Binding.$bindProperties(this, [932],[],this._Object8,"x");
		eui.Binding.$bindProperties(this, [-270],[],this._Object8,"y");
		eui.Binding.$bindProperties(this, ["car_3"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0.87],[],this._Object9,"scaleX");
		eui.Binding.$bindProperties(this, [0.87],[],this._Object9,"scaleY");
		eui.Binding.$bindProperties(this, [639.59],[],this._Object9,"x");
		eui.Binding.$bindProperties(this, [-40.5],[],this._Object9,"y");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, [940],[],this._Object10,"x");
		eui.Binding.$bindProperties(this, [-270],[],this._Object10,"y");
		eui.Binding.$bindProperties(this, ["car_4"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0.87],[],this._Object11,"scaleX");
		eui.Binding.$bindProperties(this, [0.87],[],this._Object11,"scaleY");
		eui.Binding.$bindProperties(this, [817.2],[],this._Object11,"x");
		eui.Binding.$bindProperties(this, [-40.5],[],this._Object11,"y");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object12,"scaleX");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object12,"scaleY");
		eui.Binding.$bindProperties(this, [950],[],this._Object12,"x");
		eui.Binding.$bindProperties(this, [-270],[],this._Object12,"y");
		eui.Binding.$bindProperties(this, ["car_5"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [0.87],[],this._Object13,"scaleX");
		eui.Binding.$bindProperties(this, [0.87],[],this._Object13,"scaleY");
		eui.Binding.$bindProperties(this, [980.35],[],this._Object13,"x");
		eui.Binding.$bindProperties(this, [-40.5],[],this._Object13,"y");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object14,"scaleX");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object14,"scaleY");
		eui.Binding.$bindProperties(this, [965],[],this._Object14,"x");
		eui.Binding.$bindProperties(this, [-270],[],this._Object14,"y");
		eui.Binding.$bindProperties(this, ["car_6"],[0],this._TweenItem7,"target");
		eui.Binding.$bindProperties(this, [0.87],[],this._Object15,"scaleX");
		eui.Binding.$bindProperties(this, [0.87],[],this._Object15,"scaleY");
		eui.Binding.$bindProperties(this, [1154.1],[],this._Object15,"x");
		eui.Binding.$bindProperties(this, [-40.5],[],this._Object15,"y");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object16,"scaleX");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object16,"scaleY");
		eui.Binding.$bindProperties(this, [976],[],this._Object16,"x");
		eui.Binding.$bindProperties(this, [-270],[],this._Object16,"y");
		eui.Binding.$bindProperties(this, ["car_7"],[0],this._TweenItem8,"target");
		eui.Binding.$bindProperties(this, [0.87],[],this._Object17,"scaleX");
		eui.Binding.$bindProperties(this, [0.87],[],this._Object17,"scaleY");
		eui.Binding.$bindProperties(this, [1346.55],[],this._Object17,"x");
		eui.Binding.$bindProperties(this, [-40.5],[],this._Object17,"y");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object18,"scaleX");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object18,"scaleY");
		eui.Binding.$bindProperties(this, [990],[],this._Object18,"x");
		eui.Binding.$bindProperties(this, [-270],[],this._Object18,"y");
		eui.Binding.$bindProperties(this, ["car_8"],[0],this._TweenItem9,"target");
		eui.Binding.$bindProperties(this, [0.87],[],this._Object19,"scaleX");
		eui.Binding.$bindProperties(this, [0.87],[],this._Object19,"scaleY");
		eui.Binding.$bindProperties(this, [1539.85],[],this._Object19,"x");
		eui.Binding.$bindProperties(this, [-40.5],[],this._Object19,"y");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object20,"scaleX");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object20,"scaleY");
		eui.Binding.$bindProperties(this, [989],[],this._Object20,"x");
		eui.Binding.$bindProperties(this, [-270],[],this._Object20,"y");
		eui.Binding.$bindProperties(this, ["car_9"],[0],this._TweenItem10,"target");
		eui.Binding.$bindProperties(this, [0.87],[],this._Object21,"scaleX");
		eui.Binding.$bindProperties(this, [0.87],[],this._Object21,"scaleY");
		eui.Binding.$bindProperties(this, [1717.45],[],this._Object21,"x");
		eui.Binding.$bindProperties(this, [-40.5],[],this._Object21,"y");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object22,"scaleX");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object22,"scaleY");
		eui.Binding.$bindProperties(this, [997],[],this._Object22,"x");
		eui.Binding.$bindProperties(this, [-270],[],this._Object22,"y");
	}
	var _proto = car_animationSkin.prototype;

	_proto.start_i = function () {
		var t = new egret.tween.TweenGroup();
		this.start = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i(),this._TweenItem6_i(),this._TweenItem7_i(),this._TweenItem8_i(),this._TweenItem9_i(),this._TweenItem10_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To3_i(),this._To4_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set3_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set4_i(),this._To7_i(),this._To8_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set5_i(),this._To9_i(),this._To10_i()];
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set6_i(),this._To11_i(),this._To12_i()];
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._TweenItem7_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem7 = t;
		t.paths = [this._Set7_i(),this._To13_i(),this._To14_i()];
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._To14_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._TweenItem8_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem8 = t;
		t.paths = [this._To15_i(),this._To16_i()];
		return t;
	};
	_proto._To15_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._To16_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._TweenItem9_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem9 = t;
		t.paths = [this._Set8_i(),this._To17_i(),this._To18_i()];
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To17_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object19_i();
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		this._Object19 = t;
		return t;
	};
	_proto._To18_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object20_i();
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		this._Object20 = t;
		return t;
	};
	_proto._TweenItem10_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem10 = t;
		t.paths = [this._Set9_i(),this._To19_i(),this._To20_i()];
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To19_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object21_i();
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		this._Object21 = t;
		return t;
	};
	_proto._To20_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.props = this._Object22_i();
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		this._Object22 = t;
		return t;
	};
	_proto._TweenGroup1_i = function () {
		var t = new egret.tween.TweenGroup();
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 1260;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchThrough = true;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group2_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 1260;
		t.touchThrough = true;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 115;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchThrough = true;
		t.width = 1920;
		t.x = 0;
		t.y = 890;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.car_0_i(),this.car_1_i(),this.car_2_i(),this.car_3_i(),this.car_4_i(),this.car_5_i(),this.car_6_i(),this.car_7_i(),this.car_8_i(),this.car_9_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.car_0_i = function () {
		var t = new eui.Image();
		this.car_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_car_10_png";
		t.width = 180;
		t.x = 7;
		t.y = 0;
		return t;
	};
	_proto.car_1_i = function () {
		var t = new eui.Image();
		this.car_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "1p_car_9_png";
		t.width = 180;
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto.car_2_i = function () {
		var t = new eui.Image();
		this.car_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "1p_car_8_png";
		t.width = 180;
		t.x = 400;
		t.y = 0;
		return t;
	};
	_proto.car_3_i = function () {
		var t = new eui.Image();
		this.car_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "1p_car_7_png";
		t.width = 180;
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.car_4_i = function () {
		var t = new eui.Image();
		this.car_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "1p_car_6_png";
		t.width = 180;
		t.x = 767;
		t.y = 0;
		return t;
	};
	_proto.car_5_i = function () {
		var t = new eui.Image();
		this.car_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "1p_car_5_png";
		t.width = 180;
		t.x = 961;
		t.y = 0;
		return t;
	};
	_proto.car_6_i = function () {
		var t = new eui.Image();
		this.car_6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "1p_car_4_png";
		t.width = 180;
		t.x = 1151;
		t.y = 0;
		return t;
	};
	_proto.car_7_i = function () {
		var t = new eui.Image();
		this.car_7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "1p_car_3_png";
		t.width = 180;
		t.x = 1343;
		t.y = 0;
		return t;
	};
	_proto.car_8_i = function () {
		var t = new eui.Image();
		this.car_8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "1p_car_2_png";
		t.width = 180;
		t.x = 1536;
		t.y = 0;
		return t;
	};
	_proto.car_9_i = function () {
		var t = new eui.Image();
		this.car_9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "1p_car_1_png";
		t.width = 180;
		t.x = 1727;
		t.y = 0;
		return t;
	};
	return car_animationSkin;
})(eui.Skin);generateEUI.paths['resource/custom_skin/gameUISkin_v0.exml'] = window.gameUISkin_v0 = (function (_super) {
	__extends(gameUISkin_v0, _super);
	var gameUISkin_v0$Skin1 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin1, _super);
		function gameUISkin_v0$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","1p_records_button_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "1p_records_button_idle_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin1;
	})(eui.Skin);

	var gameUISkin_v0$Skin2 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin2, _super);
		function gameUISkin_v0$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","white_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "white_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin2;
	})(eui.Skin);

	var gameUISkin_v0$Skin3 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin3, _super);
		function gameUISkin_v0$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","4p_back_button_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "4p_back_button_idle_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin3;
	})(eui.Skin);

	var gameUISkin_v0$Skin4 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin4, _super);
		function gameUISkin_v0$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","confirm_button_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "confirm_button_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin4;
	})(eui.Skin);

	function gameUISkin_v0() {
		_super.call(this);
		this.skinParts = ["p1_light","p1_count_down_text","p1_count_down_img","p1_next_id","p1_next_timer","mute_toggle","record_btn","p1_rank","p1_car_gp","p1_record_rank","p1_record_td","p1_record_id","p1_record_date","play_btn","animation_child","in_game_gp","p2_sky","p2_mid_ground","p2_id_date","p2_rank","p2_mute_toggle","p2_ground","goalflag","stop_gp","car_gp","p2_stop_img","start_gp","p4_next_id","p4_next_timer","p4_mute_toggle","record_disable_btn","record_gp","init_image","notice_text","notice_btn","notice_gp"];
		
		this.height = 1260;
		this.width = 1920;
		this.elementsContent = [this._Group127_i()];
	}
	var _proto = gameUISkin_v0.prototype;

	_proto._Group127_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1260;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.in_game_gp_i(),this.start_gp_i(),this.record_gp_i(),this.init_image_i(),this.notice_gp_i()];
		return t;
	};
	_proto.in_game_gp_i = function () {
		var t = new eui.Group();
		this.in_game_gp = t;
		t.height = 1260;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group5_i(),this.p1_count_down_text_i(),this.p1_count_down_img_i(),this._Group17_i(),this.p1_car_gp_i(),this._Group21_i(),this.play_btn_i(),this.animation_child_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1260;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_bg_jpg";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 685;
		t.x = 615;
		t.y = 115;
		t.elementsContent = [this._Image2_i(),this.p1_light_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_countdownlight_png";
		t.width = 685;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.p1_light_i = function () {
		var t = new eui.Group();
		this.p1_light = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 276.28;
		t.width = 568.81;
		t.x = 52.22;
		t.y = 181.7;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57.89;
		t.width = 574.06;
		t.x = 52.47;
		t.y = 229;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "1p_light_dim_png";
		t.width = 53;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "1p_light_dim_png";
		t.width = 52;
		t.x = 132;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "1p_light_dim_png";
		t.width = 53;
		t.x = 258;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "1p_light_dim_png";
		t.width = 53;
		t.x = 387;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "1p_light_dim_png";
		t.width = 53;
		t.x = 511;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57.89;
		t.width = 574.06;
		t.x = 62.47;
		t.y = 239;
		t.layout = this._BasicLayout2_i();
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._BasicLayout2_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "1p_light_dim_png";
		t.width = 53;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "1p_light_dim_png";
		t.width = 52;
		t.x = 132;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "1p_light_dim_png";
		t.width = 53;
		t.x = 258;
		t.y = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "1p_light_dim_png";
		t.width = 53;
		t.x = 387;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "1p_light_dim_png";
		t.width = 53;
		t.x = 511;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57.89;
		t.width = 574.06;
		t.x = 72.47;
		t.y = 249;
		t.layout = this._BasicLayout3_i();
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i()];
		return t;
	};
	_proto._BasicLayout3_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "1p_light_dim_png";
		t.width = 53;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "1p_light_dim_png";
		t.width = 52;
		t.x = 132;
		t.y = 0;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "1p_light_dim_png";
		t.width = 53;
		t.x = 258;
		t.y = 0;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "1p_light_dim_png";
		t.width = 53;
		t.x = 387;
		t.y = 0;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "1p_light_dim_png";
		t.width = 53;
		t.x = 511;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57.89;
		t.width = 574.06;
		t.x = 82.47;
		t.y = 259;
		t.layout = this._BasicLayout4_i();
		t.elementsContent = [this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i()];
		return t;
	};
	_proto._BasicLayout4_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "1p_light_dim_png";
		t.width = 53;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "1p_light_dim_png";
		t.width = 52;
		t.x = 132;
		t.y = 0;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "1p_light_dim_png";
		t.width = 53;
		t.x = 258;
		t.y = 0;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "1p_light_dim_png";
		t.width = 53;
		t.x = 387;
		t.y = 0;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "1p_light_dim_png";
		t.width = 53;
		t.x = 511;
		t.y = 0;
		return t;
	};
	_proto.p1_count_down_text_i = function () {
		var t = new eui.Label();
		this.p1_count_down_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 110;
		t.size = 120;
		t.text = "100";
		t.textAlign = "center";
		t.textColor = 0xf7b231;
		t.visible = false;
		t.width = 215;
		t.x = 845;
		t.y = 628;
		return t;
	};
	_proto.p1_count_down_img_i = function () {
		var t = new eui.Image();
		this.p1_count_down_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 325;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cdn_9_png";
		t.visible = false;
		t.width = 242.91;
		t.x = 837.0000000000001;
		t.y = 513.0000000000001;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 290;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group6_i(),this.p1_rank_i()];
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 220;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image23_i(),this._Image24_i(),this._Image25_i(),this.p1_next_id_i(),this.p1_next_timer_i(),this.mute_toggle_i(),this.record_btn_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 220;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_display_png";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 165.45;
		t.source = "1p_button_right_idle_png";
		t.width = 229.09;
		t.x = 1680;
		t.y = 15;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 165.45;
		t.source = "1p_button_left_idle_png";
		t.width = 229.09;
		t.x = 10;
		t.y = 15;
		return t;
	};
	_proto.p1_next_id_i = function () {
		var t = new eui.Label();
		this.p1_next_id = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 35;
		t.text = "未有结果";
		t.textAlign = "center";
		t.width = 365;
		t.x = 255.46;
		t.y = 85;
		return t;
	};
	_proto.p1_next_timer_i = function () {
		var t = new eui.Label();
		this.p1_next_timer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 35;
		t.text = "未有结果";
		t.textAlign = "left";
		t.width = 280;
		t.x = 1354.84;
		t.y = 82.87;
		return t;
	};
	_proto.mute_toggle_i = function () {
		var t = new eui.Image();
		this.mute_toggle = t;
		t.height = 165;
		t.source = "mute_button_off_png";
		t.touchEnabled = true;
		t.width = 230;
		t.x = 1680;
		t.y = 15;
		return t;
	};
	_proto.record_btn_i = function () {
		var t = new eui.Button();
		this.record_btn = t;
		t.height = 165;
		t.label = "";
		t.width = 230;
		t.x = 10;
		t.y = 15;
		t.skinName = gameUISkin_v0$Skin1;
		return t;
	};
	_proto.p1_rank_i = function () {
		var t = new eui.Group();
		this.p1_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1920;
		t.x = 0;
		t.y = 190;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i(),this._Group12_i(),this._Group13_i(),this._Group14_i(),this._Group15_i(),this._Group16_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -35;
		t.paddingLeft = 20;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 220;
		t.x = 264;
		t.y = 60;
		t.elementsContent = [this._Image26_i(),this._Image27_i()];
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 191;
		t.x = 18;
		t.y = 16;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_10_png";
		t.width = 72;
		t.x = 83;
		t.y = 23;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 220;
		t.x = 274;
		t.y = 70;
		t.elementsContent = [this._Image28_i(),this._Image29_i()];
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 191;
		t.x = 18;
		t.y = 16;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_9_png";
		t.width = 72;
		t.x = 83;
		t.y = 23;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 220;
		t.x = 284;
		t.y = 80;
		t.elementsContent = [this._Image30_i(),this._Image31_i()];
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 191;
		t.x = 18;
		t.y = 16;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_8_png";
		t.width = 72;
		t.x = 83;
		t.y = 23;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 220;
		t.x = 294;
		t.y = 90;
		t.elementsContent = [this._Image32_i(),this._Image33_i()];
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 191;
		t.x = 18;
		t.y = 16;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_7_png";
		t.width = 72;
		t.x = 83;
		t.y = 23;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 220;
		t.x = 304;
		t.y = 100;
		t.elementsContent = [this._Image34_i(),this._Image35_i()];
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 191;
		t.x = 18;
		t.y = 16;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_6_png";
		t.width = 72;
		t.x = 83;
		t.y = 23;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 220;
		t.x = 314;
		t.y = 110;
		t.elementsContent = [this._Image36_i(),this._Image37_i()];
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 191;
		t.x = 18;
		t.y = 16;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_5_png";
		t.width = 72;
		t.x = 83;
		t.y = 23;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 220;
		t.x = 324;
		t.y = 120;
		t.elementsContent = [this._Image38_i(),this._Image39_i()];
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 191;
		t.x = 18;
		t.y = 16;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_4_png";
		t.width = 72;
		t.x = 83;
		t.y = 23;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 220;
		t.x = 334;
		t.y = 130;
		t.elementsContent = [this._Image40_i(),this._Image41_i()];
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 191;
		t.x = 18;
		t.y = 16;
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_3_png";
		t.width = 72;
		t.x = 83;
		t.y = 23;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 220;
		t.x = 344;
		t.y = 140;
		t.elementsContent = [this._Image42_i(),this._Image43_i()];
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 191;
		t.x = 18;
		t.y = 16;
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_2_png";
		t.width = 72;
		t.x = 83;
		t.y = 23;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 220;
		t.x = 354;
		t.y = 150;
		t.elementsContent = [this._Image44_i(),this._Image45_i()];
		return t;
	};
	_proto._Image44_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 191;
		t.x = 18;
		t.y = 16;
		return t;
	};
	_proto._Image45_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_1_png";
		t.width = 72;
		t.x = 83;
		t.y = 23;
		return t;
	};
	_proto.p1_car_gp_i = function () {
		var t = new eui.Group();
		this.p1_car_gp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 115;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1920;
		t.x = 0;
		t.y = 890;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Image46_i(),this._Image47_i(),this._Image48_i(),this._Image49_i(),this._Image50_i(),this._Image51_i(),this._Image52_i(),this._Image53_i(),this._Image54_i(),this._Image55_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 12;
		t.paddingLeft = 7;
		return t;
	};
	_proto._Image46_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "1p_car_10_png";
		t.width = 180;
		t.x = 1730;
		t.y = 10;
		return t;
	};
	_proto._Image47_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "1p_car_9_png";
		t.width = 180;
		t.x = 1740;
		t.y = 20;
		return t;
	};
	_proto._Image48_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "1p_car_8_png";
		t.width = 180;
		t.x = 1750;
		t.y = 30;
		return t;
	};
	_proto._Image49_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "1p_car_7_png";
		t.width = 180;
		t.x = 1760;
		t.y = 40;
		return t;
	};
	_proto._Image50_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "1p_car_6_png";
		t.width = 180;
		t.x = 1770;
		t.y = 50;
		return t;
	};
	_proto._Image51_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "1p_car_5_png";
		t.width = 180;
		t.x = 1780;
		t.y = 60;
		return t;
	};
	_proto._Image52_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "1p_car_4_png";
		t.width = 180;
		t.x = 1790;
		t.y = 70;
		return t;
	};
	_proto._Image53_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "1p_car_3_png";
		t.width = 180;
		t.x = 1800;
		t.y = 80;
		return t;
	};
	_proto._Image54_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "1p_car_2_png";
		t.width = 180;
		t.x = 1810;
		t.y = 90;
		return t;
	};
	_proto._Image55_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "1p_car_1_png";
		t.width = 180;
		t.x = 1820;
		t.y = 100;
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1880;
		t.x = 15;
		t.y = 1130;
		t.layout = this._BasicLayout5_i();
		t.elementsContent = [this._Group18_i(),this._Group19_i(),this._Group20_i()];
		return t;
	};
	_proto._BasicLayout5_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 680;
		t.x = 600;
		t.y = 0;
		t.elementsContent = [this._Image56_i(),this._Label1_i(),this.p1_record_rank_i()];
		return t;
	};
	_proto._Image56_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.source = "1p_lowbar_display_png";
		t.width = 680;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 35;
		t.text = "冠亚军和";
		t.width = 145;
		t.x = 268;
		t.y = 13;
		return t;
	};
	_proto.p1_record_rank_i = function () {
		var t = new eui.Label();
		this.p1_record_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 40;
		t.text = "       未有结果";
		t.width = 400;
		t.x = 188;
		t.y = 65;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 680;
		t.x = 1200;
		t.y = 0;
		t.elementsContent = [this._Image57_i(),this._Label2_i(),this.p1_record_td_i()];
		return t;
	};
	_proto._Image57_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.source = "1p_lowbar_display_png";
		t.width = 680;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.size = 35;
		t.text = "1-5龙虎";
		t.width = 145;
		t.x = 304;
		t.y = 11;
		return t;
	};
	_proto.p1_record_td_i = function () {
		var t = new eui.Label();
		this.p1_record_td = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 40;
		t.text = "               未有结果";
		t.width = 500;
		t.x = 115;
		t.y = 65;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 680;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image58_i(),this.p1_record_id_i(),this.p1_record_date_i()];
		return t;
	};
	_proto._Image58_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.source = "1p_lowbar_issuenumber_display_png";
		t.width = 680;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.p1_record_id_i = function () {
		var t = new eui.Label();
		this.p1_record_id = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 35;
		t.text = "期号                  未有结果";
		t.width = 580;
		t.x = 96;
		t.y = 13;
		return t;
	};
	_proto.p1_record_date_i = function () {
		var t = new eui.Label();
		this.p1_record_date = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.size = 40;
		t.text = "未有结果";
		t.textAlign = "left";
		t.verticalAlign = "top";
		t.width = 680.9;
		t.x = 84;
		t.y = 66.03;
		return t;
	};
	_proto.play_btn_i = function () {
		var t = new eui.Button();
		this.play_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1;
		t.label = "";
		t.visible = false;
		t.width = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = gameUISkin_v0$Skin2;
		return t;
	};
	_proto.animation_child_i = function () {
		var t = new eui.Group();
		this.animation_child = t;
		t.height = 1260;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchThrough = true;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.start_gp_i = function () {
		var t = new eui.Group();
		this.start_gp = t;
		t.height = 1260;
		t.visible = false;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group34_i(),this._Group46_i(),this.p2_stop_img_i()];
		return t;
	};
	_proto._Group34_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 290;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group23_i(),this.p2_rank_i(),this._Image87_i(),this.p2_mute_toggle_i()];
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 345;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image59_i(),this.p2_sky_i(),this.p2_mid_ground_i(),this._Image64_i(),this._Group22_i(),this.p2_id_date_i()];
		return t;
	};
	_proto._Image59_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 345;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "2p_background_jpg";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.p2_sky_i = function () {
		var t = new eui.Group();
		this.p2_sky = t;
		t.height = 345;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image60_i(),this._Image61_i()];
		return t;
	};
	_proto._Image60_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 285;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "2p_midground2_png";
		t.width = 2310;
		t.x = -390;
		t.y = 0;
		return t;
	};
	_proto._Image61_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 285;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "2p_midground2_png";
		t.width = 2310;
		t.x = -2700;
		t.y = 0;
		return t;
	};
	_proto.p2_mid_ground_i = function () {
		var t = new eui.Group();
		this.p2_mid_ground = t;
		t.height = 345;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image62_i(),this._Image63_i()];
		return t;
	};
	_proto._Image62_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 335;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "2p_midground1_fix_png";
		t.width = 1920;
		t.x = 965;
		t.y = 0;
		return t;
	};
	_proto._Image63_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 335;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "2p_midground1_fix_png";
		t.width = 1920;
		t.x = -960;
		t.y = 0;
		return t;
	};
	_proto._Image64_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 175;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "2p_topbar_logo_png";
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 980;
		t.x = 700;
		t.y = 125;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this._Image65_i(),this._Image66_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		return t;
	};
	_proto._Image65_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.source = "2p_topbar_display_png";
		t.width = 485.27;
		t.x = 381;
		t.y = 29;
		return t;
	};
	_proto._Image66_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.source = "2p_topbar_display_png";
		t.width = 485.27;
		t.x = 391;
		t.y = 39;
		return t;
	};
	_proto.p2_id_date_i = function () {
		var t = new eui.Group();
		this.p2_id_date = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 980;
		t.x = 700;
		t.y = 125;
		t.layout = this._HorizontalLayout4_i();
		t.elementsContent = [this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.height = 60;
		t.name = "id";
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 485;
		t.x = 6;
		t.y = 1;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.height = 60;
		t.name = "date";
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 485;
		t.x = 16;
		t.y = 11;
		return t;
	};
	_proto.p2_rank_i = function () {
		var t = new eui.Group();
		this.p2_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1595;
		t.x = 322.35;
		t.y = 13.45;
		t.layout = this._HorizontalLayout5_i();
		t.elementsContent = [this._Group24_i(),this._Group25_i(),this._Group26_i(),this._Group27_i(),this._Group28_i(),this._Group29_i(),this._Group30_i(),this._Group31_i(),this._Group32_i(),this._Group33_i()];
		return t;
	};
	_proto._HorizontalLayout5_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -20;
		t.paddingLeft = 0;
		return t;
	};
	_proto._Group24_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 159;
		t.x = 58.20999999999998;
		t.y = -49.7;
		t.elementsContent = [this._Image67_i(),this._Image68_i()];
		return t;
	};
	_proto._Image67_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 159;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image68_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_2_png";
		t.width = 72;
		t.x = 42;
		t.y = 15;
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 159;
		t.x = 68.20999999999998;
		t.y = -39.7;
		t.elementsContent = [this._Image69_i(),this._Image70_i()];
		return t;
	};
	_proto._Image69_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 159;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image70_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_2_png";
		t.width = 72;
		t.x = 42;
		t.y = 15;
		return t;
	};
	_proto._Group26_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 159;
		t.x = 78.20999999999998;
		t.y = -29.700000000000003;
		t.elementsContent = [this._Image71_i(),this._Image72_i()];
		return t;
	};
	_proto._Image71_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 159;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image72_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_2_png";
		t.width = 72;
		t.x = 42;
		t.y = 15;
		return t;
	};
	_proto._Group27_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 159;
		t.x = 88.20999999999998;
		t.y = -19.700000000000003;
		t.elementsContent = [this._Image73_i(),this._Image74_i()];
		return t;
	};
	_proto._Image73_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 159;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image74_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_2_png";
		t.width = 72;
		t.x = 42;
		t.y = 15;
		return t;
	};
	_proto._Group28_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 159;
		t.x = 98.20999999999998;
		t.y = -9.700000000000003;
		t.elementsContent = [this._Image75_i(),this._Image76_i()];
		return t;
	};
	_proto._Image75_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 159;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image76_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_2_png";
		t.width = 72;
		t.x = 42;
		t.y = 15;
		return t;
	};
	_proto._Group29_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 159;
		t.x = 108.20999999999998;
		t.y = 0.29999999999999716;
		t.elementsContent = [this._Image77_i(),this._Image78_i()];
		return t;
	};
	_proto._Image77_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 159;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image78_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_2_png";
		t.width = 72;
		t.x = 42;
		t.y = 15;
		return t;
	};
	_proto._Group30_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 159;
		t.x = 118.20999999999998;
		t.y = 10.299999999999997;
		t.elementsContent = [this._Image79_i(),this._Image80_i()];
		return t;
	};
	_proto._Image79_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 159;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image80_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_2_png";
		t.width = 72;
		t.x = 42;
		t.y = 15;
		return t;
	};
	_proto._Group31_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 159;
		t.x = 128.20999999999998;
		t.y = 20.299999999999997;
		t.elementsContent = [this._Image81_i(),this._Image82_i()];
		return t;
	};
	_proto._Image81_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 159;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image82_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_2_png";
		t.width = 72;
		t.x = 42;
		t.y = 15;
		return t;
	};
	_proto._Group32_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 159;
		t.x = 138.20999999999998;
		t.y = 30.299999999999997;
		t.elementsContent = [this._Image83_i(),this._Image84_i()];
		return t;
	};
	_proto._Image83_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 159;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image84_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_2_png";
		t.width = 72;
		t.x = 42;
		t.y = 15;
		return t;
	};
	_proto._Group33_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 159;
		t.x = 148.20999999999998;
		t.y = 40.3;
		t.elementsContent = [this._Image85_i(),this._Image86_i()];
		return t;
	};
	_proto._Image85_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 159;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image86_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_2_png";
		t.width = 72;
		t.x = 42;
		t.y = 15;
		return t;
	};
	_proto._Image87_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 165.45;
		t.source = "1p_button_right_idle_png";
		t.width = 229.09;
		t.x = 1680;
		t.y = 15;
		return t;
	};
	_proto.p2_mute_toggle_i = function () {
		var t = new eui.Image();
		this.p2_mute_toggle = t;
		t.height = 165;
		t.source = "2p_mute_button_mute_png";
		t.touchEnabled = true;
		t.width = 230;
		t.x = 1680;
		t.y = 15;
		return t;
	};
	_proto._Group46_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 975;
		t.width = 1920;
		t.x = 0;
		t.y = 290;
		t.elementsContent = [this.p2_ground_i(),this.stop_gp_i(),this.car_gp_i()];
		return t;
	};
	_proto.p2_ground_i = function () {
		var t = new eui.Group();
		this.p2_ground = t;
		t.height = 975;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1920;
		t.x = 1.52;
		t.y = 0;
		t.elementsContent = [this._Image88_i(),this._Image89_i()];
		return t;
	};
	_proto._Image88_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 975;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "2p_foreground_jpg";
		t.width = 4600;
		t.x = -2680;
		t.y = 0;
		return t;
	};
	_proto._Image89_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 975;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "2p_foreground_jpg";
		t.width = 4600;
		t.x = -7260;
		t.y = 0;
		return t;
	};
	_proto.stop_gp_i = function () {
		var t = new eui.Group();
		this.stop_gp = t;
		t.anchorOffsetX = 490;
		t.anchorOffsetY = 0;
		t.height = 1125;
		t.width = 1430;
		t.x = -950;
		t.y = -160;
		t.elementsContent = [this._Image90_i(),this._Image91_i(),this._Group35_i(),this._Image93_i()];
		return t;
	};
	_proto._Image90_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 895.68;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "2p_goal_line_png";
		t.width = 87.57;
		t.x = 407.42999999999984;
		t.y = 211.46;
		return t;
	};
	_proto._Image91_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 754.53;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "p2_goall_line_PK10_png";
		t.width = 104.06;
		t.x = 259.01;
		t.y = 291.47;
		return t;
	};
	_proto._Group35_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 193;
		t.width = 185;
		t.x = 480;
		t.y = 0;
		t.elementsContent = [this._Image92_i(),this.goalflag_i()];
		return t;
	};
	_proto._Image92_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 178;
		t.source = "2p_goalflag_post_png";
		t.width = 13;
		t.x = 0;
		t.y = 15;
		return t;
	};
	_proto.goalflag_i = function () {
		var t = new eui.Image();
		this.goalflag = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 125;
		t.source = "2p_goalflag_1_png";
		t.width = 172;
		t.x = 13;
		t.y = 8;
		return t;
	};
	_proto._Image93_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 900;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "p2_1000m_line_PK10_png";
		t.width = 132;
		t.x = 1310;
		t.y = 214;
		return t;
	};
	_proto.car_gp_i = function () {
		var t = new eui.Group();
		this.car_gp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 975;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.layout = this._BasicLayout6_i();
		t.elementsContent = [this._Group36_i(),this._Group37_i(),this._Group38_i(),this._Group39_i(),this._Group40_i(),this._Group41_i(),this._Group42_i(),this._Group43_i(),this._Group44_i(),this._Group45_i()];
		return t;
	};
	_proto._BasicLayout6_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Group36_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 374;
		t.x = 1920;
		t.y = 12.02;
		t.elementsContent = [this._Image94_i(),this._Image95_i(),this._Image96_i(),this._Image97_i(),this._Image98_i(),this._Image99_i()];
		return t;
	};
	_proto._Image94_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "c";
		t.source = "2p_car_1_side_png";
		t.width = 374;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image95_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.name = "e1";
		t.source = "2p_boosteffect_00000_png";
		t.visible = false;
		t.width = 157;
		t.x = 346;
		t.y = 50;
		return t;
	};
	_proto._Image96_i = function () {
		var t = new eui.Image();
		t.height = 199;
		t.name = "e2";
		t.source = "2p_thundereffect_01_png";
		t.visible = false;
		t.width = 600;
		t.x = -10;
		t.y = -40;
		return t;
	};
	_proto._Image97_i = function () {
		var t = new eui.Image();
		t.height = 199;
		t.name = "e3";
		t.source = "2p_speeddash_effect_01_png";
		t.visible = false;
		t.width = 600;
		t.x = -20;
		t.y = -20;
		return t;
	};
	_proto._Image98_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.height = 60;
		t.name = "w2";
		t.source = "2p_wheel_png";
		t.width = 60;
		t.x = 305;
		t.y = 72;
		return t;
	};
	_proto._Image99_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.height = 60;
		t.name = "w";
		t.source = "2p_wheel_png";
		t.width = 60;
		t.x = 77;
		t.y = 75;
		return t;
	};
	_proto._Group37_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 374;
		t.x = 1920;
		t.y = 98.51;
		t.elementsContent = [this._Image100_i(),this._Image101_i(),this._Image102_i(),this._Image103_i(),this._Image104_i(),this._Image105_i()];
		return t;
	};
	_proto._Image100_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "c";
		t.source = "2p_car_2_side_png";
		t.width = 374;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image101_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.name = "e1";
		t.source = "2p_boosteffect_00000_png";
		t.visible = false;
		t.width = 157;
		t.x = 346;
		t.y = 50;
		return t;
	};
	_proto._Image102_i = function () {
		var t = new eui.Image();
		t.height = 199;
		t.name = "e2";
		t.source = "2p_thundereffect_01_png";
		t.visible = false;
		t.width = 600;
		t.x = -10;
		t.y = -40;
		return t;
	};
	_proto._Image103_i = function () {
		var t = new eui.Image();
		t.height = 199;
		t.name = "e3";
		t.source = "2p_speeddash_effect_01_png";
		t.visible = false;
		t.width = 600;
		t.x = -20;
		t.y = -20;
		return t;
	};
	_proto._Image104_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.height = 60;
		t.name = "w2";
		t.source = "2p_wheel_png";
		t.width = 60;
		t.x = 305;
		t.y = 72;
		return t;
	};
	_proto._Image105_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.height = 60;
		t.name = "w";
		t.source = "2p_wheel_png";
		t.width = 60;
		t.x = 77;
		t.y = 75;
		return t;
	};
	_proto._Group38_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 374;
		t.x = 1920;
		t.y = 192.02;
		t.elementsContent = [this._Image106_i(),this._Image107_i(),this._Image108_i(),this._Image109_i(),this._Image110_i(),this._Image111_i()];
		return t;
	};
	_proto._Image106_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "c";
		t.source = "2p_car_3_side_png";
		t.width = 374;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image107_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.name = "e1";
		t.source = "2p_boosteffect_00000_png";
		t.visible = false;
		t.width = 157;
		t.x = 346;
		t.y = 50;
		return t;
	};
	_proto._Image108_i = function () {
		var t = new eui.Image();
		t.height = 199;
		t.name = "e2";
		t.source = "2p_thundereffect_01_png";
		t.visible = false;
		t.width = 600;
		t.x = -10;
		t.y = -40;
		return t;
	};
	_proto._Image109_i = function () {
		var t = new eui.Image();
		t.height = 199;
		t.name = "e3";
		t.source = "2p_speeddash_effect_01_png";
		t.visible = false;
		t.width = 600;
		t.x = -20;
		t.y = -20;
		return t;
	};
	_proto._Image110_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.height = 60;
		t.name = "w2";
		t.source = "2p_wheel_png";
		t.width = 60;
		t.x = 305;
		t.y = 72;
		return t;
	};
	_proto._Image111_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.height = 60;
		t.name = "w";
		t.source = "2p_wheel_png";
		t.width = 60;
		t.x = 77;
		t.y = 75;
		return t;
	};
	_proto._Group39_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 374;
		t.x = 1920;
		t.y = 278.51;
		t.elementsContent = [this._Image112_i(),this._Image113_i(),this._Image114_i(),this._Image115_i(),this._Image116_i(),this._Image117_i()];
		return t;
	};
	_proto._Image112_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "c";
		t.source = "2p_car_4_side_png";
		t.width = 374;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image113_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.name = "e1";
		t.source = "2p_boosteffect_00000_png";
		t.visible = false;
		t.width = 157;
		t.x = 346;
		t.y = 50;
		return t;
	};
	_proto._Image114_i = function () {
		var t = new eui.Image();
		t.height = 199;
		t.name = "e2";
		t.source = "2p_thundereffect_01_png";
		t.visible = false;
		t.width = 600;
		t.x = -10;
		t.y = -40;
		return t;
	};
	_proto._Image115_i = function () {
		var t = new eui.Image();
		t.height = 199;
		t.name = "e3";
		t.source = "2p_speeddash_effect_01_png";
		t.visible = false;
		t.width = 600;
		t.x = -20;
		t.y = -20;
		return t;
	};
	_proto._Image116_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.height = 60;
		t.name = "w2";
		t.source = "2p_wheel_png";
		t.width = 60;
		t.x = 305;
		t.y = 72;
		return t;
	};
	_proto._Image117_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.height = 60;
		t.name = "w";
		t.source = "2p_wheel_png";
		t.width = 60;
		t.x = 77;
		t.y = 75;
		return t;
	};
	_proto._Group40_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 374;
		t.x = 1920;
		t.y = 368.51;
		t.elementsContent = [this._Image118_i(),this._Image119_i(),this._Image120_i(),this._Image121_i(),this._Image122_i(),this._Image123_i()];
		return t;
	};
	_proto._Image118_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "c";
		t.source = "2p_car_5_side_png";
		t.width = 374;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image119_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.name = "e1";
		t.source = "2p_boosteffect_00000_png";
		t.visible = false;
		t.width = 157;
		t.x = 346;
		t.y = 50;
		return t;
	};
	_proto._Image120_i = function () {
		var t = new eui.Image();
		t.height = 199;
		t.name = "e2";
		t.source = "2p_thundereffect_01_png";
		t.visible = false;
		t.width = 600;
		t.x = -10;
		t.y = -40;
		return t;
	};
	_proto._Image121_i = function () {
		var t = new eui.Image();
		t.height = 199;
		t.name = "e3";
		t.source = "2p_speeddash_effect_01_png";
		t.visible = false;
		t.width = 600;
		t.x = -20;
		t.y = -20;
		return t;
	};
	_proto._Image122_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.height = 60;
		t.name = "w2";
		t.source = "2p_wheel_png";
		t.width = 60;
		t.x = 305;
		t.y = 72;
		return t;
	};
	_proto._Image123_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.height = 60;
		t.name = "w";
		t.source = "2p_wheel_png";
		t.width = 60;
		t.x = 77;
		t.y = 75;
		return t;
	};
	_proto._Group41_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 374;
		t.x = 1920;
		t.y = 462.02;
		t.elementsContent = [this._Image124_i(),this._Image125_i(),this._Image126_i(),this._Image127_i(),this._Image128_i(),this._Image129_i()];
		return t;
	};
	_proto._Image124_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "c";
		t.source = "2p_car_6_side_png";
		t.width = 374;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image125_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.name = "e1";
		t.source = "2p_boosteffect_00000_png";
		t.visible = false;
		t.width = 157;
		t.x = 346;
		t.y = 50;
		return t;
	};
	_proto._Image126_i = function () {
		var t = new eui.Image();
		t.height = 199;
		t.name = "e2";
		t.source = "2p_thundereffect_01_png";
		t.visible = false;
		t.width = 600;
		t.x = -10;
		t.y = -40;
		return t;
	};
	_proto._Image127_i = function () {
		var t = new eui.Image();
		t.height = 199;
		t.name = "e3";
		t.source = "2p_speeddash_effect_01_png";
		t.visible = false;
		t.width = 600;
		t.x = -20;
		t.y = -20;
		return t;
	};
	_proto._Image128_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.height = 60;
		t.name = "w2";
		t.source = "2p_wheel_png";
		t.width = 60;
		t.x = 305;
		t.y = 72;
		return t;
	};
	_proto._Image129_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.height = 60;
		t.name = "w";
		t.source = "2p_wheel_png";
		t.width = 60;
		t.x = 77;
		t.y = 75;
		return t;
	};
	_proto._Group42_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 374;
		t.x = 1920;
		t.y = 552.02;
		t.elementsContent = [this._Image130_i(),this._Image131_i(),this._Image132_i(),this._Image133_i(),this._Image134_i(),this._Image135_i()];
		return t;
	};
	_proto._Image130_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "c";
		t.source = "2p_car_7_side_png";
		t.width = 374;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image131_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.name = "e1";
		t.source = "2p_boosteffect_00000_png";
		t.visible = false;
		t.width = 157;
		t.x = 346;
		t.y = 50;
		return t;
	};
	_proto._Image132_i = function () {
		var t = new eui.Image();
		t.height = 199;
		t.name = "e2";
		t.source = "2p_thundereffect_01_png";
		t.visible = false;
		t.width = 600;
		t.x = -10;
		t.y = -40;
		return t;
	};
	_proto._Image133_i = function () {
		var t = new eui.Image();
		t.height = 199;
		t.name = "e3";
		t.source = "2p_speeddash_effect_01_png";
		t.visible = false;
		t.width = 600;
		t.x = -20;
		t.y = -20;
		return t;
	};
	_proto._Image134_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.height = 60;
		t.name = "w2";
		t.source = "2p_wheel_png";
		t.width = 60;
		t.x = 305;
		t.y = 72;
		return t;
	};
	_proto._Image135_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.height = 60;
		t.name = "w";
		t.source = "2p_wheel_png";
		t.width = 60;
		t.x = 77;
		t.y = 75;
		return t;
	};
	_proto._Group43_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 374;
		t.x = 1920;
		t.y = 642.02;
		t.elementsContent = [this._Image136_i(),this._Image137_i(),this._Image138_i(),this._Image139_i(),this._Image140_i(),this._Image141_i()];
		return t;
	};
	_proto._Image136_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "c";
		t.source = "2p_car_8_side_png";
		t.width = 374;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image137_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.name = "e1";
		t.source = "2p_boosteffect_00000_png";
		t.visible = false;
		t.width = 157;
		t.x = 346;
		t.y = 50;
		return t;
	};
	_proto._Image138_i = function () {
		var t = new eui.Image();
		t.height = 199;
		t.name = "e2";
		t.source = "2p_thundereffect_01_png";
		t.visible = false;
		t.width = 600;
		t.x = -10;
		t.y = -40;
		return t;
	};
	_proto._Image139_i = function () {
		var t = new eui.Image();
		t.height = 199;
		t.name = "e3";
		t.source = "2p_speeddash_effect_01_png";
		t.visible = false;
		t.width = 600;
		t.x = -20;
		t.y = -20;
		return t;
	};
	_proto._Image140_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.height = 60;
		t.name = "w2";
		t.source = "2p_wheel_png";
		t.width = 60;
		t.x = 305;
		t.y = 72;
		return t;
	};
	_proto._Image141_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.height = 60;
		t.name = "w";
		t.source = "2p_wheel_png";
		t.width = 60;
		t.x = 77;
		t.y = 75;
		return t;
	};
	_proto._Group44_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 374;
		t.x = 1920;
		t.y = 746.05;
		t.elementsContent = [this._Image142_i(),this._Image143_i(),this._Image144_i(),this._Image145_i(),this._Image146_i(),this._Image147_i()];
		return t;
	};
	_proto._Image142_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "c";
		t.source = "2p_car_9_side_png";
		t.width = 374;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image143_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.name = "e1";
		t.source = "2p_boosteffect_00000_png";
		t.visible = false;
		t.width = 157;
		t.x = 346;
		t.y = 50;
		return t;
	};
	_proto._Image144_i = function () {
		var t = new eui.Image();
		t.height = 199;
		t.name = "e2";
		t.source = "2p_thundereffect_01_png";
		t.visible = false;
		t.width = 600;
		t.x = -10;
		t.y = -40;
		return t;
	};
	_proto._Image145_i = function () {
		var t = new eui.Image();
		t.height = 199;
		t.name = "e3";
		t.source = "2p_speeddash_effect_01_png";
		t.visible = false;
		t.width = 600;
		t.x = -20;
		t.y = -20;
		return t;
	};
	_proto._Image146_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.height = 60;
		t.name = "w2";
		t.source = "2p_wheel_png";
		t.width = 60;
		t.x = 305;
		t.y = 72;
		return t;
	};
	_proto._Image147_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.height = 60;
		t.name = "w";
		t.source = "2p_wheel_png";
		t.width = 60;
		t.x = 77;
		t.y = 75;
		return t;
	};
	_proto._Group45_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 374;
		t.x = 1920;
		t.y = 846.58;
		t.elementsContent = [this._Image148_i(),this._Image149_i(),this._Image150_i(),this._Image151_i(),this._Image152_i(),this._Image153_i()];
		return t;
	};
	_proto._Image148_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "c";
		t.source = "2p_car_10_side_png";
		t.width = 374;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image149_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.name = "e1";
		t.source = "2p_boosteffect_00000_png";
		t.visible = false;
		t.width = 157;
		t.x = 346;
		t.y = 50;
		return t;
	};
	_proto._Image150_i = function () {
		var t = new eui.Image();
		t.height = 199;
		t.name = "e2";
		t.source = "2p_thundereffect_01_png";
		t.visible = false;
		t.width = 600;
		t.x = -10;
		t.y = -40;
		return t;
	};
	_proto._Image151_i = function () {
		var t = new eui.Image();
		t.height = 199;
		t.name = "e3";
		t.source = "2p_speeddash_effect_01_png";
		t.visible = false;
		t.width = 600;
		t.x = -20;
		t.y = -20;
		return t;
	};
	_proto._Image152_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.height = 60;
		t.name = "w2";
		t.source = "2p_wheel_png";
		t.width = 60;
		t.x = 305;
		t.y = 72;
		return t;
	};
	_proto._Image153_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.height = 60;
		t.name = "w";
		t.source = "2p_wheel_png";
		t.width = 60;
		t.x = 77;
		t.y = 75;
		return t;
	};
	_proto.p2_stop_img_i = function () {
		var t = new eui.Image();
		this.p2_stop_img = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1260;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "white_png";
		t.touchEnabled = false;
		t.width = 1920;
		t.x = -2;
		t.y = -2;
		return t;
	};
	_proto.record_gp_i = function () {
		var t = new eui.Group();
		this.record_gp = t;
		t.height = 1260;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image154_i(),this._Group47_i(),this._Group78_i(),this._Group90_i(),this._Group91_i(),this._Group92_i(),this._Group93_i(),this._Group126_i()];
		return t;
	};
	_proto._Image154_i = function () {
		var t = new eui.Image();
		t.height = 1260;
		t.source = "4p_bg_jpg";
		t.width = 1920;
		t.x = -1.33;
		t.y = 0;
		return t;
	};
	_proto._Group47_i = function () {
		var t = new eui.Group();
		t.height = 220;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image155_i(),this._Image156_i(),this._Image157_i(),this.p4_next_id_i(),this.p4_next_timer_i(),this.p4_mute_toggle_i(),this.record_disable_btn_i()];
		return t;
	};
	_proto._Image155_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 220;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_display_png";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image156_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 165.45;
		t.source = "1p_button_right_idle_png";
		t.width = 229.09;
		t.x = 1680;
		t.y = 15;
		return t;
	};
	_proto._Image157_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 165.45;
		t.source = "1p_button_left_idle_png";
		t.width = 229.09;
		t.x = 10;
		t.y = 15;
		return t;
	};
	_proto.p4_next_id_i = function () {
		var t = new eui.Label();
		this.p4_next_id = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 35;
		t.text = "未有结果";
		t.textAlign = "center";
		t.width = 365;
		t.x = 255.46;
		t.y = 85;
		return t;
	};
	_proto.p4_next_timer_i = function () {
		var t = new eui.Label();
		this.p4_next_timer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 35;
		t.text = "未有结果";
		t.textAlign = "left";
		t.width = 280;
		t.x = 1354.84;
		t.y = 82.87;
		return t;
	};
	_proto.p4_mute_toggle_i = function () {
		var t = new eui.Image();
		this.p4_mute_toggle = t;
		t.height = 165;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mute_button_off_png";
		t.touchEnabled = true;
		t.width = 230;
		t.x = 1680;
		t.y = 15;
		return t;
	};
	_proto.record_disable_btn_i = function () {
		var t = new eui.Button();
		this.record_disable_btn = t;
		t.height = 165;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 230;
		t.x = 10;
		t.y = 16.5;
		t.skinName = gameUISkin_v0$Skin3;
		return t;
	};
	_proto._Group78_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.name = "toggle_gp";
		t.width = 1920;
		t.x = 0;
		t.y = 960;
		t.layout = this._HorizontalLayout6_i();
		t.elementsContent = [this._Group50_i(),this._Group53_i(),this._Group56_i(),this._Group59_i(),this._Group62_i(),this._Group65_i(),this._Group68_i(),this._Group71_i(),this._Group74_i(),this._Group77_i()];
		return t;
	};
	_proto._HorizontalLayout6_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -45;
		t.paddingLeft = 0;
		return t;
	};
	_proto._Group50_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.width = 230;
		t.x = 1333.2;
		t.y = 0;
		t.elementsContent = [this._Label5_i(),this._Group48_i(),this._Group49_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft JhengHei";
		t.height = 44.03;
		t.size = 40;
		t.text = "第一名";
		t.textColor = 0x73c673;
		t.width = 130.22;
		t.x = 41;
		t.y = 35;
		return t;
	};
	_proto._Group48_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.width = 180;
		t.x = 20;
		t.y = 105;
		t.elementsContent = [this._Image158_i(),this._Image159_i()];
		return t;
	};
	_proto._Image158_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.name = "btn";
		t.source = "4p_front_car_1_png";
		t.touchEnabled = true;
		t.width = 180;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image159_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.name = "img";
		t.source = "4p_car_front_black_alpha_png";
		t.touchEnabled = false;
		t.width = 180;
		t.x = 0;
		t.y = -2;
		return t;
	};
	_proto._Group49_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 80;
		t.width = 230;
		t.x = 0;
		t.y = 212;
		t.elementsContent = [this._Image160_i()];
		return t;
	};
	_proto._Image160_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56.85;
		t.name = "num";
		t.source = "irn_2_png";
		t.width = 82.96;
		t.x = 81.37;
		t.y = 10;
		return t;
	};
	_proto._Group53_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.width = 230;
		t.x = 1343.2;
		t.y = 10;
		t.elementsContent = [this._Label6_i(),this._Group51_i(),this._Group52_i()];
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft JhengHei";
		t.height = 44.03;
		t.size = 40;
		t.text = "第二名";
		t.textColor = 0x73C673;
		t.width = 130.22;
		t.x = 50;
		t.y = 35;
		return t;
	};
	_proto._Group51_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.width = 180;
		t.x = 20;
		t.y = 105;
		t.elementsContent = [this._Image161_i(),this._Image162_i()];
		return t;
	};
	_proto._Image161_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.name = "btn";
		t.source = "4p_front_car_1_png";
		t.touchEnabled = true;
		t.width = 180;
		t.x = 7;
		t.y = 0;
		return t;
	};
	_proto._Image162_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.name = "img";
		t.source = "4p_car_front_black_alpha_png";
		t.touchEnabled = false;
		t.width = 180;
		t.x = 7;
		t.y = -2;
		return t;
	};
	_proto._Group52_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 80;
		t.width = 230;
		t.x = 0;
		t.y = 212;
		t.elementsContent = [this._Image163_i()];
		return t;
	};
	_proto._Image163_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56.85;
		t.name = "num";
		t.source = "irn_2_png";
		t.width = 82.96;
		t.x = 81.37;
		t.y = 10;
		return t;
	};
	_proto._Group56_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.width = 230;
		t.x = 1353.2;
		t.y = 20;
		t.elementsContent = [this._Label7_i(),this._Group54_i(),this._Group55_i()];
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft JhengHei";
		t.height = 44.03;
		t.size = 40;
		t.text = "第三名";
		t.textColor = 0x73C673;
		t.width = 130.22;
		t.x = 56.33;
		t.y = 35;
		return t;
	};
	_proto._Group54_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.width = 180;
		t.x = 20;
		t.y = 105;
		t.elementsContent = [this._Image164_i(),this._Image165_i()];
		return t;
	};
	_proto._Image164_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.name = "btn";
		t.source = "4p_front_car_1_png";
		t.touchEnabled = true;
		t.width = 180;
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto._Image165_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.name = "img";
		t.source = "4p_car_front_black_alpha_png";
		t.touchEnabled = false;
		t.width = 180;
		t.x = 10;
		t.y = -2;
		return t;
	};
	_proto._Group55_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 80;
		t.width = 230;
		t.x = 0;
		t.y = 212;
		t.elementsContent = [this._Image166_i()];
		return t;
	};
	_proto._Image166_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56.85;
		t.name = "num";
		t.source = "irn_2_png";
		t.width = 82.96;
		t.x = 81.37;
		t.y = 10;
		return t;
	};
	_proto._Group59_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.width = 230;
		t.x = 1363.2;
		t.y = 30;
		t.elementsContent = [this._Label8_i(),this._Group57_i(),this._Group58_i()];
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft JhengHei";
		t.height = 44.03;
		t.size = 40;
		t.text = "第四名";
		t.textColor = 0x73C673;
		t.width = 130.22;
		t.x = 61.67;
		t.y = 35;
		return t;
	};
	_proto._Group57_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.width = 180;
		t.x = 20;
		t.y = 105;
		t.elementsContent = [this._Image167_i(),this._Image168_i()];
		return t;
	};
	_proto._Image167_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.name = "btn";
		t.source = "4p_front_car_1_png";
		t.touchEnabled = true;
		t.width = 180;
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto._Image168_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.name = "img";
		t.source = "4p_car_front_black_alpha_png";
		t.touchEnabled = false;
		t.width = 180;
		t.x = 10;
		t.y = -2;
		return t;
	};
	_proto._Group58_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 80;
		t.width = 230;
		t.x = 0;
		t.y = 212;
		t.elementsContent = [this._Image169_i()];
		return t;
	};
	_proto._Image169_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56.85;
		t.name = "num";
		t.source = "irn_2_png";
		t.width = 82.96;
		t.x = 81.37;
		t.y = 10;
		return t;
	};
	_proto._Group62_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.width = 230;
		t.x = 1373.2;
		t.y = 40;
		t.elementsContent = [this._Label9_i(),this._Group60_i(),this._Group61_i()];
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft JhengHei";
		t.height = 44.03;
		t.size = 40;
		t.text = "第五名";
		t.textColor = 0x73C673;
		t.width = 130.22;
		t.x = 64.32;
		t.y = 35;
		return t;
	};
	_proto._Group60_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.width = 180;
		t.x = 20;
		t.y = 105;
		t.elementsContent = [this._Image170_i(),this._Image171_i()];
		return t;
	};
	_proto._Image170_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.name = "btn";
		t.source = "4p_front_car_1_png";
		t.touchEnabled = true;
		t.width = 180;
		t.x = 13;
		t.y = 0;
		return t;
	};
	_proto._Image171_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.name = "img";
		t.source = "4p_car_front_black_alpha_png";
		t.touchEnabled = false;
		t.width = 180;
		t.x = 13;
		t.y = -2;
		return t;
	};
	_proto._Group61_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 80;
		t.width = 230;
		t.x = 0;
		t.y = 212;
		t.elementsContent = [this._Image172_i()];
		return t;
	};
	_proto._Image172_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56.85;
		t.name = "num";
		t.source = "irn_2_png";
		t.width = 82.96;
		t.x = 81.37;
		t.y = 10;
		return t;
	};
	_proto._Group65_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.width = 230;
		t.x = 1383.2;
		t.y = 50;
		t.elementsContent = [this._Label10_i(),this._Group63_i(),this._Group64_i()];
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft JhengHei";
		t.height = 44.03;
		t.size = 40;
		t.text = "第六名";
		t.textColor = 0x73C673;
		t.width = 130.22;
		t.x = 70.98;
		t.y = 35;
		return t;
	};
	_proto._Group63_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.width = 180;
		t.x = 20;
		t.y = 105;
		t.elementsContent = [this._Image173_i(),this._Image174_i()];
		return t;
	};
	_proto._Image173_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.name = "btn";
		t.source = "4p_front_car_1_png";
		t.touchEnabled = true;
		t.width = 180;
		t.x = 20;
		t.y = 0;
		return t;
	};
	_proto._Image174_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.name = "img";
		t.source = "4p_car_front_black_alpha_png";
		t.touchEnabled = false;
		t.width = 180;
		t.x = 20;
		t.y = -2;
		return t;
	};
	_proto._Group64_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 80;
		t.width = 230;
		t.x = 0;
		t.y = 212;
		t.elementsContent = [this._Image175_i()];
		return t;
	};
	_proto._Image175_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56.85;
		t.name = "num";
		t.source = "irn_2_png";
		t.width = 82.96;
		t.x = 81.37;
		t.y = 10;
		return t;
	};
	_proto._Group68_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.width = 230;
		t.x = 1393.2;
		t.y = 60;
		t.elementsContent = [this._Label11_i(),this._Group66_i(),this._Group67_i()];
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft JhengHei";
		t.height = 44.03;
		t.size = 40;
		t.text = "第七名";
		t.textColor = 0x73C673;
		t.width = 130.22;
		t.x = 74.97;
		t.y = 35;
		return t;
	};
	_proto._Group66_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.width = 180;
		t.x = 20;
		t.y = 105;
		t.elementsContent = [this._Image176_i(),this._Image177_i()];
		return t;
	};
	_proto._Image176_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.name = "btn";
		t.source = "4p_front_car_1_png";
		t.touchEnabled = true;
		t.width = 180;
		t.x = 20;
		t.y = 0;
		return t;
	};
	_proto._Image177_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.name = "img";
		t.source = "4p_car_front_black_alpha_png";
		t.touchEnabled = false;
		t.width = 180;
		t.x = 20;
		t.y = -2;
		return t;
	};
	_proto._Group67_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 80;
		t.width = 230;
		t.x = 0;
		t.y = 212;
		t.elementsContent = [this._Image178_i()];
		return t;
	};
	_proto._Image178_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56.85;
		t.name = "num";
		t.source = "irn_2_png";
		t.width = 82.96;
		t.x = 81.37;
		t.y = 10;
		return t;
	};
	_proto._Group71_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.width = 230;
		t.x = 1403.2;
		t.y = 70;
		t.elementsContent = [this._Label12_i(),this._Group69_i(),this._Group70_i()];
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft JhengHei";
		t.height = 44.03;
		t.size = 40;
		t.text = "第八名";
		t.textColor = 0x73C673;
		t.width = 130.22;
		t.x = 78.99;
		t.y = 35;
		return t;
	};
	_proto._Group69_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.width = 180;
		t.x = 20;
		t.y = 105;
		t.elementsContent = [this._Image179_i(),this._Image180_i()];
		return t;
	};
	_proto._Image179_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.name = "btn";
		t.source = "4p_front_car_1_png";
		t.touchEnabled = true;
		t.width = 180;
		t.x = 30;
		t.y = 0;
		return t;
	};
	_proto._Image180_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.name = "img";
		t.source = "4p_car_front_black_alpha_png";
		t.touchEnabled = false;
		t.width = 180;
		t.x = 30;
		t.y = -2;
		return t;
	};
	_proto._Group70_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 80;
		t.width = 230;
		t.x = 0;
		t.y = 212;
		t.elementsContent = [this._Image181_i()];
		return t;
	};
	_proto._Image181_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56.85;
		t.name = "num";
		t.source = "irn_2_png";
		t.width = 82.96;
		t.x = 81.37;
		t.y = 10;
		return t;
	};
	_proto._Group74_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.width = 230;
		t.x = 1413.2;
		t.y = 80;
		t.elementsContent = [this._Label13_i(),this._Group72_i(),this._Group73_i()];
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft JhengHei";
		t.height = 44.03;
		t.size = 40;
		t.text = "第九名";
		t.textColor = 0x73C673;
		t.width = 130.22;
		t.x = 78.99;
		t.y = 35;
		return t;
	};
	_proto._Group72_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.width = 180;
		t.x = 20;
		t.y = 105;
		t.elementsContent = [this._Image182_i(),this._Image183_i()];
		return t;
	};
	_proto._Image182_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.name = "btn";
		t.source = "4p_front_car_1_png";
		t.touchEnabled = true;
		t.width = 180;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto._Image183_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.name = "img";
		t.source = "4p_car_front_black_alpha_png";
		t.touchEnabled = false;
		t.width = 180;
		t.x = 35;
		t.y = -2;
		return t;
	};
	_proto._Group73_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 80;
		t.width = 230;
		t.x = 0;
		t.y = 212;
		t.elementsContent = [this._Image184_i()];
		return t;
	};
	_proto._Image184_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56.85;
		t.name = "num";
		t.source = "irn_2_png";
		t.width = 82.96;
		t.x = 81.37;
		t.y = 10;
		return t;
	};
	_proto._Group77_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.width = 230;
		t.x = 1423.2;
		t.y = 90;
		t.elementsContent = [this._Label14_i(),this._Group75_i(),this._Group76_i()];
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft JhengHei";
		t.height = 44.03;
		t.size = 40;
		t.text = "第十名";
		t.textColor = 0x73C673;
		t.width = 130.22;
		t.x = 82.99;
		t.y = 35;
		return t;
	};
	_proto._Group75_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.width = 180;
		t.x = 20;
		t.y = 105;
		t.elementsContent = [this._Image185_i(),this._Image186_i()];
		return t;
	};
	_proto._Image185_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.name = "btn";
		t.source = "4p_front_car_1_png";
		t.touchEnabled = true;
		t.width = 180;
		t.x = 37;
		t.y = 0;
		return t;
	};
	_proto._Image186_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.name = "img";
		t.source = "4p_car_front_black_alpha_png";
		t.touchEnabled = false;
		t.width = 180;
		t.x = 37;
		t.y = -2;
		return t;
	};
	_proto._Group76_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 80;
		t.width = 230;
		t.x = 0;
		t.y = 212;
		t.elementsContent = [this._Image187_i()];
		return t;
	};
	_proto._Image187_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56.85;
		t.name = "num";
		t.source = "irn_2_png";
		t.width = 82.96;
		t.x = 81.37;
		t.y = 10;
		return t;
	};
	_proto._Group90_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 750;
		t.name = "all_open";
		t.width = 530;
		t.x = 1370;
		t.y = 220;
		t.layout = this._BasicLayout7_i();
		t.elementsContent = [this._Label15_i(),this._Label16_i(),this._Group89_i()];
		return t;
	};
	_proto._BasicLayout7_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52.45;
		t.size = 45;
		t.text = "车号   总开       未开";
		t.textColor = 0x56a2c9;
		t.width = 467.85;
		t.x = 40;
		t.y = 4;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.24;
		t.size = 30;
		t.text = "(次)               (次)";
		t.textColor = 0x56a2c9;
		t.width = 256.96;
		t.x = 256.57;
		t.y = 20;
		return t;
	};
	_proto._Group89_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 700;
		t.width = 530;
		t.x = 0;
		t.y = 50;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this._Group79_i(),this._Group80_i(),this._Group81_i(),this._Group82_i(),this._Group83_i(),this._Group84_i(),this._Group85_i(),this._Group86_i(),this._Group87_i(),this._Group88_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 4;
		t.paddingLeft = 0;
		t.paddingTop = 2;
		return t;
	};
	_proto._Group79_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65.64;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 530;
		t.x = 0;
		t.y = 3.3899999999999864;
		t.layout = this._HorizontalLayout7_i();
		t.elementsContent = [this._Label17_i(),this._Label18_i(),this._Label19_i()];
		return t;
	};
	_proto._HorizontalLayout7_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.paddingLeft = 55;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textColor = 0x56a2c9;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 388;
		t.y = 28;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textColor = 0xaaaaaa;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 398;
		t.y = 38;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textAlign = "left";
		t.textColor = 0xaaaaaa;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 408;
		t.y = 48;
		return t;
	};
	_proto._Group80_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65.64;
		t.width = 530;
		t.x = 10;
		t.y = 13.389999999999986;
		t.layout = this._HorizontalLayout8_i();
		t.elementsContent = [this._Label20_i(),this._Label21_i(),this._Label22_i()];
		return t;
	};
	_proto._HorizontalLayout8_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.paddingLeft = 55;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textColor = 0x56A2C9;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 388;
		t.y = 28;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textColor = 0xAAAAAA;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 398;
		t.y = 38;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textAlign = "left";
		t.textColor = 0xAAAAAA;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 408;
		t.y = 48;
		return t;
	};
	_proto._Group81_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65.64;
		t.width = 530;
		t.x = 20;
		t.y = 23.389999999999986;
		t.layout = this._HorizontalLayout9_i();
		t.elementsContent = [this._Label23_i(),this._Label24_i(),this._Label25_i()];
		return t;
	};
	_proto._HorizontalLayout9_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.paddingLeft = 55;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textColor = 0x56A2C9;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 388;
		t.y = 28;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textColor = 0xAAAAAA;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 398;
		t.y = 38;
		return t;
	};
	_proto._Label25_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textAlign = "left";
		t.textColor = 0xAAAAAA;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 408;
		t.y = 48;
		return t;
	};
	_proto._Group82_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65.64;
		t.width = 530;
		t.x = 30;
		t.y = 33.389999999999986;
		t.layout = this._HorizontalLayout10_i();
		t.elementsContent = [this._Label26_i(),this._Label27_i(),this._Label28_i()];
		return t;
	};
	_proto._HorizontalLayout10_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.paddingLeft = 55;
		return t;
	};
	_proto._Label26_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textColor = 0x56A2C9;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 388;
		t.y = 28;
		return t;
	};
	_proto._Label27_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textColor = 0xAAAAAA;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 398;
		t.y = 38;
		return t;
	};
	_proto._Label28_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textAlign = "left";
		t.textColor = 0xAAAAAA;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 408;
		t.y = 48;
		return t;
	};
	_proto._Group83_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65.64;
		t.width = 530;
		t.x = 40;
		t.y = 43.389999999999986;
		t.layout = this._HorizontalLayout11_i();
		t.elementsContent = [this._Label29_i(),this._Label30_i(),this._Label31_i()];
		return t;
	};
	_proto._HorizontalLayout11_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.paddingLeft = 55;
		return t;
	};
	_proto._Label29_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textColor = 0x56A2C9;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 388;
		t.y = 28;
		return t;
	};
	_proto._Label30_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textColor = 0xAAAAAA;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 398;
		t.y = 38;
		return t;
	};
	_proto._Label31_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textAlign = "left";
		t.textColor = 0xAAAAAA;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 408;
		t.y = 48;
		return t;
	};
	_proto._Group84_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65.64;
		t.width = 530;
		t.x = 50;
		t.y = 53.389999999999986;
		t.layout = this._HorizontalLayout12_i();
		t.elementsContent = [this._Label32_i(),this._Label33_i(),this._Label34_i()];
		return t;
	};
	_proto._HorizontalLayout12_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.paddingLeft = 55;
		return t;
	};
	_proto._Label32_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textColor = 0x56A2C9;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 388;
		t.y = 28;
		return t;
	};
	_proto._Label33_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textColor = 0xAAAAAA;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 398;
		t.y = 38;
		return t;
	};
	_proto._Label34_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textAlign = "left";
		t.textColor = 0xAAAAAA;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 408;
		t.y = 48;
		return t;
	};
	_proto._Group85_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65.64;
		t.width = 530;
		t.x = 60;
		t.y = 63.389999999999986;
		t.layout = this._HorizontalLayout13_i();
		t.elementsContent = [this._Label35_i(),this._Label36_i(),this._Label37_i()];
		return t;
	};
	_proto._HorizontalLayout13_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.paddingLeft = 55;
		return t;
	};
	_proto._Label35_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textColor = 0x56A2C9;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 388;
		t.y = 28;
		return t;
	};
	_proto._Label36_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textColor = 0xAAAAAA;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 398;
		t.y = 38;
		return t;
	};
	_proto._Label37_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textAlign = "left";
		t.textColor = 0xAAAAAA;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 408;
		t.y = 48;
		return t;
	};
	_proto._Group86_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65.64;
		t.width = 530;
		t.x = 70;
		t.y = 73.38999999999999;
		t.layout = this._HorizontalLayout14_i();
		t.elementsContent = [this._Label38_i(),this._Label39_i(),this._Label40_i()];
		return t;
	};
	_proto._HorizontalLayout14_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.paddingLeft = 55;
		return t;
	};
	_proto._Label38_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textColor = 0x56A2C9;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 388;
		t.y = 28;
		return t;
	};
	_proto._Label39_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textColor = 0xAAAAAA;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 398;
		t.y = 38;
		return t;
	};
	_proto._Label40_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textAlign = "left";
		t.textColor = 0xAAAAAA;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 408;
		t.y = 48;
		return t;
	};
	_proto._Group87_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65.64;
		t.width = 530;
		t.x = 80;
		t.y = 83.38999999999999;
		t.layout = this._HorizontalLayout15_i();
		t.elementsContent = [this._Label41_i(),this._Label42_i(),this._Label43_i()];
		return t;
	};
	_proto._HorizontalLayout15_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.paddingLeft = 55;
		return t;
	};
	_proto._Label41_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textColor = 0x56A2C9;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 388;
		t.y = 28;
		return t;
	};
	_proto._Label42_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textColor = 0xAAAAAA;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 398;
		t.y = 38;
		return t;
	};
	_proto._Label43_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textAlign = "left";
		t.textColor = 0xAAAAAA;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 408;
		t.y = 48;
		return t;
	};
	_proto._Group88_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65.64;
		t.width = 530;
		t.x = 90;
		t.y = 93.38999999999999;
		t.layout = this._HorizontalLayout16_i();
		t.elementsContent = [this._Label44_i(),this._Label45_i(),this._Label46_i()];
		return t;
	};
	_proto._HorizontalLayout16_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.paddingLeft = 55;
		return t;
	};
	_proto._Label44_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textColor = 0x56A2C9;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 388;
		t.y = 28;
		return t;
	};
	_proto._Label45_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textColor = 0xAAAAAA;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 398;
		t.y = 38;
		return t;
	};
	_proto._Label46_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 45;
		t.text = "10";
		t.textAlign = "left";
		t.textColor = 0xAAAAAA;
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 408;
		t.y = 48;
		return t;
	};
	_proto._Group91_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 466.13;
		t.name = "two_face";
		t.width = 335.39;
		t.x = 1016.01;
		t.y = 498.3;
		t.elementsContent = [this._Label47_i(),this._Label48_i(),this._Label49_i(),this._Label50_i(),this._Label51_i()];
		return t;
	};
	_proto._Label47_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47.65;
		t.size = 40;
		t.text = "两面统计";
		t.textColor = 0x56a2c9;
		t.width = 165.68;
		t.x = 85.15;
		t.y = 22.06;
		return t;
	};
	_proto._Label48_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.name = "小";
		t.size = 42;
		t.text = "小13";
		t.textAlign = "left";
		t.textColor = 0xAAAAAA;
		t.width = 95;
		t.x = 198.67;
		t.y = 154.88;
		return t;
	};
	_proto._Label49_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.name = "双";
		t.size = 42;
		t.text = "双13";
		t.textAlign = "left";
		t.textColor = 0xAAAAAA;
		t.width = 95;
		t.x = 200;
		t.y = 336.83;
		return t;
	};
	_proto._Label50_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.name = "单";
		t.size = 42;
		t.text = "单13";
		t.textAlign = "left";
		t.textColor = 0xAAAAAA;
		t.width = 95;
		t.x = 40;
		t.y = 336.83;
		return t;
	};
	_proto._Label51_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.size = 42;
		t.text = "大13";
		t.textAlign = "left";
		t.textColor = 0xaaaaaa;
		t.width = 95;
		t.x = 38.67;
		t.y = 154.88;
		return t;
	};
	_proto._Group92_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 259.11;
		t.name = "recommend";
		t.visible = false;
		t.width = 995.07;
		t.x = 18.51;
		t.y = 219.41;
		t.elementsContent = [this._Label52_i(),this._Label53_i(),this._Label54_i(),this._Label55_i(),this._Label56_i(),this._Label57_i(),this._Label58_i(),this._Label59_i()];
		return t;
	};
	_proto._Label52_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.name = "title";
		t.size = 45;
		t.text = "皇家                  推荐";
		t.textColor = 0x56A2C9;
		t.width = 416;
		t.x = 280;
		t.y = 15;
		return t;
	};
	_proto._Label53_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.size = 45;
		t.text = "xxx 期";
		t.textAlign = "center";
		t.textColor = 0xffbf00;
		t.verticalAlign = "top";
		t.width = 218.1;
		t.x = 373.95;
		t.y = 15;
		return t;
	};
	_proto._Label54_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.size = 45;
		t.text = "冠  军";
		t.textAlign = "left";
		t.textColor = 0x56a2c9;
		t.width = 120;
		t.x = 63.99;
		t.y = 97.36;
		return t;
	};
	_proto._Label55_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.name = "second_title";
		t.size = 37;
		t.text = "第四名";
		t.textAlign = "left";
		t.textColor = 0x56A2C9;
		t.width = 120;
		t.x = 65;
		t.y = 197.04;
		return t;
	};
	_proto._Label56_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.name = "one";
		t.size = 36;
		t.text = "3,4,5,6,7,10";
		t.textAlign = "center";
		t.textColor = 0xAAAAAA;
		t.width = 350;
		t.x = 325.99;
		t.y = 100.23;
		return t;
	};
	_proto._Label57_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.name = "second";
		t.size = 36;
		t.text = "1,2,4,5,8,10";
		t.textAlign = "center";
		t.textColor = 0xAAAAAA;
		t.width = 350;
		t.x = 329.86;
		t.y = 197.95;
		return t;
	};
	_proto._Label58_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.name = "second_lose";
		t.size = 42;
		t.text = "输 3";
		t.textAlign = "left";
		t.textColor = 0x6ec94a;
		t.width = 120;
		t.x = 790;
		t.y = 197.3;
		return t;
	};
	_proto._Label59_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.name = "one_lose";
		t.size = 42;
		t.text = "输 3";
		t.textAlign = "left";
		t.textColor = 0x6ec94a;
		t.width = 120;
		t.x = 790;
		t.y = 94.38;
		return t;
	};
	_proto._Group93_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 268.55;
		t.name = "count_down";
		t.width = 336.4;
		t.x = 1017;
		t.y = 221.67;
		t.elementsContent = [this._Label60_i(),this._Label61_i()];
		return t;
	};
	_proto._Label60_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57.01;
		t.size = 50;
		t.text = "倒计时";
		t.textColor = 0x56A2C9;
		t.width = 165.68;
		t.x = 88;
		t.y = 15;
		return t;
	};
	_proto._Label61_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 110;
		t.size = 115;
		t.text = "420";
		t.textAlign = "center";
		t.textColor = 0x56a2c9;
		t.width = 200;
		t.x = 67.34;
		t.y = 121.66;
		return t;
	};
	_proto._Group126_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 743.45;
		t.name = "chart";
		t.width = 997.59;
		t.x = 18.02;
		t.y = 223.28;
		t.elementsContent = [this._Label62_i(),this._Group125_i()];
		return t;
	};
	_proto._Label62_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.name = "title";
		t.rotation = 0.1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 42;
		t.text = "车号                       第三名走势图";
		t.textColor = 0x56a2c9;
		t.width = 700;
		t.x = 53.980000000000004;
		t.y = 11.420000000000016;
		return t;
	};
	_proto._Group125_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 672.73;
		t.name = "gp";
		t.width = 988;
		t.x = 4.49;
		t.y = 74.2;
		t.elementsContent = [this._Label63_i(),this._Label64_i(),this._Group124_i()];
		return t;
	};
	_proto._Label63_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 632.27;
		t.size = 63;
		t.text = "1\n2\n3\n4\n5\n6\n7\n8\n9\n10";
		t.textAlign = "center";
		t.textColor = 0x56a2c9;
		t.width = 79.04;
		t.x = 40.05;
		t.y = 3.73;
		return t;
	};
	_proto._Label64_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26.52;
		t.name = "issue";
		t.size = 20;
		t.text = "00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29";
		t.textColor = 0x56a2c9;
		t.width = 832;
		t.x = 144.29;
		t.y = 639.36;
		return t;
	};
	_proto._Group124_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.name = "gp";
		t.width = 826;
		t.x = 146;
		t.y = 595;
		t.layout = this._HorizontalLayout17_i();
		t.elementsContent = [this._Group94_i(),this._Group95_i(),this._Group96_i(),this._Group97_i(),this._Group98_i(),this._Group99_i(),this._Group100_i(),this._Group101_i(),this._Group102_i(),this._Group103_i(),this._Group104_i(),this._Group105_i(),this._Group106_i(),this._Group107_i(),this._Group108_i(),this._Group109_i(),this._Group110_i(),this._Group111_i(),this._Group112_i(),this._Group113_i(),this._Group114_i(),this._Group115_i(),this._Group116_i(),this._Group117_i(),this._Group118_i(),this._Group119_i(),this._Group120_i(),this._Group121_i(),this._Group122_i(),this._Group123_i()];
		return t;
	};
	_proto._HorizontalLayout17_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 7.8;
		return t;
	};
	_proto._Group94_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image188_i(),this._Image189_i()];
		return t;
	};
	_proto._Image188_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image189_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group95_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this._Image190_i(),this._Image191_i()];
		return t;
	};
	_proto._Image190_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image191_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group96_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 20;
		t.y = 20;
		t.elementsContent = [this._Image192_i(),this._Image193_i()];
		return t;
	};
	_proto._Image192_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image193_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group97_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 30;
		t.y = 30;
		t.elementsContent = [this._Image194_i(),this._Image195_i()];
		return t;
	};
	_proto._Image194_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image195_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group98_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 40;
		t.y = 40;
		t.elementsContent = [this._Image196_i(),this._Image197_i()];
		return t;
	};
	_proto._Image196_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image197_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group99_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 50;
		t.y = 50;
		t.elementsContent = [this._Image198_i(),this._Image199_i()];
		return t;
	};
	_proto._Image198_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image199_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group100_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 60;
		t.y = 60;
		t.elementsContent = [this._Image200_i(),this._Image201_i()];
		return t;
	};
	_proto._Image200_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image201_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group101_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 70;
		t.y = 70;
		t.elementsContent = [this._Image202_i(),this._Image203_i()];
		return t;
	};
	_proto._Image202_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image203_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group102_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 80;
		t.y = 80;
		t.elementsContent = [this._Image204_i(),this._Image205_i()];
		return t;
	};
	_proto._Image204_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image205_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group103_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 90;
		t.y = 90;
		t.elementsContent = [this._Image206_i(),this._Image207_i()];
		return t;
	};
	_proto._Image206_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image207_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group104_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 100;
		t.y = 100;
		t.elementsContent = [this._Image208_i(),this._Image209_i()];
		return t;
	};
	_proto._Image208_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image209_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group105_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 110;
		t.y = 110;
		t.elementsContent = [this._Image210_i(),this._Image211_i()];
		return t;
	};
	_proto._Image210_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image211_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group106_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 120;
		t.y = 120;
		t.elementsContent = [this._Image212_i(),this._Image213_i()];
		return t;
	};
	_proto._Image212_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image213_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group107_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 130;
		t.y = 130;
		t.elementsContent = [this._Image214_i(),this._Image215_i()];
		return t;
	};
	_proto._Image214_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image215_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group108_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 140;
		t.y = 140;
		t.elementsContent = [this._Image216_i(),this._Image217_i()];
		return t;
	};
	_proto._Image216_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image217_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group109_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 150;
		t.y = 150;
		t.elementsContent = [this._Image218_i(),this._Image219_i()];
		return t;
	};
	_proto._Image218_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image219_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group110_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 160;
		t.y = 160;
		t.elementsContent = [this._Image220_i(),this._Image221_i()];
		return t;
	};
	_proto._Image220_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image221_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group111_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 170;
		t.y = 170;
		t.elementsContent = [this._Image222_i(),this._Image223_i()];
		return t;
	};
	_proto._Image222_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image223_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group112_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 180;
		t.y = 180;
		t.elementsContent = [this._Image224_i(),this._Image225_i()];
		return t;
	};
	_proto._Image224_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image225_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group113_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 190;
		t.y = 190;
		t.elementsContent = [this._Image226_i(),this._Image227_i()];
		return t;
	};
	_proto._Image226_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image227_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group114_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 200;
		t.y = 200;
		t.elementsContent = [this._Image228_i(),this._Image229_i()];
		return t;
	};
	_proto._Image228_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image229_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group115_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 210;
		t.y = 210;
		t.elementsContent = [this._Image230_i(),this._Image231_i()];
		return t;
	};
	_proto._Image230_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image231_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group116_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 220;
		t.y = 220;
		t.elementsContent = [this._Image232_i(),this._Image233_i()];
		return t;
	};
	_proto._Image232_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image233_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group117_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 230;
		t.y = 230;
		t.elementsContent = [this._Image234_i(),this._Image235_i()];
		return t;
	};
	_proto._Image234_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image235_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group118_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 240;
		t.y = 240;
		t.elementsContent = [this._Image236_i(),this._Image237_i()];
		return t;
	};
	_proto._Image236_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image237_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group119_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 250;
		t.y = 250;
		t.elementsContent = [this._Image238_i(),this._Image239_i()];
		return t;
	};
	_proto._Image238_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image239_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group120_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 260;
		t.y = 260;
		t.elementsContent = [this._Image240_i(),this._Image241_i()];
		return t;
	};
	_proto._Image240_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image241_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group121_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 270;
		t.y = 270;
		t.elementsContent = [this._Image242_i(),this._Image243_i()];
		return t;
	};
	_proto._Image242_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image243_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group122_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 280;
		t.y = 280;
		t.elementsContent = [this._Image244_i(),this._Image245_i()];
		return t;
	};
	_proto._Image244_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image245_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group123_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.width = 20;
		t.x = 290;
		t.y = 290;
		t.elementsContent = [this._Image246_i(),this._Image247_i()];
		return t;
	};
	_proto._Image246_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.height = 20;
		t.name = "point";
		t.source = "point_png";
		t.width = 20;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image247_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.5;
		t.height = 3;
		t.name = "line";
		t.rotation = 45;
		t.source = "blue_png";
		t.width = 1;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.init_image_i = function () {
		var t = new eui.Image();
		this.init_image = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1260;
		t.source = "5p_bg_jpg";
		t.visible = false;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.notice_gp_i = function () {
		var t = new eui.Group();
		this.notice_gp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1260;
		t.visible = false;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image248_i(),this._Image249_i(),this.notice_text_i(),this.notice_btn_i()];
		return t;
	};
	_proto._Image248_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1260;
		t.source = "grey_png";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image249_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 425;
		t.source = "notice_bg_png";
		t.width = 720;
		t.x = 615;
		t.y = 400;
		return t;
	};
	_proto.notice_text_i = function () {
		var t = new eui.Label();
		this.notice_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 220;
		t.name = "notice";
		t.size = 50;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 675;
		t.x = 635;
		t.y = 490;
		return t;
	};
	_proto.notice_btn_i = function () {
		var t = new eui.Button();
		this.notice_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.name = "btn";
		t.width = 255.44;
		t.x = 860;
		t.y = 726;
		t.skinName = gameUISkin_v0$Skin4;
		return t;
	};
	return gameUISkin_v0;
})(eui.Skin);generateEUI.paths['resource/custom_skin/result_animation.exml'] = window.result_animation = (function (_super) {
	__extends(result_animation, _super);
	var result_animation$Skin5 = 	(function (_super) {
		__extends(result_animation$Skin5, _super);
		function result_animation$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","1p_records_button_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = result_animation$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "1p_records_button_idle_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return result_animation$Skin5;
	})(eui.Skin);

	function result_animation() {
		_super.call(this);
		this.skinParts = ["start","record_btn","mute_toggle","p3_up_id","p3_up_timer","p3_rank","p3_rank_1","group","p3_rank_3","group0","p3_rank_2","group1","image","image0","image1","group2"];
		
		this.height = 1260;
		this.width = 1920;
		this.start_i();
		this.elementsContent = [this.group2_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [950],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [45],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [1050],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [45],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, [1000],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [45],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [100],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [45],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, [-50],[],this._Object5,"x");
		eui.Binding.$bindProperties(this, [45],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"x");
		eui.Binding.$bindProperties(this, [45],[],this._Object6,"y");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0.9],[],this._Object7,"scaleX");
		eui.Binding.$bindProperties(this, [0.9],[],this._Object7,"scaleY");
		eui.Binding.$bindProperties(this, [960],[],this._Object7,"x");
		eui.Binding.$bindProperties(this, [215],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object8,"scaleX");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object8,"scaleY");
		eui.Binding.$bindProperties(this, [960],[],this._Object8,"x");
		eui.Binding.$bindProperties(this, [225],[],this._Object8,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"scaleY");
		eui.Binding.$bindProperties(this, [960],[],this._Object9,"x");
		eui.Binding.$bindProperties(this, [220],[],this._Object9,"y");
		eui.Binding.$bindProperties(this, ["group2"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [-5],[],this._Object10,"y");
		eui.Binding.$bindProperties(this, [5],[],this._Object11,"y");
		eui.Binding.$bindProperties(this, [-5],[],this._Object12,"y");
		eui.Binding.$bindProperties(this, [5],[],this._Object13,"y");
		eui.Binding.$bindProperties(this, [-5],[],this._Object14,"y");
		eui.Binding.$bindProperties(this, [5],[],this._Object15,"y");
		eui.Binding.$bindProperties(this, [-5],[],this._Object16,"y");
		eui.Binding.$bindProperties(this, [5],[],this._Object17,"y");
		eui.Binding.$bindProperties(this, [-5],[],this._Object18,"y");
		eui.Binding.$bindProperties(this, ["group0"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [51],[],this._Object19,"y");
		eui.Binding.$bindProperties(this, [61],[],this._Object20,"y");
		eui.Binding.$bindProperties(this, [51],[],this._Object21,"y");
		eui.Binding.$bindProperties(this, [61],[],this._Object22,"y");
		eui.Binding.$bindProperties(this, [51],[],this._Object23,"y");
		eui.Binding.$bindProperties(this, [61],[],this._Object24,"y");
		eui.Binding.$bindProperties(this, [51],[],this._Object25,"y");
		eui.Binding.$bindProperties(this, [61],[],this._Object26,"y");
		eui.Binding.$bindProperties(this, [51],[],this._Object27,"y");
		eui.Binding.$bindProperties(this, ["group1"],[0],this._TweenItem7,"target");
		eui.Binding.$bindProperties(this, [51],[],this._Object28,"y");
		eui.Binding.$bindProperties(this, [61],[],this._Object29,"y");
		eui.Binding.$bindProperties(this, [51],[],this._Object30,"y");
		eui.Binding.$bindProperties(this, [61],[],this._Object31,"y");
		eui.Binding.$bindProperties(this, [51],[],this._Object32,"y");
		eui.Binding.$bindProperties(this, [61],[],this._Object33,"y");
		eui.Binding.$bindProperties(this, [51],[],this._Object34,"y");
		eui.Binding.$bindProperties(this, [61],[],this._Object35,"y");
		eui.Binding.$bindProperties(this, [51],[],this._Object36,"y");
	}
	var _proto = result_animation.prototype;

	_proto.start_i = function () {
		var t = new egret.tween.TweenGroup();
		this.start = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i(),this._TweenItem6_i(),this._TweenItem7_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To3_i(),this._To4_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set3_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._To7_i()];
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 4000;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set4_i(),this._To8_i(),this._To9_i(),this._To10_i(),this._To11_i(),this._To12_i(),this._To13_i(),this._To14_i(),this._To15_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._To14_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._To15_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set5_i(),this._To16_i(),this._To17_i(),this._To18_i(),this._To19_i(),this._To20_i(),this._To21_i(),this._To22_i(),this._To23_i()];
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object19_i();
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		this._Object19 = t;
		return t;
	};
	_proto._To16_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object20_i();
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		this._Object20 = t;
		return t;
	};
	_proto._To17_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object21_i();
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		this._Object21 = t;
		return t;
	};
	_proto._To18_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object22_i();
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		this._Object22 = t;
		return t;
	};
	_proto._To19_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object23_i();
		return t;
	};
	_proto._Object23_i = function () {
		var t = {};
		this._Object23 = t;
		return t;
	};
	_proto._To20_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object24_i();
		return t;
	};
	_proto._Object24_i = function () {
		var t = {};
		this._Object24 = t;
		return t;
	};
	_proto._To21_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object25_i();
		return t;
	};
	_proto._Object25_i = function () {
		var t = {};
		this._Object25 = t;
		return t;
	};
	_proto._To22_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object26_i();
		return t;
	};
	_proto._Object26_i = function () {
		var t = {};
		this._Object26 = t;
		return t;
	};
	_proto._To23_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object27_i();
		return t;
	};
	_proto._Object27_i = function () {
		var t = {};
		this._Object27 = t;
		return t;
	};
	_proto._TweenItem7_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem7 = t;
		t.paths = [this._Set6_i(),this._To24_i(),this._To25_i(),this._To26_i(),this._To27_i(),this._To28_i(),this._To29_i(),this._To30_i(),this._To31_i()];
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object28_i();
		return t;
	};
	_proto._Object28_i = function () {
		var t = {};
		this._Object28 = t;
		return t;
	};
	_proto._To24_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object29_i();
		return t;
	};
	_proto._Object29_i = function () {
		var t = {};
		this._Object29 = t;
		return t;
	};
	_proto._To25_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object30_i();
		return t;
	};
	_proto._Object30_i = function () {
		var t = {};
		this._Object30 = t;
		return t;
	};
	_proto._To26_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object31_i();
		return t;
	};
	_proto._Object31_i = function () {
		var t = {};
		this._Object31 = t;
		return t;
	};
	_proto._To27_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object32_i();
		return t;
	};
	_proto._Object32_i = function () {
		var t = {};
		this._Object32 = t;
		return t;
	};
	_proto._To28_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object33_i();
		return t;
	};
	_proto._Object33_i = function () {
		var t = {};
		this._Object33 = t;
		return t;
	};
	_proto._To29_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object34_i();
		return t;
	};
	_proto._Object34_i = function () {
		var t = {};
		this._Object34 = t;
		return t;
	};
	_proto._To30_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object35_i();
		return t;
	};
	_proto._Object35_i = function () {
		var t = {};
		this._Object35 = t;
		return t;
	};
	_proto._To31_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object36_i();
		return t;
	};
	_proto._Object36_i = function () {
		var t = {};
		this._Object36 = t;
		return t;
	};
	_proto.group2_i = function () {
		var t = new eui.Group();
		this.group2 = t;
		t.height = 1260;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group12_i(),this._Group13_i(),this._Group14_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1260;
		t.source = "p3_bg_jpg";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 290;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this.p3_rank_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 220;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this.record_btn_i(),this.mute_toggle_i(),this.p3_up_id_i(),this.p3_up_timer_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 220;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_display_png";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 165.45;
		t.source = "1p_button_right_idle_png";
		t.width = 229.09;
		t.x = 1680;
		t.y = 15;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 165.45;
		t.source = "1p_button_left_idle_png";
		t.width = 229.09;
		t.x = 10;
		t.y = 15;
		return t;
	};
	_proto.record_btn_i = function () {
		var t = new eui.Button();
		this.record_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 165;
		t.label = "";
		t.width = 230;
		t.x = 10;
		t.y = 15;
		t.skinName = result_animation$Skin5;
		return t;
	};
	_proto.mute_toggle_i = function () {
		var t = new eui.Image();
		this.mute_toggle = t;
		t.height = 165;
		t.source = "mute_button_off_png";
		t.touchEnabled = true;
		t.width = 230;
		t.x = 1680;
		t.y = 15;
		return t;
	};
	_proto.p3_up_id_i = function () {
		var t = new eui.Label();
		this.p3_up_id = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "未有结果";
		t.textAlign = "center";
		t.width = 365;
		t.x = 255.46;
		t.y = 85;
		return t;
	};
	_proto.p3_up_timer_i = function () {
		var t = new eui.Label();
		this.p3_up_timer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "未有结果";
		t.textAlign = "left";
		t.width = 280;
		t.x = 1354.84;
		t.y = 82.87;
		return t;
	};
	_proto.p3_rank_i = function () {
		var t = new eui.Group();
		this.p3_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1920;
		t.x = 0;
		t.y = 190;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -35;
		t.paddingLeft = 20;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 220;
		t.x = 264;
		t.y = 60;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 191;
		t.x = 18;
		t.y = 16;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_2_png";
		t.width = 72;
		t.x = 83;
		t.y = 23;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 220;
		t.x = 274;
		t.y = 70;
		t.elementsContent = [this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 191;
		t.x = 18;
		t.y = 16;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_1_png";
		t.width = 72;
		t.x = 83;
		t.y = 23;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 220;
		t.x = 284;
		t.y = 80;
		t.elementsContent = [this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 191;
		t.x = 18;
		t.y = 16;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_5_png";
		t.width = 72;
		t.x = 83;
		t.y = 23;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 220;
		t.x = 294;
		t.y = 90;
		t.elementsContent = [this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 191;
		t.x = 18;
		t.y = 16;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_6_png";
		t.width = 72;
		t.x = 83;
		t.y = 23;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 220;
		t.x = 304;
		t.y = 100;
		t.elementsContent = [this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 191;
		t.x = 18;
		t.y = 16;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_3_png";
		t.width = 72;
		t.x = 83;
		t.y = 23;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 220;
		t.x = 314;
		t.y = 110;
		t.elementsContent = [this._Image15_i(),this._Image16_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 191;
		t.x = 18;
		t.y = 16;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_7_png";
		t.width = 72;
		t.x = 83;
		t.y = 23;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 220;
		t.x = 324;
		t.y = 120;
		t.elementsContent = [this._Image17_i(),this._Image18_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 191;
		t.x = 18;
		t.y = 16;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_9_png";
		t.width = 72;
		t.x = 83;
		t.y = 23;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 220;
		t.x = 334;
		t.y = 130;
		t.elementsContent = [this._Image19_i(),this._Image20_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 191;
		t.x = 18;
		t.y = 16;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_10_png";
		t.width = 72;
		t.x = 83;
		t.y = 23;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 220;
		t.x = 344;
		t.y = 140;
		t.elementsContent = [this._Image21_i(),this._Image22_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 191;
		t.x = 18;
		t.y = 16;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_4_png";
		t.width = 72;
		t.x = 83;
		t.y = 23;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 220;
		t.x = 354;
		t.y = 150;
		t.elementsContent = [this._Image23_i(),this._Image24_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1p_topbar_rankdisplay_png";
		t.width = 191;
		t.x = 18;
		t.y = 16;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "irn_8_png";
		t.width = 72;
		t.x = 83;
		t.y = 23;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 410.53;
		t.width = 1920;
		t.x = 0;
		t.y = 280;
		t.elementsContent = [this.group_i(),this.group0_i(),this.group1_i()];
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.height = 419;
		t.width = 530;
		t.x = 696;
		t.y = 0;
		t.elementsContent = [this._Image25_i(),this.p3_rank_1_i()];
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 419;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "p3_m_gold_png";
		t.width = 530;
		t.y = 0;
		return t;
	};
	_proto.p3_rank_1_i = function () {
		var t = new eui.Image();
		this.p3_rank_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.source = "1_png";
		t.width = 95;
		t.x = 218;
		t.y = 190;
		return t;
	};
	_proto.group0_i = function () {
		var t = new eui.Group();
		this.group0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 372;
		t.width = 360;
		t.x = 1258;
		t.y = 56;
		t.elementsContent = [this._Image26_i(),this.p3_rank_3_i()];
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 372;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "p3_m_bronze_png";
		t.width = 360;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.p3_rank_3_i = function () {
		var t = new eui.Image();
		this.p3_rank_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.source = "9_png";
		t.width = 95;
		t.x = 133;
		t.y = 165;
		return t;
	};
	_proto.group1_i = function () {
		var t = new eui.Group();
		this.group1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 372;
		t.width = 360;
		t.x = 323;
		t.y = 56;
		t.elementsContent = [this._Image27_i(),this.p3_rank_2_i()];
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 372;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "p3_m_sliver_png";
		t.width = 360;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.p3_rank_2_i = function () {
		var t = new eui.Image();
		this.p3_rank_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.source = "5_png";
		t.width = 95;
		t.x = 128;
		t.y = 165;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 470;
		t.width = 1920;
		t.x = 0;
		t.y = 680;
		t.elementsContent = [this.image_i(),this.image0_i(),this.image1_i()];
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 270;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "p3_9_34_R_png";
		t.width = 920;
		t.x = 1000;
		t.y = 45;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 270;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "p3_5_34_L_png";
		t.width = 920;
		t.x = 0;
		t.y = 45;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.anchorOffsetX = 410;
		t.anchorOffsetY = 208;
		t.height = 416;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "p3_car_1_front_png";
		t.width = 821;
		t.x = 960;
		t.y = 220;
		return t;
	};
	return result_animation;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);