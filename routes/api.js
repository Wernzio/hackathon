module.export = app => {
	app.get('/api', (req, res) => {
		res.send({ hey: 'hello' });
	});
};
