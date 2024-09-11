"use client"

import * as React from "react"
import { SVGProps } from "react"
import { m, Variants } from "framer-motion"

const getItemVariant = ({x, y, r, d}:{x:number, y:number, r:number, d:number})=>{
	return {
		initial:{ x:0, y:0, rotate:0,originX:"1000px", originY:"1000px" },
		loop:{y: [y, y-50, y], x: [x, x, x], rotate: [r, r, r], 
			transition:{
				repeat:Infinity,
				duration:2,
				ease:"easeInOut",
				delay:d
			}
		}
	} as Variants;
}

const ComputerImage = (props: SVGProps<SVGSVGElement>) => {

	return <svg
		width={400}
		height={400}
		viewBox="0 0 1742 1502"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<m.g
			variants={getItemVariant({x:-500, y:-500, r:-10, d:0})}
			initial="initial"
			animate="loop"
			clipPath="url(#clip0_185_82)"
		>
			<rect x={669} y={927} width={418} height={188} rx={44} fill="#FEE2E2" />
			<rect
				x={669}
				y={927}
				width={418}
				height={188}
				rx={44}
				stroke="#030712"
				strokeWidth={12}
			/>
			<path
				d="M830.344 1000.19C827.447 1000.19 824.875 1000.76 822.629 1001.89C820.415 1003 818.544 1004.61 817.014 1006.73C815.516 1008.84 814.377 1011.4 813.596 1014.39C812.814 1017.39 812.424 1020.76 812.424 1024.5C812.424 1029.55 813.042 1033.86 814.279 1037.44C815.549 1040.99 817.502 1043.71 820.139 1045.6C822.775 1047.45 826.177 1048.38 830.344 1048.38C833.241 1048.38 836.138 1048.05 839.035 1047.4C841.965 1046.75 845.139 1045.82 848.557 1044.62V1057.31C845.399 1058.62 842.29 1059.54 839.23 1060.1C836.171 1060.68 832.736 1060.98 828.928 1060.98C821.571 1060.98 815.516 1059.46 810.764 1056.44C806.044 1053.38 802.544 1049.11 800.266 1043.64C797.987 1038.14 796.848 1031.73 796.848 1024.4C796.848 1019 797.58 1014.05 799.045 1009.56C800.51 1005.07 802.658 1001.18 805.49 997.891C808.322 994.603 811.822 992.064 815.988 990.273C820.155 988.483 824.94 987.588 830.344 987.588C833.892 987.588 837.44 988.044 840.988 988.955C844.569 989.834 847.987 991.055 851.242 992.617L846.359 1004.92C843.69 1003.65 841.005 1002.55 838.303 1001.6C835.601 1000.66 832.948 1000.19 830.344 1000.19ZM905.93 1040.18C905.93 1044.41 904.904 1048.09 902.854 1051.21C900.803 1054.34 897.808 1056.74 893.869 1058.44C889.963 1060.13 885.21 1060.98 879.611 1060.98C877.137 1060.98 874.712 1060.81 872.336 1060.49C869.992 1060.16 867.73 1059.69 865.549 1059.07C863.4 1058.42 861.35 1057.62 859.396 1056.68V1042.62C862.782 1044.11 866.298 1045.47 869.943 1046.67C873.589 1047.87 877.202 1048.48 880.783 1048.48C883.257 1048.48 885.243 1048.15 886.74 1047.5C888.27 1046.85 889.377 1045.95 890.061 1044.81C890.744 1043.68 891.086 1042.37 891.086 1040.91C891.086 1039.12 890.484 1037.59 889.279 1036.32C888.075 1035.05 886.415 1033.86 884.299 1032.75C882.215 1031.65 879.855 1030.46 877.219 1029.19C875.559 1028.41 873.752 1027.46 871.799 1026.36C869.846 1025.22 867.99 1023.83 866.232 1022.21C864.475 1020.58 863.026 1018.61 861.887 1016.3C860.78 1013.96 860.227 1011.16 860.227 1007.9C860.227 1003.64 861.203 999.99 863.156 996.963C865.109 993.936 867.893 991.624 871.506 990.029C875.152 988.402 879.449 987.588 884.396 987.588C888.107 987.588 891.639 988.027 894.992 988.906C898.378 989.753 901.91 990.99 905.588 992.617L900.705 1004.38C897.417 1003.05 894.471 1002.02 891.867 1001.31C889.263 1000.56 886.61 1000.19 883.908 1000.19C882.02 1000.19 880.409 1000.49 879.074 1001.11C877.74 1001.7 876.73 1002.55 876.047 1003.65C875.363 1004.73 875.021 1005.98 875.021 1007.41C875.021 1009.1 875.51 1010.54 876.486 1011.71C877.495 1012.85 878.993 1013.96 880.979 1015.03C882.997 1016.1 885.503 1017.36 888.498 1018.79C892.144 1020.51 895.253 1022.32 897.824 1024.21C900.428 1026.06 902.43 1028.26 903.83 1030.8C905.23 1033.31 905.93 1036.43 905.93 1040.18ZM961.008 1040.18C961.008 1044.41 959.982 1048.09 957.932 1051.21C955.881 1054.34 952.886 1056.74 948.947 1058.44C945.041 1060.13 940.288 1060.98 934.689 1060.98C932.215 1060.98 929.79 1060.81 927.414 1060.49C925.07 1060.16 922.808 1059.69 920.627 1059.07C918.479 1058.42 916.428 1057.62 914.475 1056.68V1042.62C917.86 1044.11 921.376 1045.47 925.021 1046.67C928.667 1047.87 932.281 1048.48 935.861 1048.48C938.335 1048.48 940.321 1048.15 941.818 1047.5C943.348 1046.85 944.455 1045.95 945.139 1044.81C945.822 1043.68 946.164 1042.37 946.164 1040.91C946.164 1039.12 945.562 1037.59 944.357 1036.32C943.153 1035.05 941.493 1033.86 939.377 1032.75C937.294 1031.65 934.934 1030.46 932.297 1029.19C930.637 1028.41 928.83 1027.46 926.877 1026.36C924.924 1025.22 923.068 1023.83 921.311 1022.21C919.553 1020.58 918.104 1018.61 916.965 1016.3C915.858 1013.96 915.305 1011.16 915.305 1007.9C915.305 1003.64 916.281 999.99 918.234 996.963C920.188 993.936 922.971 991.624 926.584 990.029C930.23 988.402 934.527 987.588 939.475 987.588C943.186 987.588 946.717 988.027 950.07 988.906C953.456 989.753 956.988 990.99 960.666 992.617L955.783 1004.38C952.495 1003.05 949.549 1002.02 946.945 1001.31C944.341 1000.56 941.688 1000.19 938.986 1000.19C937.098 1000.19 935.487 1000.49 934.152 1001.11C932.818 1001.7 931.809 1002.55 931.125 1003.65C930.441 1004.73 930.1 1005.98 930.1 1007.41C930.1 1009.1 930.588 1010.54 931.564 1011.71C932.574 1012.85 934.071 1013.96 936.057 1015.03C938.075 1016.1 940.581 1017.36 943.576 1018.79C947.222 1020.51 950.331 1022.32 952.902 1024.21C955.507 1026.06 957.508 1028.26 958.908 1030.8C960.308 1033.31 961.008 1036.43 961.008 1040.18Z"
				fill="#030712"
			/>
		</m.g>
		<m.g
			variants={getItemVariant({x:500, y:-500, r:10, d:0.25})}
			initial="initial"
			animate="loop"
			clipPath="url(#clip1_185_82)"
		>
			<rect x={669} y={927} width={418} height={188} rx={44} fill="#DBEAFE" />
			<rect
				x={669}
				y={927}
				width={418}
				height={188}
				rx={44}
				stroke="#030712"
				strokeWidth={12}
			/>
			<path
				d="M835.422 1081C833.469 1081 831.76 1080.88 830.295 1080.65C828.798 1080.46 827.528 1080.21 826.486 1079.92V1067.32C827.528 1067.55 828.651 1067.76 829.855 1067.96C831.027 1068.19 832.281 1068.3 833.615 1068.3C835.373 1068.3 836.952 1067.96 838.352 1067.28C839.751 1066.62 840.858 1065.37 841.672 1063.52C842.486 1061.66 842.893 1058.99 842.893 1055.51V988.613H858.029V1055.41C858.029 1061.53 857.069 1066.46 855.148 1070.21C853.26 1073.98 850.607 1076.72 847.189 1078.41C843.804 1080.13 839.882 1081 835.422 1081ZM918.137 1040.18C918.137 1044.41 917.111 1048.09 915.061 1051.21C913.01 1054.34 910.015 1056.74 906.076 1058.44C902.17 1060.13 897.417 1060.98 891.818 1060.98C889.344 1060.98 886.919 1060.81 884.543 1060.49C882.199 1060.16 879.937 1059.69 877.756 1059.07C875.607 1058.42 873.557 1057.62 871.604 1056.68V1042.62C874.989 1044.11 878.505 1045.47 882.15 1046.67C885.796 1047.87 889.41 1048.48 892.99 1048.48C895.464 1048.48 897.45 1048.15 898.947 1047.5C900.477 1046.85 901.584 1045.95 902.268 1044.81C902.951 1043.68 903.293 1042.37 903.293 1040.91C903.293 1039.12 902.691 1037.59 901.486 1036.32C900.282 1035.05 898.622 1033.86 896.506 1032.75C894.423 1031.65 892.062 1030.46 889.426 1029.19C887.766 1028.41 885.959 1027.46 884.006 1026.36C882.053 1025.22 880.197 1023.83 878.439 1022.21C876.682 1020.58 875.233 1018.61 874.094 1016.3C872.987 1013.96 872.434 1011.16 872.434 1007.9C872.434 1003.64 873.41 999.99 875.363 996.963C877.316 993.936 880.1 991.624 883.713 990.029C887.359 988.402 891.656 987.588 896.604 987.588C900.314 987.588 903.846 988.027 907.199 988.906C910.585 989.753 914.117 990.99 917.795 992.617L912.912 1004.38C909.624 1003.05 906.678 1002.02 904.074 1001.31C901.47 1000.56 898.817 1000.19 896.115 1000.19C894.227 1000.19 892.616 1000.49 891.281 1001.11C889.947 1001.7 888.938 1002.55 888.254 1003.65C887.57 1004.73 887.229 1005.98 887.229 1007.41C887.229 1009.1 887.717 1010.54 888.693 1011.71C889.702 1012.85 891.2 1013.96 893.186 1015.03C895.204 1016.1 897.71 1017.36 900.705 1018.79C904.351 1020.51 907.46 1022.32 910.031 1024.21C912.635 1026.06 914.637 1028.26 916.037 1030.8C917.437 1033.31 918.137 1036.43 918.137 1040.18Z"
				fill="#030712"
			/>
		</m.g>
		<m.g
			variants={getItemVariant({x:0, y:-700, r:0, d:0.5})}
			initial="initial"
			animate="loop"
			clipPath="url(#clip2_185_82)"
		>
			<rect x={669} y={927} width={418} height={188} rx={44} fill="white" />
			<rect
				x={669}
				y={927}
				width={418}
				height={188}
				rx={44}
				stroke="#030712"
				strokeWidth={12}
			/>
			<path
				d="M839.875 990.5L809.375 1018.65L839.875 1051.5M916.125 990.5L946.625 1018.65L916.125 1051.5M893.25 960L862.75 1082"
				stroke="#030712"
				strokeWidth={15}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</m.g>
		<m.g 
			variants={getItemVariant({x:0, y:0, r:5, d:0.75})}
			initial="initial"
			animate="loop"
			clipPath="url(#clip3_185_82)"
		>
			<path
				d="M565.632 1124.92C565.598 1039.61 565.554 926.536 565.527 854.343C565.526 850.985 566.186 847.66 567.47 844.557C568.754 841.455 570.637 838.636 573.011 836.261C575.385 833.887 578.204 832.003 581.307 830.719C584.409 829.435 587.734 828.774 591.092 828.776C701.243 828.741 1020.42 828.634 1151.03 828.589C1154.39 828.587 1157.72 829.247 1160.82 830.532C1163.93 831.816 1166.75 833.7 1169.12 836.075C1171.5 838.45 1173.38 841.27 1174.67 844.374C1175.96 847.478 1176.62 850.805 1176.62 854.164C1176.62 950.996 1176.66 1108.27 1176.7 1208.47C1196.92 1236.9 1240.32 1296.72 1261.54 1332.95C1263.64 1336.56 1264.75 1340.66 1264.74 1344.83C1264.74 1348.53 1264.66 1353 1264.66 1357.62C1264.65 1362.33 1262.78 1366.84 1259.45 1370.16C1256.12 1373.49 1251.61 1375.35 1246.91 1375.36H492.382C488.456 1375.36 484.691 1373.8 481.915 1371.02C479.138 1368.25 477.578 1364.48 477.576 1360.56C477.576 1337.73 477.492 1367.26 477.492 1344.86C477.485 1340.67 478.596 1336.55 480.709 1332.93C502.162 1296.3 545.731 1234.6 565.674 1206.6C565.656 1185.95 565.645 1157.45 565.632 1124.92Z"
				fill="white"
			/>
			<path
				d="M753.506 1123.91C753.474 1090.76 753.435 930.336 753.435 923.18H1002.45V925.279C1002.45 932.787 1002.52 1073.92 1002.55 1123.9"
				fill="white"
			/>
			<path
				d="M571.93 1124.92C571.909 1072.88 571.889 1020.83 571.87 968.785C571.859 943.694 571.85 918.605 571.841 893.516C571.841 882.495 571.841 871.473 571.841 860.452C571.841 855.66 571.487 850.887 573.51 846.405C575.463 842.129 578.891 838.701 583.167 836.748C589.176 834.016 596.762 835.071 603.228 835.071H622.944H669.761L784.453 835.032L913.209 834.99L1037.35 834.945L1138.62 834.887C1146.14 834.887 1154.5 833.696 1161.2 837.774C1165.04 840.128 1167.92 843.766 1169.33 848.042C1170.39 852.625 1170.73 857.345 1170.32 862.031C1170.32 884.006 1170.32 905.98 1170.32 927.953C1170.32 978.135 1170.33 1028.32 1170.36 1078.5C1170.36 1102.94 1170.36 1127.38 1170.38 1151.83C1170.38 1163.07 1170.38 1174.31 1170.38 1185.55C1170.38 1190.82 1170.38 1196.09 1170.38 1201.36C1170.38 1203.71 1170.21 1206.13 1170.38 1208.47C1170.87 1211.09 1172.11 1213.51 1173.94 1215.44C1199.4 1251.13 1225.34 1286.64 1248.61 1323.82C1251.15 1327.87 1253.76 1331.93 1256.08 1336.12C1259.44 1342.19 1258.39 1349.38 1258.34 1356.06C1258.54 1358.3 1258.11 1360.55 1257.11 1362.57C1256.11 1364.58 1254.57 1366.28 1252.66 1367.47C1250.1 1368.74 1247.23 1369.28 1244.38 1369.03H499.438C495.727 1369.03 491.04 1369.75 487.805 1367.7C482.142 1364.11 484.249 1356.91 483.869 1351.28C483.396 1344.59 473.096 1342.26 471.496 1349.6C471.335 1351 471.248 1352.4 471.233 1353.8H483.829C483.064 1348.63 483.471 1343.35 485.021 1338.35C487.792 1331.46 492.859 1324.91 496.814 1318.65C505.985 1304.11 515.526 1289.8 525.189 1275.58C534.751 1261.51 544.435 1247.52 554.241 1233.61C558.359 1227.75 562.492 1221.9 566.64 1216.06C568.74 1213.74 570.467 1211.11 571.757 1208.25C572.846 1204.3 571.977 1198.93 571.977 1194.87C571.967 1171.55 571.957 1148.23 571.948 1124.9C571.948 1116.8 559.352 1116.78 559.352 1124.9C559.363 1152.13 559.374 1179.35 559.387 1206.58L560.221 1203.42C532.421 1242.46 504.437 1281.63 479.528 1322.61C475.637 1329.01 471.918 1335.1 471.288 1342.77C470.934 1346.45 470.908 1350.15 471.21 1353.82C471.21 1355.49 471.873 1357.1 473.054 1358.28C474.235 1359.46 475.837 1360.12 477.508 1360.12C479.178 1360.12 480.78 1359.46 481.961 1358.28C483.142 1357.1 483.806 1355.49 483.806 1353.82C483.926 1352.77 484.33 1349.7 483.625 1352.98L471.262 1351.31C471.425 1353.63 471.281 1356.01 471.281 1358.34C470.941 1364.31 472.915 1370.19 476.791 1374.75C482.244 1380.83 489.539 1381.65 497.155 1381.65H1238.22C1243.43 1382.08 1248.68 1381.74 1253.8 1380.65C1259.45 1378.91 1264.28 1375.19 1267.41 1370.18C1270.99 1364.41 1270.94 1358.16 1270.99 1351.6C1271.06 1343.82 1270.87 1336.75 1266.98 1329.77C1264.49 1325.29 1261.69 1320.95 1258.97 1316.61C1252.85 1306.85 1246.49 1297.25 1240.05 1287.71C1226.47 1267.59 1212.45 1247.77 1198.36 1228.01C1192.96 1220.43 1187.55 1212.86 1182.14 1205.29L1183 1208.47C1182.98 1162.4 1182.97 1116.33 1182.95 1070.26C1182.94 1020.87 1182.93 971.47 1182.92 922.075C1182.92 900.576 1182.92 879.076 1182.92 857.576C1182.92 846.554 1179.88 836.401 1170.93 829.303C1162.77 822.848 1153.71 822.291 1143.77 822.291L1045.95 822.325L924.506 822.367L797.004 822.412L681.019 822.449L593.847 822.478C583.65 822.478 574.09 825.364 567.193 833.289C559.45 842.193 559.229 852.396 559.232 863.574C559.242 886.772 559.251 909.97 559.258 933.167L559.321 1089.22C559.321 1101.12 559.325 1113.02 559.334 1124.91C559.337 1133.03 571.933 1133.04 571.93 1124.92Z"
				fill="#030712"
			/>
			<path
				d="M1203.37 1328.61H561.744C553.084 1328.61 544.398 1328.45 535.733 1328.61C535.355 1328.61 534.977 1328.61 534.597 1328.61C526.493 1328.61 526.477 1341.2 534.597 1341.2H1176.22C1184.88 1341.2 1193.57 1341.36 1202.23 1341.2C1202.61 1341.2 1202.99 1341.2 1203.37 1341.2C1211.47 1341.2 1211.49 1328.61 1203.37 1328.61Z"
				fill="#030712"
			/>
			<path
				d="M594.432 876.548C594.443 905.858 594.454 935.168 594.467 964.478C594.481 998.467 594.495 1032.46 594.509 1066.45C594.521 1095.31 594.533 1124.19 594.545 1153.07C594.545 1158.24 594.545 1163.41 594.545 1168.57C594.234 1173.64 594.385 1178.72 594.997 1183.75C595.89 1188.14 598.1 1192.15 601.333 1195.24C604.566 1198.34 608.667 1200.37 613.088 1201.07C618.259 1201.56 623.459 1201.67 628.646 1201.39L698.373 1201.37L787.468 1201.33L885.349 1201.3L981.278 1201.27L1065.81 1201.25H1100.41H1115.11C1120.4 1201.62 1125.72 1201.41 1130.97 1200.63C1135.52 1199.49 1139.6 1196.94 1142.61 1193.34C1145.62 1189.74 1147.41 1185.28 1147.73 1180.59C1148.36 1172.37 1147.79 1163.89 1147.78 1155.64C1147.78 1137.18 1147.77 1118.72 1147.76 1100.25L1147.71 981.966C1147.7 947.658 1147.68 913.351 1147.67 879.046C1147.67 869.862 1144.35 861.026 1135.56 856.778C1130.62 854.796 1125.3 853.992 1120 854.432H1096.95L1031.78 854.453L948.358 854.479L856.384 854.511L765.346 854.537L685.047 854.563L624.204 854.581C619.241 854.581 613.956 854.117 609.22 855.81C604.936 857.347 601.225 860.157 598.583 863.861C595.94 867.566 594.492 871.99 594.432 876.54C594.209 884.649 606.805 884.644 607.028 876.54C607.204 870.13 612.295 867.175 618.126 867.172H629.89H657.908L730.004 867.149L815.832 867.12L906.526 867.091L993.215 867.065L1067.04 867.041L1119.14 867.023C1122.64 867.023 1126.77 866.435 1129.95 868.028C1136.48 871.287 1135.08 879.199 1135.08 885.239C1135.08 901.35 1135.08 917.458 1135.1 933.563C1135.11 971.176 1135.13 1008.79 1135.14 1046.4L1135.19 1157.95V1170.13C1135.51 1173.91 1135.43 1177.72 1134.93 1181.48C1133.46 1187.82 1127.7 1188.65 1122.23 1188.65H1093.59L1018.47 1188.67L927.918 1188.7L831.611 1188.74L739.199 1188.77L660.349 1188.79H628.901C624.472 1189.02 620.035 1189.02 615.607 1188.79C609.178 1188.14 607.149 1182.62 607.146 1177.03C607.136 1153.93 607.126 1130.83 607.118 1107.72C607.102 1075.39 607.088 1043.05 607.076 1010.72L607.036 914.438C607.036 901.806 607.036 889.173 607.036 876.54C607.023 868.445 594.427 868.429 594.432 876.548Z"
				fill="#030712"
			/>
			<path
				d="M759.804 1123.91C759.78 1097.2 759.767 1070.49 759.767 1043.79C759.757 1011.54 759.747 979.295 759.738 947.052C759.738 939.095 759.738 931.135 759.738 923.172L753.44 929.47H1002.45L996.154 923.172C996.154 942.211 996.163 961.249 996.18 980.286C996.196 1013.44 996.213 1046.59 996.233 1079.74C996.233 1094.46 996.241 1109.18 996.259 1123.9C996.259 1132 1008.85 1132.01 1008.85 1123.9C1008.84 1094.7 1008.82 1065.52 1008.8 1036.33C1008.79 1006.2 1008.77 976.067 1008.76 945.936C1008.76 938.347 1008.76 930.758 1008.76 923.169C1008.74 921.506 1008.07 919.918 1006.89 918.742C1005.71 917.566 1004.13 916.895 1002.46 916.871H753.435C751.772 916.895 750.184 917.566 749.008 918.742C747.832 919.918 747.161 921.506 747.137 923.169C747.137 943.695 747.142 964.221 747.153 984.747C747.153 1018.72 747.164 1052.7 747.187 1086.67C747.187 1099.08 747.194 1111.49 747.208 1123.9C747.208 1132 759.804 1132.01 759.804 1123.9V1123.91Z"
				fill="#030712"
			/>
			<path
				d="M848.474 1123.91H906.709V1031.28H848.474V1123.91Z"
				fill="#88C5E9"
			/>
			<path
				d="M913.008 1123.03V1028.62C913.008 1020.51 900.412 1020.5 900.412 1028.62V1123.03C900.412 1131.14 913.008 1131.15 913.008 1123.03Z"
				fill="#030712"
			/>
			<path
				d="M848.474 1031.26H744.012C744.149 1062.59 743.986 1100.03 743.986 1123.9H848.474V1033.09"
				fill="#FEC578"
			/>
			<path
				d="M772.55 1029.71C772.55 1056.3 772.55 1082.89 772.55 1109.48V1123.04C772.55 1131.14 785.146 1131.16 785.146 1123.04C785.146 1096.68 785.146 1070.32 785.146 1043.96C785.146 1039.22 785.146 1034.47 785.146 1029.72C785.146 1021.61 772.55 1021.6 772.55 1029.72V1029.71Z"
				fill="#030712"
			/>
			<path
				d="M807.359 1029.71V1123.03C807.359 1131.14 819.955 1131.15 819.955 1123.03V1029.71C819.955 1021.6 807.359 1021.59 807.359 1029.71Z"
				fill="#030712"
			/>
			<path
				d="M737.706 1029.71C737.85 1061.11 737.688 1092.51 737.688 1123.91C737.688 1132.02 750.283 1132.03 750.283 1123.91C750.283 1092.51 750.446 1061.11 750.302 1029.71C750.265 1021.6 737.669 1021.59 737.706 1029.71Z"
				fill="#030712"
			/>
			<path
				d="M947.547 1117.61H743.986C735.88 1117.61 735.867 1130.21 743.986 1130.21H947.547C955.653 1130.21 955.666 1117.61 947.547 1117.61Z"
				fill="#030712"
			/>
			<path
				d="M945.728 1099.22C944.713 1096.81 944.292 1094.2 944.5 1091.6C944.709 1088.99 945.541 1086.48 946.927 1084.26C949.596 1080.61 954.383 1077.45 962.864 1077.45H1005.13C1015.37 1077.45 1019.49 1081.69 1021.57 1086.34C1022.91 1090.57 1022.7 1095.15 1020.96 1099.23"
				fill="#74C66D"
			/>
			<path
				d="M951.8 1097.55C949.176 1090.2 952.018 1085.17 959.308 1083.98C963.097 1083.6 966.911 1083.52 970.713 1083.74H998.214C1002.31 1083.4 1006.43 1083.61 1010.47 1084.37C1010.71 1084.43 1011.94 1084.85 1011.97 1084.87C1012.28 1085.01 1014.03 1086.2 1013.58 1085.82C1014.5 1086.47 1015.21 1087.38 1015.61 1088.44C1016.24 1089.61 1015.55 1087.66 1015.86 1089.07C1016.02 1089.63 1016.11 1090.2 1016.12 1090.78C1016.32 1092.55 1016.12 1094.35 1015.53 1096.03C1014.74 1097.48 1014.53 1099.19 1014.95 1100.79C1015.37 1102.39 1016.38 1103.77 1017.79 1104.65C1019.23 1105.48 1020.95 1105.71 1022.56 1105.28C1024.17 1104.86 1025.55 1103.82 1026.41 1102.39C1028.3 1098.59 1029.08 1094.33 1028.66 1090.1C1028.24 1085.88 1026.63 1081.86 1024.02 1078.51C1018.1 1071.48 1009 1071.13 1000.51 1071.13H973.45C965.079 1071.13 956.086 1070.26 948.52 1074.56C944.161 1077.18 940.877 1081.27 939.253 1086.09C937.629 1090.91 937.772 1096.15 939.656 1100.87C940.135 1102.46 941.207 1103.81 942.649 1104.62C944.091 1105.44 945.793 1105.68 947.402 1105.27C949.005 1104.82 950.365 1103.75 951.188 1102.3C952.01 1100.85 952.23 1099.14 951.8 1097.53V1097.55Z"
				fill="#030712"
			/>
			<path d="M942.892 1123.91V1099.22H1022.44V1123.91" fill="white" />
			<path
				d="M949.189 1123.91V1099.22L942.891 1105.52H1022.44L1016.14 1099.22V1123.91L1022.44 1117.61H942.891C934.788 1117.61 934.772 1130.21 942.891 1130.21H1022.44C1024.11 1130.18 1025.69 1129.51 1026.87 1128.34C1028.05 1127.16 1028.72 1125.57 1028.74 1123.91V1099.22C1028.72 1097.56 1028.05 1095.97 1026.87 1094.8C1025.69 1093.62 1024.11 1092.95 1022.44 1092.93H942.891C941.228 1092.95 939.64 1093.62 938.464 1094.8C937.288 1095.97 936.617 1097.56 936.593 1099.22V1123.91C936.593 1132.02 949.189 1132.03 949.189 1123.91Z"
				fill="#030712"
			/>
			<path
				d="M978.577 964.061C976.063 964.061 924.357 964.111 920.158 964.111V1003.96H978.462C978.462 999.477 978.577 965.329 978.577 964.061Z"
				fill="#88C5E9"
			/>
			<path
				d="M984.76 1003.96C984.76 990.657 984.865 977.361 984.875 964.069C984.851 962.406 984.18 960.818 983.004 959.642C981.828 958.466 980.24 957.795 978.577 957.771C962.021 957.771 945.465 957.786 928.91 957.816H920.158C918.495 957.84 916.907 958.511 915.731 959.687C914.555 960.863 913.884 962.451 913.86 964.114V1003.96C913.86 1012.06 926.456 1012.08 926.456 1003.96V964.111L920.158 970.409C937.005 970.409 953.852 970.394 970.697 970.365H978.569L972.271 964.067C972.271 977.366 972.159 990.662 972.156 1003.95C972.156 1012.06 984.752 1012.07 984.752 1003.95L984.76 1003.96Z"
				fill="#030712"
			/>
			<path
				d="M943.07 964.111V1011.1C943.07 1012.77 943.733 1014.37 944.914 1015.55C946.096 1016.73 947.697 1017.39 949.368 1017.39C951.038 1017.39 952.64 1016.73 953.821 1015.55C955.002 1014.37 955.666 1012.77 955.666 1011.1V1003.96C955.666 1002.29 955.002 1000.68 953.821 999.503C952.64 998.322 951.038 997.658 949.368 997.658C947.697 997.658 946.096 998.322 944.914 999.503C943.733 1000.68 943.07 1002.29 943.07 1003.96V1011.1C943.07 1012.77 943.733 1014.37 944.914 1015.55C946.096 1016.73 947.697 1017.39 949.368 1017.39C951.038 1017.39 952.64 1016.73 953.821 1015.55C955.002 1014.37 955.666 1012.77 955.666 1011.1V964.124C955.666 962.454 955.002 960.852 953.821 959.671C952.64 958.49 951.038 957.826 949.368 957.826C947.697 957.826 946.096 958.49 944.914 959.671C943.733 960.852 943.07 962.454 943.07 964.124V964.111Z"
				fill="#030712"
			/>
			<path
				d="M744.004 1002.4H1012.89V1031.26H744.004V1002.4Z"
				fill="#CFCFCF"
			/>
			<path
				d="M744.004 1008.7H1012.89L1006.59 1002.4V1031.26L1012.89 1024.97H744.004L750.302 1031.26V1002.4C750.302 994.294 737.706 994.281 737.706 1002.4V1031.26C737.73 1032.93 738.401 1034.51 739.577 1035.69C740.753 1036.87 742.341 1037.54 744.004 1037.56H1012.89C1014.55 1037.54 1016.14 1036.87 1017.32 1035.69C1018.49 1034.51 1019.16 1032.93 1019.19 1031.26V1002.4C1019.16 1000.73 1018.49 999.146 1017.32 997.97C1016.14 996.794 1014.55 996.123 1012.89 996.1H744.004C735.901 996.1 735.885 1008.7 744.004 1008.7Z"
				fill="#030712"
			/>
			<path
				d="M854.772 1123.91V1033.09C854.772 1024.98 842.176 1024.97 842.176 1033.09V1123.91C842.176 1132.02 854.772 1132.03 854.772 1123.91Z"
				fill="#030712"
			/>
		</m.g>
		<defs>
			<clipPath id="clip0_185_82">
				<rect
					width={430}
					height={200}
					fill="white"
					transform="translate(663 921)"
				/>
			</clipPath>
			<clipPath id="clip1_185_82">
				<rect
					width={430}
					height={200}
					fill="white"
					transform="translate(663 921)"
				/>
			</clipPath>
			<clipPath id="clip2_185_82">
				<rect
					width={430}
					height={200}
					fill="white"
					transform="translate(663 921)"
				/>
			</clipPath>
			<clipPath id="clip3_185_82">
				<rect
					width={800}
					height={800}
					fill="white"
					transform="translate(471 702)"
				/>
			</clipPath>
		</defs>
	</svg>
}

export default ComputerImage
