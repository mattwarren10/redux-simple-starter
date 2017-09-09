import React from 'react';

const Footer = () => {
	const url = 'http://mattwarren.us/'
	const link = '\u00A9 Matt Warren'
	const disclosure = ' | This is not a product of Youtube'

	return (
		<footer>
			<div>
				<p className="text-center">
					<a href={url}>{link}</a>
					{disclosure}
				</p>
			</div>
		</footer>
	);
};

export default Footer;