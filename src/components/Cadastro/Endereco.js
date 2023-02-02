import React, {useState, useEffect, useReducer} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
// import { useForm } from 'react-hook-form'
import styles from './Endereco.module.css'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import LinkButton from '../layout/LinkButton'


function Endereco ({btnText}) {

   
    let navigate = useNavigate();
        const [logradouro, setLogradouro] = useState("");
        // const [cep, setCep] = useState("");
        const [numero, setNumero] = useState("");
        const [bairro, setBairro] = useState("");
        const [complemento, setComplemento] = useState("");
        const [cidade, setCidade] = useState("");
        const [estado, setEstado] = useState("");
      
        const cadastrarEndereco = async (e) => {
          e.preventDefault();
          const endereco = {
            logradouro: logradouro,
            cep: cep,       
            numero: numero,     
            bairro: bairro,     
            complemento: complemento, 
            cidade: cidade,     
            estado: estado,           
          };
      
          const response = await axios.post(
            "http://localhost:3002/enderecos",
            endereco
          );
          // .then((res) => {
          //   console.log(res.data);
          // })
          // .catch((e) => {
          //   console.log(e);
          // });
      
          if (response.status === 200) {
            navigate(`/cadastrofinalizado/${response.data.id}`);
        //     toast.success("Assinatura feita com Sucesso!", {
        //       position: "top-right",
        //       autoClose: 5000,
        //       hideProgressBar: false,
        //       closeOnClick: true,
        //       pauseOnHover: true,
        //       draggable: true,
        //       progress: undefined,
        //       theme: "dark",
        //     });
        //   }
        };
    }

    // const [cep, setCep] = useState ('')

    // const checkCEP = (e) => {
    //     const cep = e.target.value.replace(/\D/g, '')
    //     console.log(cep)
    //     fetch(`https://viacep.com.br/ws/${cep}/json/`)
    //         .then(res => res.json()).then(data => {
    //             console.log(data)
    //         setValue('address', data.logradouro)
    //         setValue('neighborhood', data.neighborhood)
    //         setValue('city', data.localidade)
    //         setValue('state', data.uf)
    //     })
        

    // }
    function reducer (state, action) {
        if (action.type === 'UPDATE_FULL_ADDRESS') {
            return {
                ...state,
                ...action.payload
            } 
    }
    
            return state
    }
    
    const initialState = {
        code: '',
        address: '',
        number: '',
        district: '',
        complement: '',
        city: '',
        state: '',
        error: null
    }

    

    const [cep, setCep] = useState ('')
    const [addressState, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
       async  function fetchAddress () {
            if (cep.length < 9) {
                return 
            }           

            const data = await fetch(
                `https://cdn.apicep.com/file/apicep/${cep}.json`
                )
            const result = await data.json()
            console.log(result)

            dispatch({
                type: 'UPDATE_FULL_ADDRESS',
                payload: result.address
            })
        }
       
        fetchAddress ()
    }, [cep])

    function handleChangeCep (e) {
        setCep(cepMask(e.target.value))
    }

    function cepMask (value) {
        return value
        .replace(/\D+/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2') //qdo estiver com 5 num sera realizada operacao de subtracao das capturas
        .replace(/(-\d{3})\d+?$/, '$1') //limita a qtd de 3 num apos o traço
    }

    function handleChangeField (e) {

    }

    return (

        <form className={styles.form_endereco}>
            <div className={styles.form_titulo_endereco}><h1>Endereço do Usuário</h1></div>
            
            <div className={styles.form_control_cep}>
                <input 
                    label='CEP'
                    type="text"
                    text="CEP"
                    placeholder="CEP"
                    // id="cep"
                    // {...register("cep")}
                    // onBlur={checkCEP}
                    value={cep}
                    onChange={handleChangeCep}
                />
            </div>

            <div className={styles.form_control_rua}>
                <input 
                label='RUA'
                name= 'address'
                    type="text"
                    text="Rua"
                    placeholder='Rua'
                    // name='address'
                    // {...register("address")}
                    onChange={(e) => setLogradouro(e.target.value)}
                />
            </div>

            <div className={styles.form_control_bairro}>
                <input 
                label='Bairro'
                name= 'district'
                type="text"
                text="Bairro"
                placeholder='Bairro'
                // id="neighborhood"
                // {...register("neighborhood")}
                onChange={(e) => setBairro(e.target.value)}
                />
            </div>

            <div className={styles.form_control_cidade}>
                <input 
                label='Cidade'
                name= 'city'
                type="text"
                text="Cidade"
                placeholder='Cidade'
                // id="city"
                // {...register("city")}
                onChange={(e) => setCidade(e.target.value)}
                />
            </div>

            <div className={styles.form_control_estado}>
                <input 
                label='Estado'
                name= 'state'
                type="text"
                text="Estado"
                placeholder='Estado'
                // id="uf"
                // {...register("uf")}
                onChange={(e) => setEstado(e.target.value)}
                />
            </div>

        {/* <LinkButton to="/cadastrofinalizado" text="Finalizar" /> */}
        {/* {[ ].map((input) => (
                <input
                    {...input}
                    key={input.name}
                    value={addressState[input.name]}
                    onChange={handleChangeField}
                />
            ))} */}

        <button className={styles.finalizar} onClick={(e) => cadastrarEndereco(e)}>Finalizar</button>
            
            

</form>

    )
}

    

    

    
export default Endereco