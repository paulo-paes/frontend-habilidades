import { Component, OnInit } from "@angular/core";
import { Logs } from "./Logs";
import { LogsService } from "./logs.service";

@Component({
    templateUrl: './logs.component.html',
    styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

    logs: Logs[];
    logsAtual: Logs[];
    paginaAtual = 1;

    constructor(
        private logsService: LogsService
    ){}


    ngOnInit(): void {
        this.getLogs()
    }

    getLogs(){
        this.logsService.getLogs()
            .subscribe(logs => {
                this.logs = logs.map(log => {
                    return {
                        ...log,
                        dataHora: this.formataData(log.createdAt)
                    }
                })
                this.atualizaPagina()
            })
    }

    atualizaPagina(){
        this.logsAtual = this.logs.slice((this.paginaAtual * 18) - 18, this.paginaAtual * 18)
    }

    formataData(data: Date){
        let dataNaoFormatada = new Date(data)
        let dataFormatada = ((dataNaoFormatada.getDate())) + "/" + ((dataNaoFormatada.getMonth() + 1)) + "/" + dataNaoFormatada.getFullYear();
        let horaFormatada = ((dataNaoFormatada.getHours()) + ":" + (dataNaoFormatada.getMinutes()))
        return {data: dataFormatada, hora: horaFormatada}
    }

    proximo(){
        if(this.logs[this.logs.length - 1] != this.logsAtual[this.logsAtual.length - 1]){
            this.paginaAtual += 1;
            this.atualizaPagina()
        }
    }

    anterior(){
        if(this.paginaAtual > 1){
            this.paginaAtual -= 1;
            this.atualizaPagina()
        }
    }
    
}