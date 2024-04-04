// I got the logic for the function from Jim's code
const loggedIn = (req, res, next) => {
    if (req.isAuthenticated()) return next ();
    res.redirect('auth/google');
}


module.exports = {
    loggedIn
}