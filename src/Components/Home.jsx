import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from './Header'
import '../css/home.css'
import { Progress, Button, Card, CardGroup } from 'reactstrap'


function Home() {

    const [superheroes, setSuperheroes] = useState([]);
    const [cardSuperheoes, setCardSuperheroes] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const peticionGet = async () => {
        await axios.get(`https://superheroapi.com/api/144915604537322/search/${busqueda}`)
            .then(response => {
                setSuperheroes(response.data.results);
                setCardSuperheroes(response.data.results);
                console.log(response.data.results);
            }).catch(error => {
                console.log(error);
            })
    }

    const handleChange = e => {
        setBusqueda(e.target.value);
        peticionGet();
        console.log(e.target.value)
    }


    useEffect(() => {
        peticionGet();
    }, [])



    return (
        <>
            <Header />
            <div className="busqueda">
                <div className="containerInput">
                    <input className="form-control inputBuscar"
                        value={busqueda}
                        placeholder="Buscar superheroe"
                        onChange={handleChange}
                    />
                    <Button className="btn btn-primary" color="dark">
                        Buscar
                    </Button>
                </div>

            </div>



            <CardGroup className="row row-cols-1 row-cols-md-5 g-4 contenedorCards">
                {superheroes &&
                    superheroes.map((sup, key) => (
                        <div className="col" key={sup.id}>
                            <Card body
                                color="secondary"
                                outline>
                                <img src={sup.image.url} className="card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">{sup.name}</p>
                                    <div>
                                        <div className="contenedorProgreso">
                                            <Progress value={sup.powerstats.combat} color="black">
                                                Combate: {sup.powerstats.combat}%
                                            </Progress>
                                        </div>

                                        <div className="contenedorProgreso">
                                            <Progress value={sup.powerstats.durability} color="black">
                                                Durabilidad: {sup.powerstats.durability}%
                                            </Progress>
                                        </div>

                                        <div className="contenedorProgreso">
                                            <Progress value={sup.powerstats.intelligence} color="black">
                                                Inteligencia: {sup.powerstats.intelligence}%
                                            </Progress>
                                        </div>

                                        <div className="contenedorProgreso">
                                            <Progress value={sup.powerstats.power} color="black">
                                                Poder: {sup.powerstats.power}%
                                            </Progress>
                                        </div>

                                        <div className="contenedorProgreso">
                                            <Progress value={sup.powerstats.speed} color="black">
                                                Velocidad: {sup.powerstats.speed}%
                                            </Progress>
                                        </div>

                                        <div className="contenedorProgreso">
                                            <Progress value={sup.powerstats.strength} color="black">
                                                Destreza: {sup.powerstats.strength}%
                                            </Progress>
                                        </div>
                                    </div>
                                    <Button>Agregar al equipo</Button>
                                </div>


                            </Card>
                        </div>

                    ))}

            </CardGroup>
        </>
    );

}
export default Home;



