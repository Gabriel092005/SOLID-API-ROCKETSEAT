

export class resourceNotFoundError extends Error  //estendendo a classe error tradicional do javascript
{
    constructor(){

        super('Resource Not Found')
    }
}