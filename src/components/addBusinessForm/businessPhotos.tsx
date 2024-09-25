function BusinessPhotos(props:any){
const {state,dispatch}=props;

const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
dispatch({
    type:'photos',
    photos:e.target.files
})
}

return(
    <div>
        <h5>Upload photos of business</h5>
        <input type="file" name="fileUpload" accept=".jpg"  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleInputChange(e)}/>
    </div>
)
}
export default BusinessPhotos;