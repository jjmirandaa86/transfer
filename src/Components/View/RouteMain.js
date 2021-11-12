import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Login from "./Login";
import Main from "./Main";

const RouteMain = () => {
  const sessionStore = useSelector((store) => store.user.session);
  console.log("sessionStore.api_token->");
  console.log(sessionStore.api_token);
  return (
    <>
      {/* //Valido si hay session */}
      {sessionStore.api_token === undefined ? (
        <>
          <Login />
          <Redirect to="/" />
        </>
      ) : (
        <>
          <Main />
          <Redirect to="/main" />
        </>
      )}
    </>
  );
};

export default RouteMain;
