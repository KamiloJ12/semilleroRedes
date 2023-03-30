export interface Miembro {
    id?: number;
    nombre: string;
    correo: string;
    avatar?: string;
    celular: string;
    fecha_ingreso: Date | string;
}