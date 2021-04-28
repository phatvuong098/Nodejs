const router = require('express').Router()

router.post('/postAge', function (req, res) {
    console.log('Got body:', req.body.age);
    res.send('aaa');
})

router.get('/mess' , (req , res)=>{

   res.send('hello from simple server :)')

})

module.exports = router