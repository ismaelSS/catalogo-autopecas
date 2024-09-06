export interface iDataBase {
  carParts: {
    id: number
    name: string
    carModel: string
    brand: string
    price: number
    promotionalPrice?: number
    description: string
    image: string
    flashOffer?: boolean
    inStock?: boolean
    freeAssembly?: boolean
  }[]
}

export const dataBase: iDataBase = {
  carParts: [
    {
      id: 1,
      name: 'Filtro de Óleo',
      carModel: 'Civic',
      brand: 'Honda',
      price: 25.99,
      description: 'Filtro de óleo para motores 1.8 e 2.0',
      image:
        'https://dispemec-maverick-produtos.s3.amazonaws.com/loja/imagens/full/produto-11373-1.jpg',
      freeAssembly: true,
    },
    {
      id: 2,
      name: 'Pastilha de Freio Dianteira',
      carModel: 'Corolla',
      brand: 'Toyota',
      price: 150.5,
      promotionalPrice: 135,
      description: 'Pastilha de alta durabilidade para uso urbano',
      image:
        'https://images.tcdn.com.br/img/img_prod/1107048/n_1368c_jogo_pastilhas_de_freio_dianteira_corolla_altis_2_0_16v_corolla_se_g_1_8_16v_corolla_xei_1_8_171_1_b31bf51b7235ac8f580665e54c50cdf9.jpg',
      inStock: true,
      freeAssembly: true,
      flashOffer: true,
    },
    {
      id: 3,
      name: 'Velas de Ignição',
      carModel: 'Focus',
      brand: 'Ford',
      price: 89.9,
      description: 'Jogo de 4 velas para motores Flex',
      image:
        'https://a-static.mlcdn.com.br/450x450/jogo-kit-4-velas-ignicao-ford-focus-2005-a-2008-ngk-iridium/boxonlineoficial/kit4itr6f13ngk/9dc24709199ebd8845e815ae93044861.jpeg',
    },
    {
      id: 4,
      name: 'Filtro de Ar',
      carModel: 'Golf',
      brand: 'Volkswagen',
      price: 39.99,
      description: 'Filtro de ar de alto fluxo',
      image:
        'https://31b93296e4855c6e.cdn.gocache.net/loja/imagens/full/filtro-ar-kn-inbox-33-2128-golf-bora-a3-new-beetle.png',
    },
    {
      id: 5,
      name: 'Amortecedor Traseiro',
      carModel: 'Onix',
      brand: 'Chevrolet',
      price: 250.0,
      description: 'Amortecedor traseiro com maior resistência',
      image:
        'https://a-static.mlcdn.com.br/450x450/par-amortecedor-traseiro-onix-prisma-sonic-joy-hatch-cofap/sigapeca-go/cofgb27608n/d25ce71ae3c3e2e8edf2a6b86311db49.jpeg',
    },
    {
      id: 6,
      name: 'Bateria 60Ah',
      carModel: 'all',
      brand: 'all',
      price: 399.99,
      description: 'Bateria com alta durabilidade',
      image:
        'https://www.galaxcommerce.com.br/sistema/upload/1962/produtos/bateria-moura-50-ah-original-de-montadora-15-meses-de-garantia_2020-05-13_12-50-20_2.jpg',
      inStock: true,
    },
    {
      id: 7,
      name: 'Pneu 185/65 R15',
      carModel: 'all',
      brand: 'all',
      price: 320.0,
      description: 'Pneu com alta aderência em pista molhada',
      image:
        'https://gpneus.vteximg.com.br/arquivos/ids/160024-1000-1000/pneu-185-65-r15-92t-xl-contipowercontact-continental.jpg?v=637703548313030000',
    },
    {
      id: 8,
      name: 'Farol Dianteiro',
      carModel: 'Golf',
      brand: 'Volkswagen',
      price: 580.0,
      description: 'Farol com lâmpada halógena de alta intensidade',
      image:
        'https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/autoeiie/catalog/produtos/farol/34633d.png',
    },
    {
      id: 9,
      name: 'Disco de Freio',
      carModel: 'Focus',
      brand: 'Ford',
      price: 180.0,
      description: 'Disco de freio ventilado para maior desempenho',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_974074-MLB46979072570_082021-O.webp',
    },
    {
      id: 10,
      name: 'Retrovisor Externo',
      carModel: 'Onix',
      brand: 'Chevrolet',
      price: 120.0,
      description: 'Retrovisor elétrico com ajuste interno',
      image:
        'https://autoglass.vteximg.com.br/arquivos/ids/263287-1000-1000/2491989_01.png?v=638542589841030000',
    },
  ],
}
