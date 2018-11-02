
 class GameUI extends eui.Component {

	private play_btn: eui.Button;
	private record_btn: eui.Button;
	private record_disable_btn: eui.Button;
	private mute_toggle: eui.Image;
	private p2_mute_toggle:eui.Image;
	private p4_mute_toggle: eui.Image;
	private in_game_gp: eui.Group;
	private start_gp: eui.Group;
	private car_gp:eui.Group;
	private stop_gp:eui.Group;
	private p1_rank:eui.Group;
	private p1_record_id:eui.Label;
	private p1_record_date:eui.Label;
	private p1_record_rank:eui.Label;
	private p1_record_td:eui.Label;
	private p1_light:eui.Group;
	private p1_car_gp:eui.Group;
	private p2_rank:eui.Group;
	private p2_ground:eui.Group;
	private p2_mid_ground:eui.Group;
	private p2_sky:eui.Group;
	private p2_stop_img:eui.Image;
	private p2_id_date:eui.Group;
	private goalflag:eui.Image;
	private init_image:eui.Image;
	private p1_count_down_text:eui.Label;
	private p1_count_down_img:eui.Image;
	private p1_next_id:eui.Label;
	private p1_next_timer:eui.Label;
	private p4_next_id:eui.Label;
	private p4_next_timer:eui.Label;
	private record_gp:eui.Group;
	private animation_child:eui.Group;
	private toggle_gp = {"0":"","1":"","2":"","3":"","4":"","5":"","6":"","7":"","8":"","9":""};
	private car = {};
	private rank = {};
	private record = {"p1":{},"p4":{}};
	private stop = {};
	private bg = {};
	private check_bool = {"run":false,"result":false,"rank":false,"bg":false,"is_playing":false,"timer_count":false,"init":true,"auto_sound":false};
	private tween_timer = {};
	private result_num = null;
	private light = {}
	private content = {"start":{},"end":{},"draw":{},"current":{}};
	private count_down = {};
	private next = {};
	private effect_sprite = {}
	private p2_info = {}
	private remaining = 0;
	constructor(private audio:audio_manager) {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
        this.skinName = "resource/custom_skin/gameUISkin_v0.exml";
		this.load_data();
        this.initWebSocket();
	}
	
    private onReceiveMessage(e: egret.Event): void {
        var byte: string = this.socket.readUTF();
        var content: Object = JSON.parse(byte);
        console.log(content);
		if(content["code"] == "error"){
			//this.show_notice("网络错误",()=>{this.notice_gp.visible = false});
        }else if(content["code"] == "draw"){
			if(!this.check_bool.init){
				this.content["record"] = content;
				this.content["draw"] = content;
				this.draw(this.content["draw"]);
			}
        }else if(content["code"] == "start"){
			this.content["start"] = content;
			this.content["start"]["time_diff"] = this.time_count(this.content["start"]["time"]);
			this.p1_time_animation();
        }else if(content["code"] == "end"){
			if(this.check_bool.init){
				this.check_bool.init = false;
				this.content["record"] = content;
				this.content["end"] = content;
				this.on_set_P1(content);
			}
        }else if(content["code"] == "reconnect"){
			this.reset_all();
			this.check_bool.init = false;
			this.content["record"] = content;
			this.content["end"] = content;
			this.on_set_P1(content);
		}
    }

	public load_data(){

		egret.localStorage.setItem("mute_toggle","true")

		for(let i = 0;i<10;i++){
			this.car[String(i)] = {};
			this.car[String(i)]["gp"] = this.car_gp.getChildAt(i);
			this.car[String(i)]["c"] = this.car[String(i)]["gp"].getChildByName("c");
			this.car[String(i)]["w"] = this.car[String(i)]["gp"].getChildByName("w");
			this.car[String(i)]["w2"] = this.car[String(i)]["gp"].getChildByName("w2");
			this.car[String(i)]["e1"] = this.car[String(i)]["gp"].getChildByName("e1");
			this.car[String(i)]["e2"] = this.car[String(i)]["gp"].getChildByName("e2");
			this.car[String(i)]["e3"] = this.car[String(i)]["gp"].getChildByName("e3");
		}

		this.effect_sprite["2p_thundereffect"] = [];
		this.effect_sprite["2p_boosteffect_00000"] = [];
		this.effect_sprite["2p_speeddash_effect"] = [];
		for(let i = 0;i<9;i++){
			this.effect_sprite["2p_thundereffect"][i] = "2p_thundereffect_0" + String(i + 1) +  "_png";
			this.effect_sprite["2p_boosteffect_00000"][i] = "2p_boosteffect_0000" + String(i) +  "_png";
			this.effect_sprite["2p_speeddash_effect"][i] = "2p_speeddash_effect_0" + String(i + 1) +  "_png";
		}
		this.effect_sprite["2p_thundereffect"][9] = "2p_thundereffect_10" +  "_png";
		this.effect_sprite["2p_speeddash_effect"][9] = "2p_speeddash_effect_10" +  "_png";
		this.effect_sprite["2p_boosteffect_00000"][8] = "2p_boosteffect_00009" +  "_png";
		for(let i = 9;i<23;i++){
			this.effect_sprite["2p_boosteffect_00000"][i] = "2p_boosteffect_000" + String(i + 1) +  "_png";
		}

		this.rank["p1"] = {};
		for(let i = 0;i<10;i++){
			this.rank["p1"][String(i)] = { };
			this.rank["p1"][String(i)]["gp"] = this.p1_rank.getChildAt(i);
			let gp:eui.Group = this.rank["p1"][String(i)]["gp"];
			this.rank["p1"][String(i)]["num"] = gp.getChildAt(1);
		}

		this.rank["p2"] = {};
		for(let i = 0;i<10;i++){
			this.rank["p2"][String(i)] = { };
			this.rank["p2"][String(i)]["gp"] = this.p2_rank.getChildAt(i);
			let gp:eui.Group = this.rank["p2"][String(i)]["gp"];
			this.rank["p2"][String(i)]["num"] = gp.getChildAt(1);
		}

		this.stop["gp"] = this.stop_gp;
		this.stop["goalflag"] = this.goalflag;
		let goalflag_sprite = [];
		for(let i = 0;i<12;i++){
			goalflag_sprite[i] = "2p_goalflag_" + (i + 1) + "_png";
		}
		this.stop["goalflag_sprite"] = goalflag_sprite;

		this.bg["g0"] = this.p2_ground.getChildAt(0);
		this.bg["g1"] = this.p2_ground.getChildAt(1);
		this.bg["s0"] = this.p2_sky.getChildAt(0);
		this.bg["s1"] = this.p2_sky.getChildAt(1);
		this.bg["m0"] = this.p2_mid_ground.getChildAt(0);
		this.bg["m1"] = this.p2_mid_ground.getChildAt(1);

		this.record["p1"]["id"] = this.p1_record_id;
		this.record["p1"]["date"] = this.p1_record_date;
		this.record["p1"]["rank"] = this.p1_record_rank;
		this.record["p1"]["td"] = this.p1_record_td;


		for(let i = 0;i<4;i++){
			this.light[String(i)] = this.p1_light.getChildAt(i);
		}

		this.count_down["text"] = this.p1_count_down_text;
		this.count_down["Image"] = this.p1_count_down_img;

		this.next["id"] = this.p1_next_id;
		this.next["timer"] = this.p1_next_timer;

		this.next["p4_id"] = this.p4_next_id;
		this.next["p4_timer"] = this.p4_next_timer;

		this.p2_info["id"] = this.p2_id_date.getChildByName("id");
		this.p2_info["date"] = this.p2_id_date.getChildByName("date");

		this.remaining_count();
		this.init_p4();
	}

	private on_set_P1(content){
		if(content["data"]["draw_numbers"] == null){
				this.content["current"] = this.content["end"];
				let date =this.content["end"]["data"]["end_time"].split("T");
				let time = date[1].split(":");
				this.p2_info["id"].text = "期号 " + this.content["end"]["data"]["issue"];
				this.p2_info["date"].text = date[0] + "   " + time[0] + ":" + time[1];
				this.check_bool.timer_count = true;
				this.check_bool.is_playing == true
				this.check_bool.timer_count = true
				this.count_down["Image"].visible = false;
				this.record_gp.visible = false;
				this.start_gp.visible = true;
				this.check_bool.rank = true;
				this.check_bool.run = true;
				this.check_bool.bg = true;
				this.p2_car_loop_animation();
				this.p2_change_ranking();
				this.p2_car_run();
				this.p2_ground_animation();
		}else{
			this.result_num = [];
			for(let i = 0;i<10;i++){
				this.result_num[i] = Number(content["data"]["draw_numbers"][i]) - 1;
			}
			this.on_set_p4(0);
			this.set_p1_rank(this.content["end"]["data"]["end_time"],this.content["end"]["data"]["issue"],this.result_num);
			this.result_num = null;
		}
		this.init_image.visible = false;
	}

	private reset_all(){
		this.check_bool = {"run":false,"result":false,"rank":false,"bg":false,"is_playing":false,"timer_count":false,"init":true,"auto_sound":false};
		this.result_num = null;
		this.content = {"start":{},"end":{},"draw":{},"current":{}};
		this.remaining = 0;
		this.animation_child.removeChildren();
		this.audio.stop_all_sound();
		for(let i = 0;i<4;i++){
			let light:eui.Group = this.light[String(i)];
			light.visible = true;
		}
		this.p1_car_gp.visible = true;
		this.start_gp.visible = false;
		for (var name in this.tween_timer){
			this.tween_timer[name].stop();
		}
		this.stop["gp"].x = -950;
		if(this.sprite_sheet_stop["goalflag"] != null){
			this.sprite_sheet_stop["goalflag"] = true;
		}		
	}

	private set_p1_rank(_date,_id,_num){
		for(let i = 0;i<10;i++){
			let img:eui.Image =	this.rank["p1"][String(i)]["num"];
			img.source = "irn_" + (_num[i] + 1) + "_png";
		}
		let id:eui.Label = this.record["p1"]["id"];
		let date_text:eui.Label = this.record["p1"]["date"];
		let rank:eui.Label = this.record["p1"]["rank"];
		let td:eui.Label = this.record["p1"]["td"];
		let date =_date.split("T");
		let time = date[1].split(":");
		id.text = "期号             " + _id;
		date_text.text = date[0] + "   " + time[0] + ":" + time[1];
		let rank_1 = "";
		let rank_2 = "";
		let rank_0 = _num[0] + _num[1] + 2;
		if(rank_0 > 11){
			rank_1 = "大";
		}else{
			rank_1 = "小";
		}
		if(rank_0 % 2 == 0){
			rank_2 = "双";
		}else{
			rank_2 = "单";
		}
		rank.text = rank_0 + "          " + rank_1 + "        " + rank_2;
		let rank_3 = "";
		for(let i = 0;i<5;i++){
			if((_num[i] - _num[9 - i]) > 0){
				rank_3 += "龙     ";
			}else{
				rank_3 += "虎     ";
			}
		}
		td.text = rank_3;
	}

	private init_p4(){
		this.record["p4"]["toggle_gp"] = {}
		this.record["p4"]["toggle_gp"]["gp"] = this.record_gp.getChildByName("toggle_gp");
		for(let i = 0;i<10;i++){
			this.record["p4"]["toggle_gp"][String(i)] = {};
			this.record["p4"]["toggle_gp"][String(i)]["gp"] = this.record["p4"]["toggle_gp"]["gp"].getChildAt(i);
			let num_gp = this.record["p4"]["toggle_gp"][String(i)]["gp"].getChildAt(2);
			this.record["p4"]["toggle_gp"][String(i)]["num"] = num_gp.getChildByName("num");
			let btn_gp = this.record["p4"]["toggle_gp"][String(i)]["gp"].getChildAt(1);
			this.record["p4"]["toggle_gp"][String(i)]["btn"] = btn_gp.getChildByName("btn");
			this.record["p4"]["toggle_gp"][String(i)]["img"] = btn_gp.getChildByName("img");
			let btn:eui.Image = this.record["p4"]["toggle_gp"][String(i)]["btn"];
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
					this.on_set_p4(i);
			}, this);
		}

		this.record["p4"]["chart"] = {}
		this.record["p4"]["chart"]["gp"] = this.record_gp.getChildByName("chart");
		this.record["p4"]["chart"]["title"] = this.record["p4"]["chart"]["gp"].getChildByName("title");
		let issue_gp = this.record["p4"]["chart"]["gp"].getChildByName("gp");
		this.record["p4"]["chart"]["issue"] = issue_gp.getChildByName("issue");
		this.record["p4"]["chart"]["chart"] = {}
		let issue_gp_gp = issue_gp.getChildByName("gp");
		for(let i = 0;i<29;i++){
			this.record["p4"]["chart"]["chart"][String(i)] = {}
			let issue_gp_gp_gp = issue_gp_gp.getChildAt(i);
			this.record["p4"]["chart"]["chart"][String(i)]["point"] = issue_gp_gp_gp.getChildByName("point");
			this.record["p4"]["chart"]["chart"][String(i)]["line"] = issue_gp_gp_gp.getChildByName("line");
			let line:eui.Image = this.record["p4"]["chart"]["chart"][String(i)]["line"];
		}

		this.record["p4"]["count_down"] = this.record_gp.getChildByName("count_down");
		this.record["p4"]["count_down"] = this.record["p4"]["count_down"].getChildAt(1);
		
		//this.record["p4"]["recommend"] = this.record_gp.getChildByName("recommend");

		this.record["p4"]["two_face"] = {}
		this.record["p4"]["two_face"]["gp"] = this.record_gp.getChildByName("two_face");
		for(let i = 0;i<4;i++){
			this.record["p4"]["two_face"][String(i)] = this.record["p4"]["two_face"]["gp"].getChildAt(i + 1);
		}

		this.record["p4"]["all_open"] = {}
		this.record["p4"]["all_open"]["gp"] = this.record_gp.getChildByName("all_open");
		this.record["p4"]["all_open"]["gp"] = this.record["p4"]["all_open"]["gp"].getChildAt(2);
		for(let i = 0;i<10;i++){
			this.record["p4"]["all_open"][String(i)] = {};
			this.record["p4"]["all_open"]["gp_i"] = this.record["p4"]["all_open"]["gp"].getChildAt(i);
			for(let j = 0;j<3;j++){
				this.record["p4"]["all_open"][String(i)][String(j)] = this.record["p4"]["all_open"]["gp_i"].getChildAt(j);
			}
		}
	}

	private on_set_p4(num){
		if(this.content["record"]["data"]["stat"] == null){
			return;
		}

		this.record["p4"]["two_face"][String(0)].text = "小" + this.content["record"]["data"].stat[num].big_and_even.small_cnt;
		this.record["p4"]["two_face"][String(1)].text = "双" + this.content["record"]["data"].stat[num].big_and_even.event_cnt;
		this.record["p4"]["two_face"][String(2)].text = "单" + this.content["record"]["data"].stat[num].big_and_even.odd_cnt;
		this.record["p4"]["two_face"][String(3)].text = "大" + this.content["record"]["data"].stat[num].big_and_even.big_cnt;
		
		for(let i = 0;i<10;i++){
			this.record["p4"]["all_open"][String(i)][String(0)].text = i + 1;
			this.record["p4"]["all_open"][String(i)][String(1)].text = this.content["record"]["data"].stat[num].total_count[String(i + 1)];
			this.record["p4"]["all_open"][String(i)][String(2)].text = this.content["record"]["data"].stat[num].total_not_count[String(i + 1)];

			let btn:eui.Image = this.record["p4"]["toggle_gp"][String(i)]["btn"];
			let _num:eui.Image = this.record["p4"]["toggle_gp"][String(i)]["num"];

			_num.source = "irn_" + String(this.content["record"]["data"]["draw_numbers"][i]) + "_png";
			btn.source = "4p_front_car_" + String(this.content["record"]["data"]["draw_numbers"][i]) + "_png";

			if(i != num){
				this.record["p4"]["toggle_gp"][String(i)]["img"].visible = true;
			}else{
				this.record["p4"]["toggle_gp"][String(i)]["img"].visible = false;
			}
		}
		let s_arr = ["一","二","三","四","五","六","七","八","九","十"];
		this.record["p4"]["chart"]["title"].text = "车号                       第" + s_arr[num] + "名走势图";
		let s = ""
		let _n = 0;
		let graph_data_name = [];
		let graph_data_num = [];
		for (var name in this.content["record"]["data"].stat[num]["graph_data"]){
			graph_data_name[_n] = name;
			graph_data_num[_n] = this.content["record"]["data"].stat[num]["graph_data"][name];
			_n++;
		}
		
		for(let i = graph_data_name.length - 1 ; i >= 0 ; i--){
			let _i = Number(graph_data_name[i]) % 100;
			if(_i < 10){
				s += "0" + String(_i) + " ";
			}else{
				s+= String(_i) + " ";
			}
			let _point:eui.Image = this.record["p4"]["chart"]["chart"][String(i)]["point"];
			_point.$setY((10 - graph_data_num[i]) * - 64.5 + 10);
			let _line:eui.Image = this.record["p4"]["chart"]["chart"][String(i)]["line"];
			_line.$setY((10 - graph_data_num[i]) * - 64.5 + 10);
		}

		for(let i = 0; i < graph_data_name.length; i++){
			if(i != graph_data_name.length - 1){
				let x = this.record["p4"]["chart"]["chart"][String(i + 1)]["line"].localToGlobal().x- this.record["p4"]["chart"]["chart"][String(i)]["line"].localToGlobal().x;
				let y = this.record["p4"]["chart"]["chart"][String(i + 1)]["line"].localToGlobal().y- this.record["p4"]["chart"]["chart"][String(i)]["line"].localToGlobal().y;
				this.record["p4"]["chart"]["chart"][String(i)]["line"].$setWidth(Math.pow(x*x+y*y,0.5));
				this.record["p4"]["chart"]["chart"][String(i)]["line"].$setRotation(Math.atan2(y,x)/Math.PI*180);
			}
		}
		this.record["p4"]["chart"]["issue"].text = s;
	}

	private p1_time_animation(){

		if(this.check_bool.timer_count == true){
			return;
		}
		this.check_bool.timer_count = true;
		this.content["current"] = this.content["start"];
		let remaining = this.content["current"]["data"]["remaining"];
		let date = this.content["current"]["time"];
		let diff = this.content["current"]["time_diff"]
		let issue = this.content["current"]["data"]["issue"];
		let time = Number(((remaining + this.time_count(date)) - diff).toFixed(0));
		let _time = time;
		let next_id:eui.Label = this.next["id"];
		let next_timer:eui.Label = this.next["timer"];
		let p4_next_id:eui.Label = this.next["p4_id"];
		let p4_next_timer:eui.Label = this.next["p4_timer"];
		let t_text:eui.Label = this.count_down["text"];
		let t_img:eui.Image = this.count_down["Image"];
		let next_date = this.content["current"]["data"]["end_time"].split("T");
		let next_time = next_date[1].split(":");
		next_id.text = "下期 " + issue + " 期";
		next_timer.text = "下期时间 " + next_time[0] + ":" + next_time[1];
		p4_next_id.text = next_id.text;
		p4_next_timer.text = next_timer.text;
		this.p2_info["id"].text = "期号 " + issue;
		this.p2_info["date"].text = next_date[0] + "   " + next_time[0] + ":" + next_time[1];

		this.tween_timer["p1_time_animation"] = new egret.Timer(1000,time);
		let Timer = this.tween_timer["p1_time_animation"]
		this.p1_display_timer(_time,t_text,t_img);
		_time--;
		Timer.addEventListener(
		egret.TimerEvent.TIMER,() => {
			this.p1_display_timer(_time,t_text,t_img);
			_time--;
			if(_time < 0){
				Timer.stop();
			}
		},Timer.start());
	}

	private remaining_count(){
		let Timer = new egret.Timer(10,1);
		Timer.addEventListener(
		egret.TimerEvent.TIMER_COMPLETE,() => {
			if(Main.timer_active){
				Main.timer_active = false;
				console.log("reconnect");
				this.init_image.visible = true;
				this.sendData("reconnect");
			}
			Timer.start();
		},Timer.start());
	}

	private p1_display_timer(time,t_text,t_img){
		if(time >= 9){
			if(this.check_bool.is_playing == false)
				this.audio.play_sound("count_wav",false);
			t_text.text = String(time + 1);
			t_img.visible = false;
			t_text.visible = true;
		}else{
			if(time <= 2){
				t_text.visible = false;
				t_img.visible = false;
			}else{
				t_img.source = "cdn_" + (time + 1) + "_png";
				t_img.visible = true;
			}
			if(time < 4 && !this.check_bool.is_playing){
				this.play();
			}else{
				if(this.check_bool.is_playing == false)
					this.audio.play_sound("count_wav",false);
			}
			t_text.visible = false;
		}
		
		if(time >= 0)
			this.record["p4"]["count_down"].text = time + 1;
		else
			this.record["p4"]["count_down"].text = 0;
	}

	public play() {
		this.check_bool.is_playing = true;
		this.record_gp.visible = false;
		this.record_btn.enabled = false;
		this.audio.play_sound("start_1_wav",false);
		this.tween_timer["play_p"] = new egret.Timer(this.audio.get_length("start_1_wav"),1);
		let Timer_p = this.tween_timer["play_p"];
		Timer_p.addEventListener(
		egret.TimerEvent.TIMER,() => {
			this.audio.play_sound("start_2_wav",true);
		},Timer_p.start());
		let i = 3;
		this.tween_timer["play_l"] = new egret.Timer(1000,4);
		let Timer_l = this.tween_timer["play_l"];
		Timer_l.addEventListener(
		egret.TimerEvent.TIMER,() => {
			let light:eui.Group = this.light[String(i)];
			light.visible = false;
			if(i != 0)
				this.audio.play_sound("light_wav");
			i--;
		},Timer_l.start());
		Timer_l.addEventListener(
			egret.TimerEvent.TIMER_COMPLETE,() => {
				Timer_l.stop();
				this.p1_car_run();
		},Timer_l.start());
	}

	private p1_car_run(){
		this.audio.play_sound("light_0_wav");
		this.count_down["Image"].visible = false;
		let carAnimation = new car_animation();
		this.animation_child.addChild(carAnimation);
		this.p1_car_gp.visible = false;
		this.audio.stop_sound("start_2_wav");
		this.audio.play_sound("start_3_wav");
		carAnimation.play(()=>{
			if(carAnimation.parent == null){
				return;
			}
			this.start_gp.visible = true;
			this.audio.play_sound("fire_wav",true);
			this.check_bool.rank = true;
			this.check_bool.run = true;
			this.check_bool.bg = true;
			this.p2_car_loop_animation();
			this.p2_change_ranking();
			this.p2_car_run();
			this.p2_ground_animation();
		});
	}

	private p2_car_run(){
		for(let i = 0;i<10;i++){

			let c1:eui.Image = this.car[String(i)]["e1"];
			let c2:eui.Image = this.car[String(i)]["e2"];
			let c3:eui.Image = this.car[String(i)]["e3"];
			this.sprite_sheet(c1,this.effect_sprite["2p_boosteffect_00000"],"car_c1");
			this.sprite_sheet(c2,this.effect_sprite["2p_thundereffect"],"car_c2");
			this.sprite_sheet(c3,this.effect_sprite["2p_speeddash_effect"],"car_c3");

			let w:eui.Image = this.car[String(i)]["w"];
			let w2:eui.Image = this.car[String(i)]["w2"];

			this.tween_timer["p2_car_run" + String(i)] = new egret.Timer(1,1);
			let Timer_w = this.tween_timer["p2_car_run" + String(i)];
			Timer_w.addEventListener(
				egret.TimerEvent.TIMER_COMPLETE,() => {
				Timer_w.stop();
				w.rotation -= 30;
				w2.rotation -= 30;
				if(this.check_bool.run)
				{
					Timer_w.start();
				}		
				else{
				}
			},Timer_w.start())
		}
	}

	private p2_ground_animation(){
		this.tween_timer["p2_ground_animation"] = new egret.Timer(10,1);
		let Timer_ground = this.tween_timer["p2_ground_animation"];
		Timer_ground.addEventListener(
			egret.TimerEvent.TIMER_COMPLETE,() => {
			Timer_ground.stop();
			if(this.check_bool.bg){
				for (let i = 0; i<2;i++){
					if(this.bg["g" + i].x >= 1920){
						this.bg["g" + i].x = -7260 + 20;
					}else{
						this.bg["g" + i].x += 20;
					}
					if(this.bg["s" + i].x >= 1920){
						this.bg["s" + i].x = -2700 + 5;
					}else{
						this.bg["s" + i].x += 5;
					}
					if(this.bg["m" + i].x >= 1920){
						this.bg["m" + i].x = -2200 + 5;
					}else{
						this.bg["m" + i].x += 10;
					}
				}
				Timer_ground.start();
			}
			},Timer_ground.start());
	}

	public p2_change_ranking(){
		this.tween_timer["p2_change_ranking"] = new egret.Timer(1,1);
		let Time_rank = this.tween_timer["p2_change_ranking"]
		Time_rank.addEventListener(
			egret.TimerEvent.TIMER_COMPLETE,() => {
				Time_rank.stop();
				let rank_count = [];
				for(let i = 0;i<10;i++){
					let c:eui.Group = this.car[String(i)]["gp"];
					let count = 0;
					for(let j = 0;j<10;j++){
						let c_j:eui.Group = this.car[String(j)]["gp"];
						if(c.x > c_j.x){
							count += 1;
						}
					}
					rank_count[i] = count;
				}
				let str = "";
				for(let i = 0;i<10;i++){
					str += rank_count[i];
					for(let j = 0;j<10;j++){
						if(i == rank_count[j]){
							let img:eui.Image =	this.rank["p2"][String(i)]["num"];
							img.source = "irn_" + (j+1) + "_png";
						}
					}
				}
				if(this.check_bool.rank){
					this.p2_change_ranking();
				}
		},Time_rank.start());
	}

	private p2_car_loop_animation(){
		let c_x = {};
		let Timer_c = {};
		for(let i = 0;i<10;i++){
			let c:eui.Group = this.car[String(i)]["gp"];
			this.tween_timer["p2_car_loop_animation" + String(i)] = new egret.Timer(20,75);
			Timer_c[String(i)] = this.tween_timer["p2_car_loop_animation" + String(i)];
			c_x[String(i)] = {}
			c_x[String(i)].d = Math.random() * 1545;
			c_x[String(i)].n = Math.random() * 0.95 + 0.05;
			Timer_c[String(i)].addEventListener(
			egret.TimerEvent.TIMER,() => {
				if(Math.abs(c.x - c_x[String(i)].d) > 5){
					let e1:eui.Image = this.car[String(i)]["e1"];
					let e2:eui.Image = this.car[String(i)]["e2"];
					let e3:eui.Image = this.car[String(i)]["e3"];
					if(c.x > c_x[String(i)].d){
						let speed:number = Math.abs(c.x - c_x[String(i)].d)/25 * c_x[String(i)].n + 3;
						if(speed >= 23){
							e1.visible = true;
							e2.visible = true;
							e3.visible = true;
						}else if(speed < 23 && speed >= 17){
							e1.visible = true;
							e2.visible = true;
							e3.visible = false;
						}else if(speed < 17 && speed >= 10){
							e1.visible = true;
							e2.visible = false;
							e3.visible = false;
						}else{
							e1.visible = false;
							e2.visible = false;
							e3.visible = false;
						}
						c.x -= speed;
					}else{
						e1.visible = false;
						e2.visible = false;
						e3.visible = false;
						let speed:number = Math.abs(c.x - c_x[String(i)].d)/25 * c_x[String(i)].n + 3;
						c.x += speed;
				}
			}
			},Timer_c[String(i)].start());
			Timer_c[String(i)].addEventListener(
				egret.TimerEvent.TIMER_COMPLETE,() => {
					Timer_c[String(i)].stop();
					if(i == 0){
						if(this.check_bool.result){
							this.check_bool.result = false;
							let first_dit = 9999;
							for(let j = 0;j < 10;j++){
								if(c_x[String(j)].d < first_dit){
									first_dit = c_x[String(j)].d;
								}
							}
							this.p2_car_animation(this.result_num);
						}else{
							this.p2_car_loop_animation();
							if(this.result_num != null){
								this.check_bool.result = true;
							}
						}
					}
			},Timer_c[String(i)].start());
		}
	}

	private p2_car_animation(num_arr){
		let c_x = {};
		let Timer_c = {};
		for(let i = 0;i<10;i++){
			let e1:eui.Image = this.car[String(i)]["e1"];
			let e2:eui.Image = this.car[String(i)]["e2"];
			let e3:eui.Image = this.car[String(i)]["e3"];
			e1.visible = false;
			e2.visible = false;
			e3.visible = false;
			let c:eui.Group = this.car[String(num_arr[i])]["gp"];
			this.tween_timer["p2_car_animation" + String(i)] = new egret.Timer(20,75);
			Timer_c[String(i)] = this.tween_timer["p2_car_animation" + String(i)];
			c_x[String(i)] = {}
			c_x[String(i)].d = Math.random() * 100 + i * 100 + 500;
			Timer_c[String(i)].addEventListener(
			egret.TimerEvent.TIMER,() => {
				if(Math.abs(c.x - c_x[String(i)].d) > 5){
					if(c.x > c_x[String(i)].d){
						c.x -= Math.abs(c.x - c_x[String(i)].d)/20 + 3;
					}else{
						c.x += Math.abs(c.x - c_x[String(i)].d)/20 + 3;
					}
				}else{
					c.x = c_x[String(i)].d;
				}
			},Timer_c[String(i)].start());
			Timer_c[String(i)].addEventListener(
				egret.TimerEvent.TIMER_COMPLETE,() => {
					Timer_c[String(i)].stop();
					c.x = c_x[String(i)].d;
					if(i == 0){
						let first_dit = 9999;
						for(let j = 0;j < 10;j++){
							if(c_x[String(j)].d < first_dit){
								first_dit = c_x[String(j)].d;
							}
						}
						this.check_bool.rank = false;
						this.p2_car_stop_animation(first_dit);
					}
			},Timer_c[String(i)].start());
		}
	}

	public p2_car_stop_animation(first_dit){
		this.sprite_sheet(this.stop["goalflag"],this.stop["goalflag_sprite"],"goalflag");
		this.tween_timer["p2_car_stop_animation"] = new egret.Timer(20,75);
		let Timer_stop = this.tween_timer["p2_car_stop_animation"];
		Timer_stop.addEventListener(
		egret.TimerEvent.TIMER,() => {
			if(first_dit > this.stop["gp"].x){
					this.stop["gp"].x += 50;
			}else{
				this.check_bool.run = false;
				this.sprite_sheet_stop["car_c1"] = true;
				this.sprite_sheet_stop["car_c1"] = true;
				this.sprite_sheet_stop["car_c1"] = true;
				this.check_bool.bg = false;
				Timer_stop.stop();
				this.audio.stop_sound("fire_wav");
				this.audio.play_sound("finish_wav",false);
				let Timer_stop_2 = new egret.Timer(20,100);
				let p2_stop_img_alpha_back = false;
				Timer_stop_2.addEventListener(
					egret.TimerEvent.TIMER,() => {
						if(p2_stop_img_alpha_back){
							this.p2_stop_img.alpha -= 0.05;
						}else{
							this.p2_stop_img.alpha += 0.05;
						}
						if(this.p2_stop_img.alpha >= 1){
							p2_stop_img_alpha_back = true;
						}else if(this.p2_stop_img.alpha <= 0){
							Timer_stop_2.stop();
							this.check_bool.run = true;
							this.p2_car_run();
							this.p2_car_finish_animation();
						}
				},Timer_stop_2.start());
			}
		},Timer_stop.start());
	}

	public p2_car_finish_animation(){
		let c_x = {};
		let Timer_c = {};
		for(let i = 0;i<10;i++){
			let c:eui.Group = this.car[String(i)]["gp"];
			this.tween_timer["p2_car_stop_animation" + String(i)] = new egret.Timer(20,75);
			Timer_c[String(i)] = this.tween_timer["p2_car_stop_animation" + String(i)];
			c_x[String(i)] = {}
			Timer_c[String(i)].addEventListener(
			egret.TimerEvent.TIMER,() => {
				c.x -= 50;
			},Timer_c[String(i)].start());
			Timer_c[String(i)].addEventListener(
				egret.TimerEvent.TIMER_COMPLETE,() => {
					Timer_c[String(i)].stop();
					c.x = 1920;
					if(i == 0){
						this.sprite_sheet_stop["goalflag"] = true;
						this.start_gp.visible = false;
						this.stop["gp"].x = -950;
						this.p3_car_animation();
					}
			},Timer_c[String(i)].start());
		}
	}

	public p3_car_animation(){
		let result_animation = new resultAnimation();
		let rank_gp = {};
		this.set_p1_rank(this.content["draw"]["data"]["end_time"],this.content["draw"]["data"]["issue"],this.result_num);
		this.on_set_p4(0);
		this.check_bool.run = false;
		this.p1_car_gp.visible = true;
		this.audio.play_sound("win_wav");
		for(let i = 0;i<4;i++){
			let light:eui.Group = this.light[String(i)];
			light.visible = true;
		}
		for(let i = 0;i<10;i++){
			rank_gp[String(i)] = result_animation.p3_rank.getChildAt(i);
			let gp:eui.Group = rank_gp[i];
			rank_gp[String(i)] = gp.getChildAt(1);
			let img:eui.Image =	rank_gp[String(i)];
			img.source = "irn_" + (this.result_num[i] + 1) + "_png";
			if(i < 3){
				let num:eui.Image = result_animation["p3_rank_" + String(i + 1)];
				num.source = String((this.result_num[i] + 1)) + "_png";
				if(i == 0){
					result_animation.image1.source = "p3_car_" + (this.result_num[i] + 1) + "_front_png";
				}else if(i == 1){
					result_animation.image0.source = "p3_" + (this.result_num[i] + 1) + "_34_L_png";
				}else if(i == 2){
					result_animation.image.source = "p3_" + (this.result_num[i] + 1) + "_34_R_png";
				}
			}
		}

		let _date = this.content["current"]["data"]["end_time"].split("T");
		let _time = _date[1].split(":");
		result_animation.p3_up_id.text = "期号 " + this.content["current"]["data"]["issue"];
		result_animation.p3_up_timer.text = "时间   " + _time[0] + ":" + _time[1];

		this.p3_mute_TgeHandler(result_animation.mute_toggle);
		result_animation.mute_toggle.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			this.mute_TgeHandler();
			this.p3_mute_TgeHandler(result_animation.mute_toggle);
		}, this);
		result_animation.record_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
			this.record_gp.visible = true;
		}, this);

		this.animation_child.addChild(result_animation);
		result_animation.play(()=>{
			result_animation.mute_toggle.removeEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				this.mute_TgeHandler();
				this.p3_mute_TgeHandler(result_animation.mute_toggle);
			}, this);
			result_animation.record_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
				this.record_gp.visible = true;
			}, this);
			if(result_animation.parent == null){
				return;
			}
			
			this.check_bool.is_playing = false;
			this.check_bool.timer_count = false;
			this.p1_time_animation();
			this.result_num = null;
			this.record_gp.visible = true;
			this.record_btn.enabled = true;
		});
	}

	private p3_mute_TgeHandler(img){
		if (egret.localStorage.getItem("mute_toggle") == "true")
		{
			img.source = "mute_button_off_png";
		}
		else if (egret.localStorage.getItem("mute_toggle") == "false")
		{
			img.source = "mute_button_on_png";
		}
	}

	public uiCompHandler(){
		this.play_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.play, this);
		this.record_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.p1_record_gp_v, this);
		this.record_disable_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.p1_record_gp_dis_v, this);
		this.mute_toggle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mute_TgeHandler, this);
		this.p2_mute_toggle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mute_TgeHandler, this);
		this.p4_mute_toggle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mute_TgeHandler, this);
	}

	public draw(content){
		this.result_num = [];
		let s = [];
		for(let i = 0;i<10;i++){
			s[i] = content["data"]["draw_numbers"][i];
		}
		for(let i = 0;i<10;i++){
			this.result_num[i] = Number(s[i]) - 1;
		}
	}

	private p1_record_gp_v(){
		this.record_gp.visible = true;
	}

	private p1_record_gp_dis_v(){
		this.record_gp.visible = false;
	}

	public mute_TgeHandler() {
		if(this.audio.init == false){
			this.audio.init = true;
			if(this.check_bool.run){
				this.audio.play_sound("fire_wav",true);
			}
			if(this.check_bool.is_playing && this.p1_car_gp.visible == true && this.p1_car_gp.visible == true){
				this.audio.play_sound("start_1_wav",false);
				this.tween_timer["mute_TgeHandler"] = new egret.Timer(this.audio.get_length("start_1_wav"),1);
				let Timer_p = this.tween_timer["mute_TgeHandler"];
				Timer_p.addEventListener(
				egret.TimerEvent.TIMER,() => {
					if(this.check_bool.is_playing && this.p1_car_gp.visible == true && this.p1_car_gp.visible == true){
						this.audio.play_sound("start_2_wav",true);
					}
				},Timer_p.start());
			}
		}
		 
		if (egret.localStorage.getItem("mute_toggle") == "true")
		{
			egret.localStorage.setItem("mute_toggle","false");
			this.mute_toggle.source = "mute_button_on_png";
			this.p2_mute_toggle.source = "2p_mute_button_unmute_png";
			this.p4_mute_toggle.source = "mute_button_on_png";
			this.audio.mute(false);
		}
		else if (egret.localStorage.getItem("mute_toggle") == "false")
		{
			egret.localStorage.setItem("mute_toggle","true");
			this.mute_toggle.source = "mute_button_off_png";
			this.p2_mute_toggle.source = "2p_mute_button_mute_png";
			this.p4_mute_toggle.source = "mute_button_off_png";
			this.audio.mute(true);
		}
	}

	//websocket

    private host = "";
    private socket:egret.WebSocket;

    private initWebSocket():void {
		this.host = "backend.0371zkw.com/lottery/17/";
		//this.host = "192.168.0.157:8088/lottery/28/";
		if(document.location.protocol == 'https:'){
			this.host = "wss://" + this.host;
		}else{
			this.host = "ws://" + this.host;
		}

        this.socket = new egret.WebSocket();
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        this.socket.connectByUrl(this.host);
    }

    private sendData(s):void {
        this.socket.writeUTF(s);
    }

    private onSocketOpen():void {
	}

    private onSocketClose():void {
		this.socket.connectByUrl(this.host);
		this.show_notice("网络断线，重新连接中",null);
		let Timer = new egret.Timer(10000,1);
		Timer.addEventListener(
		egret.TimerEvent.TIMER_COMPLETE,() => {
			if(this.socket.connected == true){
				Timer.stop();
				this.notice_gp.visible = false;
			}else{
				Timer.start();
				this.reset_all();
				this.socket.connectByUrl(this.host);
				this.show_notice("网络断线，重新连接中",null);
			}
		},Timer.start());
	}
    private onSocketError() {
    }
	
	public formatDate(){
		const Dates = new Date();
		const Year : number = Dates.getFullYear(); 
		const Months : any = ( Dates.getMonth() + 1 ) < 10  ?  '0' + (Dates.getMonth() + 1) : ( Dates.getMonth() + 1); 
		const Day : any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
		const Hours = Dates.getHours() < 10 ? '0' + Dates.getHours() : Dates.getHours();
		const Minutes = Dates.getMinutes() < 10 ? '0' + Dates.getMinutes() : Dates.getMinutes();
		const Seconds = Dates.getSeconds() < 10 ? '0' + Dates.getSeconds() : Dates.getSeconds();
		let count = ((((Number(Year) * 12 + Number(Months)) * 30 + Number(Day)) * 24 + Number(Hours)) * 60 + Number(Minutes)) * 60 + Number(Seconds);
		let s = {"Year":Year,"Months":Months,"Day":Day,"Hours":Hours,"Minutes":Minutes,"Seconds":Seconds,"count":count};
		return s;
		//return Year + '年' + Months + '月' + Day + '日' + Hours + '時' + Minutes + '分' + Seconds + '秒';
	}
	
	private time_count(_date){
		let s:string = _date.split("T");
		let date = s[0].split("-");
		let time = s[1].split(":");
		let count = ((((Number(date[0]) * 12 + Number(date[1])) * 30 + Number(date[2])) * 24 + Number(time[0])) * 60 + Number(time[1])) * 60 + Number(time[2]);
		return count - this.formatDate()["count"];
	}

	private notice_gp:eui.Group;
	private notice_text:eui.Label;
	private notice_btn: eui.Button;
	private show_notice(content:string,confirm_btn){
		this.notice_gp.visible = true;
		this.notice_text.text = content;
		if(confirm_btn != null){
			this.notice_btn.visible = true;
			this.notice_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, confirm_btn, this);
		}else{
			this.notice_btn.visible = false;
		}
	}

	private mask_manager = {};
	public draw_mask(t,string){
		if(t.contains((this.mask_manager[string]))){
			t.removeChild(this.mask_manager[string]);
		}
		this.mask_manager[string] = new egret.Shape();
		this.mask_manager[string].graphics.beginFill(0x0000ff);
		this.mask_manager[string].graphics.drawRoundRect(0,0,t.width,t.height,25);
		this.mask_manager[string].graphics.endFill();
		t.addChild(this.mask_manager[string]);
		t.mask = this.mask_manager[string];
	}

	private sprite_sheet_stop = {};
	private sprite_sheet(_img,_img_arr,_stop, delay = 50){
		this.sprite_sheet_stop[_stop] = false;
		let img:eui.Image = _img;
		let img_arr = [];
		img_arr = _img_arr;
		let i = 0;
		let Timer_img = new egret.Timer(delay,1);
		Timer_img.addEventListener(
			egret.TimerEvent.TIMER_COMPLETE,() => {
			Timer_img.stop();
			if(this.sprite_sheet_stop[_stop] == true){

			}else{
				if(img_arr.length == i + 1){
					i = 0;
				}else
				{
					i++;
				}
				img.source = img_arr[i];
				Timer_img.start();
			}
		},Timer_img.start());
	}
}