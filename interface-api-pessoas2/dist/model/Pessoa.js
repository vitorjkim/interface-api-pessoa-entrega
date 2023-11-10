"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(_nome, _anoNascimento) {
        this.nome = _nome;
        this.anoNascimento = _anoNascimento;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    getNome() {
        return this.nome;
    }
    setAnoNascimento(_anoNascimento) {
        this.anoNascimento = _anoNascimento;
    }
    getAnoNascimento() {
        return this.anoNascimento;
    }
}
exports.Pessoa = Pessoa;
const p1 = new Pessoa('Vitor Joaquim', 16);
console.log(p1);
p1.setNome('joaquim');
console.log(p1);
p1.setNome('vitor');
console.log(p1.getNome());
console.log(p1.getAnoNascimento());
//# sourceMappingURL=pessoa.js.map