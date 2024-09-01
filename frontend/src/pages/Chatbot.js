import React, { useState, useRef, useEffect } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const textareaRef = useRef(null);

  const callApi = async (message) => {
    // Placeholder response - replace with your actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          response: `You said: "${message}". This is a placeholder response.`
        });
      }, 1000);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setMessages([...messages, { sender: 'user', text: inputValue }]);
      setInputValue('');  // Clear the input immediately after sending
      setIsProcessing(true);  // Disable input and button

      const apiResponse = await callApi(inputValue);

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'ai', text: apiResponse.response }
      ]);

      setIsProcessing(false);  // Re-enable input and button
    }
  };

  const handleClearChat = (event) => {
    event.preventDefault(); // Prevent form submission
    setMessages([]);  // Clear all messages
    setInputValue(''); // Clear input field
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  // Handle Enter key to submit form
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default new line behavior
      handleSubmit(event); // Submit the form
    }
  };

  return (
    <div className="chatbot-section">
      <h1 className="chatbot-title">Chatbot Title</h1>
      <p className="chatbot-description">
        This is a placeholder description for your chatbot. You can describe what the chatbot does and how it can assist users.
      </p>
      <div className="chatbot-container">
        <div className="message-list">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-wrapper ${message.sender}`}
            >
              <i
                className={`avatar ${message.sender === 'user' ? 'fas fa-user' : 'fas fa-robot'}`}
                aria-hidden="true"
              ></i>
              <div className={`message ${message.sender}`}>
                <strong>{message.sender === 'user' ? 'Human: ' : 'AI Assistant: '}</strong>
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="input-container">
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="input-field"
            placeholder="Type a message..."
            rows="1"
            onKeyDown={handleKeyDown}
          />
          <button
            type="submit"
            className="send-button"
            disabled={isProcessing} // Disable button while processing
          >
            Send &#128640;
          </button>
          <button
            type="button" // Change button type to 'button' to prevent form submission
            onClick={handleClearChat}
            className="clear-button"
          >
            Clear &#128465;
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chatbot;
