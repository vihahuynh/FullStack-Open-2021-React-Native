import { useMutation } from "@apollo/client";
import { REVIEW } from "../graphql/mutations";

const useSignIn = () => {
  const [reviewRepository, result] = useMutation(REVIEW);

  const review = async ({ ownerName, repositoryName, rating, text }) => {
    const reviewResult = await reviewRepository({
      variables: { ownerName, repositoryName, rating, text },
    });

    return reviewResult ? reviewResult.data?.createReview?.repositoryId : null;
  };

  return [review, result];
};

export default useSignIn;
