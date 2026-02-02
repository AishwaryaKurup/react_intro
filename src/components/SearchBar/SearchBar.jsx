import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar(props){
    return <>
    <SearchIcon size={25} color="white" className={s.icon}/>
    <input className={s.input} type="text" placeholder={"Search a TV show you may like"} />
    </>;
}