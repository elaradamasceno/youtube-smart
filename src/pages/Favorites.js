import { Button } from 'antd';
import '../styles/components/Favorites.css';

export function Favorites(){
    return(
        <div className="favorites">
            <div className="user-logged">

            </div>

            <div className="user-not-logged">
                <div class="content-not-logged">
                    <div>
                        <div className="card-video"></div>
                        <div className="card-video"></div>
                        <div className="card-video"></div>
                    </div>
                    <div className="info-not-logged">
                        <h2>Assista os vídeos que você salvou</h2>
                        <span>Faça login para ver seus favoritos</span>
                    </div>
                    <div className="button-login">
                        <Button id="redirect-login" type="primary" size="large">FAZER LOGIN</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}