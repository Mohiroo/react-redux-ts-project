import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommentItem from "../../components/CommentItem/CommentItem";
import Button, { ButtonMode } from "../../components/UI/button/Button";
import Loader from "../../components/UI/loader/Loader";
import { useAppSelector, useAppDispatch } from "../../hooks/useTypedSelector";
import { PostAPI } from "../../services/PostService";
import { fetchUserById } from "../../store/action-creators/FetchData";
import styles from "./Post.module.scss";

const Post: FC = () => {
  const params = useParams!().id;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    data: PostID,
    error: errorPostID,
    isLoading: isLoadingPostID,
    isSuccess: isSuccessPostID,
  } = PostAPI.useGetPostByIDQuery(Number(params));

  const {
    data: postComments,
    error: errorComments,
    isLoading: isLoadingComments,
    isSuccess: isSuccessComments,
  } = PostAPI.useGetCommentsToPostQuery(Number(params));

  const { userId, isLoadingUserId, errorUserId } = useAppSelector(
    (state) => state.userByIdReducer
  );

  const isLoading = isLoadingPostID || isLoadingComments || isLoadingUserId;
  const error = errorPostID && errorComments && errorUserId;
  const success = isSuccessPostID && isSuccessComments && userId;

  useEffect(() => {
    PostID?.userId && dispatch(fetchUserById(String(PostID?.userId)));
  }, [PostID]);

  return (
    <div>
      {error && <h1 className={styles.post__title}>Произошла ошибка</h1>}
      {isLoading && (
        <div className={styles.post_id}>
          <Loader />
        </div>
      )}
      {success && (
        <div className={styles.post_id}>
          <div className={styles.post}>
            <h1 className={styles.post__title}>{PostID?.title}</h1>
            <p className={styles.post__author}>
              Пост {PostID?.id}{" "}
              <Button
                mode={ButtonMode.user}
                text={userId.username}
                onClick={() => navigate(`/user/${userId.id}`)}
              />
            </p>
            <p className={styles.post__body}>{PostID?.body}</p>
          </div>
          <div>
            <h2>Комментарии</h2>
            {postComments?.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
