import './Friends.css'
export default function Friend({friende}){
    const {name,email} = friende;
    // console.log(friende)
    return(
        <div className="frind">
            <h3>Name : {name}</h3>
            <h4>Email : {email}</h4>
        </div>
    )
}