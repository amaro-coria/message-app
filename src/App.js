import React, { useState, useEffect } from 'react';
import * as api from './api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [option, setOption] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [selectedChannels, setSelectedChannels] = useState([]);

    const channelOptions = [
        { label: 'SMS', value: '1' },
        { label: 'Phone', value: '2' },
        { label: 'Email', value: '3' },
    ];

    useEffect(() => {
        if (option === 'display') {
            api.getMessages()
                .then(fetchedMessages => {
                    setMessages(fetchedMessages);
                    toast.success('Messages fetched successfully!');
                })
                .catch(error => {
                    toast.error('Error fetching messages.');
                });
        }
    }, [option]);

    const handleSendMessage = () => {
        const channels = selectedChannels.map(channelValue => ({
            id: parseInt(channelValue),
        }));

        api.sendMessage(newMessage, channels)
            .then(response => {
                toast.success('Message sent successfully!');
            })
            .catch(error => {
                toast.error('Error sending message.');
            });
    };

    const toggleChannel = (value) => {
        setSelectedChannels(prevState =>
            prevState.includes(value)
                ? prevState.filter(channel => channel !== value)
                : [...prevState, value]
        );
    };

    return (
        <div className="App">
            <h1>Message App</h1>
            <ToastContainer />
            <div>
                <button onClick={() => setOption('display')}>Display Messages</button>
                <button onClick={() => setOption('send')}>Send Message</button>
            </div>
            {option === 'display' && (
                <div>
                    <h2>Messages</h2>
                    <ul>
                        {messages.map((message, index) => (
                            <li key={index}>
                                {message.messageContent} (Author: {message.userAuthor})
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {option === 'send' && (
                <div>
                    <h2>Send a Message</h2>
                    <textarea
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Enter your message"
                    />
                    <div>
                        <h3>Select Channels:</h3>
                        {channelOptions.map((option, index) => (
                            <label key={index}>
                                <input
                                    type="checkbox"
                                    value={option.value}
                                    checked={selectedChannels.includes(option.value)}
                                    onChange={() => toggleChannel(option.value)}
                                />
                                {option.label}
                            </label>
                        ))}
                    </div>
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            )}
        </div>
    );
}

export default App;
