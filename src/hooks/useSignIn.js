import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";

const useSignIn = () => {
  const [authorizeUser, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const authorizeResult = await authorizeUser({
      variables: { username, password },
    });
    return authorizeResult
      ? authorizeResult.data?.authorize?.accessToken
      : null;
  };

  return [signIn, result];
};

export default useSignIn;
