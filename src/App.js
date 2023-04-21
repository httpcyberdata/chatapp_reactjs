import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="
            f30ba91d-8868-484b-b6c3-bf2472893a52"
            userName="omnirealm"
            userSecret="hansdotter"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}
             /> }
        />
    );
}

export default App;