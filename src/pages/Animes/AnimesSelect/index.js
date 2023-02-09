import React, { useState } from 'react';
import { SelectTrigger, SelectContent, SelectViewport, SelectItem, SelectContainer, SelectValue } from './styles';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import useAnimeStore from '../../../store/useAnimeStore';

function AnimesSelect2() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const setRating = useAnimeStore(state => state.setRating);

    function handleToggleRatingValue(e) {
        setOpen(false);
        setValue(e);
        setRating(e);
    }

    return (
        <SelectContainer>
            <SelectTrigger onClick={() => setOpen(true)}>
                <SelectValue disabled placeholder={value === '' ? "Rating…" : value} />
                <ChevronDownIcon />
            </SelectTrigger>
            <SelectContent open={open}>
                <SelectViewport>
                    <SelectItem onClick={(e) => handleToggleRatingValue(e.target.value)} value="">Select a rating...</SelectItem>
                    <SelectItem onClick={(e) => handleToggleRatingValue(e.target.value)} value="g">All ages</SelectItem>
                    <SelectItem onClick={(e) => handleToggleRatingValue(e.target.value)} value="pg">Children</SelectItem>
                    <SelectItem onClick={(e) => handleToggleRatingValue(e.target.value)} value="pg13">Teens 13 or older</SelectItem>
                    <SelectItem onClick={(e) => handleToggleRatingValue(e.target.value)} value="pg17">17+ (violence & profanity)</SelectItem>
                    <SelectItem onClick={(e) => handleToggleRatingValue(e.target.value)} value="r">Mild Nudity</SelectItem>
                    <SelectItem onClick={(e) => handleToggleRatingValue(e.target.value)} value="rx">Hentai</SelectItem>
                </SelectViewport>
            </SelectContent>
        </SelectContainer>
    );
}

export default AnimesSelect2;