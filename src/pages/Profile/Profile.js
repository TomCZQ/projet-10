import React, { useState } from "react";
import Button from "../../components/Button/Button";
import BalanceCard from "../../components/BalanceCard/BalanceCard";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/actions";
import "./Style/Profile.scss";

const Profile = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.user);
  const [toggleForm, setToggleForm] = useState(false);
  const [userName, setUserName] = useState("");

  const exampleAccount = {
    number: "123584",
    type: "checking",
    balance: 2564.62,
  };
  const exampleAccount2 = {
    number: "125584",
    type: "checking",
    balance: 486.21,
  };

  const exampleAccount3 = {
    number: "148584",
    type: "savings",
    balance: 56258.45,
  };

  const onUpdateUser = (e) => {
    e.preventDefault();
    const body = { userName };
    const closeForm = () => setToggleForm(false);
    updateUser(token, body, closeForm, dispatch);
  };

  return (
    <div className="bg-dark main">
      <div className="header">
        {toggleForm ? (
          <h1> Edit user infos </h1>
        ) : (
          <div className="header-button">
            <h1>
              Welcome back {user.firstName} {user.lastName} !
            </h1>
            <Button
              name="Edit name"
              onClick={() => setToggleForm(!toggleForm)}
            />
          </div>
        )}

        {toggleForm && (
          <form onSubmit={onUpdateUser}>
            <div className="input-label">
              <label>User name</label>
              <input
                id="username"
                placeholder={userName}
                onChange={(e) => setUserName(e.target.value)}
                //required
              />
            </div>

            <div className="input-label">
              <label>First name</label>
              <input id="firstname" value={user.firstName} disabled />
            </div>

            <div className="input-label">
              <label>Last name</label>
              <input id="lastname" value={user.lastName} disabled />
            </div>

            <div className="buttons">
              <Button type="submit" name="Save" />
              <Button
                onClick={() => setToggleForm(!toggleForm)}
                name="Cancel"
              />
            </div>
          </form>
        )}
      </div>

      <h2 className="sr-only">Accounts</h2>
      <BalanceCard account={exampleAccount} />
      <BalanceCard account={exampleAccount2} />
      <BalanceCard account={exampleAccount3} />
    </div>
  );
};

export default Profile;
