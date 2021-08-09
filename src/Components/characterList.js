import React from 'react';
import {Link} from 'react-router-dom';

export default class CharacterList extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return  (
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Character Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Occupation
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            DOB
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {this.props.characterArray.map( (character) => (
                                        <tr key={character.char_id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-20 w-20">
                                                        <Link to={`/:${character.name}`}>
                                                        <img className="h-20 w-20 rounded-full" src={character.img} alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{character.name}</div>
                                                        <div className="text-sm text-gray-500">{character.portrayed}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{character.occupation.join(', ')}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{character.birthday}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{character.status}</div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}