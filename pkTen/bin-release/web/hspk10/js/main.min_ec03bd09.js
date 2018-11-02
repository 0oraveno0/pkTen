var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(r,o){function s(t){try{h(n.next(t))}catch(e){o(e)}}function a(t){try{h(n["throw"](t))}catch(e){o(e)}}function h(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(s,a)}h((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return n([t,e])}}function n(i){if(r)throw new TypeError("Generator is already executing.");for(;h;)try{if(r=1,o&&(s=o[2&i[0]?"return":i[0]?"throw":"next"])&&!(s=s.call(o,i[1])).done)return s;switch(o=0,s&&(i=[0,s.value]),i[0]){case 0:case 1:s=i;break;case 4:return h.label++,{value:i[1],done:!1};case 5:h.label++,o=i[1],i=[0];continue;case 7:i=h.ops.pop(),h.trys.pop();continue;default:if(s=h.trys,!(s=s.length>0&&s[s.length-1])&&(6===i[0]||2===i[0])){h=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){h.label=i[1];break}if(6===i[0]&&h.label<s[1]){h.label=s[1],s=i;break}if(s&&h.label<s[2]){h.label=s[2],h.ops.push(i);break}s[2]&&h.ops.pop(),h.trys.pop();continue}i=e.call(t,h)}catch(n){i=[6,n],o=0}finally{r=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var r,o,s,a,h={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,i){function n(n){e.call(i,n,t)}if(RES.hasRes(t)){var r=RES.getRes(t);r?n(r):RES.getResAsync(t,n,this)}else RES.getResByUrl(t,n,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var audio_manager=function(){function t(){this.init=!1,this.sound={}}return t.getAudioManager=function(){return t.instance||(t.instance=new t),t.instance},t.prototype.mute=function(t){if(null!=this.sound)if(t)for(var e in this.sound)null!=this.sound[e]&&null!=this.sound[e].channel&&(this.sound[e].loop?this.sound[e].channel.volume=0:this.sound[e].stop||(this.sound[e].channel.volume=0));else for(var e in this.sound)null!=this.sound[e]&&null!=this.sound[e].channel&&1==this.sound[e].loop&&(this.sound[e].channel.volume=1)},t.prototype.play_sound=function(t,e,i){var n=this;if(void 0===e&&(e=!1),void 0===i&&(i=null),0!=this.init)if(this.sound[t]={},this.sound[t].sound=RES.getRes(t),this.sound[t].loop=e,this.sound[t].stop=!1,1==e){this.sound[t].channel=this.sound[t].sound.play(0,1),"true"==egret.localStorage.getItem("mute_toggle")&&(this.sound[t].channel.volume=0);var r=new egret.Timer(990*this.sound[t].sound.length,1);r.addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){n.sound[t].loop&&(r.start(),n.sound[t].channel=n.sound[t].sound.play(0,1),"true"==egret.localStorage.getItem("mute_toggle")&&(n.sound[t].channel.volume=0))},r.start())}else this.sound[t].channel=this.sound[t].sound.play(0,1),"true"==egret.localStorage.getItem("mute_toggle")&&(this.sound[t].channel.volume=0),null!=i&&i(),this.sound[t].channel.addEventListener(egret.Event.SOUND_COMPLETE,function(e){this.stop_sound(t)},this)},t.prototype.get_length=function(t){return null!=this.sound[t]?this.sound[t].sound.length:void 0},t.prototype.stop_sound=function(t){null!=this.sound[t]&&0==this.sound[t].stop&&(this.sound[t].loop=!1,this.sound[t].stop=!0,this.sound[t].channel.stop(),this.sound[t].channel=null,this.sound[t].sound=null)},t.prototype.stop_all_sound=function(){if(null!=this.sound)for(var t in this.sound)this.stop_sound(t)},t}();__reflect(audio_manager.prototype,"audio_manager");var Main=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.AudioManager=null,e.isThemeLoadEnd=!1,e.isResourceLoadEnd=!1,e}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),this.stage.scaleMode=egret.StageScaleMode.EXACT_FIT;var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this),RES.loadConfig("resource/default.res.json?v="+Math.random(),"resource/"),this.stage.addEventListener(egret.Event.ACTIVATE,this.event_actvate,this)},e.prototype.event_actvate=function(){e.timer_active=!0},e.prototype.onConfigComplete=function(t){RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);var e=new eui.Theme("resource/default.thm.json",this.stage);e.addEventListener(eui.UIEvent.COMPLETE,this.onThemeLoadComplete,this),RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this),RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this),RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this),RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,this.onItemLoadError,this),RES.loadGroup("preload"),this.AudioManager=audio_manager.getAudioManager()},e.prototype.onThemeLoadComplete=function(){this.isThemeLoadEnd=!0,this.createScene()},e.prototype.onResourceLoadComplete=function(t){"preload"==t.groupName?(this.loadingView=new LoadingUI,this.stage.addChild(this.loadingView),RES.loadGroup("resource")):"resource"==t.groupName&&(this.stage.removeChild(this.loadingView),RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this),RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this),RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this),RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,this.onItemLoadError,this),this.isResourceLoadEnd=!0,this.createScene())},e.prototype.createScene=function(){this.isThemeLoadEnd&&this.isResourceLoadEnd&&this.startCreateScene()},e.prototype.onItemLoadError=function(t){console.warn("Url:"+t.resItem.url+" has failed to load")},e.prototype.onResourceLoadError=function(t){console.warn("Group:"+t.groupName+" has failed to load"),this.onResourceLoadComplete(t)},e.prototype.onResourceProgress=function(t){"resource"==t.groupName&&this.loadingView.setProgress(t.itemsLoaded,t.itemsTotal)},e.prototype.startCreateScene=function(){this.gameUI=new GameUI(this.AudioManager),this.addChild(this.gameUI)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,e},e.timer_active=!1,e}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,i,n){function r(t){e.call(n,t)}function o(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),i.call(n))}var s=this;"undefined"!=typeof generateEUI?egret.callLater(function(){e.call(n,generateEUI)},this):"undefined"!=typeof generateEUI2?RES.getResByUrl("resource/gameEui.json",function(t,i){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(n,generateEUI2)},s)},this,RES.ResourceItem.TYPE_JSON):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(t,r,this,RES.ResourceItem.TYPE_TEXT))},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.loadingBG=new egret.Bitmap,this.loadingBG.texture=RES.getRes("5p_bg_jpg"),this.loadingBG.width=1920,this.loadingBG.height=1260,this.addChild(this.loadingBG),this.loadingIcon=new egret.Bitmap,this.loadingIcon.texture=RES.getRes("5p_loadingbar_zero_png"),this.loadingIcon.width=1575,this.loadingIcon.y=1050,this.loadingIcon.x=165,this.addChild(this.loadingIcon),this.loadingBar=new egret.Bitmap,this.loadingBar.texture=RES.getRes("5p_loadingbar_full_png"),this.loadingBar.y=1050,this.loadingBar.x=165,this.loadingBar.width=1575,this.addChild(this.loadingBar),this.textField=new egret.TextField,this.textField.width=675,this.textField.y=1135,this.textField.x=1425,this.textField.size=35,this.textField.textAlign="center",this.addChild(this.textField)},e.prototype.setProgress=function(t,e){this.loadingBar.width=t/e*1575,this.textField.text=(t/e*100).toFixed(1)+"%"},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI");var car_animation=function(t){function e(){var e=t.call(this)||this;return e.skinName="resource/custom_skin/car_animation.exml",e.percentWidth=100,e.percentHeight=100,e}return __extends(e,t),e.prototype.childrenCreated=function(){},e.prototype.play=function(t){this.start.addEventListener(egret.Event.COMPLETE,t,this),this.start.addEventListener(egret.Event.COMPLETE,this.onTweenGroupComplete,this),this.start.play()},e.prototype.stop=function(){this.start.stop()},e.prototype.onTweenGroupComplete=function(){null!=this.parent&&this.parent.removeChild(this),this.start.removeEventListener(egret.Event.COMPLETE,this.onTweenGroupComplete,this),this.dispatchEvent(new egret.Event(egret.Event.COMPLETE))},e}(eui.Component);__reflect(car_animation.prototype,"car_animation");var GameUI=function(t){function e(e){var i=t.call(this)||this;return i.audio=e,i.toggle_gp={0:"",1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""},i.car={},i.rank={},i.record={p1:{},p4:{}},i.stop={},i.bg={},i.check_bool={run:!1,result:!1,rank:!1,bg:!1,is_playing:!1,timer_count:!1,init:!0,auto_sound:!1},i.tween_timer={},i.result_num=null,i.light={},i.content={start:{},end:{},draw:{},current:{}},i.count_down={},i.next={},i.effect_sprite={},i.p2_info={},i.remaining=0,i.host="",i.mask_manager={},i.sprite_sheet_stop={},i.addEventListener(eui.UIEvent.COMPLETE,i.uiCompHandler,i),i.skinName="resource/custom_skin/gameUISkin_v0.exml",i.load_data(),i.initWebSocket(),i}return __extends(e,t),e.prototype.onReceiveMessage=function(t){var e=this.socket.readUTF(),i=JSON.parse(e);console.log(i),"error"==i.code||("draw"==i.code?this.check_bool.init||(this.content.record=i,this.content.draw=i,this.draw(this.content.draw)):"start"==i.code?(this.content.start=i,this.content.start.time_diff=this.time_count(this.content.start.time),this.p1_time_animation()):"end"==i.code?this.check_bool.init&&(this.check_bool.init=!1,this.content.record=i,this.content.end=i,this.on_set_P1(i)):"reconnect"==i.code&&(this.reset_all(),this.check_bool.init=!1,this.content.record=i,this.content.end=i,this.on_set_P1(i)))},e.prototype.load_data=function(){egret.localStorage.setItem("mute_toggle","true");for(var t=0;10>t;t++)this.car[String(t)]={},this.car[String(t)].gp=this.car_gp.getChildAt(t),this.car[String(t)].c=this.car[String(t)].gp.getChildByName("c"),this.car[String(t)].w=this.car[String(t)].gp.getChildByName("w"),this.car[String(t)].w2=this.car[String(t)].gp.getChildByName("w2"),this.car[String(t)].e1=this.car[String(t)].gp.getChildByName("e1"),this.car[String(t)].e2=this.car[String(t)].gp.getChildByName("e2"),this.car[String(t)].e3=this.car[String(t)].gp.getChildByName("e3");this.effect_sprite["2p_thundereffect"]=[],this.effect_sprite["2p_boosteffect_00000"]=[],this.effect_sprite["2p_speeddash_effect"]=[];for(var t=0;9>t;t++)this.effect_sprite["2p_thundereffect"][t]="2p_thundereffect_0"+String(t+1)+"_png",this.effect_sprite["2p_boosteffect_00000"][t]="2p_boosteffect_0000"+String(t)+"_png",this.effect_sprite["2p_speeddash_effect"][t]="2p_speeddash_effect_0"+String(t+1)+"_png";this.effect_sprite["2p_thundereffect"][9]="2p_thundereffect_10_png",this.effect_sprite["2p_speeddash_effect"][9]="2p_speeddash_effect_10_png",this.effect_sprite["2p_boosteffect_00000"][8]="2p_boosteffect_00009_png";for(var t=9;23>t;t++)this.effect_sprite["2p_boosteffect_00000"][t]="2p_boosteffect_000"+String(t+1)+"_png";this.rank.p1={};for(var t=0;10>t;t++){this.rank.p1[String(t)]={},this.rank.p1[String(t)].gp=this.p1_rank.getChildAt(t);var e=this.rank.p1[String(t)].gp;this.rank.p1[String(t)].num=e.getChildAt(1)}this.rank.p2={};for(var t=0;10>t;t++){this.rank.p2[String(t)]={},this.rank.p2[String(t)].gp=this.p2_rank.getChildAt(t);var e=this.rank.p2[String(t)].gp;this.rank.p2[String(t)].num=e.getChildAt(1)}this.stop.gp=this.stop_gp,this.stop.goalflag=this.goalflag;for(var i=[],t=0;12>t;t++)i[t]="2p_goalflag_"+(t+1)+"_png";this.stop.goalflag_sprite=i,this.bg.g0=this.p2_ground.getChildAt(0),this.bg.g1=this.p2_ground.getChildAt(1),this.bg.s0=this.p2_sky.getChildAt(0),this.bg.s1=this.p2_sky.getChildAt(1),this.bg.m0=this.p2_mid_ground.getChildAt(0),this.bg.m1=this.p2_mid_ground.getChildAt(1),this.record.p1.id=this.p1_record_id,this.record.p1.date=this.p1_record_date,this.record.p1.rank=this.p1_record_rank,this.record.p1.td=this.p1_record_td;for(var t=0;4>t;t++)this.light[String(t)]=this.p1_light.getChildAt(t);this.count_down.text=this.p1_count_down_text,this.count_down.Image=this.p1_count_down_img,this.next.id=this.p1_next_id,this.next.timer=this.p1_next_timer,this.next.p4_id=this.p4_next_id,this.next.p4_timer=this.p4_next_timer,this.p2_info.id=this.p2_id_date.getChildByName("id"),this.p2_info.date=this.p2_id_date.getChildByName("date"),this.remaining_count(),this.init_p4()},e.prototype.on_set_P1=function(t){if(null==t.data.draw_numbers){this.content.current=this.content.end;var e=this.content.end.data.end_time.split("T"),i=e[1].split(":");this.p2_info.id.text="期号 "+this.content.end.data.issue,this.p2_info.date.text=e[0]+"   "+i[0]+":"+i[1],this.check_bool.timer_count=!0,1==this.check_bool.is_playing,this.check_bool.timer_count=!0,this.count_down.Image.visible=!1,this.record_gp.visible=!1,this.start_gp.visible=!0,this.check_bool.rank=!0,this.check_bool.run=!0,this.check_bool.bg=!0,this.p2_car_loop_animation(),this.p2_change_ranking(),this.p2_car_run(),this.p2_ground_animation()}else{this.result_num=[];for(var n=0;10>n;n++)this.result_num[n]=Number(t.data.draw_numbers[n])-1;this.on_set_p4(0),this.set_p1_rank(this.content.end.data.end_time,this.content.end.data.issue,this.result_num),this.result_num=null}this.init_image.visible=!1},e.prototype.reset_all=function(){this.check_bool={run:!1,result:!1,rank:!1,bg:!1,is_playing:!1,timer_count:!1,init:!0,auto_sound:!1},this.result_num=null,this.content={start:{},end:{},draw:{},current:{}},this.remaining=0,this.animation_child.removeChildren(),this.audio.stop_all_sound();for(var t=0;4>t;t++){var e=this.light[String(t)];e.visible=!0}this.p1_car_gp.visible=!0,this.start_gp.visible=!1;for(var i in this.tween_timer)this.tween_timer[i].stop();this.stop.gp.x=-950,null!=this.sprite_sheet_stop.goalflag&&(this.sprite_sheet_stop.goalflag=!0)},e.prototype.set_p1_rank=function(t,e,i){for(var n=0;10>n;n++){var r=this.rank.p1[String(n)].num;r.source="irn_"+(i[n]+1)+"_png"}var o=this.record.p1.id,s=this.record.p1.date,a=this.record.p1.rank,h=this.record.p1.td,_=t.split("T"),c=_[1].split(":");o.text="期号             "+e,s.text=_[0]+"   "+c[0]+":"+c[1];var p="",g="",d=i[0]+i[1]+2;p=d>11?"大":"小",g=d%2==0?"双":"单",a.text=d+"          "+p+"        "+g;for(var l="",n=0;5>n;n++)l+=i[n]-i[9-n]>0?"龙     ":"虎     ";h.text=l},e.prototype.init_p4=function(){var t=this;this.record.p4.toggle_gp={},this.record.p4.toggle_gp.gp=this.record_gp.getChildByName("toggle_gp");for(var e=function(e){i.record.p4.toggle_gp[String(e)]={},i.record.p4.toggle_gp[String(e)].gp=i.record.p4.toggle_gp.gp.getChildAt(e);var n=i.record.p4.toggle_gp[String(e)].gp.getChildAt(2);i.record.p4.toggle_gp[String(e)].num=n.getChildByName("num");var r=i.record.p4.toggle_gp[String(e)].gp.getChildAt(1);i.record.p4.toggle_gp[String(e)].btn=r.getChildByName("btn"),i.record.p4.toggle_gp[String(e)].img=r.getChildByName("img");var o=i.record.p4.toggle_gp[String(e)].btn;o.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.on_set_p4(e)},i)},i=this,n=0;10>n;n++)e(n);this.record.p4.chart={},this.record.p4.chart.gp=this.record_gp.getChildByName("chart"),this.record.p4.chart.title=this.record.p4.chart.gp.getChildByName("title");var r=this.record.p4.chart.gp.getChildByName("gp");this.record.p4.chart.issue=r.getChildByName("issue"),this.record.p4.chart.chart={};for(var o=r.getChildByName("gp"),n=0;29>n;n++){this.record.p4.chart.chart[String(n)]={};var s=o.getChildAt(n);this.record.p4.chart.chart[String(n)].point=s.getChildByName("point"),this.record.p4.chart.chart[String(n)].line=s.getChildByName("line");this.record.p4.chart.chart[String(n)].line}this.record.p4.count_down=this.record_gp.getChildByName("count_down"),this.record.p4.count_down=this.record.p4.count_down.getChildAt(1),this.record.p4.two_face={},this.record.p4.two_face.gp=this.record_gp.getChildByName("two_face");for(var n=0;4>n;n++)this.record.p4.two_face[String(n)]=this.record.p4.two_face.gp.getChildAt(n+1);this.record.p4.all_open={},this.record.p4.all_open.gp=this.record_gp.getChildByName("all_open"),this.record.p4.all_open.gp=this.record.p4.all_open.gp.getChildAt(2);for(var n=0;10>n;n++){this.record.p4.all_open[String(n)]={},this.record.p4.all_open.gp_i=this.record.p4.all_open.gp.getChildAt(n);for(var a=0;3>a;a++)this.record.p4.all_open[String(n)][String(a)]=this.record.p4.all_open.gp_i.getChildAt(a)}},e.prototype.on_set_p4=function(t){if(null!=this.content.record.data.stat){this.record.p4.two_face[String(0)].text="小"+this.content.record.data.stat[t].big_and_even.small_cnt,this.record.p4.two_face[String(1)].text="双"+this.content.record.data.stat[t].big_and_even.event_cnt,this.record.p4.two_face[String(2)].text="单"+this.content.record.data.stat[t].big_and_even.odd_cnt,this.record.p4.two_face[String(3)].text="大"+this.content.record.data.stat[t].big_and_even.big_cnt;for(var e=0;10>e;e++){this.record.p4.all_open[String(e)][String(0)].text=e+1,this.record.p4.all_open[String(e)][String(1)].text=this.content.record.data.stat[t].total_count[String(e+1)],this.record.p4.all_open[String(e)][String(2)].text=this.content.record.data.stat[t].total_not_count[String(e+1)];var i=this.record.p4.toggle_gp[String(e)].btn,n=this.record.p4.toggle_gp[String(e)].num;n.source="irn_"+String(this.content.record.data.draw_numbers[e])+"_png",i.source="4p_front_car_"+String(this.content.record.data.draw_numbers[e])+"_png",e!=t?this.record.p4.toggle_gp[String(e)].img.visible=!0:this.record.p4.toggle_gp[String(e)].img.visible=!1}var r=["一","二","三","四","五","六","七","八","九","十"];this.record.p4.chart.title.text="车号                       第"+r[t]+"名走势图";var o="",s=0,a=[],h=[];for(var _ in this.content.record.data.stat[t].graph_data)a[s]=_,h[s]=this.content.record.data.stat[t].graph_data[_],s++;for(var e=a.length-1;e>=0;e--){var c=Number(a[e])%100;o+=10>c?"0"+String(c)+" ":String(c)+" ";var p=this.record.p4.chart.chart[String(e)].point;p.$setY(-64.5*(10-h[e])+10);var g=this.record.p4.chart.chart[String(e)].line;g.$setY(-64.5*(10-h[e])+10)}for(var e=0;e<a.length;e++)if(e!=a.length-1){var d=this.record.p4.chart.chart[String(e+1)].line.localToGlobal().x-this.record.p4.chart.chart[String(e)].line.localToGlobal().x,l=this.record.p4.chart.chart[String(e+1)].line.localToGlobal().y-this.record.p4.chart.chart[String(e)].line.localToGlobal().y;this.record.p4.chart.chart[String(e)].line.$setWidth(Math.pow(d*d+l*l,.5)),this.record.p4.chart.chart[String(e)].line.$setRotation(Math.atan2(l,d)/Math.PI*180)}this.record.p4.chart.issue.text=o}},e.prototype.p1_time_animation=function(){var t=this;if(1!=this.check_bool.timer_count){this.check_bool.timer_count=!0,this.content.current=this.content.start;var e=this.content.current.data.remaining,i=this.content.current.time,n=this.content.current.time_diff,r=this.content.current.data.issue,o=Number((e+this.time_count(i)-n).toFixed(0)),s=o,a=this.next.id,h=this.next.timer,_=this.next.p4_id,c=this.next.p4_timer,p=this.count_down.text,g=this.count_down.Image,d=this.content.current.data.end_time.split("T"),l=d[1].split(":");a.text="下期 "+r+" 期",h.text="下期时间 "+l[0]+":"+l[1],_.text=a.text,c.text=h.text,this.p2_info.id.text="期号 "+r,this.p2_info.date.text=d[0]+"   "+l[0]+":"+l[1],this.tween_timer.p1_time_animation=new egret.Timer(1e3,o);var u=this.tween_timer.p1_time_animation;this.p1_display_timer(s,p,g),s--,u.addEventListener(egret.TimerEvent.TIMER,function(){t.p1_display_timer(s,p,g),s--,0>s&&u.stop()},u.start())}},e.prototype.remaining_count=function(){var t=this,e=new egret.Timer(10,1);e.addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){Main.timer_active&&(Main.timer_active=!1,console.log("reconnect"),t.init_image.visible=!0,t.sendData("reconnect")),e.start()},e.start())},e.prototype.p1_display_timer=function(t,e,i){t>=9?(0==this.check_bool.is_playing&&this.audio.play_sound("count_wav",!1),e.text=String(t+1),i.visible=!1,e.visible=!0):(2>=t?(e.visible=!1,i.visible=!1):(i.source="cdn_"+(t+1)+"_png",i.visible=!0),4>t&&!this.check_bool.is_playing?this.play():0==this.check_bool.is_playing&&this.audio.play_sound("count_wav",!1),e.visible=!1),t>=0?this.record.p4.count_down.text=t+1:this.record.p4.count_down.text=0},e.prototype.play=function(){var t=this;this.check_bool.is_playing=!0,this.record_gp.visible=!1,this.record_btn.enabled=!1,this.audio.play_sound("start_1_wav",!1),this.tween_timer.play_p=new egret.Timer(this.audio.get_length("start_1_wav"),1);var e=this.tween_timer.play_p;e.addEventListener(egret.TimerEvent.TIMER,function(){t.audio.play_sound("start_2_wav",!0)},e.start());var i=3;this.tween_timer.play_l=new egret.Timer(1e3,4);var n=this.tween_timer.play_l;n.addEventListener(egret.TimerEvent.TIMER,function(){var e=t.light[String(i)];e.visible=!1,0!=i&&t.audio.play_sound("light_wav"),i--},n.start()),n.addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){n.stop(),t.p1_car_run()},n.start())},e.prototype.p1_car_run=function(){var t=this;this.audio.play_sound("light_0_wav"),this.count_down.Image.visible=!1;var e=new car_animation;this.animation_child.addChild(e),this.p1_car_gp.visible=!1,this.audio.stop_sound("start_2_wav"),this.audio.play_sound("start_3_wav"),e.play(function(){null!=e.parent&&(t.start_gp.visible=!0,t.audio.play_sound("fire_wav",!0),t.check_bool.rank=!0,t.check_bool.run=!0,t.check_bool.bg=!0,t.p2_car_loop_animation(),t.p2_change_ranking(),t.p2_car_run(),t.p2_ground_animation())})},e.prototype.p2_car_run=function(){for(var t=this,e=function(e){var n=i.car[String(e)].e1,r=i.car[String(e)].e2,o=i.car[String(e)].e3;i.sprite_sheet(n,i.effect_sprite["2p_boosteffect_00000"],"car_c1"),i.sprite_sheet(r,i.effect_sprite["2p_thundereffect"],"car_c2"),i.sprite_sheet(o,i.effect_sprite["2p_speeddash_effect"],"car_c3");var s=i.car[String(e)].w,a=i.car[String(e)].w2;i.tween_timer["p2_car_run"+String(e)]=new egret.Timer(1,1);var h=i.tween_timer["p2_car_run"+String(e)];h.addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){h.stop(),s.rotation-=30,a.rotation-=30,t.check_bool.run&&h.start()},h.start())},i=this,n=0;10>n;n++)e(n)},e.prototype.p2_ground_animation=function(){var t=this;this.tween_timer.p2_ground_animation=new egret.Timer(10,1);var e=this.tween_timer.p2_ground_animation;e.addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){if(e.stop(),t.check_bool.bg){for(var i=0;2>i;i++)t.bg["g"+i].x>=1920?t.bg["g"+i].x=-7240:t.bg["g"+i].x+=20,t.bg["s"+i].x>=1920?t.bg["s"+i].x=-2695:t.bg["s"+i].x+=5,t.bg["m"+i].x>=1920?t.bg["m"+i].x=-2195:t.bg["m"+i].x+=10;e.start()}},e.start())},e.prototype.p2_change_ranking=function(){var t=this;this.tween_timer.p2_change_ranking=new egret.Timer(1,1);var e=this.tween_timer.p2_change_ranking;e.addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){e.stop();for(var i=[],n=0;10>n;n++){for(var r=t.car[String(n)].gp,o=0,s=0;10>s;s++){var a=t.car[String(s)].gp;r.x>a.x&&(o+=1)}i[n]=o}for(var h="",n=0;10>n;n++){h+=i[n];for(var s=0;10>s;s++)if(n==i[s]){var _=t.rank.p2[String(n)].num;_.source="irn_"+(s+1)+"_png"}}t.check_bool.rank&&t.p2_change_ranking()},e.start())},e.prototype.p2_car_loop_animation=function(){for(var t=this,e={},i={},n=function(n){var o=r.car[String(n)].gp;r.tween_timer["p2_car_loop_animation"+String(n)]=new egret.Timer(20,75),i[String(n)]=r.tween_timer["p2_car_loop_animation"+String(n)],e[String(n)]={},e[String(n)].d=1545*Math.random(),e[String(n)].n=.95*Math.random()+.05,i[String(n)].addEventListener(egret.TimerEvent.TIMER,function(){if(Math.abs(o.x-e[String(n)].d)>5){var i=t.car[String(n)].e1,r=t.car[String(n)].e2,s=t.car[String(n)].e3;if(o.x>e[String(n)].d){var a=Math.abs(o.x-e[String(n)].d)/25*e[String(n)].n+3;a>=23?(i.visible=!0,r.visible=!0,s.visible=!0):23>a&&a>=17?(i.visible=!0,r.visible=!0,s.visible=!1):17>a&&a>=10?(i.visible=!0,r.visible=!1,s.visible=!1):(i.visible=!1,r.visible=!1,s.visible=!1),o.x-=a}else{i.visible=!1,r.visible=!1,s.visible=!1;var a=Math.abs(o.x-e[String(n)].d)/25*e[String(n)].n+3;o.x+=a}}},i[String(n)].start()),i[String(n)].addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){if(i[String(n)].stop(),0==n)if(t.check_bool.result){t.check_bool.result=!1;for(var r=9999,o=0;10>o;o++)e[String(o)].d<r&&(r=e[String(o)].d);t.p2_car_animation(t.result_num)}else t.p2_car_loop_animation(),null!=t.result_num&&(t.check_bool.result=!0)},i[String(n)].start())},r=this,o=0;10>o;o++)n(o)},e.prototype.p2_car_animation=function(t){for(var e=this,i={},n={},r=function(r){var s=o.car[String(r)].e1,a=o.car[String(r)].e2,h=o.car[String(r)].e3;s.visible=!1,a.visible=!1,h.visible=!1;var _=o.car[String(t[r])].gp;o.tween_timer["p2_car_animation"+String(r)]=new egret.Timer(20,75),n[String(r)]=o.tween_timer["p2_car_animation"+String(r)],i[String(r)]={},i[String(r)].d=100*Math.random()+100*r+500,n[String(r)].addEventListener(egret.TimerEvent.TIMER,function(){Math.abs(_.x-i[String(r)].d)>5?_.x>i[String(r)].d?_.x-=Math.abs(_.x-i[String(r)].d)/20+3:_.x+=Math.abs(_.x-i[String(r)].d)/20+3:_.x=i[String(r)].d},n[String(r)].start()),n[String(r)].addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){if(n[String(r)].stop(),_.x=i[String(r)].d,0==r){for(var t=9999,o=0;10>o;o++)i[String(o)].d<t&&(t=i[String(o)].d);e.check_bool.rank=!1,e.p2_car_stop_animation(t)}},n[String(r)].start())},o=this,s=0;10>s;s++)r(s)},e.prototype.p2_car_stop_animation=function(t){var e=this;this.sprite_sheet(this.stop.goalflag,this.stop.goalflag_sprite,"goalflag"),this.tween_timer.p2_car_stop_animation=new egret.Timer(20,75);var i=this.tween_timer.p2_car_stop_animation;i.addEventListener(egret.TimerEvent.TIMER,function(){if(t>e.stop.gp.x)e.stop.gp.x+=50;else{e.check_bool.run=!1,e.sprite_sheet_stop.car_c1=!0,e.sprite_sheet_stop.car_c1=!0,e.sprite_sheet_stop.car_c1=!0,e.check_bool.bg=!1,i.stop(),e.audio.stop_sound("fire_wav"),e.audio.play_sound("finish_wav",!1);var n=new egret.Timer(20,100),r=!1;n.addEventListener(egret.TimerEvent.TIMER,function(){r?e.p2_stop_img.alpha-=.05:e.p2_stop_img.alpha+=.05,e.p2_stop_img.alpha>=1?r=!0:e.p2_stop_img.alpha<=0&&(n.stop(),e.check_bool.run=!0,e.p2_car_run(),e.p2_car_finish_animation())},n.start())}},i.start())},e.prototype.p2_car_finish_animation=function(){for(var t=this,e={},i={},n=function(n){var o=r.car[String(n)].gp;r.tween_timer["p2_car_stop_animation"+String(n)]=new egret.Timer(20,75),i[String(n)]=r.tween_timer["p2_car_stop_animation"+String(n)],e[String(n)]={},i[String(n)].addEventListener(egret.TimerEvent.TIMER,function(){o.x-=50},i[String(n)].start()),i[String(n)].addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){i[String(n)].stop(),o.x=1920,0==n&&(t.sprite_sheet_stop.goalflag=!0,t.start_gp.visible=!1,t.stop.gp.x=-950,t.p3_car_animation())},i[String(n)].start())},r=this,o=0;10>o;o++)n(o)},e.prototype.p3_car_animation=function(){var t=this,e=new resultAnimation,i={};this.set_p1_rank(this.content.draw.data.end_time,this.content.draw.data.issue,this.result_num),this.on_set_p4(0),this.check_bool.run=!1,this.p1_car_gp.visible=!0,this.audio.play_sound("win_wav");for(var n=0;4>n;n++){var r=this.light[String(n)];r.visible=!0}for(var n=0;10>n;n++){i[String(n)]=e.p3_rank.getChildAt(n);var o=i[n];i[String(n)]=o.getChildAt(1);var s=i[String(n)];if(s.source="irn_"+(this.result_num[n]+1)+"_png",3>n){var a=e["p3_rank_"+String(n+1)];a.source=String(this.result_num[n]+1)+"_png",0==n?e.image1.source="p3_car_"+(this.result_num[n]+1)+"_front_png":1==n?e.image0.source="p3_"+(this.result_num[n]+1)+"_34_L_png":2==n&&(e.image.source="p3_"+(this.result_num[n]+1)+"_34_R_png")}}var h=this.content.current.data.end_time.split("T"),_=h[1].split(":");e.p3_up_id.text="期号 "+this.content.current.data.issue,e.p3_up_timer.text="时间   "+_[0]+":"+_[1],this.p3_mute_TgeHandler(e.mute_toggle),e.mute_toggle.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.mute_TgeHandler(),t.p3_mute_TgeHandler(e.mute_toggle)},this),e.record_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.record_gp.visible=!0},this),this.animation_child.addChild(e),e.play(function(){e.mute_toggle.removeEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.mute_TgeHandler(),t.p3_mute_TgeHandler(e.mute_toggle)},t),e.record_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.record_gp.visible=!0},t),null!=e.parent&&(t.check_bool.is_playing=!1,t.check_bool.timer_count=!1,t.p1_time_animation(),t.result_num=null,t.record_gp.visible=!0,t.record_btn.enabled=!0)})},e.prototype.p3_mute_TgeHandler=function(t){"true"==egret.localStorage.getItem("mute_toggle")?t.source="mute_button_off_png":"false"==egret.localStorage.getItem("mute_toggle")&&(t.source="mute_button_on_png")},e.prototype.uiCompHandler=function(){this.play_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.play,this),this.record_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.p1_record_gp_v,this),this.record_disable_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.p1_record_gp_dis_v,this),this.mute_toggle.addEventListener(egret.TouchEvent.TOUCH_TAP,this.mute_TgeHandler,this),this.p2_mute_toggle.addEventListener(egret.TouchEvent.TOUCH_TAP,this.mute_TgeHandler,this),this.p4_mute_toggle.addEventListener(egret.TouchEvent.TOUCH_TAP,this.mute_TgeHandler,this)},e.prototype.draw=function(t){this.result_num=[];for(var e=[],i=0;10>i;i++)e[i]=t.data.draw_numbers[i];for(var i=0;10>i;i++)this.result_num[i]=Number(e[i])-1},e.prototype.p1_record_gp_v=function(){this.record_gp.visible=!0},e.prototype.p1_record_gp_dis_v=function(){this.record_gp.visible=!1},e.prototype.mute_TgeHandler=function(){var t=this;if(0==this.audio.init&&(this.audio.init=!0,this.check_bool.run&&this.audio.play_sound("fire_wav",!0),this.check_bool.is_playing&&1==this.p1_car_gp.visible&&1==this.p1_car_gp.visible)){this.audio.play_sound("start_1_wav",!1),this.tween_timer.mute_TgeHandler=new egret.Timer(this.audio.get_length("start_1_wav"),1);var e=this.tween_timer.mute_TgeHandler;e.addEventListener(egret.TimerEvent.TIMER,function(){t.check_bool.is_playing&&1==t.p1_car_gp.visible&&1==t.p1_car_gp.visible&&t.audio.play_sound("start_2_wav",!0)},e.start())}"true"==egret.localStorage.getItem("mute_toggle")?(egret.localStorage.setItem("mute_toggle","false"),this.mute_toggle.source="mute_button_on_png",this.p2_mute_toggle.source="2p_mute_button_unmute_png",this.p4_mute_toggle.source="mute_button_on_png",this.audio.mute(!1)):"false"==egret.localStorage.getItem("mute_toggle")&&(egret.localStorage.setItem("mute_toggle","true"),this.mute_toggle.source="mute_button_off_png",this.p2_mute_toggle.source="2p_mute_button_mute_png",this.p4_mute_toggle.source="mute_button_off_png",this.audio.mute(!0))},e.prototype.initWebSocket=function(){this.host="backend.0371zkw.com/lottery/17/","https:"==document.location.protocol?this.host="wss://"+this.host:this.host="ws://"+this.host,this.socket=new egret.WebSocket,this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA,this.onReceiveMessage,this),this.socket.addEventListener(egret.Event.CONNECT,this.onSocketOpen,this),this.socket.addEventListener(egret.Event.CLOSE,this.onSocketClose,this),this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onSocketError,this),this.socket.connectByUrl(this.host)
},e.prototype.sendData=function(t){this.socket.writeUTF(t)},e.prototype.onSocketOpen=function(){},e.prototype.onSocketClose=function(){var t=this;this.socket.connectByUrl(this.host),this.show_notice("网络断线，重新连接中",null);var e=new egret.Timer(1e4,1);e.addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){1==t.socket.connected?(e.stop(),t.notice_gp.visible=!1):(e.start(),t.reset_all(),t.socket.connectByUrl(t.host),t.show_notice("网络断线，重新连接中",null))},e.start())},e.prototype.onSocketError=function(){},e.prototype.formatDate=function(){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,n=t.getDate()<10?"0"+t.getDate():t.getDate(),r=t.getHours()<10?"0"+t.getHours():t.getHours(),o=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),s=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds(),a=60*(60*(24*(30*(12*Number(e)+Number(i))+Number(n))+Number(r))+Number(o))+Number(s),h={Year:e,Months:i,Day:n,Hours:r,Minutes:o,Seconds:s,count:a};return h},e.prototype.time_count=function(t){var e=t.split("T"),i=e[0].split("-"),n=e[1].split(":"),r=60*(60*(24*(30*(12*Number(i[0])+Number(i[1]))+Number(i[2]))+Number(n[0]))+Number(n[1]))+Number(n[2]);return r-this.formatDate().count},e.prototype.show_notice=function(t,e){this.notice_gp.visible=!0,this.notice_text.text=t,null!=e?(this.notice_btn.visible=!0,this.notice_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,e,this)):this.notice_btn.visible=!1},e.prototype.draw_mask=function(t,e){t.contains(this.mask_manager[e])&&t.removeChild(this.mask_manager[e]),this.mask_manager[e]=new egret.Shape,this.mask_manager[e].graphics.beginFill(255),this.mask_manager[e].graphics.drawRoundRect(0,0,t.width,t.height,25),this.mask_manager[e].graphics.endFill(),t.addChild(this.mask_manager[e]),t.mask=this.mask_manager[e]},e.prototype.sprite_sheet=function(t,e,i,n){var r=this;void 0===n&&(n=50),this.sprite_sheet_stop[i]=!1;var o=t,s=[];s=e;var a=0,h=new egret.Timer(n,1);h.addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){h.stop(),1==r.sprite_sheet_stop[i]||(s.length==a+1?a=0:a++,o.source=s[a],h.start())},h.start())},e}(eui.Component);__reflect(GameUI.prototype,"GameUI");var resultAnimation=function(t){function e(){var e=t.call(this)||this;return e.skinName="resource/custom_skin/result_animation.exml",e.percentWidth=100,e.percentHeight=100,e}return __extends(e,t),e.prototype.childrenCreated=function(){},e.prototype.play=function(t){this.start.addEventListener(egret.Event.COMPLETE,t,this),this.start.addEventListener(egret.Event.COMPLETE,this.onTweenGroupComplete,this),this.start.play()},e.prototype.stop=function(){this.start.stop()},e.prototype.onTweenGroupComplete=function(){null!=this.parent&&this.parent.removeChild(this),this.start.removeEventListener(egret.Event.COMPLETE,this.onTweenGroupComplete,this),this.dispatchEvent(new egret.Event(egret.Event.COMPLETE))},e}(eui.Component);__reflect(resultAnimation.prototype,"resultAnimation");