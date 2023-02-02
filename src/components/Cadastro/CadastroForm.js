import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
// import input from '../form/input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './CadastroForm.module.css'
import LinkButton from '../layout/LinkButton';
// import React, {useState} from 'react'



// import Endereco from './Endereco'

const CadastroForm = () => {     
        let navigate = useNavigate();
        const [nomeCompleto, setNomeCompleto] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [phone, setPhone] = useState("");
        const [cpfOrCnpj, setCpfOrCnpj] = useState("");
        const [dataNascimento, setDataNascimento] = useState("");
      
        const cadastrarUsuario = async (e) => {
          e.preventDefault();
          const usuario = {
            nomeCompleto: nomeCompleto,
            email: email,
            password: password,
            phone: phone,
            cpfOrCnpj: cpfOrCnpj,
            dataNascimento: dataNascimento,
          };
      
          const response = await axios.post(
            "http://localhost:3002/usuarios",
            usuario
          );
          // .then((res) => {
          //   console.log(res.data);
          // })
          // .catch((e) => {
          //   console.log(e);
          // });
      
          if (response.status === 200) {
            navigate(`/endereco/${response.data.id}`);
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

//btnText

    return (
       

        <form className={styles.form_cliente}>
            <div className={styles.form_control_nome}>            
                <input 
                    required
                    type="text"
                    text="Nome"
                    placeholder="Nome Completo"
                    value={nomeCompleto}
                    onChange={(e) => setNomeCompleto(e.target.value)}
                />
            </div>           
            
            <div className={styles.form_control_email}>
                <input 
                    type="email"
                    text="Email"
                    placeholder="Email (opcional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /> 
            </div>
            
            <div className={styles.form_control_cpforcnpj}>
                <input 
                    type="number"
                    text="CPF"
                    placeholder="Informe seu CPF ou CNPJ"
                    value={cpfOrCnpj}
                    onChange={(e) => setCpfOrCnpj(e.target.value)}
                />
            </div>

            <div className={styles.form_control_data_nascimento}>
                <input 
                    type="date"
                    text="Data de Nascimento"
                    placeholder="Informe sua data de nascimento"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                />                  
            </div>

            <div className={styles.form_control_telefone}>
                <input  
                    type="tel"
                    text="Telefone"
                    placeholder="(00) 00000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
                
            <div className={styles.form_control_senha}> 
                <input 
                    type="password"
                    text="Senha"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
        

                {/* <input 
                    type="password"                    
                    placeholder="Repita a senha"
                />  */}           

                
                 
                <Select name="category_id" text="Atividades"/> 

                {/* <LinkButton to="/newendereco" text="Avançar" /> */}
                <button className={styles.cadastra} onClick={(e) => cadastrarUsuario(e)}>Avançar</button>
                
                 {/* <SubmitButton text={btnText}/> */}
                {/* <button onClick={(e) => cadastrarUsuario(e)}>Cadastrar</button> */}

            </form>
        
        
     )
}

export default CadastroForm;
