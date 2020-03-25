import React, { useState } from 'react';
import api from '../services/api'

import '../global.css';
import './Cadastro.css'

function Cadastro() {
    const [nomeProduct, setNomeProduct] = useState('');
    const [descritionProduct, setDescritionProduct] = useState('');
    const [precoProduct, setPrecoProduct] = useState('');
    const [tamanhoProduct, setTamanhoProduct] = useState('');
    const [imagemProduct, setImagemProduct] = useState('');

    async function handleAddLook(e) {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append("nomeProduct", nomeProduct);
        formdata.append("descritionProduct", descritionProduct);
        formdata.append("tamanhoProduct", tamanhoProduct);
        formdata.append("precoProduct", precoProduct);
        formdata.append("imagemProduct", imagemProduct);

        const response = await api.request({
            url: '/look', method: "POST", headers: { "Content-Type": "application/json " },
            data: formdata
        })
        console.log(response.data);
        console.log(imagemProduct)
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
                            
                            onChange={e => setImagemProduct(e.target.files[0])}
                            />
                    </div>
                    <button type="submit">Cadastrar Look</button>
                </form>
            </aside>
            <main>

            </main>
        </div>

    );
}



export default Cadastro;