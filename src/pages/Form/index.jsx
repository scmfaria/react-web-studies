import React, {useState} from 'react';
import './style.scss';

import Icon from '@mdi/react';
import { mdiHeart } from '@mdi/js';

function Form() {
    const [text, setText] = useState('');
    const [textIcon, setTextIcon] = useState('');
    const [select, setSelect] = useState('0');
    const [select02, setSelect02] = useState('');

    return(
        <section>
			<h1>Inputs!</h1>

            <div className="input-content">
                <div className={`input-wrap has-icon ${textIcon && 'active'}`}>
                    <Icon path={mdiHeart} size={1} className="icon"/>
                    <input 
                        id="textIcon" 
                        type="text" 
                        value={textIcon} 
                        onChange={
                            (event) => { 
                                setTextIcon(event.target.value)
                            }
                        }
                    />
                    <label htmlFor="textIcon">Input text with icon!</label>
                </div>

                <div className={`input-wrap ${text && 'active'}`}>
                    <input 
                        id="text" 
                        type="text" 
                        value={text} 
                        onChange={
                            (event) => { 
                                setText(event.target.value)
                            }
                        }
                    />
                    <label htmlFor="text">Input text!</label>
                </div>
            </div>      

            <div className="input-content">
                <div className={`input-wrap ${select && 'active'}`}>
                    <select 
                        name="select" 
                        id="select" 
                        onChange={
                            (event) => { 
                                setSelect(event.target.value)
                            }
                        }>
                        <option value="0">Selecione</option>
                        <option value="1">Option 01</option>
                        <option value="2">Option 02</option>
                        <option value="3">Option 03</option>
                    </select>
                    <label htmlFor="select">Select!</label>
                </div>

                <div className={`input-wrap ${select02 && 'active'}`}>
                    <select 
                        name="select02" 
                        id="select02" 
                        onChange={
                            (event) => { 
                                setSelect02(event.target.value)
                            }
                        }>
                        <option value=""></option>
                        <option value="1">Option 01</option>
                        <option value="2">Option 02</option>
                        <option value="3">Option 03</option>
                    </select>
                    <label htmlFor="select02">Select!</label>
                </div>
            </div>

            <div className="input-wrap">
				<input id="radio" type="radio"/>
				<label htmlFor="radio">Input Radio!</label>
			</div>

			<div className="input-wrap">
				<input id="check" type="checkbox"/>
				<label htmlFor="check">Input Checkbox!</label>
			</div>

		</section>
    )
}

export default Form;