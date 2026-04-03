// import {UserDataContext} from './common';
import {useUserData} from './common';

export default function UseContextDemo() {
    var data = useUserData();
    return (
        <>
            Sample - useContext - {data.name} - {data.age}
        </>
    )
}