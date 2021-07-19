function Avatar({ url, className })
{
    return (
    <img 
        loading="lazy" 
        src={url} 
        alt="pfp" 
        className={`h-10 rounded-full cursor-pointer ${className}`}
    />
    );
}

export default Avatar;