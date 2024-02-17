import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>FallenXiters</title>
        <link rel="stylesheet" href="styles.css" />
      </Head>

      <Header />

      <body>
        <header>
          <div class="container">
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
          <div class="container">
            <h2>Produtos para iPhone</h2>
            <div class="carousel">
              <div class="product new">
                <img src="product3.jpg" alt="Produto 3" />
                <h3>PAINEL EXTERNAL IOS</h3>
                <p>Descrição breve do Produto 3.</p>
                <span class="old-price">R$ 149,99</span>
                <span class="new-price">R$ 129,99</span>
                <span class="discount">-13%</span>
                <a href="#" class="btn">Comprar</a>
              </div>
              <div class="product discount">
                <img src="product1.jpg" alt="Produto 1" />
                <h3>IPA PREMIUM IOS</h3>
                <p>Descrição breve do Produto 1.</p>
                <span class="price">R$ 99,99</span>
                <span class="discount">-10%</span>
                <a href="#" class="btn">Comprar</a>
              </div>

              <div class="product discount">
                <img src="product2.jpg" alt="Produto 2" />
                <h3>PAINEL PREMIUM IOS</h3>
                <p>Descrição breve do Produto 2.</p>
                <span class="price">R$ 129,99</span>
                <span class="discount">-15%</span>
                <a href="#" class="btn">Comprar</a>
              </div>
              <div class="product discount">
                <img src="product4.jpg" alt="Produto 4" />
                <h3>CERTIFICADO IOS</h3>
                <p>Descrição breve do Certificado iOS.</p>
                <span class="price">R$ 70,00</span>
                <span class="discount">-20%</span>
                <a href="#" class="btn">Comprar</a>
              </div>
            </div>
          </div>
        </section>


        <section id="android">
          <div class="container">
            <h2>Produtos para Android</h2>
            <div class="carousel">
              {/* Coloque aqui os produtos para Android */}
              <div class="product">
                <img src="product5.jpg" alt="Produto 5" />
                <h3>PAINEL PREMIUM ANDROID</h3>
                <p>Descrição breve do Produto 5.</p>
                <span class="price">R$ 109,99</span>
                <a href="#" class="btn">Comprar</a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </body>
    </div>
  );
}
