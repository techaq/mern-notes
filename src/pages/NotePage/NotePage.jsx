import { checkToken } from "../../utilities/users-service";

function NotePage() {
  const handleCheckToken = async () => {
    try {
      const expDate = await checkToken();
      alert(expDate.toLocaleString());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1> Note Page </h1>
      <button onClick={handleCheckToken}> Check Log In Expiration</button>
    </div>
  );
}

export default NotePage;
