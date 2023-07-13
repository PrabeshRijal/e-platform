import { Link } from "react-router-dom"

const Breadcrumb = ({ title }) => {
    return (
        <div className="breadcrumb">
            <span><Link to="/">Home</Link> / {title}</span>
        </div>
    )
}

export default Breadcrumb