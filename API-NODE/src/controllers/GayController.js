exports.GayDa = (req, res) => {
    let gayId = req.params.id;
    return res.json( {'idGay': gayId, 'nomedo gay': 'Artur'} );
}
