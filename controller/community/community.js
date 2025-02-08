import Comment from "../../models/comment_schema.js";
import Post from "../../models/post_schema.js"

// 게시글 조회
const getPost = async (req, res) => {

    try {
        const posts = await Post.find().lean()
        console.log(posts)

        res.status(200).json(posts);

    } catch(error) {
        res.status(500).json({ message : "게시글 조회 실패", error});
    }
};

// 각 게시글 조회
const getPostById = async (req, res) => {
    
    try {
        const { id } = req.params;
        console.log(req.params);

        const posts = await Post.findById(id).lean()
        console.log(posts)

        if(!posts) return res.status(404).json({ message : "게시글을 찾을 수 없습니다." });

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message : "게시글 상세 조회 실패", error});
    }
};

// 게시글 상세 페이지 조회
// const getPostDetailById = async (req, res) => {
//     try {

//         const { postId } = req.params;
//         console.log(req.params);
        
//         const postDetails = await postDetail.find(postId).lean();
//         console.log(postDetails)

//         if(!postDetails) return res.status(404).json({ message : "게시글 상세 페이지를 찾을 수 없습니다." });

//         res.status(200).json(postDetails);

//     } catch (error) {
//         res.status(500).json({ message : "게시글 상세 페이지 조회 실패", error});
//     }
// };

// 댓글
// 댓글 조회
const getComment = async (req, res) => {
    try {
        const comments = await Comment.find().lean()
        const commentCount = comments.length;
        console.log(comments)
        // console.log(commentCount);

        res.status(200).json({comments, commentCount});
    } catch (error) {
        res.status(500).json({ message : "댓글 조회 실패", error});
    }
};

// 댓글 추가
const addComment = async (req, res) => {
    try {
        const {content, post} = req.body;
        console.log(req.body)
        
        if (!content || !post) {
            return res.status(400).json({ message: "내용과 postId는 필수입니다." });
        }

        const addNewComment = new Comment({
            content, // 댓글 내용
            post : req.body.post,
            createAt: new Date(),
            updatedAt: new Date(),
        });

        // const comments = await Comment.find().lean();
        // console.log(comments);

        await addNewComment.save();

        console.log("저장 완료: ", addNewComment)

        if(!addNewComment) {
            return res.status(500).json({ message : "댓글 저장 후 가져오는데 실패함."});
        }

        // 성공 응답
        return res.status(201).json({
            addCommentSuccess: true,
            message: "댓글이 성공적으로 등록되었습니다.",
            newComment: addNewComment
        });

    } catch (error) {
        console.error("서버 오류 :", error);
        res.status(500).json({ message : "댓글 저장 실패", error });
    }
};
 
// 대댓글 추가
const addReply = async (req, res) => {
    try {
        const { id } = req.body;
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

export {getPost, getPostById, getComment, addComment, addReply};