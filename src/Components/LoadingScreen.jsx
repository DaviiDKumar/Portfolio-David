// Components/LoadingScreen.jsx
import '../Css/LoadingScreen.css';

const LoadingScreen = () => {
  const text = "DAVID'S CODE LAB";
  
  return (
    <div className="loading-screen">
      <div className="loading-line">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={`loading-char ${char === ' ' ? 'space' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
