import { useEffect, useState } from "react";
import imagen1 from "../assets/images/imagen1.jpg";
import imagen2 from "../assets/images/imagen2.jpg";
import imagen3 from "../assets/images/imagen3.jpg";
import imagen4 from "../assets/images/imagen4.jpg";
import imagen5 from "../assets/images/imagen5.jpg";
import imagen6 from "../assets/images/imagen6.jpg";
import imagen7 from "../assets/images/imagen7.jpg";
import imagen8 from "../assets/images/imagen8.jpg";
import imagen9 from "../assets/images/imagen9.jpg";
import imagen10 from "../assets/images/imagen10.jpg";

const images = [
  {
    id: 1,
    image: imagen1,
    title: "Paisajes de girasoles",
    description:
      "Un campo de girasoles bajo un cielo azul, representando la belleza de la naturaleza y la energía positiva.",
  },
  {
    id: 2,
    image: imagen2,
    title: "Paisajes de margaritas",
    description: "Un paisaje de margaritas bajo un cielo azul, representando la pureza.",
  },
  {
    id: 3,
    image: imagen3,
    title: "Paisaje de cascada y una cueva",
    description: "Una cascada que fluye hacia una cueva, simbolizando la fuerza y la serenidad de la naturaleza.",
  },
  {
    id: 4,
    image: imagen4,
    title: "Paisaje de playa y palmeras",
    description: "Un paisaje de playa con palmeras, representando la tranquilidad y el descanso.",
  },
  {
    id: 5,
    image: imagen5,
    title: "Paisaje de las montañas y un lago",
    description: "Un paisaje de las montañas y un lago, representando la majestuosidad y la serenidad de la naturaleza.",
  },
  {
    id: 6,
    image: imagen6,
    title: "Paisaje de un campo de flores y un río",
    description: "Un paisaje de un campo de flores y un río, representando la vitalidad y la serenidad de la naturaleza.",
  },
  {
    id: 7,
    image: imagen7,
    title: "Paisaje de un bosque con un río",
    description: "Un paisaje de un bosque con un río, representando la vitalidad y la serenidad de la naturaleza.",
  },
  {
    id: 8,
    image: imagen8,
    title: "Paisaje de un bosque con un sendero",
    description: "Un paisaje de un bosque con un sendero, representando el camino hacia la serenidad y la naturaleza.",
  },
  {
    id: 9,
    image: imagen9,
    title: "Paisaje con un bosque, sendero y montañas al frente",
    description: "Un paisaje con un bosque, sendero y montañas al frente, representando la conexión entre la naturaleza y el camino hacia la serenidad.",
  },
  {
    id: 10,
    image: imagen10,
    title: "Paisaje de un campo de flores, montañas y un río",
    description: "Un paisaje de un campo de flores, montañas y un río, representando la vitalidad y la serenidad de la naturaleza.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images[currentIndex];

  const previousImage = () => {
    setCurrentIndex((previous) =>
      previous === 0 ? images.length - 1 : previous - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((previous) => (previous + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Conoce nuestra galería</h2>
        <p className="text-secondary">
          Fotos de paisajes hermosas, mostrando la belleza de la naturaleza.
        </p>
      </div>

      <div className="carousel-container">
        <img
          src={currentImage.image}
          alt={currentImage.title}
          className="carousel-image"
        />

        <div className="carousel-caption-custom">
          <h3>{currentImage.title}</h3>
          <p>{currentImage.description}</p>
          <span>
            Imagen {currentIndex + 1} de {images.length}
          </span>
        </div>

        <button
          className="carousel-control previous"
          onClick={previousImage}
          aria-label="Imagen anterior"
        >
          &#10094;
        </button>

        <button
          className="carousel-control next"
          onClick={nextImage}
          aria-label="Imagen siguiente"
        >
          &#10095;
        </button>
      </div>

      <div className="carousel-indicators-custom">
        {images.map((image, index) => (
          <button
            key={image.id}
            className={`indicator ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Mostrar imagen ${index + 1}`}
            aria-current={currentIndex === index ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;