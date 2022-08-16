import Header from "./components/layout/Header";
import "./css/global.css";

function App() {
  return (
    <div>
      <Header />
      <main>banner da moça com o cachorrinho</main>
      <section>categorias</section>
      <section>meu cachorro...</section>
      <section>principais marcas</section>
      <section>
        cards de destaque
        <article>Parceiros</article>
        <article>Assinatura Cãoselheiro </article>
      </section>
      <section>
        artigos
        <article>cards de artigo</article>
      </section>
      <section>Instagram</section>
      <section>
        inscrição
        {/* <img>imagem cachorrin</img> */}
        <form>formulario</form>
      </section>
      <footer>
        footer
        <nav></nav>
      </footer>
    </div>
  );
}

export default App;
