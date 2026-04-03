import { useSelector } from 'react-redux'

export default function Component1() {
    const count = useSelector((state) => state.counter.value)
    const UserName = useSelector((state) => state.counter.name);
    return (
        <>
            Component 1  - {count} - {UserName}
        </>
    )
}