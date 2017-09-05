import React from 'react';

const Footer = () => {
	const url = 'http://mattwarren.us/'
	const text = '\u00A9 Matt Warren'

	return (
		<footer>
			<div>
				<p className="text-center">
					<a href={url}>{text}</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;