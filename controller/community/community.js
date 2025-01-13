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
        .populate({author}, {})
        .exec();

        if(!post) return res.status(404).json({ message : "게시글을 찾을 수 없습니다." });

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message : "게시글 상세 조회 실패", error});
    }
};

export {createPost, getPost, getPostById};