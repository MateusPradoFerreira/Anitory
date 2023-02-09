import React, { useState } from 'react';
import { SelectTrigger, SelectContent, SelectViewport, SelectItem, SelectContainer, SelectValue } from './styles';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import useAnimeStore from '../../../store/useAnimeStore';

function AnimesSelect() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const setOrderBy = useAnimeStore(state => state.setOrderBy);

    function handleToggleOrderValue(e) {
        setOpen(false);
        setValue(e);
        setOrderBy(e);
    }

    return (
        <SelectContainer>
            <SelectTrigger onClick={() => setOpen(true)}>
                <SelectValue disabled placeholder={value === '' ? "Order..." : value} />
                <ChevronDownIcon />
            </SelectTrigger>
            <SelectContent open={open}>
                <SelectViewport>
                    <SelectItem onClick={(e) => handleToggleOrderValue(e.target.value)} value="">Select a order...</SelectItem>
                    <SelectItem onClick={(e) => handleToggleOrderValue(e.target.value)} value="title">Title</SelectItem>
                    <SelectItem onClick={(e) => handleToggleOrderValue(e.target.value)} value="start_date">Start Date</SelectItem>
                    <SelectItem onClick={(e) => handleToggleOrderValue(e.target.value)} value="end_date">End Date</SelectItem>
                    <SelectItem onClick={(e) => handleToggleOrderValue(e.target.value)} value="score">Score</SelectItem>
                    <SelectItem onClick={(e) => handleToggleOrderValue(e.target.value)} value="rank">Rank</SelectItem>
                    <SelectItem onClick={(e) => handleToggleOrderValue(e.target.value)} value="popularity">Popularity</SelectItem>
                    <SelectItem onClick={(e) => handleToggleOrderValue(e.target.value)} value="members">Members</SelectItem>
                    <SelectItem onClick={(e) => handleToggleOrderValue(e.target.value)} value="favorites">Favorites</SelectItem>
                </SelectViewport>
            </SelectContent>
        </SelectContainer>
    );
}

export default AnimesSelect;