import React, {useState, useEffect, ReactFragment} from 'react';
import { Redirect } from 'react-router-dom';
import firebase from "./Firebase";

interface State {
    signIn: boolean,
    signedIn: boolean
    isSign: boolean
}

const Auth: React.FC<State> = ({ isSign = false }) => {
    const [signIn, setSignIn] = useState(isSign);
    const [signedIn, setSignedIn] = useState(isSign)

    let _isMounted = false

    useEffect(() => {
        _isMounted = true;

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                if (_isMounted) {
                    setSignIn(true)
                    setSignedIn(true)
                }
            } else {
                if (_isMounted) {
                    setSignIn(true)
                    setSignedIn(false)
                }
            }
        })

        return () => {
            _isMounted = false;
        }
    }, []);

    return (
        <div>
            {!signIn &&
            <div>
                <h1>now loading</h1>
            </div>
            }
            {!signedIn &&
            <Redirect to="/signup" />
            }
        </div>
    )
}

export default Auth;
