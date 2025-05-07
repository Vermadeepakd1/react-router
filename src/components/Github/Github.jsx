import { useLoaderData} from 'react-router-dom'

function Github(){
    const data = useLoaderData()
    console.log(data)
    // const [data, setData] = useState([])
    // useEffect(() => {
        
    //     fetch('https://api.github.com/users/vermadeepakd1')
    //         .then((response) => response.json())
    //         .then(Data => {
    //             console.log(Data)
    //             setData(Data)
    //     })
    // }, [])
    

  return (
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
          <h3>Github followers: {data.followers}</h3>
          <h3>Public Repos : {data.public_repos}</h3>
          
          <img className='center rounded-full' src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github
