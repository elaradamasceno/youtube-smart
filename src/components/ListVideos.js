import '../styles/components/ListVideos.css';

export function ListVideos({ listVideos, typeScreen }){
    return(
        <div className="list-videos">
            { listVideos !== false && listVideos !== undefined && listVideos.map(({ id, snippet = {} }) => {
                const { title, description, channelTitle, thumbnails = {}, resourceId = {}} = snippet;
                const { medium } = thumbnails;

                return (
                    <a 
                        key={id.videoId || id.playlistId} 
                        className={`videos ${typeScreen}`} 
                        href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                        <div>
                            <p>
                                <img src={medium.url} alt="" />
                            </p>
                            <div className="info-videos">

                                <h1 className="title-videos"> {title} </h1>
                                <p className="description-videos"> {description} </p>    
                            </div>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}