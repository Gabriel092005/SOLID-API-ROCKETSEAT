

export class UserAreadyExistsError extends Error  //estendendo a classe error tradicional do javascript
{
    constructor(){

        super('E-mail already exists')
    }
}