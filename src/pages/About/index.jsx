import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../../components/MainComponents';
import { PageArea } from './styled';
import AdItem from '../../components/partials/AdItem';
import OlxAPI from '../../helpers/OlxAPI';

const Page = () => {
  const [adList, setAdList] = useState([]);

  useEffect(() => {
    const getRecentAds = async () => {
      const json = await OlxAPI.getAds({
        sort: 'desc',
        limit: 8,
      });
      setAdList(json.ads);
    };
    getRecentAds();
  }, []);

  return (
    <div>
      <PageContainer>
        <h2>Página Sobre</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/edit-registration">Alterar Cadastro</Link></li>
        </ul>
        <PageArea>
          <h2>Meus Anúncios</h2>
          <div className="list">
            {adList.map((i, k) => (
              <AdItem key={k} data={i} edit />
            ))}
          </div>
          <Link to="/ads" className="seeAllLink">
            Ver todos
          </Link>
          <hr />O Lorem Ipsum é um texto modelo da indústria tipográfica e de
          impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
          estas indústrias desde o ano de 1500, quando uma misturou os
          caracteres de um texto para criar um espécime de livro.
        </PageArea>
      </PageContainer>
    </div>
  );
};

export default Page;
