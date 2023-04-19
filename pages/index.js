import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Table from 'react-bootstrap/Table';

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      console.log(data.result);
      setAnimalInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  // return (
  //   <div>
  //     <Head>
  //       <title>OpenAI Quickstart</title>
  //       <link rel="icon" href="/icon.png" />
  //     </Head>

  //     <main className={styles.main}>
  //       <img src="/Test3.jpg" className={styles.icon} />
  //       <h3>¿Que ves en la imagen?</h3>
  //       <form onSubmit={onSubmit}>
  //         <input
  //           type="text"
  //           name="animal"
  //           placeholder="Ingrese una descripción, tener en cuenta colores..."
  //           value={animalInput}
  //           onChange={(e) => setAnimalInput(e.target.value)}
  //         />
  //         <input type="submit" value="Enviar" />
  //       </form>
  //       <div className={styles.result}>{result}</div>
  //     </main>
  //   </div>
  // );

  return (

    <div class="container" >
      <Carousel slide={false} variant="dark" >
        <Carousel.Item>
          <div class="d-flex d-flex justify-content-center ">
            <img
              className="d-block w-50"
              src="/img1.jpg"
              alt="First slide"
            />
          </div>
          <br />
          <br />
          <br />
          <br />

          <Carousel.Caption>
            <h5>Imagen 1</h5>
            <p>¿Qué ves en la primera imagen?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div class="d-flex d-flex justify-content-center ">
            <img
              className="d-block w-50"
              src="/img2.png"
              alt="Second slide"
            />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Carousel.Caption>
            <h5>Imagen 2</h5>
            <p>¿Qué ves en la segunda imagen?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div class="d-flex d-flex justify-content-center ">
            <img
              className="d-block w-50"
              src="/img3.png"
              alt="Third slide"
            />
          </div>
          <br />
          <br />
          <br />
          <br />
          <Carousel.Caption>
            <h5>Imagen 3</h5>
            <p>¿Qué ves en la tercera imagen?</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Comments"
          className="mb-3"
        >
        </FloatingLabel>
      </>

      <form onSubmit={onSubmit}>
        <div class="mb-3">
          {
          /* <input type="text" name="animal" class="form-control" value={animalInput} onChange={(e) => setAnimalInput(e.target.value)} /> */}
          <FloatingLabel controlId="floatingTextarea2" label="Descripción">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
              name="animal"
              value={animalInput} onChange={(e) => setAnimalInput(e.target.value)}
            />
          </FloatingLabel>
        </div>

        <div class="d-flex d-flex justify-content-center ">
          <button type="submit" value="Enviar" class="btn btn-success">Enviar</button>
        </div>
      </form>
      <br />
      <br />
      {/* <div className={styles.result}>{result}</div> */}

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Respuesta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{result}</td>
          </tr>
        </tbody>
      </Table>

    </div>


  );

}
