import passJwt from 'passport-jwt';
import mongoose from 'mongoose';
import keys from '../config/key.js'

const JwtStrategy = passJwt.Strategy;
const ExtractJwt = passJwt.ExtractJwt;
const User = mongoose.model("users");
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

opts.secretOrKey = keys.secretOrKey;
export default function(passport) {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};