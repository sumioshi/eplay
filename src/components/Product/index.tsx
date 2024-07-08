import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="https://via.placeholder.com/222x250" alt="Imagem do produto" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, veniam? Modi
      officia nesciunt explicabo esse blanditiis iste, cupiditate repellat illo
      fugit distinctio perspiciatis voluptates iure nostrum quas optio quia
      deserunt!
    </Descricao>
  </Card>
)

export default Product
