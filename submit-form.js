app.post('/submit-form', (req, res) => {
    const username = req.body.username
    const number = req.body.number
    //...
    res.end()
  })