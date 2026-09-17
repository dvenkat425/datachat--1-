// Lets a visitor try the app with one click, with no file of their own —
// critical for a recruiter or interviewer landing on the live demo cold.
// Deliberately sized (500+ rows, a dozen reps, a full year) so it holds up
// to real stress-testing ("top 15 reps", "trend by month") rather than
// running out after a couple of rows.
export const SAMPLE_CSV = `order_id,date,region,category,rep,amount,status
1001,2026-01-05,North,Software,Mei Lin Tan,2461,completed
1002,2026-01-07,West,Hardware,Tom Bennett,5143,completed
1003,2026-01-07,East,Training,Elena Petrova,820,cancelled
1004,2026-01-07,Central,Support Plan,Noah Weiss,939,completed
1005,2026-01-08,East,Support Plan,Priya Nair,856,completed
1006,2026-01-08,West,Hardware,Aisha Rahman,5734,completed
1007,2026-01-09,North,Hardware,Grace Osei,150,completed
1008,2026-01-09,West,Training,Tom Bennett,492,completed
1009,2026-01-11,East,Hardware,Grace Osei,2859,completed
1010,2026-01-11,East,Hardware,Sam Okafor,1869,completed
1011,2026-01-12,East,Services,Aisha Rahman,1511,completed
1012,2026-01-12,West,Training,Noah Weiss,848,completed
1013,2026-01-12,East,Software,Daniel Kim,269,completed
1014,2026-01-13,North,Hardware,Elena Petrova,8234,completed
1015,2026-01-13,North,Support Plan,Priya Nair,1627,completed
1016,2026-01-13,North,Software,Grace Osei,2985,completed
1017,2026-01-14,East,Services,Lucia Fernandez,1415,completed
1018,2026-01-14,Central,Support Plan,Jordan Lee,1362,cancelled
1019,2026-01-14,North,Software,Tom Bennett,1816,completed
1020,2026-01-15,East,Support Plan,Marcus Chen,890,cancelled
1021,2026-01-16,South,Training,Grace Osei,1157,completed
1022,2026-01-16,West,Training,Priya Nair,556,completed
1023,2026-01-18,East,Support Plan,Tom Bennett,1604,completed
1024,2026-01-18,Central,Software,Jordan Lee,1685,cancelled
1025,2026-01-21,Central,Software,Daniel Kim,1833,completed
1026,2026-01-21,West,Training,Daniel Kim,759,completed
1027,2026-01-21,West,Hardware,Lucia Fernandez,6958,completed
1028,2026-01-22,Central,Hardware,Elena Petrova,2154,completed
1029,2026-01-26,South,Training,Marcus Chen,600,completed
1030,2026-01-27,East,Services,Daniel Kim,2531,completed
1031,2026-01-29,South,Hardware,Daniel Kim,4758,completed
1032,2026-01-29,Central,Software,Grace Osei,2989,cancelled
1033,2026-01-30,West,Software,Mei Lin Tan,3644,completed
1034,2026-01-31,South,Software,Jordan Lee,1223,cancelled
1035,2026-02-01,South,Software,Grace Osei,2402,completed
1036,2026-02-01,South,Services,Sam Okafor,1059,completed
1037,2026-02-01,South,Hardware,Tom Bennett,7197,completed
1038,2026-02-03,Central,Support Plan,Elena Petrova,1115,completed
1039,2026-02-04,East,Hardware,Lucia Fernandez,5763,completed
1040,2026-02-04,West,Training,Sam Okafor,171,completed
1041,2026-02-08,East,Support Plan,Lucia Fernandez,912,completed
1042,2026-02-08,North,Support Plan,Tom Bennett,920,completed
1043,2026-02-09,South,Software,Daniel Kim,1529,completed
1044,2026-02-09,Central,Hardware,Grace Osei,9035,completed
1045,2026-02-09,West,Training,Priya Nair,150,completed
1046,2026-02-10,East,Hardware,Sam Okafor,4436,cancelled
1047,2026-02-10,East,Support Plan,Sam Okafor,1336,completed
1048,2026-02-10,Central,Hardware,Grace Osei,3661,cancelled
1049,2026-02-11,Central,Training,Grace Osei,811,completed
1050,2026-02-11,North,Software,Mei Lin Tan,1962,completed
1051,2026-02-11,East,Services,Tom Bennett,1022,completed
1052,2026-02-12,Central,Hardware,Grace Osei,7249,completed
1053,2026-02-12,East,Training,Daniel Kim,812,completed
1054,2026-02-13,North,Software,Aisha Rahman,2802,completed
1055,2026-02-15,Central,Hardware,Noah Weiss,3689,cancelled
1056,2026-02-15,North,Hardware,Marcus Chen,7029,completed
1057,2026-02-15,Central,Software,Mei Lin Tan,2080,completed
1058,2026-02-16,North,Training,Noah Weiss,825,completed
1059,2026-02-16,West,Hardware,Jordan Lee,4758,completed
1060,2026-02-16,East,Services,Aisha Rahman,1252,completed
1061,2026-02-18,West,Hardware,Daniel Kim,7095,completed
1062,2026-02-18,Central,Hardware,Marcus Chen,3566,completed
1063,2026-02-19,East,Hardware,Tom Bennett,1738,completed
1064,2026-02-21,East,Hardware,Elena Petrova,7646,completed
1065,2026-02-21,South,Training,Daniel Kim,820,completed
1066,2026-02-22,West,Software,Tom Bennett,1909,completed
1067,2026-02-24,East,Services,Mei Lin Tan,1462,completed
1068,2026-02-24,South,Software,Priya Nair,1790,completed
1069,2026-02-24,North,Services,Lucia Fernandez,1539,completed
1070,2026-02-25,North,Services,Sam Okafor,2210,cancelled
1071,2026-02-25,Central,Services,Tom Bennett,2512,completed
1072,2026-02-26,West,Training,Priya Nair,1107,completed
1073,2026-02-26,North,Support Plan,Aisha Rahman,1077,cancelled
1074,2026-02-28,South,Hardware,Mei Lin Tan,4411,cancelled
1075,2026-03-02,East,Services,Mei Lin Tan,2148,completed
1076,2026-03-02,Central,Services,Aisha Rahman,1752,completed
1077,2026-03-02,North,Training,Mei Lin Tan,534,completed
1078,2026-03-03,East,Support Plan,Marcus Chen,622,completed
1079,2026-03-03,East,Training,Noah Weiss,546,cancelled
1080,2026-03-03,North,Services,Priya Nair,2069,completed
1081,2026-03-04,North,Support Plan,Grace Osei,666,completed
1082,2026-03-04,East,Hardware,Lucia Fernandez,4943,completed
1083,2026-03-04,Central,Services,Daniel Kim,1789,completed
1084,2026-03-05,East,Hardware,Elena Petrova,1771,completed
1085,2026-03-06,West,Support Plan,Grace Osei,1255,completed
1086,2026-03-06,South,Support Plan,Mei Lin Tan,590,completed
1087,2026-03-07,West,Hardware,Mei Lin Tan,5132,completed
1088,2026-03-07,Central,Support Plan,Mei Lin Tan,1537,completed
1089,2026-03-07,East,Hardware,Daniel Kim,5846,completed
1090,2026-03-08,North,Support Plan,Grace Osei,1199,cancelled
1091,2026-03-08,Central,Support Plan,Mei Lin Tan,700,cancelled
1092,2026-03-08,South,Services,Lucia Fernandez,1509,completed
1093,2026-03-10,East,Services,Lucia Fernandez,1806,completed
1094,2026-03-10,North,Services,Jordan Lee,1614,cancelled
1095,2026-03-10,East,Software,Sam Okafor,1824,completed
1096,2026-03-11,North,Training,Tom Bennett,750,completed
1097,2026-03-11,West,Software,Tom Bennett,1041,completed
1098,2026-03-13,South,Hardware,Tom Bennett,6474,completed
1099,2026-03-13,South,Support Plan,Jordan Lee,892,cancelled
1100,2026-03-13,East,Support Plan,Grace Osei,447,completed
1101,2026-03-14,South,Services,Priya Nair,1226,completed
1102,2026-03-14,Central,Training,Marcus Chen,158,completed
1103,2026-03-16,West,Support Plan,Priya Nair,1052,completed
1104,2026-03-16,South,Services,Jordan Lee,1136,completed
1105,2026-03-16,North,Services,Lucia Fernandez,1156,completed
1106,2026-03-17,West,Training,Lucia Fernandez,1278,completed
1107,2026-03-19,West,Hardware,Sam Okafor,4614,completed
1108,2026-03-19,East,Software,Marcus Chen,2369,completed
1109,2026-03-19,West,Training,Noah Weiss,454,completed
1110,2026-03-20,West,Software,Grace Osei,2347,completed
1111,2026-03-20,Central,Hardware,Sam Okafor,1005,completed
1112,2026-03-20,South,Software,Tom Bennett,1318,completed
1113,2026-03-21,West,Services,Elena Petrova,1741,cancelled
1114,2026-03-21,West,Services,Grace Osei,461,cancelled
1115,2026-03-21,North,Hardware,Tom Bennett,4327,cancelled
1116,2026-03-22,South,Services,Sam Okafor,1328,completed
1117,2026-03-22,East,Support Plan,Mei Lin Tan,805,completed
1118,2026-03-23,South,Support Plan,Lucia Fernandez,150,cancelled
1119,2026-03-23,North,Software,Jordan Lee,2025,completed
1120,2026-03-23,Central,Training,Lucia Fernandez,929,completed
1121,2026-03-24,East,Support Plan,Aisha Rahman,729,completed
1122,2026-03-24,Central,Services,Jordan Lee,1742,cancelled
1123,2026-03-25,East,Support Plan,Sam Okafor,648,completed
1124,2026-03-26,South,Hardware,Lucia Fernandez,4046,completed
1125,2026-03-26,East,Support Plan,Jordan Lee,735,completed
1126,2026-03-26,Central,Training,Lucia Fernandez,972,completed
1127,2026-03-27,North,Services,Daniel Kim,1344,completed
1128,2026-03-27,East,Services,Sam Okafor,1822,completed
1129,2026-03-27,Central,Software,Mei Lin Tan,2412,completed
1130,2026-03-30,East,Services,Sam Okafor,2030,completed
1131,2026-03-30,East,Services,Aisha Rahman,1324,completed
1132,2026-03-31,North,Software,Daniel Kim,1757,completed
1133,2026-04-01,North,Support Plan,Grace Osei,686,completed
1134,2026-04-02,West,Support Plan,Sam Okafor,983,completed
1135,2026-04-02,Central,Hardware,Sam Okafor,5870,completed
1136,2026-04-03,Central,Support Plan,Sam Okafor,1273,cancelled
1137,2026-04-04,Central,Support Plan,Elena Petrova,1153,completed
1138,2026-04-04,South,Services,Grace Osei,1144,cancelled
1139,2026-04-04,West,Training,Grace Osei,817,completed
1140,2026-04-05,East,Software,Sam Okafor,2005,completed
1141,2026-04-05,West,Software,Daniel Kim,1070,completed
1142,2026-04-05,North,Hardware,Lucia Fernandez,5996,completed
1143,2026-04-06,South,Hardware,Mei Lin Tan,7314,completed
1144,2026-04-06,Central,Software,Noah Weiss,1487,completed
1145,2026-04-07,East,Services,Noah Weiss,1703,completed
1146,2026-04-08,North,Support Plan,Grace Osei,994,completed
1147,2026-04-08,North,Support Plan,Lucia Fernandez,479,completed
1148,2026-04-08,Central,Hardware,Sam Okafor,4493,completed
1149,2026-04-10,East,Training,Sam Okafor,1625,cancelled
1150,2026-04-11,West,Software,Grace Osei,1145,completed
1151,2026-04-11,South,Services,Daniel Kim,1999,completed
1152,2026-04-14,North,Hardware,Aisha Rahman,4463,completed
1153,2026-04-14,South,Support Plan,Aisha Rahman,709,completed
1154,2026-04-16,North,Services,Aisha Rahman,916,completed
1155,2026-04-18,Central,Support Plan,Priya Nair,1310,completed
1156,2026-04-18,South,Support Plan,Grace Osei,1045,completed
1157,2026-04-18,North,Training,Elena Petrova,900,completed
1158,2026-04-19,Central,Software,Priya Nair,1785,completed
1159,2026-04-20,South,Hardware,Daniel Kim,8472,completed
1160,2026-04-21,East,Support Plan,Noah Weiss,861,completed
1161,2026-04-22,South,Support Plan,Tom Bennett,706,completed
1162,2026-04-22,Central,Training,Elena Petrova,688,completed
1163,2026-04-24,Central,Services,Aisha Rahman,1303,completed
1164,2026-04-24,Central,Support Plan,Grace Osei,1196,completed
1165,2026-04-25,North,Training,Aisha Rahman,216,cancelled
1166,2026-04-25,East,Training,Elena Petrova,1071,completed
1167,2026-04-26,North,Support Plan,Priya Nair,498,completed
1168,2026-04-26,East,Support Plan,Noah Weiss,1248,completed
1169,2026-04-27,West,Support Plan,Aisha Rahman,507,completed
1170,2026-04-27,East,Support Plan,Mei Lin Tan,835,completed
1171,2026-04-27,South,Services,Sam Okafor,997,completed
1172,2026-04-28,Central,Support Plan,Noah Weiss,646,completed
1173,2026-04-28,South,Training,Noah Weiss,509,completed
1174,2026-04-29,West,Support Plan,Elena Petrova,722,completed
1175,2026-04-29,West,Support Plan,Noah Weiss,631,completed
1176,2026-04-30,North,Services,Jordan Lee,263,completed
1177,2026-05-01,Central,Software,Tom Bennett,2747,completed
1178,2026-05-01,Central,Software,Tom Bennett,3275,completed
1179,2026-05-01,East,Software,Grace Osei,1567,completed
1180,2026-05-02,Central,Software,Jordan Lee,1456,completed
1181,2026-05-02,North,Training,Lucia Fernandez,474,completed
1182,2026-05-03,South,Support Plan,Elena Petrova,610,completed
1183,2026-05-03,South,Training,Elena Petrova,150,completed
1184,2026-05-04,North,Hardware,Tom Bennett,1942,cancelled
1185,2026-05-04,West,Training,Noah Weiss,929,completed
1186,2026-05-04,Central,Services,Elena Petrova,350,completed
1187,2026-05-05,East,Hardware,Jordan Lee,3797,completed
1188,2026-05-05,North,Software,Grace Osei,3084,completed
1189,2026-05-05,North,Support Plan,Jordan Lee,1092,completed
1190,2026-05-07,East,Services,Jordan Lee,2337,completed
1191,2026-05-07,North,Hardware,Jordan Lee,5464,completed
1192,2026-05-07,South,Training,Elena Petrova,616,completed
1193,2026-05-08,North,Training,Priya Nair,276,completed
1194,2026-05-08,North,Training,Noah Weiss,758,completed
1195,2026-05-11,West,Training,Lucia Fernandez,482,cancelled
1196,2026-05-12,North,Support Plan,Lucia Fernandez,1335,completed
1197,2026-05-12,West,Hardware,Marcus Chen,5394,completed
1198,2026-05-12,Central,Software,Elena Petrova,2188,completed
1199,2026-05-13,Central,Support Plan,Mei Lin Tan,889,cancelled
1200,2026-05-13,West,Support Plan,Tom Bennett,691,cancelled
1201,2026-05-13,North,Hardware,Tom Bennett,4898,completed
1202,2026-05-14,North,Training,Sam Okafor,926,completed
1203,2026-05-14,South,Services,Priya Nair,2739,completed
1204,2026-05-16,Central,Hardware,Noah Weiss,3628,completed
1205,2026-05-18,East,Hardware,Grace Osei,4833,cancelled
1206,2026-05-20,West,Services,Grace Osei,1776,completed
1207,2026-05-22,West,Software,Sam Okafor,1224,completed
1208,2026-05-23,North,Hardware,Marcus Chen,6966,completed
1209,2026-05-25,South,Support Plan,Sam Okafor,727,completed
1210,2026-05-25,East,Training,Daniel Kim,639,completed
1211,2026-05-25,Central,Services,Mei Lin Tan,1312,completed
1212,2026-05-28,South,Hardware,Lucia Fernandez,4145,completed
1213,2026-05-29,East,Services,Sam Okafor,926,cancelled
1214,2026-05-30,North,Support Plan,Daniel Kim,563,cancelled
1215,2026-05-30,South,Hardware,Grace Osei,6071,completed
1216,2026-05-30,East,Support Plan,Daniel Kim,482,completed
1217,2026-06-01,South,Hardware,Tom Bennett,2114,completed
1218,2026-06-01,East,Support Plan,Aisha Rahman,1136,completed
1219,2026-06-02,South,Hardware,Sam Okafor,5368,completed
1220,2026-06-03,North,Hardware,Daniel Kim,2375,completed
1221,2026-06-03,South,Hardware,Aisha Rahman,3146,completed
1222,2026-06-03,Central,Software,Grace Osei,1716,completed
1223,2026-06-04,North,Training,Sam Okafor,807,completed
1224,2026-06-05,Central,Training,Daniel Kim,788,cancelled
1225,2026-06-05,Central,Services,Priya Nair,1769,completed
1226,2026-06-06,West,Software,Aisha Rahman,3441,completed
1227,2026-06-06,South,Hardware,Grace Osei,4227,completed
1228,2026-06-07,South,Support Plan,Elena Petrova,150,completed
1229,2026-06-07,East,Services,Aisha Rahman,1227,completed
1230,2026-06-07,Central,Hardware,Grace Osei,1431,completed
1231,2026-06-08,West,Services,Priya Nair,1060,completed
1232,2026-06-08,South,Services,Lucia Fernandez,850,completed
1233,2026-06-08,West,Services,Daniel Kim,2046,completed
1234,2026-06-09,North,Hardware,Noah Weiss,6239,completed
1235,2026-06-09,Central,Hardware,Tom Bennett,5725,completed
1236,2026-06-09,North,Services,Marcus Chen,2695,completed
1237,2026-06-10,South,Software,Mei Lin Tan,1198,completed
1238,2026-06-10,Central,Services,Daniel Kim,1997,completed
1239,2026-06-11,South,Hardware,Priya Nair,7652,completed
1240,2026-06-11,South,Training,Grace Osei,403,completed
1241,2026-06-11,South,Services,Mei Lin Tan,194,completed
1242,2026-06-12,North,Hardware,Lucia Fernandez,7132,completed
1243,2026-06-12,East,Support Plan,Sam Okafor,781,cancelled
1244,2026-06-12,North,Software,Jordan Lee,2408,completed
1245,2026-06-14,Central,Training,Sam Okafor,850,completed
1246,2026-06-14,East,Software,Mei Lin Tan,1745,completed
1247,2026-06-14,North,Software,Marcus Chen,1010,completed
1248,2026-06-15,South,Support Plan,Noah Weiss,535,cancelled
1249,2026-06-17,Central,Services,Noah Weiss,1522,completed
1250,2026-06-17,North,Services,Lucia Fernandez,1571,cancelled
1251,2026-06-17,North,Training,Priya Nair,544,completed
1252,2026-06-18,West,Training,Sam Okafor,914,cancelled
1253,2026-06-18,South,Support Plan,Daniel Kim,298,cancelled
1254,2026-06-20,East,Services,Noah Weiss,1067,cancelled
1255,2026-06-20,Central,Software,Lucia Fernandez,670,completed
1256,2026-06-20,West,Training,Aisha Rahman,795,completed
1257,2026-06-21,South,Training,Lucia Fernandez,459,cancelled
1258,2026-06-21,South,Support Plan,Jordan Lee,682,completed
1259,2026-06-21,Central,Hardware,Noah Weiss,5234,completed
1260,2026-06-22,Central,Software,Jordan Lee,2357,completed
1261,2026-06-22,Central,Software,Sam Okafor,1724,completed
1262,2026-06-23,West,Services,Grace Osei,2160,cancelled
1263,2026-06-24,Central,Hardware,Marcus Chen,4155,completed
1264,2026-06-24,East,Software,Jordan Lee,2191,completed
1265,2026-06-26,East,Hardware,Marcus Chen,4964,completed
1266,2026-06-30,East,Training,Grace Osei,550,completed
1267,2026-06-30,East,Software,Marcus Chen,2391,cancelled
1268,2026-07-01,East,Support Plan,Aisha Rahman,698,cancelled
1269,2026-07-01,South,Software,Jordan Lee,2355,cancelled
1270,2026-07-04,South,Support Plan,Grace Osei,1832,completed
1271,2026-07-04,Central,Training,Tom Bennett,1118,completed
1272,2026-07-04,East,Services,Grace Osei,1182,completed
1273,2026-07-05,West,Training,Daniel Kim,553,completed
1274,2026-07-05,South,Training,Jordan Lee,1080,completed
1275,2026-07-07,North,Hardware,Lucia Fernandez,6507,completed
1276,2026-07-08,East,Hardware,Aisha Rahman,5198,completed
1277,2026-07-11,West,Services,Marcus Chen,1298,completed
1278,2026-07-12,West,Hardware,Grace Osei,3571,completed
1279,2026-07-12,East,Software,Jordan Lee,3321,cancelled
1280,2026-07-13,North,Hardware,Elena Petrova,3595,completed
1281,2026-07-13,South,Training,Elena Petrova,1106,completed
1282,2026-07-14,Central,Training,Priya Nair,840,completed
1283,2026-07-14,East,Services,Mei Lin Tan,1922,completed
1284,2026-07-14,South,Software,Grace Osei,2208,completed
1285,2026-07-15,Central,Training,Sam Okafor,720,cancelled
1286,2026-07-15,South,Support Plan,Priya Nair,482,completed
1287,2026-07-16,West,Services,Jordan Lee,889,completed
1288,2026-07-16,West,Training,Noah Weiss,999,completed
1289,2026-07-17,North,Software,Daniel Kim,3196,completed
1290,2026-07-17,East,Hardware,Marcus Chen,4253,completed
1291,2026-07-18,East,Hardware,Priya Nair,6479,completed
1292,2026-07-20,East,Services,Priya Nair,1125,completed
1293,2026-07-20,North,Services,Priya Nair,1583,completed
1294,2026-07-21,North,Software,Tom Bennett,1301,completed
1295,2026-07-21,South,Services,Mei Lin Tan,1375,cancelled
1296,2026-07-22,East,Training,Grace Osei,757,completed
1297,2026-07-22,West,Hardware,Aisha Rahman,3682,completed
1298,2026-07-23,South,Services,Marcus Chen,993,completed
1299,2026-07-23,North,Training,Priya Nair,538,completed
1300,2026-07-25,North,Training,Tom Bennett,1368,completed
1301,2026-07-25,East,Training,Priya Nair,744,completed
1302,2026-07-25,North,Services,Noah Weiss,1445,completed
1303,2026-07-27,South,Services,Noah Weiss,1189,completed
1304,2026-07-28,North,Services,Tom Bennett,1477,completed
1305,2026-07-28,West,Software,Sam Okafor,264,completed
1306,2026-07-29,South,Software,Mei Lin Tan,1983,cancelled
1307,2026-07-29,South,Software,Jordan Lee,2427,completed
1308,2026-07-30,West,Services,Lucia Fernandez,1565,completed
1309,2026-07-30,West,Training,Mei Lin Tan,594,cancelled
1310,2026-07-30,East,Services,Marcus Chen,1857,cancelled
1311,2026-07-31,East,Support Plan,Marcus Chen,598,completed
1312,2026-08-01,Central,Hardware,Marcus Chen,6299,completed
1313,2026-08-01,South,Support Plan,Jordan Lee,587,cancelled
1314,2026-08-01,West,Software,Grace Osei,2680,completed
1315,2026-08-02,Central,Services,Lucia Fernandez,2102,completed
1316,2026-08-02,Central,Software,Noah Weiss,1137,completed
1317,2026-08-03,Central,Software,Sam Okafor,2596,completed
1318,2026-08-04,North,Hardware,Daniel Kim,5865,completed
1319,2026-08-04,Central,Services,Elena Petrova,853,completed
1320,2026-08-05,Central,Training,Marcus Chen,396,completed
1321,2026-08-05,Central,Training,Marcus Chen,833,completed
1322,2026-08-05,West,Hardware,Priya Nair,2562,cancelled
1323,2026-08-06,South,Training,Grace Osei,284,completed
1324,2026-08-07,East,Support Plan,Lucia Fernandez,906,completed
1325,2026-08-07,West,Hardware,Lucia Fernandez,2575,completed
1326,2026-08-08,North,Services,Marcus Chen,1638,completed
1327,2026-08-08,East,Services,Tom Bennett,945,cancelled
1328,2026-08-08,West,Services,Lucia Fernandez,1214,completed
1329,2026-08-09,North,Support Plan,Priya Nair,150,cancelled
1330,2026-08-14,Central,Support Plan,Lucia Fernandez,1354,completed
1331,2026-08-16,Central,Support Plan,Tom Bennett,972,completed
1332,2026-08-17,South,Services,Grace Osei,1910,cancelled
1333,2026-08-17,West,Support Plan,Priya Nair,1329,completed
1334,2026-08-19,Central,Training,Priya Nair,367,completed
1335,2026-08-19,Central,Services,Aisha Rahman,937,completed
1336,2026-08-20,Central,Hardware,Noah Weiss,5789,completed
1337,2026-08-20,South,Services,Sam Okafor,900,completed
1338,2026-08-20,East,Training,Marcus Chen,561,cancelled
1339,2026-08-21,West,Software,Priya Nair,2554,completed
1340,2026-08-22,North,Training,Marcus Chen,353,completed
1341,2026-08-22,South,Training,Marcus Chen,392,completed
1342,2026-08-22,Central,Support Plan,Daniel Kim,662,cancelled
1343,2026-08-23,North,Hardware,Aisha Rahman,1720,completed
1344,2026-08-25,South,Services,Grace Osei,898,cancelled
1345,2026-08-26,Central,Support Plan,Priya Nair,331,completed
1346,2026-08-26,East,Software,Tom Bennett,1986,completed
1347,2026-08-26,West,Software,Grace Osei,1345,completed
1348,2026-08-27,Central,Training,Tom Bennett,748,completed
1349,2026-08-30,East,Training,Daniel Kim,946,completed
1350,2026-08-31,Central,Services,Lucia Fernandez,1392,cancelled
1351,2026-09-01,North,Training,Noah Weiss,719,completed
1352,2026-09-01,North,Software,Daniel Kim,2819,completed
1353,2026-09-01,East,Support Plan,Jordan Lee,442,completed
1354,2026-09-04,Central,Support Plan,Noah Weiss,958,completed
1355,2026-09-04,East,Services,Aisha Rahman,1192,completed
1356,2026-09-04,South,Services,Aisha Rahman,2261,completed
1357,2026-09-05,Central,Services,Jordan Lee,2111,completed
1358,2026-09-05,East,Hardware,Elena Petrova,6374,cancelled
1359,2026-09-05,East,Hardware,Elena Petrova,2052,completed
1360,2026-09-06,Central,Software,Priya Nair,2924,completed
1361,2026-09-07,East,Services,Lucia Fernandez,1356,completed
1362,2026-09-07,Central,Software,Sam Okafor,2499,cancelled
1363,2026-09-10,East,Hardware,Tom Bennett,4773,completed
1364,2026-09-13,North,Training,Priya Nair,487,cancelled
1365,2026-09-14,South,Training,Jordan Lee,150,cancelled
1366,2026-09-14,South,Services,Daniel Kim,1450,completed
1367,2026-09-16,North,Software,Lucia Fernandez,2069,completed
1368,2026-09-16,East,Software,Grace Osei,648,cancelled
1369,2026-09-16,South,Support Plan,Noah Weiss,728,cancelled
1370,2026-09-17,North,Software,Lucia Fernandez,2986,completed
1371,2026-09-18,North,Services,Lucia Fernandez,765,completed
1372,2026-09-19,East,Hardware,Mei Lin Tan,3337,completed
1373,2026-09-19,North,Software,Lucia Fernandez,1420,completed
1374,2026-09-22,North,Training,Jordan Lee,150,completed
1375,2026-09-22,East,Support Plan,Elena Petrova,150,completed
1376,2026-09-22,South,Training,Aisha Rahman,867,completed
1377,2026-09-27,Central,Support Plan,Sam Okafor,858,cancelled
1378,2026-09-27,West,Hardware,Grace Osei,3804,cancelled
1379,2026-09-27,East,Training,Daniel Kim,786,cancelled
1380,2026-09-28,East,Training,Noah Weiss,837,completed
1381,2026-09-29,West,Support Plan,Lucia Fernandez,503,completed
1382,2026-09-29,Central,Support Plan,Priya Nair,866,completed
1383,2026-09-29,West,Support Plan,Mei Lin Tan,1141,completed
1384,2026-09-30,North,Hardware,Tom Bennett,1776,cancelled
1385,2026-10-03,North,Support Plan,Priya Nair,972,completed
1386,2026-10-03,South,Services,Mei Lin Tan,452,completed
1387,2026-10-04,West,Training,Tom Bennett,513,completed
1388,2026-10-04,Central,Support Plan,Marcus Chen,626,cancelled
1389,2026-10-05,West,Services,Priya Nair,1075,completed
1390,2026-10-06,South,Services,Elena Petrova,777,completed
1391,2026-10-07,West,Support Plan,Sam Okafor,975,cancelled
1392,2026-10-07,East,Software,Priya Nair,383,completed
1393,2026-10-07,Central,Hardware,Sam Okafor,2207,completed
1394,2026-10-08,South,Support Plan,Priya Nair,576,completed
1395,2026-10-08,East,Hardware,Daniel Kim,3012,completed
1396,2026-10-08,Central,Services,Mei Lin Tan,1388,cancelled
1397,2026-10-09,East,Services,Aisha Rahman,2076,completed
1398,2026-10-09,North,Services,Tom Bennett,1338,completed
1399,2026-10-09,Central,Software,Daniel Kim,1943,completed
1400,2026-10-10,South,Training,Noah Weiss,622,completed
1401,2026-10-10,South,Support Plan,Mei Lin Tan,829,completed
1402,2026-10-10,South,Software,Daniel Kim,2733,completed
1403,2026-10-11,South,Hardware,Marcus Chen,2905,cancelled
1404,2026-10-11,East,Support Plan,Daniel Kim,1094,completed
1405,2026-10-11,East,Services,Jordan Lee,2358,completed
1406,2026-10-12,West,Services,Elena Petrova,890,completed
1407,2026-10-12,Central,Training,Noah Weiss,767,completed
1408,2026-10-12,Central,Software,Grace Osei,1794,completed
1409,2026-10-13,West,Software,Jordan Lee,2627,completed
1410,2026-10-13,East,Training,Lucia Fernandez,619,completed
1411,2026-10-14,North,Services,Daniel Kim,608,completed
1412,2026-10-15,South,Support Plan,Daniel Kim,1009,completed
1413,2026-10-15,South,Services,Mei Lin Tan,1001,completed
1414,2026-10-16,East,Hardware,Mei Lin Tan,5850,completed
1415,2026-10-17,South,Services,Grace Osei,1534,completed
1416,2026-10-17,East,Support Plan,Grace Osei,1145,cancelled
1417,2026-10-17,North,Services,Noah Weiss,2184,completed
1418,2026-10-18,North,Software,Mei Lin Tan,1936,completed
1419,2026-10-20,West,Training,Noah Weiss,704,completed
1420,2026-10-20,West,Hardware,Noah Weiss,3900,completed
1421,2026-10-20,East,Hardware,Marcus Chen,6633,completed
1422,2026-10-21,Central,Support Plan,Noah Weiss,924,completed
1423,2026-10-21,West,Training,Priya Nair,609,cancelled
1424,2026-10-21,North,Training,Mei Lin Tan,675,completed
1425,2026-10-22,South,Software,Noah Weiss,3133,completed
1426,2026-10-22,East,Training,Elena Petrova,493,cancelled
1427,2026-10-22,North,Services,Jordan Lee,2645,completed
1428,2026-10-23,East,Services,Mei Lin Tan,2074,completed
1429,2026-10-24,West,Support Plan,Priya Nair,606,completed
1430,2026-10-24,West,Software,Noah Weiss,2897,completed
1431,2026-10-24,South,Services,Lucia Fernandez,2896,cancelled
1432,2026-10-27,South,Services,Grace Osei,1185,completed
1433,2026-10-27,North,Training,Sam Okafor,560,cancelled
1434,2026-10-27,West,Software,Aisha Rahman,1736,cancelled
1435,2026-10-28,West,Services,Tom Bennett,733,completed
1436,2026-10-28,Central,Services,Tom Bennett,1116,completed
1437,2026-10-28,East,Hardware,Mei Lin Tan,4452,cancelled
1438,2026-10-29,North,Training,Sam Okafor,410,cancelled
1439,2026-10-31,North,Support Plan,Priya Nair,962,completed
1440,2026-10-31,South,Software,Tom Bennett,3306,cancelled
1441,2026-11-01,North,Software,Grace Osei,2643,completed
1442,2026-11-02,South,Services,Marcus Chen,1559,completed
1443,2026-11-02,West,Hardware,Sam Okafor,1634,completed
1444,2026-11-02,East,Hardware,Sam Okafor,5536,completed
1445,2026-11-03,Central,Support Plan,Daniel Kim,1231,completed
1446,2026-11-03,Central,Training,Sam Okafor,689,completed
1447,2026-11-03,West,Services,Tom Bennett,1220,completed
1448,2026-11-07,South,Software,Noah Weiss,2439,completed
1449,2026-11-08,East,Hardware,Lucia Fernandez,2774,completed
1450,2026-11-08,West,Services,Lucia Fernandez,1633,completed
1451,2026-11-11,South,Hardware,Elena Petrova,3022,completed
1452,2026-11-11,Central,Support Plan,Aisha Rahman,1726,completed
1453,2026-11-11,North,Support Plan,Lucia Fernandez,1107,cancelled
1454,2026-11-13,South,Services,Marcus Chen,1771,completed
1455,2026-11-13,South,Training,Mei Lin Tan,553,completed
1456,2026-11-15,Central,Training,Elena Petrova,837,completed
1457,2026-11-15,Central,Hardware,Noah Weiss,5656,completed
1458,2026-11-15,West,Support Plan,Jordan Lee,813,completed
1459,2026-11-16,North,Software,Elena Petrova,2283,completed
1460,2026-11-16,South,Training,Grace Osei,551,completed
1461,2026-11-17,Central,Hardware,Tom Bennett,3514,completed
1462,2026-11-17,West,Hardware,Grace Osei,1358,completed
1463,2026-11-17,North,Software,Noah Weiss,4626,cancelled
1464,2026-11-18,South,Hardware,Aisha Rahman,5918,completed
1465,2026-11-18,North,Software,Sam Okafor,2177,cancelled
1466,2026-11-19,North,Support Plan,Lucia Fernandez,440,completed
1467,2026-11-21,North,Hardware,Marcus Chen,5978,completed
1468,2026-11-21,West,Software,Sam Okafor,2757,completed
1469,2026-11-21,North,Support Plan,Jordan Lee,569,completed
1470,2026-11-22,South,Services,Mei Lin Tan,1331,completed
1471,2026-11-22,West,Hardware,Jordan Lee,6017,completed
1472,2026-11-22,East,Software,Noah Weiss,1167,cancelled
1473,2026-11-23,Central,Support Plan,Aisha Rahman,941,completed
1474,2026-11-24,South,Support Plan,Noah Weiss,1264,completed
1475,2026-11-24,Central,Software,Mei Lin Tan,1469,completed
1476,2026-11-24,East,Software,Mei Lin Tan,1721,completed
1477,2026-11-27,East,Services,Daniel Kim,1489,completed
1478,2026-11-28,North,Training,Daniel Kim,770,completed
1479,2026-11-28,South,Training,Grace Osei,359,completed
1480,2026-11-29,North,Training,Mei Lin Tan,1060,cancelled
1481,2026-11-29,East,Services,Sam Okafor,1420,completed
1482,2026-11-29,East,Training,Aisha Rahman,779,completed
1483,2026-11-30,South,Support Plan,Grace Osei,454,completed
1484,2026-12-03,North,Software,Lucia Fernandez,2291,completed
1485,2026-12-04,West,Services,Grace Osei,1032,completed
1486,2026-12-04,Central,Training,Tom Bennett,666,completed
1487,2026-12-05,South,Support Plan,Tom Bennett,978,completed
1488,2026-12-05,North,Hardware,Elena Petrova,4723,completed
1489,2026-12-06,South,Training,Marcus Chen,528,completed
1490,2026-12-06,North,Training,Sam Okafor,610,completed
1491,2026-12-07,South,Training,Mei Lin Tan,770,completed
1492,2026-12-10,North,Services,Lucia Fernandez,1383,completed
1493,2026-12-11,East,Training,Elena Petrova,879,completed
1494,2026-12-12,East,Software,Marcus Chen,1274,completed
1495,2026-12-12,North,Training,Grace Osei,520,completed
1496,2026-12-12,North,Services,Mei Lin Tan,1205,cancelled
1497,2026-12-13,West,Software,Noah Weiss,4601,completed
1498,2026-12-13,East,Software,Noah Weiss,855,completed
1499,2026-12-13,North,Software,Marcus Chen,1047,completed
1500,2026-12-14,South,Hardware,Tom Bennett,4656,completed
1501,2026-12-14,Central,Services,Tom Bennett,778,completed
1502,2026-12-15,South,Services,Sam Okafor,1581,completed
1503,2026-12-15,South,Software,Daniel Kim,2665,completed
1504,2026-12-15,North,Services,Aisha Rahman,816,cancelled
1505,2026-12-16,North,Hardware,Lucia Fernandez,7053,completed
1506,2026-12-16,West,Hardware,Lucia Fernandez,6345,completed
1507,2026-12-16,South,Hardware,Lucia Fernandez,5311,completed
1508,2026-12-17,East,Services,Jordan Lee,2217,completed
1509,2026-12-17,North,Services,Noah Weiss,560,completed
1510,2026-12-17,West,Support Plan,Marcus Chen,1461,completed
`;

export const SAMPLE_FILENAME = "sample_sales.csv";
