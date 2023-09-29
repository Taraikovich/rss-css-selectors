export function setLevel(level = 0): void {
    localStorage.setItem('curentLevel', level.toString());
}

export function getLevel(): number {
    if (localStorage.getItem('curentLevel')) {
        return Number(localStorage.getItem('curentLevel'));
    } else {
        setLevel();
        return Number(localStorage.getItem('curentLevel'));
    }
}

export function setCompleteLevel(level: number): void {
    if (!localStorage.getItem('completeLevels')) {
        localStorage.setItem('completeLevels', level.toString());
    } else {
        const storedLevels: string | null = localStorage.getItem('completeLevels');
        const levels: number[] = storedLevels
            ? storedLevels.split(',').map((item) => Number(item))
            : [];
        if (!levels.includes(level)) levels.push(level);
        localStorage.setItem('completeLevels', levels.join(','));
    }
}

export function getCompleteLevel(): number[] | [] {
    const localStorageValue = localStorage.getItem('completeLevels');

    if (localStorageValue) {
        return localStorageValue
            .split(',')
            .map((item) => Number(item));
    } else {
        return [];
    }
}

export function resetCompleteLevel(): void {
    localStorage.setItem('completeLevels', '')
    localStorage.setItem('heldedLevels', '')
}

export function setHelpedLevel(level: number): void {
    if (!localStorage.getItem('heldedLevels')) {
        localStorage.setItem('heldedLevels', level.toString());
    } else {
        const storedLevels: string | null = localStorage.getItem('heldedLevels');
        const levels: number[] = storedLevels
            ? storedLevels.split(',').map((item) => Number(item))
            : [];
        if (!levels.includes(level)) levels.push(level);
        localStorage.setItem('heldedLevels', levels.join(','));
    }
}

export function getHelpedLevels(): number[] | [] {
    const localStorageValue = localStorage.getItem('heldedLevels');

    if (localStorageValue) {
        return localStorageValue
            .split(',')
            .map((item) => Number(item));
    } else {
        return [];
    }
}