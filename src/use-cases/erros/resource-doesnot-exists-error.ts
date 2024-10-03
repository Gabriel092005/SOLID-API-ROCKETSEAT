
export class resourceDoesNotExistsError extends Error  //estendendo a classe error tradicional do javascript
{
    constructor(){

        super('resource does not exists')
    }
}