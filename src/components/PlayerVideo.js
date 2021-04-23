import '../styles/components/PlayerVideo.css';

export function PlayerVideo({videoId}){
    return(
        <div>
            <iframe 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            >
            </iframe>
        </div>
    )
}