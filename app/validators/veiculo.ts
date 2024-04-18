import vine, { SimpleMessagesProvider } from '@vinejs/vine'


export const messagesVeiculoProvider =new SimpleMessagesProvider({
    required: 'O campo {{field}} é obrigatório',
    minLength: 'O campo {{field}}  deve ter pelo menos {{min}}  caracteres',
    withoutDecimals: 'O campo {{field}} deve ser inteiro',
    enum: 'A cor {{field}} é inválida',
    'placa.regex': 'A placa deve seguir o formato AAA-9A99 OU AAA-9999',
    'situacao.enum': 'A opção selecionada é inválida',
    'cor.enum': 'A opção selecionada é inválida',
    'min': 'O campo {{field}} deve ser no mínimo {{min}}'
})


export const createVeiculoValidator = vine.compile(


    vine.object(

        {
            marca: vine.string().trim().minLength(3),
            modelo: vine.string().trim().minLength(3),
            renavam: vine.number().min(11),
            cor: vine.enum(['Azul', 'Prata',   'Vermelho', 'Preto', 'Branco']),
            anoFabricacao: vine.number().withoutDecimals().min(2000),
            anoModelo: vine.number().withoutDecimals().min(2000),
            situacao: vine.enum(['liberado', 'manutencao']),
            placa: vine.string().regex(/^[A-Z]{3}-[0-9][A-Z0-9][0-9]{2}$/), 


        }
    )
)