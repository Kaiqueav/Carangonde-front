import React from 'react';
import { Header } from '../components/Header';
import Cidadania from '../components/Cidadania';
import Options from '../components/OPTIONS';
import Footer from '../components/Footer';
import Sobre from '../components/Sobre';

function Inicial() {
    return (
        <div>
            <Header />
            <Cidadania />
            <Sobre />
            <Options />
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Inicial;
