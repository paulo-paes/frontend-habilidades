import { Component, OnInit } from "@angular/core";
import { Logs } from "./Logs";
import { LogsService } from "./logs.service";

@Component({
    templateUrl: './logs.component.html',
    styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

    logs: Logs[];

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
                console.log(this.logs)
            })
    }

    formataData(data: Date){
        let dataNaoFormatada = new Date(data)
        let dataFormatada = ((dataNaoFormatada.getDate())) + "/" + ((dataNaoFormatada.getMonth() + 1)) + "/" + dataNaoFormatada.getFullYear();
        let horaFormatada = ((dataNaoFormatada.getHours()) + ":" + (dataNaoFormatada.getMinutes()))
        return {data: dataFormatada, hora: horaFormatada}
    }
    
}