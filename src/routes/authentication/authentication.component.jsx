import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { AuthenticationContainer } from "./authentication.styles.jsx";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../store/user/user.selector";
import Spinner from "../../components/spinner/spinner.component";

const Authentication = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <AuthenticationContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <SignInForm />
          <SignUpForm />
        </>
      )}
    </AuthenticationContainer>
  );
};

export default Authentication;
