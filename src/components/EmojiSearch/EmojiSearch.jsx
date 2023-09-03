/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import styles from "../EmojiSearch/EmojiSearch.module.css";
import emojiData from "../../constants/emojiList.json";

const EmojiSearch = () => {
  const [search, setSearch] = useState("");
  const [filteredEmoji, setFilteredEmoji] = useState(emojiData);

  const searchHandler = (event) => {
    
    const search = event.target.value.toLowerCase();
    setSearch(search); 
    
    const filterEmoji = emojiData.filter((emoji) => emoji.title.toLowerCase().includes(search));
    setFilteredEmoji(filterEmoji);
  };

  const defEmoji = emojiData.slice(0, 10);
  
  useEffect(()=>{
    if(search.trim()===''){
      setFilteredEmoji(defEmoji);
    } 
  },[search])
  
  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <img height="32" className={styles.img} src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png" />
        <span className={styles.spn}>Emoji Search</span>
        <img height="32" className={styles.img}  src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png" />
      </div>
      <div>
        <input placeholder="Search Emoji here" type="text" value={search} onChange={searchHandler} />
      </div>
      <div>
        {filteredEmoji.length===0 ? (<h3>Emoji Not Found</h3>) : (
      filteredEmoji.map((emoji, index)=>(
        <ul className={styles.ul} key={index}>
        <li className={styles.emoji}>{emoji.symbol}</li>
        <li className={styles.emoji}>{emoji.title}</li>
        </ul>
      ))
        )}
      </div>
    </>
  );
};

export default EmojiSearch;