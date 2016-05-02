# Library

layer = new Layer
exports.layerProps = Object.keys(layer.props)
exports.layerProps.push "superLayer"
exports.layerProps.push "constraints"
exports.layerStyles = Object.keys(layer.style)
layer.destroy()

exports.assets = {
	bluetooth: "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
		<svg width='7px' height='13px' viewBox='0 0 8 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
			<!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->
			<title>Bluetooth</title>
			<desc>Created with Sketch.</desc>
			<defs></defs>
				<g id='Status-Icons-(White)' transform='translate(-137.000000, 0.000000)' fill='#FFF'>
					<path d='M140.5,14.5 L145,10.25 L141.8,7.5 L145,4.75 L140.5,0.5 L140.5,6.07142857 L137.8,3.75 L137,4.5 L140.258333,7.375 L137,10.25 L137.8,11 L140.5,8.67857143 L140.5,14.5 Z M141.5,3 L143.366667,4.75 L141.5,6.25 L141.5,3 Z M141.5,8.5 L143.366667,10.25 L141.5,12 L141.5,8.5 Z' id='Bluetooth'></path>
				</g>
		</svg>"
	batteryHigh : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
		<svg width='25px' height='10px' viewBox='0 0 25 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
		    <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch -->
		    <title>Battery</title>
		    <desc>Created with Sketch.</desc>
		    <defs></defs>
		    <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
		        <g id='Status-Bar/Black/100%' transform='translate(-345.000000, -5.000000)' fill='#030303'>
		            <path d='M346.493713,5.5 C345.668758,5.5 345,6.16802155 345,7.00530324 L345,13.4946968 C345,14.3260528 345.67338,15 346.493713,15 L366.006287,15 C366.831242,15 367.5,14.3319784 367.5,13.4946968 L367.5,7.00530324 C367.5,6.17394722 366.82662,5.5 366.006287,5.5 L346.493713,5.5 Z M368,8.5 L368,12 L368.75,12 C369.164214,12 369.5,11.6644053 369.5,11.25774 L369.5,9.24225998 C369.5,8.83232111 369.167101,8.5 368.75,8.5 L368,8.5 Z M346.508152,6 C345.951365,6 345.5,6.45699692 345.5,7.00844055 L345.5,13.4915594 C345.5,14.0485058 345.949058,14.5 346.508152,14.5 L365.991848,14.5 C366.548635,14.5 367,14.0430031 367,13.4915594 L367,7.00844055 C367,6.45149422 366.550942,6 365.991848,6 L346.508152,6 Z M346.506744,6.5 C346.226877,6.5 346,6.71637201 346,6.99209595 L346,13.5079041 C346,13.7796811 346.230225,14 346.506744,14 L365.993256,14 C366.273123,14 366.5,13.783628 366.5,13.5079041 L366.5,6.99209595 C366.5,6.72031886 366.269775,6.5 365.993256,6.5 L346.506744,6.5 Z' id='Battery'></path>
		        </g>
		    </g>
		</svg>"
	batteryMid : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
		<svg width='25px' height='10px' viewBox='0 0 25 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
		    <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch -->
		    <title>Battery</title>
		    <desc>Created with Sketch.</desc>
		    <defs></defs>
		    <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
		        <g id='Status-Bar/Black/Low-Power' transform='translate(-345.000000, -5.000000)' fill='#030303'>
		            <path d='M346.493713,5.5 C345.668758,5.5 345,6.16802155 345,7.00530324 L345,13.4946968 C345,14.3260528 345.67338,15 346.493713,15 L366.006287,15 C366.831242,15 367.5,14.3319784 367.5,13.4946968 L367.5,7.00530324 C367.5,6.17394722 366.82662,5.5 366.006287,5.5 L346.493713,5.5 Z M368,8.5 L368,12 L368.75,12 C369.164214,12 369.5,11.6644053 369.5,11.25774 L369.5,9.24225998 C369.5,8.83232111 369.167101,8.5 368.75,8.5 L368,8.5 Z M346.508152,6 C345.951365,6 345.5,6.45699692 345.5,7.00844055 L345.5,13.4915594 C345.5,14.0485058 345.949058,14.5 346.508152,14.5 L365.991848,14.5 C366.548635,14.5 367,14.0430031 367,13.4915594 L367,7.00844055 C367,6.45149422 366.550942,6 365.991848,6 L346.508152,6 Z M346.50965,6.5 C346.228178,6.5 346,6.71637201 346,6.99209595 L346,13.5079041 C346,13.7796811 346.227653,14 346.50965,14 L356,14 L356,6.5 L346.50965,6.5 Z' id='Battery'></path>
		        </g>
		    </g>
		</svg>"
	batteryLow : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
		<svg width='25px' height='10px' viewBox='0 0 25 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
		    <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch -->
		    <title>Battery</title>
		    <desc>Created with Sketch.</desc>
		    <defs></defs>
		    <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
		        <g id='Status-Bar/Black/20%' transform='translate(-345.000000, -5.000000)' fill='#030303'>
		            <path d='M346.493713,5.5 C345.668758,5.5 345,6.16802155 345,7.00530324 L345,13.4946968 C345,14.3260528 345.67338,15 346.493713,15 L366.006287,15 C366.831242,15 367.5,14.3319784 367.5,13.4946968 L367.5,7.00530324 C367.5,6.17394722 366.82662,5.5 366.006287,5.5 L346.493713,5.5 L346.493713,5.5 Z M368,8.5 L368,12 L368.75,12 C369.164214,12 369.5,11.6644053 369.5,11.25774 L369.5,9.24225998 C369.5,8.83232111 369.167101,8.5 368.75,8.5 L368,8.5 L368,8.5 Z M346.508152,6 C345.951365,6 345.5,6.45699692 345.5,7.00844055 L345.5,13.4915594 C345.5,14.0485058 345.949058,14.5 346.508152,14.5 L365.991848,14.5 C366.548635,14.5 367,14.0430031 367,13.4915594 L367,7.00844055 C367,6.45149422 366.550942,6 365.991848,6 L346.508152,6 Z M346.490479,6.5 C346.219595,6.5 346,6.71637201 346,6.99209595 L346,13.5079041 C346,13.7796811 346.215057,14 346.490479,14 L350,14 L350,6.5 L346.490479,6.5 Z' id='Battery'></path>
		        </g>
		    </g>
		</svg>"
	bannerBG : {
		"iphone-5": "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='320px' height='68px' viewBox='0 0 320 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
			    <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->
			    <title>iphone5</title>
			    <desc>Created with Sketch.</desc>
			    <defs></defs>
			    <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'>
			        <g id='iPhone-5/5S/5C' fill='#1A1A1C'>
			            <path d='M0,0 L320,0 L320,68 L0,68 L0,0 Z M142,61.0048815 C142,59.897616 142.896279,59 144.0024,59 L176.9976,59 C178.103495,59 179,59.8938998 179,61.0048815 L179,61.9951185 C179,63.102384 178.103721,64 176.9976,64 L144.0024,64 C142.896505,64 142,63.1061002 142,61.9951185 L142,61.0048815 Z' id='iphone5'></path>
			        </g>
			    </g>
			</svg>"
		"iphone-6s": "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
				<svg width='375px' height='68px' viewBox='0 0 375 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
					<!-- Generator: Sketch 3.6 (26304) - http://www.bohemiancoding.com/sketch -->
					<title>Notification background</title>
					<desc>Created with Sketch.</desc>
					<defs></defs>
					<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'>
						<g id='iOS8-Push-Notification' transform='translate(-58.000000, -23.000000)' fill='#1A1A1C'>
							<g transform='translate(58.000000, 7.000000)' id='Notification-container'>
								<g>
									<path d='M0,16 L375,16 L375,84 L0,84 L0,16 Z M169,77.0048815 C169,75.897616 169.896279,75 171.0024,75 L203.9976,75 C205.103495,75 206,75.8938998 206,77.0048815 L206,77.9951185 C206,79.102384 205.103721,80 203.9976,80 L171.0024,80 C169.896505,80 169,79.1061002 169,77.9951185 L169,77.0048815 Z' id='Notification-background'></path>
								</g>
							</g>
						</g>
					</g>
				</svg>"
		"iphone-6s-plus" : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
				<svg width='414px' height='68px' viewBox='0 0 414 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
				<!-- Generator: Sketch 3.6 (26304) - http://www.bohemiancoding.com/sketch -->
				<title>Notification background Copy</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'>
					<g id='iOS8-Push-Notification' transform='translate(-43.000000, -74.000000)' fill='#1A1A1C'>
						<g transform='translate(43.000000, 74.000000)' id='Notification-container'>
							<g>
								<path d='M0,0 L414,0 L414,68 L0,68 L0,0 Z M189,61.0048815 C189,59.897616 189.896279,59 191.0024,59 L223.9976,59 C225.103495,59 226,59.8938998 226,61.0048815 L226,61.9951185 C226,63.102384 225.103721,64 223.9976,64 L191.0024,64 C189.896505,64 189,63.1061002 189,61.9951185 L189,61.0048815 Z' id='Notification-background-Copy'></path>
							</g>
						</g>
					</g>
				</g>
			</svg>"
		"ipad" : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
				<svg width='768px' height='68px' viewBox='0 0 768 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
				    <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->
				    <title>ipad-portrait</title>
				    <desc>Created with Sketch.</desc>
				    <defs></defs>
				    <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'>
				        <g id='iPad-Portrait' fill='#1A1A1C'>
				            <path d='M0,0 L768,0 L768,68 L0,68 L0,0 Z M366,61.0048815 C366,59.897616 366.896279,59 368.0024,59 L400.9976,59 C402.103495,59 403,59.8938998 403,61.0048815 L403,61.9951185 C403,63.102384 402.103721,64 400.9976,64 L368.0024,64 C366.896505,64 366,63.1061002 366,61.9951185 L366,61.0048815 Z' id='ipad-portrait'></path>
				        </g>
				    </g>
				</svg>"
		"ipad-pro" : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
				<svg width='1024px' height='68px' viewBox='0 0 1024 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
				    <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->
				    <title>ipad-pro-portrait</title>
				    <desc>Created with Sketch.</desc>
				    <defs></defs>
				    <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'>
				        <g id='iPad-Pro-Portrait' fill='#1A1A1C'>
				            <path d='M0,0 L1024,0 L1024,68 L0,68 L0,0 Z M494,61.0048815 C494,59.897616 494.896279,59 496.0024,59 L528.9976,59 C530.103495,59 531,59.8938998 531,61.0048815 L531,61.9951185 C531,63.102384 530.103721,64 528.9976,64 L496.0024,64 C494.896505,64 494,63.1061002 494,61.9951185 L494,61.0048815 Z' id='ipad-pro-portrait'></path>
				        </g>
				    </g>
				</svg>"
	}
	network:"
<svg width='14px' height='10px' viewBox='87 5 14 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
    <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <path d='M96.1444208,12.4385043 C95.626374,11.8454456 94.8523616,11.4689119 93.987563,11.4689119 C93.1390073,11.4689119 92.3778594,11.8314341 91.8601652,12.4053177 L94.0225391,14.5 L96.1444208,12.4385043 Z M98.3234964,10.3214425 C97.2447794,9.19174563 95.7014387,8.48445596 93.987563,8.48445596 C92.2882723,8.48445596 90.7566264,9.17975893 89.6792698,10.2926936 L90.7692987,11.3486 C91.567205,10.5053708 92.713648,9.97668394 93.987563,9.97668394 C95.2768836,9.97668394 96.4356305,10.518235 97.2346215,11.3793293 L98.3234964,10.3214425 L98.3234964,10.3214425 Z M100.5,8.20687933 C98.8629578,6.53943672 96.5505699,5.5 93.987563,5.5 C91.4375103,5.5 89.1355496,6.52895605 87.5,8.18164431 L88.5895579,9.23709441 C89.9460798,7.85431655 91.8628921,6.99222798 93.987563,6.99222798 C96.1260026,6.99222798 98.0538809,7.86552609 99.4118698,9.26404272 L100.5,8.20687933 Z' id='Wi-Fi' stroke='none' fill='#030303' fill-rule='evenodd'></path>
</svg>"
	activity: "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
				<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
				<title>Soccer Ball</title>
				<desc>Created with Sketch.</desc>
				<defs>
					<circle id='path-1' cx='8' cy='8' r='8'></circle>
				</defs>
				<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
					<g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-179.000000, -639.000000)'>
						<g id='Soccer-Ball' sketch:type='MSLayerGroup' transform='translate(179.000000, 639.000000)'>
							<mask id='mask-2' sketch:name='Mask' fill='white'>
								<use xlink:href='#path-1'></use>
							</mask>
							<use id='Mask' stroke='#4A5361' sketch:type='MSShapeGroup' xlink:href='#path-1'></use>
							<path d='M6,12.1203046 L12.8573384,8 L13.3723765,8.8571673 L6.51503807,12.9774719 L6,12.1203046 L6,12.1203046 Z' id='Rectangle-47' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
							<path d='M11.849648,8.7260551 L19.1001103,5.34510901 L19.5227285,6.2514168 L12.2722662,9.63236289 L11.849648,8.7260551 L11.849648,8.7260551 Z' id='Rectangle-47-Copy-3' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
							<path d='M6,3.1203046 L12.8573384,-1 L13.3723765,-0.142832699 L6.51503807,3.9774719 L6,3.1203046 L6,3.1203046 Z' id='Rectangle-47-Copy-2' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
							<path d='M-1,7.1203046 L5.85733841,3 L6.37237648,3.8571673 L-0.484961925,7.9774719 L-1,7.1203046 L-1,7.1203046 Z' id='Rectangle-47-Copy-4' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
							<rect id='Rectangle-50' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)' x='4' y='6' width='1' height='5'></rect>
							<rect id='Rectangle-51' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)' x='11.5' y='3' width='1' height='12'></rect>
							<path d='M5,4.8571673 L11.8573384,8.9774719 L12.3723765,8.1203046 L5.51503807,4 L5,4.8571673' id='Rectangle-47-Copy' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
							<path d='M5,12.8571673 L11.8573384,16.9774719 L12.3723765,16.1203046 L5.51503807,12 L5,12.8571673' id='Rectangle-47-Copy-5' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
							<path d='M11.9048972,6.14766064 L13.8714227,8.33170849 L12.4019596,10.8768933 L9.52725589,10.2658562 L9.22005445,7.34302965 L11.9048972,6.14766064' id='Polygon-1' fill='#D8D8D8' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
							<path d='M11.9048972,6.14766064 L13.8714227,8.33170849 L12.4019596,10.8768933 L9.52725589,10.2658562 L9.22005445,7.34302965 L11.9048972,6.14766064' id='Polygon-1-Copy' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
							<path d='M7.45771189,3.19504739 L7.35514484,6.13218333 L4.5300676,6.9422612 L2.88664089,4.5057809 L4.69602457,2.18987541 L7.45771189,3.19504739' id='Polygon-1-Copy-2' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
							<path d='M7.45771189,11.1950474 L7.35514484,14.1321833 L4.5300676,14.9422612 L2.88664089,12.5057809 L4.69602457,10.1898754 L7.45771189,11.1950474' id='Polygon-1-Copy-3' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
							<path d='M14.5431701,0.0725939314 L14.4406031,3.00972988 L11.6155258,3.81980774 L9.97209912,1.38332745 L11.7814828,-0.93257805 L14.5431701,0.0725939314' id='Polygon-1-Copy-4' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
						</g>
					</g>
				</g>
			</svg>"
	animals: "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='17px' height='16px' viewBox='0 0 17 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
				<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
				<title>Group</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
					<g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-117.000000, -639.000000)' stroke='#4A5361'>
						<g id='ic_Food' sketch:type='MSLayerGroup' transform='translate(118.000000, 640.000000)'>
							<g id='Group' sketch:type='MSShapeGroup'>
								<path d='M5.68377537,1.38156646 C6.23926066,1.13624 6.85372005,1 7.5,1 C8.14627995,1 8.76073934,1.13624 9.31622463,1.38156646 C9.80879275,0.562359019 10.8255888,0 12,0 C13.6568542,0 15,1.11928813 15,2.5 C15,3.5571398 14.2126246,4.46102843 13.0999226,4.82662514 C14.2496528,5.64185422 15,6.98330062 15,8.5 C15,10.7167144 13.3971873,12.5590719 11.2872671,12.9313673 C10.4867248,14.1757703 9.08961696,15 7.5,15 C5.91038304,15 4.51327524,14.1757703 3.71273291,12.9313673 C1.60281268,12.5590719 0,10.7167144 0,8.5 C0,6.98330062 0.750347244,5.64185422 1.90007741,4.82662514 C0.787375445,4.46102843 0,3.5571398 0,2.5 C0,1.11928813 1.34314575,0 3,0 C4.17441122,0 5.19120725,0.562359019 5.68377537,1.38156646 Z' id='Oval-8'></path>
								<path d='M5.73834228,12 C5.86290979,12 6.14642353,12 6.14642353,12 C6.14642353,12 6.43215696,12.4426123 6.5246582,12.4919739 C6.66455601,12.5666277 7,12.4919739 7,12.4919739 L7,12 L8,12 L8,12.4919739 L8.49799228,12.4919739 L8.84301769,12 L9.3918457,12 C9.3918457,12 8.99598457,12.9839478 8.49799228,12.9839478 L6.60702407,12.9839478 C6.21404813,12.9839478 5.45996094,12 5.73834228,12 Z' id='Rectangle-44-Copy-2'></path>
								<circle id='Oval-14' cx='10.5' cy='7.5' r='0.5'></circle>
								<circle id='Oval-14-Copy' cx='4.5' cy='7.5' r='0.5'></circle>
								<path d='M12.6999969,5 C12.6999969,3.06700338 11.1329936,1.5 9.19999695,1.5' id='Oval-16'></path>
								<path d='M5.5,5 C5.5,3.06700338 3.93299662,1.5 2,1.5' id='Oval-16-Copy' transform='translate(3.750000, 3.250000) scale(-1, 1) translate(-3.750000, -3.250000) '></path>
								<rect id='Rectangle-44-Copy' x='7' y='11' width='1' height='1'></rect>
								<path d='M6,10 L6.5,10 L6.49999999,9.5 L8.50000005,9.5 L8.50000005,10 L9,10 L9,10.5 L8.5,10.5 L8.5,11 L6.5,11 L6.5,10.5 L6,10.5 L6,10 Z' id='Path'></path>
							</g>
						</g>
					</g>
				</g>
			</svg>"
	chevron : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
		<svg width='13px' height='22px' viewBox='0 0 13 22' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
		    <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->
		    <title>Back Chevron</title>
		    <desc>Created with Sketch.</desc>
		    <defs></defs>
		    <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
		        <g id='Navigation-Bar/Back' transform='translate(-8.000000, -31.000000)' fill='#0076FF'>
		            <path d='M8.5,42 L19,31.5 L21,33.5 L12.5,42 L21,50.5 L19,52.5 L8.5,42 Z' id='Back-Chevron'></path>
		        </g>
		    </g>
		</svg>"
	emoji : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
		<svg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
			<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
			<title>Emoji</title>
			<desc>Created with Sketch.</desc>
			<defs></defs>
			<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
				<g id='Keyboard/Light/Lower' sketch:type='MSLayerGroup' transform='translate(-60.000000, -181.000000)' fill='#030303'>
					<g id='Bottom-Row' transform='translate(3.000000, 170.000000)' sketch:type='MSShapeGroup'>
						<path d='M66.75,30.5 C72.1347763,30.5 76.5,26.1347763 76.5,20.75 C76.5,15.3652237 72.1347763,11 66.75,11 C61.3652237,11 57,15.3652237 57,20.75 C57,26.1347763 61.3652237,30.5 66.75,30.5 Z M66.75,29.5 C71.5824916,29.5 75.5,25.5824916 75.5,20.75 C75.5,15.9175084 71.5824916,12 66.75,12 C61.9175084,12 58,15.9175084 58,20.75 C58,25.5824916 61.9175084,29.5 66.75,29.5 Z M63.75,19 C64.4403559,19 65,18.4403559 65,17.75 C65,17.0596441 64.4403559,16.5 63.75,16.5 C63.0596441,16.5 62.5,17.0596441 62.5,17.75 C62.5,18.4403559 63.0596441,19 63.75,19 Z M69.75,19 C70.4403559,19 71,18.4403559 71,17.75 C71,17.0596441 70.4403559,16.5 69.75,16.5 C69.0596441,16.5 68.5,17.0596441 68.5,17.75 C68.5,18.4403559 69.0596441,19 69.75,19 Z M59.8876334,22.1641444 C59.6390316,21.383134 60.065918,20.9785156 60.8530951,21.2329304 C60.8530951,21.2329304 63.0937503,22.2125 66.7500001,22.2125 C70.4062499,22.2125 72.6469047,21.2329304 72.6469047,21.2329304 C73.4287162,20.9662153 73.8812463,21.4044097 73.6058477,22.1807437 C73.6058477,22.1807437 72.6,27.575 66.75,27.575 C60.9,27.575 59.8876334,22.1641444 59.8876334,22.1641444 Z M66.75,23.1875 C64.06875,23.1875 61.8544055,22.4737821 61.8544055,22.4737821 C61.3273019,22.32948 61.1781233,22.5721615 61.5639555,22.957075 C61.5639555,22.957075 62.3625,24.65 66.75,24.65 C71.1375,24.65 71.9508503,22.9438304 71.9508503,22.9438304 C72.3093659,22.5399278 72.1690793,22.3359844 71.6354273,22.476349 C71.6354273,22.476349 69.43125,23.1875 66.75,23.1875 Z' id='Emoji'></path>
					</g>
				</g>
			</g>
		</svg>"
	delete: {
		on : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
				<svg width='24px' height='18px' viewBox='0 0 24 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
					<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
					<title>Back</title>
					<desc>Created with Sketch.</desc>
					<defs></defs>
					<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
						<g id='Keyboard/Light/Upper' sketch:type='MSLayerGroup' transform='translate(-339.000000, -130.000000)' fill='#030303'>
							<g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'>
								<path d='M351.642663,20.9776903 L354.466795,18.1535585 C354.760106,17.8602476 354.763983,17.3814962 354.47109,17.088603 C354.176155,16.7936677 353.7014,16.7976328 353.406135,17.0928983 L350.582003,19.9170301 L347.757871,17.0928983 C347.46456,16.7995874 346.985809,16.7957097 346.692916,17.088603 C346.39798,17.3835382 346.401945,17.858293 346.697211,18.1535585 L349.521343,20.9776903 L346.697211,23.801822 C346.4039,24.0951329 346.400022,24.5738843 346.692916,24.8667776 C346.987851,25.1617128 347.462606,25.1577477 347.757871,24.8624822 L350.582003,22.0383504 L353.406135,24.8624822 C353.699445,25.1557931 354.178197,25.1596708 354.47109,24.8667776 C354.766025,24.5718423 354.76206,24.0970875 354.466795,23.801822 L351.642663,20.9776903 Z M337.059345,22.0593445 C336.474285,21.4742847 336.481351,20.5186489 337.059345,19.9406555 L343.789915,13.2100853 C344.182084,12.817916 344.94892,12.5 345.507484,12.5 L356.002098,12.5 C357.933936,12.5 359.5,14.0688477 359.5,16.0017983 L359.5,25.9982017 C359.5,27.9321915 357.923088,29.5 356.002098,29.5 L345.507484,29.5 C344.951066,29.5 344.177169,29.1771693 343.789915,28.7899148 L337.059345,22.0593445 Z' id='Back'></path>
							</g>
						</g>
					</g>
				</svg>"
		off : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
		<svg width='24px' height='18px' viewBox='0 0 24 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
			<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
			<title>Back</title>
			<desc>Created with Sketch.</desc>
			<defs></defs>
			<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
				<g id='Keyboard/Light/Upper' sketch:type='MSLayerGroup' transform='translate(-339.000000, -130.000000)' fill='#030303'>
					<g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'>
						<path d='M337.059345,22.0593445 C336.474285,21.4742847 336.481351,20.5186489 337.059345,19.9406555 L343.789915,13.2100853 C344.182084,12.817916 344.94892,12.5 345.507484,12.5 L356.002098,12.5 C357.933936,12.5 359.5,14.0688477 359.5,16.0017983 L359.5,25.9982017 C359.5,27.9321915 357.923088,29.5 356.002098,29.5 L345.507484,29.5 C344.951066,29.5 344.177169,29.1771693 343.789915,28.7899148 L337.059345,22.0593445 Z M351.642663,20.9776903 L354.466795,18.1535585 C354.760106,17.8602476 354.763983,17.3814962 354.47109,17.088603 C354.176155,16.7936677 353.7014,16.7976328 353.406135,17.0928983 L350.582003,19.9170301 L347.757871,17.0928983 C347.46456,16.7995874 346.985809,16.7957097 346.692916,17.088603 C346.39798,17.3835382 346.401945,17.858293 346.697211,18.1535585 L349.521343,20.9776903 L346.697211,23.801822 C346.4039,24.0951329 346.400022,24.5738843 346.692916,24.8667776 C346.987851,25.1617128 347.462606,25.1577477 347.757871,24.8624822 L350.582003,22.0383504 L353.406135,24.8624822 C353.699445,25.1557931 354.178197,25.1596708 354.47109,24.8667776 C354.766025,24.5718423 354.76206,24.0970875 354.466795,23.801822 L351.642663,20.9776903 Z M338.70972,21.7097195 C338.317752,21.3177522 338.318965,20.6810349 338.70972,20.2902805 L344.643245,14.3567547 C344.840276,14.1597245 345.225639,14 345.493741,14 L355.997239,14 C357.103333,14 357.999999,14.8970601 357.999999,16.0058586 L357.999999,25.9941412 C357.999999,27.1019464 357.106457,27.9999999 355.997239,27.9999999 L345.493741,28 C345.221056,28 344.840643,27.8406431 344.643246,27.6432453 L338.70972,21.7097195 Z' id='Back'></path>
					</g>
				</g>
			</g>
		</svg>"
	}
	food :  "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='17px' height='16px' viewBox='0 0 17 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
				<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
				<title>Food</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
					<g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-148.000000, -637.000000)'>
						<g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'>
							<g id='Food' transform='translate(149.500000, 229.500000)' sketch:type='MSShapeGroup'>
								<path d='M5.5,15.5 L1,15.5 L0,5 L6.5,5 L6.26360933,7.48210202' id='Drink' stroke='#4A5461'></path>
								<path d='M6.01077545,1.96930098 L6.51571352,5.22270539 L5.71908184,5.67947812 L5.0389009,1.96930098 L4.85557247,1.96930098 L4.85557247,0.96930098 L8.85557247,0.96930098 L8.85557247,1.96930098 L6.01077545,1.96930098 Z' id='Straw' fill='#4A5461' transform='translate(6.855572, 3.324390) rotate(24.000000) translate(-6.855572, -3.324390) '></path>
								<rect id='Bottom-Bun' stroke='#4A5461' x='3' y='14' width='10.5' height='1.5' rx='1'></rect>
								<path d='M1.5,12.5024408 C1.5,11.948808 1.94916916,11.5 2.49268723,11.5 L14.0073128,11.5 C14.5555588,11.5 15,11.9469499 15,12.5024408 L15,12.9975592 C15,13.551192 14.5508308,14 14.0073128,14 L2.49268723,14 C1.94444121,14 1.5,13.5530501 1.5,12.9975592 L1.5,12.5024408 Z M3.93300003,11.8392727 C3.41771834,11.6518976 3.44483697,11.5 3.9955775,11.5 L13.0044225,11.5 C13.5542648,11.5 13.5866061,11.6503251 13.067,11.8392727 L8.5,13.5 L3.93300003,11.8392727 Z' id='&quot;Patty&quot;' fill='#4A5461'></path>
								<path d='M2.5,10.5 L13.5,10.5 L15,11.5 L1,11.5 L2.5,10.5 Z' id='Cheese' fill='#4A5461'></path>
								<path d='M8.25,10.5 C11.4256373,10.5 14,10.3284271 14,9.5 C14,8.67157288 11.4256373,8 8.25,8 C5.07436269,8 2.5,8.67157288 2.5,9.5 C2.5,10.3284271 5.07436269,10.5 8.25,10.5 Z' id='Top-Bun' stroke='#4A5461' stroke-width='0.75'></path>
							</g>
						</g>
					</g>
				</g>
			</svg>"
	flags: "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='11px' height='15px' viewBox='0 0 11 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
				<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
				<title>Flag</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
					<g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-275.000000, -639.000000)'>
						<g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'>
							<g id='Flag' transform='translate(275.000000, 231.500000)' sketch:type='MSShapeGroup'>
								<rect id='Pole' fill='#4A5461' x='0' y='0' width='1' height='14'></rect>
								<path d='M1,1 C1,1 1.25,2 3.5,2 C5.75,2 6,0.749999998 8,0.75 C10,0.749999998 10,1.5 10,1.5 L10,7.5 C10,7.5 10,6.5 8,6.5 C6,6.5 4.80623911,8 3.5,8 C2.19376089,8 1,7 1,7 L1,1 Z' stroke='#4A5461' stroke-linejoin='round'></path>
							</g>
						</g>
					</g>
				</g>
			</svg>"
	frequent: "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='17px' height='16px' viewBox='0 0 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
				<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
				<title>Recent</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
					<g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-55.000000, -638.000000)'>
						<g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'>
							<g id='Recent' transform='translate(55.500000, 230.000000)' sketch:type='MSShapeGroup'>
								<circle id='Body' stroke='#4A5461' cx='8' cy='8' r='8'></circle>
								<path d='M7.5,7.5 L7.5,8.5 L8.5,8.5 L8.5,2 L7.5,2 L7.5,7.5 L4,7.5 L4,8.5 L8.5,8.5 L8.5,7.5 L7.5,7.5 Z' id='Hands' fill='#4A5461'></path>
							</g>
						</g>
					</g>
				</g>
			</svg>"
	keyboard : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='32.5px' height='23.5px' viewBox='0 0 65 47' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
			    <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->
			    <title>Shape</title>
			    <desc>Created with Sketch.</desc>
			    <defs></defs>
			    <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
			        <g id='iPad-Portrait' transform='translate(-1436.000000, -1956.000000)' fill='#000000'>
			            <g id='Keyboard-Light' transform='translate(0.000000, 1422.000000)'>
			                <g id='Keyboard-down' transform='translate(1412.000000, 500.000000)'>
			                    <path d='M87.001332,34 C88.1051659,34 89,34.8997127 89,35.9932874 L89,61.0067126 C89,62.1075748 88.1058759,63 87.001332,63 L25.998668,63 C24.8948341,63 24,62.1002873 24,61.0067126 L24,35.9932874 C24,34.8924252 24.8941241,34 25.998668,34 L87.001332,34 Z M26,36 L26,61 L87,61 L87,36 L26,36 Z M79,40 L83,40 L83,44 L79,44 L79,40 Z M72,40 L76,40 L76,44 L72,44 L72,40 Z M65,40 L69,40 L69,44 L65,44 L65,40 Z M58,40 L62,40 L62,44 L58,44 L58,40 Z M51,40 L55,40 L55,44 L51,44 L51,40 Z M44,40 L48,40 L48,44 L44,44 L44,40 Z M37,40 L41,40 L41,44 L37,44 L37,40 Z M30,40 L34,40 L34,44 L30,44 L30,40 Z M79,47 L83,47 L83,51 L79,51 L79,47 Z M72,47 L76,47 L76,51 L72,51 L72,47 Z M65,47 L69,47 L69,51 L65,51 L65,47 Z M58,47 L62,47 L62,51 L58,51 L58,47 Z M51,47 L55,47 L55,51 L51,51 L51,47 Z M44,47 L48,47 L48,51 L44,51 L44,47 Z M37,47 L41,47 L41,51 L37,51 L37,47 Z M30,47 L34,47 L34,51 L30,51 L30,47 Z M79,54 L83,54 L83,58 L79,58 L79,54 Z M72,54 L76,54 L76,58 L72,58 L72,54 Z M44,54 L69,54 L69,58 L44,58 L44,54 Z M37,54 L41,54 L41,58 L37,58 L37,54 Z M30,54 L34,54 L34,58 L30,58 L30,54 Z M44.3163498,69.9771047 C43.3684225,70.5420342 43.3338721,71.5096495 44.2378217,72.1373912 L55.3621539,79.8626088 C56.2667113,80.4907726 57.7338965,80.4903505 58.6378461,79.8626088 L69.7621783,72.1373912 C70.6667357,71.5092274 70.648012,70.5205204 69.7115187,69.9234166 L69.9825731,70.0962396 C69.5181333,69.800115 68.7782557,69.8126493 68.3261307,70.1269323 L57.8154999,77.4331263 C57.3651117,77.746202 56.628165,77.7381786 56.1762103,77.4199424 L45.8386137,70.1408977 C45.3836472,69.8205407 44.6375039,69.7857088 44.1566393,70.0722862 L44.3163498,69.9771047 Z' id='Shape'></path>
			                </g>
			            </g>
			        </g>
			    </g>
			</svg>"
	objects : 
		"<?xml version='1.0' encoding='UTF-8' standalone='no'?>
				<svg width='11px' height='16px' viewBox='0 0 11 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
				<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
				<title>Lightbulb</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
					<g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-244.000000, -639.000000)' stroke='#4A5361'>
						<g id='Lightbulb' sketch:type='MSLayerGroup' transform='translate(244.000000, 639.000000)'>
							<path d='M8,10.4002904 C9.78083795,9.48993491 11,7.63734273 11,5.5 C11,2.46243388 8.53756612,0 5.5,0 C2.46243388,0 0,2.46243388 0,5.5 C0,7.63734273 1.21916205,9.48993491 3,10.4002904 L3,14.0020869 C3,15.1017394 3.89761602,16 5.0048815,16 L5.9951185,16 C7.1061002,16 8,15.1055038 8,14.0020869 L8,10.4002904 Z' id='Oval-17' sketch:type='MSShapeGroup'></path>
							<rect id='Rectangle-50' sketch:type='MSShapeGroup' x='3' y='12' width='5' height='1'></rect>
							<rect id='Rectangle-51' sketch:type='MSShapeGroup' x='4' y='13.5' width='1.5' height='1'></rect>
							<path d='M5,8.5 C5,8.5 3.49999999,7.50000001 4,7 C4.50000001,6.49999999 5,7.66666667 5.5,8 C5.5,8 6.5,6.50000001 7,7 C7.5,7.49999999 6,8.5 6,8.5 L6,11 L5,11 L5,8.5 Z' id='Rectangle-52' sketch:type='MSShapeGroup'></path>
						</g>
					</g>
				</g>
			</svg>"
	shift : {
		on : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
				<svg width='20px' height='18px' viewBox='0 0 20 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
					<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
					<title>Shift</title>
					<desc>Created with Sketch.</desc>
					<defs></defs>
					<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
						<g id='Keyboard/Light/Upper' sketch:type='MSLayerGroup' transform='translate(-14.000000, -130.000000)' fill='#030303'>
							<g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'>
								<path d='M21.7052388,13.2052388 C21.3157462,12.8157462 20.6857559,12.8142441 20.2947612,13.2052388 L11.9160767,21.5839233 C11.1339991,22.3660009 11.3982606,23 12.4979131,23 L16.5,23 L16.5,28.009222 C16.5,28.5564136 16.9463114,29 17.4975446,29 L24.5024554,29 C25.053384,29 25.5,28.5490248 25.5,28.009222 L25.5,23 L29.5020869,23 C30.6055038,23 30.866824,22.366824 30.0839233,21.5839233 L21.7052388,13.2052388 Z' id='Shift'></path>
							</g>
						</g>
					</g>
				</svg>"
		off : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
		<svg width='20px' height='18px' viewBox='0 0 20 19' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
			<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
			<title>Shift</title>
			<desc>Created with Sketch.</desc>
			<defs></defs>
			<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
				<g id='Keyboard/Light/Lower' sketch:type='MSLayerGroup' transform='translate(-14.000000, -129.000000)' fill='#030303'>
					<g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'>
						<path d='M21.6719008,12.2325898 C21.301032,11.8279916 20.6946892,11.8334731 20.3288195,12.2325898 L11.6947023,21.6512983 C10.7587441,22.672308 11.1285541,23.5 12.5097751,23.5 L15.9999999,23.5000002 L15.9999999,28.0014241 C15.9999999,28.8290648 16.6716559,29.5000001 17.497101,29.5000001 L24.5028992,29.5000001 C25.3297253,29.5000001 26.0000003,28.8349703 26.0000003,28.0014241 L26.0000003,23.5000001 L29.4902251,23.5000002 C30.8763357,23.5000002 31.2439521,22.6751916 30.3054161,21.6512985 L21.6719008,12.2325898 Z M21.341748,14.3645316 C21.1530056,14.1632064 20.8433515,14.1670914 20.6582514,14.3645316 L13.5,21.9999998 L17.5000001,21.9999999 L17.5000002,27.5089956 C17.5000002,27.7801703 17.7329027,28.0000008 18.0034229,28.0000008 L23.996577,28.0000008 C24.2746097,28.0000008 24.4999997,27.7721203 24.4999997,27.5089956 L24.4999997,21.9999999 L28.5,21.9999999 L21.341748,14.3645316 Z' id='Shift'></path>
					</g>
				</g>
			</g>
		</svg>"
	}
	smileys: "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='17px' height='16px' viewBox='0 0 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
				<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
				<title>:D</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
					<g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-86.000000, -638.000000)'>
						<g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'>
							<g id=':D' transform='translate(87.000000, 230.500000)' sketch:type='MSShapeGroup'>
								<circle id='Head' stroke='#4A5461' stroke-width='0.789473684' cx='7.5' cy='7.5' r='7.5'></circle>
								<path d='M7.5,13.5263158 C10.2686907,13.5263158 12.5131579,10.3684212 12.5131579,9.18421045 C12.5131579,7.60526317 11.4389098,9.18421043 7.5,9.18421053 C3.56109023,9.18421062 2.48684211,7.60526317 2.48684211,9.18421045 C2.48684211,10.368421 4.73130935,13.5263158 7.5,13.5263158 Z M7.5,10.9605263 C8.93233083,11.1578947 11.7969925,10.368421 11.7969925,9.44423552 C11.7969925,8.78947368 10.8762084,9.57894727 7.5,9.77631579 C4.12379162,9.57894743 3.20300872,8.78947369 3.20300752,9.44423552 C3.20300582,10.368421 6.06766917,11.1578947 7.5,10.9605263 Z' id='Smile' fill='#4A5461'></path>
								<path d='M5.23684211,6.3236598 C5.64378876,6.3236598 5.97368421,5.88183554 5.97368421,5.33681769 C5.97368421,4.79179985 5.64378876,4.34997559 5.23684211,4.34997559 C4.82989545,4.34997559 4.5,4.79179985 4.5,5.33681769 C4.5,5.88183554 4.82989545,6.3236598 5.23684211,6.3236598 Z M9.73684211,6.3236598 C10.1437888,6.3236598 10.4736842,5.88183554 10.4736842,5.33681769 C10.4736842,4.79179985 10.1437888,4.34997559 9.73684211,4.34997559 C9.32989545,4.34997559 9,4.79179985 9,5.33681769 C9,5.88183554 9.32989545,6.3236598 9.73684211,6.3236598 Z' id='Eyes' fill='#4A5461'></path>
							</g>
						</g>
					</g>
				</g>
			</svg>"

	symbols: "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='16px' height='17px' viewBox='0 0 15 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
				<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
				<title>Objects &amp; Symbols</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
					<g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-304.000000, -638.000000)' fill='#4A5461'>
						<g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'>
							<g id='Objects-&amp;-Symbols' transform='translate(304.000000, 230.000000)'>
								<g id='Thing' transform='translate(0.000000, 0.500000)' sketch:type='MSShapeGroup'>
									<rect id='Rectangle-1209' x='0' y='0' width='7' height='1'></rect>
									<rect id='Rectangle-1209' x='0' y='2' width='7' height='1'></rect>
									<rect id='Rectangle-1211' x='3' y='3' width='1' height='4'></rect>
								</g>
								<path d='M11.75,0.159263978 L11.75,0 L11,0 L11,5.091493 C10.59344,4.94221392 10.0639662,4.96453224 9.55715399,5.19017957 C8.69849293,5.5724801 8.23003835,6.39365621 8.51083141,7.02432774 C8.79162447,7.65499928 9.71533454,7.85634375 10.5739956,7.47404321 C11.2761183,7.16143803 11.7173393,6.55538972 11.7013595,6 L11.75,6 L11.75,1.39385056 C12.3175908,1.59590037 13,2.0817456 13,3.25 C13,4.25 12.75,5.5 12.75,5.5 C12.75,5.5 13.75,4.75 13.75,2.5 C13.75,1.02256101 12.5642674,0.407473019 11.75,0.159263978 Z' id='Note' sketch:type='MSShapeGroup'></path>
								<text id='&amp;' sketch:type='MSTextLayer' font-family='SF UI Display' font-size='9.5' font-weight='normal'>
									<tspan x='0.25' y='16'>&amp;</tspan>
								</text>
								<text id='%' sketch:type='MSTextLayer' font-family='SF UI Display' font-size='9.5' font-weight='normal'>
									<tspan x='7.75' y='16'>%</tspan>
								</text>
							</g>
						</g>
					</g>
				</g>
			</svg>"
	travel: "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='17px' height='16px' viewBox='0 0 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
				<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
				<title>Transport</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
					<g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-241.000000, -638.000000)'>
						<g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'>
							<g id='Transport' transform='translate(241.500000, 230.000000)' sketch:type='MSShapeGroup'>
								<path d='M0,6 L1,6 L1,15 L0,15 L0,6 Z M15,4 L16,4 L16,15 L15,15 L15,4 Z M3.5,0 L4.5,0 L4.5,7 L3.5,7 L3.5,0 Z M1,6 L3.5,6 L3.5,7 L1,7 L1,6 Z M4.5,0 L9.5,0 L9.5,1 L4.5,1 L4.5,0 Z M9.5,0 L10.5,0 L10.5,6 L9.5,6 L9.5,0 Z M10.5,4 L15,4 L15,5 L10.5,5 L10.5,4 Z' id='Skyline' fill='#4A5461'></path>
								<g id='Windows' transform='translate(2.000000, 2.000000)' fill='#4A5461'>
									<rect id='Window' x='0' y='6' width='1' height='1'></rect>
									<rect id='Window' x='3.5' y='0' width='1' height='1'></rect>
									<rect id='Window' x='5.5' y='0' width='1' height='1'></rect>
									<rect id='Window' x='5.5' y='2' width='1' height='1'></rect>
									<rect id='Window' x='3.5' y='2' width='1' height='1'></rect>
									<rect id='Window' x='11' y='4' width='1' height='1'></rect>
									<rect id='Window' x='11' y='6' width='1' height='1'></rect>
								</g>
								<g id='Car' transform='translate(2.500000, 6.500000)'>
									<path d='M8.5,8 L2.5,8 L2.5,9.5 L0.5,9.5 L0.5,7.8681145 C0.201202192,7.69582702 0,7.37091363 0,6.9906311 L0,5.0093689 C0,4.45190985 0.444836974,4 0.995577499,4 L10.0044225,4 C10.5542648,4 11,4.44335318 11,5.0093689 L11,6.9906311 C11,7.3653315 10.7990244,7.69234519 10.5,7.86649002 L10.5,9.5 L8.5,9.5 L8.5,8 Z M1.75,6.5 C2.16421356,6.5 2.5,6.16421356 2.5,5.75 C2.5,5.33578644 2.16421356,5 1.75,5 C1.33578644,5 1,5.33578644 1,5.75 C1,6.16421356 1.33578644,6.5 1.75,6.5 Z M9.25,6.5 C9.66421356,6.5 10,6.16421356 10,5.75 C10,5.33578644 9.66421356,5 9.25,5 C8.83578644,5 8.5,5.33578644 8.5,5.75 C8.5,6.16421356 8.83578644,6.5 9.25,6.5 Z M0.5,7 L10.5,7 L10.5,7.5 L0.5,7.5 L0.5,7 Z M3,6.5 L8,6.5 L8,7 L3,7 L3,6.5 Z' id='Body' fill='#4A5461'></path>
									<path d='M1.5,4.5 L1.5,3 C1.5,1.34314575 2.83902013,0 4.50166547,0 L6.49833453,0 C8.15610859,0 9.5,1.34651712 9.5,3 L9.5,5' id='Roof' stroke='#4A5461'></path>
								</g>
							</g>
						</g>
					</g>
				</g>
			</svg>"
}
# Device frames 
exports.frames =  {

# Fullscreen
	"fullscreen" : { height: window.innerHeight, width: window.innerWidth,	scale:1, mobile:false, platform:"web"}

	# iPhones
	## 5S
	"apple-iphone-5s-space-gray": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
	"apple-iphone-5s-silver": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
	"apple-iphone-5s-gold": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}

	## 5c
	"apple-iphone-5c-green": { height: 1136, width: 640,scale: 2, mobile:true, platform:"iOS"}
	"apple-iphone-5c-blue": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
	"apple-iphone-5c-red": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
	"apple-iphone-5c-white": { height: 1136, width: 640,scale: 2, mobile:true, platform:"iOS"}
	"apple-iphone-5c-yellow": { height: 1136, width: 640,scale: 2, mobile:true, platform:"iOS"}
	"apple-iphone-5c-pink": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}

	## 6s
	"apple-iphone-6s-space-gray" : { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}
	"apple-iphone-6s-silver": { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}
	"apple-iphone-6s-gold": { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}
	"apple-iphone-6s-rose-gold": { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}

	## 6s plus
	"apple-iphone-6s-plus-gold": { height: 2208, width: 1242, scale: 3, mobile:true, platform:"iOS"}
	"apple-iphone-6s-plus-silver": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}
	"apple-iphone-6s-plus-space-gray": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}
	"apple-iphone-6s-plus": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}

	# iPads

	## Air 
	"apple-ipad-air-2-gold": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}
	"apple-ipad-air-2-silver": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}
	"apple-ipad-air-2-space-gray": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}

	## Mini
	"apple-ipad-mini-4-gold": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}
	"apple-ipad-mini-4-space-gray": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}
	"apple-ipad-mini-4-silver":{ height: 2048, width: 1536, scale: 2, mobile:true, platform:"iOS"}

	## Pro
	"apple-ipad-pro-gold": { height: 2732, width: 2048, scale: 2, mobile:true, platform:"iOS"}
	"apple-ipad-pro-silver": { height: 2732, width: 2048, scale: 2, mobile:true, platform:"iOS"}
	"apple-ipad-pro-space-gray" : { height: 2732, width: 2048, scale: 2, mobile:true, platform:"iOS"}
}