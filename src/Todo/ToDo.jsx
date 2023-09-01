import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
   
    const [atividade, setAtividade] = useState([])
    const [lista, setLista] = useState([])

    const [id, setId] = useState(1)

    const salvar = (e) => {
        e.preventDefault()
        setLista([...lista, {
            atividade: atividade,id:id
        }])

        setId (id +1)
        console.log(lista)
    }
    return (
        <div>
            <h1>Lista de Atividades</h1>
            <Link to="/home">home</Link>

            <form onSubmit={salvar}>
                <input type="text"
                    onChange={(e) => setAtividade(e.target.value)}/>
                    <button>Adicionar</button>
            </form>

            {lista.map((atividade)=>
            <div key={atividade.id}>
            <p>{atividade.id}</p>
            <p>{atividade.atividade}</p>
            </div>
            )}
        </div>
    );
}