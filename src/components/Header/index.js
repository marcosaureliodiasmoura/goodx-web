import React from 'react';
import {
  Container, Search, User, Container2, Logout,
} from './styles';

import AmountDonates from '../donates/amount';
import CalculateDonates from '../donates/calculation';

function handleLogout() {
  localStorage.removeItem('@meu-Token');
}

console.log(localStorage.getItem('@meu-Token'));

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>
    <div>
      <small>Total de Doações: </small>
      <span>
        R$:
        {' '}
        <CalculateDonates />
      </span>
    </div>
    <Container2>
      <span>
        <AmountDonates />
      </span>
      <span>Boas ações</span>
    </Container2>
    <User>
      <img
        src="https://scontent.frec20-1.fna.fbcdn.net/v/t1.0-9/12809623_824124747733575_480415714387305674_n.jpg?_nc_cat=110&_nc_ht=scontent.frec20-1.fna&oh=7a0629d571ed8c924c1cf56b17e0eb90&oe=5D56C1BB"
        alt="imagem"
      />
      Nome do usuário
    </User>
    <Logout href="/signin" onClick={handleLogout}>
      Sair
    </Logout>
  </Container>
);

export default Header;
