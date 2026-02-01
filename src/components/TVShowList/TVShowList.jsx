import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";

export function TVShowList({TVShowList}){
    return (
        <div>
            <div className={s.title}>You may like: </div>
            <div className={s.list}>
                {
                    TVShowList.map((tvShow)=>{
                        return (
                            <span className={s.tv_show_item} key={tvShow.id}>
                            <TVShowListItem 
                            tvShow={tvShow}
                            onClick={()=>console.log("todo")}
                            />
                            </span>
                        );
                    })
                }
  
            </div>
        </div>
    );
}