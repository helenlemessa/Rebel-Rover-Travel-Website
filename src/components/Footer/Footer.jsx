import React from 'react'

function Footer() {
const currentYear = new Date().getFullYear();
return (
    <footer className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto text-center text-sm">
            © {currentYear} Rebel Rover. All rights reserved.
        </div>
    </footer>
);
}

export default Footer