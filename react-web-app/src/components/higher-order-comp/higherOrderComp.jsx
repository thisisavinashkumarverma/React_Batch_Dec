export default function Demo() {
    var StatementComp = addAuthCheckToComp(UpdateStatement);
    var ViewTrans = addAuthCheckToComp(ViewTransactions);
    var UserLogout = addAuthCheckToComp(UserLogoutButton);
    var FDBtn = addLoggingToComp(TakeFD);
    console.log(FDBtn)
    return (
        <>
        <div>HOC</div>
            <StatementComp></StatementComp>
            <ViewTrans></ViewTrans>
            <UserLogout></UserLogout>
            <FDBtn></FDBtn>
        </>
        
    )
}

function TakeFD() {
    return (
        <>
            <button>Take FD from us</button>
        </>
    )
}

function UserLogoutButton() {   
    return (
        <>
           
                <button>User Logout</button>
              
            <hr />
        </>
    )
}

function UpdateStatement() {
    return (
        <div>
            <a href="http://updatestament">
                Update stamerment link
            </a>
        </div>
    )
}

function ViewTransactions() {
    return (
        <div>
            <a href="http://updatestament">
                View Transactions  link
            </a>
        </div>
    )
}

function addAuthCheckToComp(WrappedComp) {
    return function EnhancedCompWithAuth() {
        var isAuth = false;
        if (isAuth) {
            return <WrappedComp></WrappedComp>
        } else {
            return (<><b>U are not authrised for this action</b><br></br></>);
        }
    }
}

function addLoggingToComp(WrappedComp) {
    return function AddLoggin() {
        return (
                <>
                    <div>Logging Enabled</div>
                    <WrappedComp></WrappedComp>
                </>
        )
    }
}

