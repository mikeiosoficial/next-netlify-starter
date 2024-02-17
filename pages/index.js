import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>FallenXiters</title>
        <style>{`
          /* Estilos Gerais */
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
          }

          .container {
            width: 80%;
            margin: 0 auto;
          }

          header {
            background: #333;
            color: #fff;
            padding: 20px 0;
            text-align: center;
          }

          header h1 {
            margin: 0;
            padding: 0;
            font-size: 36px;
          }

          nav ul {
            margin: 0;
            padding: 0;
            list-style-type: none;
          }

          nav ul li {
            display: inline-block;
            margin-left: 20px;
          }

          nav ul li a {
            color: #fff;
            text-decoration: none;
          }

          footer {
            background: #333;
            color: #fff;
            padding: 20px 0;
            text-align: center;
          }

          /* Estilos do Showcase (Seções de Produtos) */
          #iphone,
          #android {
            padding: 50px 0;
          }

          #iphone h2,
          #android h2 {
            text-align: center;
            margin-bottom: 40px;
            font-size: 32px;
            color: #333;
          }

          .carousel {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding: 20px; /* Adicionando padding para evitar que os produtos fiquem muito próximos das bordas */
          }

          .product {
            flex: 0 0 auto;
            width: 280px; /* Aumentando ligeiramente a largura para acomodar melhor o conteúdo */
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
            margin-right: 20px;
            scroll-snap-align: start;
            position: relative; /* Adicionando posição relativa para uso posterior do pseudoelemento */
          }

          .product.new::after {
            content: "NOVO"; /* Adicionando texto "NOVO" como um pseudoelemento após o produto */
            position: absolute;
            top: 10px;
            right: -10px;
            background-color: #ff5722; /* Cor de fundo */
            color: #fff; /* Cor do texto */
            padding: 5px 10px; /* Espaçamento interno */
            border-radius: 5px; /* Borda arredondada */
            font-size: 12px; /* Tamanho da fonte */
          }

          .product.discount::after {
            content: "DESCONTO"; /* Adicionando texto "DESCONTO" como um pseudoelemento após o produto */
            position: absolute;
            top: 10px;
            right: -10px;
            background-color: #009688; /* Cor de fundo para produtos com desconto */
            color: #fff; /* Cor do texto */
            padding: 5px 10px; /* Espaçamento interno */
            border-radius: 5px; /* Borda arredondada */
            font-size: 12px; /* Tamanho da fonte */
          }

          .old-price {
            text-decoration: line-through; /* Adicionando corte no preço antigo */
            color: #999; /* Cor do preço antigo */
            margin-right: 5px; /* Espaçamento à direita */
          }

          .new-price {
            font-weight: bold; /* Destacando o novo preço */
            color: #333; /* Cor do novo preço */
          }

          .discount {
            color: #fff; /* Cor do texto de desconto */
            font-weight: bold; /* Destacando o texto de desconto */
            margin-left: 5px; /* Espaçamento à esquerda */
          }

          .product:last-child {
            margin-right: 0;
          }

          .product img {
            max-width: 100%;
            border-radius: 10px;
            margin-bottom: 15px;
          }

          .product h3 {
            font-size: 24px;
            margin-bottom: 10px;
            color: #333;
          }

          .product p {
            font-size: 16px;
            color: #666;
            margin-bottom: 15px;
          }

          .price {
            font-size: 20px;
            color: #333;
          }

          .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }

          .btn:hover {
            background-color: #0056b3;
          }
        `}
        </style>
      </Head>

      <Header />

      <body>
        <header>
          <div className="container">
            <h1>FallenXiters</h1>
            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <section id="iphone">
          <div className="container">
            <h2>Produtos para iPhone</h2>
            <div className="carousel">
              <div className="product new">
                <img src="product3.jpg" alt="Produto 3" />
                <h3>PAINEL EXTERNAL IOS</h3>
                <p>Descrição breve do Produto 3.</p>
                <span className="old-price">R$ 149,99</span>
                <span className="new-price">R$ 129,99</span>
                <span className="discount">-13%</span>
                <a href="#" className="btn">Comprar</a>
              </div>
              <div className="product discount">
                <img src="product1.jpg" alt="Produto 1" />
                <h3>IPA PREMIUM IOS</h3>
                <p>Descrição breve do Produto 1.</p>
                <span className="price">R$ 99,99</span>
                <span className="discount">-10%</span>
                <a href="#" className="btn">Comprar</a>
              </div>

              <div className="product discount">
                <img src="product2.jpg" alt="Produto 2" />
                <h3>PAINEL PREMIUM IOS</h3>
                <p>Descrição breve do Produto 2.</p>
                <span className="price">R$ 129,99</span>
                <span className="discount">-15%</span>
                <a href="#" className="btn">Comprar</a>
              </div>
              <div className="product discount">
                <img src="product4.jpg" alt="Produto 4" />
                <h3>CERTIFICADO IOS</h3>
                <p>Descrição breve do Certificado iOS.</p>
                <span className="price">R$ 70,00</span>
                <span className="discount">-20%</span>
                <a href="#" className="btn">Comprar</a>
              </div>
            </div>
          </div>
        </section>


        <section id="android">
          <div className="container">
            <h2>Produtos para Android</h2>
            <div className="carousel">
              {/* Coloque aqui os produtos para Android */}
              <div className="product">
                <img src="product5.jpg" alt="Produto 5" />
                <h3>PAINEL PREMIUM ANDROID</h3>
                <p>Descrição breve do Produto 5.</p>
                <span className="price">R$ 109,99</span>
                <a href="#" className="btn">Comprar</a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </body>
    </div>
  );
}
