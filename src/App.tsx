import './App.scss';
import BlockListContainer from "./components/BlockList/BlockListContainer.tsx";
import BlockContainerWrapper from "./components/Block/BlockContainerWrapper.tsx";

function App() {
    return (
        <>
            <BlockListContainer/>
            <div className="app">
                <BlockContainerWrapper/>
            </div>
        </>
    );
}

export default App;
