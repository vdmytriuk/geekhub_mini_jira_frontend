import {FC} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const HomePage:FC = () => {
    const {email, password} = useTypedSelector(state => state.user);

    return (
        <div>
            Home page

            hello <strong>{email}</strong>! your password is <strong>{password}</strong>
        </div>
    );
};

export default HomePage;