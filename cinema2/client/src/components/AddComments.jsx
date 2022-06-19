
function Comments(props) {
    
    const API_URL = 'http://localhost:5000/comments/add'


    const postComments = async () =>{
        axios.post(API_URL)
        .then((response) => {
            // setComments(response.data)
            console.log(response)
        })
        .catch((error)=>{
          console.log(error);
        })
      }
    
    useEffect(()=>{
        postComments()
    },[])

}

export default Comments