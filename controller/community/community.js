import Comment from "../../models/comment_schema.js";
import Post from "../../models/post_schema.js"

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
        const comments = Comment.find()
        // .populate("author")
        console.log(comments)

        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message : "댓글 조회 실패", error});
    }
};

// 댓글 추가
const addComment = async (req, res) => {
    try {
        const { id, content } = req.body;
        const newComment = new Comment({ id, content });
        const savedComment = await newComment.save();
        res.status(200).json(savedComment);
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

export {createPost, getPost, getPostById, getComment, addComment, addReply};