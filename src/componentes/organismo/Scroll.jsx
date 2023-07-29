import styled from 'styled-components';
import  Table  from 'react-bootstrap/Table';
import React , { useEffect, useState } from "react";
import axios from "axios";
//import { useNavigate, Link } from "react-router-dom";
import "../../estilos/InfoPlantas.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const InfinitScroll = styled.div`
    height: 100%;
    width: 100%;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Scroll() {
    // const [state, setState] = useState([]);


    // useEffect(() => {
    //     let url = "";

    //     let config = {
    //         method: 'GET',
    //         maxBodyLength: Infinity,
    //         url: url,
    //         headers: {},
    //     };

    //     axios.request(config)
    //         .then(response => {
    //             setState(response.data)
    //         })
    //         .catch((error) => {
    //             alert(error);
    //         });
    // }, [])
    // useEffect(() => {
    //     const socket = io(''); // Reemplaza 'localhost' con la dirección de tu servidor

    //     socket.on('message', () => {
    //         let url = "";

    //         let config = {
    //             method: 'GET',
    //             maxBodyLength: Infinity,
    //             url: url,
    //             headers: {},
    //         };

    //         axios.request(config)
    //             .then(response => {
    //                 setState(response.data)
    //             })
    //             .catch((error) => {
    //                 alert(error);
    //             });
    //     });
    //     return () => {
    //         socket.disconnect();
    //     };
    // }, []);

    return ( 
        
            <InfinitScroll >
                <div className='vid-adentro'>
                    <Table className="table table-bordered border border-black  text-center ">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                            <th className='xd'>ID</th>
                            <th className='xd'>SENSOR DE HUMEDAD</th>
                            </tr>
                        </thead> 
                        <tbody className=' table-bordered '>
                            <tr>
                            <th >ID</th>
                            <th >SENSOR DE HUMEDAD</th>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </InfinitScroll>
    
    );
}
export default Scroll;