import React, { useState } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import '../assets/css/TechLabChatbot.css'

const TechLabChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! Welcome to Akshaya Techno Lab support. How can I help you today?',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);

  // Quick action buttons
  const quickActions = [
    'What services do you offer?',
    'Tech stack details',
    'Get pricing info',
    'Contact support',
    'Working hours',
    'Book a consultation',
  ];

  const generateResponse = (message) => {
    const responses = {
      'What services do you offer?': 'At Akshaya Techno Lab, we provide IT project services.',
      'Tech stack details': 'We work with various technologies including React, Node.js, and more.',
      'Get pricing info': 'Our pricing varies based on the project scope. Please contact us for details.',
      'Contact support': 'You can reach our support team at support@akshayatechnolab.com.',
      'Working hours': 'We are available from 9 AM to 6 PM, Monday to Friday.',
      'Book a consultation': 'You can book a consultation through our website or by contacting us directly.',
    };

    return responses[message] || 'Dear Customer, What type of service are you looking for? Please select an option from the provided menu or you can also type your query below.';
  };

  const handleSendMessage = (message = inputMessage) => {
    if (message.trim() === '') return;

    const newMessages = [...messages, { type: 'user', content: message }];
    const botResponse = generateResponse(message);
    newMessages.push({ type: 'bot', content: botResponse });

    setMessages(newMessages);
    setInputMessage('');
  };

  const handleQuickAction = (action) => {
    handleSendMessage(action);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions);
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chatbot-toggle" onClick={toggleChat}>
          <MessageSquare className="chatbot-icon" />
        </button>
      )}

      {isOpen && (
        <div className="chatbot">
          <div className="chatbot-header">
            <span className="chatbot-title">Akshaya Techno Lab Support</span>
            <div className="chatbot-header-actions">
              <button className="suggestions-toggle" onClick={toggleSuggestions}>
                {showSuggestions ? 'Hide Questions' : 'Show Questions'}
              </button>
              <button className="close-chat" onClick={toggleChat}>
                <X className="close-icon" />
              </button>
            </div>
          </div>

          <div className="chatbot-body">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type === 'user' ? 'user' : 'bot'}`}>
                <div className="message-content">
                  {message.content}
                </div>
              </div>
            ))}

            {showSuggestions && (
              <div className="suggestions">
                <div className="suggestions-header">Suggested Questions:</div>
                <div className="suggestions-list">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className="suggestion-button"
                      onClick={() => handleQuickAction(action)}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="chatbot-footer">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="chatbot-input"
            />
            <button className="send-button" onClick={() => handleSendMessage()}>
              <Send className="send-icon" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechLabChatbot;
