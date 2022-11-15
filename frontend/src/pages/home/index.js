import React, { useEffect, useState } from 'react';
import { PageContainer} from '../../components/MainComponents';
import { PageArea, SearchArea } from './styled';
import useApi from '../../helpers/OlxApi';
import { Link } from 'react-router-dom';
import AdItem from '../../components/partials/AdItem';


const Home = () =>{

  const api = useApi();

  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [adList, setAdList] = useState([]);
    
  //pegando o resultado da api
  useEffect(() => {
    const getSates = async () => {
      const sList = await api.getStates();
      setStateList(sList);
    }
    getSates();

  },[]);

  useEffect(() =>{
    const getCategories = async () => {
      const cats = await api.getCategories();
      setCategories(cats);
    }
    getCategories();

  },[]);

  useEffect(()=>{
    const getRecentAds = async () => {
      const json = await api.getAds({
        sort:'desc',
        limit:8
      });
      setAdList(json.ads);

    } 
    getRecentAds();
  },[])

  return(
    <>
      <SearchArea>
        <PageContainer>
          <div className='searchBox'>
            <form method='Get' action='/ads'>
              <input type='text' name='q' placeholder='O que você procura ?'/>
              <select name='state'>
                {stateList.map((i,k)=>
                  <option value={i.name}>{i.name}</option>)}

              </select>
              <button>Pesquisar</button>
            </form>
          </div>
          <div className='categoryList'>
            {categories.map((i,k)=>
            <Link key={k} to={`/ads?cat=${i.slug}`} className='categoryItem'>
              <img src={i.img} alt=''/>
              <span>{i.name}</span>
            </Link>)}

          </div>
        </PageContainer>
      </SearchArea>

      <PageContainer>
        <PageArea>
          <h2>Anúncios Recentes</h2>
          <div className='list'>
              {adList.map((i ,k) =>
                <AdItem key={k} data={i}/>
              )}
          </div>
          <Link to='/ads' className='seeAllLink'>Ver todos</Link>
          <hr/>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
          classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
          a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
          consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
        </PageArea>
      </PageContainer>
    </>
  );
}

export default Home;