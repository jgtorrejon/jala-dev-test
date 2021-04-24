import {useState, useContext} from "react";
import axios from "axios";
import * as Routes from "../constants/routes";
import * as Keys from "../constants/keys";
import TextInput from "./Inputs/TextInput";

function Search (props) {
    const [card, setCard] = useState("");
    const [messages, setMessage] = useState("");
    const [searches, setSearches] = useState([]);

    const makeSearch = () => {
        axios.get(Routes.SEARCH, {
            params: {
                query: card,
                token: Keys.TRELLO_TOKEN,
                key: Keys.TRELLO_KEY,
                card_list: true,
                card_board: true,
            }
        })
        .then(res => {
            const boards = res.data.boards.map(x => x.name);
            const cards = res.data.cards.map(x => x.name);
            setSearches([...searches, card]);
            setMessage(`Boards : ${boards} \r\n Cards : ${cards}`);
        })
        .catch(error => {
            setMessage(`🦠 ERRORS at search : ${error.message}`);
        }) 
    }



    return(
        <div className="bg-green-200 px-10 py-10 rounded-md mx-10 w-1/2">
            <TextInput label="Card name" value={card} update={setCard}/>
                <button onClick={makeSearch} className="my-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
            <div className="w-full bg-white rounded-md py-4 px-3">
                <p className="italic font-thin">{messages}</p>
            </div>
            <div className="w-full bg-white rounded-md py-4 px-3 mt-2">
                <p>Recent searches :</p>
                <p className="italic font-thin">{searches.toString()}</p>
            </div>
        </div>
    );
}

export default Search;