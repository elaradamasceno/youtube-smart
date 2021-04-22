import '../styles/components/ListVideos.css';

export function ListVideos({ listVideos, typeScreen }){
    return(
        <div className="list-videos">
            { listVideos !== false && listVideos !== undefined && listVideos.items.map(({ id, snippet = {} }) => {
                const { title, description, channelTitle, thumbnails = {}, resourceId = {}} = snippet;
                const { medium } = thumbnails;

                {console.log(snippet)}

                return (
                    <a 
                        key={id.videoId || id.playlistId} 
                        className={`videos ${typeScreen}`} 
                        href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                        <div>
                            <p>
                                <img src={medium.url} alt="" />
                            </p>
                            <h1> {title} </h1>
                            <h2> {description} </h2>    
                        </div>
                    </a>
                )
            })}
        </div>
    )
}