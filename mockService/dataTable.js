const Mock = require('mockjs');
exports.title = '数据表格' // 必填

exports.request = {}

exports.response = {
	'resultCode': '', // 返回码 [0000]成功 [9999]其他错误
	'resultDesc': '', // 返回描述
	'data': []
}

// 下面模拟随机返回的样本数据
exports.service = function*(next) {
		let v = Math.random();
		let rb = this.request.body;
		if(v < 0.05) {
			this.state.code = '9999';
			this.state.message = '其他错误';
		} else {
			this.state.body = Mock.mock({
				data:	[
					{
					  "id": 1,
					  "match_item_type": 3,
					  "game_type": 2,
					  "name": "新手专享话费赛",
					  "match_mode": 1,
					  "min_start_player_num": 6,
					  "max_start_player_num": 6,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "2|2|5000;",
					  "icon_id": 24,
					  "winner_rewards": "1|101|3|1;",
					  "init_start_scores": 3600,
					  "remain_player_num": 4,
					  "second_round_player_number": 3,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 1,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 2,
					  "match_item_type": 1,
					  "game_type": 2,
					  "name": "金币新手场",
					  "match_mode": 1,
					  "min_start_player_num": 6,
					  "max_start_player_num": 6,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "2|2|1000;",
					  "icon_id": 25,
					  "winner_rewards": "1|2|2|4000;",
					  "init_start_scores": 3600,
					  "remain_player_num": 4,
					  "second_round_player_number": 3,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 1,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 3,
					  "match_item_type": 1,
					  "game_type": 2,
					  "name": "金币初级场",
					  "match_mode": 1,
					  "min_start_player_num": 6,
					  "max_start_player_num": 6,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "2|2|2000;",
					  "icon_id": 26,
					  "winner_rewards": "1|2|2|8000;2|2|2|500;3|2|2|100;",
					  "init_start_scores": 3600,
					  "remain_player_num": 4,
					  "second_round_player_number": 3,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 1,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 4,
					  "match_item_type": 1,
					  "game_type": 2,
					  "name": "金币普通场",
					  "match_mode": 1,
					  "min_start_player_num": 9,
					  "max_start_player_num": 9,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "2|2|3000;",
					  "icon_id": 27,
					  "winner_rewards": "1|2|2|18000;2|2|2|2000;3|2|2|1000;",
					  "init_start_scores": 3600,
					  "remain_player_num": 4,
					  "second_round_player_number": 3,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 1,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 5,
					  "match_item_type": 1,
					  "game_type": 2,
					  "name": "金币中级场",
					  "match_mode": 1,
					  "min_start_player_num": 9,
					  "max_start_player_num": 9,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "2|2|6000;",
					  "icon_id": 28,
					  "winner_rewards": "1|2|2|40000;2|2|2|3000;3|2|2|1000;",
					  "init_start_scores": 3600,
					  "remain_player_num": 4,
					  "second_round_player_number": 3,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 1,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 6,
					  "match_item_type": 1,
					  "game_type": 2,
					  "name": "金币高级场",
					  "match_mode": 1,
					  "min_start_player_num": 9,
					  "max_start_player_num": 9,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "2|2|12000;",
					  "icon_id": 29,
					  "winner_rewards": "1|2|2|80000;2|2|2|5000;3|2|2|2000;",
					  "init_start_scores": 3600,
					  "remain_player_num": 4,
					  "second_round_player_number": 3,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 1,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 7,
					  "match_item_type": 1,
					  "game_type": 2,
					  "name": "金币顶级场",
					  "match_mode": 1,
					  "min_start_player_num": 9,
					  "max_start_player_num": 9,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "2|2|20000;",
					  "icon_id": 30,
					  "winner_rewards": "1|2|2|130000;2|2|2|10000;3|2|2|5000;",
					  "init_start_scores": 3600,
					  "remain_player_num": 4,
					  "second_round_player_number": 3,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 1,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 8,
					  "match_item_type": 2,
					  "game_type": 2,
					  "name": "50钻石争夺赛",
					  "match_mode": 1,
					  "min_start_player_num": 24,
					  "max_start_player_num": 24,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "2|2|5000;",
					  "icon_id": 11,
					  "winner_rewards": "1|1|2|50;2|1|2|10;3|1|2|5;",
					  "init_start_scores": 3600,
					  "remain_player_num": 18,
					  "second_round_player_number": 12,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 1,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 9,
					  "match_item_type": 2,
					  "game_type": 2,
					  "name": "100钻石争夺赛",
					  "match_mode": 1,
					  "min_start_player_num": 30,
					  "max_start_player_num": 30,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "2|2|8000;",
					  "icon_id": 12,
					  "winner_rewards": "1|1|2|100;2|1|2|20;3|1|2|10;",
					  "init_start_scores": 3600,
					  "remain_player_num": 18,
					  "second_round_player_number": 12,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 1,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 10,
					  "match_item_type": 2,
					  "game_type": 2,
					  "name": "200钻石争夺赛",
					  "match_mode": 1,
					  "min_start_player_num": 36,
					  "max_start_player_num": 36,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "2|2|13000;",
					  "icon_id": 13,
					  "winner_rewards": "1|1|2|200;2|1|2|30;3|1|2|20;",
					  "init_start_scores": 3600,
					  "remain_player_num": 18,
					  "second_round_player_number": 12,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 1,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 11,
					  "match_item_type": 3,
					  "game_type": 2,
					  "name": "5元话费卡",
					  "match_mode": 1,
					  "min_start_player_num": 24,
					  "max_start_player_num": 24,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "2|2|5000;",
					  "icon_id": 15,
					  "winner_rewards": "1|101|3|1;1|10107|1|1;2|1|2|10;3|1|2|5;",
					  "init_start_scores": 3600,
					  "remain_player_num": 18,
					  "second_round_player_number": 12,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 1,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 12,
					  "match_item_type": 3,
					  "game_type": 2,
					  "name": "5元话费卡",
					  "match_mode": 1,
					  "min_start_player_num": 24,
					  "max_start_player_num": 24,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "1|2|5;",
					  "icon_id": 15,
					  "winner_rewards": "1|101|3|1;1|10107|1|1;2|1|2|10;3|1|2|5;",
					  "init_start_scores": 3600,
					  "remain_player_num": 18,
					  "second_round_player_number": 12,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 1,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 13,
					  "match_item_type": 3,
					  "game_type": 2,
					  "name": "10元话费卡",
					  "match_mode": 1,
					  "min_start_player_num": 24,
					  "max_start_player_num": 24,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "1|2|10;",
					  "icon_id": 16,
					  "winner_rewards": "1|102|3|1;1|10101|1|1;2|1|2|20;3|1|2|10;",
					  "init_start_scores": 3600,
					  "remain_player_num": 18,
					  "second_round_player_number": 12,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 1,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 14,
					  "match_item_type": 3,
					  "game_type": 2,
					  "name": "30元话费卡",
					  "match_mode": 1,
					  "min_start_player_num": 48,
					  "max_start_player_num": 48,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "1|2|15;",
					  "icon_id": 17,
					  "winner_rewards": "1|103|3|1;1|10102|1|1;2|1|2|30;3|1|2|10;5|1|2|5;",
					  "init_start_scores": 3600,
					  "remain_player_num": 18,
					  "second_round_player_number": 12,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 1,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 15,
					  "match_item_type": 1,
					  "game_type": 2,
					  "name": "流水3人场",
					  "match_mode": 1,
					  "min_start_player_num": 3,
					  "max_start_player_num": 3,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "2|2|0;",
					  "icon_id": 25,
					  "winner_rewards": "1|2|2|4000;",
					  "init_start_scores": 3600,
					  "remain_player_num": 3,
					  "second_round_player_number": 3,
					  "phase2_game_rounds": 1,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 1,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 16,
					  "match_item_type": 1,
					  "game_type": 2,
					  "name": "入场券争夺赛",
					  "match_mode": 1,
					  "min_start_player_num": 24,
					  "max_start_player_num": 24,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "2|2|2000;",
					  "icon_id": 1,
					  "winner_rewards": "1|3|2|3;24|2|2|200;",
					  "init_start_scores": 3600,
					  "remain_player_num": 18,
					  "second_round_player_number": 12,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 0,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 17,
					  "match_item_type": 1,
					  "game_type": 2,
					  "name": "入场券争夺赛",
					  "match_mode": 1,
					  "min_start_player_num": 48,
					  "max_start_player_num": 48,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "2|2|2500;",
					  "icon_id": 2,
					  "winner_rewards": "1|3|2|4;3|3|2|2;6|2|2|900;12|2|2|500;24|2|2|240;48|2|2|120;",
					  "init_start_scores": 3600,
					  "remain_player_num": 24,
					  "second_round_player_number": 12,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 0,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 18,
					  "match_item_type": 1,
					  "game_type": 2,
					  "name": "入场券争夺赛",
					  "match_mode": 1,
					  "min_start_player_num": 72,
					  "max_start_player_num": 72,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "2|2|3000;",
					  "icon_id": 3,
					  "winner_rewards": "1|3|2|7;3|3|2|4;6|2|2|1400;12|2|2|700;24|2|2|320;72|2|2|150;",
					  "init_start_scores": 3600,
					  "remain_player_num": 36,
					  "second_round_player_number": 24,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 0,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 19,
					  "match_item_type": 1,
					  "game_type": 2,
					  "name": "福利大奖赛",
					  "match_mode": 0,
					  "min_start_player_num": 24,
					  "max_start_player_num": 24,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "3|2|1;",
					  "icon_id": 4,
					  "winner_rewards": "1|4|2|1000;24|2|2|240;",
					  "init_start_scores": 3600,
					  "remain_player_num": 18,
					  "second_round_player_number": 12,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 25,
					  "date_mon_day": 0,
					  "date_week_day": 7,
					  "date_day_hour": 25,
					  "date_hour_minute": 30,
					  "allow_late_minutes": 15,
					  "open_flag": 0,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 20,
					  "match_item_type": 1,
					  "game_type": 2,
					  "name": "福利大奖赛",
					  "match_mode": 0,
					  "min_start_player_num": 48,
					  "max_start_player_num": 48,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "3|2|2;",
					  "icon_id": 5,
					  "winner_rewards": "1|4|2|2600;3|4|2|1200;6|2|2|1800;12|2|2|900;24|2|2|450;48|2|2|220;",
					  "init_start_scores": 3600,
					  "remain_player_num": 24,
					  "second_round_player_number": 12,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 25,
					  "date_mon_day": 0,
					  "date_week_day": 7,
					  "date_day_hour": 25,
					  "date_hour_minute": 30,
					  "allow_late_minutes": 15,
					  "open_flag": 0,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 21,
					  "match_item_type": 1,
					  "game_type": 2,
					  "name": "福利大奖赛",
					  "match_mode": 0,
					  "min_start_player_num": 72,
					  "max_start_player_num": 72,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "3|2|3;",
					  "icon_id": 6,
					  "winner_rewards": "1|4|2|5000;3|4|2|2500;6|2|2|3200;12|2|2|1600;24|2|2|800;72|2|2|360;",
					  "init_start_scores": 3600,
					  "remain_player_num": 36,
					  "second_round_player_number": 24,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 25,
					  "date_mon_day": 0,
					  "date_week_day": 7,
					  "date_day_hour": 25,
					  "date_hour_minute": 30,
					  "allow_late_minutes": 15,
					  "open_flag": 0,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 22,
					  "match_item_type": 1,
					  "game_type": 2,
					  "name": "超级福利大奖赛",
					  "match_mode": 0,
					  "min_start_player_num": 1200,
					  "max_start_player_num": 1500,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "3|2|5;",
					  "icon_id": 7,
					  "winner_rewards": "1|4|2|48000;3|4|2|24000;6|4|2|12000;12|4|2|6000;24|4|2|3000;48|4|2|1500;100|2|2|3800;200|2|2|1800;700|2|2|900;1200|2|2|420;",
					  "init_start_scores": 3600,
					  "remain_player_num": 60,
					  "second_round_player_number": 48,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 120,
					  "date_mon_day": 0,
					  "date_week_day": 6,
					  "date_day_hour": 14,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 30,
					  "open_flag": 0,
					  "server_id": 1000,
					  "early_show_hour": 138
					},
					{
					  "id": 23,
					  "match_item_type": 1,
					  "game_type": 2,
					  "name": "超级福利大奖赛",
					  "match_mode": 0,
					  "min_start_player_num": 1200,
					  "max_start_player_num": 1500,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "3|2|5;",
					  "icon_id": 7,
					  "winner_rewards": "1|4|2|48000;3|4|2|24000;6|4|2|12000;12|4|2|6000;24|4|2|3000;48|4|2|1500;100|2|2|3800;200|2|2|1800;700|2|2|900;1200|2|2|420;",
					  "init_start_scores": 3600,
					  "remain_player_num": 60,
					  "second_round_player_number": 48,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 120,
					  "date_mon_day": 0,
					  "date_week_day": 6,
					  "date_day_hour": 20,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 30,
					  "open_flag": 0,
					  "server_id": 1000,
					  "early_show_hour": 6
					},
					{
					  "id": 24,
					  "match_item_type": 1,
					  "game_type": 2,
					  "name": "超级福利大奖赛",
					  "match_mode": 0,
					  "min_start_player_num": 1200,
					  "max_start_player_num": 1500,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "3|2|5;",
					  "icon_id": 7,
					  "winner_rewards": "1|4|2|48000;3|4|2|24000;6|4|2|12000;12|4|2|6000;24|4|2|3000;48|4|2|1500;100|2|2|3800;200|2|2|1800;700|2|2|900;1200|2|2|420;",
					  "init_start_scores": 3600,
					  "remain_player_num": 60,
					  "second_round_player_number": 48,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 120,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 14,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 30,
					  "open_flag": 0,
					  "server_id": 1000,
					  "early_show_hour": 18
					},
					{
					  "id": 25,
					  "match_item_type": 1,
					  "game_type": 2,
					  "name": "超级福利大奖赛",
					  "match_mode": 0,
					  "min_start_player_num": 1200,
					  "max_start_player_num": 1500,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "3|2|5;",
					  "icon_id": 7,
					  "winner_rewards": "1|4|2|48000;3|4|2|24000;6|4|2|12000;12|4|2|6000;24|4|2|3000;48|4|2|1500;100|2|2|3800;200|2|2|1800;700|2|2|900;1200|2|2|420;",
					  "init_start_scores": 3600,
					  "remain_player_num": 60,
					  "second_round_player_number": 48,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 120,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 20,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 30,
					  "open_flag": 0,
					  "server_id": 1000,
					  "early_show_hour": 6
					},
					{
					  "id": 26,
					  "match_item_type": 1,
					  "game_type": 1,
					  "name": "金币新手场",
					  "match_mode": 2,
					  "min_start_player_num": 3,
					  "max_start_player_num": 3,
					  "can_int_min_coin": 1000,
					  "can_in_max_coin": 100000,
					  "table_cost": 100,
					  "max_point": 9600,
					  "init_base": 10,
					  "base_increase_second": 3600,
					  "base_times": 15,
					  "sign_cost": "2|2|0;",
					  "icon_id": 0,
					  "winner_rewards": "",
					  "init_start_scores": 0,
					  "remain_player_num": 0,
					  "second_round_player_number": 0,
					  "phase2_game_rounds": 0,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 0,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 27,
					  "match_item_type": 1,
					  "game_type": 1,
					  "name": "金币初级场",
					  "match_mode": 2,
					  "min_start_player_num": 3,
					  "max_start_player_num": 3,
					  "can_int_min_coin": 2000,
					  "can_in_max_coin": 300000,
					  "table_cost": 200,
					  "max_point": 24000,
					  "init_base": 25,
					  "base_increase_second": 3600,
					  "base_times": 15,
					  "sign_cost": "2|2|0;",
					  "icon_id": 0,
					  "winner_rewards": "",
					  "init_start_scores": 0,
					  "remain_player_num": 0,
					  "second_round_player_number": 0,
					  "phase2_game_rounds": 0,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 0,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 28,
					  "match_item_type": 1,
					  "game_type": 1,
					  "name": "金币普通场",
					  "match_mode": 2,
					  "min_start_player_num": 3,
					  "max_start_player_num": 3,
					  "can_int_min_coin": 5000,
					  "can_in_max_coin": -1,
					  "table_cost": 500,
					  "max_point": 120000,
					  "init_base": 60,
					  "base_increase_second": 3600,
					  "base_times": 15,
					  "sign_cost": "2|2|0;",
					  "icon_id": 0,
					  "winner_rewards": "",
					  "init_start_scores": 0,
					  "remain_player_num": 0,
					  "second_round_player_number": 0,
					  "phase2_game_rounds": 0,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 0,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 29,
					  "match_item_type": 1,
					  "game_type": 1,
					  "name": "金币中级场",
					  "match_mode": 2,
					  "min_start_player_num": 3,
					  "max_start_player_num": 3,
					  "can_int_min_coin": 20000,
					  "can_in_max_coin": -1,
					  "table_cost": 1800,
					  "max_point": 240000,
					  "init_base": 150,
					  "base_increase_second": 3600,
					  "base_times": 15,
					  "sign_cost": "2|2|0;",
					  "icon_id": 0,
					  "winner_rewards": "",
					  "init_start_scores": 0,
					  "remain_player_num": 0,
					  "second_round_player_number": 0,
					  "phase2_game_rounds": 0,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 0,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 30,
					  "match_item_type": 1,
					  "game_type": 1,
					  "name": "金币高级场",
					  "match_mode": 2,
					  "min_start_player_num": 3,
					  "max_start_player_num": 3,
					  "can_int_min_coin": 50000,
					  "can_in_max_coin": -1,
					  "table_cost": 4500,
					  "max_point": 800000,
					  "init_base": 400,
					  "base_increase_second": 3600,
					  "base_times": 15,
					  "sign_cost": "2|2|0;",
					  "icon_id": 0,
					  "winner_rewards": "",
					  "init_start_scores": 0,
					  "remain_player_num": 0,
					  "second_round_player_number": 0,
					  "phase2_game_rounds": 0,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 0,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 31,
					  "match_item_type": 1,
					  "game_type": 1,
					  "name": "金币顶级场",
					  "match_mode": 2,
					  "min_start_player_num": 3,
					  "max_start_player_num": 3,
					  "can_int_min_coin": 100000,
					  "can_in_max_coin": -1,
					  "table_cost": 9000,
					  "max_point": 2000000,
					  "init_base": 1000,
					  "base_increase_second": 3600,
					  "base_times": 15,
					  "sign_cost": "2|2|0;",
					  "icon_id": 0,
					  "winner_rewards": "",
					  "init_start_scores": 0,
					  "remain_player_num": 0,
					  "second_round_player_number": 0,
					  "phase2_game_rounds": 0,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 0,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 32,
					  "match_item_type": 2,
					  "game_type": 2,
					  "name": "500钻石争夺赛",
					  "match_mode": 1,
					  "min_start_player_num": 60,
					  "max_start_player_num": 60,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "2|2|20000;",
					  "icon_id": 14,
					  "winner_rewards": "1|1|2|500;2|1|2|50;3|1|2|20;5|1|2|10;",
					  "init_start_scores": 3600,
					  "remain_player_num": 18,
					  "second_round_player_number": 12,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 0,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 33,
					  "match_item_type": 3,
					  "game_type": 2,
					  "name": "100元话费卡",
					  "match_mode": 1,
					  "min_start_player_num": 120,
					  "max_start_player_num": 120,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "1|2|20;",
					  "icon_id": 18,
					  "winner_rewards": "1|104|3|1;1|10103|1|1;2|1|2|100;3|1|2|50;5|1|2|20;10|1|2|10;",
					  "init_start_scores": 3600,
					  "remain_player_num": 36,
					  "second_round_player_number": 24,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 0,
					  "server_id": 1000,
					  "early_show_hour": 0
					},
					{
					  "id": 34,
					  "match_item_type": 3,
					  "game_type": 2,
					  "name": "300元话费卡",
					  "match_mode": 1,
					  "min_start_player_num": 120,
					  "max_start_player_num": 120,
					  "can_int_min_coin": 0,
					  "can_in_max_coin": 0,
					  "table_cost": 0,
					  "max_point": 0,
					  "init_base": 0,
					  "base_increase_second": 60,
					  "base_times": 15,
					  "sign_cost": "1|2|50;",
					  "icon_id": 19,
					  "winner_rewards": "1|105|3|1;1|10105|1|1;2|1|2|100;3|1|2|50;5|1|2|30;10|1|2|20;20|1|2|10;",
					  "init_start_scores": 3600,
					  "remain_player_num": 36,
					  "second_round_player_number": 24,
					  "phase2_game_rounds": 2,
					  "early_exam_minute": 0,
					  "date_mon_day": 0,
					  "date_week_day": 0,
					  "date_day_hour": 0,
					  "date_hour_minute": 0,
					  "allow_late_minutes": 0,
					  "open_flag": 0,
					  "server_id": 1000,
					  "early_show_hour": 0
					}
				  ]
				})
		}
	yield next;
};