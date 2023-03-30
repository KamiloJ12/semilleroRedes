export interface Evento {
    id: number;
    titulo: string;
    descripcion: string;
    fecha_inicio: Date | string;
    fecha_fin: Date | string;
    url: string;
} 