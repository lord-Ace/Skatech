import {React, useState} from 'react'

export const Button = ({buttonText, action})=>{
  return(
    <button onClick={() => {action()}}
    className="bg-btn text-basef text-cta font-semibold p-2"
    >{buttonText}</button>
    )
}

export const Input = ({type, placeholder=null, value, setValue})=>{
  return(
    <input onChange={(e) => {setValue(e.target.value)}} type={type} className="text-cta font-semibold p-2 outline-sp" placeholder={placeholder} value={value} required/>
    )
}

export function ImageContainer({ src, alt, className = "" }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gray-200 rounded-xl flex flex-col items-center justify-center text-center text-gray-400 ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-500 via-gray-300 to-gray-100 animate-pulse" />
      )}

      {/* 2. Error State */}
      {hasError ? (
        <>
          <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm font-medium">Image failed to load</span>
        </>
      ) : (
        /* 3. The Actual Image Element */
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}
    </div>
  );
}
