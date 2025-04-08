import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const SearchModal = ({
    isOpen,
    onOpen, // Add this prop
    onClose,
    onSearch,
    placeholder = 'Search...',
    shortcutKey = 'k',
    loading = false,
    className = '',
    inputClassName = '',
    resultClassName = '',
    renderItem
}) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const inputRef = useRef(null);

    // Handle keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === shortcutKey.toLowerCase()) {
                e.preventDefault();
                if (!isOpen) onOpen(); // Now using the passed prop
            }
            if (e.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, shortcutKey, onOpen, onClose]);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Handle search with debounce
    useEffect(() => {
        if (!isOpen) return;

        const search = async () => {
            if (typeof onSearch === 'function') {
                try {
                    const data = await onSearch(query);
                    setResults(data);
                } catch (error) {
                    console.error('Search error:', error);
                    setResults([]);
                }
            }
        };

        const timeoutId = setTimeout(search, 300);
        return () => clearTimeout(timeoutId);
    }, [query, isOpen]);

    return (
        <div className={`fixed inset-0 z-50 ${isOpen ? 'visible' : 'invisible'}`}>
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={onClose}
            />

            {/* Modal */}
            <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl transition-all ${
                    isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                } ${className}`}
            >
                <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden">
                    {/* Search Input */}
                    <div className="relative">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder={placeholder}
                            className={`w-full px-6 py-5 text-lg border-none bg-transparent focus:ring-0 focus:outline-none ${inputClassName}`}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />

                        {/* Shortcut Badge */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                            <kbd className="px-2 py-1 text-sm bg-gray-100 rounded-md">
                                {navigator.platform.includes('Mac') ? '⌘' : 'Ctrl+'}
                                {shortcutKey.toUpperCase()}
                            </kbd>
                        </div>
                    </div>

                    {/* Results */}
                    {query && (
                        <div className={`border-t border-gray-100 max-h-[60vh] overflow-y-auto ${resultClassName}`}>
                            {loading ? (
                                <div className="px-6 py-4 text-gray-500">Loading...</div>
                            ) : results.length > 0 ? (
                                results.map((item, index) => (
                                    <div
                                        key={item.id || index}
                                        className="px-6 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 cursor-pointer"
                                        onClick={() => {
                                            if (item.onClick) item.onClick();
                                            onClose();
                                        }}
                                    >
                                        {renderItem ? renderItem(item) : <div className="font-medium">{item.title}</div>}
                                    </div>
                                ))
                            ) : (
                                <div className="px-6 py-4 text-gray-500">No results found</div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

SearchModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onOpen: PropTypes.func.isRequired, // Add to propTypes
    onClose: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    shortcutKey: PropTypes.string,
    loading: PropTypes.bool,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    resultClassName: PropTypes.string,
    renderItem: PropTypes.func
};

export default SearchModal;