

export class MaxNumberOfChecKinsError extends Error  //estendendo a classe error tradicional do javascript
{
    constructor(){

        super('Max of checkins reached')
    }
}