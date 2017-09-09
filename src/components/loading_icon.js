import React from "react";

class LoadingIcon extends React.Component {
	render() {
		const background = {
			position: 'fixed',
			background: '#fff',
			width: '100%',
			height: '100vh',
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
			zIndex: '999999',
		};

		const loadingContainer = {
			position: 'relative',
		};

		const loadingIcon = {
			width: '155px',
			height: '155px',
			position: 'absolute',
			left: '50%',
			top: '50%',
			marginLeft: '-77.5px',
			marginTop: '-77.5',
		};

		const LogoIcon = {
			position: 'absolute',
			width: '150px',
			height: '150px',
			left: '25%',
			top: '23%',
		};

		return (
			<div id="icon-background" style={background}>
				<div style={loadingIcon}>
					<div style={loadingContainer}>
						<div data-loader="logo-circle"></div>						
					</div>
				</div>
			</div>
		);
	}
}

export default LoadingIcon;