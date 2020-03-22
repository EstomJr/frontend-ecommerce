import React, { useState } from 'react';
import api from './services/api'

import './global.css';
import './App.css';
import './Form.css'

function App() {
    const [nomeProduct, setNomeProduct] = useState('');
    const [descritionProduct, setDescritionProduct] = useState('');
    const [precoProduct, setPrecoProduct] = useState('');
    const [tamanhoProduct, setTamanhoProduct] = useState('');
    let imagemProduct;
    const setImagemProduct = event => {
        this.setState({
            imagemProduct: event.target.files[0]
        })
    }

    async function handleAddLook(e) {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append("nomeProduct", nomeProduct);
        formdata.append("descritionProduct", descritionProduct);
        formdata.append("tamanhoProduct", tamanhoProduct);
        formdata.append("image", $("input[type=file]")[0].files[0]);

        const response = await api.request({
            url: '/look', method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded " },
            data: formdata
        })
        console.log(response.data);
    }

    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form onSubmit={handleAddLook} encType="multipart/form-data">
                    <div className="input-block">
                        <label htmlFor="nomeProduct">Nome do produto</label>
                        <input
                            name="nomeProduct"
                            id="nomeProduct"
                            required
                            value={nomeProduct}
                            onChange={e => setNomeProduct(e.target.value)} />
                    </div>

                    <div className="input-block">
                        <label htmlFor="descritionProduct">Descrição do produto</label>
                        <input
                            name="descritionProduct"
                            id="descritionProduct"
                            required
                            value={descritionProduct}
                            onChange={e => setDescritionProduct(e.target.value)} />
                    </div>

                    <div className="input-block">
                        <label htmlFor="precoProduct">Preço do produto</label>
                        <input
                            type="number"
                            name="precoProduct"
                            id="precoProduct"
                            required
                            value={precoProduct}
                            onChange={e => setPrecoProduct(e.target.value)} />
                    </div>

                    <div className="input-block">
                        <label htmlFor="tamanhoProduct">Tamanho do produto</label>
                        <select id="tamanhoProduct"
                            name="tamanhoProduct"
                            required
                            value={tamanhoProduct}
                            onChange={e => setTamanhoProduct(e.target.value)}>
                            <option value="P">P</option>
                            <option value="M">M</option>
                            <option value="G">G</option>
                        </select>
                    </div>

                    <div className="input-block">
                        <label htmlFor="imagemProduct">Imagem do produto</label>
                        <input
                            type="file"
                            name="imagemProduct"
                            id="imagemProduct"
                            required
                            value={imagemProduct}
                            onChange={e => setImagemProduct(e)} />
                    </div>
                    <button type="submit">Cadastrar Look</button>
                </form>
            </aside>
            <main>

            </main>
        </div>

    );
}



export default App;