const user = require("../models/user")
const profiles = require("../models/profiles")
const posts = require("../models/posts")
const likes = require("../models/likes")
const comments = require("../models/comments")
const friendships = require("../models/friendships")

function createSchema(){
    user;
    profiles;
    posts;
    likes;
    comments;
    friendships;
}

createSchema();