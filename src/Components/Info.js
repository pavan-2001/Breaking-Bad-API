import React, {useState, useEffect, useRef} from 'react';
import { useParams } from 'react-router';
import { NameBasedSearch, QuoteBasedSearch } from './api';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Info() {
    let {characterName} = useParams();
    characterName = characterName.replace(':', '');
    let temp = characterName;
    const [characterArray, setCharacterArray] = useState([]);
    const [quoteArray, setQuoteArray] = useState([]);
    let count = 0;

    useEffect(() => {
        if(count === 0) {
            NameBasedSearch(characterName.replace(/\s/g, '+')).then(response => {
                setCharacterArray(response);
            }).catch(error => {
                console.log(error);
            })
            QuoteBasedSearch(characterName.replace(/\s/g, '+')).then(response => {
                setQuoteArray(response);
            }).catch(error => {
                console.log(error);
            });
            const temp2 = characterArray.filter((character) => {
                return character.name === temp;
            });
            count = count + 1;
        }
    }, [count]);

    return (
        <div>
        <CssBaseline/>
        <Container maxWidth="lg" m="50%">
            {characterArray.map((character) => (
                <div className="bg-white divide-y divide-gray-200">
                    <div className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex h-44 w-44">
                                <img className="h-45 w-45 rounded-full" src={character.img} alt="" />
                            </div>
                            <div className="ml-25">
                                <div className="text-xl font-bold text-black-900">{character.name}</div>
                                <div className="text-xl text-gray-500">{character.portrayed}</div>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 py-2 whitespace-wrap">
                        <div className="text-sm text-gray-900"><div className=" py-2 font-bold">Occupation</div>{character.occupation.join(', ')}</div>
                    </div>
                    <div className="px-6 py-2 whitespace-wrap">
                    <div className="text-sm text-gray-900"><div className=" py-2 font-bold">Date Of Birth</div>{character.birthday}</div>
                    </div>
                    <div className="px-6 py-2 whitespace-nowrap">
                    <div className="text-sm text-gray-900"><div className=" py-2 font-bold">Status</div>{character.status ? character.status : "Not Known"}</div>
                    </div>
                    <div className="px-6 py-2 whitespace-nowrap">
                    <div className="text-sm text-gray-900"><div className=" py-2 font-bold">Season Appearances</div>{character.appearance ? character.appearance.join(', ') : "Not Known"}</div>
                    </div>
                    <div>
                        {character.nickname ? <div className="px-6 py-2 whitespace-nowrap">
                            <div className="text-sm text-gray-900"><div className=" py-2 font-bold">Nickname</div>{character.nickname ? character.nickname : "Not Known"}</div>
                            </div> :
                            null 
                        }
                    </div>
                    <div>
                        {quoteArray.length ? 
                            <div className="px-3 py-4">
                            <div className=" px-6 text-xl font-bold ">Quote's</div>
                                <CssBaseline/>
                                <Container>
                                    {
                                        quoteArray.map((quote) => (
                                            <div className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-700 font-bold">{quote.quote}</div>
                                            </div>
                                        ))
                                    }
                                </Container>
                            </div>
                            : <div className=" px-6 py-6 text-xl font-bold ">Quote's Not Available</div>
                        }
                    </div>
                </div>
            ))}
        </Container>
        </div>
    );
}