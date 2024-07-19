import ContatoPage from "./contato"
import Eleicoes2024Page from "./eleicoes"
import InstitutoPage from "./instituto"
import AplicativoPage from "./aplicativo"
import DenunciePage from "./denuncie"
import ArtigosPage from "./artigos"

const App: React.FC = () => {
    return (
    <main>
        <InstitutoPage />
        <Eleicoes2024Page />
        <DenunciePage />
        <ArtigosPage />
        <ContatoPage />
        <AplicativoPage />
    </main>
    )
}

export default App