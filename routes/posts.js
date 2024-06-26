const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

// router.get("/",(req,res)=>{
//     res.send("lol done");
// })

// create a post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const SavedPost = await newPost.save();
    res.status(200).json(SavedPost);
  } catch (error) {
    res.status(500).json("not created", err);
  }
});

// update a post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("profile has been updated");
    } else {
      res.status(403).json("you can update only your post ");
    }
  } catch (error) {
    res.status(500).json(err);
  }
});

// delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("profile has been deleted");
    } else {
      res.status(403).json("you can delete only your post ");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// like a a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(500).json("The post has been disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a post.
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(err);
  }
});



// get all post
router.get("/timeline/all", async (req, res) => {
  let postArray = [];
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendposts = await Promise.all(
      currentUser.followings.map((friendId) => {
         return Post.find({ userId: friendId });
      })
    );
    res.json(userPosts.concat(...friendposts));
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
