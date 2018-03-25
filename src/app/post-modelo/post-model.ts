export class Post {
    id: number;
    nome_pessoa: string;
    texto: string;
    qtd_likes: number;

    constructor (id, nome_pessoa, texto, qtd_likes){
        this.id = id;
        this.nome_pessoa = nome_pessoa;
        this.texto = texto;
        this.qtd_likes = qtd_likes;
    }
}