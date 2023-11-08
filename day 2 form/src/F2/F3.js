const F3 = () =>{
    return(
        <>
            <div className="div1">
                    <h1>Forms</h1><br/>
            </div><br/>
            <div className="div2">
                <form>
                        <label>First Name :</label><br/>
                        <input type="text"></input><br/><br/>
                        <label>Last Name :</label><br/><br/>
                        <input type="text"></input><br/><br/>
                        <label>Age :</label><br/><br/>
                        <input type="number"></input><br/><br/>
                </form>
                        <input type="button" value="Submit" onClick={a1}></input>
            </div>
        </>
    )

}
function a1(){
    alert("Form Submitted Successfully.");
}
export default  F3