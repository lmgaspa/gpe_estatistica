import Head from 'next/head';
import EleicoesPage from "./eleicoes"
import InstitutoPage from "./instituto"
import DenunciePage from "./denuncie"
import ContatoPage from "./contato"
import AplicativoPage from "./aplicativo"

const App: React.FC = () => {
    return (
    <main>
           <Head>
                <title>Instituto GPE</title>
                <meta name="description" content="Pesquisas Políticas na região da Bahia!" />
            </Head>
        <InstitutoPage />
        <EleicoesPage />
        <DenunciePage />
        <ContatoPage />
        <AplicativoPage />
    </main>
    )
}

export default App