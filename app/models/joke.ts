export interface IJoke {
    setup: string;
    punchline: string;
    hide: boolean;
}

export class Joke implements IJoke {
    public hide: boolean;

    constructor(public setup: string, public punchline: string) {
        this.hide = true;
    }

    togglePunchline(): void {
        this.hide = !this.hide;
    }
}