function evaluateScore(req, res, score) {

if (score < .9 ) {
    console.log("Score is <.9, blocking traffic");
    res.setHeader("Content-Type", "text/html")
    res.redirect(301, '/blocked');
  }

}

export {evaluateScore};