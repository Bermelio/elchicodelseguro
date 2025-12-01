
function Whatsapp() { 
    return (
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h1l1 2h1l1-2h1l1 2h1l1-2h1l1 2h1l1-2h1l1 2h1l1-2h1l1 2h1M16 5a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        </a>
    );
}

export default Whatsapp;