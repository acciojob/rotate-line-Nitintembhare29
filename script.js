//your JS code here. If required.
// Get the line element by ID
const line = document.getElementById('line');


// Define the CSS animation using @keyframes
const rotateAnimation = `
    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

// Create a <style> element and insert the CSS animation
const style = document.createElement('style');
style.innerHTML = rotateAnimation;
document.head.appendChild(style);

// Apply the animation to the line element
line.style.animation = 'rotate 4s linear infinite';