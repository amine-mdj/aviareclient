import {useState ,useEffect} from 'react'
import {useQuery} from 'react-query'
import Singlecanari from '../components/Singlecanari'
import Breadcrumbs from '../components/Breadcrumbs'
import './canarilist.css'
import ReactSlider from 'react-slider'
import styled from 'styled-components'
import axios from 'axios'


const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 25px;
`;

const StyledThumb = styled.div`
    height: 25px;
    width: 5px;
    background-color: #478B11;
    cursor: grab;
`



const Thumb = (props, state) => <StyledThumb {...props}></StyledThumb>

const StyledTrack = styled.div`
    height:5px;
    top: 10px;
    bottom: 0;
    background: ${props => (props.index === 2 ? 'gray' : props.index === 1 ? '#478B11' : 'gray')};
    border-radius: 999px;
`

const Track = (props, state) => <StyledTrack {...props} index={state.index} />


const fetchData = (page) => {
  return axios.get(`https://aviaire-api.onrender.com/guest/paginatedMaterials?page=${page}`)
}


const Materiels = ()=>{
  const [page, setPage] = useState(0)

  const {data} = useQuery(['materiels-perpage', page],()=> fetchData(page),{
    keepPreviousData:true,
    
  } )
  const [value, setValue] = useState([0, 100])
  const [data2, setData2] = useState([])
  const [numberofpages, setNumberofpages] = useState(0)
  const [open, setOpen] = useState(false)
  
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/canarilist?page=${page}`)
  //     .then((res) =>{
      
  //     setData2(res.data.allDatacvrt)
  //     setNumberofpages(res.data.numberofpages)
  //     })
  //     .catch((err) => console.log(err, "it has an error"));
  // },[page]);

  console.log(data)

  const handleprev = ()=>{
      setPage(p =>{
        if(p === 0) return p;
        return p-1;})
  }

  const handlenext = ()=>{
      setPage(p =>{
        if(p === numberofpages -1) return p;
        return p+1;})
  }

    const items = data?.data.allDatacvrt.map(item => <Singlecanari image={item.b64} title={item.title} price={item.price}/>)


    return (<div className='oouterdiv'>
      <div className='bbreadcrumbs'>
      <Breadcrumbs/>
      </div>
      <div className='filterbox'>
        <div className='pricebox'>
          <h2>Filtrer par tarif</h2>
          <p>utiliser le slider svp</p>
          <StyledSlider  
          value={value} 
          onChange={value => setValue(value)} 
          renderTrack={Track} 
          renderThumb={Thumb} />
          <p>prix : {value[0]} - {value[1]} euro</p>
          <button>Filtrer</button>
          <div className='groupe'>
          <i class="fa-solid fa-chevron-right cstm"></i>
          <h2>filter par groupe</h2>
          </div>
        </div>
    <div className='canarilist'>
        {items}
    </div>
    </div>
    <div className='pagination'>
    <p>{numberofpages}</p>
    <button style={{height:'50px',width:'50px'}} className='btnpag' disabled={page===0} onClick={handleprev}>prev</button>
    <button style={{height:'50px',width:'50px'}} className='btnpag' disabled={page===numberofpages-1} onClick={handlenext}>next</button>
    </div>
    </div>)
} 

export default Materiels