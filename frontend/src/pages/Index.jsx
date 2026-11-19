import Carousel from "../components/Carousel";
const Index = () => {
return (
<main>
<section className="container text-center my-5">
<h1 className="display-5 fw-bold">
Bienvenidos a mi galería de paisajes
</h1>
<p className="lead text-secondary">
Conoce nuestros paisajes hermosos y la belleza de la naturaleza.
</p>
</section>
<Carousel />
</main>
);
};
export default Index;