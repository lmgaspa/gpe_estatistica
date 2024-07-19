import ContatoPage from "./contato"
import Eleicoes2024Page from "./eleicoes"
import InstitutoPage from "./instituto"
import AplicativoPage from "./aplicativo"
import DenunciePage from "./denuncie"

const App: React.FC = () => {
    return (
    <main>
        <InstitutoPage />
        <Eleicoes2024Page />
        <DenunciePage />
        <ContatoPage />
        <AplicativoPage />
    </main>
    )
}

export default App