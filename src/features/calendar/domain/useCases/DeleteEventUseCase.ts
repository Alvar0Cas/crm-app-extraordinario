import { CalendarEvent } from "../entities/event";
import { CalendarRepository } from "../repository/CalendarRepository";


//creacion del usecase
export class DeleteEventUseCase {
    //inyectamos el repo atraves del constructor y private para asegurar uqe solo atraves de el sea accesible
    constructor(private repository: CalendarRepository){}

    //creación del metodo de la clasee para poder eliminar el evento através del id
    async execute(id: string):Promise<void>{
        return this.repository.deleteEvent(id);
    }
}