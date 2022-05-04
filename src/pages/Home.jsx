import React, {useState} from 'react'
import { useEffect } from 'react'
import { useBrandIdentityContext } from '../contexts/BrandIdentityContext'

export function Section({children}){
  return(
    <div className={`max-w-screen-lg w-full grid grid-cols-1 place-items-center justify-items-center`}>
        {children}
    </div>
  )
}

export function HeroSection({data}) {
  return (
    <Section>
      <div className={`lg:p-0 p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center justify-items-center pt-6`}>
         
         <div className={`text-gray-100 grid grid-cols-1 gap-8`}>
           
           <div className={`grid gap-4 grid-cols-1 lg:grid-cols-2 place-items-center justify-items-center`}>
              <img className={`lg:w-56 w-48`} src={data.logo1} alt=""/>        
              <div className={`text-5xl text-center lg:text-left font-bold`}>{data.headline1}</div>            
           </div>

          <div className={`border-l border-custom-d pl-4 grid grid-cols-1 place-items-center justify-items-start gap-2`}>
            <div className={`text-2xl text-gray-200 font-light`}>{data.headline2}</div>
            <div className={`text-2xl text-gray-200 font-light`}>{data.headline3}</div>
          </div>
         
            <div className={`rounded-lg text-custom-a grid grid-cols-1 place-items-center justify-items-start gap-4 bg-gray-100 p-4`}>
              <img className={`w-56`} src={data.logo2} alt=""/>
              <div className={` grid grid-cols-1`}>
                  {data.comoSeInscrever}
                  {data.dataDaProva}
                  {data.horarioDaProva}
                  {data.endereco}
              </div>
            </div>     
         </div>

          <div className={`w-72 bg-gray-100 p-6 rounded-lg grid grid-cols-1 place-items-center justify-items-center`} id="mc_embed_signup">
              
              <form action="https://gmail.us14.list-manage.com/subscribe/post?u=43262b3daf42f8edc076605b3&amp;id=ceb595b926" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                    
                    <div className={`grid grid-cols-1 gap-4 place-items-center justify-items-start`} id="mc_embed_signup_scroll">
                              
                              <h2>Inscreva-se para nosso Bolsão preenchendo o formulário:</h2>                            
                            <div className="mc-field-group">
                              <label for="mce-EMAIL">Email  <span className="asterisk">*</span>
                            </label><br/>
                              <input type="email" defaultValue="" name="EMAIL" className="required email rounded-lg shadow-sm w-56" id="mce-EMAIL"/>
                            </div>
                            <div className="mc-field-group">
                              <label for="mce-FNAME">Nome Completo <span className="asterisk">*</span> </label><br/>
                              <input type="text" defaultValue="" name="FNAME" className="rounded-lg shadow-sm w-56" id="mce-FNAME" />
                            </div>
                            <div className="mc-field-group size1of2">
                              <label for="mce-PHONE">Telefone  <span className="asterisk">*</span>
                            </label><br/>
                              <input type="text" name="PHONE" className="required rounded-lg shadow-sm w-56" defaultValue="" id="mce-PHONE" />
                            </div>
                            <div className="mc-field-group">
                              <label for="mce-MMERGE3">Bairro  <span className="asterisk">*</span>
                            </label><br/>
                              <input type="text" defaultValue="" name="MMERGE3" className="required rounded-lg shadow-sm w-56" id="mce-MMERGE3" />
                            </div>
                            <div className="mc-field-group size1of2">
                              <label for="mce-MMERGE5-month">Data de Nascimento  <span className="asterisk">*</span>
                            </label><br/>
                              <div className="datefield ">
                                <span className="subfield dayfield"><input className="datepart required" type="text" pattern="[0-9]*" defaultValue="" placeholder="DD" size="2" maxlength="2" name="MMERGE5[day]" id="mce-MMERGE5-day" /></span> / 
                                    <span className="subfield monthfield"><input className="datepart required" type="text" pattern="[0-9]*" defaultValue="" placeholder="MM" size="2" maxlength="2" name="MMERGE5[month]" id="mce-MMERGE5-month" /></span> / 
                                <span className="subfield yearfield"><input className="datepart required" type="text" pattern="[0-9]*" defaultValue="" placeholder="YYYY" size="4" maxlength="4" name="MMERGE5[year]" id="mce-MMERGE5-year" /></span>
                                  <br/>  <span className="small-meta nowrap">( dd / mm / yyyy )</span>
                              </div>
                            </div><div className="mc-field-group input-group">
                                <strong>Horário Desejado  <span className="asterisk">*</span>
                            </strong>
                                <ul><li><input type="radio" defaultValue="Manhã" name="MMERGE2" id="mce-MMERGE2-0"/><label for="mce-MMERGE2-0">Manhã</label></li>
                            <li><input type="radio" defaultValue="Tarde" name="MMERGE2" id="mce-MMERGE2-1"/><label for="mce-MMERGE2-1">Tarde</label></li>
                            <li><input type="radio" defaultValue="Noite" name="MMERGE2" id="mce-MMERGE2-2"/><label for="mce-MMERGE2-2">Noite</label></li>
                            </ul>
                            </div>
                              <div id="mce-responses" className="clear foot">
                                <div className="response" id="mce-error-response" style={{display:'none'}}></div>
                                <div className="response" id="mce-success-response" style={{display:'none'}}></div>
                              </div>   
                                <div style={{position: 'absolute', left:'-5000px'}} aria-hidden="true"><input type="text" name="b_43262b3daf42f8edc076605b3_ceb595b926" tabIndex="-1" defaultValue="" /></div>
                                    <div className="optionalParent">
                                        <div className="clear foot">
                                            <input type="submit" defaultValue="Enviar" name="subscribe" id="mc-embedded-subscribe" className="button px-4 py-2 rounded-lg transition-all ease-in-out duration-150 hover:bg-opacity-80 bg-custom-d cursor-pointer text-gray-100" />                                     
                                        </div>
                                    </div>
                      </div>
              </form>
          </div>
      </div>
    </Section>  
  )
}

export default function Home() {

  const {brandColors, Logo6,Logo1, businessInformation} = useBrandIdentityContext()

  const [homePageData, sethomePageData] = useState({
    heroSection:{
      logo1: Logo1,
      logo2: Logo6,
      comoSeInscrever: <span>Como se inscrever: Preencha o formulário abaixo.</span>,
      headline1:<h1>Conquiste sua estabilidade financeira!</h1>,
      headline2: <h2> Seja um Sargento das Forças Armadas </h2>,
      headline3: <h3> Ganhe até 100% de bolsa no curso que vai te deixar mais próximo da Farda</h3>,
      dataDaProva:<span>Data da Prova: 07/05</span>,
      horarioDaProva:<span>Horário da Prova: 9h30 ou 13h30</span>,
      endereco:<span>{businessInformation.address}</span>,
    },
    questionAnswerSection:{
      question1: <h2>Como vai funcionar o Bolsão? 
      </h2>,
      answer1: <span>A prova será feita de forma online. Você pode ganhar de 100% a 20% de bolsa para se preparar para o concurso da ESA E EEAR.
      </span>,
      question2: <h2>Como será a prova?</h2>,
      answer2: <span>A prova terá 20 questões. 
      10 Questões de Língua Portuguesa e 10 Questões de Matemática. 
      </span>,
      question3: <h2>Quem ganha a bolsa em caso de empate?</h2>,
      answer3:{
        answer:<div>Os critérios de desempate serão:</div>,
        answerList:[
            <span>Maior idade</span>,
            <span>Quantidade de acertos em Português</span>,
            <span>Quantidade de acertos em Matemática</span>,
            <span>Quem enviou o cartão-resposta mais rápido</span>,
        ]
        }
  
    },
    aprovadosSection:{
      title: <span>Aprovados</span>,
      listaDeAprovados:[
        {
          aluno: <span>João Pedro Carrascosa</span>,
          aprovacoes: [
            <span>7° Lugar na EEAR-CFS</span>,
            <span>EFOMM</span>,
          ]
        },

      ]
    },
    aboutSection:{
      title: <span>Sobre o nosso Curso</span>,
      numeroDeHoras: <span>312</span>,
      descricaoDasHoras: <span>horas de aulas presenciais.</span>,
      localizacao: <span>Vila da Penha</span>,
      outrasVantagens: [
          <span> Trabalhamos teoria e exercícios</span>,
          <span> Aplicamos todo o conteúdo do edital. </span>
      ],     
      diferenciais: [
        <span>Curso de alto rendimento</span>,
        <span>Professores especializados</span>,
        <span>Criação de plano de estudos personalizado individualmente</span>,
        <span>Nivelamento gratuito</span>,
        <span>Monitoria Direcionada</span>,
        <span>Simulados presenciais e online</span>,
        <span>Turmas de Exercícios</span>,
        <span>Plataforma exclusiva com videoaulas e mais de 10 mil exercícios com gabarito</span>,
        <span>Material didático atualizado (Impresso e em pdf)</span>,
        
      ]
    },
    footerSection:{
      endereco: businessInformation.address,
      telefone: <span>Telefone: 21.99286-9819</span>
    }

    
  })

  // For integration with mailchimp

  useEffect(() => {

    const script2 = document.createElement('script')
    script2.id = 'jquery'
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'
    script2.async = true
    script2.defer = true
    script2.crossOrigin = 'anonymous'
    document.body.appendChild(script2)
   
    const script1 = document.createElement('script')
    script1.id = 'mailchimp-mc-validate'
    script1.src = 'https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
    script1.async = true
    script1.defer = true
    script1.crossOrigin = 'anonymous'
    document.body.appendChild(script1)

    const script0 = document.createElement('script')
    script0.id = 'mailchimp-other-script'
    script0.textContent = `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[4]='PHONE';ftypes[4]='phone';fnames[3]='MMERGE3';ftypes[3]='text';fnames[5]='MMERGE5';ftypes[5]='date';fnames[2]='MMERGE2';ftypes[2]='radio';}(jQuery));var $mcj = jQuery.noConflict(true);`
    script0.async = true
    script0.defer = true
    script0.crossOrigin = 'anonymous'
    document.body.appendChild(script0)

    return () => {
      document.body.removeChild(script1)
      document.body.removeChild(script2)
      document.body.removeChild(script0)
    }
  }, [])
  

  return (
    <div className={`bg-custom-a grid grid-cols-1 gap-6 place-items-center justify-items-center`}>
       <HeroSection data={homePageData.heroSection}/>
    </div>
  )
}
