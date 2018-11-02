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
var GameUI = (function (_super) {
    __extends(GameUI, _super);
    function GameUI(audio) {
        var _this = _super.call(this) || this;
        _this.audio = audio;
        _this.toggle_gp = { "0": "", "1": "", "2": "", "3": "", "4": "", "5": "", "6": "", "7": "", "8": "", "9": "" };
        _this.car = {};
        _this.rank = {};
        _this.record = { "p1": {}, "p4": {} };
        _this.stop = {};
        _this.bg = {};
        _this.check_bool = { "run": false, "result": false, "rank": false, "bg": false, "is_playing": false, "timer_count": false, "init": true, "auto_sound": false };
        _this.tween_timer = {};
        _this.result_num = null;
        _this.light = {};
        _this.content = { "start": {}, "end": {}, "draw": {}, "current": {} };
        _this.count_down = {};
        _this.next = {};
        _this.effect_sprite = {};
        _this.p2_info = {};
        _this.remaining = 0;
        //websocket
        _this.host = "";
        _this.mask_manager = {};
        _this.sprite_sheet_stop = {};
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/custom_skin/gameUISkin_v0.exml";
        _this.load_data();
        _this.initWebSocket();
        return _this;
    }
    GameUI.prototype.onReceiveMessage = function (e) {
        var byte = this.socket.readUTF();
        var content = JSON.parse(byte);
        console.log(content);
        if (content["code"] == "error") {
            //this.show_notice("网络错误",()=>{this.notice_gp.visible = false});
        }
        else if (content["code"] == "draw") {
            if (!this.check_bool.init) {
                this.content["record"] = content;
                this.content["draw"] = content;
                this.draw(this.content["draw"]);
            }
        }
        else if (content["code"] == "start") {
            this.content["start"] = content;
            this.content["start"]["time_diff"] = this.time_count(this.content["start"]["time"]);
            this.p1_time_animation();
        }
        else if (content["code"] == "end") {
            if (this.check_bool.init) {
                this.check_bool.init = false;
                this.content["record"] = content;
                this.content["end"] = content;
                this.on_set_P1(content);
            }
        }
        else if (content["code"] == "reconnect") {
            this.reset_all();
            this.check_bool.init = false;
            this.content["record"] = content;
            this.content["end"] = content;
            this.on_set_P1(content);
        }
    };
    GameUI.prototype.load_data = function () {
        egret.localStorage.setItem("mute_toggle", "true");
        for (var i = 0; i < 10; i++) {
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
        for (var i = 0; i < 9; i++) {
            this.effect_sprite["2p_thundereffect"][i] = "2p_thundereffect_0" + String(i + 1) + "_png";
            this.effect_sprite["2p_boosteffect_00000"][i] = "2p_boosteffect_0000" + String(i) + "_png";
            this.effect_sprite["2p_speeddash_effect"][i] = "2p_speeddash_effect_0" + String(i + 1) + "_png";
        }
        this.effect_sprite["2p_thundereffect"][9] = "2p_thundereffect_10" + "_png";
        this.effect_sprite["2p_speeddash_effect"][9] = "2p_speeddash_effect_10" + "_png";
        this.effect_sprite["2p_boosteffect_00000"][8] = "2p_boosteffect_00009" + "_png";
        for (var i = 9; i < 23; i++) {
            this.effect_sprite["2p_boosteffect_00000"][i] = "2p_boosteffect_000" + String(i + 1) + "_png";
        }
        this.rank["p1"] = {};
        for (var i = 0; i < 10; i++) {
            this.rank["p1"][String(i)] = {};
            this.rank["p1"][String(i)]["gp"] = this.p1_rank.getChildAt(i);
            var gp = this.rank["p1"][String(i)]["gp"];
            this.rank["p1"][String(i)]["num"] = gp.getChildAt(1);
        }
        this.rank["p2"] = {};
        for (var i = 0; i < 10; i++) {
            this.rank["p2"][String(i)] = {};
            this.rank["p2"][String(i)]["gp"] = this.p2_rank.getChildAt(i);
            var gp = this.rank["p2"][String(i)]["gp"];
            this.rank["p2"][String(i)]["num"] = gp.getChildAt(1);
        }
        this.stop["gp"] = this.stop_gp;
        this.stop["goalflag"] = this.goalflag;
        var goalflag_sprite = [];
        for (var i = 0; i < 12; i++) {
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
        for (var i = 0; i < 4; i++) {
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
    };
    GameUI.prototype.on_set_P1 = function (content) {
        if (content["data"]["draw_numbers"] == null) {
            this.content["current"] = this.content["end"];
            var date = this.content["end"]["data"]["end_time"].split("T");
            var time = date[1].split(":");
            this.p2_info["id"].text = "期号 " + this.content["end"]["data"]["issue"];
            this.p2_info["date"].text = date[0] + "   " + time[0] + ":" + time[1];
            this.check_bool.timer_count = true;
            this.check_bool.is_playing == true;
            this.check_bool.timer_count = true;
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
        }
        else {
            this.result_num = [];
            for (var i = 0; i < 10; i++) {
                this.result_num[i] = Number(content["data"]["draw_numbers"][i]) - 1;
            }
            this.on_set_p4(0);
            this.set_p1_rank(this.content["end"]["data"]["end_time"], this.content["end"]["data"]["issue"], this.result_num);
            this.result_num = null;
        }
        this.init_image.visible = false;
    };
    GameUI.prototype.reset_all = function () {
        this.check_bool = { "run": false, "result": false, "rank": false, "bg": false, "is_playing": false, "timer_count": false, "init": true, "auto_sound": false };
        this.result_num = null;
        this.content = { "start": {}, "end": {}, "draw": {}, "current": {} };
        this.remaining = 0;
        this.animation_child.removeChildren();
        this.audio.stop_all_sound();
        for (var i = 0; i < 4; i++) {
            var light = this.light[String(i)];
            light.visible = true;
        }
        this.p1_car_gp.visible = true;
        this.start_gp.visible = false;
        for (var name in this.tween_timer) {
            this.tween_timer[name].stop();
        }
        this.stop["gp"].x = -950;
        if (this.sprite_sheet_stop["goalflag"] != null) {
            this.sprite_sheet_stop["goalflag"] = true;
        }
    };
    GameUI.prototype.set_p1_rank = function (_date, _id, _num) {
        for (var i = 0; i < 10; i++) {
            var img = this.rank["p1"][String(i)]["num"];
            img.source = "irn_" + (_num[i] + 1) + "_png";
        }
        var id = this.record["p1"]["id"];
        var date_text = this.record["p1"]["date"];
        var rank = this.record["p1"]["rank"];
        var td = this.record["p1"]["td"];
        var date = _date.split("T");
        var time = date[1].split(":");
        id.text = "期号             " + _id;
        date_text.text = date[0] + "   " + time[0] + ":" + time[1];
        var rank_1 = "";
        var rank_2 = "";
        var rank_0 = _num[0] + _num[1] + 2;
        if (rank_0 > 11) {
            rank_1 = "大";
        }
        else {
            rank_1 = "小";
        }
        if (rank_0 % 2 == 0) {
            rank_2 = "双";
        }
        else {
            rank_2 = "单";
        }
        rank.text = rank_0 + "          " + rank_1 + "        " + rank_2;
        var rank_3 = "";
        for (var i = 0; i < 5; i++) {
            if ((_num[i] - _num[9 - i]) > 0) {
                rank_3 += "龙     ";
            }
            else {
                rank_3 += "虎     ";
            }
        }
        td.text = rank_3;
    };
    GameUI.prototype.init_p4 = function () {
        var _this = this;
        this.record["p4"]["toggle_gp"] = {};
        this.record["p4"]["toggle_gp"]["gp"] = this.record_gp.getChildByName("toggle_gp");
        var _loop_1 = function (i) {
            this_1.record["p4"]["toggle_gp"][String(i)] = {};
            this_1.record["p4"]["toggle_gp"][String(i)]["gp"] = this_1.record["p4"]["toggle_gp"]["gp"].getChildAt(i);
            var num_gp = this_1.record["p4"]["toggle_gp"][String(i)]["gp"].getChildAt(2);
            this_1.record["p4"]["toggle_gp"][String(i)]["num"] = num_gp.getChildByName("num");
            var btn_gp = this_1.record["p4"]["toggle_gp"][String(i)]["gp"].getChildAt(1);
            this_1.record["p4"]["toggle_gp"][String(i)]["btn"] = btn_gp.getChildByName("btn");
            this_1.record["p4"]["toggle_gp"][String(i)]["img"] = btn_gp.getChildByName("img");
            var btn = this_1.record["p4"]["toggle_gp"][String(i)]["btn"];
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.on_set_p4(i);
            }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < 10; i++) {
            _loop_1(i);
        }
        this.record["p4"]["chart"] = {};
        this.record["p4"]["chart"]["gp"] = this.record_gp.getChildByName("chart");
        this.record["p4"]["chart"]["title"] = this.record["p4"]["chart"]["gp"].getChildByName("title");
        var issue_gp = this.record["p4"]["chart"]["gp"].getChildByName("gp");
        this.record["p4"]["chart"]["issue"] = issue_gp.getChildByName("issue");
        this.record["p4"]["chart"]["chart"] = {};
        var issue_gp_gp = issue_gp.getChildByName("gp");
        for (var i = 0; i < 29; i++) {
            this.record["p4"]["chart"]["chart"][String(i)] = {};
            var issue_gp_gp_gp = issue_gp_gp.getChildAt(i);
            this.record["p4"]["chart"]["chart"][String(i)]["point"] = issue_gp_gp_gp.getChildByName("point");
            this.record["p4"]["chart"]["chart"][String(i)]["line"] = issue_gp_gp_gp.getChildByName("line");
            var line = this.record["p4"]["chart"]["chart"][String(i)]["line"];
        }
        this.record["p4"]["count_down"] = this.record_gp.getChildByName("count_down");
        this.record["p4"]["count_down"] = this.record["p4"]["count_down"].getChildAt(1);
        //this.record["p4"]["recommend"] = this.record_gp.getChildByName("recommend");
        this.record["p4"]["two_face"] = {};
        this.record["p4"]["two_face"]["gp"] = this.record_gp.getChildByName("two_face");
        for (var i = 0; i < 4; i++) {
            this.record["p4"]["two_face"][String(i)] = this.record["p4"]["two_face"]["gp"].getChildAt(i + 1);
        }
        this.record["p4"]["all_open"] = {};
        this.record["p4"]["all_open"]["gp"] = this.record_gp.getChildByName("all_open");
        this.record["p4"]["all_open"]["gp"] = this.record["p4"]["all_open"]["gp"].getChildAt(2);
        for (var i = 0; i < 10; i++) {
            this.record["p4"]["all_open"][String(i)] = {};
            this.record["p4"]["all_open"]["gp_i"] = this.record["p4"]["all_open"]["gp"].getChildAt(i);
            for (var j = 0; j < 3; j++) {
                this.record["p4"]["all_open"][String(i)][String(j)] = this.record["p4"]["all_open"]["gp_i"].getChildAt(j);
            }
        }
    };
    GameUI.prototype.on_set_p4 = function (num) {
        if (this.content["record"]["data"]["stat"] == null) {
            return;
        }
        this.record["p4"]["two_face"][String(0)].text = "小" + this.content["record"]["data"].stat[num].big_and_even.small_cnt;
        this.record["p4"]["two_face"][String(1)].text = "双" + this.content["record"]["data"].stat[num].big_and_even.event_cnt;
        this.record["p4"]["two_face"][String(2)].text = "单" + this.content["record"]["data"].stat[num].big_and_even.odd_cnt;
        this.record["p4"]["two_face"][String(3)].text = "大" + this.content["record"]["data"].stat[num].big_and_even.big_cnt;
        for (var i = 0; i < 10; i++) {
            this.record["p4"]["all_open"][String(i)][String(0)].text = i + 1;
            this.record["p4"]["all_open"][String(i)][String(1)].text = this.content["record"]["data"].stat[num].total_count[String(i + 1)];
            this.record["p4"]["all_open"][String(i)][String(2)].text = this.content["record"]["data"].stat[num].total_not_count[String(i + 1)];
            var btn = this.record["p4"]["toggle_gp"][String(i)]["btn"];
            var _num = this.record["p4"]["toggle_gp"][String(i)]["num"];
            _num.source = "irn_" + String(this.content["record"]["data"]["draw_numbers"][i]) + "_png";
            btn.source = "4p_front_car_" + String(this.content["record"]["data"]["draw_numbers"][i]) + "_png";
            if (i != num) {
                this.record["p4"]["toggle_gp"][String(i)]["img"].visible = true;
            }
            else {
                this.record["p4"]["toggle_gp"][String(i)]["img"].visible = false;
            }
        }
        var s_arr = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
        this.record["p4"]["chart"]["title"].text = "车号                       第" + s_arr[num] + "名走势图";
        var s = "";
        var _n = 0;
        var graph_data_name = [];
        var graph_data_num = [];
        for (var name in this.content["record"]["data"].stat[num]["graph_data"]) {
            graph_data_name[_n] = name;
            graph_data_num[_n] = this.content["record"]["data"].stat[num]["graph_data"][name];
            _n++;
        }
        for (var i = graph_data_name.length - 1; i >= 0; i--) {
            var _i = Number(graph_data_name[i]) % 100;
            if (_i < 10) {
                s += "0" + String(_i) + " ";
            }
            else {
                s += String(_i) + " ";
            }
            var _point = this.record["p4"]["chart"]["chart"][String(i)]["point"];
            _point.$setY((10 - graph_data_num[i]) * -64.5 + 10);
            var _line = this.record["p4"]["chart"]["chart"][String(i)]["line"];
            _line.$setY((10 - graph_data_num[i]) * -64.5 + 10);
        }
        for (var i = 0; i < graph_data_name.length; i++) {
            if (i != graph_data_name.length - 1) {
                var x = this.record["p4"]["chart"]["chart"][String(i + 1)]["line"].localToGlobal().x - this.record["p4"]["chart"]["chart"][String(i)]["line"].localToGlobal().x;
                var y = this.record["p4"]["chart"]["chart"][String(i + 1)]["line"].localToGlobal().y - this.record["p4"]["chart"]["chart"][String(i)]["line"].localToGlobal().y;
                this.record["p4"]["chart"]["chart"][String(i)]["line"].$setWidth(Math.pow(x * x + y * y, 0.5));
                this.record["p4"]["chart"]["chart"][String(i)]["line"].$setRotation(Math.atan2(y, x) / Math.PI * 180);
            }
        }
        this.record["p4"]["chart"]["issue"].text = s;
    };
    GameUI.prototype.p1_time_animation = function () {
        var _this = this;
        if (this.check_bool.timer_count == true) {
            return;
        }
        this.check_bool.timer_count = true;
        this.content["current"] = this.content["start"];
        var remaining = this.content["current"]["data"]["remaining"];
        var date = this.content["current"]["time"];
        var diff = this.content["current"]["time_diff"];
        var issue = this.content["current"]["data"]["issue"];
        var time = Number(((remaining + this.time_count(date)) - diff).toFixed(0));
        var _time = time;
        var next_id = this.next["id"];
        var next_timer = this.next["timer"];
        var p4_next_id = this.next["p4_id"];
        var p4_next_timer = this.next["p4_timer"];
        var t_text = this.count_down["text"];
        var t_img = this.count_down["Image"];
        var next_date = this.content["current"]["data"]["end_time"].split("T");
        var next_time = next_date[1].split(":");
        next_id.text = "下期 " + issue + " 期";
        next_timer.text = "下期时间 " + next_time[0] + ":" + next_time[1];
        p4_next_id.text = next_id.text;
        p4_next_timer.text = next_timer.text;
        this.p2_info["id"].text = "期号 " + issue;
        this.p2_info["date"].text = next_date[0] + "   " + next_time[0] + ":" + next_time[1];
        this.tween_timer["p1_time_animation"] = new egret.Timer(1000, time);
        var Timer = this.tween_timer["p1_time_animation"];
        this.p1_display_timer(_time, t_text, t_img);
        _time--;
        Timer.addEventListener(egret.TimerEvent.TIMER, function () {
            _this.p1_display_timer(_time, t_text, t_img);
            _time--;
            if (_time < 0) {
                Timer.stop();
            }
        }, Timer.start());
    };
    GameUI.prototype.remaining_count = function () {
        var _this = this;
        var Timer = new egret.Timer(10, 1);
        Timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
            if (Main.timer_active) {
                Main.timer_active = false;
                console.log("reconnect");
                _this.init_image.visible = true;
                _this.sendData("reconnect");
            }
            Timer.start();
        }, Timer.start());
    };
    GameUI.prototype.p1_display_timer = function (time, t_text, t_img) {
        if (time >= 9) {
            if (this.check_bool.is_playing == false)
                this.audio.play_sound("count_wav", false);
            t_text.text = String(time + 1);
            t_img.visible = false;
            t_text.visible = true;
        }
        else {
            if (time <= 2) {
                t_text.visible = false;
                t_img.visible = false;
            }
            else {
                t_img.source = "cdn_" + (time + 1) + "_png";
                t_img.visible = true;
            }
            if (time < 4 && !this.check_bool.is_playing) {
                this.play();
            }
            else {
                if (this.check_bool.is_playing == false)
                    this.audio.play_sound("count_wav", false);
            }
            t_text.visible = false;
        }
        if (time >= 0)
            this.record["p4"]["count_down"].text = time + 1;
        else
            this.record["p4"]["count_down"].text = 0;
    };
    GameUI.prototype.play = function () {
        var _this = this;
        this.check_bool.is_playing = true;
        this.record_gp.visible = false;
        this.record_btn.enabled = false;
        this.audio.play_sound("start_1_wav", false);
        this.tween_timer["play_p"] = new egret.Timer(this.audio.get_length("start_1_wav"), 1);
        var Timer_p = this.tween_timer["play_p"];
        Timer_p.addEventListener(egret.TimerEvent.TIMER, function () {
            _this.audio.play_sound("start_2_wav", true);
        }, Timer_p.start());
        var i = 3;
        this.tween_timer["play_l"] = new egret.Timer(1000, 4);
        var Timer_l = this.tween_timer["play_l"];
        Timer_l.addEventListener(egret.TimerEvent.TIMER, function () {
            var light = _this.light[String(i)];
            light.visible = false;
            if (i != 0)
                _this.audio.play_sound("light_wav");
            i--;
        }, Timer_l.start());
        Timer_l.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
            Timer_l.stop();
            _this.p1_car_run();
        }, Timer_l.start());
    };
    GameUI.prototype.p1_car_run = function () {
        var _this = this;
        this.audio.play_sound("light_0_wav");
        this.count_down["Image"].visible = false;
        var carAnimation = new car_animation();
        this.animation_child.addChild(carAnimation);
        this.p1_car_gp.visible = false;
        this.audio.stop_sound("start_2_wav");
        this.audio.play_sound("start_3_wav");
        carAnimation.play(function () {
            if (carAnimation.parent == null) {
                return;
            }
            _this.start_gp.visible = true;
            _this.audio.play_sound("fire_wav", true);
            _this.check_bool.rank = true;
            _this.check_bool.run = true;
            _this.check_bool.bg = true;
            _this.p2_car_loop_animation();
            _this.p2_change_ranking();
            _this.p2_car_run();
            _this.p2_ground_animation();
        });
    };
    GameUI.prototype.p2_car_run = function () {
        var _this = this;
        var _loop_2 = function (i) {
            var c1 = this_2.car[String(i)]["e1"];
            var c2 = this_2.car[String(i)]["e2"];
            var c3 = this_2.car[String(i)]["e3"];
            this_2.sprite_sheet(c1, this_2.effect_sprite["2p_boosteffect_00000"], "car_c1");
            this_2.sprite_sheet(c2, this_2.effect_sprite["2p_thundereffect"], "car_c2");
            this_2.sprite_sheet(c3, this_2.effect_sprite["2p_speeddash_effect"], "car_c3");
            var w = this_2.car[String(i)]["w"];
            var w2 = this_2.car[String(i)]["w2"];
            this_2.tween_timer["p2_car_run" + String(i)] = new egret.Timer(1, 1);
            var Timer_w = this_2.tween_timer["p2_car_run" + String(i)];
            Timer_w.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
                Timer_w.stop();
                w.rotation -= 30;
                w2.rotation -= 30;
                if (_this.check_bool.run) {
                    Timer_w.start();
                }
                else {
                }
            }, Timer_w.start());
        };
        var this_2 = this;
        for (var i = 0; i < 10; i++) {
            _loop_2(i);
        }
    };
    GameUI.prototype.p2_ground_animation = function () {
        var _this = this;
        this.tween_timer["p2_ground_animation"] = new egret.Timer(10, 1);
        var Timer_ground = this.tween_timer["p2_ground_animation"];
        Timer_ground.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
            Timer_ground.stop();
            if (_this.check_bool.bg) {
                for (var i = 0; i < 2; i++) {
                    if (_this.bg["g" + i].x >= 1920) {
                        _this.bg["g" + i].x = -7260 + 20;
                    }
                    else {
                        _this.bg["g" + i].x += 20;
                    }
                    if (_this.bg["s" + i].x >= 1920) {
                        _this.bg["s" + i].x = -2700 + 5;
                    }
                    else {
                        _this.bg["s" + i].x += 5;
                    }
                    if (_this.bg["m" + i].x >= 1920) {
                        _this.bg["m" + i].x = -2200 + 5;
                    }
                    else {
                        _this.bg["m" + i].x += 10;
                    }
                }
                Timer_ground.start();
            }
        }, Timer_ground.start());
    };
    GameUI.prototype.p2_change_ranking = function () {
        var _this = this;
        this.tween_timer["p2_change_ranking"] = new egret.Timer(1, 1);
        var Time_rank = this.tween_timer["p2_change_ranking"];
        Time_rank.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
            Time_rank.stop();
            var rank_count = [];
            for (var i = 0; i < 10; i++) {
                var c = _this.car[String(i)]["gp"];
                var count = 0;
                for (var j = 0; j < 10; j++) {
                    var c_j = _this.car[String(j)]["gp"];
                    if (c.x > c_j.x) {
                        count += 1;
                    }
                }
                rank_count[i] = count;
            }
            var str = "";
            for (var i = 0; i < 10; i++) {
                str += rank_count[i];
                for (var j = 0; j < 10; j++) {
                    if (i == rank_count[j]) {
                        var img = _this.rank["p2"][String(i)]["num"];
                        img.source = "irn_" + (j + 1) + "_png";
                    }
                }
            }
            if (_this.check_bool.rank) {
                _this.p2_change_ranking();
            }
        }, Time_rank.start());
    };
    GameUI.prototype.p2_car_loop_animation = function () {
        var _this = this;
        var c_x = {};
        var Timer_c = {};
        var _loop_3 = function (i) {
            var c = this_3.car[String(i)]["gp"];
            this_3.tween_timer["p2_car_loop_animation" + String(i)] = new egret.Timer(20, 75);
            Timer_c[String(i)] = this_3.tween_timer["p2_car_loop_animation" + String(i)];
            c_x[String(i)] = {};
            c_x[String(i)].d = Math.random() * 1545;
            c_x[String(i)].n = Math.random() * 0.95 + 0.05;
            Timer_c[String(i)].addEventListener(egret.TimerEvent.TIMER, function () {
                if (Math.abs(c.x - c_x[String(i)].d) > 5) {
                    var e1 = _this.car[String(i)]["e1"];
                    var e2 = _this.car[String(i)]["e2"];
                    var e3 = _this.car[String(i)]["e3"];
                    if (c.x > c_x[String(i)].d) {
                        var speed = Math.abs(c.x - c_x[String(i)].d) / 25 * c_x[String(i)].n + 3;
                        if (speed >= 23) {
                            e1.visible = true;
                            e2.visible = true;
                            e3.visible = true;
                        }
                        else if (speed < 23 && speed >= 17) {
                            e1.visible = true;
                            e2.visible = true;
                            e3.visible = false;
                        }
                        else if (speed < 17 && speed >= 10) {
                            e1.visible = true;
                            e2.visible = false;
                            e3.visible = false;
                        }
                        else {
                            e1.visible = false;
                            e2.visible = false;
                            e3.visible = false;
                        }
                        c.x -= speed;
                    }
                    else {
                        e1.visible = false;
                        e2.visible = false;
                        e3.visible = false;
                        var speed = Math.abs(c.x - c_x[String(i)].d) / 25 * c_x[String(i)].n + 3;
                        c.x += speed;
                    }
                }
            }, Timer_c[String(i)].start());
            Timer_c[String(i)].addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
                Timer_c[String(i)].stop();
                if (i == 0) {
                    if (_this.check_bool.result) {
                        _this.check_bool.result = false;
                        var first_dit = 9999;
                        for (var j = 0; j < 10; j++) {
                            if (c_x[String(j)].d < first_dit) {
                                first_dit = c_x[String(j)].d;
                            }
                        }
                        _this.p2_car_animation(_this.result_num);
                    }
                    else {
                        _this.p2_car_loop_animation();
                        if (_this.result_num != null) {
                            _this.check_bool.result = true;
                        }
                    }
                }
            }, Timer_c[String(i)].start());
        };
        var this_3 = this;
        for (var i = 0; i < 10; i++) {
            _loop_3(i);
        }
    };
    GameUI.prototype.p2_car_animation = function (num_arr) {
        var _this = this;
        var c_x = {};
        var Timer_c = {};
        var _loop_4 = function (i) {
            var e1 = this_4.car[String(i)]["e1"];
            var e2 = this_4.car[String(i)]["e2"];
            var e3 = this_4.car[String(i)]["e3"];
            e1.visible = false;
            e2.visible = false;
            e3.visible = false;
            var c = this_4.car[String(num_arr[i])]["gp"];
            this_4.tween_timer["p2_car_animation" + String(i)] = new egret.Timer(20, 75);
            Timer_c[String(i)] = this_4.tween_timer["p2_car_animation" + String(i)];
            c_x[String(i)] = {};
            c_x[String(i)].d = Math.random() * 100 + i * 100 + 500;
            Timer_c[String(i)].addEventListener(egret.TimerEvent.TIMER, function () {
                if (Math.abs(c.x - c_x[String(i)].d) > 5) {
                    if (c.x > c_x[String(i)].d) {
                        c.x -= Math.abs(c.x - c_x[String(i)].d) / 20 + 3;
                    }
                    else {
                        c.x += Math.abs(c.x - c_x[String(i)].d) / 20 + 3;
                    }
                }
                else {
                    c.x = c_x[String(i)].d;
                }
            }, Timer_c[String(i)].start());
            Timer_c[String(i)].addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
                Timer_c[String(i)].stop();
                c.x = c_x[String(i)].d;
                if (i == 0) {
                    var first_dit = 9999;
                    for (var j = 0; j < 10; j++) {
                        if (c_x[String(j)].d < first_dit) {
                            first_dit = c_x[String(j)].d;
                        }
                    }
                    _this.check_bool.rank = false;
                    _this.p2_car_stop_animation(first_dit);
                }
            }, Timer_c[String(i)].start());
        };
        var this_4 = this;
        for (var i = 0; i < 10; i++) {
            _loop_4(i);
        }
    };
    GameUI.prototype.p2_car_stop_animation = function (first_dit) {
        var _this = this;
        this.sprite_sheet(this.stop["goalflag"], this.stop["goalflag_sprite"], "goalflag");
        this.tween_timer["p2_car_stop_animation"] = new egret.Timer(20, 75);
        var Timer_stop = this.tween_timer["p2_car_stop_animation"];
        Timer_stop.addEventListener(egret.TimerEvent.TIMER, function () {
            if (first_dit > _this.stop["gp"].x) {
                _this.stop["gp"].x += 50;
            }
            else {
                _this.check_bool.run = false;
                _this.sprite_sheet_stop["car_c1"] = true;
                _this.sprite_sheet_stop["car_c1"] = true;
                _this.sprite_sheet_stop["car_c1"] = true;
                _this.check_bool.bg = false;
                Timer_stop.stop();
                _this.audio.stop_sound("fire_wav");
                _this.audio.play_sound("finish_wav", false);
                var Timer_stop_2_1 = new egret.Timer(20, 100);
                var p2_stop_img_alpha_back_1 = false;
                Timer_stop_2_1.addEventListener(egret.TimerEvent.TIMER, function () {
                    if (p2_stop_img_alpha_back_1) {
                        _this.p2_stop_img.alpha -= 0.05;
                    }
                    else {
                        _this.p2_stop_img.alpha += 0.05;
                    }
                    if (_this.p2_stop_img.alpha >= 1) {
                        p2_stop_img_alpha_back_1 = true;
                    }
                    else if (_this.p2_stop_img.alpha <= 0) {
                        Timer_stop_2_1.stop();
                        _this.check_bool.run = true;
                        _this.p2_car_run();
                        _this.p2_car_finish_animation();
                    }
                }, Timer_stop_2_1.start());
            }
        }, Timer_stop.start());
    };
    GameUI.prototype.p2_car_finish_animation = function () {
        var _this = this;
        var c_x = {};
        var Timer_c = {};
        var _loop_5 = function (i) {
            var c = this_5.car[String(i)]["gp"];
            this_5.tween_timer["p2_car_stop_animation" + String(i)] = new egret.Timer(20, 75);
            Timer_c[String(i)] = this_5.tween_timer["p2_car_stop_animation" + String(i)];
            c_x[String(i)] = {};
            Timer_c[String(i)].addEventListener(egret.TimerEvent.TIMER, function () {
                c.x -= 50;
            }, Timer_c[String(i)].start());
            Timer_c[String(i)].addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
                Timer_c[String(i)].stop();
                c.x = 1920;
                if (i == 0) {
                    _this.sprite_sheet_stop["goalflag"] = true;
                    _this.start_gp.visible = false;
                    _this.stop["gp"].x = -950;
                    _this.p3_car_animation();
                }
            }, Timer_c[String(i)].start());
        };
        var this_5 = this;
        for (var i = 0; i < 10; i++) {
            _loop_5(i);
        }
    };
    GameUI.prototype.p3_car_animation = function () {
        var _this = this;
        var result_animation = new resultAnimation();
        var rank_gp = {};
        this.set_p1_rank(this.content["draw"]["data"]["end_time"], this.content["draw"]["data"]["issue"], this.result_num);
        this.on_set_p4(0);
        this.check_bool.run = false;
        this.p1_car_gp.visible = true;
        this.audio.play_sound("win_wav");
        for (var i = 0; i < 4; i++) {
            var light = this.light[String(i)];
            light.visible = true;
        }
        for (var i = 0; i < 10; i++) {
            rank_gp[String(i)] = result_animation.p3_rank.getChildAt(i);
            var gp = rank_gp[i];
            rank_gp[String(i)] = gp.getChildAt(1);
            var img = rank_gp[String(i)];
            img.source = "irn_" + (this.result_num[i] + 1) + "_png";
            if (i < 3) {
                var num = result_animation["p3_rank_" + String(i + 1)];
                num.source = String((this.result_num[i] + 1)) + "_png";
                if (i == 0) {
                    result_animation.image1.source = "p3_car_" + (this.result_num[i] + 1) + "_front_png";
                }
                else if (i == 1) {
                    result_animation.image0.source = "p3_" + (this.result_num[i] + 1) + "_34_L_png";
                }
                else if (i == 2) {
                    result_animation.image.source = "p3_" + (this.result_num[i] + 1) + "_34_R_png";
                }
            }
        }
        var _date = this.content["current"]["data"]["end_time"].split("T");
        var _time = _date[1].split(":");
        result_animation.p3_up_id.text = "期号 " + this.content["current"]["data"]["issue"];
        result_animation.p3_up_timer.text = "时间   " + _time[0] + ":" + _time[1];
        this.p3_mute_TgeHandler(result_animation.mute_toggle);
        result_animation.mute_toggle.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.mute_TgeHandler();
            _this.p3_mute_TgeHandler(result_animation.mute_toggle);
        }, this);
        result_animation.record_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.record_gp.visible = true;
        }, this);
        this.animation_child.addChild(result_animation);
        result_animation.play(function () {
            result_animation.mute_toggle.removeEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.mute_TgeHandler();
                _this.p3_mute_TgeHandler(result_animation.mute_toggle);
            }, _this);
            result_animation.record_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.record_gp.visible = true;
            }, _this);
            if (result_animation.parent == null) {
                return;
            }
            _this.check_bool.is_playing = false;
            _this.check_bool.timer_count = false;
            _this.p1_time_animation();
            _this.result_num = null;
            _this.record_gp.visible = true;
            _this.record_btn.enabled = true;
        });
    };
    GameUI.prototype.p3_mute_TgeHandler = function (img) {
        if (egret.localStorage.getItem("mute_toggle") == "true") {
            img.source = "mute_button_off_png";
        }
        else if (egret.localStorage.getItem("mute_toggle") == "false") {
            img.source = "mute_button_on_png";
        }
    };
    GameUI.prototype.uiCompHandler = function () {
        this.play_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.play, this);
        this.record_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.p1_record_gp_v, this);
        this.record_disable_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.p1_record_gp_dis_v, this);
        this.mute_toggle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mute_TgeHandler, this);
        this.p2_mute_toggle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mute_TgeHandler, this);
        this.p4_mute_toggle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mute_TgeHandler, this);
    };
    GameUI.prototype.draw = function (content) {
        this.result_num = [];
        var s = [];
        for (var i = 0; i < 10; i++) {
            s[i] = content["data"]["draw_numbers"][i];
        }
        for (var i = 0; i < 10; i++) {
            this.result_num[i] = Number(s[i]) - 1;
        }
    };
    GameUI.prototype.p1_record_gp_v = function () {
        this.record_gp.visible = true;
    };
    GameUI.prototype.p1_record_gp_dis_v = function () {
        this.record_gp.visible = false;
    };
    GameUI.prototype.mute_TgeHandler = function () {
        var _this = this;
        if (this.audio.init == false) {
            this.audio.init = true;
            if (this.check_bool.run) {
                this.audio.play_sound("fire_wav", true);
            }
            if (this.check_bool.is_playing && this.p1_car_gp.visible == true && this.p1_car_gp.visible == true) {
                this.audio.play_sound("start_1_wav", false);
                this.tween_timer["mute_TgeHandler"] = new egret.Timer(this.audio.get_length("start_1_wav"), 1);
                var Timer_p = this.tween_timer["mute_TgeHandler"];
                Timer_p.addEventListener(egret.TimerEvent.TIMER, function () {
                    if (_this.check_bool.is_playing && _this.p1_car_gp.visible == true && _this.p1_car_gp.visible == true) {
                        _this.audio.play_sound("start_2_wav", true);
                    }
                }, Timer_p.start());
            }
        }
        if (egret.localStorage.getItem("mute_toggle") == "true") {
            egret.localStorage.setItem("mute_toggle", "false");
            this.mute_toggle.source = "mute_button_on_png";
            this.p2_mute_toggle.source = "2p_mute_button_unmute_png";
            this.p4_mute_toggle.source = "mute_button_on_png";
            this.audio.mute(false);
        }
        else if (egret.localStorage.getItem("mute_toggle") == "false") {
            egret.localStorage.setItem("mute_toggle", "true");
            this.mute_toggle.source = "mute_button_off_png";
            this.p2_mute_toggle.source = "2p_mute_button_mute_png";
            this.p4_mute_toggle.source = "mute_button_off_png";
            this.audio.mute(true);
        }
    };
    GameUI.prototype.initWebSocket = function () {
        this.host = "backend.0371zkw.com/lottery/28/";
        //this.host = "192.168.0.157:8088/lottery/28/";
        if (document.location.protocol == 'https:') {
            this.host = "wss://" + this.host;
        }
        else {
            this.host = "ws://" + this.host;
        }
        this.socket = new egret.WebSocket();
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        this.socket.connectByUrl(this.host);
    };
    GameUI.prototype.sendData = function (s) {
        this.socket.writeUTF(s);
    };
    GameUI.prototype.onSocketOpen = function () {
    };
    GameUI.prototype.onSocketClose = function () {
        var _this = this;
        this.socket.connectByUrl(this.host);
        this.show_notice("网络断线，重新连接中", null);
        var Timer = new egret.Timer(10000, 1);
        Timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
            if (_this.socket.connected == true) {
                Timer.stop();
                _this.notice_gp.visible = false;
            }
            else {
                Timer.start();
                _this.reset_all();
                _this.socket.connectByUrl(_this.host);
                _this.show_notice("网络断线，重新连接中", null);
            }
        }, Timer.start());
    };
    GameUI.prototype.onSocketError = function () {
    };
    GameUI.prototype.formatDate = function () {
        var Dates = new Date();
        var Year = Dates.getFullYear();
        var Months = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
        var Day = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
        var Hours = Dates.getHours() < 10 ? '0' + Dates.getHours() : Dates.getHours();
        var Minutes = Dates.getMinutes() < 10 ? '0' + Dates.getMinutes() : Dates.getMinutes();
        var Seconds = Dates.getSeconds() < 10 ? '0' + Dates.getSeconds() : Dates.getSeconds();
        var count = ((((Number(Year) * 12 + Number(Months)) * 30 + Number(Day)) * 24 + Number(Hours)) * 60 + Number(Minutes)) * 60 + Number(Seconds);
        var s = { "Year": Year, "Months": Months, "Day": Day, "Hours": Hours, "Minutes": Minutes, "Seconds": Seconds, "count": count };
        return s;
        //return Year + '年' + Months + '月' + Day + '日' + Hours + '時' + Minutes + '分' + Seconds + '秒';
    };
    GameUI.prototype.time_count = function (_date) {
        var s = _date.split("T");
        var date = s[0].split("-");
        var time = s[1].split(":");
        var count = ((((Number(date[0]) * 12 + Number(date[1])) * 30 + Number(date[2])) * 24 + Number(time[0])) * 60 + Number(time[1])) * 60 + Number(time[2]);
        return count - this.formatDate()["count"];
    };
    GameUI.prototype.show_notice = function (content, confirm_btn) {
        this.notice_gp.visible = true;
        this.notice_text.text = content;
        if (confirm_btn != null) {
            this.notice_btn.visible = true;
            this.notice_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, confirm_btn, this);
        }
        else {
            this.notice_btn.visible = false;
        }
    };
    GameUI.prototype.draw_mask = function (t, string) {
        if (t.contains((this.mask_manager[string]))) {
            t.removeChild(this.mask_manager[string]);
        }
        this.mask_manager[string] = new egret.Shape();
        this.mask_manager[string].graphics.beginFill(0x0000ff);
        this.mask_manager[string].graphics.drawRoundRect(0, 0, t.width, t.height, 25);
        this.mask_manager[string].graphics.endFill();
        t.addChild(this.mask_manager[string]);
        t.mask = this.mask_manager[string];
    };
    GameUI.prototype.sprite_sheet = function (_img, _img_arr, _stop, delay) {
        var _this = this;
        if (delay === void 0) { delay = 50; }
        this.sprite_sheet_stop[_stop] = false;
        var img = _img;
        var img_arr = [];
        img_arr = _img_arr;
        var i = 0;
        var Timer_img = new egret.Timer(delay, 1);
        Timer_img.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
            Timer_img.stop();
            if (_this.sprite_sheet_stop[_stop] == true) {
            }
            else {
                if (img_arr.length == i + 1) {
                    i = 0;
                }
                else {
                    i++;
                }
                img.source = img_arr[i];
                Timer_img.start();
            }
        }, Timer_img.start());
    };
    return GameUI;
}(eui.Component));
__reflect(GameUI.prototype, "GameUI");
//# sourceMappingURL=GameUI.js.map