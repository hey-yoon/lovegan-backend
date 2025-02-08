import Comment from "../../models/comment_schema.js";
import Post from "../../models/post_schema.js"
import User from "../../models/user_schema.js"

// 게시글 조회
const getPost = async (req, res) => {
    // console.log(req.body)

    try {
        const posts = await Post.find()
        console.log(posts)
        // .populate("author")
        // // .exec();

        res.status(200).json(posts);
    } catch(error) {
        res.status(500).json({ message : "게시글 조회 실패", error});
    }
};

// 게시글 작성
const createPost = async (req, res) => {
    const { author, title } = req.body;

    try {
        const newPost = await Post.create({
            author, 
            title,
        });

        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message : "게시글 생성 실패", error });
    }
};


// 특정 게시글 조회
const getPostById = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findById(id)
        .populate({author})
        .exec();

        if(!post) return res.status(404).json({ message : "게시글을 찾을 수 없습니다." });

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message : "게시글 상세 조회 실패", error});
    }
};

// 댓글
// 댓글 조회
const getComment = async (req, res) => {
    try {
        const comments = await Comment.find().lean()
        const commentCount = comments.length;
        // .populate("author")
        console.log(comments)

        res.status(200).json({comments, commentCount});
    } catch (error) {
        res.status(500).json({ message : "댓글 조회 실패", error});
    }
};

// 댓글 추가
const addComment = async (req, res) => {
    try {
        const {content} = req.body;

        // if (!author || !content) {
        //     return res.status(400).json({ message: "작성자와 내용은 필수입니다." });
        // }

        const newComment = new Comment({
            // author : author,  // 작성자 ID 또는 이름
            content : content, // 댓글 내용
            createdAt: new Date(), // 댓글 작성 시간
        });

        const saveComment = await newComment.save();

        res.status(200).json(saveComment);

    } catch (error) {
        res.status(500).json({ message : "댓글 저장 실패", error });
    }
};
 
// 대댓글 추가
const addReply = async (req, res) => {
    try {
        const { id, reply } = req.body;
        const parentComment = await Comment.findById(id);

        if(!parentComment) {
            return res.status(200).json({ message : "댓글을 찾을 수 없습니다." })
        }

        parentComment.replies.push(reply);

        const updatedComment = await parentComment.save();
        res.status(201).json(updatedComment);
    } catch (error) {
        res.status(500).json({ message : "대댓글 저장 실패", error });
    }
};

// 게시글 조회
const getMyPosts = async (req, res) => {
    console.log(req.body);
    console.log("들어옴");
    // console.log(req.body)
    const { email } = req.body;
    // console.log(email);
    const user = await User.findOne({ email });
    console.log(user._id);

    try {
        const myPosts = await Post.find({ userRef: user._id });
        console.log("여기" + myPosts.length)

        if (myPosts.length === 0) {
            return res.status(201).json({
                success: true,
                message: '작성한 게시물이 없습니다.',
                myPosts: [],
            });
        }

        return res.status(200).json({
            success: true,
            myPosts,
        });
    } catch (error) {
        console.error('Error fetching:', error);
        return res.status(500).json({ success: false, message: '서버 오류가 발생했습니다.' });
    }
};

export {createPost, getPost, getPostById, getComment, addComment, addReply, getMyPosts};