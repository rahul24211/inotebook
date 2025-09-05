import { useContext } from "react"
import NoteContext from "../pages/notes/noteContext"

const Alert = () => {

    const context = useContext(NoteContext)
    const { alert } = context

    return (
        <div style={{ height: '50px' }}>
            {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show text-capitalize`} role='alert'>
                <strong className=''></strong>  {alert.msg}
            </div>}
        </div>

    )
}

export default Alert
