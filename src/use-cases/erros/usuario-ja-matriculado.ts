

export class UserIdDoesNotExists extends Error  //estendendo a classe error tradicional do javascript
{
    constructor(){

        super('Usuario ja esta matriculado nessa escola')
    }
}