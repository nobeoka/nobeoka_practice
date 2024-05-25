import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {
    const [user] = useAuthState(auth);

    return (
        <div>
            {user ? (
                <>
                    <UserInfo />
                    <SignOutButton />
                </>
            ) : (
                <SignInbButton />
            )}
        </div>
    );
}

export default Home;

function SignInbButton() {
    const signInWithGoogle = () => {
        //firebaseを使ってGoogleでサインインする
        signInWithPopup(auth, provider);
    };

    return (
        <button onClick={signInWithGoogle}>
            <p>Googleでサインイン</p>
        </button>
    );
}

function SignOutButton() {
    return (
        <button onClick={() => auth.signOut()}>
            <p>サインアウト</p>
        </button>
    );
}

function UserInfo() {
    return (
        <div className="userInfo">
            <img src={auth.currentUser.photoURL} alt="" />
            <p>{auth.currentUser.displayName}</p>
        </div>
    );
}
