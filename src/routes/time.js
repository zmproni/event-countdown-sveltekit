import { readable } from "svelte/store";
import { DateTime } from 'luxon'

export const current = readable(DateTime.now(), function start(set) {
    const interval = setInterval(() => {
        set(DateTime.now());
    }, 1000);
    
    return function stop() {
        clearInterval(interval);
    };
});

