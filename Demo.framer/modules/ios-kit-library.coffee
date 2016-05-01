# Library

layer = new Layer
exports.layerProps = Object.keys(layer.props)
exports.layerProps.push "superLayer"
exports.layerStyles = Object.keys(layer.style)
layer.destroy()

exports.assets = {
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
}