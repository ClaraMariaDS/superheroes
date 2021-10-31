import React from 'react';
import { useHistory } from "react-router-dom"
import '../css/form.css'
import { Button } from 'reactstrap'
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import axios from 'axios';
import Header from './Header.jsx';

const Formulario = () => {
    let history = useHistory();

    return (
        <>
            <Header />
            <div className="formulario">
                <div className="container text-center">
                    <h1>Completa el formulario para ingresar</h1>
                </div>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    validate={(valores) => {
                        let errores = {};

                        if (!valores.email) {
                            errores.email = "Ingresa un email"
                        }
                        if (!valores.password) {
                            errores.password = "Ingresa un contraseña"
                        }
                        return errores;
                    }}
                    onSubmit={(valores, { resetForm }) => {

                        axios({
                            method: 'post',
                            url: 'http://challenge-react.alkemy.org/',
                            data: {
                                email: valores.email,
                                password: valores.password
                            }
                        })
                            .then(response => {
                                localStorage.setItem("token", response.data.token);
                                history.push('/home')
                                console.log(response)
                            })
                            .catch(function (error) {
                                alert("Tus datos no son válidos, por favor vuelve a intentarlo")
                            });

                        console.log("formulario enviado");
                        resetForm();

                    }}
                >
                    {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (


                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label >Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Tu email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.email && errors.email && <div className="error">{errors.email}</div>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label >Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Tu contraseña"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.password && errors.password && <div className="error">{errors.password}</div>}
                            </Form.Group>
                            <Button className="btn btn-primary" color="dark" type="submit">Enviar</Button>
                        </Form>

                    )}
                </Formik>
            </div>
        </>
    );

}

export default Formulario;

