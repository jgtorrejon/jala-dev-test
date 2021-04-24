import {useState} from "react";
import axios from "axios";
import TextInput from "./Inputs/TextInput"

import * as Routes from "../constants/routes";
import * as Keys from "../constants/keys";

function Create(props) {
    const [board, setBoard] = useState("");
    const [list, setList] = useState("");
    const [card, setCard] = useState("");
    const [messages, setMessages] = useState("");

    const credentials = {
        key: Keys.TRELLO_KEY,
        token: Keys.TRELLO_TOKEN
    }

    const newBoard = () => {
        axios.post(Routes.NEW_BOARD, {
            ...credentials,
            name: board,
        })
        .then(res => {
            setMessages(`⭐️ NEW BOARD CREATED : ${res.data.name} : ID - ${res.data.id}`);
        })
        .catch(error => {
            setMessages(`🧨 ERROR at NEW BOARD : ${error.message}`);
        });
    
    }

    const newList = () => {
        axios.post(Routes.NEW_LIST, {
            ...credentials,
            name: list,
            idBoard: board
        })
        .then(res => {
            setMessages(`⭐️ NEW LIST CREATED : ${res.data.name} - ${res.data.id}`);
        })
        .catch(error => {
            setMessages(`🧨 ERROR at NEW LIST : ${error.message}`);
        });
    }

    const newCard = () => {
        axios.post(Routes.NEW_CARD, {
            ...credentials,
            name: card,
            idList: list
        })
        .then(res => {
            setMessages(`⭐️ NEW CARD CREATED : ${res.data.name} - ${res.data.id}`);
        })
        .catch(error => {
            setMessages(`🧨 ERROR at NEW CARD : ${error.message}`);
        });
    }

    return(
        <div className="bg-green-200 px-10 py-10 rounded-md mx-10 w-1/2">
            <TextInput label="Board Name" value={board} update={setBoard} />
            <TextInput label="List Name" value={list} update={setList} />
            <TextInput label="Card Name" value={card} update={setCard} />

            <div className="text-center border-b border-gray-400 space-x-4">
                <button onClick={newBoard} className="my-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Board</button>
                <button onClick={newList} className="my-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create List</button>
                <button onClick={newCard} className="my-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Card</button>
            </div>

            <p className="font-bold mt-3">Output Messages ...</p>
            <p className="italic font-thin mt-4">{messages}</p>
        </div>
    );
}

export default Create;