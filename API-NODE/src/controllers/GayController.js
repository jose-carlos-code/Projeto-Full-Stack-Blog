exports.GayDa = (req, res) => {
    let gayId = req.body.id;
    if(gayId === 3){
        return res.json( {'idGay': gayId, 'nomedo gay': 'Artur'} );
    }
}
